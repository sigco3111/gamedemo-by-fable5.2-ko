import * as THREE from 'three';
import { WORLD, terrainHeight, plateauMask, forestMask, ruinsMask, pathDist, yardMask } from './layout';
import { lerp, smoothstep, noise2, saturate, clamp } from '../core/math';
import { toon } from '../render/toon';

const lin2srgb = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
const C = (hex: string) => new THREE.Color(hex);
const PAL = {
  g1: C('#5fa544'), g2: C('#86c653'), gForest: C('#3f8440'), gHigh: C('#a9c468'),
  dirt: C('#b89a68'), stone: C('#b9b3a4'), stone2: C('#a39d90'), sand: C('#ead9a4'), seabed: C('#7fa39a'),
  rock1: C('#948b7d'), rock2: C('#6f6a66'), yard: C('#d9c9a2'), slate: C('#7f8894'),
};

/** 地形：高度场网格 + 给草和水用的数据贴图 + 小地图底图 */
export class Terrain {
  readonly n = WORLD.n;
  readonly heights = new Float32Array(WORLD.n * WORLD.n);
  mesh!: THREE.Mesh;
  /** RGBA 浮点：r = 高度，g = 草密度 */
  dataTex!: THREE.DataTexture;
  /** RGBA8：rgb = 地面颜色，a = 高度编码（给水算深浅） */
  colorTex!: THREE.DataTexture;
  mapCanvas!: HTMLCanvasElement;

  constructor() { this.build(); }

  private H(i: number, j: number) {
    const n = this.n;
    return this.heights[clamp(j, 0, n - 1) * n + clamp(i, 0, n - 1)];
  }

