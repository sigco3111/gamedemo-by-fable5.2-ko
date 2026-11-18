import * as THREE from 'three';
import { paint, xf, merge, mergeGeometries } from '../render/geoutil';
import { toon, glowMat } from '../render/toon';
import { mulberry32, saturate } from '../core/math';
import { PATHS, GPUS, DATACENTER, HOUSES, samplePath, ruinsMask } from './layout';
import type { Terrain } from './terrain';
import type { Colliders } from './colliders';
import type { Fx } from '../render/fx';

type V3 = [number, number, number];
type C = THREE.ColorRepresentation;
const FONT = '"Microsoft YaHei", "PingFang SC", sans-serif';
const MONO = 'Consolas, "Courier New", monospace';
/** 所有会动的发光材质共用的时间和昼夜 */
const U = { uTime: { value: 0 }, uNight: { value: 0 } };

function shaderMat(vs: string, fs: string, extra: Record<string, THREE.IUniform> = {}, o: THREE.ShaderMaterialParameters = {}) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog]) as Record<string, THREE.IUniform>;
  Object.assign(uniforms, U, extra);
  return new THREE.ShaderMaterial({ uniforms, vertexShader: vs, fragmentShader: fs, fog: true, ...o });
}
/** 指示灯：每颗灯按自己的节奏一明一灭 */
const blinkMat = () => shaderMat(/* glsl */ `
  attribute vec3 color; attribute float aPhase; uniform float uTime; varying vec3 vC;
  #include <fog_pars_vertex>
  void main() {
    float on = step(0.3, fract(uTime * (0.5 + fract(aPhase * 7.31) * 1.7) + aPhase * 13.0));
    vC = color * (0.3 + 1.5 * on);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`, /* glsl */ `
  varying vec3 vC;
  #include <fog_pars_fragment>
  void main() {
    gl_FragColor = vec4(vC, 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`);
/** 电路走线：常亮，隔一段有一个光点沿着线跑；夜里更亮 */
const traceMat = (color: C) => shaderMat(/* glsl */ `
  attribute float aU; varying float vU;
  #include <fog_pars_vertex>
  void main() {
    vU = aU;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`, /* glsl */ `
  uniform float uTime, uNight; uniform vec3 uColor; varying float vU;
  #include <fog_pars_fragment>
  void main() {
    float pulse = pow(max(0.0, sin(vU * 0.2 - uTime * 2.4)), 16.0);
    gl_FragColor = vec4(uColor * (0.5 + uNight * 0.8 + pulse * 2.2), 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`, { uColor: { value: new THREE.Color(color) } }, { side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });

