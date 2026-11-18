import * as THREE from 'three';
import { lathe, xf, paint } from '../render/geoutil';
import { clamp, lerp, saturate, smoothstep } from '../core/math';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import type { Proportions, SpringOpt, JointName } from './rig';
import type { Builder, MatKey, V3, Target } from './builder';
import { ell, strand, tube, skinAlong, skinRigid, skirtGeo, skinSkirt, headGeo, bowGeo, loft, skinByY, type Col, type SkirtOpt, type Sec, type HeadShape } from './geo';
import type { FaceStyle } from './face';

const Vec = THREE.Vector3;
export const P0: Proportions = { hipY: 0.9, spine: 0.09, chest: 0.12, neck: 0.215, head: 0.055, shoulderX: 0.142, shoulderY: 0.168, upperArm: 0.245, foreArm: 0.215, hipX: 0.075, hipDrop: 0.04, thigh: 0.42, shin: 0.385 };
export const HR = 0.114;
/** 发壳球心和半径（头关节本地坐标） */
export const HC = new Vec(0, 1.1 * HR + 0.002, -0.004), RC = HR * 1.075;
const dir = (phi: number, th: number) => new Vec(Math.sin(th) * Math.sin(phi), Math.cos(th), Math.sin(th) * Math.cos(phi));
/** 发壳球面上的点。phi：0 正前，π 正后；th：离头顶的角度 */
export const onCap = (phi: number, th: number, k = 1) => HC.clone().addScaledVector(dir(phi, th), RC * k);
const cyl = (phi: number, rho: number, y: number) => new Vec(Math.sin(phi) * rho, y, Math.cos(phi) * rho);
const mix = (a: Col, b: Col, t: number) => new THREE.Color(a).lerp(new THREE.Color(b), t);
export interface HairCol { c0: Col; c1: Col }

// ---------------- 身体 ----------------
export interface BodySpec {
  skin: Col; face: FaceStyle; chest: Col; pelvis: Col;
  /** 脸型：不写就是默认的鹅蛋脸 */
  head?: HeadShape;
  /** null 表示露出皮肤 */
  belly: Col | null; upperArm?: Col | null; foreArm?: Col | null; thigh?: Col | null; shin?: Col | null;
  shoe: Col; sole?: Col; heel?: number; bust?: number; neckBand?: Col;
  /** 露肩：胸口以上是皮肤 */
  bare?: boolean;
  /** 靴筒包到小腿多高（米）；不写就是低帮鞋 */
  boot?: number;
}
// 身体各段的截面（高度从关节算起）。w 半宽，d / db 前 / 后半厚。
const TORSO: Sec[] = [
  { y: -0.115, w: 0.03, d: 0.03 }, { y: -0.09, w: 0.09, d: 0.078 }, { y: -0.05, w: 0.122, d: 0.094 }, { y: 0, w: 0.13, d: 0.098 },
  { y: 0.05, w: 0.116, d: 0.086 }, { y: 0.105, w: 0.094, d: 0.07 }, { y: 0.16, w: 0.093, d: 0.07 }, { y: 0.21, w: 0.103, d: 0.078 },
  { y: 0.27, w: 0.118, d: 0.088, db: 0.084 }, { y: 0.32, w: 0.13, d: 0.09, db: 0.084 }, { y: 0.365, w: 0.136, d: 0.078 },
  { y: 0.395, w: 0.105, d: 0.062 }, { y: 0.42, w: 0.05, d: 0.045 }, { y: 0.445, w: 0.033, d: 0.034 }, { y: 0.5, w: 0.031, d: 0.032 },
];
const ARM: Sec[] = [
  { y: -0.462, w: 0.021 }, { y: -0.445, w: 0.022 }, { y: -0.38, w: 0.027 }, { y: -0.29, w: 0.033 }, { y: -0.245, w: 0.031 }, { y: -0.2, w: 0.032 },
  { y: -0.12, w: 0.037 }, { y: -0.04, w: 0.042 }, { y: 0.005, w: 0.043 }, { y: 0.03, w: 0.03 }, { y: 0.04, w: 0.012 },
];
const LEG: Sec[] = [
  { y: -0.815, w: 0.03 }, { y: -0.8, w: 0.031 }, { y: -0.72, w: 0.036 }, { y: -0.58, w: 0.05 }, { y: -0.5, w: 0.051 }, { y: -0.42, w: 0.05 },
  { y: -0.36, w: 0.053 }, { y: -0.2, w: 0.068 }, { y: -0.05, w: 0.079 }, { y: 0.02, w: 0.07 }, { y: 0.05, w: 0.04 },
];
/** 鞋头：一个前端收尖、压扁的椭球 */
function shoeGeo(rx: number, ry: number, rz: number) {
  const g = new THREE.SphereGeometry(1, 14, 10).scale(rx, ry, rz), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const z = p.getZ(i) / rz;
    if (z > 0) { p.setX(i, p.getX(i) * (1 - 0.38 * z * z)); p.setY(i, p.getY(i) * (1 - 0.35 * z)); }
  }
  g.computeVertexNormals();
  return g;
}
/**
 * 身体：躯干、手臂、腿都是连续的蒙皮曲面，关节处平滑弯曲（不是一节一节的玩偶关节）。
 * 同一段曲面按「衣服 / 皮肤」切成几块，分别用各自的材质。
 */
