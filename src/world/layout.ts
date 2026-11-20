import { fbm, noise2, smoothstep, lerp } from '../core/math';

export const WORLD = { size: 640, half: 320, cell: 2, n: 321, sea: 0 };

/** 地图上的固定地点。北 = -z，东 = +x。 */
export const POI = {
  start: { x: 0, z: 72 },
  campA: { x: -74, z: 30 },
  lake: { x: 115, z: 25, r: 70 },
  islet: { x: 115, z: 25 },
  plateau: { x: -10, z: -150, r: 78 },
  peak: { x: -38, z: -184 },
  tower: { x: 24, z: -136 },
  ruins: { x: -95, z: 160, r: 30 },
  forest: { x: -175, z: -30, r: 72 },
  campB: { x: -160, z: -48 },
  campC: { x: 118, z: 150 },
  updraft: { x: -103, z: -128 },
};

/**
 * 八家 AI 公司的小屋。id 对应队伍里的角色；yaw 是门朝哪边（0 = 朝南 +z）。
 * 位置沿着一圈路分布，绕一圈大约十来分钟。
 */
export const HOUSES = [
  { id: 'claude', company: 'Anthropic', x: 30, z: 98, yaw: -2.28 },
  { id: 'gpt', company: 'OpenAI', x: -46, z: -128, yaw: 1.57 },
  { id: 'deepseek', company: 'DeepSeek', x: 61, z: 22, yaw: -0.3 },
  { id: 'glm', company: '즈푸 Z.ai', x: -128, z: 20, yaw: 2.29 },
  { id: 'kimi', company: 'Moonshot AI', x: 100, z: -72, yaw: -0.84 },
  { id: 'qwen', company: '알리바바 클라우드 · 통이', x: 62, z: 150, yaw: -2.56 },
  { id: 'gemini', company: 'Google', x: -22, z: 150, yaw: -3.01 },
  { id: 'grok', company: 'xAI', x: -140, z: 96, yaw: 2.36 },
] as const;

/** 三块插在地里的巨型显卡。yaw 是风扇朝哪边 */
export const GPUS = [
  { x: 20, z: 48, yaw: -0.69 },
  { x: -12, z: -112, yaw: 0.2 },
  { x: 150, z: 96, yaw: -2.2 },
] as const;
/** 随机森林深处的数据中心遗址 */
export const DATACENTER = { x: -175, z: -30 };

/** 土路：影响地面颜色、长不长草，路面上还铺着发光的电路走线 */
export const PATHS: [number, number][][] = [
  [[0, 72], [-20, 52], [-48, 36], [-74, 30]],
  [[0, 72], [-28, 104], [-64, 136], [-95, 160]],
  [[0, 72], [4, 30], [-2, -20], [-6, -58]],
  [[-74, 30], [-112, 6], [-140, -24], [-160, -48]],
  // 通往各家小屋的支路
  [[0, 72], [16, 86], [30, 98]],
  [[30, 98], [48, 124], [62, 150]],
  [[-28, 104], [-24, 128], [-22, 150]],
  [[-74, 30], [-108, 62], [-140, 96]],
  [[4, 30], [30, 33], [61, 22]],
  [[30, 33], [44, -10], [70, -44], [100, -72]],
  [[-112, 6], [-120, 14], [-128, 20]],
];

/** 沿折线每隔 step 米取一个点，带这一段的方向和累计里程 */
export function samplePath(path: [number, number][], step: number) {
  const out: { x: number; z: number; tx: number; tz: number; u: number }[] = [];
  let u = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const [ax, az] = path[i], [bx, bz] = path[i + 1], len = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(len / step));
    for (let k = i === 0 ? 0 : 1; k <= n; k++) out.push({ x: ax + ((bx - ax) * k) / n, z: az + ((bz - az) * k) / n, tx: (bx - ax) / len, tz: (bz - az) / len, u: u + (len * k) / n });
    u += len;
  }
  return out;
}

function segDist(px: number, pz: number, ax: number, az: number, bx: number, bz: number) {
  const dx = bx - ax, dz = bz - az;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz)));
  return Math.hypot(px - ax - dx * t, pz - az - dz * t);
}
export function pathDist(x: number, z: number) {
  let d = 1e9;
  for (const p of PATHS)
    for (let i = 0; i < p.length - 1; i++) d = Math.min(d, segDist(x, z, p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]));
  return d + 1.2 * noise2(x * 0.15, z * 0.15);
}

const base = (x: number, z: number) =>
  7.5 + 5.0 * fbm(x * 0.0055 + 3.1, z * 0.0055 - 7.3, 4) + 1.3 * fbm(x * 0.022 + 40, z * 0.022 + 12, 3);