function led(w: number, h: number, d: number, color: C, p: V3, phase: number) {
  const g = new THREE.BoxGeometry(w, h, d).toNonIndexed();
  g.deleteAttribute('uv');
  paint(xf(g, p), color);
  g.setAttribute('aPhase', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(phase), 1));
  return g;
}
function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d')!);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// ======================= 巨型显卡 =======================
const GL = 13, GH = 5.6, GB = 0.9, GC = GB + GH / 2, GT = GB + GH; // 卡长、卡高、卡底离地、卡中心高、卡顶高
const FAN_X = [-4.15, 0, 4.15], FAN_R = 1.95;
function gpuBody(accent: string) {
  const solid: THREE.BufferGeometry[] = [], lit: THREE.BufferGeometry[] = [];
  const add = (g: THREE.BufferGeometry, c: C | ((p: THREE.Vector3, n: THREE.Vector3, o: THREE.Color) => void), p?: V3, r?: V3) => solid.push(paint(xf(g, p, r), c));
  const glow = (g: THREE.BufferGeometry, c: C | ((p: THREE.Vector3, n: THREE.Vector3, o: THREE.Color) => void), p?: V3, r?: V3) => lit.push(paint(xf(g, p, r), c));
  // 插槽：这块地就是主板
  add(new THREE.BoxGeometry(GL * 0.72 + 0.5, 0.16, 1.9), '#3a3d4a', [-1.2, 0.08, -0.5]);
  add(new THREE.BoxGeometry(GL * 0.72, 0.62, 1.3), '#22242c', [-1.2, 0.36, -0.5]);
  add(new THREE.BoxGeometry(0.55, 1.1, 1.3), '#565b6e', [-1.2 + GL * 0.36 + 0.28, 0.55, -0.5]);
  // 金手指
  add(new THREE.BoxGeometry(GL * 0.64, 0.7, 0.12), '#e0b24c', [-1.2, GB - 0.2, -0.5]);
  for (let i = 0; i < 34; i++) add(new THREE.BoxGeometry(0.07, 0.7, 0.15), '#7a5c1c', [-1.2 - GL * 0.31 + i * ((GL * 0.62) / 33), GB - 0.2, -0.5]);
  // 电路板和背板
  add(new THREE.BoxGeometry(GL, GH, 0.14), '#143a2c', [0, GC, -0.5]);
  add(new THREE.BoxGeometry(GL, GH, 0.1), '#2b2e3a', [0, GC, -0.68]);
  for (const y of [-1.9, 1.9]) glow(new THREE.BoxGeometry(GL * 0.8, 0.07, 0.04), accent, [0, GC + y, -0.745]);
  for (let i = 0; i < 7; i++) add(new THREE.BoxGeometry(0.5, 0.16, 0.05), '#1a1c24', [GL / 2 - 1.2 - i * 0.75, GC - 2.4, -0.74]);
  // 散热鳍片和三根热管
  for (let i = 0; i < 52; i++) add(new THREE.BoxGeometry(0.06, GH * 0.86, 0.86), '#aab2c2', [-GL / 2 + 0.5 + (i * (GL - 1)) / 51, GC, 0.02]);
  for (const z of [-0.24, 0.04, 0.3]) add(new THREE.CylinderGeometry(0.1, 0.1, GL - 0.7, 8).rotateZ(Math.PI / 2), '#c87a4a', [0, GT - 0.22, z]);
  // 外壳：三个风扇孔
  const sh = new THREE.Shape(), hx = GL / 2, hy = GH / 2, ch = 0.9;
  sh.moveTo(-hx, -hy); sh.lineTo(hx - ch, -hy); sh.lineTo(hx, -hy + ch); sh.lineTo(hx, hy); sh.lineTo(-hx + ch, hy); sh.lineTo(-hx, hy - ch); sh.closePath();
  for (const x of FAN_X) { const h = new THREE.Path(); h.absarc(x, 0, FAN_R, 0, Math.PI * 2, true); sh.holes.push(h); }
  add(new THREE.ExtrudeGeometry(sh, { depth: 0.34, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 1, curveSegments: 32 }), (p, n, o) => o.set(n.z > 0.5 ? '#262932' : '#1b1d24'), [0, GC, 0.5]);
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(GL, 0.14, 1.1), '#1b1d24', [0, GC + s * (GH / 2 - 0.07), 0.0]);
  add(new THREE.BoxGeometry(0.14, GH, 1.1), '#1b1d24', [GL / 2 - 0.07, GC, 0.0]);
  for (const x of FAN_X) glow(new THREE.TorusGeometry(FAN_R + 0.02, 0.06, 6, 44), accent, [x, GC, 0.9]);
  for (const x of [-2.075, 2.075]) for (const s of [-1, 1]) glow(new THREE.BoxGeometry(0.07, 1.1, 0.05), accent, [x, GC + s * 2.0, 0.9], [0, 0, s * 0.5]);
  // 顶上的彩灯条
  glow(new THREE.BoxGeometry(GL * 0.84, 0.13, 0.16), (p, _n, o) => { o.setHSL(saturate(p.x / (GL * 0.84) + 0.5) * 0.85, 1, 0.56).multiplyScalar(1.5); }, [0, GT + 0.03, 0.66]);
  // 挡板和接口
  add(new THREE.BoxGeometry(0.12, GH + 1.0, 1.75), '#c2c6d2', [-GL / 2 - 0.06, GC - 0.25, 0.05]);
  for (const y of [1.7, 0.75, -0.2]) add(new THREE.BoxGeometry(0.16, 0.42, 1.05), '#15161b', [-GL / 2 - 0.08, GC + y, 0.05]);
  for (let i = 0; i < 6; i++) add(new THREE.BoxGeometry(0.16, 0.08, 1.2), '#6a6e7c', [-GL / 2 - 0.08, GC - 1.0 - i * 0.2, 0.05]);
  // 供电接口和三根电缆：从卡顶绕到背面，插进地里
  const cx = GL / 2 - 2.4;
  add(new THREE.BoxGeometry(1.5, 0.5, 0.75), '#15161a', [cx, GT + 0.22, -0.1]);
  (['#18191e', '#e0b24c', '#18191e'] as const).forEach((c, i) => {
    const o = (i - 1) * 0.42;
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(cx + o, GT + 0.4, -0.1), new THREE.Vector3(cx + o, GT + 1.5, -1.0), new THREE.Vector3(cx + o * 1.6, GT * 0.55, -2.5), new THREE.Vector3(cx + o * 2.2, 0.25, -3.5), new THREE.Vector3(cx + o * 2.3, -0.8, -3.75)]);
    add(new THREE.TubeGeometry(curve, 28, 0.12, 7), c);
  });
  return { solid: merge(solid), lit: merge(lit) };
}
function fanGeo() {
  const parts: THREE.BufferGeometry[] = [];
  parts.push(paint(new THREE.CylinderGeometry(0.56, 0.56, 0.3, 22).rotateX(Math.PI / 2), '#2a2d38'));
  parts.push(paint(xf(new THREE.CylinderGeometry(0.34, 0.34, 0.04, 18).rotateX(Math.PI / 2), [0, 0, 0.16]), '#c2c6d2'));
  for (let i = 0; i < 9; i++) parts.push(paint(xf(new THREE.BoxGeometry(1.32, 0.56, 0.035), [1.15, 0, 0], [0.5, 0, 0]).rotateZ((i / 9) * Math.PI * 2), '#454b5c'));
  parts.push(paint(new THREE.TorusGeometry(1.82, 0.05, 5, 40), '#3a3f4c'));
  return merge(parts);
}

