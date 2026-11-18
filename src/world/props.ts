import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { toon } from '../render/toon';
import { paint, xf, merge, lathe, blob } from '../render/geoutil';
import { mulberry32, noise2, lerp, saturate } from '../core/math';
import { POI, forestMask, plateauMask, ruinsMask, pathDist } from './layout';
import type { Terrain } from './terrain';
import type { Colliders } from './colliders';

const C = (h: string) => new THREE.Color(h);
const STONE = [C('#cfc8b6'), C('#b3ac9c'), C('#978f82')];
const MOSS = C('#7d9a5e');

// ---------- 单体模型 ----------
function foliage(blobs: [number, number, number, number][], lo: THREE.Color, hi: THREE.Color, seed: number) {
  let y0 = 1e9, y1 = -1e9;
  for (const b of blobs) { y0 = Math.min(y0, b[1] - b[3]); y1 = Math.max(y1, b[1] + b[3]); }
  return blobs.map((b, i) => {
    const g = xf(blob(b[3], 2, 0.13, seed + i * 3.7), [b[0], b[1], b[2]], null, [1, 0.82, 1]);
    return paint(g, (p, n, out) => out.copy(lo).lerp(hi, saturate(((p.y - y0) / (y1 - y0)) * 0.75 + n.y * 0.3)));
  });
}
function trunk(h: number, r0: number, r1: number, bend: number) {
  const g = new THREE.CylinderGeometry(r1, r0, h, 7, 4);
  g.translate(0, h / 2, 0);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) p.setX(i, p.getX(i) + bend * Math.pow(p.getY(i) / h, 2));
  g.computeVertexNormals();
  return paint(g, (v, _n, out) => out.set('#8a6846').lerp(C('#5e4630'), saturate(1 - v.y / h) * 0.7));
}
function broadleaf(seed: number, lo: string, hi: string) {
  const r = mulberry32(seed), bl: [number, number, number, number][] = [[0.15, 4.4, 0, 1.75]];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 6.283 + r(), d = 0.9 + r() * 0.5;
    bl.push([Math.cos(a) * d + 0.15, 3.5 + r() * 1.5, Math.sin(a) * d, 1.0 + r() * 0.4]);
  }
  const br = xf(paint(new THREE.CylinderGeometry(0.05, 0.1, 1.5, 5), '#6e5238'), [0.55, 2.7, 0.1], [0, 0, -0.9]);
  return merge([trunk(3.4, 0.33, 0.15, 0.15), br, ...foliage(bl, C(lo), C(hi), seed)]);
}
function conifer(seed: number) {
  const parts: THREE.BufferGeometry[] = [trunk(2.4, 0.26, 0.13, 0)];
  const tiers: [number, number, number][] = [[1.75, 2.0, 2.5], [1.4, 1.8, 3.6], [1.05, 1.6, 4.6], [0.7, 1.5, 5.6]];
  tiers.forEach(([rad, h, y], i) => {
    const g = new THREE.ConeGeometry(rad, h, 9, 1, true);
    g.rotateY(seed + i);
    g.translate(0, y, 0);
    parts.push(paint(g, (p, _n, out) => out.set('#2c6a4c').lerp(C('#5aa868'), saturate((p.y - 1.6) / 5.2))));
  });
  return merge(parts);
}
function bush(seed: number) {
  return merge(foliage([[0, 0.45, 0, 0.62], [0.5, 0.35, 0.2, 0.45], [-0.45, 0.33, -0.2, 0.42], [0.1, 0.36, -0.5, 0.4]], C('#3f8d3f'), C('#8fd15b'), seed));
}
function rock(seed: number) {
  const g = xf(blob(1, 1, 0.24, seed, true), [0, 0.35, 0], null, [1, 0.72, 0.9]);
  return paint(g, (p, n, out) => out.copy(STONE[2]).lerp(STONE[0], saturate(n.y * 0.6 + 0.35)).lerp(MOSS, saturate(0.25 - p.y) * 0.5));
}
function flower() {
  const parts: THREE.BufferGeometry[] = [paint(xf(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 4), [0, 0.15, 0]), '#4d8f3c')];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 6.283;
    parts.push(paint(xf(new THREE.CircleGeometry(0.07, 6), [Math.cos(a) * 0.07, 0.31, Math.sin(a) * 0.07], [-1.3, 0, 0]), '#ffffff'));
  }
  parts.push(paint(xf(new THREE.SphereGeometry(0.035, 6, 4), [0, 0.32, 0]), '#ffd24a'));
  return merge(parts);
}

