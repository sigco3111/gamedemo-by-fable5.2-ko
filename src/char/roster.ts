import * as THREE from 'three';
import { Rig } from './rig';
import { Builder, type CharModel, type V3 } from './builder';
import { paint, xf } from '../render/geoutil';
import { ell, strand, tube, skirtGeo, star4, type Col } from './geo';
import { claudeFlower, claudeSpark, gptKnot, whale, zBadge, sleepEyes, kBadge, prism, moonStars, qwenBadge, geminiStar, grokRing } from './logos';
import {
  P0, HC, RC, body, hairCap, capFlow, bangs, sideHair, sideLocks, onSkirt as onSk, backHair, ahoge, twinTails, braid, maidBand, animalEars, elfEars, horns, bow, sunburst,
  tassel, sleeve, skirtRig, skirtLayer, frill, tail, drape, capelet, jabot, buttons, onBone, type HairCol, type SkirtRig,
} from './parts';

const Vec = THREE.Vector3;
export type CharId = 'claude' | 'gpt' | 'deepseek' | 'glm' | 'kimi' | 'qwen' | 'gemini' | 'grok';
export const CHAR_IDS: CharId[] = ['claude', 'gpt', 'deepseek', 'glm', 'kimi', 'qwen', 'gemini', 'grok'];

const start = () => new Builder(new Rig(P0));
/** 裙摆上某条弹簧链附近的一个点（髋部本地坐标），用来把蝴蝶结之类钉在裙子上 */
const onSkirt = (phi: number, r: number, y: number): V3 => [Math.sin(phi) * r, y, Math.cos(phi) * r * 0.86];
const chainAt = (sk: SkirtRig, phi: number) => sk.chains[((Math.round((phi / (Math.PI * 2)) * sk.chains.length) % sk.chains.length) + sk.chains.length) % sk.chains.length];
/** 把一组几何体钉到弹簧骨骼上 */
function pin(b: Builder, bone: number, items: [THREE.BufferGeometry, Col][], p: V3, r: V3 = [0, 0, 0]) {
  for (const [g, c] of items) onBone(b, 'hips', bone, xf(g, p, r), c);
}
const bowItems = (w: number, h: number, c: Col): [THREE.BufferGeometry, Col][] => {
  const l = (s: number) => ell(w * 0.26, h * 0.5, w * 0.08).translate(s * w * 0.27, 0, 0);
  return [[l(1), c], [l(-1), c], [new THREE.SphereGeometry(h * 0.26, 8, 6), c]];
};
/** 通用滑翔翼（背在背上，滑翔时才显示） */
function glider(b: Builder, c1: Col, c2: Col) {
  const m = b.mount('glider', 'chest', [0, 0.12, -0.1], [0.5, 0, 0]);
  for (const s of [1, -1]) {
    const sh = new THREE.Shape([[0.02, 0.12], [0.95, 0.3], [0.8, -0.05], [0.52, -0.2], [0.3, -0.1], [0.02, -0.28]].map(([x, y]) => new THREE.Vector2(x * s, y)));
    b.add(m, paint(new THREE.ShapeGeometry(sh), (p, _n, o) => o.set(c1).lerp(new THREE.Color(c2), Math.min(1, Math.abs(p.x) * 1.1))));
    b.add(m, new THREE.CylinderGeometry(0.009, 0.006, 0.95, 5).rotateZ(-s * 1.38).translate(s * 0.47, 0.21, 0.004), '#5a4a3c');
  }
  b.add(m, new THREE.BoxGeometry(0.05, 0.42, 0.02), '#5a4a3c', 'cloth', [0, -0.08, 0]);
  m.visible = false;
}
const C = (h: Col) => new THREE.Color(h);
/** 下摆花边：上下两道细线，中间一排菱形。返回 true 的位置画花边色。n 是一圈有多少个菱形。 */
const hem = (phi: number, v: number, v0: number, v1: number, n: number) => {
  const t = (v - v0) / (v1 - v0);
  if (t < 0 || t > 1) return false;
  if (t < 0.13 || t > 0.87) return true;
  const u = ((((phi / (Math.PI * 2)) * n) % 1) + 1) % 1;
  return Math.abs(u - 0.5) * 2 + Math.abs(t - 0.5) * 2.7 < 0.6;
};
/** 星空：疏疏落落、大小不一的小亮点 */
const starry = (a: number, q: number) => {
  const cx = Math.floor(a), cy = Math.floor(q), h = Math.sin(cx * 127.1 + cy * 311.7) * 43758.5453, r = h - Math.floor(h);
  return r < 0.17 && Math.abs(a - cx - 0.5) + Math.abs(q - cy - 0.5) < 0.16 + r;
};
/** 回纹边：一格实一格空、上下错开的方块带 */
const meander = (u: number, t: number, n: number) => t > 0 && t < 1 && (t < 0.16 || t > 0.84 || ((Math.floor(u * n) % 2 === 0) === (t < 0.5) && (u * n) % 1 > 0.2));
const DENSE = { rows: 60, cols: 220 };
const near = (p: number, c: number, hw: number) => Math.abs(Math.atan2(Math.sin(p - c), Math.cos(p - c))) < hw;

