import * as THREE from 'three';
import { dampF } from '../core/math';

export const JOINTS = ['hips', 'spine', 'chest', 'neck', 'head', 'armL', 'foreL', 'handL', 'armR', 'foreR', 'handR', 'legL', 'shinL', 'footL', 'legR', 'shinR', 'footR'] as const;
export type JointName = (typeof JOINTS)[number];
export const JI: Record<JointName, number> = Object.fromEntries(JOINTS.map((n, i) => [n, i])) as Record<JointName, number>;
/** 姿势向量：[髋部上下偏移, 髋部前后偏移, 保留] + 每个关节 3 个语义角度 */
export const POSE_SIZE = 3 + JOINTS.length * 3;
export type PoseVec = Float32Array;

export interface Proportions {
  hipY: number; spine: number; chest: number; neck: number; head: number;
  shoulderX: number; shoulderY: number; upperArm: number; foreArm: number;
  hipX: number; hipDrop: number; thigh: number; shin: number;
}

interface Chain {
  bones: THREE.Bone[]; lens: number[]; axes: THREE.Vector3[]; tails: THREE.Vector3[]; prev: THREE.Vector3[];
  stiff: number; drag: number; grav: number; radius: number; maxAngle: number;
}
export interface SpringOpt { stiff?: number; drag?: number; grav?: number; radius?: number; maxAngle?: number }

const _e = new THREE.Euler(), _q = new THREE.Quaternion(), _m = new THREE.Matrix4();
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();

/** 人形骨架：刚性关节 + 用弹簧模拟的飘动骨骼（头发、裙摆、围巾） */
export class Rig {
  readonly root = new THREE.Group();
  readonly j = {} as Record<JointName, THREE.Group>;
  readonly bones: THREE.Bone[] = [];
  private chains: Chain[] = [];
  private cols: { o: THREE.Object3D; off: THREE.Vector3; r: number; w: THREE.Vector3 }[] = [];
  private tq: THREE.Quaternion[] = JOINTS.map(() => new THREE.Quaternion());
  /** 整体缩放（精英怪用），弹簧骨骼的长度会跟着算 */
  scale = 1;
  springsReady = false;
  private prevRoot = new THREE.Matrix4();
  private hasPrev = false;

  constructor(public p: Proportions) {
    const mk = (n: JointName, parent: THREE.Object3D, x: number, y: number, z = 0) => {
      const g = new THREE.Group();
      g.name = n;
      g.position.set(x, y, z);
      parent.add(g);
      this.j[n] = g;
      return g;
    };
    const hips = mk('hips', this.root, 0, p.hipY);
    const spine = mk('spine', hips, 0, p.spine);
    const chest = mk('chest', spine, 0, p.chest);
    const neck = mk('neck', chest, 0, p.neck);
    mk('head', neck, 0, p.head);
    for (const [s, side] of [['L', 1], ['R', -1]] as const) {
      const arm = mk(`arm${s}`, chest, side * p.shoulderX, p.shoulderY);
      const fore = mk(`fore${s}`, arm, 0, -p.upperArm);
      mk(`hand${s}`, fore, 0, -p.foreArm);
      const leg = mk(`leg${s}`, hips, side * p.hipX, -p.hipDrop);
      const shin = mk(`shin${s}`, leg, 0, -p.thigh);
      mk(`foot${s}`, shin, 0, -p.shin);
    }
  }

  /** 把语义姿势换成各关节的旋转并平滑趋近。sharp 越大动作越干脆。 */
  apply(pose: PoseVec, dt: number, sharp: number) {
    const f = dt <= 0 ? 1 : dampF(sharp, dt);
    const hips = this.j.hips;
    hips.position.y += (this.p.hipY + pose[0] - hips.position.y) * f;
    hips.position.z += (pose[1] - hips.position.z) * f;
    for (let k = 0; k < JOINTS.length; k++) {
      const a = pose[3 + k * 3], b = pose[4 + k * 3], c = pose[5 + k * 3];
      const name = JOINTS[k], side = name.endsWith('R') ? -1 : 1;
      if (k < 5) _e.set(a, b, -c); // 躯干：前俯、左转、左倾
      else if (name.startsWith('arm')) _e.set(-a, -side * c, side * b); // 手臂：前抬、外展、水平前摆
      else if (name.startsWith('fore')) _e.set(-a, side * b, side * c); // 前臂：弯曲
      else if (name.startsWith('hand')) _e.set(a, side * b, side * c);
      else if (name.startsWith('leg')) _e.set(-a, side * c, side * b); // 大腿：前抬、外展、外旋
      else if (name.startsWith('shin')) _e.set(a, 0, 0); // 小腿：后弯
      else _e.set(a, side * b, 0); // 脚：绷脚尖
      this.tq[k].setFromEuler(_e);
      this.j[name].quaternion.slerp(this.tq[k], f);
    }
  }

