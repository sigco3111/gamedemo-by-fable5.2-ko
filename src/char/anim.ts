import { POSE_SIZE, JI, JOINTS, type PoseVec, type JointName, type Rig } from './rig';
import { lerp, saturate, smoothstep } from '../core/math';

type J = number | [number, number?, number?];
/** 姿势的写法：只写要动的关节。躯干 [前俯, 左转, 左倾]；手臂 [前抬, 外展, 水平前摆]；前臂 弯曲；大腿 [前抬, 外展]；小腿 弯曲 */
export type PoseSpec = { hy?: number; hz?: number } & Partial<Record<JointName, J>>;

export function P(spec: PoseSpec, base?: PoseVec): PoseVec {
  const v = new Float32Array(POSE_SIZE);
  if (base) v.set(base);
  if (spec.hy !== undefined) v[0] = spec.hy;
  if (spec.hz !== undefined) v[1] = spec.hz;
  for (const n of JOINTS) {
    const s = spec[n];
    if (s === undefined) continue;
    const i = 3 + JI[n] * 3, a = typeof s === 'number' ? [s, 0, 0] : s;
    v[i] = a[0]; v[i + 1] = a[1] ?? 0; v[i + 2] = a[2] ?? 0;
  }
  return v;
}
const set = (v: PoseVec, n: JointName, a: number, b = 0, c = 0) => { const i = 3 + JI[n] * 3; v[i] = a; v[i + 1] = b; v[i + 2] = c; };
export function mixPose(out: PoseVec, a: PoseVec, b: PoseVec, t: number) {
  for (let i = 0; i < POSE_SIZE; i++) out[i] = a[i] + (b[i] - a[i]) * t;
  return out;
}

export interface Clip { keys: [number, PoseVec][] }
const clip = (base: PoseVec, ...keys: [number, PoseSpec][]): Clip => ({ keys: keys.map(([t, s]) => [t, P(s, base)]) });
export function sampleClip(c: Clip, u: number, out: PoseVec) {
  const k = c.keys;
  if (u <= k[0][0]) return out.set(k[0][1]), out;
  for (let i = 0; i < k.length - 1; i++)
    if (u < k[i + 1][0]) return mixPose(out, k[i][1], k[i + 1][1], smoothstep(k[i][0], k[i + 1][0], u));
  return out.set(k[k.length - 1][1]), out;
}

/** 战斗站姿：所有攻击动作的底子 */
const S = P({ hy: -0.03, legL: [0.16, 0.1], legR: [-0.2, 0.1], shinL: 0.28, shinR: 0.25, armL: [0.2, 0.22], armR: [0.2, 0.22], foreL: 0.55, foreR: 0.55, chest: 0.05 });
const T2 = Math.PI * 2;