// ============ Claude娘：橙色长发、米白长裙、黑色腰封、太阳花饰、手持书 ============
function claude() {
  const b = start(), H: HairCol = { c0: '#ee6f2a', c1: '#f9a65c' };
  const cream = '#f7f0e3', black = '#2a2228', orange = '#e7642a', gold = '#d9a441', skin = '#ffe8da';
  body(b, {
    skin, face: { skin, iris: ['#8a4810', '#e8922e', '#ffd9a0'], pupil: '#5a2c08', lash: '#4a2a1c', brow: '#c0621e', mouth: 'flat', tilt: 0.03, eyeH: 0.228, lid: 0.07, lip: '#e58a86' }, head: { jaw: 0.43, cheek: 0.05, len: 1.07 },
    chest: cream, belly: black, pelvis: cream, upperArm: cream, foreArm: cream, thigh: cream, shin: cream, shoe: '#f4ede0', sole: '#c9a47a', heel: 0.05, neckBand: cream, boot: 0.17,
  });
  capelet(b, 0.17, cream, gold);
  bow(b, 'chest', [0, 0.192, 0.074], [0.15, 0, 0], 0.085, 0.04, black);
  // 黑色领巾：上宽下尖
  b.add('chest', strand([new Vec(0, 0.186, 0.078), new Vec(0, 0.135, 0.1), new Vec(0, 0.07, 0.1)], { w: 0.032, t: 0.006, c0: black, flat: true, taper: 3.2, rootW: 0.9, tipW: 0.05, up: new Vec(0, 0, 1) }));
  b.decal('chest', 'claudeFlower', claudeFlower, 0.08, [0, 0.2, 0.096], [-0.15, 0, 0]);
  jabot(b, 0.1, 0.094, 3);
  // 披肩两肩上的放射标志印花
  for (const s of [-1, 1]) b.decal('chest', 'claudeSpark', (g) => claudeSpark(g), 0.085, [s * 0.158, 0.1, 0.09], [-0.2, s * 0.54, 0]);
  buttons(b, gold, 3);
  for (const y of [-0.025, 0.125]) b.add('spine', new THREE.TorusGeometry(0.097, 0.005, 5, 24).rotateX(Math.PI / 2).scale(1, 1, 0.76), gold, 'cloth', [0, y, 0]);
  sleeve(b, 'fore', [[0.037, 0], [0.052, 0.09], [0.084, 0.19]], cream, { ruffle: '#ffffff', ruffleR: 0.098, edge: gold });
  for (const n of ['L', 'R'] as const) b.add(`arm${n}`, ell(0.055, 0.075, 0.055), cream, 'cloth', [0, -0.07, 0]);

  const sk = skirtRig(b, { y: 0.07, len: 0.84, r0: 0.105, r1: 0.47, wide: 1.2, flare: 0.68 });
  skirtLayer(b, sk, { y: 0.07, len: 0.84, r0: 0.104, r1: 0.46, pleats: 18, pleatAmp: 0.07, ...DENSE, col: (p, v, o) => o.set(v > 0.93 ? black : v > 0.915 ? gold : hem(p, v, 0.76, 0.87, 30) ? orange : cream) });
  frill(b, sk, { y: 0.07, len: 0.84, r0: 0.104, r1: 0.46, col: '#fffaf2' });
  skirtLayer(b, sk, { y: 0.074, len: 0.76, r0: 0.109, r1: 0.455, rows: 8, skip: (p) => Math.abs(p) < 0.4, col: (p, v, o) => o.set(v > 0.95 ? gold : p > 0.4 && p < 1.05 ? orange : black) });
  skirtLayer(b, sk, {
    y: 0.078, len: 0.56, r0: 0.113, r1: 0.4, rows: 8, skip: (p) => Math.abs(p) < 0.55, lenFn: (p) => 1 + 0.2 * Math.abs(Math.sin(p * 2.5)),
    col: (_p, v, o) => o.set(v > 0.94 ? gold : cream),
  });
  // 两侧黑色裙片上的放射标志刺绣
  for (const phi of [-2.3, -1.7, 1.7, 2.3]) b.decal('hips', 'claudeSpark', (g) => claudeSpark(g), 0.12, onSk(sk, phi, 0.79, 0.035), [-0.12, phi, 0], chainAt(sk, phi)[2]);
  for (const s of [1, -1]) {
    const phi = s * 1.26, bone = chainAt(sk, phi)[0], p = onSk(sk, phi, 0.24, 0.03);
    pin(b, bone, bowItems(0.2, 0.1, black), p, [0, phi, 0]);
    pin(b, bone, [[new THREE.ConeGeometry(0.014, 0.085, 6).rotateX(Math.PI).translate(0, -0.075, 0), gold]], [p[0] * 1.06, p[1], p[2] * 1.06], [0, phi, 0]);
    b.decal('hips', 'claudeFlower', claudeFlower, 0.1, [p[0] * 1.12, p[1], p[2] * 1.12], [-0.3, phi, 0], bone);
  }
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7 });
  sideLocks(b, H, { len: -0.44, wave: 0.02 });
  backHair(b, H, { len: -1.06, n: 15, wave: 0.045, flare: 0.2, fan: 0.75, curl: 0.03, freq: 10 });
  b.add('head', new THREE.CylinderGeometry(0.034, 0.034, 0.008, 14).rotateX(Math.PI / 2), orange, 'cloth', [0.104, 0.2, 0.05], [0, 1.0, 0]);
  b.decal('head', 'claudeFlower', claudeFlower, 0.125, [0.11, 0.2, 0.056], [0, 1.0, -0.25]);
  for (const dz of [0, 0.02]) b.add('head', strand([new Vec(0.118, 0.17, 0.03 + dz), new Vec(0.132, 0.1, 0.01 + dz), new Vec(0.128, 0.03, 0.0 + dz)], { w: 0.016, c0: black, flat: true, taper: 8, tipW: 0.8, up: new Vec(1, 0, 0) }));
  const w = b.mount('weapon', 'handL', [-0.02, -0.06, 0.035], [0.35, 0.2, 0]);
  b.add(w, new THREE.BoxGeometry(0.135, 0.175, 0.034), '#6e3a22');
  b.add(w, new THREE.BoxGeometry(0.12, 0.162, 0.027), '#f1e6cc', 'cloth', [0.008, 0, 0]);
  b.add(w, new THREE.BoxGeometry(0.06, 0.08, 0.037), gold, 'cloth', [-0.01, 0, 0], [0, 0, 0.785]);
  glider(b, orange, cream);
  return b.build();
}