export function body(b: Builder, s: BodySpec) {
  const sk = s.skin, bust = s.bust ?? 1, B = (j: JointName) => b.fixedBone(j);
  const part = (parent: JointName, secs: Sec[], y0: number, y1: number, col: Col | null | undefined, stops: [number, number][], o: Parameters<typeof loft>[1] = {}) => {
    const g = paint(loft(secs, { y0, y1, radial: 28, step: 0.01, ...o }), col ?? sk);
    b.addSkinned(parent, skinByY(g, stops), col == null ? 'skin' : 'cloth');
  };
  const tStops: [number, number][] = [[0.05, B('hips')], [0.13, B('spine')], [0.17, B('spine')], [0.25, B('chest')], [0.432, B('chest')], [0.462, B('neck')], [0.47, B('neck')], [0.5, B('head')]];
  const bump = (x: number, y: number) => bust * 0.03 * Math.exp(-(((Math.abs(x) - 0.05) / 0.04) ** 2)) * Math.exp(-(((y - 0.288) / 0.046) ** 2));
  const top = s.bare ? 0.33 : 0.428;
  part('hips', TORSO, -0.115, 0.078, s.pelvis, tStops, { cap0: true });
  part('hips', TORSO, 0.078, 0.2, s.belly, tStops);
  part('hips', TORSO, 0.2, top, s.chest, tStops, { bump });
  {
    // 脖子靠近下巴的地方暗一点，是下巴投下来的影子，脸和脖子才分得开
    const g = loft(TORSO, { y0: top, y1: 0.5, bump, radial: 28, step: 0.01 }), base = new THREE.Color(sk), shade = new THREE.Color(sk).multiply(new THREE.Color(0.94, 0.8, 0.8));
    paint(g, (p, _n, o) => o.copy(base).lerp(shade, smoothstep(0.43, 0.468, p.y)));
    b.addSkinned('hips', skinByY(g, tStops), 'skin');
  }
  if (s.neckBand) b.add('neck', new THREE.CylinderGeometry(0.035, 0.039, 0.034, 14), s.neckBand, 'cloth', [0, 0.016, 0]);

  const h = headGeo(HR, s.head);
  b.add('head', h.back, sk, 'skin');
  b.setFace(h.front, s.face);
  for (const x of [-1, 1]) b.add('head', ell(0.012, 0.026, 0.02), sk, 'skin', [x * 0.107, h.cy - 0.024, -0.004]);

  for (const [n, x] of [['L', 1], ['R', -1]] as const) {
    const arm = `arm${n}` as const, fore = `fore${n}` as const, leg = `leg${n}` as const, shin = `shin${n}` as const, foot = `foot${n}` as const, hand = `hand${n}` as const;
    const aStops: [number, number][] = [[-P0.upperArm - 0.04, B(fore)], [-P0.upperArm + 0.04, B(arm)]];
    part(arm, ARM, -0.462, -P0.upperArm, s.foreArm, aStops, { cap0: true, radial: 18, n: 2 });
    part(arm, ARM, -P0.upperArm, 0.04, s.upperArm, aStops, { cap1: true, radial: 18, n: 2 });
    const lStops: [number, number][] = [[-P0.thigh - 0.045, B(shin)], [-P0.thigh + 0.045, B(leg)]];
    part(leg, LEG, -0.815, -P0.thigh, s.shin, lStops, { cap0: true, radial: 18, n: 2 });
    part(leg, LEG, -P0.thigh, 0.05, s.thigh, lStops, { cap1: true, radial: 18, n: 2 });
    // 手：手掌、四根手指、拇指
    b.add(hand, new RoundedBoxGeometry(0.024, 0.07, 0.058, 2, 0.011), sk, 'skin', [0, -0.04, 0.004]);
    for (const [z, len] of [[-0.019, 0.04], [-0.0065, 0.05], [0.0065, 0.047], [0.019, 0.036]])
      b.add(hand, new THREE.CapsuleGeometry(0.0068, len, 3, 6), sk, 'skin', [-x * 0.004, -0.078 - len / 2, z + 0.005], [0.12, 0, -x * 0.1]);
    b.add(hand, new THREE.CapsuleGeometry(0.0105, 0.03, 3, 8), sk, 'skin', [-x * 0.004, -0.05, 0.036], [0.7, 0, 0]);
    // 鞋
    const sole = s.sole ?? s.shoe, hl = s.heel ?? 0.02;
    b.add(foot, shoeGeo(0.043, 0.036, 0.108), s.shoe, 'cloth', [0, -0.022, 0.052]);
    b.add(foot, shoeGeo(0.045, 0.011, 0.11), sole, 'cloth', [0, -0.047, 0.052]);
    b.add(foot, new THREE.SphereGeometry(0.037, 10, 8), s.shoe, 'cloth', [0, 0.002, -0.004]);
    if (hl > 0.03) b.add(foot, new THREE.CylinderGeometry(0.022, 0.013, hl, 8), sole, 'cloth', [0, -0.056 + hl * 0.5, -0.032]);
    if (s.boot) {
      const y0 = -P0.shin - 0.005;
      b.add(shin, lathe([[0.038, y0], [0.045, y0 + s.boot * 0.5], [0.055, y0 + s.boot], [0.05, y0 + s.boot + 0.008]], 12), s.shoe);
    }
    b.rig.addCollider(b.rig.j[leg], [0, -0.2, 0.01], 0.078);
    b.rig.addCollider(b.rig.j[shin], [0, 0.0, 0.01], 0.066);
    b.rig.addCollider(b.rig.j[shin], [0, -0.2, 0], 0.056);
  }
  b.rig.addCollider(b.rig.j.chest, [0, 0.07, 0], 0.118);
  b.rig.addCollider(b.rig.j.spine, [0, 0.04, 0], 0.1);
  b.rig.addCollider(b.rig.j.hips, [0, -0.02, 0], 0.128);
}