const stoneTint = (h: number, base = 0) => (p: THREE.Vector3, _n: THREE.Vector3, out: THREE.Color) => {
  const k = noise2(p.x * 1.7 + base, p.y * 1.3 + p.z * 1.9);
  out.copy(STONE[1]).lerp(k > 0 ? STONE[0] : STONE[2], Math.abs(k) * 0.9).lerp(MOSS, saturate(0.5 - p.y / Math.max(h, 0.5)) * 0.55);
};
/** 石柱：base 在原点。broken 时是半截。 */
export function pillarGeo(h: number, broken: boolean) {
  const prof: [number, number][] = [[0.0, 0], [0.66, 0], [0.66, 0.22], [0.52, 0.3], [0.44, 0.42], [0.4, h * 0.6], [0.37, h - 0.42]];
  if (!broken) prof.push([0.42, h - 0.36], [0.56, h - 0.2], [0.64, h - 0.16], [0.64, h], [0, h]);
  else prof.push([0.36, h - 0.1], [0.2, h + 0.08], [0, h]);
  return paint(lathe(prof, 12), stoneTint(h, h * 3.1));
}
/** 残墙：由一块块砖砌成，顶上缺几块 */
export function wallGeo(len: number, h: number, thick: number, seed: number) {
  const r = mulberry32(seed), parts: THREE.BufferGeometry[] = [], bh = 0.62, rows = Math.round(h / bh);
  for (let j = 0; j <= rows; j++) {
    let x = -len / 2 - (j % 2) * 0.35;
    while (x < len / 2) {
      const w = 0.95 + r() * 0.5, x1 = Math.min(x + w, len / 2), x0 = Math.max(x, -len / 2);
      if (x1 - x0 > 0.25 && !(j === rows && r() < 0.62)) {
        const g = new RoundedBoxGeometry(x1 - x0 - 0.03, bh - 0.03, thick + (r() - 0.5) * 0.06, 1, 0.045);
        parts.push(xf(g, [(x0 + x1) / 2, j * bh + bh / 2, 0]));
      }
      x += w;
    }
  }
  return paint(merge(parts), stoneTint(h, seed));
}
function towerGeo(w: number, h: number) {
  const parts: THREE.BufferGeometry[] = [xf(new THREE.BoxGeometry(w, h, w), [0, h / 2, 0])];
  for (const y of [h * 0.34, h * 0.67, h - 0.2]) parts.push(xf(new THREE.BoxGeometry(w + 0.4, 0.4, w + 0.4), [0, y, 0]));
  for (let i = -1; i <= 1; i++)
    for (const s of [-1, 1]) {
      parts.push(xf(new THREE.BoxGeometry(1.1, 0.8, 0.5), [i * (w / 2 - 0.75), h + 0.4, s * (w / 2 - 0.05)]));
      parts.push(xf(new THREE.BoxGeometry(0.5, 0.8, 1.1), [s * (w / 2 - 0.05), h + 0.4, i * (w / 2 - 0.75)]));
    }
  const g = paint(merge(parts), stoneTint(h, 4.2));
  const dark: THREE.BufferGeometry[] = [];
  for (let k = 0; k < 4; k++) {
    const a = (k * Math.PI) / 2;
    dark.push(xf(new THREE.BoxGeometry(0.5, 1.5, 0.12), [Math.sin(a) * (w / 2 + 0.01), h * 0.5, Math.cos(a) * (w / 2 + 0.01)], [0, a, 0]));
    dark.push(xf(new THREE.BoxGeometry(0.5, 1.5, 0.12), [Math.sin(a) * (w / 2 + 0.01), h * 0.82, Math.cos(a) * (w / 2 + 0.01)], [0, a, 0]));
  }
  dark.push(xf(new THREE.BoxGeometry(1.6, 2.6, 0.14), [0, 1.3, w / 2 + 0.01]));
  return merge([g, paint(merge(dark), '#3b3640')]);
}

interface Inst { x: number; y: number; z: number; s: number; rot: number; tint: THREE.Color }

/** 场景里的静态摆设：树、灌木、花、石头、遗迹。负责建模、摆放和登记碰撞体。 */
export class Props {
  readonly wind = { value: 0 };
  private keepOut: { x: number; z: number; r: number }[] = [];
  private ruinParts: THREE.BufferGeometry[] = [];
  readonly blossoms: THREE.Vector3[] = [];
  /** 柱顶之类适合放收集物的高点 */
  readonly perches: THREE.Vector3[] = [];