// ============ GPT娘：白发白龙，龙角、龙翼、龙尾，白色长裙 ============
function gpt() {
  const b = start(), H: HairCol = { c0: '#f5f3fc', c1: '#dcd6f5' };
  const white = '#fbfaff', lav = '#cbc3ee', silver = '#b8b5cf', skin = '#fff0ea';
  body(b, {
    skin, face: { skin, iris: ['#6464b4', '#a6a6f2', '#e8e8ff'], pupil: '#3c3c80', lash: '#5a5a7c', brow: '#c9c9de', mouth: 'flat', blush: 'rgba(255,150,170,0.34)', tilt: 0.02, lid: 0.1, lowerLash: 2, lip: '#e79bb0' }, head: { jaw: 0.47, cheek: 0.035, len: 1.1 },
    chest: white, belly: white, pelvis: white, upperArm: null, foreArm: white, thigh: null, shin: null, shoe: white, sole: silver, heel: 0.06, neckBand: white, bare: true,
  });
  for (const [y, z] of [[0.17, 0.088], [0.125, 0.098], [0.085, 0.1]]) b.add('chest', new THREE.OctahedronGeometry(0.012).scale(0.7, 1.3, 0.5), lav, 'glow', [0, y, z]);
  for (const n of ['L', 'R'] as const) b.add(`arm${n}`, new THREE.TorusGeometry(0.041, 0.008, 5, 14).rotateX(Math.PI / 2), silver, 'cloth', [0, -0.13, 0]);
  sleeve(b, 'arm', [[0.041, 0.13], [0.044, 0.24]], white);
  sleeve(b, 'fore', [[0.04, 0], [0.075, 0.1], [0.135, 0.23]], white, { ruffle: lav, ruffleR: 0.16, edge: silver });
  const sk = skirtRig(b, { y: 0.07, len: 0.86, r0: 0.102, r1: 0.37, wide: 1.14, flare: 1.05 });
  skirtLayer(b, sk, { y: 0.07, len: 0.86, r0: 0.102, r1: 0.37, pleats: 12, pleatAmp: 0.07, ...DENSE, col: (p, v, o) => { o.set(white).lerp(C(lav), Math.max(0, v - 0.55) * 1.1); if (hem(p, v, 0.8, 0.9, 24)) o.set(silver); } });
  frill(b, sk, { y: 0.07, len: 0.86, r0: 0.102, r1: 0.37, col: '#e9e4fb' });
  for (const phi of [-2.5, -1.1, 1.1, 2.5]) b.decal('hips', 'gptKnot', (g) => gptKnot(g), 0.075, onSk(sk, phi, 0.7, 0.034), [-0.12, phi, 0], chainAt(sk, phi)[2]);
  for (const s of [1, -1]) {
    const phi = s * 0.75, p = onSk(sk, phi, 0.035, 0.02);
    b.decal('hips', 'gptKnot', (g) => gptKnot(g), 0.09, p, [-0.35, phi, 0], chainAt(sk, phi)[0]);
    pin(b, chainAt(sk, phi)[0], [[new THREE.ConeGeometry(0.012, 0.09, 6).rotateX(Math.PI), white]], [p[0], p[1] - 0.085, p[2]]);
  }
  drape(b, 'chest', {
    top: [-0.17, -0.09, 0, 0.09, 0.17].map((x) => new Vec(x, 0.165, -0.075 + Math.abs(x) * 0.25)),
    drop: (i, t) => new Vec((i - 2) * 0.07 * t, -1.2 * t, -0.16 * Math.sin(t * 1.4)),
    bones: 4, col: (u, v, o) => o.set(white).lerp(C(lav), v * 0.75 + 0.25 * Math.abs(Math.sin(u * 16)) * v),
  });
  // 垂袖：从前臂垂到小腿的长布片，边缘是淡紫色
  for (const [n, sd] of [['L', 1], ['R', -1]] as const)
    drape(b, `fore${n}`, {
      top: [0, 1, 2, 3].map((i) => new Vec(sd * 0.02, -0.03 - i * 0.055, -0.035)),
      drop: (i, t) => new Vec(sd * 0.06 * t, -(0.46 + i * 0.1) * t, -0.05 * t - 0.03 * Math.sin(t * 3)),
      bones: 3, rows: 26, cols: 18, spring: { grav: 1.1, stiff: 1.6 },
      col: (u, v, o) => o.set(white).lerp(C(lav), v * 0.45 + (u > 0.9 || u < 0.08 || v > 0.94 ? 0.5 : 0)),
    });
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7, sweep: 0.1 });
  sideLocks(b, H, { len: -0.48, wave: 0.028 });
  backHair(b, H, { len: -0.94, n: 14, wave: 0.045, flare: 0.17, fan: 0.72, spread: 1.7, curl: 0.025 });
  ahoge(b, H);
  horns(b, '#eeeafc', '#b9aee6');
  elfEars(b, skin);
  b.decal('head', 'gptKnot', (g) => gptKnot(g), 0.085, [0.113, 0.165, 0.052], [0, 1.1, 0]);
  tassel(b, 'head', [0.122, 0.112, 0.04], 0.05, '#f4f1ff', silver);
  // 龙翼
  for (const s of [1, -1]) {
    const m = b.mount(s > 0 ? 'wingL' : 'wingR', 'chest', [s * 0.05, 0.135, -0.085]);
    m.scale.x = s;
    const O = new Vec(0, 0, 0), W = new Vec(0.3, 0.24, -0.03), T1 = new Vec(0.84, 0.17, -0.06), T2 = new Vec(0.72, -0.2, -0.05), T3 = new Vec(0.44, -0.36, -0.03), B = new Vec(0.06, -0.26, 0);
    const mid = (a: THREE.Vector3, c: THREE.Vector3) => a.clone().lerp(c, 0.5).lerp(W, 0.22);
    const tris = [O, W, B, W, T3, B, W, mid(T3, B), T3, W, T2, mid(T2, T3), W, mid(T2, T3), T3, W, T1, mid(T1, T2), W, mid(T1, T2), T2];
    const g = new THREE.BufferGeometry().setFromPoints(tris);
    g.computeVertexNormals();
    b.add(m, paint(g, (p, _n, o) => o.set('#eeeafc').lerp(C('#b7abea'), Math.min(1, p.distanceTo(W) * 1.5))));
    const fing = (a: THREE.Vector3, c: THREE.Vector3, r: number) => tube([a, a.clone().lerp(c, 0.5).add(new Vec(0, 0.02, 0)), c], (t) => r * (1 - t * 0.7), (_t, _a, o) => o.set('#f4f1ff'), 5, 6);
    b.add(m, fing(O, W, 0.017)).add(m, fing(W, T1, 0.011)).add(m, fing(W, T2, 0.01)).add(m, fing(W, T3, 0.009));
    b.add(m, new THREE.ConeGeometry(0.014, 0.06, 6), '#f4f1ff', 'cloth', [W.x, W.y + 0.03, W.z]);
  }
  const lavC = C('#bdb2ea'), whC = C('#f6f3ff');
  tail(b, {
    pts: [new Vec(0, -0.05, -0.09), new Vec(0, -0.3, -0.33), new Vec(0, -0.62, -0.42), new Vec(0.05, -0.8, -0.3), new Vec(0.11, -0.83, -0.12)],
    r: (s) => 0.078 * Math.pow(1 - s, 0.85) + 0.007, bones: 5, spring: { grav: 0.35, stiff: 2.8 },
    col: (s, a, o) => o.copy(whC).lerp(lavC, (Math.sin(a) > 0.2 ? 0.15 : 0.5) + 0.35 * Math.abs(Math.sin(s * 46 + a * 3))),
  });
  return b.build();
}