  private build() {
    const n = this.n, c = WORLD.cell, half = WORLD.half;
    for (let j = 0; j < n; j++)
      for (let i = 0; i < n; i++) this.heights[j * n + i] = terrainHeight(-half + i * c, -half + j * c);

    const pos = new Float32Array(n * n * 3), nor = new Float32Array(n * n * 3);
    const colr = new Float32Array(n * n * 3), uv = new Float32Array(n * n * 2);
    const data = new Float32Array(n * n * 4), bytes = new Uint8Array(n * n * 4);
    const cc = new THREE.Color(), rock = new THREE.Color(), v = new THREE.Vector3();

    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const k = j * n + i, x = -half + i * c, z = -half + j * c, h = this.heights[k];
        v.set(this.H(i - 1, j) - this.H(i + 1, j), 2 * c, this.H(i, j - 1) - this.H(i, j + 1)).normalize();
        pos[k * 3] = x; pos[k * 3 + 1] = h; pos[k * 3 + 2] = z;
        nor[k * 3] = v.x; nor[k * 3 + 1] = v.y; nor[k * 3 + 2] = v.z;
        uv[k * 2] = i / (n - 1); uv[k * 2 + 1] = j / (n - 1);

        const nA = noise2(x * 0.05, z * 0.05), nB = noise2(x * 0.011 + 20, z * 0.011 + 31);
        const fm = forestMask(x, z), { m2 } = plateauMask(x, z), rm = ruinsMask(x, z);
        cc.copy(PAL.g1).lerp(PAL.g2, saturate(0.5 + 0.55 * nB + 0.25 * nA));
        cc.lerp(PAL.gForest, fm * 0.8).lerp(PAL.gHigh, m2 * 0.85);
        const pm = h > 1 ? smoothstep(3.2, 1.6, pathDist(x, z)) * (1 - m2) : 0;
        cc.lerp(PAL.dirt, pm * 0.85);
        const yd = yardMask(x, z);
        cc.lerp(yd.tech ? PAL.slate : PAL.yard, yd.m * 0.9);
        cc.lerp(nA > 0.1 ? PAL.stone2 : PAL.stone, rm);
        const sm = smoothstep(2.2, 0.9, h);
        cc.lerp(PAL.sand, sm);
        cc.lerp(PAL.seabed, smoothstep(0, -3.5, h));
        const rk = smoothstep(0.82, 0.64, v.y);
        rock.copy(PAL.rock1).lerp(PAL.rock2, saturate(0.5 + 0.5 * Math.sin(h * 0.9 + nA * 3)));
        cc.lerp(rock, rk);

        colr[k * 3] = cc.r; colr[k * 3 + 1] = cc.g; colr[k * 3 + 2] = cc.b;
        data[k * 4] = h;
        data[k * 4 + 1] = h > 1.3 ? (1 - rk) * (1 - pm) * (1 - rm) * (1 - sm) * (1 - yd.m) * lerp(1, 0.5, fm) : 0;
        bytes[k * 4] = lin2srgb(cc.r) * 255; bytes[k * 4 + 1] = lin2srgb(cc.g) * 255; bytes[k * 4 + 2] = lin2srgb(cc.b) * 255;
        bytes[k * 4 + 3] = saturate((h + 8) / 16) * 255;
      }
    }

    const idx = new Uint32Array((n - 1) * (n - 1) * 6);
    let q = 0;
    for (let j = 0; j < n - 1; j++) {
      for (let i = 0; i < n - 1; i++) {
        const a = j * n + i, b = a + 1, d = a + n, e = d + 1;
        idx[q++] = a; idx[q++] = d; idx[q++] = b;
        idx[q++] = b; idx[q++] = d; idx[q++] = e;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colr, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeBoundingSphere();

    const mat = toon({ vertexColors: true, map: this.detailTexture(), grad: 'ground' });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.receiveShadow = true;
    this.mesh.matrixAutoUpdate = false;

    this.dataTex = new THREE.DataTexture(data, n, n, THREE.RGBAFormat, THREE.FloatType);
    this.dataTex.minFilter = this.dataTex.magFilter = THREE.NearestFilter;
    this.dataTex.needsUpdate = true;
    this.colorTex = new THREE.DataTexture(bytes, n, n, THREE.RGBAFormat, THREE.UnsignedByteType);
    this.colorTex.colorSpace = THREE.SRGBColorSpace;
    this.colorTex.minFilter = this.colorTex.magFilter = THREE.LinearFilter;
    this.colorTex.needsUpdate = true;

    this.mapCanvas = this.buildMap(bytes, nor);
  }

  /** 一张可平铺的细节贴图，打破大片纯色 */
  private detailTexture() {
    const S = 256, cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const g = cv.getContext('2d')!;
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, S, S);
    let seed = 7;
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 900; i++) {
      const x = r() * S, y = r() * S, len = 3 + r() * 7, dark = r() < 0.6;
      g.strokeStyle = dark ? `rgba(40,70,30,${0.05 + r() * 0.08})` : `rgba(255,255,220,${0.06 + r() * 0.1})`;
      g.lineWidth = 1 + r() * 1.5;
      for (const ox of [-S, 0, S])
        for (const oy of [-S, 0, S]) {
          g.beginPath();
          g.moveTo(x + ox, y + oy);
          g.lineTo(x + ox + (r() - 0.5) * 3, y + oy - len);
          g.stroke();
        }
    }
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(120, 120);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }

  private buildMap(bytes: Uint8Array, nor: Float32Array) {
    const S = 512, n = this.n, cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const g = cv.getContext('2d')!, img = g.createImageData(S, S);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const i = Math.round((x / (S - 1)) * (n - 1)), j = Math.round((y / (S - 1)) * (n - 1)), k = j * n + i;
        const h = this.heights[k];
        const shade = clamp(0.62 + 0.9 * (nor[k * 3] * -0.5 + nor[k * 3 + 2] * -0.5) + 0.3 * nor[k * 3 + 1], 0.45, 1.2);
        let r = bytes[k * 4] * shade, gg = bytes[k * 4 + 1] * shade, b = bytes[k * 4 + 2] * shade;
        if (h < 0) {
          const d = saturate(-h / 6);
          r = lerp(120, 52, d); gg = lerp(190, 120, d); b = lerp(215, 185, d);
        }
        const o = (y * S + x) * 4;
        img.data[o] = r; img.data[o + 1] = gg; img.data[o + 2] = b; img.data[o + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    return cv;
  }

  /** 和网格三角形完全一致的高度查询 */
  heightAt(x: number, z: number) {
    const n = this.n, c = WORLD.cell;
    const gx = clamp((x + WORLD.half) / c, 0, n - 1.001), gz = clamp((z + WORLD.half) / c, 0, n - 1.001);
    const i = Math.floor(gx), j = Math.floor(gz), fx = gx - i, fz = gz - j, k = j * n + i;
    const ha = this.heights[k], hb = this.heights[k + 1], hd = this.heights[k + n], he = this.heights[k + n + 1];
    return fx + fz <= 1 ? ha + (hb - ha) * fx + (hd - ha) * fz : he + (hd - he) * (1 - fx) + (hb - he) * (1 - fz);
  }

  normalAt(x: number, z: number, out: THREE.Vector3) {
    const e = 0.9;
    return out
      .set(this.heightAt(x - e, z) - this.heightAt(x + e, z), 2 * e, this.heightAt(x, z - e) - this.heightAt(x, z + e))
      .normalize();
  }
}