  constructor(private scene: THREE.Scene, private terrain: Terrain, private col: Colliders) {}

  reserve(x: number, z: number, r: number) { this.keepOut.push({ x, z, r }); }
  private free(x: number, z: number, pad = 0) { return !this.keepOut.some((k) => Math.hypot(x - k.x, z - k.z) < k.r + pad); }

  // ----- 遗迹构件：几何体先攒着，最后合成一个网格 -----
  pillar(x: number, z: number, h: number, broken = false) {
    const y = this.terrain.heightAt(x, z) - 0.1;
    this.ruinParts.push(xf(pillarGeo(h, broken), [x, y, z], [0, x * 3.3, 0]));
    this.col.addCyl(x, z, 0.6, y, y + h);
    this.reserve(x, z, 1.6);
    if (!broken) this.perches.push(new THREE.Vector3(x, y + h, z));
  }
  wall(x: number, z: number, len: number, h: number, yaw: number, seed = 1) {
    const y = this.terrain.heightAt(x, z) - 0.25, thick = 0.9;
    this.ruinParts.push(xf(wallGeo(len, h, thick, seed), [x, y, z], [0, yaw, 0]));
    this.col.addBox(x, z, len / 2, thick / 2, yaw, y, y + Math.round(h / 0.62) * 0.62, true);
    this.reserve(x, z, len / 2 + 1);
  }
  arch(x: number, z: number, yaw: number) {
    const dx = Math.cos(yaw) * 2.3, dz = -Math.sin(yaw) * 2.3;
    this.pillar(x + dx, z + dz, 4.6);
    this.pillar(x - dx, z - dz, 4.6);
    const y = this.terrain.heightAt(x, z) + 4.4;
    const g = paint(new THREE.TorusGeometry(2.3, 0.42, 6, 14, Math.PI), stoneTint(3, 9));
    this.ruinParts.push(xf(g, [x, y, z], [0, yaw, 0]));
  }
  slab(x: number, z: number, r: number, h = 0.28) {
    const y = this.terrain.heightAt(x, z) - 0.05;
    const prof: [number, number][] = [[0, h], [r * 0.25, h], [r * 0.5, h], [r * 0.75, h], [r - 0.12, h], [r, h - 0.1], [r + 0.2, 0]];
    const g = paint(lathe(prof.reverse(), 32), (p, _n, o) => o.copy(STONE[0]).lerp(STONE[2], saturate(Math.abs(noise2(p.x * 0.5, p.z * 0.5)) * 0.9)));
    this.ruinParts.push(xf(g, [x, y, z]));
    this.col.addCyl(x, z, r, y - 1, y + h);
  }
  tower(x: number, z: number, w = 7, h = 15) {
    const y = this.terrain.heightAt(x, z) - 0.6;
    this.ruinParts.push(xf(towerGeo(w, h), [x, y, z]));
    this.col.addBox(x, z, w / 2, w / 2, 0, y, y + h, true);
    this.reserve(x, z, w);
    return y + h;
  }
  /** 敌人营地的布景：篝火圈、木栅栏、旗杆 */
  camp(x: number, z: number, seed: number) {
    const r = mulberry32(seed), parts: THREE.BufferGeometry[] = [], y = this.terrain.heightAt(x, z);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * 6.283;
      parts.push(xf(rock(i + seed), [x + Math.cos(a) * 0.8, y - 0.1, z + Math.sin(a) * 0.8], [0, a, 0], 0.26));
    }
    for (let i = 0; i < 3; i++) parts.push(paint(xf(new THREE.CylinderGeometry(0.07, 0.07, 1.1, 5), [x, y + 0.14, z], [1.45, i * 2.1, 0]), '#5a4028'));
    for (let k = 0; k < 4; k++) {
      const a = r() * 6.283, d = 7 + r() * 2.5, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d, py = this.terrain.heightAt(px, pz);
      for (let i = -2; i <= 2; i++) {
        const g = new THREE.CylinderGeometry(0.04, 0.13, 1.7 + r() * 0.5, 5);
        parts.push(paint(xf(g, [px + Math.cos(a + 1.571) * i * 0.42, py + 0.8, pz + Math.sin(a + 1.571) * i * 0.42], [(r() - 0.5) * 0.3, 0, (r() - 0.5) * 0.3]), '#7a5a3a'));
      }
      this.col.addBox(px, pz, 1.1, 0.25, -a - 1.571, py, py + 1.6, false);
    }
    const bx = x + 3.2, bz = z - 2.6, by = this.terrain.heightAt(bx, bz);
    parts.push(paint(xf(new THREE.CylinderGeometry(0.05, 0.07, 4.2, 6), [bx, by + 2.1, bz]), '#4a3a2c'));
    parts.push(paint(xf(new THREE.PlaneGeometry(1.1, 1.7, 2, 3), [bx + 0.6, by + 3.2, bz]), '#8a2f3a'));
    this.ruinParts.push(...parts);
    this.col.addCyl(x, z, 0.9, y - 1, y + 0.5);
    this.reserve(x, z, 11);
    return new THREE.Vector3(x, y + 0.35, z);
  }

  private instanced(geo: THREE.BufferGeometry, list: Inst[], sway: boolean, shadow = true) {
    if (!list.length) return;
    const mat = toon({ vertexColors: true, grad: 'soft', side: THREE.DoubleSide });
    if (sway) {
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.uWind = this.wind;
        sh.vertexShader = sh.vertexShader
          .replace('#include <common>', '#include <common>\nuniform float uWind;')
          .replace('#include <begin_vertex>', /* glsl */ `
            vec3 transformed = vec3(position);
            #ifdef USE_INSTANCING
              float ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.23;
              float sw = sin(uWind * 1.3 + ph) * 0.5 + sin(uWind * 2.9 + ph * 1.7) * 0.2;
              float hh = max(position.y - 1.2, 0.0);
              transformed.x += sw * 0.04 * hh; transformed.z += sw * 0.025 * hh;
              transformed += normal * sin(uWind * 3.1 + position.x * 3.0 + position.y * 4.0 + ph) * 0.03 * step(1.6, position.y);
            #endif`);
      };
    }
    const m = new THREE.InstancedMesh(geo, mat, list.length), o = new THREE.Object3D();
    list.forEach((it, i) => {
      o.position.set(it.x, it.y, it.z);
      o.rotation.set(0, it.rot, 0);
      o.scale.setScalar(it.s);
      o.updateMatrix();
      m.setMatrixAt(i, o.matrix);
      m.setColorAt(i, it.tint);
    });
    m.castShadow = shadow;
    // 树冠是鼓起来的圆球，接收阴影会出一道道条纹，所以会摆动的植被都不接
    m.receiveShadow = !sway;
    m.computeBoundingSphere();
    this.scene.add(m);
  }

  /** 撒植被和石头。要在所有 reserve / 遗迹构件登记完之后调用。 */
  scatter() {
    const r = mulberry32(4242), T = this.terrain, nrm = new THREE.Vector3();
    const trees: Inst[][] = [[], [], [], [], []]; // 阔叶 A/B、针叶、花树、（保留）
    const taken: [number, number][] = [];
    const tint = (v: number) => new THREE.Color().setScalar(1 - v * r()).multiply(new THREE.Color(1, 1 - 0.08 * r(), 1 - 0.1 * r()));

    const placeTree = (x: number, z: number, kind: number, s: number) => {
      const y = T.heightAt(x, z) - 0.15;
      trees[kind].push({ x, y, z, s, rot: r() * 6.283, tint: tint(0.18) });
      this.col.addCyl(x, z, 0.34 * s, y, y + 6 * s);
      taken.push([x, z]);
      if (kind === 3) this.blossoms.push(new THREE.Vector3(x, y + 4.5 * s, z));
    };
    // 固定位置的花树：湖心岛、起点、遗迹旁
    for (const [x, z, s] of [[POI.islet.x - 3, POI.islet.z + 2, 1.35], [POI.start.x + 15, POI.start.z + 9, 1.1], [POI.ruins.x + 36, POI.ruins.z - 14, 1.2], [POI.tower.x - 13, POI.tower.z + 10, 1.0]] as const) {
      placeTree(x, z, 3, s);
      this.reserve(x, z, 3);
    }
    for (let i = 0; i < 5200 && taken.length < 640; i++) {
      const x = (r() - 0.5) * 600, z = (r() - 0.5) * 600, h = T.heightAt(x, z);
      if (h < 2 || T.normalAt(x, z, nrm).y < 0.88 || ruinsMask(x, z) > 0.02 || pathDist(x, z) < 3.6 || !this.free(x, z, 2.5)) continue;
      const fm = forestMask(x, z), { m2, m1 } = plateauMask(x, z);
      const clump = noise2(x * 0.021 + 13, z * 0.021 + 7);
      const prob = m2 > 0.5 ? 0.1 : m1 > 0.05 ? 0 : lerp(clump > 0.28 ? 0.34 : 0.05, 0.95, fm);
      if (r() > prob || taken.some((t) => Math.hypot(t[0] - x, t[1] - z) < 3.4)) continue;
      const kind = m2 > 0.5 ? 2 : fm > 0.3 && r() < 0.45 ? 2 : r() < 0.5 ? 0 : 1;
      placeTree(x, z, kind, 0.85 + r() * 0.55);
    }
    this.instanced(broadleaf(3, '#3f8f3e', '#93d65c'), trees[0], true);
    this.instanced(broadleaf(8, '#4a9440', '#b4dd62'), trees[1], true);
    this.instanced(conifer(2), trees[2], true);
    this.instanced(broadleaf(5, '#f58fb8', '#ffe0ec'), trees[3], true);

    const rocks: Inst[][] = [[], []], bushes: Inst[] = [], flowers: Inst[] = [];
    for (let i = 0; i < 1500 && rocks[0].length + rocks[1].length < 240; i++) {
      const x = (r() - 0.5) * 610, z = (r() - 0.5) * 610, h = T.heightAt(x, z), ny = T.normalAt(x, z, nrm).y;
      if (h < -1 || ny < 0.6 || ruinsMask(x, z) > 0.02 || pathDist(x, z) < 2.5 || !this.free(x, z, 2)) continue;
      const likes = ny < 0.9 || h < 2.2 || plateauMask(x, z).m1 > 0.1 ? 0.8 : 0.1;
      if (r() > likes) continue;
      const s = 0.45 + Math.pow(r(), 2.2) * 2.4;
      rocks[i % 2].push({ x, y: h - 0.12 * s, z, s, rot: r() * 6.283, tint: tint(0.2) });
      if (s > 1.1) this.col.addCyl(x, z, 0.8 * s, h - 1, h + 0.92 * s);
    }
    this.instanced(rock(1.3), rocks[0], false);
    this.instanced(rock(5.9), rocks[1], false);

    for (let i = 0; i < 4000 && bushes.length < 420; i++) {
      const x = (r() - 0.5) * 600, z = (r() - 0.5) * 600, h = T.heightAt(x, z);
      if (h < 1.8 || T.normalAt(x, z, nrm).y < 0.86 || ruinsMask(x, z) > 0.02 || pathDist(x, z) < 2.6 || !this.free(x, z, 1)) continue;
      if (r() > 0.12 + forestMask(x, z) * 0.5) continue;
      bushes.push({ x, y: h - 0.08, z, s: 0.7 + r() * 0.9, rot: r() * 6.283, tint: tint(0.2) });
    }
    this.instanced(bush(2), bushes, true, false);

    const fcol = [C('#ffffff'), C('#ffe27a'), C('#9fd0ff'), C('#ffb0d0'), C('#d8b8ff')];
    for (let i = 0; i < 30000 && flowers.length < 2600; i++) {
      const x = (r() - 0.5) * 590, z = (r() - 0.5) * 590, h = T.heightAt(x, z);
      if (h < 1.8 || T.normalAt(x, z, nrm).y < 0.9 || ruinsMask(x, z) > 0.02 || pathDist(x, z) < 2) continue;
      const patch = noise2(x * 0.045 + 31, z * 0.045 + 17);
      if (patch < 0.22) continue;
      flowers.push({ x, y: h - 0.02, z, s: 0.8 + r() * 0.7, rot: r() * 6.283, tint: fcol[Math.floor(saturate(noise2(x * 0.02, z * 0.02) * 0.5 + 0.5) * 4.99)] });
    }
    this.instanced(flower(), flowers, false, false);

    if (this.ruinParts.length) {
      const m = new THREE.Mesh(merge(this.ruinParts), toon({ vertexColors: true, grad: 'soft', side: THREE.DoubleSide }));
      m.castShadow = m.receiveShadow = true;
      this.scene.add(m);
      this.ruinParts.length = 0;
    }
  }

  update(dt: number) { this.wind.value += dt; }
}