// ============ DeepSeek娘：深蓝渐变长卷发、鲸鳍耳、鲸尾、女仆装 ============
function deepseek() {
  const b = start(), H: HairCol = { c0: '#27398f', c1: '#62b6f0' };
  const navy = '#252b60', white = '#ffffff', blue = '#3f66cc', gold = '#d8b56a', skin = '#ffeee6';
  body(b, {
    skin, face: { skin, iris: ['#1a3a9a', '#3a7ae8', '#a8d8ff'], pupil: '#0e2060', lash: '#16204a', brow: '#27398f', mouth: 'smile', tilt: -0.02, eyeH: 0.25, lip: '#f08e98' }, head: { jaw: 0.37, cheek: 0.072, len: 1.02 },
    chest: white, belly: navy, pelvis: navy, upperArm: null, foreArm: navy, thigh: white, shin: white, shoe: navy, heel: 0.045, neckBand: white, bare: true,
  });
  bow(b, 'chest', [0, 0.19, 0.076], [0.15, 0, 0], 0.1, 0.045, '#1c2048');
  b.add('chest', new THREE.SphereGeometry(0.012, 8, 6), '#7fd0ff', 'glow', [0, 0.19, 0.09]);
  for (let i = 0; i < 3; i++) b.add('chest', new THREE.SphereGeometry(0.007, 6, 5), navy, 'cloth', [0, 0.13 - i * 0.035, 0.097]);
  buttons(b, gold, 2, 0.03, 0.045, 0.034);
  for (const n of ['L', 'R'] as const) {
    b.add(`arm${n}`, ell(0.058, 0.07, 0.058), navy, 'cloth', [0, -0.12, 0]);
    b.add(`arm${n}`, skirtGeo({ y: -0.045, len: 0.035, r0: 0.03, r1: 0.062, zs: 1, pleats: 8, pleatAmp: 0.25, rows: 2, cols: 32, col: (_p, _v, o) => o.set(white) }));
  }
  sleeve(b, 'fore', [[0.037, 0], [0.04, 0.14], [0.046, 0.185]], navy, { ruffle: white, ruffleR: 0.07, edge: gold });
  const sk = skirtRig(b, { y: 0.07, len: 0.64, r0: 0.105, r1: 0.4, wide: 1.22, flare: 0.66 });
  skirtLayer(b, sk, { y: 0.07, len: 0.64, r0: 0.105, r1: 0.4, pleats: 14, pleatAmp: 0.07, ...DENSE, col: (p, v, o) => o.set(hem(p, v, 0.8, 0.92, 26) ? gold : Math.abs(p) < 0.5 ? blue : navy) });
  frill(b, sk, { y: 0.07, len: 0.64, r0: 0.105, r1: 0.4, col: white });
  skirtLayer(b, sk, { y: 0.075, len: 0.45, r0: 0.113, r1: 0.385, rows: 8, skip: (p) => Math.abs(p) > 0.8, lenFn: (p) => 1 - 0.3 * Math.pow(Math.abs(p) / 0.8, 3), col: (p, v, o) => o.set(v > 0.9 || Math.abs(p) > 0.66 ? '#eef2ff' : white) });
  frill(b, sk, { y: 0.075, len: 0.45, r0: 0.113, r1: 0.385, skip: (p) => Math.abs(p) > 0.8, lenFn: (p) => 1 - 0.3 * Math.pow(Math.abs(p) / 0.8, 3), col: white });
  b.decal('hips', 'whale', (g) => whale(g), 0.14, onSk(sk, 0.2, 0.52, 0.078), [-0.22, 0.2, 0], chainAt(sk, 0.2)[1]);
  bow(b, 'spine', [0, 0.03, -0.095], [0, 0, 0], 0.23, 0.12, white);
  for (const s of [1, -1]) b.add('hips', strand([new Vec(0, 0.1, -0.1), new Vec(s * 0.05, -0.05, -0.16), new Vec(s * 0.075, -0.24, -0.2)], { w: 0.04, c0: white, flat: true, taper: 6, tipW: 0.7, up: new Vec(0, 0, -1) }));
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7 });
  sideLocks(b, H, { len: -0.4, wave: 0.03 });
  backHair(b, H, { len: -0.82, n: 15, wave: 0.06, flare: 0.26, spread: 1.9, fan: 0.85, curl: 0.04, freq: 11 });
  ahoge(b, H, true);
  maidBand(b, white, navy);
  animalEars(b, 'fin', '#232a5e', '#f2f5ff');
  bow(b, 'head', [0.108, 0.168, 0.05], [0, 1.0, 0.3], 0.06, 0.03, '#3d8fe0');
  const top = C('#232a5e'), belly = C('#aebfe8');
  const bones = tail(b, {
    pts: [new Vec(0, -0.07, -0.09), new Vec(0, -0.3, -0.36), new Vec(0.04, -0.42, -0.62), new Vec(0.1, -0.33, -0.86), new Vec(0.14, -0.14, -0.97)],
    r: (s) => 0.088 * (1 - s * 0.78), bones: 5, flatten: 0.85, spring: { grav: 0.2, stiff: 3 }, col: (_s, a, o) => o.copy(Math.sin(a) < -0.5 ? belly : top),
  });
  for (const s of [1, -1]) onBone(b, 'hips', bones[bones.length - 1], xf(ell(0.105, 0.016, 0.05), [0.14 + s * 0.085, -0.1, -1.0], [0.9, s * 0.5, s * 0.35]), top);
  glider(b, blue, white);
  return b.build();
}

// ============ GLM娘：黑长直、大狐耳、黑白狐尾、眼罩发箍、黑白长裙 ============
function glm() {
  const b = start(), H: HairCol = { c0: '#1b1b24', c1: '#27397e' };
  const white = '#f6f6f9', black = '#1b1b21', gray = '#8d8d9b', gem = '#3d6dff', skin = '#fff0ea';
  body(b, {
    skin, face: { skin, iris: ['#34343f', '#77778a', '#c9c9d9'], pupil: '#15151c', lash: '#101018', brow: '#1e1e28', mouth: 'smile', tilt: 0, lid: 0.17, lip: '#e58c96' }, head: { jaw: 0.41, cheek: 0.056, len: 1.05 },
    chest: white, belly: black, pelvis: black, upperArm: white, foreArm: white, thigh: white, shin: white, shoe: white, sole: black, heel: 0.05, neckBand: white, boot: 0.15,
  });
  b.add('chest', skirtGeo({ y: 0.246, len: 0.03, r0: 0.036, r1: 0.052, zs: 1, pleats: 10, pleatAmp: 0.2, rows: 2, cols: 30, col: (_p, _v, o) => o.set(white) }));
  bow(b, 'chest', [0, 0.19, 0.076], [0.15, 0, 0], 0.115, 0.05, black);
  b.decal('chest', 'zDiamond', (g) => zBadge(g, true), 0.058, [0, 0.19, 0.1], [-0.15, 0, 0]);
  for (const y of [0.14, 0.105, 0.07]) b.add('chest', new THREE.SphereGeometry(0.006, 6, 5), gem, 'glow', [0, y, 0.098]);
  for (const y of [0.03, 0.08]) b.add('spine', new THREE.OctahedronGeometry(0.012), gem, 'glow', [0, y, 0.072]);
  for (const n of ['L', 'R'] as const) {
    b.add(`arm${n}`, ell(0.062, 0.085, 0.062), white, 'cloth', [0, -0.08, 0]);
    b.add(`arm${n}`, skirtGeo({ y: -0.17, len: 0.04, r0: 0.04, r1: 0.066, zs: 1, pleats: 9, pleatAmp: 0.25, rows: 2, cols: 32, col: (_p, _v, o) => o.set(black) }));
    b.add(`fore${n}`, ell(0.062, 0.105, 0.062), white, 'cloth', [0, -0.095, 0]);
    b.add(`fore${n}`, new THREE.CylinderGeometry(0.034, 0.034, 0.022, 10), black, 'cloth', [0, -0.185, 0]);
  }
  sleeve(b, 'fore', [[0.03, 0.185], [0.034, 0.2]], white, { ruffle: white, ruffleR: 0.062 });
  const sk = skirtRig(b, { y: 0.07, len: 0.82, r0: 0.105, r1: 0.45, wide: 1.2, flare: 0.68 });
  skirtLayer(b, sk, { y: 0.07, len: 0.82, r0: 0.104, r1: 0.44, pleats: 20, pleatAmp: 0.07, ...DENSE, col: (p, v, o) => o.set(hem(p, v, 0.8, 0.93, 22) ? black : white) });
  frill(b, sk, { y: 0.07, len: 0.82, r0: 0.104, r1: 0.44, col: gray });
  skirtLayer(b, sk, {
    y: 0.075, len: 0.7, r0: 0.11, r1: 0.43, rows: 8, skip: (p) => Math.abs(p) < 0.3, lenFn: (p) => 0.86 + 0.22 * Math.abs(Math.cos(p * 1.5)),
    col: (p, v, o) => o.set(v > 0.95 ? '#c9c9d6' : near(p, 1.25, 0.28) || near(p, -1.25, 0.28) ? white : black),
  });
  pin(b, chainAt(sk, 1.1)[0], [[new THREE.BoxGeometry(0.075, 0.1, 0.03), black]], onSk(sk, 1.0, 0.2, 0.03), [0, 1.0, 0]);
  b.decal('hips', 'z', (g) => zBadge(g), 0.06, onSk(sk, 1.0, 0.2, 0.052), [0, 1.0, 0], chainAt(sk, 1.1)[0]);
  bow(b, 'spine', [0, 0.03, -0.092], [0, 0, 0], 0.24, 0.11, black);
  b.decal('spine', 'zDiamond', (g) => zBadge(g, true), 0.06, [0, 0.03, -0.128], [0, Math.PI, 0]);
  for (const [n, sd] of [['L', 1], ['R', -1]] as const) b.decal(`arm${n}`, 'zDiamond', (g) => zBadge(g, true), 0.06, [sd * 0.074, -0.085, 0.008], [0, sd * 1.5708, 0]);
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 11, hime: true, w: 0.03, spread: 1.0 });
  sideLocks(b, H, { len: -0.2, hime: true, w: 0.034 });
  backHair(b, H, { len: -1.1, n: 15, wave: 0, flare: 0.08, spread: 1.7, fan: 0.5 });
  maidBand(b, white, black);
  animalEars(b, 'fox', '#17171d', '#f4f4f8');
  b.add('head', ell(0.075, 0.03, 0.02), black, 'cloth', [0, HC.y + RC * 0.62, RC * 0.82], [-0.75, 0, 0]);
  b.decal('head', 'sleepEyes', sleepEyes, 0.15, [0, HC.y + RC * 0.645, RC * 0.86], [-0.75, 0, 0]);
  // 发侧挂着的 Z 牌
  b.add('head', new THREE.BoxGeometry(0.056, 0.056, 0.008), black, 'cloth', [0.128, 0.132, 0.046], [0, 0.95, 0]);
  b.decal('head', 'z', (g) => zBadge(g), 0.058, [0.132, 0.132, 0.051], [0, 0.95, 0]);
  for (const dy of [0, 0.04]) b.add('head', new THREE.SphereGeometry(0.014, 8, 6), '#c9c9d6', 'cloth', [0.128, 0.09 - dy, 0.03]);
  const bk = C('#17171d'), wt = C('#f4f4f8');
  tail(b, {
    pts: [new Vec(0, -0.03, -0.09), new Vec(0, -0.12, -0.34), new Vec(0, -0.38, -0.5), new Vec(0, -0.66, -0.5), new Vec(0, -0.9, -0.4)],
    r: (s) => 0.035 + 0.115 * Math.pow(Math.sin(Math.PI * Math.pow(s, 0.75)), 0.8) + 0.004 * Math.sin(s * 60), bones: 5, mat: 'hair', seg: 30,
    spring: { grav: 0.3, stiff: 2.4 }, col: (s, _a, o) => o.copy(s > 0.74 ? wt : bk),
  });
  glider(b, black, white);
  return b.build();
}