export const CLIPS = {
  // —— 施法型（书、长笛、徒手法术）——
  cast1: clip(S, [0, { armR: [0.3, 0.3, -0.5], foreR: 1.6, chest: [0.05, -0.35] }], [0.32, { armR: [0.4, 0.3, -0.6], foreR: 1.7, chest: [0.05, -0.4] }],
    [0.5, { armR: [1.5, 0.1], foreR: 0.12, chest: [0.12, 0.3], hips: [0.06] }], [1, { armR: [1.2, 0.15], foreR: 0.4, chest: [0.08, 0.1] }]),
  cast2: clip(S, [0, { armL: [0.3, 0.3, -0.5], foreL: 1.6, chest: [0.05, 0.35] }], [0.3, { armL: [0.4, 0.3, -0.6], foreL: 1.7, chest: [0.05, 0.4] }],
    [0.5, { armL: [1.5, 0.1], foreL: 0.12, chest: [0.12, -0.3], hips: [0.06] }], [1, { armL: [1.2, 0.15], foreL: 0.4, chest: [0.08, -0.1] }]),
  cast3: clip(S, [0, { armL: [1.0, 0.4], armR: [1.0, 0.4], foreL: 1.2, foreR: 1.2 }], [0.38, { armL: [2.7, 0.35], armR: [2.7, 0.35], foreL: 0.5, foreR: 0.5, hips: [-0.12], hy: 0.02, head: [-0.2] }],
    [0.58, { armL: [1.45, 0.15], armR: [1.45, 0.15], foreL: 0.1, foreR: 0.1, hips: [0.22], hy: -0.06 }], [1, { armL: [1.1, 0.2], armR: [1.1, 0.2], foreL: 0.4, foreR: 0.4, hips: [0.1] }]),
  // —— 单手兵器（折扇，也给敌兵的刀用）——
  blade1: clip(S, [0, { armR: [0.2, 1.2, -0.5], foreR: 0.4, chest: [0.05, -0.5], hips: [0, -0.15] }], [0.3, { armR: [0.2, 1.3, -0.7], foreR: 0.5, chest: [0.05, -0.6], hips: [0, -0.2] }],
    [0.52, { armR: [0.3, 1.3, 1.9], foreR: 0.12, chest: [0.1, 0.55], hips: [0.05, 0.25] }], [1, { armR: [0.3, 1.2, 1.6], foreR: 0.4, chest: [0.08, 0.4], hips: [0, 0.15] }]),
  blade2: clip(S, [0, { armR: [0.3, 1.25, 1.8], foreR: 0.3, chest: [0.08, 0.5], hips: [0, 0.2] }], [0.25, { armR: [0.3, 1.25, 2.0], foreR: 0.5, chest: [0.08, 0.6] }],
    [0.5, { armR: [0.2, 1.3, -0.5], foreR: 0.1, chest: [0.08, -0.5], hips: [0.04, -0.25] }], [1, { armR: [0.2, 1.1, -0.3], foreR: 0.4, chest: [0.05, -0.3] }]),
  blade3: clip(S, [0, { armR: [-0.4, 0.35], foreR: 0.3, chest: [0.25, -0.3], hy: -0.08 }], [0.3, { armR: [-0.6, 0.4], foreR: 0.4, chest: [0.3, -0.35], hy: -0.12 }],
    [0.52, { armR: [2.5, 0.3], foreR: 0.15, chest: [-0.15, 0.2], hips: [-0.08], hy: 0.03 }], [1, { armR: [2.2, 0.3], foreR: 0.4, chest: [-0.05, 0.1] }]),
  blade4: clip(S, [0, { armR: [0.3, 1.4, 0.4], foreR: 0.2, hips: [0, -0.5], hy: -0.06 }], [0.2, { armR: [0.3, 1.4, 0.2], foreR: 0.3, hips: [0, -0.8], hy: -0.08 }],
    [0.7, { armR: [0.3, 1.45, 0.7], foreR: 0.1, hips: [0.05, T2 - 0.2], armL: [0.2, 1.0], hy: -0.05 }], [1, { armR: [0.3, 1.3, 0.9], foreR: 0.3, hips: [0, T2], armL: [0.2, 0.6] }]),
  // —— 爪击 / 体术 ——
  claw1: clip(S, [0, { armR: [2.2, 0.6], foreR: 1.0, chest: [0, -0.4] }], [0.28, { armR: [2.4, 0.7], foreR: 1.1, chest: [-0.05, -0.5], hy: 0 }],
    [0.5, { armR: [0.6, -0.25, 0.3], foreR: 0.3, chest: [0.2, 0.45], hips: [0.1, 0.15], hy: -0.07 }], [1, { armR: [0.5, 0.0], foreR: 0.5, chest: [0.12, 0.3] }]),
  claw2: clip(S, [0, { armL: [2.2, 0.6], foreL: 1.0, chest: [0, 0.4] }], [0.28, { armL: [2.4, 0.7], foreL: 1.1, chest: [-0.05, 0.5] }],
    [0.5, { armL: [0.6, -0.25, 0.3], foreL: 0.3, chest: [0.2, -0.45], hips: [0.1, -0.15], hy: -0.07 }], [1, { armL: [0.5, 0.0], foreL: 0.5, chest: [0.12, -0.3] }]),
  claw3: clip(S, [0, { hips: [0, -0.4], hy: -0.08, armL: [0.2, 0.8], armR: [0.2, 0.8] }], [0.18, { hips: [0.05, -0.7], hy: -0.1, armL: [0.2, 0.9], armR: [0.2, 0.9] }],
    [0.68, { hips: [0.1, T2 - 0.3], hy: -0.06, legR: [0.5, 0.9], shinR: 0.2, armL: [0.2, 1.1], armR: [0.2, 1.1] }], [1, { hips: [0, T2], armL: [0.2, 0.5], armR: [0.2, 0.5] }]),
  claw4: clip(S, [0, { armL: [2.3, 0.5], armR: [2.3, 0.5], foreL: 0.9, foreR: 0.9, hips: [-0.15], hy: 0.02 }], [0.34, { armL: [2.6, 0.55], armR: [2.6, 0.55], foreL: 1.0, foreR: 1.0, hips: [-0.2], hy: 0.05 }],
    [0.55, { armL: [0.7, 0.05], armR: [0.7, 0.05], foreL: 0.35, foreR: 0.35, hips: [0.4], hy: -0.12, shinL: 0.6, shinR: 0.5 }], [1, { armL: [0.6, 0.2], armR: [0.6, 0.2], foreL: 0.5, foreR: 0.5, hips: [0.2], hy: -0.06 }]),
  // —— 重型长柄（巨斧，也给精英怪的大剑用）——
  heavy1: clip(S, [0, { armR: [0.3, 1.1, -0.6], foreR: 0.6, armL: [1.0, -0.2], foreL: 1.2, chest: [0.05, -0.6], hips: [0, -0.3], hy: -0.06 }],
    [0.4, { armR: [0.3, 1.2, -1.0], foreR: 0.7, armL: [1.1, -0.3], foreL: 1.3, chest: [0.05, -0.8], hips: [0, -0.4], hy: -0.08 }],
    [0.6, { armR: [0.35, 1.25, 1.7], foreR: 0.2, armL: [1.0, 0.5], foreL: 0.6, chest: [0.12, 0.7], hips: [0.06, 0.35], hy: -0.1 }],
    [1, { armR: [0.3, 1.2, 1.5], foreR: 0.4, armL: [0.8, 0.4], foreL: 0.7, chest: [0.1, 0.5], hips: [0, 0.25] }]),
  heavy2: clip(S, [0, { armR: [0.35, 1.25, 1.7], foreR: 0.3, armL: [1.0, 0.5], foreL: 0.7, chest: [0.1, 0.7], hips: [0, 0.35], hy: -0.08 }],
    [0.35, { armR: [0.4, 1.25, 2.0], foreR: 0.5, armL: [1.0, 0.6], foreL: 0.8, chest: [0.1, 0.85], hips: [0, 0.4], hy: -0.1 }],
    [0.58, { armR: [0.3, 1.25, -0.7], foreR: 0.15, armL: [1.0, -0.2], foreL: 1.0, chest: [0.12, -0.7], hips: [0.06, -0.35], hy: -0.1 }],
    [1, { armR: [0.3, 1.1, -0.5], foreR: 0.4, armL: [0.9, -0.1], foreL: 1.0, chest: [0.08, -0.4] }]),
  heavy3: clip(S, [0, { armR: [1.6, 0.3], armL: [1.6, 0.3], foreR: 1.0, foreL: 1.0, hips: [-0.1] }],
    [0.45, { armR: [2.95, 0.25], armL: [2.9, 0.3], foreR: 0.7, foreL: 0.8, hips: [-0.28], chest: [-0.1], hy: 0.05, head: [-0.2] }],
    [0.62, { armR: [0.85, 0.1], armL: [0.9, 0.0], foreR: 0.12, foreL: 0.3, handR: [1.0], hips: [0.5], chest: [0.15], hy: -0.2, legL: [0.5, 0.15], shinL: 0.8, shinR: 0.6 }],
    [1, { armR: [0.8, 0.15], armL: [0.8, 0.1], foreR: 0.3, foreL: 0.4, handR: [0.7], hips: [0.35], hy: -0.14, shinL: 0.6, shinR: 0.5 }]),
  // —— 通用技能动作 ——
  thrust: clip(S, [0, { armR: [0.2, 0.3, -0.7], foreR: 1.5, chest: [0.15, -0.4], hy: -0.08 }], [0.25, { armR: [0.2, 0.3, -0.8], foreR: 1.6, chest: [0.2, -0.5], hy: -0.12 }],
    [0.45, { armR: [1.5, 0.05], foreR: 0.05, chest: [0.3, 0.35], hips: [0.25], hy: -0.1, legL: [0.7, 0.1], shinL: 0.7, legR: [-0.6, 0.1] }], [1, { armR: [1.3, 0.1], foreR: 0.3, chest: [0.2, 0.2], hips: [0.15] }]),
  raise: clip(S, [0, { armL: [0.8, 0.5], armR: [0.8, 0.5], foreL: 1.0, foreR: 1.0 }], [0.35, { armL: [2.75, 0.5], armR: [2.75, 0.5], foreL: 0.3, foreR: 0.3, hips: [-0.15], chest: [-0.1], head: [-0.35], hy: 0.04 }],
    [0.7, { armL: [2.8, 0.6], armR: [2.8, 0.6], foreL: 0.2, foreR: 0.2, hips: [-0.15], chest: [-0.1], head: [-0.3], hy: 0.06 }], [1, { armL: [1.2, 0.7], armR: [1.2, 0.7], foreL: 0.4, foreR: 0.4 }]),
  spin: clip(S, [0, { hips: [0, -0.5], armL: [0.2, 1.2], armR: [0.2, 1.2], hy: -0.08 }], [0.15, { hips: [0.05, -0.8], armL: [0.2, 1.3], armR: [0.2, 1.3], hy: -0.1 }],
    [0.8, { hips: [0.08, T2 * 2 - 0.3], armL: [0.2, 1.4], armR: [0.2, 1.4], foreL: 0.1, foreR: 0.1, hy: -0.06 }], [1, { hips: [0, T2 * 2], armL: [0.2, 0.7], armR: [0.2, 0.7] }]),
  slam: clip(S, [0, { hy: -0.15, shinL: 0.9, shinR: 0.9, legL: [0.5, 0.1], legR: [0.4, 0.1], armL: [0.5, 0.3], armR: [0.5, 0.3] }],
    [0.4, { hy: 0.05, armL: [2.9, 0.3], armR: [2.9, 0.3], foreL: 0.7, foreR: 0.7, hips: [-0.25], legL: [0.7, 0.1], shinL: 1.3, legR: [0.2, 0.1], shinR: 1.0 }],
    [0.62, { hy: -0.22, armL: [0.8, 0.1], armR: [0.8, 0.1], foreL: 0.15, foreR: 0.15, handR: [1.0], hips: [0.55], shinL: 0.9, shinR: 0.8, legL: [0.6, 0.15] }],
    [1, { hy: -0.16, armL: [0.8, 0.15], armR: [0.8, 0.15], foreL: 0.3, foreR: 0.3, handR: [0.7], hips: [0.4], shinL: 0.7, shinR: 0.6 }]),
  channel: clip(S, [0, { armL: [1.1, 0.3], armR: [1.1, 0.3], foreL: 1.3, foreR: 1.3, head: [0.15] }], [0.3, { armL: [1.2, 0.1, 0.3], armR: [1.2, 0.1, 0.3], foreL: 1.5, foreR: 1.5, head: [0.2], hy: -0.02 }],
    [0.75, { armL: [1.3, 0.15, 0.2], armR: [1.3, 0.15, 0.2], foreL: 1.4, foreR: 1.4, head: [-0.1], hy: 0.03 }], [1, { armL: [1.5, 0.9], armR: [1.5, 0.9], foreL: 0.2, foreR: 0.2, head: [-0.2], hips: [-0.1] }]),
  // —— 受击、倒下、闪避 ——
  hit: clip(S, [0, { hips: [-0.3], chest: [-0.25], head: [-0.3], armL: [0.2, 0.6], armR: [0.2, 0.6], hy: -0.05 }], [1, { hips: [-0.1], chest: [-0.05] }]),
  down: clip(S, [0, { hy: -0.1 }], [1, { hy: -0.56, hips: [0.35], chest: [0.6], head: [0.5], legL: [1.5, 0.15], legR: [1.4, 0.15], shinL: 2.3, shinR: 2.2, armL: [0.4, 0.2], armR: [0.4, 0.2], foreL: 0.3, foreR: 0.3 }]),
  dodge: clip(S, [0, { hips: [0.55], hy: -0.14, legL: [0.9, 0.05], shinL: 0.9, legR: [-0.7, 0.05], shinR: 0.3, armL: [-0.8, 0.3], armR: [-0.8, 0.3], foreL: 0.2, foreR: 0.2, head: [-0.35] }],
    [1, { hips: [0.4], hy: -0.1, legL: [-0.6, 0.05], shinL: 0.4, legR: [0.8, 0.05], shinR: 0.9, armL: [-0.7, 0.3], armR: [-0.7, 0.3], head: [-0.3] }]),
};
export type ClipName = keyof typeof CLIPS;