// ======================= 数据中心遗址 =======================
const LED_COL = ['#5dff9a', '#5dff9a', '#ffc24a', '#5ab8ff', '#ff5a5a'];
function rack(r: () => number, solid: THREE.BufferGeometry[], leds: THREE.BufferGeometry[], m: THREE.Matrix4) {
  const s: THREE.BufferGeometry[] = [], l: THREE.BufferGeometry[] = [], moss = new THREE.Color('#5d8a4e');
  const body = (p: THREE.Vector3, _n: THREE.Vector3, o: THREE.Color) => { o.set('#23262e').lerp(moss, Math.pow(saturate(1 - p.y / 1.5), 2) * 0.6); };
  s.push(paint(xf(new THREE.BoxGeometry(1.15, 2.3, 1.0), [0, 1.15, 0]), body));
  s.push(paint(xf(new THREE.BoxGeometry(0.95, 0.05, 0.8), [0, 2.33, 0]), '#343844'));
  for (let i = 0; i < 10; i++) {
    const y = 0.24 + i * 0.2;
    if (r() < 0.2) { s.push(paint(xf(new THREE.BoxGeometry(1.0, 0.17, 0.03), [0, y, 0.49]), '#0e0f13')); continue; }
    s.push(paint(xf(new THREE.BoxGeometry(1.0, 0.17, 0.05), [0, y, 0.51]), r() < 0.5 ? '#3a3f4c' : '#444a58'));
    s.push(paint(xf(new THREE.BoxGeometry(0.34, 0.09, 0.03), [0.26, y, 0.545]), '#1c1e25'));
    const n = 1 + Math.floor(r() * 3);
    for (let k = 0; k < n; k++) l.push(led(0.05, 0.05, 0.03, LED_COL[Math.floor(r() * LED_COL.length)], [-0.4 + k * 0.1, y, 0.55], r()));
  }
  for (const g of s) solid.push(g.applyMatrix4(m));
  for (const g of l) leds.push(g.applyMatrix4(m));
}

