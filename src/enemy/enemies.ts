import * as THREE from 'three';
import type { Game } from '../game';
import { ELEM, type Elem } from '../combat/elements';
import { buildGrunt, buildElite, buildWisp, type WispModel } from '../char/enemyModels';
import type { CharModel } from '../char/builder';
import { Animator, CLIPS, type Clip } from '../char/anim';
import { angleDiff, damp, dampAngle, rand } from '../core/math';

export interface EnemyDef { kind: 'grunt' | 'wisp' | 'elite'; name: string; hp: number; atk: number; defn: number; speed: number; radius: number; height: number; exp: number; poise: number; aggro: number }
export const ENEMY: Record<EnemyDef['kind'], EnemyDef> = {
  grunt: { kind: 'grunt', name: '글리치 병사', hp: 520, atk: 64, defn: 40, speed: 3.7, radius: 0.5, height: 1.85, exp: 45, poise: 42, aggro: 15 },
  wisp: { kind: 'wisp', name: '전자 바이러스', hp: 300, atk: 56, defn: 20, speed: 2.7, radius: 0.5, height: 1.2, exp: 35, poise: 20, aggro: 20 },
  elite: { kind: 'elite', name: '거대 문서 골렘 · 망각의 문의 수호자', hp: 4200, atk: 118, defn: 70, speed: 3.2, radius: 1.15, height: 3.4, exp: 450, poise: 170, aggro: 27 },
};
type State = 'idle' | 'chase' | 'windup' | 'strike' | 'recover' | 'stagger' | 'return';
interface Atk { clip: Clip; wind: number; hold: number; rec: number; uWind: number; uHit: number }
const ATK: Record<string, Atk> = {
  slash: { clip: CLIPS.blade1, wind: 0.55, hold: 0.22, rec: 0.7, uWind: 0.3, uHit: 0.55 },
  thrust: { clip: CLIPS.thrust, wind: 0.7, hold: 0.3, rec: 0.8, uWind: 0.25, uHit: 0.5 },
  sweep: { clip: CLIPS.heavy1, wind: 0.95, hold: 0.3, rec: 1.0, uWind: 0.4, uHit: 0.62 },
  slam: { clip: CLIPS.heavy3, wind: 1.25, hold: 0.3, rec: 1.1, uWind: 0.45, uHit: 0.64 },
  charge: { clip: CLIPS.thrust, wind: 0.9, hold: 0.85, rec: 1.0, uWind: 0.25, uHit: 0.5 },
};
const _v = new THREE.Vector3();

export class Enemy {
  readonly pos = new THREE.Vector3();
  readonly center = new THREE.Vector3();
  readonly home = new THREE.Vector3();
  readonly root: THREE.Object3D;
  yaw = Math.random() * 6.28;
  hp: number; maxHp: number; atk: number;
  dead = false; removed = false;
  private deadT = 0;
  state: State = 'idle';
  private t = 0;
  aggro = false;
  mark: { elem: Elem; t: number } | null = null;
  reactCd = 0; vulnT = 0; slowT = 0; frozenT = 0; asleep = false;
  private sleepT = 0;
  private dotAcc = 0;
  private poise: number;
  private staggerT = 0;
  private vx = 0; private vz = 0;
  private cd = 1 + Math.random() * 1.5;
  private cur: Atk = ATK.slash;
  private curName = 'slash';
  private hitDone = false;
  private flashT = 0;
  private wander = new THREE.Vector3();
  private wanderT = 0;
  private strafe = Math.random() < 0.5 ? 1 : -1;
  private spot = new THREE.Vector3();
  private bob = Math.random() * 6;
  private speedNow = 0;
  model: CharModel | null = null;
  private anim: Animator | null = null;
  private wisp: WispModel | null = null;
  /** 是否显示过血条（被打过或进入战斗后一直显示） */
  seen = false;

