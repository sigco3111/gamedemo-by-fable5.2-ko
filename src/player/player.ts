import * as THREE from 'three';
import type { Game } from '../game';
import { Colliders, type Box, type Contact } from '../world/colliders';
import type { Elem } from '../combat/elements';
import { CLIPS } from '../char/anim';
import { clamp, damp, dampAngle } from '../core/math';

export type MoveState = 'ground' | 'air' | 'glide' | 'climb' | 'swim' | 'slide';
const RUN = 5.4, SPRINT = 8.4, GRAV = 24, JUMP = 8.4, R = 0.34, H = 1.6;
/** 地面法线的 y 分量低于这个值就算陡坡（约 47°），走不上去，只能爬 */
const STEEP = 0.68;
const _n = new THREE.Vector3(), _v = new THREE.Vector3(), _l = { x: 0, z: 0 };

/** 玩家：移动状态机（走跑跳、冲刺、攀爬、滑翔、游泳、滑坡）+ 受伤和换人 */
export class Player {
  readonly group = new THREE.Group();
  readonly pos = new THREE.Vector3();
  readonly vel = new THREE.Vector3();
  yaw = 0;
  state: MoveState = 'air';
  stamina = 100;
  staminaMax = 100;
  private regenDelay = 0;
  dodgeT = 0;
  private dodgeAge = 9;
  private dodgeDir = new THREE.Vector3(0, 0, 1);
  private perfectUsed = false;
  iframe = 0;
  sprinting = false;
  dead = false;
  private deadT = 0;
  private hitT = 0;
  private landT = 0;
  private airT = 0;
  private slideT = 0;
  wantsMove = false;
  moveYaw = 0;
  private move = new THREE.Vector3();
  private pushV = new THREE.Vector3();
  private pushT = 0;
  private plunging = false;
  private wall: Box | null = null;
  private wallAxis = 0;
  private wallSign = 1;
  private wallN = new THREE.Vector3();
  private leap = 0;
  private pressT = 0;
  private climbMoving = false;
  readonly safe = new THREE.Vector3();
  private safeT = 0;
  private pitch = 0;
  private stepAcc = 0;
  private flashT = 0;
  private wingFold = 1;
  /** 是否正处在上升气流里（由 World 每帧设置） */
  updraft = false;