// ---------------- 弹簧链工具 ----------------
/** 在一条曲线上按参数 sList 取节点，建一条弹簧骨骼链 */
export function chainOn(b: Builder, parent: Target, pts: THREE.Vector3[], sList: number[], opt?: SpringOpt) {
  const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
  return b.rig.addChain(b.J(parent), sList.map((s) => curve.getPoint(s)), opt);
}
const steps = (from: number, n: number) => Array.from({ length: n + 1 }, (_, i) => from + ((1 - from) * i) / n);

// ---------------- 头发 ----------------
export function hairCap(b: Builder, h: HairCol) {
  const g = new THREE.SphereGeometry(RC, 22, 12, 0, Math.PI * 2, 0, 1.92);
  g.rotateX(-0.6);
  g.translate(HC.x, HC.y, HC.z);
  b.add('head', g, h.c0, 'hair');
}
/**
 * 刘海：两层。底层是宽发片，彼此重叠，把额头盖严；上层是窄一些的发束，错开叠在缝上，做出层次。
 * part：中分（两边的发束各自向外撇）；hime：公主切（平直的齐刘海）。
 */
export function bangs(b: Builder, h: HairCol, o: { n?: number; yEnd?: number; sweep?: number; w?: number; hime?: boolean; spread?: number; part?: boolean } = {}) {
  const n = o.n ?? 7, spread = o.spread ?? 1.12, yE = o.yEnd ?? HC.y + 0.016, sw0 = o.hime ? 0 : o.sweep ?? 0.14;
  const lock = (phi: number, sw: number, yEnd: number, w: number, k: number, c0: Col, c1: Col) => {
    const thEnd = Math.acos(clamp((yEnd - HC.y) / RC, -1, 1));
    const pts = [onCap(phi * 0.45, 0.3, k), onCap(phi * 0.86, 0.86, k + 0.05), onCap(phi + sw * 0.5, 1.22, k + 0.075), onCap(phi + sw, thEnd, k + 0.045)];
    b.add('head', strand(pts, { w, t: 0.013, c0, c1, center: HC, seg: 9, taper: o.hime ? 12 : 2.1, tipW: o.hime ? 0.92 : 0.04, rootW: 0.7 }), null, 'hair');
  };
  for (let i = 0; i < n; i++) {
    const u = (i / (n - 1)) * 2 - 1, sw = sw0 * (o.part ? Math.sign(u) || 1 : 1);
    lock(u * spread, sw, yE - (o.hime ? 0 : Math.abs(u) * 0.024 - [0, 0.01, -0.005][i % 3]), o.w ?? 0.046, 1.0, h.c0, mix(h.c0, h.c1, 0.2));
  }
  if (o.hime) return;
  for (let i = 0; i < n - 1; i++) {
    const u = ((i + 0.5) / (n - 1)) * 2 - 1;
    if (o.part && Math.abs(u) < 0.2) continue;
    lock(u * spread, sw0 * 1.3 * (o.part ? Math.sign(u) : 1), yE - 0.01 - Math.abs(u) * 0.03, 0.026, 1.02, mix(h.c0, h.c1, 0.28), mix(h.c0, h.c1, 0.45));
  }
}
/** 鬓角：盖住太阳穴和耳朵的发片，让头发在两侧有厚度 */
export function sideHair(b: Builder, h: HairCol) {
  for (const s of [1, -1])
    for (const [p0, w] of [[1.05, 0.044], [1.4, 0.04]] as const) {
      const pts = [onCap(s * p0 * 0.75, 0.42), onCap(s * p0, 1.05, 1.07), onCap(s * (p0 + 0.08), 1.6, 1.07), new Vec(s * 0.112, 0.022, p0 > 1.2 ? -0.02 : 0.03)];
      b.add('head', strand(pts, { w, t: 0.014, c0: h.c0, c1: mix(h.c0, h.c1, 0.25), center: HC, seg: 9, taper: 2.4, rootW: 0.7 }), null, 'hair');
    }
}
/** 垂在脸颊两侧、落到胸前的鬓发 */
export function sideLocks(b: Builder, h: HairCol, o: { len?: number; w?: number; wave?: number; hime?: boolean } = {}) {
  const fix = b.fixedBone('head'), yEnd = o.len ?? -0.26, wave = o.wave ?? 0;
  for (const s of [1, -1]) {
    const pts = [onCap(s * 1.1, 0.72, 1.02), onCap(s * 1.2, 1.38, 1.09), new Vec(s * 0.112, 0.03, 0.04), new Vec(s * (0.112 + wave), yEnd * 0.5, 0.066), new Vec(s * (0.096 - wave * 0.6), yEnd, 0.08)];
    const g = strand(pts, { w: o.w ?? 0.036, t: 0.014, c0: h.c0, c1: mix(h.c0, h.c1, 0.6), up: new Vec(s * 0.45, 0, 1).normalize(), seg: 14, taper: o.hime ? 10 : 1.7, tipW: o.hime ? 0.85 : 0.04, rootW: 0.8 });
    const sN = steps(0.5, 3), bones = chainOn(b, 'head', pts, sN, { stiff: 2.6, drag: 0.4, grav: 0.5, radius: 0.02, maxAngle: 0.9 });
    b.addSkinned('head', skinAlong(g, bones, sN, fix), 'hair');
  }
}
export interface BackHairOpt {
  len: number; n?: number; spread?: number; chains?: number; w?: number;
  /** 发梢比发根向外撑开多少（米）：越大发量越蓬 */
  flare?: number;
  /** 发梢处占据的方位角相对头部的比例：越大越向两侧铺开 */
  fan?: number;
  /** 波浪的幅度（米）和疏密 */
  wave?: number; freq?: number;
  /** 发梢向外翘起的量 */
  curl?: number;
}
/** 披在背后的长发：一整片内衬填住缝隙，外面叠三层发束（宽的打底、窄的做层次、细的做碎发），由几条弹簧链带着飘 */
export function backHair(b: Builder, h: HairCol, o: BackHairOpt) {
  const n = o.n ?? 14, K = o.chains ?? 5, spread = o.spread ?? 1.85, flare = o.flare ?? 0.05, wave = o.wave ?? 0, fan = o.fan ?? 0.5, curl = o.curl ?? 0, freq = o.freq ?? 9, M = 6;
  const fix = b.fixedBone('head'), s0 = 3 / (3 + M), sN = steps(s0, 4);
  // 一缕头发的走向：前四个点贴着头，后面 M 个点一路垂下去，带波浪，越往下越向外
  const path = (a: number, len: number, wv: number, ph: number, dr: number) => {
    const pts = [onCap(Math.PI - a * 0.5, 0.3, 1.01), onCap(Math.PI - a, 1.0, 1.06 + dr), cyl(Math.PI - a * 0.8, 0.126 + dr, 0.045), cyl(Math.PI - a * 0.5, 0.127 + dr, -0.07)];
    for (let i = 1; i <= M; i++) {
      const t = i / M, w = wv * Math.pow(t, 0.6) * Math.sin(ph + t * freq), tip = i === M ? curl : 0;
      pts.push(cyl(Math.PI - a * lerp(0.5, fan, t) + w * 2.2, 0.13 + flare * Math.pow(t, 0.9) + dr + w + tip, lerp(-0.07, len, t) + tip * 0.6));
    }
    return pts;
  };
  const chains: number[][] = [];
  for (let c = 0; c < K; c++) chains.push(chainOn(b, 'head', path(spread * 0.85 * ((2 * c) / (K - 1) - 1), o.len, 0, 0, 0), sN, { stiff: 1.5, drag: 0.32, grav: 0.75, radius: 0.03, maxAngle: 1.0 }));
  // 内衬
  const cols = (K - 1) * 6, rows = 20, pos: number[] = [], colr: number[] = [], si: number[] = [], sw: number[] = [], idx: number[] = [];
  const cA = new THREE.Color(h.c0).multiplyScalar(0.8), cB = new THREE.Color(h.c1).multiplyScalar(0.84), cc = new THREE.Color();
  for (let j = 0; j <= cols; j++) {
    const u = j / cols, curve = new THREE.CatmullRomCurve3(path(spread * 0.92 * (u * 2 - 1), o.len * 0.94, wave * 0.4, j * 0.9, -0.016), false, 'catmullrom', 0.5);
    const x = Math.min(u * (K - 1), K - 1 - 1e-4), c0 = Math.floor(x), fa = x - c0;
    for (let i = 0; i <= rows; i++) {
      const s = 0.22 + 0.78 * (i / rows), p = curve.getPoint(s);
      pos.push(p.x, p.y, p.z);
      cc.copy(cA).lerp(cB, Math.pow((s - 0.22) / 0.78, 1.3));
      colr.push(cc.r, cc.g, cc.b);
      if (s <= sN[0]) { si.push(fix, 0, 0, 0); sw.push(1, 0, 0, 0); continue; }
      let k = 0;
      while (k < 3 && s >= sN[k + 1]) k++;
      const f = Math.min(1, (s - sN[k]) / (sN[k + 1] - sN[k])), k1 = Math.min(k + 1, 3);
      si.push(chains[c0][k], chains[c0][k1], chains[c0 + 1][k], chains[c0 + 1][k1]);
      sw.push((1 - fa) * (1 - f), (1 - fa) * f, fa * (1 - f), fa * f);
    }
  }
  for (let j = 0; j < cols; j++)
    for (let i = 0; i < rows; i++) {
      const a = j * (rows + 1) + i, c = a + rows + 1;
      idx.push(a, c, a + 1, a + 1, c, c + 1);
    }
  const sheet = new THREE.BufferGeometry();
  sheet.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  sheet.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  sheet.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  sheet.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
  sheet.setIndex(idx);
  sheet.computeVertexNormals();
  b.addSkinned('head', sheet, 'hair');
  // 三层发束
  const layers = [
    { m: n, w: 1, dr: 0, len: 1, wv: 1, mixc: 0 },
    { m: n - 3, w: 0.7, dr: 0.014, len: 0.93, wv: 1.25, mixc: 0.2 },
    { m: Math.round(n * 0.55), w: 0.56, dr: 0.022, len: 0.86, wv: 1.3, mixc: 0.35 },
  ];
  layers.forEach((L, li) => {
    for (let i = 0; i < L.m; i++) {
      const u = (i / (L.m - 1)) * 2 - 1, a = u * spread * (li ? 0.84 : 1);
      const len = o.len * L.len * (1 - 0.05 * ((i * 7) % 3)) * (1 - 0.08 * Math.abs(u));
      const pts = path(a, len, wave * L.wv, i * 2.3 + li * 1.7, L.dr), shade = 1 - 0.07 * ((i * 5) % 3);
      const g = strand(pts, { w: (o.w ?? 0.058) * L.w, t: 0.017, c0: new THREE.Color(mix(h.c0, h.c1, L.mixc)).multiplyScalar(shade), c1: h.c1, center: new Vec(0, pts[3].y, 0), seg: 22, taper: 2.6, rootW: 0.75 });
      const c = clamp(Math.round(((a / (spread * 0.85) + 1) / 2) * (K - 1)), 0, K - 1);
      b.addSkinned('head', skinAlong(g, chains[c], sN, fix), 'hair');
    }
  });
}
/** 头顶的发流：从发旋向后、向两侧铺开的几道发丝，让头顶不是一个光溜溜的球面 */
export function capFlow(b: Builder, h: HairCol, n = 11) {
  for (let i = 0; i < n; i++) {
    const a = ((i / (n - 1)) * 2 - 1) * 2.25;
    const pts = [onCap(Math.PI - a * 0.3, 0.12, 1.012), onCap(Math.PI - a * 0.8, 0.7, 1.024), onCap(Math.PI - a, 1.25, 1.03), onCap(Math.PI - a, 1.72, 1.024)];
    b.add('head', strand(pts, { w: 0.03, t: 0.008, c0: mix(h.c0, h.c1, 0.1 * (i % 3)), c1: h.c0, center: HC, seg: 10, taper: 3, rootW: 0.5, tipW: 0.3 }), null, 'hair');
  }
}
export function ahoge(b: Builder, h: HairCol, loop = false) {
  const t = HC.y + RC;
  const pts = loop
    ? [onCap(0, 0.1), new Vec(0.012, t + 0.05, 0.01), new Vec(0.05, t + 0.085, 0.015), new Vec(0.085, t + 0.06, 0.02), new Vec(0.06, t + 0.03, 0.02)]
    : [onCap(0, 0.1), new Vec(0.01, t + 0.045, 0.012), new Vec(0.045, t + 0.07, 0.02), new Vec(0.078, t + 0.048, 0.026)];
  b.add('head', strand(pts, { w: 0.011, t: 0.006, c0: h.c0, c1: h.c0, up: new Vec(0, 0, 1), seg: 8, taper: 1.6, rootW: 1 }), null, 'hair');
}
/** 双马尾：每边一束带波浪的发片 */
export function twinTails(b: Builder, h: HairCol, len = 0.85, wave = 0.03) {
  for (const s of [1, -1]) {
    const T = new Vec(s * 0.118, 0.19, -0.04), sN = steps(0.12, 4);
    const path = (j: number) => {
      const off = new Vec(Math.cos(j * 1.26) * 0.02, 0, Math.sin(j * 1.26) * 0.02), w = (t: number) => wave * Math.sin(j * 1.7 + t * 10);
      return [T.clone(), new Vec(s * 0.19, 0.16, -0.05).add(off), new Vec(s * (0.24 + w(0.3)), -len * 0.22, -0.06 + w(0.3)).add(off),
        new Vec(s * (0.25 + w(0.55)), -len * 0.5, -0.05).add(off), new Vec(s * (0.23 + w(0.8)), -len * 0.78, -0.04 + w(0.8)).add(off), new Vec(s * (0.27 + w(1)), -len, -0.02).add(off)];
    };
    const bones = chainOn(b, 'head', path(0), sN, { stiff: 1.8, drag: 0.3, grav: 0.8, radius: 0.04, maxAngle: 1.1 });
    for (let j = 0; j < 5; j++) {
      const g = strand(path(j), { w: 0.042, t: 0.016, c0: h.c0, c1: h.c1, center: new Vec(s * 0.1, -0.3, -0.05), seg: 16, taper: 2.6, rootW: 0.45 });
      b.addSkinned('head', skinAlong(g, bones, sN, b.fixedBone('head')), 'hair');
    }
  }
}
/** 搭在肩前的麻花辫 */
export function braid(b: Builder, h: HairCol, side = 1) {
  const pts = [new Vec(side * 0.105, 0.07, -0.04), new Vec(side * 0.128, -0.03, 0.0), new Vec(side * 0.11, -0.14, 0.068), new Vec(side * 0.085, -0.3, 0.095), new Vec(side * 0.078, -0.46, 0.095)];
  const c0 = new THREE.Color(h.c0), c1 = new THREE.Color(h.c1);
  const g = tube(pts, (s) => (0.024 - s * 0.006) * (1 + 0.3 * Math.abs(Math.sin(s * Math.PI * 9))) * (s > 0.97 ? 0.5 : 1), (s, _a, o) => o.copy(c0).lerp(c1, s * 0.7), 40, 8);
  const sN = steps(0.35, 3), bones = chainOn(b, 'head', pts, sN, { stiff: 2.4, drag: 0.4, grav: 0.6, radius: 0.025, maxAngle: 0.8 });
  b.addSkinned('head', skinAlong(g, bones, sN, b.fixedBone('head')), 'hair');
}

