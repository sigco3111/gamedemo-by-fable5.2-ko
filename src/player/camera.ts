import * as THREE from 'three';
import type { Game } from '../game';
import { clamp, damp, dampAngle, dampF } from '../core/math';

const _d = new THREE.Vector3(), _t = new THREE.Vector3();

/** 第三人称跟随相机：鼠标转视角、滚轮拉远近、防穿墙、锁定目标时自动跟拍 */
export class FollowCam {
  yaw = Math.PI;
  pitch = 0.28;
  dist = 5.6;
  sens = 0.0026;
  /** 镜头最近能拉到多近（拍角色特写时调小） */
  minDist = 2.6;
  /** 镜头对准角色身上多高的位置 */
  lookY = 1.45;
  private cur = new THREE.Vector3();
  private camDist = 5.6;
  private shakeAmt = 0;
  private fov = 55;
  constructor(private g: Game) {}

  shake(v: number) { this.shakeAmt = Math.min(0.8, Math.max(this.shakeAmt, v)); }
  snap() { const p = this.g.player.pos; this.cur.set(p.x, p.y + 1.45, p.z); }

  update(dt: number) {
    const g = this.g, inp = g.input, pl = g.player, cam = g.camera;
    if (g.playing) {
      this.yaw -= inp.dx * this.sens;
      this.pitch = clamp(this.pitch + inp.dy * this.sens, -0.95, 1.35);
      this.dist = clamp(this.dist + inp.wheel * 0.7, this.minDist, 11);
    }
    const tg = g.combat.locked ? g.combat.target : null;
    if (tg && !tg.dead) {
      // 锁定时相机绕到角色身后，让角色和目标同时在画面里
      this.yaw = dampAngle(this.yaw, Math.atan2(pl.pos.x - tg.pos.x, pl.pos.z - tg.pos.z), 3.2, dt);
      this.pitch = damp(this.pitch, clamp(0.3 + (pl.pos.y - tg.pos.y) * 0.05, 0.12, 0.6), 1.5, dt);
    }
    _t.set(pl.pos.x, pl.pos.y + (pl.state === 'swim' ? this.lookY - 0.2 : this.lookY), pl.pos.z);
    if (this.cur.distanceTo(_t) > 12) this.cur.copy(_t);
    const f = dampF(14, dt);
    this.cur.x += (_t.x - this.cur.x) * f; this.cur.z += (_t.z - this.cur.z) * f;
    this.cur.y += (_t.y - this.cur.y) * dampF(9, dt);
    _d.set(Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), Math.cos(this.yaw) * Math.cos(this.pitch));
    const want = Math.max(0.6, g.col.raycast(this.cur, _d, this.dist) - 0.3);
    this.camDist = want < this.camDist ? want : damp(this.camDist, want, 5, dt);
    cam.position.copy(this.cur).addScaledVector(_d, this.camDist);
    // 相机不要沉到水面以下
    if (cam.position.y < 0.35) cam.position.y = 0.35;
    if (this.shakeAmt > 0.002) {
      cam.position.x += (Math.random() - 0.5) * this.shakeAmt; cam.position.y += (Math.random() - 0.5) * this.shakeAmt; cam.position.z += (Math.random() - 0.5) * this.shakeAmt;
      this.shakeAmt = damp(this.shakeAmt, 0, 9, dt);
    }
    cam.lookAt(this.cur);
    const fov = 55 + (pl.sprinting ? 7 : 0) + (pl.state === 'glide' ? 5 : 0) + (pl.dodgeT > 0 ? 5 : 0);
    this.fov = damp(this.fov, fov, 6, dt);
    if (Math.abs(cam.fov - this.fov) > 0.05) { cam.fov = this.fov; cam.updateProjectionMatrix(); }
  }
}