// ============ Kimi娘：银白长卷发、月亮发饰、星空披风、长笛 ============
function kimi() {
  const b = start(), H: HairCol = { c0: '#f0f1fc', c1: '#c3d4fa' };
  const navy = '#272b68', white = '#fbfbff', silver = '#c9cbe2', skin = '#fff1ec';
  body(b, {
    skin, face: { skin, iris: ['#5a6aa2', '#9cb2e4', '#e2edff'], pupil: '#343e70', lash: '#4a4a6c', brow: '#bcc0da', mouth: 'flat', tilt: -0.03, eyeH: 0.246, sparkle: 'moon', lowerLash: 2, lip: '#ec9aa8' }, head: { jaw: 0.39, cheek: 0.062, len: 1.03 },
    chest: white, belly: navy, pelvis: white, upperArm: white, foreArm: white, thigh: white, shin: white, shoe: navy, heel: 0.055, neckBand: white,
  });
  b.add('chest', skirtGeo({ y: 0.246, len: 0.03, r0: 0.036, r1: 0.052, zs: 1, pleats: 10, pleatAmp: 0.2, rows: 2, cols: 30, col: (_p, _v, o) => o.set(white) }));
  bow(b, 'chest', [0, 0.19, 0.076], [0.15, 0, 0], 0.09, 0.042, navy);
  b.decal('chest', 'kRound', (g) => kBadge(g, true), 0.046, [0, 0.19, 0.102], [-0.15, 0, 0]);
  for (const y of [0.135, 0.1, 0.065]) b.add('chest', new THREE.SphereGeometry(0.0065, 6, 5), navy, 'cloth', [0, y, 0.099]);
  buttons(b, silver, 3, 0.02, 0.035, 0.03);
  capelet(b, 0.2, navy, silver);
  for (const sd of [1, -1]) b.decal('chest', 'moonStars', moonStars, 0.12, [sd * 0.13, 0.07, 0.108], [-0.12, sd * 0.42, sd * 0.2]);
  for (const n of ['L', 'R'] as const) {
    b.add(`fore${n}`, ell(0.06, 0.1, 0.06), white, 'cloth', [0, -0.095, 0]);
    b.add(`fore${n}`, new THREE.CylinderGeometry(0.033, 0.033, 0.02, 10), navy, 'cloth', [0, -0.185, 0]);
  }
  sleeve(b, 'fore', [[0.03, 0.185], [0.034, 0.2]], white, { ruffle: white, ruffleR: 0.066 });
  const sk = skirtRig(b, { y: 0.07, len: 0.86, r0: 0.105, r1: 0.45, wide: 1.2, flare: 0.68 });
  skirtLayer(b, sk, { y: 0.07, len: 0.6, r0: 0.104, r1: 0.34, pleats: 22, pleatAmp: 0.08, lenFn: (p) => 0.82 + 0.3 * (1 - Math.cos(p)) * 0.5, col: (_p, _v, o) => o.set(white) });
  frill(b, sk, { y: 0.07, len: 0.6, r0: 0.104, r1: 0.34, lenFn: (p) => 0.82 + 0.3 * (1 - Math.cos(p)) * 0.5, col: '#e6e9ff' });
  const star = C('#f4f4ff'), nv = C(navy);
  skirtLayer(b, sk, {
    y: 0.075, len: 0.86, r0: 0.11, r1: 0.45, skip: (p) => Math.abs(p) < 0.48, lenFn: (p) => 0.8 + 0.2 * (1 - Math.cos(p)) * 0.5,
    ...DENSE, col: (p, v, o) => { o.copy(hem(p, v, 0.86, 0.96, 28) ? C(silver) : nv); if (v < 0.84 && starry(p * 9, v * 24)) o.copy(star); },
  });
  pin(b, chainAt(sk, 0.8)[0], [[new THREE.CylinderGeometry(0.009, 0.009, 0.4, 6), silver]], onSk(sk, 0.8, 0.34, 0.03), [0.1, 0, 0.18]);
  pin(b, chainAt(sk, 0.42)[0], [[new THREE.BoxGeometry(0.075, 0.095, 0.022), navy]], onSk(sk, 0.42, 0.3, 0.03), [0, 0.42, 0]);
  for (const phi of [-2.2, -1.2, 1.5, 2.6]) b.decal('hips', 'moonStars', moonStars, 0.16, onSk(sk, phi, 0.55, 0.03), [-0.25, phi, 0], chainAt(sk, phi)[1]);
  b.decal('hips', 'k', (g) => kBadge(g), 0.085, onSk(sk, 0.42, 0.3, 0.046), [-0.3, 0.42, 0], chainAt(sk, 0.42)[0]);
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7, sweep: 0.1 });
  sideLocks(b, H, { len: -0.5, wave: 0.035 });
  backHair(b, H, { len: -1.1, n: 15, wave: 0.07, flare: 0.3, spread: 1.9, fan: 0.9, curl: 0.05, freq: 12 });
  maidBand(b, white, navy);
  b.add('head', new THREE.TorusGeometry(0.03, 0.007, 5, 14, 3.6).rotateZ(1.1), silver, 'cloth', [0.1, 0.215, 0.05], [0, 0.9, 0]);
  b.decal('head', 'prism', prism, 0.11, [0.13, 0.196, 0.044], [0, 0.9, 0]);
  bow(b, 'head', [0.122, 0.15, 0.02], [0, 1.2, 0], 0.07, 0.036, navy);
  b.decal('head', 'kRound', (g) => kBadge(g, true), 0.04, [0.139, 0.15, 0.027], [0, 1.2, 0]);
  const w = b.mount('weapon', 'handR', [0, -0.05, 0.02]);
  b.add(w, new THREE.CylinderGeometry(0.009, 0.009, 0.56, 8).rotateX(Math.PI / 2), silver, 'cloth', [0, 0, 0.12]);
  for (let i = 0; i < 6; i++) b.add(w, new THREE.SphereGeometry(0.008, 6, 5), '#eef0ff', 'cloth', [0, 0.01, 0.0 + i * 0.055]);
  b.add(w, new THREE.CylinderGeometry(0.012, 0.012, 0.03, 8).rotateX(Math.PI / 2), '#eef0ff', 'cloth', [0, 0, 0.39]);
  glider(b, navy, '#c3d4fa');
  return b.build();
}