// ---------------- 头饰 ----------------
/** 女仆发箍：一圈荷叶边 */
export function maidBand(b: Builder, frill: Col = '#ffffff', band: Col = '#22264a') {
  for (let i = -5; i <= 5; i++) {
    const a = i * 0.24, p = HC.clone().add(new Vec(Math.sin(a) * (RC + 0.004), Math.cos(a) * (RC + 0.004), 0.03));
    b.add('head', ell(0.022, 0.028, 0.012), frill, 'cloth', [p.x, p.y + 0.012, p.z], [-0.25, 0, -a]);
  }
  b.add('head', new THREE.TorusGeometry(RC + 0.004, 0.007, 5, 20, 2.7), band, 'cloth', [HC.x, HC.y, 0.026], [0, 0, Math.PI / 2 - 1.35]);
}
/** 兽耳。kind: cat 猫耳、fox 大狐耳（横向展开）、fin 鲸鳍耳 */
export function animalEars(b: Builder, kind: 'cat' | 'fox' | 'fin', outer: Col, inner: Col) {
  for (const s of [1, -1]) {
    if (kind === 'fin') {
      b.add('head', ell(0.03, 0.085, 0.045), outer, 'cloth', [s * 0.155, 0.075, -0.02], [0.25, 0, s * 1.05]);
      b.add('head', ell(0.012, 0.06, 0.03), inner, 'cloth', [s * 0.15, 0.068, 0.0], [0.25, 0, s * 1.05]);
      continue;
    }
    const big = kind === 'fox', L = big ? 0.2 : 0.095, W = big ? 0.075 : 0.05, tilt = big ? 1.12 : 0.42;
    const base: V3 = big ? [s * 0.085, HC.y + RC * 0.78, -0.01] : [s * 0.072, HC.y + RC * 0.86, 0.0];
    const cone = (r: number, len: number) => new THREE.ConeGeometry(r, len, 7).translate(0, len / 2, 0).scale(1, 1, 0.5);
    b.add('head', cone(W, L), outer, 'hair', base, [0, 0, -s * tilt]);
    b.add('head', cone(W * 0.62, L * 0.74), inner, 'cloth', [base[0], base[1], base[2] + 0.016], [0, 0, -s * tilt]);
  }
}
export function elfEars(b: Builder, skin: Col) {
  for (const s of [1, -1]) b.add('head', new THREE.ConeGeometry(0.018, 0.075, 6).scale(1, 1, 0.45), skin, 'skin', [s * 0.14, 0.108, -0.012], [0.2, 0, -s * 1.25]);
}
/** 龙角：从头顶两侧向上、向后弯 */
export function horns(b: Builder, c0: Col, c1: Col) {
  const a = new THREE.Color(c0), z = new THREE.Color(c1);
  for (const s of [1, -1]) {
    const pts = [new Vec(s * 0.075, 0.215, -0.01), new Vec(s * 0.118, 0.275, -0.03), new Vec(s * 0.128, 0.345, -0.045), new Vec(s * 0.1, 0.405, -0.035), new Vec(s * 0.078, 0.43, -0.015)];
    b.add('head', tube(pts, (t) => (0.03 - t * 0.026) * (1 + 0.12 * Math.sin(t * 34)), (t, _g, o) => o.copy(a).lerp(z, t), 22, 8), null, 'cloth');
  }
}
export function bow(b: Builder, t: Target, p: V3, r: V3, w: number, h: number, col: Col, knot: Col = col) {
  const [l1, l2, k, t1, t2] = bowGeo(w, h);
  b.add(t, t1, col, 'cloth', p, r).add(t, t2, col, 'cloth', p, r).add(t, l1, col, 'cloth', p, r).add(t, l2, col, 'cloth', p, r).add(t, k, knot, 'cloth', p, r);
}
/** 太阳花：一圈花瓣加花心 */
export function sunburst(b: Builder, t: Target, p: V3, r: V3, R: number, petal: Col, core: Col, n = 12) {
  const parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    parts.push(paint(xf(new THREE.ConeGeometry(R * 0.2, R * 0.75, 4).scale(1, 1, 0.3), [Math.sin(a) * R * 0.62, Math.cos(a) * R * 0.62, 0], [0, 0, -a]), petal));
  }
  parts.push(paint(ell(R * 0.34, R * 0.34, R * 0.16, 10), core));
  for (const g of parts) b.add(t, g, null, 'cloth', p, r);
}
/** 一段垂下的流苏 */
export function tassel(b: Builder, t: Target, p: V3, len: number, col: Col, cap: Col = '#e8c56a') {
  b.add(t, new THREE.SphereGeometry(len * 0.13, 6, 5), cap, 'cloth', [p[0], p[1], p[2]]);
  b.add(t, new THREE.ConeGeometry(len * 0.16, len, 6).rotateX(Math.PI), col, 'cloth', [p[0], p[1] - len * 0.55, p[2]]);
}