// ======================= 二叉树 =======================
function binaryTree(r: () => number) {
  const solid: THREE.BufferGeometry[] = [], leaves: THREE.BufferGeometry[] = [], tips: THREE.Vector3[] = [];
  const up = new THREE.Vector3(0, 1, 0), q4 = new THREE.Quaternion(), DEPTH = 5;
  const grow = (p: THREE.Vector3, dir: THREE.Vector3, len: number, rad: number, depth: number, axis: THREE.Vector3) => {
    const end = p.clone().addScaledVector(dir, len);
    const g = new THREE.CylinderGeometry(rad * 0.72, rad, len, 8).translate(0, len / 2, 0);
    g.applyQuaternion(q4.setFromUnitVectors(up, dir)).translate(p.x, p.y, p.z);
    solid.push(paint(g, (v, _n, o) => o.set('#eef1f7').lerp(new THREE.Color('#b9c2d6'), saturate(1 - v.y / 9))));
    solid.push(paint(xf(new THREE.SphereGeometry(Math.max(0.1, rad * 1.45), 10, 8), [end.x, end.y, end.z]), '#e0b24c'));
    if (depth === DEPTH) {
      const tip = end.clone().addScaledVector(dir, 0.3);
      tips.push(tip);
      leaves.push(led(0.34, 0.34, 0.34, r() < 0.6 ? '#7dffb0' : '#8fe8ff', [tip.x, tip.y, tip.z], r()));
      for (let k = 0; k < 2; k++) leaves.push(led(0.18, 0.18, 0.18, '#c8ffe0', [tip.x + (r() - 0.5) * 0.7, tip.y + (r() - 0.5) * 0.6, tip.z + (r() - 0.5) * 0.7], r()));
      return;
    }
    for (const s of [-1, 1]) {
      const d = dir.clone().applyAxisAngle(axis, s * (0.52 + depth * 0.03));
      d.y += 0.22;
      d.normalize();
      grow(end, d, len * 0.74, rad * 0.7, depth + 1, new THREE.Vector3().crossVectors(d, axis).normalize());
    }
  };
  grow(new THREE.Vector3(0, -0.3, 0), up, 3.7, 0.32, 0, new THREE.Vector3(0, 0, 1));
  // 树根下的石台，刻着一圈走线
  solid.push(paint(xf(new THREE.CylinderGeometry(1.5, 1.7, 0.3, 8), [0, 0.1, 0]), '#b9b3a4'));
  return { solid: merge(solid), leaves: mergeGeometries(leaves)!, tips };
}