  constructor(private g: Game, readonly def: EnemyDef, x: number, z: number, readonly level: number, readonly camp: number, readonly elem: Elem | null = null) {
    const k = level - 1;
    this.maxHp = this.hp = Math.round(def.hp * (1 + 0.17 * k));
    this.atk = Math.round(def.atk * (1 + 0.11 * k));
    this.poise = def.poise;
    if (def.kind === 'wisp') { this.wisp = buildWisp(ELEM[elem ?? 'blaze'].color); this.root = this.wisp.root; }
    else { this.model = def.kind === 'elite' ? buildElite() : buildGrunt(); this.anim = new Animator(this.model.rig); this.root = this.model.root; }
    this.pos.set(x, g.terrain.heightAt(x, z), z);
    this.home.copy(this.pos);
    this.wander.copy(this.pos);
    g.scene.add(this.root);
    this.sync(0);
  }

  // ---------- 被打 ----------
  damage(dmg: number, poise: number, kx: number, kz: number) {
    if (this.dead) return;
    this.hp -= dmg;
    this.flashT = 0.12;
    this.aggro = true;
    this.seen = true;
    if (this.state === 'idle' || this.state === 'return') this.state = 'chase';
    const heavy = this.def.kind === 'elite';
    this.vx += kx * (heavy ? 0.15 : 1); this.vz += kz * (heavy ? 0.15 : 1);
    if (this.hp <= 0) return this.die();
    this.poise -= poise * (this.state === 'stagger' ? 0 : 1);
    if (this.poise <= 0 && this.frozenT <= 0) {
      this.poise = this.def.poise;
      this.state = 'stagger';
      this.staggerT = heavy ? 2.6 : 0.75;
      if (heavy) { this.vulnT = 2.6; this.g.hud.float(this.center, '방어 붕괴', '#ffd24a', true); this.g.sfx.boom(); }
    }
  }
  setMark(elem: Elem) { if (this.reactCd <= 0) this.mark = { elem, t: 8 }; }
  freeze(t: number) { this.frozenT = t; this.state = 'chase'; }
  sleep(t: number) { this.asleep = true; this.sleepT = t; this.state = 'chase'; this.g.hud.float(this.center, 'Zzz', ELEM.shade.color); }
  wake() { this.asleep = false; }
  shove(vx: number, vz: number) { if (this.def.kind !== 'elite') { this.vx += vx; this.vz += vz; } }
  private die() {
    const g = this.g;
    this.dead = true; this.hp = 0; this.mark = null;
    g.party.gainExp(this.def.exp + this.level * 6);
    const dust = this.def.kind === 'elite' ? 300 : 12 + Math.floor(Math.random() * 12);
    g.party.items.dust += dust;
    g.hud.float(this.center, `+${dust} Token`, '#ffe08a');
    g.fx.burst(this.center, this.wisp ? ELEM[this.elem ?? 'blaze'].color : '#b9a8ff', 26, 6, 0.4, 0.8, { up: 2 });
    g.sfx.boom();
    if (g.combat.target === this) { g.combat.target = null; g.combat.locked = false; }
    g.world.onEnemyDead(this);
  }