// ---------------- 衣袖 ----------------
/** 喇叭袖 / 灯笼袖：挂在前臂（或上臂）上的旋转体。prof 是 [半径, 沿手臂向下的距离] */
export function sleeve(b: Builder, joint: 'arm' | 'fore', prof: [number, number][], col: Col, o: { edge?: Col; ruffle?: Col; ruffleR?: number; zs?: number } = {}) {
  for (const n of ['L', 'R'] as const) {
    const j = `${joint}${n}` as const, last = prof[prof.length - 1];
    b.add(j, lathe(prof.map(([r, d]) => [r, -d] as [number, number]).reverse(), 14).scale(1, 1, o.zs ?? 1), col);
    if (o.edge) b.add(j, new THREE.TorusGeometry(last[0], 0.006, 5, 18).rotateX(Math.PI / 2).scale(1, 1, o.zs ?? 1), o.edge, 'cloth', [0, -last[1], 0]);
    if (o.ruffle) // 袖口的荷叶边：比袖口略大一圈，向下收一小段
      b.add(j, skirtGeo({ y: -last[1] + 0.008, len: 0.04, r0: last[0] * 0.96, r1: last[0] * 1.14, zs: o.zs ?? 1, pleats: 14, pleatAmp: 0.07, rows: 3, cols: 56, col: (_p, _v, c) => c.set(o.ruffle!) }));
  }
}