/** 压平的区域：ri 以内完全是 h，到 r 过渡回原地形 */
const FLAT: { x: number; z: number; r: number; ri: number; h: number; k: number }[] = [
  { ...POI.start, r: 36, ri: 14, h: 7.2, k: 0.85 },
  { ...POI.campA, r: 26, ri: 12, h: base(POI.campA.x, POI.campA.z), k: 0.8 },
  { ...POI.campB, r: 24, ri: 11, h: base(POI.campB.x, POI.campB.z), k: 0.8 },
  { ...POI.campC, r: 26, ri: 12, h: base(POI.campC.x, POI.campC.z), k: 0.8 },
  { x: POI.ruins.x, z: POI.ruins.z, r: POI.ruins.r + 16, ri: POI.ruins.r + 2, h: 9, k: 1 },
];

/** 高地的两级台阶遮罩：m1 是第一级，m2 是顶 */
export function plateauMask(x: number, z: number) {
  const P = POI.plateau;
  const d = Math.hypot(x - P.x, z - P.z) + 16 * noise2(x * 0.018 + 9.1, z * 0.018 + 2.2);
  return { m1: smoothstep(P.r + 8, P.r + 1, d), m2: smoothstep(P.r - 6, P.r - 13, d) };
}
export function forestMask(x: number, z: number) {
  const F = POI.forest;
  return smoothstep(F.r, F.r - 30, Math.hypot(x - F.x, z - F.z) + 14 * noise2(x * 0.02 + 5.5, z * 0.02 - 3.3));
}
export function ruinsMask(x: number, z: number) {
  const R = POI.ruins;
  return smoothstep(R.r + 3, R.r - 2, Math.hypot(x - R.x, z - R.z));
}

function rawHeight(x: number, z: number) {
  let h = base(x, z);
  h += forestMask(x, z) * 2.5 * fbm(x * 0.03 + 7, z * 0.03 + 3, 2);
  for (const f of FLAT) h = lerp(h, f.h, f.k * smoothstep(f.r, f.ri, Math.hypot(x - f.x, z - f.z)));

  const { m1, m2 } = plateauMask(x, z);
  if (m1 > 0) {
    h = lerp(h, 8.5, m2 * 0.75) + 21 * m1 + 21 * m2 + m2 * 2.6 * fbm(x * 0.03, z * 0.03, 3);
    const dk = Math.hypot(x - POI.peak.x, z - POI.peak.z);
    h += 27 * Math.pow(smoothstep(36, 0, dk), 1.5) * m2;
  }

  const L = POI.lake;
  const dl = Math.hypot(x - L.x, z - L.z) + 9 * noise2(x * 0.03 + 1.7, z * 0.03 + 8.8);
  h = lerp(h, -5.5, smoothstep(L.r, L.r - 28, dl));
  h = lerp(h, 3.4, smoothstep(17, 8, Math.hypot(x - POI.islet.x, z - POI.islet.z)));

  const r = Math.hypot(x, z) + 26 * noise2(x * 0.011 + 5, z * 0.011 + 9);
  return lerp(-10, h, smoothstep(292, 226, r));
}

// 每间小屋、每块显卡、数据中心脚下都垫平一块地：垫到这一点原本的高度
// 湖边那间是例外：地垫得小而低，栈桥才够得着水面
const PADS: { x: number; z: number; r0: number; r1: number; yard: number; h?: number }[] = [
  ...HOUSES.map((h) => (h.id === 'deepseek' ? { x: h.x, z: h.z, r0: 8, r1: 17, yard: 8, h: 1.5 } : { x: h.x, z: h.z, r0: 13, r1: 25, yard: 10 })),
  ...GPUS.map((g) => ({ x: g.x, z: g.z, r0: 8, r1: 17, yard: 7.5 })),
  { ...DATACENTER, r0: 9, r1: 19, yard: 8.5 },
];
const PAD_H = PADS.map((p) => p.h ?? Math.max(1.6, rawHeight(p.x, p.z)));
/** 小屋的院子、显卡和机柜脚下的空地：m 是 0（外面）到 1（里面），tech 表示是不是机器脚下 */
export function yardMask(x: number, z: number) {
  let m = 0, tech = false;
  for (let i = 0; i < PADS.length; i++) {
    const p = PADS[i], d = Math.hypot(x - p.x, z - p.z);
    if (d > p.yard + 4) continue;
    const k = smoothstep(p.yard + 1.2, p.yard - 0.8, d + 1.3 * noise2(x * 0.3 + i, z * 0.3));
    if (k > m) { m = k; tech = i >= HOUSES.length; }
  }
  return { m, tech };
}
export const houseGround = (i: number) => PAD_H[i];

/** 整个世界的高度函数（海平面是 0） */
export function terrainHeight(x: number, z: number) {
  let h = rawHeight(x, z);
  for (let i = 0; i < PADS.length; i++) {
    const p = PADS[i], d = Math.hypot(x - p.x, z - p.z);
    if (d < p.r1) h = lerp(h, PAD_H[i], smoothstep(p.r1, p.r0, d));
  }
  return h;
}