  constructor(private g: Game) {
    this.group.rotation.order = 'YXZ';
    g.scene.add(this.group);
    for (const m of g.party.members) { m.model.root.visible = false; this.group.add(m.model.root); }
    this.showActive();
  }
  private showActive() {
    this.g.party.members.forEach((m, i) => (m.model.root.visible = i === this.g.party.active));
    this.g.party.cur.model.rig.springsReady = false;
  }
  heightAbove() { return this.pos.y - this.g.col.groundAt(this.pos.x, this.pos.z, this.pos.y, 0.3); }
  faceTo(yaw: number, snap = false) { this.yaw = snap ? yaw : dampAngle(this.yaw, yaw, 14, 0.016); }
  /** 被招式带着向前冲一小段 */
  push(dist: number, dur: number) { this.pushT = dur; this.pushV.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)).multiplyScalar(dist / Math.max(0.05, dur)); }
  useStamina(n: number) { this.stamina = Math.max(0, this.stamina - n); this.regenDelay = 1.1; }
  teleport(x: number, z: number) {
    this.pos.set(x, this.g.col.groundAt(x, z, 1e4, 1e5) + 0.05, z);
    this.vel.set(0, 0, 0);
    this.state = 'air';
    this.plunging = false;
    this.safe.copy(this.pos);
    this.g.party.cur.model.rig.springsReady = false;
    this.g.cam.snap();
  }
  /** 瞬移到附近某点（技能用）：落点是水里或被挡住时不动 */
  teleportNear(x: number, z: number) {
    const h = this.g.col.groundAt(x, z, this.pos.y + 2, 3);
    if (h < -0.4 || this.g.col.blocked(x, z, R, h)) return;
    this.pos.set(x, h, z);
    this.state = 'ground';
  }
  startPlunge() { this.plunging = true; this.state = 'air'; this.vel.set(0, -30, 0); }

  swapTo(i: number, force = false) {
    const g = this.g, p = g.party;
    if (i === p.active || !p.members[i]?.alive) return false;
    if (!force && (p.swapCd > 0 || this.dead)) { g.sfx.deny(); return false; }
    p.active = i;
    p.swapCd = 1;
    g.combat.cancelAct();
    this.showActive();
    g.fx.burst(_v.copy(this.pos).setY(this.pos.y + 1), p.cur.color, 18, 3.5, 0.3, 0.5, { up: 1 });
    g.fx.ring(this.pos, 0.3, 1.8, 0.35, p.cur.color);
    g.sfx.swap();
    return true;
  }

  /** 受到攻击。返回 'dodged' 表示被闪避掉了。 */
  hurt(amount: number, _elem: Elem, from: THREE.Vector3): 'hit' | 'dodged' {
    const g = this.g;
    if (this.dead || !g.playing) return 'dodged';
    if (this.iframe > 0) {
      if (this.dodgeAge < 0.36 && !this.perfectUsed) { this.perfectUsed = true; g.perfectDodge(); }
      return 'dodged';
    }
    const m = g.party.cur, dmg = Math.max(1, Math.round((amount * 100) / (100 + m.defn)));
    m.hp -= dmg;
    g.hud.dmg(_v.copy(this.pos).setY(this.pos.y + 1.7), dmg, '#ff6464', false, true);
    this.flashT = 0.15;
    this.hitT = 0.3;
    this.iframe = 0.25;
    g.sfx.hurt();
    g.shake(0.25);
    g.combat.cancelAct();
    const dx = this.pos.x - from.x, dz = this.pos.z - from.z, d = Math.hypot(dx, dz) || 1;
    this.pushV.set((dx / d) * 4, 0, (dz / d) * 4);
    this.pushT = 0.14;
    if (this.state === 'climb' || this.state === 'glide') { this.state = 'air'; this.airT = 0; }
    if (m.hp <= 0) { m.hp = 0; m.alive = false; this.dead = true; this.deadT = 0; }
    return 'hit';
  }
  /** 环境伤害（摔落、溺水），无视防御 */
  private hurtRaw(pct: number) {
    const m = this.g.party.cur, dmg = Math.round(m.maxHp * pct);
    m.hp = Math.max(1, m.hp - dmg);
    this.g.hud.dmg(_v.copy(this.pos).setY(this.pos.y + 1.7), dmg, '#ff6464', false, true);
    this.flashT = 0.15;
    this.g.sfx.hurt();
  }

  private startWallClimb(ct: Contact) {
    const b = ct.c as Box, lx = ct.nx * b.cos - ct.nz * b.sin, lz = ct.nx * b.sin + ct.nz * b.cos;
    this.wall = b;
    this.wallAxis = Math.abs(lx) > Math.abs(lz) ? 0 : 1;
    this.wallSign = Math.sign(this.wallAxis === 0 ? lx : lz) || 1;
    if (this.wallAxis === 0) this.wallN.set(this.wallSign * b.cos, 0, -this.wallSign * b.sin);
    else this.wallN.set(this.wallSign * b.sin, 0, this.wallSign * b.cos);
    this.enterClimb();
  }
  private enterClimb() {
    this.state = 'climb';
    this.vel.set(0, 0, 0);
    this.pressT = 0;
    this.leap = 0;
    this.plunging = false;
    this.g.combat.cancelAct();
  }
  private land(gh: number) {
    const g = this.g, T = g.terrain;
    this.pos.y = gh;
    if (this.plunging) {
      this.plunging = false;
      g.combat.aoe(this.pos.clone(), 3.6, 1.7, { poise: 30, knock: 3 });
      g.fx.shock(_v.copy(this.pos).setY(gh + 0.4), 3.6, 0.35, g.party.cur.color);
      g.shake(0.4);
      g.sfx.boom();
    } else if (this.vel.y < -27) this.hurtRaw(Math.min(0.6, (-this.vel.y - 27) * 0.035));
    this.vel.y = 0;
    this.landT = 0.22;
    g.sfx.land();
    g.fx.burst(_v.copy(this.pos).setY(gh + 0.1), '#d8d0b8', 6, 2, 0.5, 0.5, { soft: true, flat: true });
    const onTerrain = gh <= T.heightAt(this.pos.x, this.pos.z) + 0.02;
    this.state = onTerrain && T.normalAt(this.pos.x, this.pos.z, _n).y < 0.62 ? 'slide' : 'ground';
    this.slideT = 0;
  }
  private enterSwim() { if (this.state !== 'swim') { this.state = 'swim'; this.plunging = false; this.g.sfx.splash(); this.g.fx.burst(_v.copy(this.pos).setY(0.1), '#e8f6ff', 16, 4, 0.3, 0.6, { up: 4, gravity: 12 }); this.g.combat.cancelAct(); } }

  update(dt: number) {
    const g = this.g, inp = g.input, T = g.terrain, C = g.col, m = g.party.cur, p = this.pos, v = this.vel;
    this.iframe -= dt; this.dodgeAge += dt; this.hitT -= dt; this.landT -= dt; this.flashT -= dt;
    const live = g.playing && !this.dead;
    const ix = live ? inp.moveX : 0, iy = live ? inp.moveY : 0, cy = g.cam.yaw;
    this.move.set(-Math.sin(cy) * iy + Math.cos(cy) * ix, 0, -Math.cos(cy) * iy - Math.sin(cy) * ix);
    this.wantsMove = this.move.lengthSq() > 0.01;
    if (this.wantsMove) { this.move.normalize(); this.moveYaw = Math.atan2(this.move.x, this.move.z); }
    const mv = this.move, busy = g.combat.busy;

    if (this.dead) {
      this.deadT += dt;
      if (this.deadT > 1.3) {
        const nx = g.party.nextAlive();
        if (nx >= 0) { this.dead = false; this.swapTo(nx, true); this.iframe = 1; g.hud.toast(`${m.def.name} 倒下了，换 ${g.party.cur.def.name} 上场`); }
        else if (this.deadT > 2.2) g.wipe();
      }
    } else if (live) {
      for (let i = 0; i < 8; i++) if (inp.hit('Digit' + (i + 1))) this.swapTo(i);
      if (inp.hit('ShiftLeft') && this.state === 'ground' && this.dodgeT <= 0) {
        if (this.stamina >= 15) {
          this.useStamina(15);
          this.dodgeT = 0.32; this.dodgeAge = 0; this.perfectUsed = false;
          this.iframe = Math.max(this.iframe, 0.4);
          if (this.wantsMove) this.dodgeDir.copy(mv); else this.dodgeDir.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
          this.yaw = Math.atan2(this.dodgeDir.x, this.dodgeDir.z);
          g.combat.cancelAct();
          g.sfx.dodge();
          g.fx.burst(_v.copy(p).setY(p.y + 0.2), '#e8e2d0', 8, 2.5, 0.5, 0.45, { soft: true, flat: true });
        } else g.sfx.deny();
      }
    }
    this.sprinting = live && inp.down('ShiftLeft') && this.wantsMove && this.state === 'ground' && this.stamina > 0 && this.dodgeT <= 0 && !busy;
    const into = (nx: number, nz: number) => (this.wantsMove ? -(mv.x * nx + mv.z * nz) / (Math.hypot(nx, nz) || 1) : 0);
    const grabWall = (ct: Contact | null) => {
      if (!ct || ct.c.kind !== 'box' || !ct.c.climb || into(ct.nx, ct.nz) < 0.5 || ct.c.y1 < p.y + 1.3 || this.stamina < 6 || busy || this.dodgeT > 0) return false;
      this.startWallClimb(ct);
      return true;
    };

    switch (this.state) {
      case 'ground': {
        if (this.dodgeT > 0) {
          this.dodgeT -= dt;
          const k = 15 * (0.45 + 0.55 * Math.max(0, this.dodgeT / 0.32));
          v.x = this.dodgeDir.x * k; v.z = this.dodgeDir.z * k;
        } else if (this.pushT > 0) { this.pushT -= dt; v.x = this.pushV.x; v.z = this.pushV.z; }
        else if (busy || this.hitT > 0.12 || this.dead) { v.x = damp(v.x, 0, 16, dt); v.z = damp(v.z, 0, 16, dt); }
        else {
          const sp = this.wantsMove ? (this.sprinting ? SPRINT : RUN) : 0;
          v.x = damp(v.x, mv.x * sp, 13, dt); v.z = damp(v.z, mv.z * sp, 13, dt);
          if (this.wantsMove) this.yaw = dampAngle(this.yaw, this.moveYaw, 13, dt);
          if (this.sprinting) this.useStamina(9 * dt);
        }
        if (live && inp.hit('Space') && this.dodgeT <= 0 && this.hitT <= 0) {
          g.combat.cancelAct();
          v.y = JUMP; this.state = 'air'; this.airT = 0;
          g.sfx.jump();
          break;
        }
        const ox = p.x, oz = p.z, oy = p.y;
        p.x += v.x * dt; p.z += v.z * dt;
        const ct = C.resolve(p, R, H);
        if (ct && ct.c.kind === 'box' && ct.c.climb && into(ct.nx, ct.nz) > 0.5) { this.pressT += dt; if (this.pressT > 0.16 && grabWall(ct)) break; }
        let gh = C.groundAt(p.x, p.z, p.y);
        const th = T.heightAt(p.x, p.z), onT = gh <= th + 0.02;
        T.normalAt(p.x, p.z, _n);
        if (onT && _n.y < STEEP && gh > oy + 0.002) {
          // 陡坡上不去：顶着坡按方向键一小会儿就开始攀爬
          const push = into(_n.x, _n.z);
          p.x = ox; p.z = oz; gh = C.groundAt(ox, oz, oy);
          v.x *= 0.5; v.z *= 0.5;
          if (push > 0.35 && this.stamina > 6 && !busy && this.dodgeT <= 0) {
            this.pressT += dt;
            if (this.pressT > 0.12) { p.x += mv.x * 0.25; p.z += mv.z * 0.25; p.y = T.heightAt(p.x, p.z); this.wall = null; this.enterClimb(); break; }
          }
        } else if (!ct) this.pressT = Math.max(0, this.pressT - dt * 2);
        const hs = Math.hypot(v.x, v.z), steepHere = onT && T.normalAt(p.x, p.z, _n).y < 0.6;
        // 走出平台边缘，或带着速度冲下陡崖：腾空（这样才能接滑翔），而不是贴着崖壁滑下去
        if (gh < p.y - 0.6 || (steepHere && gh < oy - 0.04 && hs > 2)) { this.state = 'air'; this.airT = 0; v.y = 0; p.y = oy; break; }
        p.y = gh > p.y ? damp(p.y, gh, 30, dt) : gh;
        if (gh < -1.2) { this.enterSwim(); break; }
        if (steepHere) { this.state = 'slide'; this.slideT = 0; break; }
        this.stepAcc += hs * dt;
        if (this.stepAcc > 2.3 && this.dodgeT <= 0) { this.stepAcc = 0; g.sfx.step(); if (this.sprinting) g.fx.burst(_v.copy(p).setY(p.y + 0.1), '#d8d0b8', 2, 1, 0.4, 0.4, { soft: true, flat: true }); }
        if ((this.safeT -= dt) < 0 && gh > 0.4 && _n.y > 0.82) { this.safeT = 0.5; this.safe.copy(p); }
        if (!this.sprinting && this.dodgeT <= 0 && (this.regenDelay -= dt) <= 0) this.stamina = Math.min(this.staminaMax, this.stamina + 32 * dt);
        break;
      }
      case 'air':
      case 'glide': {
        this.airT += dt;
        const gl = this.state === 'glide';
        if (this.plunging) { v.x = v.z = 0; v.y = -34; }
        else if (gl) {
          if (!this.updraft) this.useStamina((m.def.wings ? 1.6 : 3.2) * dt); else this.regenDelay = 1;
          v.y = damp(v.y, this.updraft ? 9 : -1.7, this.updraft ? 3 : 5, dt);
          const sp = this.wantsMove ? 8.2 : 4, dx = this.wantsMove ? mv.x : Math.sin(this.yaw), dz = this.wantsMove ? mv.z : Math.cos(this.yaw);
          v.x = damp(v.x, dx * sp, 2.4, dt); v.z = damp(v.z, dz * sp, 2.4, dt);
          if (Math.hypot(v.x, v.z) > 0.6) this.yaw = dampAngle(this.yaw, Math.atan2(v.x, v.z), 6, dt);
          if (this.stamina <= 0 || (live && inp.hit('Space'))) this.state = 'air';
        } else {
          v.y = Math.max(-44, v.y - GRAV * dt);
          if (this.pushT > 0) { this.pushT -= dt; v.x = this.pushV.x; v.z = this.pushV.z; }
          else { v.x = damp(v.x, mv.x * (this.wantsMove ? RUN : 0), 2.6, dt); v.z = damp(v.z, mv.z * (this.wantsMove ? RUN : 0), 2.6, dt); }
          if (this.wantsMove) this.yaw = dampAngle(this.yaw, this.moveYaw, 8, dt);
        }
        p.addScaledVector(v, dt);
        const ct = C.resolve(p, R, H, 0.2);
        if (!this.plunging && this.airT > 0.15 && grabWall(ct)) break;
        const gh = C.groundAt(p.x, p.z, p.y, 0.3);
        if (!gl && !this.plunging && live && inp.hit('Space') && this.airT > 0.2 && p.y - gh > 1.3 && this.stamina > 1) { this.state = 'glide'; v.y = Math.max(v.y, -4); g.sfx.glide(); }
        if (p.y <= gh) {
          if (gh < -1.2) { p.y = Math.max(p.y, -1.3); this.enterSwim(); } else this.land(gh);
        } else if (p.y < -1.1 && T.heightAt(p.x, p.z) < -1.25) this.enterSwim();
        break;
      }
      case 'climb': {
        this.regenDelay = 1;
        if (this.leap > 0) this.leap -= dt;
        const up = this.leap > 0 ? 1 : iy, side = this.leap > 0 ? 0 : ix, sp = this.leap > 0 ? 6.5 : 2.3;
        this.climbMoving = up !== 0 || side !== 0;
        if (this.climbMoving && this.leap <= 0) this.useStamina(6.5 * dt);
        let n = this.wallN;
        if (this.wall) {
          const b = this.wall;
          p.y += up * sp * dt;
          p.x += n.z * side * sp * dt; p.z += -n.x * side * sp * dt;
          const l = Colliders.local(b, p.x, p.z, _l);
          if (this.wallAxis === 0) { l.x = this.wallSign * (b.hx + R + 0.03); l.z = clamp(l.z, -b.hz + 0.15, b.hz - 0.15); }
          else { l.z = this.wallSign * (b.hz + R + 0.03); l.x = clamp(l.x, -b.hx + 0.15, b.hx - 0.15); }
          p.x = b.x + l.x * b.cos + l.z * b.sin; p.z = b.z - l.x * b.sin + l.z * b.cos;
          const gh = C.groundAt(p.x, p.z, p.y, 0.1);
          if (p.y + 1.25 >= b.y1) { p.y = b.y1; p.x -= n.x * 0.8; p.z -= n.z * 0.8; this.state = 'ground'; this.landT = 0.18; break; }
          if (p.y <= gh + 0.02) { p.y = gh; if (up < 0) { this.state = 'ground'; break; } }
          this.pitch = damp(this.pitch, 0, 10, dt);
        } else {
          n = T.normalAt(p.x, p.z, this.wallN);
          if (n.y > 0.76) { this.state = 'ground'; break; }
          const hl = Math.hypot(n.x, n.z) || 1, fx = -n.x / hl, fz = -n.z / hl;
          _v.set(-n.x * n.y, 1 - n.y * n.y, -n.z * n.y).normalize();
          p.x += (_v.x * up + -fz * side) * sp * dt; p.z += (_v.z * up + fx * side) * sp * dt;
          C.resolve(p, R, H);
          p.y = T.heightAt(p.x, p.z);
          if (p.y < -1.2) { this.enterSwim(); break; }
          this.yaw = dampAngle(this.yaw, Math.atan2(fx, fz), 12, dt);
          this.pitch = damp(this.pitch, (Math.PI / 2 - Math.acos(clamp(n.y, 0, 1))) * 0.85, 10, dt);
        }
        if (this.wall) this.yaw = dampAngle(this.yaw, Math.atan2(-n.x, -n.z), 14, dt);
        if (live && inp.hit('Space')) {
          if (iy < 0) { this.state = 'air'; this.airT = 0; v.set(n.x * 3.5, 3, n.z * 3.5); }
          else if (this.stamina >= 18) { this.useStamina(18); this.leap = 0.28; g.sfx.jump(); }
        }
        if ((live && inp.hit('KeyX')) || this.stamina <= 0) { this.state = 'air'; this.airT = 0; v.set(n.x * 2.5, 0, n.z * 2.5); }
        break;
      }
      case 'slide': {
        this.slideT += dt;
        const n = T.normalAt(p.x, p.z, _n);
        if (n.y > 0.72) { this.state = 'ground'; break; }
        const hl = Math.hypot(n.x, n.z) || 1;
        v.x = damp(v.x, (n.x / hl) * 9, 4, dt); v.z = damp(v.z, (n.z / hl) * 9, 4, dt);
        p.x += v.x * dt; p.z += v.z * dt;
        C.resolve(p, R, H);
        p.y = T.heightAt(p.x, p.z);
        this.yaw = dampAngle(this.yaw, Math.atan2(v.x, v.z), 8, dt);
        if (p.y < -1.2) { this.enterSwim(); break; }
        // 滑坡时可以蹬离崖壁跳出去（之后能接滑翔）
        if (live && inp.hit('Space')) { v.x += (n.x / hl) * 5; v.z += (n.z / hl) * 5; v.y = JUMP * 0.8; this.state = 'air'; this.airT = 0; g.sfx.jump(); break; }
        if (this.slideT > 0.25 && into(n.x, n.z) > 0.35 && this.stamina > 10) { this.wall = null; this.enterClimb(); }
        break;
      }
      case 'swim': {
        this.regenDelay = 1;
        const fast = live && inp.down('ShiftLeft') && this.wantsMove, sp = this.wantsMove ? (fast ? 4.6 : 3) : 0;
        v.x = damp(v.x, mv.x * sp, 4, dt); v.z = damp(v.z, mv.z * sp, 4, dt);
        if (this.wantsMove) { this.yaw = dampAngle(this.yaw, this.moveYaw, 6, dt); this.useStamina((fast ? 9 : 3.5) * dt); }
        p.x += v.x * dt; p.z += v.z * dt;
        C.resolve(p, R, H);
        const th = T.heightAt(p.x, p.z);
        if (th > -0.95) { this.state = 'ground'; p.y = Math.max(p.y, th); break; }
        p.y = damp(p.y, -1.12, 8, dt);
        if (this.wantsMove && Math.random() < dt * 6) g.fx.burst(_v.set(p.x, 0.05, p.z), '#ffffff', 2, 1.2, 0.25, 0.5, { flat: true });
        if (this.stamina <= 0) {
          // 体力耗尽：扣血并送回最近站稳过的地方
          this.hurtRaw(0.15);
          g.hud.toast('体力耗尽，被冲回了岸边');
          g.hud.fade(0.5);
          this.teleport(this.safe.x, this.safe.z);
          this.stamina = this.staminaMax * 0.5;
        }
        break;
      }
    }
    if (this.state !== 'climb') this.pitch = damp(this.pitch, 0, 10, dt);
    // 掉出世界的保险
    if (p.y < -30 || Math.abs(p.x) > 330 || Math.abs(p.z) > 330) this.teleport(this.safe.x, this.safe.z);

    // ---------- 驱动模型 ----------
    const st = this.state, mode = this.dead ? 'dead' : st;
    const act = this.dead ? null
      : this.dodgeT > 0 ? { clip: CLIPS.dodge, u: 1 - this.dodgeT / 0.32 }
      : this.plunging ? { clip: CLIPS.slam, u: 0.42 }
      : this.hitT > 0 ? { clip: CLIPS.hit, u: 1 - this.hitT / 0.3 }
      : g.combat.animAction();
    m.anim.update(dt, {
      mode, speed: Math.hypot(v.x, v.z), sprint: this.sprinting ? 1 : 0, vy: v.y, moving: st === 'climb' ? this.climbMoving : this.wantsMove || Math.hypot(v.x, v.z) > 0.8,
      action: act, hold: m.hold, holdMask: m.def.holdMask, landT: Math.max(0, this.landT),
    });
    this.group.position.copy(p);
    if (st === 'climb' && !this.wall) this.group.position.addScaledVector(this.wallN, 0.2);
    this.group.rotation.set(this.pitch, this.yaw, 0);
    const parts = m.model.parts;
    if (parts.weapon) parts.weapon.visible = st === 'ground' || st === 'air' || st === 'slide';
    if (parts.glider) parts.glider.visible = st === 'glide';
    if (parts.wingL) {
      this.wingFold = damp(this.wingFold, st === 'glide' ? 0.05 : 1, 8, dt);
      const f = this.wingFold * 1.05 + (st === 'glide' ? Math.sin(g.time * 5) * 0.06 : Math.sin(g.time * 1.4) * 0.04);
      parts.wingL.rotation.set(0, f, this.wingFold * 0.25);
      parts.wingR.rotation.set(0, -f, -this.wingFold * 0.25);
    }
    m.model.updateFace(dt, this.hitT > 0 || this.dead ? 'hurt' : g.combat.sinceAttack < 1.2 ? 'fierce' : 'neutral');
    m.model.setFlash(Math.max(0, this.flashT / 0.15));
  }
}