// ---------------- 裙子 ----------------
export interface SkirtRig { chains: number[][]; len: number; y: number; r0: number; r1: number; wide: number; flare: number; zs: number }
/**
 * 给裙子建一圈弹簧链（挂在髋部）。之后可以往上叠多层裙片。
 * wide：下摆整体放宽的倍数（各层裙片的 r1 都会乘上它）；flare：小于 1 时是钟形（上面先撑开，下面收直）。
 */
export function skirtRig(b: Builder, o: { n?: number; y: number; len: number; r0: number; r1: number; zs?: number; bones?: number; spring?: SpringOpt; wide?: number; flare?: number }): SkirtRig {
  const n = o.n ?? 10, nb = o.bones ?? 3, zs = o.zs ?? 0.86, chains: number[][] = [], wide = o.wide ?? 1, flare = o.flare ?? 0.8, r1 = o.r1 * wide;
  for (let c = 0; c < n; c++) {
    const phi = (c / n) * Math.PI * 2, nodes: THREE.Vector3[] = [];
    for (let k = 0; k <= nb; k++) {
      const v = k / nb, r = lerp(o.r0, r1, Math.pow(v, flare));
      nodes.push(new Vec(Math.sin(phi) * r, o.y - o.len * v, Math.cos(phi) * r * zs));
    }
    chains.push(b.rig.addChain(b.rig.j.hips, nodes, { stiff: 3.2, drag: 0.42, grav: 0.9, radius: 0.035, maxAngle: 0.85, ...o.spring }));
  }
  return { chains, len: o.len, y: o.y, r0: o.r0, r1, wide, flare, zs };
}
/** 裙面上某个方位、某个高度处的点（髋部本地坐标）：往裙子上钉蝴蝶结之类的东西时用 */
export function onSkirt(rig: SkirtRig, phi: number, v: number, out = 0.012): V3 {
  const r = lerp(rig.r0, rig.r1, Math.pow(v, rig.flare)) + out;
  return [Math.sin(phi) * r, rig.y - rig.len * v, Math.cos(phi) * r * rig.zs];
}
export function skirtLayer(b: Builder, rig: SkirtRig, o: SkirtOpt) {
  // 裙片靠腰的地方压暗一点、越往下摆越亮，裙子才有体积感
  const shaded: SkirtOpt['col'] = (p, v, out) => { o.col(p, v, out); out.multiplyScalar(0.86 + 0.14 * Math.min(1, v * 1.4)); };
  const g = skirtGeo({ flare: rig.flare, ...o, col: o.v0 ? o.col : shaded, r1: o.r1 * rig.wide, rows: o.v0 ? o.rows ?? 4 : Math.max(o.rows ?? 0, 24), cols: Math.max(o.cols ?? 0, 96) }), av = g.attributes.aV, k = o.len / rig.len;
  // 短于弹簧链的裙片，只跟着链的上半段动
  for (let i = 0; i < av.count; i++) av.setX(i, Math.min(1, av.getX(i) * k * (o.lenFn ? 1.15 : 1)));
  b.addSkinned('hips', skinSkirt(g, rig.chains));
}
/** 常用的裙摆配色：底色 + 下摆色带 */
export const band = (base: Col, hem: Col, at = 0.9) => {
  const a = new THREE.Color(base), z = new THREE.Color(hem);
  return (_phi: number, v: number, out: THREE.Color) => { out.copy(v > at ? z : a); };
};