// ============ Qwen娘：紫蓝长卷发加侧辫、小帽、深蓝披肩、紫色长裙、折扇 ============
function qwen() {
  const b = start(), H: HairCol = { c0: '#7a72e2', c1: '#a092f4' };
  const navy = '#2f2a7a', purple = '#6358d0', white = '#faf7ff', gold = '#d6b46c', skin = '#fff0e8';
  body(b, {
    skin, face: { skin, iris: ['#3a2a9a', '#6a5ae0', '#c4bcff'], pupil: '#22186a', lash: '#2a2060', brow: '#6a5ed0', mouth: 'smile', tilt: 0.02, eyeH: 0.24, lowerLash: 2, blush: 'rgba(255,170,110,0.5)', lip: '#e88c9c' }, head: { jaw: 0.44, cheek: 0.048, len: 1.08 },
    chest: white, belly: purple, pelvis: purple, upperArm: white, foreArm: white, thigh: null, shin: null, shoe: '#4a40b0', sole: gold, heel: 0.06, neckBand: white,
  });
  b.add('chest', new THREE.TorusGeometry(0.035, 0.004, 4, 16).rotateX(Math.PI / 2), gold, 'cloth', [0, 0.25, 0]);
  for (let i = 0; i < 3; i++) b.add('chest', ell(0.016, 0.006, 0.006), gold, 'cloth', [0, 0.17 - i * 0.04, 0.09 + (i === 1 ? 0.006 : 0)]);
  b.add('chest', new THREE.TorusGeometry(0.016, 0.005, 5, 14), gold, 'cloth', [0, 0.14, 0.098]);
  b.decal('spine', 'qwen', qwenBadge, 0.09, [0.03, 0.05, 0.09], [0, 0.1, 0]);
  for (const y of [-0.025, 0.125]) b.add('spine', new THREE.TorusGeometry(0.097, 0.005, 5, 24).rotateX(Math.PI / 2).scale(1, 1, 0.76), gold, 'cloth', [0, y, 0]);
  sleeve(b, 'fore', [[0.045, 0], [0.09, 0.1], [0.145, 0.22]], navy, { edge: gold, zs: 0.8 });
  for (const n of ['L', 'R'] as const) b.add(`arm${n}`, ell(0.058, 0.13, 0.058), navy, 'cloth', [0, -0.12, 0]);
  const sk = skirtRig(b, { y: 0.07, len: 0.86, r0: 0.105, r1: 0.46, wide: 1.2, flare: 0.7 });
  const pu = C(purple), pl = C('#8478ea');
  skirtLayer(b, sk, {
    y: 0.07, len: 0.86, r0: 0.104, r1: 0.455, pleats: 20, pleatAmp: 0.07,
    ...DENSE, col: (p, v, o) => { if (meander(((p / (Math.PI * 2)) % 1 + 1) % 1, (v - 0.8) / 0.12, 44)) o.set(gold); else if (Math.abs(p + 0.25) < 0.34) o.set(white); else o.copy(pu).lerp(pl, v * 0.6); },
  });
  frill(b, sk, { y: 0.07, len: 0.86, r0: 0.104, r1: 0.455, col: '#ece8ff' });
  drape(b, 'chest', {
    top: [-0.19, -0.1, 0, 0.1, 0.19].map((x) => new Vec(x, 0.16, -0.07 + Math.abs(x) * 0.3)),
    drop: (i, t) => new Vec((i - 2) * 0.08 * t, -(0.72 + 0.2 * (1 - Math.abs(i - 2) / 2)) * t, -0.14 * Math.sin(t * 1.5)),
    bones: 3, rows: 44, cols: 72, col: (u, v, o) => o.set(v > 0.975 || u < 0.03 || u > 0.97 || meander(u, (v - 0.8) / 0.15, 26) ? gold : navy),
  });
  tassel(b, 'spine', [0.03, 0.0, 0.085], 0.11, '#7a6ee6', gold);
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7, sweep: 0.24 });
  sideLocks(b, H, { len: -0.36, wave: 0.026 });
  braid(b, H, 1);
  backHair(b, H, { len: -1.02, n: 15, wave: 0.055, flare: 0.24, spread: 1.9, fan: 0.8, curl: 0.03 });
  // 小帽：斜戴在头顶右侧
  const hat: V3 = [-0.06, HC.y + RC * 0.93, 0.02], hr: V3 = [0.2, 0, 0.42];
  b.add('head', new THREE.CylinderGeometry(0.058, 0.062, 0.04, 16), navy, 'cloth', hat, hr);
  b.add('head', skirtGeo({ y: -0.012, len: 0.022, r0: 0.062, r1: 0.085, zs: 1, pleats: 12, pleatAmp: 0.16, rows: 2, cols: 36, col: (_p, _v, o) => o.set(white) }), null, 'cloth', hat, hr);
  b.decal('head', 'qwen', qwenBadge, 0.08, [-0.089, HC.y + RC * 0.8, 0.082], [0, -0.5, 0]);
  tassel(b, 'head', [-0.13, 0.11, 0.03], 0.07, '#7a6ee6', gold);
  // 折扇
  const w = b.mount('weapon', 'handR', [0, -0.05, 0.02]);
  const fan = new THREE.CircleGeometry(0.27, 14, Math.PI / 2 - 1.15, 2.3).rotateY(Math.PI / 2).rotateX(Math.PI / 2);
  b.add(w, paint(fan, (p, _n, o) => o.set('#efeaff').lerp(C('#5a4fd0'), Math.min(1, Math.hypot(p.y, p.z) / 0.27))));
  for (let i = 0; i < 7; i++) {
    const a = -1.15 + (i / 6) * 2.3;
    b.add(w, new THREE.BoxGeometry(0.004, 0.006, 0.27), gold, 'cloth', [0.002, Math.sin(a) * 0.135, Math.cos(a) * 0.135], [-a, 0, 0]);
  }
  glider(b, purple, white);
  return b.build();
}