  // ---------- 每帧 ----------
  update(dt: number) {
    const g = this.g, pl = g.player, def = this.def;
    if (this.dead) {
      this.deadT += dt;
      const k = Math.max(0, 1 - this.deadT / 0.7);
      this.root.scale.setScalar((def.kind === 'elite' ? 1.85 : 1) * k);
      this.root.position.y = this.pos.y + (this.wisp ? 1.5 : 0) - (1 - k) * 0.4;
      if (this.deadT > 0.7) { g.scene.remove(this.root); this.removed = true; }
      return;
    }
    if (this.mark && (this.mark.t -= dt) <= 0) this.mark = null;
    this.reactCd -= dt; this.vulnT = Math.max(0, this.vulnT - dt); this.slowT -= dt; this.flashT -= dt;
    const mi = this.mark ? ELEM[this.mark.elem] : null;
    if (mi?.dot && (this.dotAcc += dt) >= 1) {
      this.dotAcc = 0;
      const d = Math.round(g.party.cur.atk * mi.dot);
      this.hp -= d;
      g.hud.dmg(this.center, d, mi.color, false);
      if (this.hp <= 0) return this.die();
    }
    this.pos.x += this.vx * dt; this.pos.z += this.vz * dt;
    this.vx = damp(this.vx, 0, 6, dt); this.vz = damp(this.vz, 0, 6, dt);

    let edt = dt * (this.slowT > 0 || mi?.slow ? 1 - (mi?.slow ?? 0.4) : 1);
    if (this.frozenT > 0) { this.frozenT -= dt; edt = 0; }
    else if (this.asleep) { if ((this.sleepT -= dt) <= 0) this.wake(); edt = 0; }
    this.speedNow = 0;
    if (edt > 0) (def.kind === 'wisp' ? this.aiWisp : def.kind === 'elite' ? this.aiElite : this.aiGrunt).call(this, edt);

    // 不让敌人走进水里、陡坡或障碍物里
    g.col.resolve(this.pos, def.radius, 1.5);
    const dx = this.pos.x - pl.pos.x, dz = this.pos.z - pl.pos.z, d = Math.hypot(dx, dz), min = def.radius + 0.38;
    if (d < min && d > 0.01 && Math.abs(pl.pos.y - this.pos.y) < 2) { this.pos.x += (dx / d) * (min - d); this.pos.z += (dz / d) * (min - d); }
    this.pos.y = Math.max(g.terrain.heightAt(this.pos.x, this.pos.z), this.wisp ? 0.3 : -0.4);
    this.sync(edt);
  }

  private sync(dt: number) {
    const g = this.g, h = this.def.height;
    this.center.set(this.pos.x, this.pos.y + (this.wisp ? 1.5 : h * 0.55), this.pos.z);
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
    const frozen = this.frozenT > 0, flash = Math.max(0, this.flashT / 0.12);
    if (this.wisp) {
      this.bob += dt * 2;
      this.root.position.y = this.pos.y + 1.5 + Math.sin(this.bob) * 0.18;
      const wind = this.state === 'windup' ? this.t / this.cur.wind : 0;
      this.wisp.shell.rotation.y += dt * (1.5 + wind * 10);
      this.wisp.ring.rotation.z += dt * 0.8;
      this.wisp.ring.scale.setScalar(1 + wind * 0.5);
      for (const m of this.wisp.mats) m.emissive.setScalar(flash * 0.6).add(frozen ? _c.set('#3a6a9a') : _c.set(0));
      return;
    }
    const a = this.anim!, M = this.model!;
    let action: { clip: Clip; u: number } | null = null;
    if (this.state === 'windup') action = { clip: this.cur.clip, u: (this.t / this.cur.wind) * this.cur.uWind };
    else if (this.state === 'strike') action = { clip: this.cur.clip, u: this.cur.uWind + Math.min(1, this.t / 0.12) * (this.cur.uHit - this.cur.uWind) };
    else if (this.state === 'recover') action = { clip: this.cur.clip, u: this.cur.uHit + (this.t / this.cur.rec) * (1 - this.cur.uHit) };
    else if (this.state === 'stagger') action = this.def.kind === 'elite' ? { clip: CLIPS.down, u: Math.min(1, (2.6 - this.staggerT) * 3) } : { clip: CLIPS.hit, u: 1 - this.staggerT / 0.75 };
    else if (this.asleep) action = { clip: CLIPS.down, u: 0.6 };
    a.update(frozen ? 0 : Math.max(dt, 0.0001), { mode: 'ground', speed: this.speedNow, sprint: 0, vy: 0, moving: this.speedNow > 0.2, action, landT: 0 });
    M.setFlash(flash);
    if (frozen) for (const m of M.mats) m.emissive.set('#3a6a9a');
    void g;
  }