// ---------------- 尾巴 / 披风 ----------------
export interface TailOpt { pts: THREE.Vector3[]; r: (s: number) => number; col: (s: number, a: number, out: THREE.Color) => void; bones?: number; flatten?: number; spring?: SpringOpt; mat?: 'cloth' | 'hair'; seg?: number }
export function tail(b: Builder, o: TailOpt) {
  const sN = steps(0, o.bones ?? 5);
  const bones = chainOn(b, 'hips', o.pts, sN, { stiff: 2.4, drag: 0.3, grav: 0.25, radius: 0.04, maxAngle: 0.7, ...o.spring });
  b.addSkinned('hips', skinAlong(tube(o.pts, o.r, o.col, o.seg ?? 22, 10, o.flatten ?? 1), bones, sN), o.mat ?? 'cloth');
  return bones;
}
/** 一片挂在某关节上的布（披风、飘带、外袍下摆）：由几条竖向的弹簧链带动 */
export function drape(b: Builder, parent: Target, o: { top: THREE.Vector3[]; drop: (i: number, t: number) => THREE.Vector3; bones?: number; cols?: number; rows?: number; col: (u: number, v: number, out: THREE.Color) => void; spring?: SpringOpt }) {
  const nb = o.bones ?? 3, K = o.top.length, chains: number[][] = [];
  for (let c = 0; c < K; c++) {
    const nodes: THREE.Vector3[] = [];
    for (let k = 0; k <= nb; k++) nodes.push(o.top[c].clone().add(o.drop(c, k / nb)));
    chains.push(b.rig.addChain(b.J(parent), nodes, { stiff: 2.2, drag: 0.36, grav: 0.8, radius: 0.03, maxAngle: 1.0, ...o.spring }));
  }
  const rows = o.rows ?? nb * 3, cols = o.cols ?? (K - 1) * 4, pos: number[] = [], colr: number[] = [], idx: number[] = [];
  const si: number[] = [], sw: number[] = [], cc = new THREE.Color(), A = new Vec(), B = new Vec();
  for (let i = 0; i <= rows; i++) {
    const v = i / rows;
    for (let j = 0; j <= cols; j++) {
      const u = j / cols, x = Math.min(u * (K - 1), K - 1 - 1e-4), c0 = Math.floor(x), fa = x - c0;
      A.copy(o.top[c0]).add(o.drop(c0, v));
      B.copy(o.top[c0 + 1]).add(o.drop(c0 + 1, v));
      A.lerp(B, fa);
      pos.push(A.x, A.y, A.z);
      o.col(u, v, cc);
      colr.push(cc.r, cc.g, cc.b);
      const y = Math.min(v * nb, nb - 1e-4), k = Math.floor(y), k1 = Math.min(k + 1, nb - 1), fv = k1 === k ? 0 : y - k;
      si.push(chains[c0][k], chains[c0][k1], chains[c0 + 1][k], chains[c0 + 1][k1]);
      sw.push((1 - fa) * (1 - fv), (1 - fa) * fv, fa * (1 - fv), fa * fv);
    }
  }
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      const a = i * (cols + 1) + j, c = a + cols + 1;
      idx.push(a, c, a + 1, a + 1, c, c + 1);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
  g.setIndex(idx);
  g.computeVertexNormals();
  b.addSkinned(parent, g);
  return chains;
}
/** 披在肩上的短披肩：从领口顺着肩膀垂下来，前后扁、左右宽。len 是垂下多长。 */
export function capelet(b: Builder, len: number, col: Col | ((p: THREE.Vector3, n: THREE.Vector3, out: THREE.Color) => void), edge?: Col) {
  const y1 = 0.2 - len;
  const secs: Sec[] = [
    { y: y1, w: 0.212, d: 0.118, db: 0.11 }, { y: lerp(y1, 0.15, 0.5), w: 0.206, d: 0.114, db: 0.106 }, { y: 0.15, w: 0.186, d: 0.102, db: 0.096 },
    { y: 0.185, w: 0.145, d: 0.086 }, { y: 0.205, w: 0.085, d: 0.066 }, { y: 0.218, w: 0.046, d: 0.044 },
  ];
  b.add('chest', paint(loft(secs, { radial: 72, step: 0.006, n: 2.2 }), col));
  if (edge) b.add('chest', loft(secs.map((s) => ({ ...s, w: s.w + 0.002, d: (s.d ?? s.w) + 0.002, db: (s.db ?? s.d ?? s.w) + 0.002 })), { y0: y1, y1: y1 + 0.012, radial: 48, n: 2.2 }), edge);
}
/**
 * 裙摆下沿的一圈荷叶边。len / r0 / r1 照抄它所接的那层裙片的数值即可：
 * 这里会自动把它放到裙片下沿往下一小段、稍微撑开一点的位置，褶子很密。
 */