export type AnimMode = 'ground' | 'air' | 'glide' | 'climb' | 'swim' | 'slide' | 'dead';
export interface AnimIn {
  mode: AnimMode; speed: number; sprint: number; vy: number; moving: boolean;
  /** 正在播放的动作片段（攻击、技能、闪避、受击），u 是进度 0..1 */
  action: { clip: Clip; u: number } | null;
  /** 待机时手臂的摆法（抱书、持斧等），按角色不同 */
  hold?: PoseVec | null; holdMask?: JointName[];
  landT: number;
}

/** 把「角色当前在干什么」变成骨架姿势：走跑跳之类是用正弦函数算出来的循环，攻击是关键帧片段 */
export class Animator {
  phase = 0;
  t = Math.random() * 10;
  private pose = new Float32Array(POSE_SIZE);
  private tmp = new Float32Array(POSE_SIZE);
  constructor(public rig: Rig) {}

  update(dt: number, a: AnimIn) {
    this.t += dt;
    const p = this.pose, t = this.t;
    p.fill(0);
    let sharp = 13;
    if (a.action) {
      sampleClip(a.action.clip, a.action.u, p);
      sharp = 26;
    } else if (a.mode === 'dead') {
      sampleClip(CLIPS.down, 1, p);
      sharp = 5;
    } else if (a.mode === 'ground') {
      const amt = saturate(a.speed / 5.2), sp = a.sprint;
      this.phase += a.speed * dt * lerp(2.3, 1.75, amt);
      const ph = this.phase, s = Math.sin(ph), br = Math.sin(t * 1.8);
      const A = lerp(0.4, 0.95, amt) * (a.moving ? 1 : amt), B = lerp(0.6, 1.5, amt);
      p[0] = a.moving ? -0.02 - 0.02 * amt + 0.03 * amt * Math.cos(ph * 2) : -0.004 + 0.004 * br;
      const lean = a.moving ? 0.05 + 0.13 * amt + 0.14 * sp : 0.015 * br;
      set(p, 'hips', lean, 0.1 * amt * s, 0.03 * s * amt);
      set(p, 'spine', 0.02, -0.08 * amt * s);
      set(p, 'chest', 0.03 + 0.012 * br, -0.06 * amt * s);
      set(p, 'head', -lean * 0.6, a.moving ? 0 : 0.06 * Math.sin(t * 0.45));
      set(p, 'legL', A * s, 0.04); set(p, 'legR', -A * s, 0.04);
      set(p, 'shinL', 0.12 + B * Math.max(0, Math.cos(ph)) * (a.moving ? 1 : 0));
      set(p, 'shinR', 0.12 + B * Math.max(0, -Math.cos(ph)) * (a.moving ? 1 : 0));
      set(p, 'footL', 0.35 * amt * Math.max(0, -s)); set(p, 'footR', 0.35 * amt * Math.max(0, s));
      const sw = 0.8 * amt * (1 - sp * 0.8), fb = lerp(0.3, 1.25, amt) * (1 - sp * 0.7);
      set(p, 'armL', -sw * s - 0.9 * sp, 0.12 + 0.2 * sp); set(p, 'armR', sw * s - 0.9 * sp, 0.12 + 0.2 * sp);
      set(p, 'foreL', fb + 0.03 * br); set(p, 'foreR', fb + 0.03 * br);
      if (a.landT > 0) { const k = a.landT / 0.22; p[0] -= 0.14 * k; p[3 + JI.shinL * 3] += 0.7 * k; p[3 + JI.shinR * 3] += 0.7 * k; p[3 + JI.legL * 3] += 0.4 * k; p[3 + JI.legR * 3] += 0.4 * k; p[3] += 0.2 * k; }
      sharp = a.moving ? 16 : 10;
    } else if (a.mode === 'air') {
      const f = saturate(0.5 - a.vy / 14);
      set(p, 'hips', lerp(0.05, 0.12, f));
      set(p, 'legL', lerp(0.6, 0.25, f), 0.06); set(p, 'shinL', lerp(1.0, 0.5, f));
      set(p, 'legR', lerp(-0.25, -0.1, f), 0.06); set(p, 'shinR', lerp(0.5, 0.3, f));
      set(p, 'armL', lerp(0.4, 0.2, f), lerp(0.5, 1.15, f)); set(p, 'armR', lerp(0.4, 0.2, f), lerp(0.5, 1.15, f));
      set(p, 'foreL', 0.4); set(p, 'foreR', 0.4);
      set(p, 'footL', 0.4); set(p, 'footR', 0.4);
    } else if (a.mode === 'glide') {
      const w = Math.sin(t * 2.2) * 0.04;
      p[0] = -0.08;
      set(p, 'hips', 0.95 + w); set(p, 'chest', 0.12); set(p, 'head', -0.85);
      set(p, 'armL', -0.15, 1.45 + w, -0.2); set(p, 'armR', -0.15, 1.45 + w, -0.2);
      set(p, 'foreL', 0.15); set(p, 'foreR', 0.15);
      set(p, 'legL', -0.2 + w, 0.08); set(p, 'legR', -0.35 - w, 0.08);
      set(p, 'shinL', 0.25); set(p, 'shinR', 0.45); set(p, 'footL', 0.6); set(p, 'footR', 0.6);
      sharp = 8;
    } else if (a.mode === 'climb') {
      this.phase += (a.moving ? 7.5 : 0) * dt;
      const s = Math.sin(this.phase), c = Math.cos(this.phase);
      set(p, 'hips', -0.05); set(p, 'head', -0.35);
      set(p, 'armL', 2.3 + 0.45 * s, 0.35); set(p, 'armR', 2.3 - 0.45 * s, 0.35);
      set(p, 'foreL', 0.9 - 0.5 * s); set(p, 'foreR', 0.9 + 0.5 * s);
      set(p, 'legL', 0.85 - 0.45 * s, 0.4); set(p, 'legR', 0.85 + 0.45 * s, 0.4);
      set(p, 'shinL', 1.3 - 0.5 * s + 0.1 * c); set(p, 'shinR', 1.3 + 0.5 * s);
      p[1] = -0.08;
    } else if (a.mode === 'swim') {
      this.phase += (a.moving ? 5.5 : 2.2) * dt;
      const k = 0.5 + 0.5 * Math.sin(this.phase), m = a.moving ? 1 : 0.35;
      set(p, 'hips', a.moving ? 1.0 : 0.3); set(p, 'head', a.moving ? -0.85 : -0.2);
      set(p, 'armL', lerp(1.3, 2.6 - 1.0 * k, m), 0.3 + 0.9 * k * m + (1 - m) * 0.5); set(p, 'armR', lerp(1.3, 2.6 - 1.0 * k, m), 0.3 + 0.9 * k * m + (1 - m) * 0.5);
      set(p, 'foreL', 0.3 + 0.6 * k); set(p, 'foreR', 0.3 + 0.6 * k);
      const kk = Math.sin(this.phase * 2) * 0.3 * m;
      set(p, 'legL', kk, 0.08); set(p, 'legR', -kk, 0.08); set(p, 'shinL', 0.35 + kk); set(p, 'shinR', 0.35 - kk);
      set(p, 'footL', 0.7); set(p, 'footR', 0.7);
      sharp = 8;
    } else {
      set(p, 'hips', -0.3); set(p, 'head', 0.2);
      set(p, 'legL', 0.7, 0.1); set(p, 'legR', 0.5, 0.1); set(p, 'shinL', 0.5); set(p, 'shinR', 0.3);
      set(p, 'armL', 0.2, 0.9); set(p, 'armR', 0.2, 0.9); set(p, 'foreL', 0.4); set(p, 'foreR', 0.4);
    }
    // 待机/走动时把手臂摆成「拿着东西」的样子
    if (a.hold && a.holdMask && !a.action && (a.mode === 'ground' || a.mode === 'air')) {
      const w = a.mode === 'air' ? 0.5 : 1 - 0.55 * saturate(a.speed / 5.2) - 0.3 * a.sprint;
      for (const n of a.holdMask) {
        const i = 3 + JI[n] * 3;
        for (let k = 0; k < 3; k++) p[i + k] = lerp(p[i + k], a.hold[i + k], Math.max(0.15, w));
      }
    }
    this.rig.apply(p, dt, sharp);
    this.rig.updateSprings(dt);
    return this.tmp;
  }
}