/** 场景里和 AI 有关的摆设：巨型显卡、机柜遗迹、路上的电路走线、二叉树、路牌 */
export class AiProps {
  private fans: THREE.Mesh[] = [];
  /** 会往外冒字符的地方 */
  private vents: { pos: THREE.Vector3; dir: THREE.Vector3; color: string; rate: number; kind: 'fan' | 'rise' | 'fall' }[] = [];
  private solid: THREE.BufferGeometry[] = [];
  private leds: THREE.BufferGeometry[] = [];
  private _v = new THREE.Vector3();
  private _w = new THREE.Vector3();
  private lampMat = glowMat('#ffffff', 1, true);
  private poolMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });

  constructor(private scene: THREE.Scene, private terrain: Terrain, private col: Colliders, private reserve: (x: number, z: number, r: number) => void) {
    this.buildGpus();
    this.buildDatacenter();
    this.buildTree(-22, 84);
    this.buildTraces();
    this.buildLamps();
    this.signpost(-3.5, 69, [['Anthropic', 16, 14], ['算力高地', 4, -42], ['乱码营地', -20, -20], ['遗忘之门', -28, 32]]);
    this.signpost(1, 33.5, [['数据湖', 26, 3], ['算力高地', -6, -50]]);
    this.signpost(27.5, 29.5, [['DeepSeek', 31, -11], ['月之暗面', 14, -43]]);
    this.signpost(-71, 33.5, [['xAI', -34, 32], ['智谱 Z.ai', -38, -24], ['随机森林', -38, -30]]);
    this.signpost(-25, 106, [['Google', 4, 24], ['遗忘之门', -36, 32]]);
    this.signpost(33, 103, [['阿里云 · 通义', 18, 26]]);
    const body = new THREE.Mesh(merge(this.solid), toon({ vertexColors: true, grad: 'soft', side: THREE.DoubleSide }));
    body.castShadow = body.receiveShadow = true;
    scene.add(body);
    scene.add(new THREE.Mesh(mergeGeometries(this.leds)!, blinkMat()));
    this.solid.length = this.leds.length = 0;
  }

  private buildGpus() {
    const fan = fanGeo(), fanMat = toon({ vertexColors: true, grad: 'soft', side: THREE.DoubleSide }), bodyMat = toon({ vertexColors: true, grad: 'soft', side: THREE.DoubleSide });
    const accents = ['#7dffb0', '#8fd8ff', '#ff8ad0'];
    GPUS.forEach((p, i) => {
      const y = this.terrain.heightAt(p.x, p.z) - 0.05, grp = new THREE.Group(), geo = gpuBody(accents[i]);
      grp.position.set(p.x, y, p.z);
      grp.rotation.y = p.yaw;
      const body = new THREE.Mesh(geo.solid, bodyMat);
      body.castShadow = body.receiveShadow = true;
      grp.add(body, new THREE.Mesh(geo.lit, glowMat('#ffffff', 1.25, true)));
      FAN_X.forEach((x, k) => {
        const f = new THREE.Mesh(fan, fanMat);
        f.position.set(x, GC, 0.64);
        f.userData.speed = 5 + ((i * 3 + k) % 3) * 1.6;
        f.castShadow = true;
        grp.add(f);
        this.fans.push(f);
      });
      // 背板上的铭牌
      const tex = canvasTex(768, 192, (g) => {
        g.fillStyle = '#2b2e3a'; g.fillRect(0, 0, 768, 192);
        g.fillStyle = '#d5dae6'; g.textBaseline = 'middle';
        g.font = `700 104px ${MONO}`; g.fillText(`GPU-${i}`, 24, 78);
        g.font = `600 40px ${MONO}`; g.fillStyle = '#8f97aa'; g.fillText('VRAM 24 GB · 450 W · 算力充足', 28, 158);
      });
      const plate = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.6), toon({ map: tex, grad: 'soft' }));
      plate.position.set(-1.6, GC + 0.6, -0.74);
      plate.rotation.y = Math.PI;
      grp.add(plate);
      this.scene.add(grp);
      this.col.addBox(p.x, p.z, GL / 2 + 0.1, 0.95, p.yaw, y - 3, y + GT, true);
      this.reserve(p.x, p.z, 9);
      const dir = new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw));
      for (const x of FAN_X) this.vents.push({ pos: new THREE.Vector3(p.x + Math.cos(p.yaw) * x + dir.x * 1.2, y + GC, p.z - Math.sin(p.yaw) * x + dir.z * 1.2), dir, color: accents[i], rate: 2.2, kind: 'fan' });
    });
  }

  private buildDatacenter() {
    const D = DATACENTER, y = this.terrain.heightAt(D.x, D.z), r = mulberry32(606), m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    const at = (g: THREE.BufferGeometry, c: C, p: V3, rot?: V3) => this.solid.push(paint(xf(g, [D.x + p[0], y + p[1], D.z + p[2]], rot), c));
    // 架空地板：一格一格的，掉了几块
    at(new THREE.BoxGeometry(13, 0.3, 8.4), '#7f8594', [0, 0.02, 0]);
    for (let i = -10; i <= 10; i++) at(new THREE.BoxGeometry(0.05, 0.02, 8.4), '#4c5160', [i * 0.62, 0.18, 0]);
    for (let i = -6; i <= 6; i++) at(new THREE.BoxGeometry(13, 0.02, 0.05), '#4c5160', [0, 0.18, i * 0.62]);
    for (const [x, z] of [[-3.1, 0.6], [1.86, -0.6], [4.3, 1.2], [-0.6, 1.9]]) at(new THREE.BoxGeometry(0.58, 0.05, 0.58), '#2a2d36', [x, 0.165, z]);
    at(new THREE.BoxGeometry(0.6, 0.06, 0.6), '#8a90a0', [-2.4, 0.3, 1.0], [0.2, 0.5, 0.1]);
    this.col.addBox(D.x, D.z, 6.5, 4.2, 0, y - 2, y + 0.17, false);
    // 两排机柜，面对面；有的歪了，有的倒了
    for (let row = 0; row < 2; row++)
      for (let i = 0; i < 8; i++) {
        if (r() < 0.16) continue;
        const x = -4.55 + i * 1.3, z = row ? 2.7 : -2.7, fallen = r() < 0.12, tilt = fallen ? 0 : (r() - 0.5) * 0.24 * (r() < 0.4 ? 1 : 0);
        e.set(fallen ? (row ? -1.45 : 1.45) : tilt * 0.6, row ? Math.PI : 0, tilt);
        m.compose(new THREE.Vector3(D.x + x, y + 0.15 + (fallen ? 0.45 : 0), D.z + z), q.setFromEuler(e), new THREE.Vector3(1, 1, 1));
        rack(r, this.solid, this.leds, m);
        if (!fallen) { this.col.addBox(D.x + x, D.z + z, 0.6, 0.52, 0, y - 1, y + 2.5, true); this.vents.push({ pos: new THREE.Vector3(D.x + x, y + 2.6, D.z + z), dir: new THREE.Vector3(0, 1, 0), color: '#7dffb0', rate: 0.25, kind: 'rise' }); }
      }
    // 过道尽头还亮着一台终端
    at(new THREE.BoxGeometry(0.16, 1.2, 0.16), '#3a3d4a', [6.9, 0.7, 0]);
    at(new THREE.BoxGeometry(0.14, 1.25, 1.9), '#1a1c22', [6.9, 1.85, 0]);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.76, 1.1), new THREE.MeshBasicMaterial({ toneMapped: false, map: canvasTex(512, 320, (g) => {
      g.fillStyle = '#06140c'; g.fillRect(0, 0, 512, 320);
      g.fillStyle = '#6dffa8'; g.font = `600 30px ${MONO}`; g.textBaseline = 'top';
      ['> python train.py', 'epoch 1  loss 0.6931', 'epoch 2  loss 0.0421', 'epoch 3  loss NaN', '> _'].forEach((t, i) => g.fillText(t, 22, 24 + i * 56));
    }) }));
    screen.position.set(D.x + 6.82, y + 1.85, D.z);
    screen.rotation.y = -Math.PI / 2;
    this.scene.add(screen);
    this.col.addCyl(D.x + 6.9, D.z, 0.5, y - 1, y + 2.5);
    this.reserve(D.x, D.z, 10);
  }

  private buildTree(x: number, z: number) {
    const y = this.terrain.heightAt(x, z), t = binaryTree(mulberry32(31));
    const m = new THREE.Mesh(t.solid.translate(x, y, z), toon({ vertexColors: true, grad: 'soft' }));
    m.castShadow = m.receiveShadow = true;
    this.scene.add(m, new THREE.Mesh(t.leaves.translate(x, y, z), blinkMat()));
    this.col.addCyl(x, z, 0.55, y - 1, y + 3.4);
    this.col.addCyl(x, z, 1.6, y - 1, y + 0.25);
    this.reserve(x, z, 6);
    for (let i = 0; i < t.tips.length; i += 3) this.vents.push({ pos: t.tips[i].clone().add(new THREE.Vector3(x, y, z)), dir: new THREE.Vector3(0, -1, 0), color: '#7dffb0', rate: 0.12, kind: 'fall' });
  }

  /** 沿着每条土路铺两根发光走线，隔一段分出一根短支线，末端是一个焊盘 */
  private buildTraces() {
    const T = this.terrain, pos: number[] = [], au: number[] = [], idx: number[] = [];
    const nearHouse = (x: number, z: number) => HOUSES.some((h) => Math.hypot(x - h.x, z - h.z) < 9.5);
    const vert = (x: number, z: number, u: number) => { pos.push(x, T.heightAt(x, z) + 0.09, z); au.push(u); return pos.length / 3 - 1; };
    const quad = (ax: number, az: number, bx: number, bz: number, w: number, u: number) => {
      const len = Math.hypot(bx - ax, bz - az) || 1, nx = (-(bz - az) / len) * w, nz = ((bx - ax) / len) * w;
      const a = vert(ax + nx, az + nz, u), b = vert(ax - nx, az - nz, u), c = vert(bx + nx, bz + nz, u + len), d = vert(bx - nx, bz - nz, u + len);
      idx.push(a, b, c, b, d, c);
    };
    const pad = (x: number, z: number, u: number) => {
      const c = vert(x, z, u), ring: number[] = [];
      for (let i = 0; i < 8; i++) ring.push(vert(x + Math.cos((i / 8) * 6.283) * 0.24, z + Math.sin((i / 8) * 6.283) * 0.24, u));
      for (let i = 0; i < 8; i++) idx.push(c, ring[i], ring[(i + 1) % 8]);
    };
    PATHS.forEach((path, pi) => {
      const pts = samplePath(path, 1.25);
      for (const off of [-0.85, 0.85]) {
        for (let i = 0; i < pts.length - 1; i++) {
          const a = pts[i], b = pts[i + 1];
          if (nearHouse(a.x, a.z) || nearHouse(b.x, b.z)) continue;
          quad(a.x - a.tz * off, a.z + a.tx * off, b.x - b.tz * off, b.z + b.tx * off, 0.06, a.u + pi * 37);
          // 支线：朝路外斜着伸出去
          if ((i + (off > 0 ? 4 : 0) + pi) % 9 === 0) {
            const s = Math.sign(off), ox = a.x - a.tz * off, oz = a.z + a.tx * off, dx = (a.tx - a.tz * s) * 0.7071, dz = (a.tz + a.tx * s) * 0.7071, len = 0.9 + ((i * 7) % 5) * 0.22;
            quad(ox, oz, ox + dx * len, oz + dz * len, 0.05, a.u + pi * 37);
            pad(ox + dx * (len + 0.2), oz + dz * (len + 0.2), a.u + pi * 37 + len);
          }
        }
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aU', new THREE.Float32BufferAttribute(au, 1));
    g.setIndex(idx);
    const m = new THREE.Mesh(g, traceMat('#52f0d2'));
    m.renderOrder = 1;
    this.scene.add(m);
  }

  /** 路灯：沿路每隔一段立一盏，左右交替；夜里灯亮起来，地上有一圈光 */
  private buildLamps() {
    const T = this.terrain, lit: THREE.BufferGeometry[] = [], pools: THREE.BufferGeometry[] = [], warm = new THREE.Color('#ffd28a'), black = new THREE.Color(0, 0, 0), iron = '#3a3340', H = 3.1;
    PATHS.forEach((path, pi) => {
      samplePath(path, 24).forEach((s, i) => {
        if (i === 0 || HOUSES.some((h) => Math.hypot(s.x - h.x, s.z - h.z) < 14)) return;
        const side = (i + pi) % 2 ? 1 : -1, x = s.x - s.tz * side * 3.1, z = s.z + s.tx * side * 3.1, y = T.heightAt(x, z);
        // 首领的场子里不立灯，免得打架时碍事
        if (y < 1.6 || ruinsMask(x, z) > 0.02 || this.col.blocked(x, z, 0.6, y)) return;
        const ax = s.tz * side, az = -s.tx * side, lx = x + ax * 0.7, lz = z + az * 0.7; // (ax, az) 指向路中间
        this.solid.push(paint(xf(new THREE.CylinderGeometry(0.045, 0.07, H, 7), [x, y + H / 2, z]), iron));
        this.solid.push(paint(xf(new THREE.CylinderGeometry(0.12, 0.15, 0.16, 8), [x, y + 0.08, z]), iron));
        this.solid.push(paint(xf(new THREE.BoxGeometry(0.8, 0.05, 0.05), [x + ax * 0.36, y + H - 0.08, z + az * 0.36], [0, Math.atan2(-az, ax), 0]), iron));
        this.solid.push(paint(xf(new THREE.ConeGeometry(0.2, 0.14, 4), [lx, y + H - 0.16, lz], [0, Math.PI / 4, 0]), iron));
        lit.push(paint(xf(new THREE.BoxGeometry(0.2, 0.24, 0.2), [lx, y + H - 0.36, lz]), warm));
        const pool = paint(new THREE.CircleGeometry(3.4, 20).rotateX(-Math.PI / 2), (p, _n, o) => o.copy(p.lengthSq() < 0.01 ? warm : black));
        pools.push(xf(pool, [lx, T.heightAt(lx, lz) + 0.14, lz]));
        this.col.addCyl(x, z, 0.14, y - 1, y + H);
        this.reserve(x, z, 1.4);
      });
    });
    if (!lit.length) return;
    const pm = new THREE.Mesh(merge(pools), this.poolMat);
    pm.renderOrder = 2;
    this.scene.add(new THREE.Mesh(merge(lit), this.lampMat), pm);
  }

  /** 路牌：一根木桩，上面几块指向不同方向的木牌 */
  private signpost(x: number, z: number, boards: [string, number, number][]) {
    const y = this.terrain.heightAt(x, z), h = 2.5 + boards.length * 0.42;
    this.solid.push(paint(xf(new THREE.CylinderGeometry(0.08, 0.11, h, 7), [x, y + h / 2, z]), '#6a4a30'));
    this.solid.push(paint(xf(new THREE.ConeGeometry(0.13, 0.22, 7), [x, y + h + 0.1, z]), '#6a4a30'));
    boards.forEach(([text, dx, dz], i) => {
      const yaw = Math.atan2(-dz, dx), by = y + h - 0.3 - i * 0.46;
      for (const back of [false, true]) {
        const tex = canvasTex(512, 96, (g) => {
          g.fillStyle = '#8a6540'; g.fillRect(0, 0, 512, 96);
          g.strokeStyle = '#5a3e26'; g.lineWidth = 6; g.strokeRect(3, 3, 506, 90);
          g.fillStyle = '#fff3dc'; g.textBaseline = 'middle'; g.textAlign = 'center';
          g.font = `700 50px ${FONT}`;
          g.fillText(back ? `← ${text}` : `${text} →`, 256, 50);
        });
        const b = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.36), toon({ map: tex, grad: 'soft' }));
        b.position.set(x + Math.cos(yaw) * 0.85 + Math.sin(yaw) * (back ? -0.03 : 0.03), by, z - Math.sin(yaw) * 0.85 + Math.cos(yaw) * (back ? -0.03 : 0.03));
        b.rotation.y = yaw + (back ? Math.PI : 0);
        b.castShadow = true;
        this.scene.add(b);
      }
      this.solid.push(paint(xf(new THREE.BoxGeometry(1.94, 0.4, 0.045), [x + Math.cos(yaw) * 0.85, by, z - Math.sin(yaw) * 0.85], [0, yaw, 0]), '#5a3e26'));
    });
    this.col.addCyl(x, z, 0.2, y - 1, y + h);
    this.reserve(x, z, 2.5);
  }

  update(dt: number, night: number, eye: THREE.Vector3, fx: Fx) {
    U.uTime.value += dt;
    U.uNight.value = night;
    this.lampMat.color.setScalar(0.5 + night * 1.5);
    this.poolMat.color.setScalar(night * 0.5);
    for (const f of this.fans) f.rotation.z -= f.userData.speed * dt;
    const v = this._v, w = this._w;
    for (const e of this.vents) {
      if (Math.random() > e.rate * dt || e.pos.distanceToSquared(eye) > 70 * 70) continue;
      if (e.kind === 'fan') {
        const a = Math.random() * 6.283, rr = Math.random() * 1.5;
        v.set(e.pos.x + Math.cos(a) * rr * e.dir.z, e.pos.y + Math.sin(a) * rr, e.pos.z - Math.cos(a) * rr * e.dir.x);
        fx.glyph({ pos: v, vel: w.copy(e.dir).multiplyScalar(3 + Math.random() * 2).setY(0.4 + Math.random() * 0.6), color: e.color, size: 0.5, life: 2.2, drag: 0.5 });
      } else if (e.kind === 'rise') {
        fx.glyph({ pos: v.set(e.pos.x + (Math.random() - 0.5) * 0.6, e.pos.y, e.pos.z + (Math.random() - 0.5) * 0.6), vel: w.set(0, 0.8 + Math.random() * 0.6, 0), color: e.color, size: 0.34, life: 2.6, glyph: Math.floor(Math.random() * 4) });
      } else {
        fx.glyph({ pos: e.pos, vel: w.set((Math.random() - 0.5) * 0.5, -0.5, (Math.random() - 0.5) * 0.5), color: e.color, size: 0.36, life: 4, gravity: 0.25, glyph: Math.floor(Math.random() * 4) });
      }
    }
  }
}