export function frill(b: Builder, rig: SkirtRig, o: Omit<SkirtOpt, 'col'> & { col: Col }) {
  const c = new THREE.Color(o.col);
  skirtLayer(b, rig, { pleats: 44, pleatAmp: 0.032, rows: 5, ...o, cols: 264, len: o.len * 1.085, r1: o.r1 * 1.095, v0: 0.922, col: (_p, _v, out) => out.copy(c) });
}
/** 胸前的褶边领饰：几层小荷叶边叠着垂下来 */
export function jabot(b: Builder, y: number, z: number, n = 3, col: Col = '#ffffff') {
  for (let i = 0; i < n; i++)
    b.add('chest', skirtGeo({ y: 0, len: 0.034, r0: 0.012, r1: 0.034 - i * 0.004, zs: 0.5, pleats: 7, pleatAmp: 0.16, rows: 3, cols: 42, skip: (p) => Math.abs(p) > 1.5, col: (_p, _v, c) => c.set(col) }), null, 'cloth', [0, y - i * 0.026, z - i * 0.004]);
}
/** 腰封上的两排纽扣 */
export function buttons(b: Builder, col: Col, rows = 3, y0 = 0.02, dy = 0.035, x = 0.028) {
  for (let i = 0; i < rows; i++) for (const s of [-1, 1]) b.add('spine', new THREE.SphereGeometry(0.008, 6, 5), col, 'cloth', [s * x, y0 + i * dy, 0.07]);
}
/** 把一块东西整体绑到弹簧骨骼上（尾鳍、发饰挂坠等） */
export function onBone(b: Builder, parent: Target, bone: number, geo: THREE.BufferGeometry, col: Col | null, mat: 'cloth' | 'hair' = 'cloth') {
  if (col != null) paint(geo, col);
  b.addSkinned(parent, skinRigid(geo, bone), mat);
}
export { saturate };