  /** 加一条弹簧骨骼链。nodes 是 parent 本地坐标下的节点，返回骨骼在 rig.bones 里的下标。 */
  addChain(parent: THREE.Object3D, nodes: THREE.Vector3[], o: SpringOpt = {}) {
    const ch: Chain = {
      bones: [], lens: [], axes: [], tails: [], prev: [],
      stiff: o.stiff ?? 2.2, drag: o.drag ?? 0.35, grav: o.grav ?? 0.5, radius: o.radius ?? 0.02, maxAngle: o.maxAngle ?? 1.2,
    };
    const idx: number[] = [];
    let par = parent;
    for (let k = 0; k < nodes.length - 1; k++) {
      const b = new THREE.Bone();
      b.position.copy(nodes[k]);
      if (k > 0) b.position.sub(nodes[k - 1]);
      par.add(b);
      par = b;
      const ax = nodes[k + 1].clone().sub(nodes[k]);
      ch.lens.push(ax.length());
      ch.axes.push(ax.normalize());
      ch.bones.push(b);
      ch.tails.push(new THREE.Vector3());
      ch.prev.push(new THREE.Vector3());
      idx.push(this.bones.length);
      this.bones.push(b);
    }
    this.chains.push(ch);
    return idx;
  }
  /** 身体上的碰撞球：把头发、裙摆从身体里顶出去 */
  addCollider(o: THREE.Object3D, off: [number, number, number], r: number) {
    this.cols.push({ o, off: new THREE.Vector3(...off), r, w: new THREE.Vector3() });
  }

  resetSprings() {
    this.root.updateMatrixWorld(true);
    for (const ch of this.chains)
      ch.bones.forEach((b, k) => {
        b.quaternion.identity();
        b.updateMatrix();
        b.matrixWorld.multiplyMatrices(b.parent!.matrixWorld, b.matrix);
        ch.tails[k].copy(ch.axes[k]).multiplyScalar(ch.lens[k]).applyMatrix4(b.matrixWorld);
        ch.prev[k].copy(ch.tails[k]);
      });
    this.prevRoot.copy(this.root.matrixWorld);
    this.hasPrev = true;
    this.springsReady = true;
  }

  updateSprings(dt: number) {
    if (!this.chains.length) return;
    if (!this.springsReady) return this.resetSprings();
    dt = Math.min(dt, 1 / 30);
    this.root.updateMatrixWorld(true);
    // 角色整体的位移和转身，让飘动部分跟随一部分；瞬移或猛转身时完全跟随，免得头发裙摆被甩进身体里卡住
    const rm = this.root.matrixWorld;
    if (this.hasPrev) {
      const D = _m.copy(this.prevRoot).invert().premultiply(rm);
      const moved = _a.setFromMatrixPosition(rm).distanceTo(_b.setFromMatrixPosition(this.prevRoot));
      const turned = Math.abs(Math.atan2(D.elements[8], D.elements[10]));
      const k = moved > 1.2 || turned > 0.4 ? 1 : 0.3;
      for (const ch of this.chains)
        for (let i = 0; i < ch.tails.length; i++) {
          ch.tails[i].lerp(_c.copy(ch.tails[i]).applyMatrix4(D), k);
          ch.prev[i].lerp(_c.copy(ch.prev[i]).applyMatrix4(D), k);
        }
    }
    this.prevRoot.copy(rm);
    this.hasPrev = true;
    for (const c of this.cols) c.w.copy(c.off).applyMatrix4(c.o.matrixWorld);
    for (const ch of this.chains) {
      for (let k = 0; k < ch.bones.length; k++) {
        const b = ch.bones[k], pm = b.parent!.matrixWorld, len = ch.lens[k] * this.scale;
        const wp = _a.copy(b.position).applyMatrix4(pm);
        const rest = _b.copy(ch.axes[k]).transformDirection(pm);
        const tail = ch.tails[k], prev = ch.prev[k];
        const next = _c.copy(tail).sub(prev).multiplyScalar(1 - ch.drag).add(tail);
        next.addScaledVector(rest, ch.stiff * dt * this.scale);
        next.y -= ch.grav * dt * this.scale;
        next.sub(wp).normalize().multiplyScalar(len).add(wp);
        for (const c of this.cols) {
          const rr = (c.r + ch.radius) * this.scale;
          _d.copy(next).sub(c.w);
          if (_d.lengthSq() < rr * rr) {
            next.copy(c.w).addScaledVector(_d.normalize(), rr);
            next.sub(wp).normalize().multiplyScalar(len).add(wp);
          }
        }
        const dir = _d.copy(next).sub(wp).normalize();
        const ang = dir.angleTo(rest);
        if (ang > ch.maxAngle) {
          _q.setFromUnitVectors(rest, dir);
          dir.copy(rest).applyQuaternion(_q.slerp(new THREE.Quaternion(), 1 - ch.maxAngle / ang)).normalize();
          next.copy(wp).addScaledVector(dir, len);
        }
        prev.copy(tail);
        tail.copy(next);
        dir.transformDirection(_m.copy(pm).invert());
        b.quaternion.setFromUnitVectors(ch.axes[k], dir);
        b.updateMatrix();
        b.matrixWorld.multiplyMatrices(pm, b.matrix);
      }
    }
  }
}