// ============ Gemini娘：蓝紫渐变长发、双丸子、猫耳猫尾、异色瞳、星星饰品 ============
function gemini() {
  const b = start(), H: HairCol = { c0: '#5b7af2', c1: '#dc82f2' };
  const navy = '#2b2b68', white = '#fbf9ff', purple = '#8b5ef2', gold = '#e3c16f', skin = '#ffeee4';
  body(b, {
    skin, face: { skin, iris: ['#a86a10', '#f2c232', '#fff2a8'], irisR: ['#a01848', '#f04a7a', '#ffb4cc'], pupil: '#40204a', lash: '#3a2a6c', brow: '#5b62d8', mouth: 'cat', tilt: 0.12, pupilShape: 'slit', sparkle: 'star' }, head: { jaw: 0.43, cheek: 0.076, len: 1.0, chin: 0.12 },
    chest: navy, belly: null, pelvis: navy, upperArm: null, foreArm: white, thigh: null, shin: null, shoe: navy, sole: purple, heel: 0, neckBand: navy, bare: true,
  });
  b.decal('chest', 'geminiStar', geminiStar, 0.08, [0, 0.14, 0.106], [-0.1, 0, 0]);
  for (const s of [-1, 1]) b.add('chest', new THREE.BoxGeometry(0.045, 0.1, 0.01), white, 'cloth', [s * 0.055, 0.06, 0.078], [-0.1, s * 0.4, s * 0.25]);
  b.add('chest', new THREE.TorusGeometry(0.1, 0.012, 5, 24).rotateX(Math.PI / 2).scale(1, 1, 0.76), purple, 'cloth', [0, -0.02, 0]);
  for (const n of ['L', 'R'] as const) {
    b.add(`arm${n}`, skirtGeo({ y: -0.19, len: 0.035, r0: 0.036, r1: 0.06, zs: 1, pleats: 8, pleatAmp: 0.25, rows: 2, cols: 32, col: (_p, _v, o) => o.set('#d9c6ff') }));
    b.add(`shin${n}`, skirtGeo({ y: -0.1, len: 0.27, r0: 0.062, r1: 0.075, zs: 1, pleats: 12, pleatAmp: 0.06, rows: 4, cols: 24, flare: 0.4, col: (_p, _v, o) => o.set(white) }));
    b.add(`foot${n}`, ell(0.05, 0.02, 0.115), purple, 'cloth', [0, -0.06, 0.055]);
  }
  sleeve(b, 'fore', [[0.04, 0], [0.07, 0.1], [0.125, 0.21]], white, { edge: purple });
  sleeve(b, 'fore', [[0.045, 0.05], [0.08, 0.12]], navy);
  b.add('legL', new THREE.TorusGeometry(0.066, 0.006, 5, 16).rotateX(Math.PI / 2), navy, 'cloth', [0, -0.16, 0]);
  const sk = skirtRig(b, { y: 0.06, len: 0.3, r0: 0.108, r1: 0.28, bones: 2, n: 8, wide: 1.12, flare: 0.75 });
  skirtLayer(b, sk, { y: 0.055, len: 0.3, r0: 0.107, r1: 0.275, pleats: 16, pleatAmp: 0.09, rows: 5, col: (_p, _v, o) => o.set(white) });
  skirtLayer(b, sk, { y: 0.06, len: 0.24, r0: 0.111, r1: 0.26, rows: 5, lenFn: (p) => 0.8 + 0.3 * Math.abs(Math.sin(p * 1.5)), col: (_p, v, o) => o.set(v > 0.9 ? gold : navy) });
  b.decal('hips', 'geminiStar', geminiStar, 0.085, [0, 0.07, 0.11], [0, 0, 0]);
  b.decal('hips', 'geminiStar', geminiStar, 0.11, onSk(sk, -0.75, 0.55, 0.045), [-0.4, -0.75, 0], chainAt(sk, -0.75)[1]);
  const nv = C(navy), pp = C(purple);
  for (const s of [1, -1]) {
    const ch = drape(b, 'hips', {
      top: [0.6, 1.3, 2.0].map((a) => new Vec(Math.sin(a * s) * 0.115, 0.06, Math.cos(a * s) * 0.1)),
      drop: (i, t) => new Vec(s * (0.1 + i * 0.03) * t, -0.78 * t * (1 - 0.12 * Math.abs(i - 1)), (-0.1 - i * 0.05) * t), bones: 3,
      col: (u, v, o) => o.copy(nv).lerp(pp, v * 0.8).lerp(C(gold), u < 0.07 || u > 0.93 || v > 0.96 ? 1 : 0),
    });
    onBone(b, 'hips', ch[1][2], xf(star4(0.045), [s * 0.3, -0.76, -0.2]), '#c8a6ff');
  }
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7, sweep: 0.16 });
  sideLocks(b, H, { len: -0.4, wave: 0.03 });
  backHair(b, H, { len: -1.04, n: 15, wave: 0.065, flare: 0.3, spread: 1.9, fan: 0.9, curl: 0.05 });
  ahoge(b, H);
  for (const s of [-1, 1]) b.add('head', ell(0.045, 0.042, 0.045), H.c0, 'hair', [s * 0.1, 0.215, -0.045]);
  animalEars(b, 'cat', '#5560e0', '#ffb0c8');
  b.decal('head', 'geminiStar', geminiStar, 0.135, [0.104, 0.2, 0.066], [0, 0.9, 0.3]);
  b.decal('head', 'geminiStar', geminiStar, 0.05, [0.127, 0.148, 0.054], [0, 1.0, 0]);
  const c0 = C('#5b7af2'), c1 = C('#b06af2');
  tail(b, {
    pts: [new Vec(0, -0.04, -0.09), new Vec(0, -0.2, -0.3), new Vec(0.05, -0.45, -0.4), new Vec(0.12, -0.6, -0.3), new Vec(0.17, -0.62, -0.13)],
    r: (s) => 0.026 + 0.034 * Math.sin(Math.PI * Math.pow(s, 0.8)) + 0.003 * Math.sin(s * 70), bones: 5, mat: 'hair', seg: 28,
    spring: { grav: 0.15, stiff: 2.2 }, col: (s, _a, o) => o.copy(c0).lerp(c1, s),
  });
  glider(b, purple, '#aee6ff');
  return b.build();
}