  private face(yaw: number, rate: number, dt: number) { this.yaw = dampAngle(this.yaw, yaw, rate, dt); }
  private walk(yaw: number, speed: number, dt: number) {
    const g = this.g, nx = this.pos.x + Math.sin(yaw) * speed * dt, nz = this.pos.z + Math.cos(yaw) * speed * dt, h = g.terrain.heightAt(nx, nz);
    if (!this.wisp && (h < -0.3 || g.terrain.normalAt(nx, nz, _v).y < 0.7)) return false;
    this.pos.x = nx; this.pos.z = nz;
    this.speedNow = speed;
    return true;
  }
  /** 待机、发现玩家、脱战回家——三种敌人共用 */
  private common(dt: number, d: number, toYaw: number) {
    const g = this.g, pl = g.player, hd = Math.hypot(this.pos.x - this.home.x, this.pos.z - this.home.z);
    if (this.state === 'idle') {
      if ((this.wanderT -= dt) < 0) { this.wanderT = 2.5 + Math.random() * 4; this.wander.set(this.home.x + rand(-6, 6), 0, this.home.z + rand(-6, 6)); }
      const wd = Math.hypot(this.wander.x - this.pos.x, this.wander.z - this.pos.z);
      if (wd > 0.6 && this.def.kind !== 'elite') { const y = Math.atan2(this.wander.x - this.pos.x, this.wander.z - this.pos.z); this.face(y, 4, dt); this.walk(y, this.def.speed * 0.35, dt); }
      if (!pl.dead && (this.aggro || (d < this.def.aggro && Math.abs(pl.pos.y - this.pos.y) < 7))) {
        this.aggro = true; this.seen = true; this.state = 'chase';
        g.hud.float(this.center.clone().setY(this.center.y + 0.9), '!', '#ff5a4a', true);
        for (const e of g.enemies.list) if (e.camp === this.camp && !e.dead && e.pos.distanceTo(this.pos) < 16) e.aggro = true;
      }
      return true;
    }
    if (this.state === 'return') {
      const y = Math.atan2(this.home.x - this.pos.x, this.home.z - this.pos.z);
      this.face(y, 6, dt);
      this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.25 * dt);
      if (hd < 1.5 || !this.walk(y, this.def.speed * 1.4, dt)) { this.state = 'idle'; this.aggro = false; this.hp = this.maxHp; }
      return true;
    }
    if (this.state === 'stagger') { if ((this.staggerT -= dt) <= 0) { this.state = 'chase'; this.cd = 0.6; } return true; }
    if (this.state === 'chase' && (pl.dead || hd > 52 || d > 44)) { this.state = 'return'; this.mark = null; return true; }
    void toYaw;
    return false;
  }
  private begin(name: string) { this.cur = ATK[name]; this.curName = name; this.state = 'windup'; this.t = 0; this.hitDone = false; }
  private strikeHit(reach: number, arcDeg: number, mult: number) {
    const pl = this.g.player, dx = pl.pos.x - this.pos.x, dz = pl.pos.z - this.pos.z, d = Math.hypot(dx, dz);
    if (d < reach + 0.3 && Math.abs(pl.pos.y - this.pos.y) < 2.5 && Math.abs(angleDiff(this.yaw, Math.atan2(dx, dz))) < (arcDeg * Math.PI) / 360) pl.hurt(this.atkNow() * mult, 'phys', this.pos);
  }
  private atkNow() { return this.atk * (this.mark?.elem === 'tide' ? 0.8 : 1); }

  private aiGrunt(dt: number) {
    const g = this.g, pl = g.player, dx = pl.pos.x - this.pos.x, dz = pl.pos.z - this.pos.z, d = Math.hypot(dx, dz), toYaw = Math.atan2(dx, dz);
    if (this.common(dt, d, toYaw)) return;
    this.t += dt;
    switch (this.state) {
      case 'chase':
        this.face(toYaw, 7, dt);
        this.cd -= dt;
        if (d > 2.3) this.walk(toYaw, this.def.speed, dt);
        else if (this.cd > 0) this.walk(toYaw + this.strafe * 1.5, this.def.speed * 0.3, dt);
        if (this.cd <= 0 && d < 6 && d > 3.2 && Math.random() < 0.5) this.begin('thrust');
        else if (this.cd <= 0 && d < 2.6) this.begin('slash');
        break;
      case 'windup':
        this.face(toYaw, 3, dt);
        if (this.t >= this.cur.wind) { this.state = 'strike'; this.t = 0; g.sfx.swing(); if (this.curName === 'thrust') { this.vx = Math.sin(this.yaw) * 15; this.vz = Math.cos(this.yaw) * 15; } }
        break;
      case 'strike':
        if (!this.hitDone && this.t > (this.curName === 'thrust' ? 0.14 : 0.06)) {
          this.hitDone = true;
          g.fx.slash(this.pos, this.yaw, { r: 2.8, a0: -1.1, a1: 1.1, color: '#ff5a4a', y: 1.1 });
          this.strikeHit(2.8, 130, this.curName === 'thrust' ? 1.2 : 1);
        }
        if (this.t >= this.cur.hold) { this.state = 'recover'; this.t = 0; }
        break;
      case 'recover':
        if (this.t >= this.cur.rec) { this.state = 'chase'; this.cd = 1.2 + Math.random() * 1.4; this.strafe *= -1; }
        break;
    }
  }

  private aiElite(dt: number) {
    const g = this.g, pl = g.player, dx = pl.pos.x - this.pos.x, dz = pl.pos.z - this.pos.z, d = Math.hypot(dx, dz), toYaw = Math.atan2(dx, dz);
    if (this.common(dt, d, toYaw)) return;
    const rage = this.hp < this.maxHp * 0.5;
    this.t += dt;
    switch (this.state) {
      case 'chase':
        this.face(toYaw, 5, dt);
        this.cd -= dt;
        if (d > 4) this.walk(toYaw, this.def.speed * (rage ? 1.25 : 1), dt);
        if (this.cd <= 0) {
          if (d > 9) this.begin('charge');
          else if (d < 7.5) {
            this.begin(Math.random() < 0.5 ? 'sweep' : 'slam');
            if (this.curName === 'slam') { this.spot.copy(pl.pos); g.fx.telegraph(this.spot, 4.2, this.cur.wind); }
            else g.fx.telegraph(this.pos, 5.6, this.cur.wind);
          }
        }
        break;
      case 'windup':
        this.face(this.curName === 'slam' ? Math.atan2(this.spot.x - this.pos.x, this.spot.z - this.pos.z) : toYaw, this.curName === 'charge' ? 6 : 2.5, dt);
        if (this.t >= this.cur.wind) { this.state = 'strike'; this.t = 0; g.sfx.swing(true); }
        break;
      case 'strike':
        if (this.curName === 'charge') {
          this.walk(this.yaw, 15, dt);
          if (!this.hitDone && d < 2.6) { this.hitDone = true; pl.hurt(this.atkNow() * 1.2, 'phys', this.pos); g.shake(0.3); }
          if (Math.random() < dt * 30) g.fx.burst(this.pos, '#d8d0b8', 2, 2, 0.6, 0.5, { soft: true, flat: true });
        } else if (!this.hitDone && this.t > 0.1) {
          this.hitDone = true;
          g.shake(0.45); g.sfx.boom();
          if (this.curName === 'slam') {
            g.fx.ring(this.spot, 0.8, 4.4, 0.45, '#ff5a3a'); g.fx.burst(this.spot, '#ffb070', 24, 7, 0.5, 0.7, { up: 3 });
            if (Math.hypot(pl.pos.x - this.spot.x, pl.pos.z - this.spot.z) < 4.2 && pl.heightAbove() < 1.6) pl.hurt(this.atkNow() * 1.4, 'phys', this.spot);
          } else {
            g.fx.slash(this.pos, this.yaw, { r: 5.6, w: 2, a0: -1.9, a1: 1.9, color: '#ff5a3a', y: 1.6, dur: 0.3 });
            this.strikeHit(5.6, 220, 1);
          }
        }
        if (this.t >= this.cur.hold) { this.state = 'recover'; this.t = 0; }
        break;
      case 'recover':
        if (this.t >= this.cur.rec * (rage ? 0.6 : 1)) { this.state = 'chase'; this.cd = rage ? 0.7 : 1.6; }
        break;
    }
  }

  private aiWisp(dt: number) {
    const g = this.g, pl = g.player, dx = pl.pos.x - this.pos.x, dz = pl.pos.z - this.pos.z, d = Math.hypot(dx, dz), toYaw = Math.atan2(dx, dz);
    if (this.common(dt, d, toYaw)) return;
    this.t += dt;
    this.face(toYaw, 6, dt);
    switch (this.state) {
      case 'chase':
        this.cd -= dt;
        if (d < 7) this.walk(toYaw + Math.PI, this.def.speed, dt);
        else if (d > 12) this.walk(toYaw, this.def.speed, dt);
        else this.walk(toYaw + this.strafe * 1.57, this.def.speed * 0.6, dt);
        if (this.cd <= 0 && d < 18) { this.begin('slash'); this.cur = { ...ATK.slash, wind: 0.75, hold: 0.1, rec: 0.5 }; }
        break;
      case 'windup':
        if (this.t >= this.cur.wind) {
          this.state = 'strike'; this.t = 0;
          const from = this.center.clone(), el = this.elem ?? 'blaze';
          const vel = _v.set(pl.pos.x, pl.pos.y + 1, pl.pos.z).sub(from).normalize().multiplyScalar(13).clone();
          g.combat.spawnProj({ owner: 1, pos: from, vel, life: 2.2, r: 0.26, mult: 0, elem: el, homing: null, pierce: false, aoe: 0, dmg: this.atkNow(), poise: 0 });
          g.sfx.cast();
        }
        break;
      case 'strike': if (this.t >= this.cur.hold) { this.state = 'recover'; this.t = 0; } break;
      case 'recover': if (this.t >= this.cur.rec) { this.state = 'chase'; this.cd = 2.2 + Math.random() * 1.2; this.strafe *= -1; } break;
    }
  }
}
const _c = new THREE.Color();