// ============ Grok娘：金色双马尾、小皇冠、黑金哥特长裙、X 形巨斧 ============
function grok() {
  const b = start(), H: HairCol = { c0: '#f2d27c', c1: '#f8e4a6' };
  const black = '#1f1b20', red = '#9c1f2c', gold = '#d4a84a', white = '#ffffff', skin = '#ffeee4';
  body(b, {
    skin, face: { skin, iris: ['#1a3ac0', '#3a8aff', '#b4e2ff'], pupil: '#0c1e70', lash: '#5a3c14', brow: '#cfa23a', mouth: 'fang', tilt: 0.16, pupilShape: 'slit' }, head: { jaw: 0.48, cheek: 0.066, len: 1.04, chin: 0.1 },
    chest: black, belly: black, pelvis: black, upperArm: null, foreArm: black, thigh: '#3a2c30', shin: '#3a2c30', shoe: black, sole: gold, heel: 0.065, neckBand: black, bare: true,
  });
  b.add('chest', new THREE.LatheGeometry([new THREE.Vector2(0.05, 0.2), new THREE.Vector2(0.088, 0.27), new THREE.Vector2(0.104, 0.305)], 16, 0.75, Math.PI * 2 - 1.5), black);
  b.add('chest', new THREE.LatheGeometry([new THREE.Vector2(0.047, 0.2), new THREE.Vector2(0.084, 0.27), new THREE.Vector2(0.099, 0.303)], 16, 0.75, Math.PI * 2 - 1.5), red);
  bow(b, 'chest', [0, 0.2, 0.07], [0.15, 0, 0], 0.085, 0.04, black);
  b.decal('chest', 'grokRing', (g) => grokRing(g), 0.055, [0, 0.2, 0.094], [-0.15, 0, 0]);
  for (const s of [-1, 1]) b.add('chest', new THREE.OctahedronGeometry(0.01).scale(0.6, 1.5, 0.4), gold, 'cloth', [s * 0.045, 0.1, 0.1]);
  b.add('chest', skirtGeo({ y: 0.168, len: 0.035, r0: 0.118, r1: 0.14, zs: 0.76, pleats: 18, pleatAmp: 0.1, rows: 2, cols: 54, col: (_p, _v, o) => o.set(white) }));
  b.decal('spine', 'grokRing', (g) => grokRing(g), 0.095, [0, 0.03, 0.09], [0, 0, 0]);
  for (const n of ['L', 'R'] as const) {
    b.add(`arm${n}`, ell(0.056, 0.07, 0.056), black, 'cloth', [0, -0.13, 0]);
    b.add(`arm${n}`, skirtGeo({ y: -0.055, len: 0.035, r0: 0.03, r1: 0.062, zs: 1, pleats: 8, pleatAmp: 0.25, rows: 2, cols: 32, col: (_p, _v, o) => o.set(white) }));
  }
  sleeve(b, 'fore', [[0.038, 0], [0.06, 0.1], [0.105, 0.2]], black, { ruffle: white, ruffleR: 0.12, edge: gold });
  const sk = skirtRig(b, { y: 0.07, len: 0.9, r0: 0.105, r1: 0.47, wide: 1.2, flare: 0.66 });
  const hilo = (p: number) => 0.74 + 0.26 * (1 - Math.cos(p)) * 0.5;
  skirtLayer(b, sk, { y: 0.07, len: 0.9, r0: 0.103, r1: 0.44, pleats: 22, pleatAmp: 0.07, lenFn: hilo, col: (_p, _v, o) => o.set(red) });
  frill(b, sk, { y: 0.07, len: 0.9, r0: 0.103, r1: 0.44, lenFn: hilo, col: '#2c2830' });
  skirtLayer(b, sk, { y: 0.075, len: 0.82, r0: 0.11, r1: 0.47, pleats: 9, pleatAmp: 0.05, ...DENSE, lenFn: (p) => hilo(p) * (0.9 + 0.1 * Math.abs(Math.sin(p * 2))), col: (p, v, o) => o.set(v > 0.965 || hem(p, v, 0.8, 0.93, 22) ? gold : black) });
  b.decal('hips', 'grokRing', (g) => grokRing(g), 0.13, onSk(sk, 0.9, 0.23, 0.08), [-0.5, 0.9, 0], chainAt(sk, 0.9)[0]);
  bow(b, 'spine', [0, 0.03, -0.09], [0, 0, 0], 0.22, 0.1, black);
  hairCap(b, H);
  sideHair(b, H);
  capFlow(b, H);
  bangs(b, H, { n: 7, sweep: 0.12 });
  sideLocks(b, H, { len: -0.24, wave: 0.02 });
  twinTails(b, H, 0.92, 0.06);
  ahoge(b, H);
  elfEars(b, skin);
  const cy = HC.y + RC * 0.97;
  b.add('head', new THREE.CylinderGeometry(0.038, 0.034, 0.03, 10, 1, true), '#2a242c', 'cloth', [0, cy + 0.012, 0.03]);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    b.add('head', new THREE.ConeGeometry(0.01, 0.032, 4), gold, 'cloth', [Math.sin(a) * 0.036, cy + 0.04, 0.03 + Math.cos(a) * 0.036]);
  }
  for (const s of [1, -1]) {
    bow(b, 'head', [s * 0.125, 0.2, -0.04], [0, s * 0.5, s * 0.5], 0.1, 0.055, black);
    const wing = new THREE.Shape([[0, 0], [0.075, 0.04], [0.06, 0.005], [0.045, -0.02], [0.028, -0.005], [0.012, -0.025]].map(([x, y]) => new THREE.Vector2(x * s, y)));
    b.add('head', new THREE.ShapeGeometry(wing), '#3a2630', 'cloth', [s * 0.15, 0.175, -0.02], [0, s * 0.3, 0]);
  }
  // 巨斧：握柄沿手的 +Z 方向，斧头在前端
  const w = b.mount('weapon', 'handR', [0, -0.05, 0.02]);
  b.add(w, new THREE.CylinderGeometry(0.016, 0.016, 1.75, 8).rotateX(Math.PI / 2), '#2a2228', 'cloth', [0, 0, 0.1]);
  for (const z of [-0.74, -0.2, 0.55]) b.add(w, new THREE.CylinderGeometry(0.024, 0.024, 0.05, 8).rotateX(Math.PI / 2), gold, 'cloth', [0, 0, z]);
  b.add(w, new THREE.ConeGeometry(0.03, 0.14, 6).rotateX(-Math.PI / 2), gold, 'cloth', [0, 0, -0.84]);
  b.add(w, new THREE.ConeGeometry(0.028, 0.2, 6).rotateX(Math.PI / 2), '#2a2228', 'cloth', [0, 0, 1.08]);
  for (const s of [1, -1]) {
    const blade = new THREE.Shape();
    blade.moveTo(0.02, -0.2);
    blade.quadraticCurveTo(0.36, -0.36, 0.33, 0.0);
    blade.quadraticCurveTo(0.36, 0.36, 0.02, 0.2);
    blade.quadraticCurveTo(0.2, 0.0, 0.02, -0.2);
    const g = new THREE.ExtrudeGeometry(blade, { depth: 0.022, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.01, bevelSegments: 1 });
    g.translate(0, 0, -0.011).rotateX(Math.PI / 2).rotateZ(s > 0 ? 0 : Math.PI);
    b.add(w, paint(g, (p, _n, o) => o.set('#2a2228').lerp(C(gold), Math.abs(p.x) > 0.26 ? 1 : 0)), null, 'cloth', [0, 0, 0.78]);
    for (const t of [1, -1]) b.add(w, new THREE.BoxGeometry(0.34, 0.03, 0.03), gold, 'cloth', [0, 0, 0.78], [0, s * t * 0.75, 0]);
  }
  glider(b, red, black);
  return b.build();
}

const BUILDERS: Record<CharId, () => CharModel> = { claude, gpt, deepseek, glm, kimi, qwen, gemini, grok };
export function buildChar(id: CharId) { return BUILDERS[id](); }