export interface Camp { id: number; x: number; z: number; grunts: number; wisps: number; level: number; elite?: boolean; respawnT: number; name: string }

/** 管理所有敌人：按营地生成、刷新、查询 */
export class Enemies {
  list: Enemy[] = [];
  camps: Camp[] = [];
  constructor(private g: Game) {}

  addCamp(c: Omit<Camp, 'respawnT'>, spawn = true) {
    const camp: Camp = { ...c, respawnT: 0 };
    this.camps.push(camp);
    if (spawn) this.spawn(camp);
    return camp;
  }
  spawn(c: Camp) {
    const at = (i: number, n: number, r: number): [number, number] => { const a = (i / Math.max(1, n)) * 6.283 + c.id; return [c.x + Math.sin(a) * r, c.z + Math.cos(a) * r]; };
    if (c.elite) this.list.push(new Enemy(this.g, ENEMY.elite, c.x, c.z, c.level, c.id));
    for (let i = 0; i < c.grunts; i++) this.list.push(new Enemy(this.g, ENEMY.grunt, ...at(i, c.grunts, 3.5 + (i % 2) * 1.5), c.level, c.id));
    for (let i = 0; i < c.wisps; i++) this.list.push(new Enemy(this.g, ENEMY.wisp, ...at(i + 0.5, c.wisps, 6), c.level, c.id, (c.id + i) % 2 ? 'frost' : 'blaze'));
  }
  alive(campId: number) { return this.list.filter((e) => e.camp === campId && !e.dead).length; }
  nearest(pos: THREE.Vector3, r: number) {
    let best: Enemy | null = null, bd = r;
    for (const e of this.list) { if (e.dead) continue; const d = e.pos.distanceTo(pos); if (d < bd) { bd = d; best = e; } }
    return best;
  }
  update(dt: number) {
    for (const e of this.list) e.update(dt);
    if (this.list.some((e) => e.removed)) this.list = this.list.filter((e) => !e.removed);
    const pl = this.g.player.pos;
    for (const c of this.camps) {
      if (c.elite || this.alive(c.id) > 0) { c.respawnT = 0; continue; }
      c.respawnT += dt;
      if (c.respawnT > 150 && Math.hypot(pl.x - c.x, pl.z - c.z) > 60) { c.respawnT = 0; this.spawn(c); }
    }
  }
  /** 脱战：让所有敌人回家（玩家传送或全灭后调用） */
  calm() { for (const e of this.list) if (!e.dead && e.state !== 'idle') { e.state = 'return'; e.aggro = false; } }
}
