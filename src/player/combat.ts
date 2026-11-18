import * as THREE from 'three';
import type { Game } from '../game';
import type { Enemy } from '../enemy/enemies';
import { ELEM, type Elem } from '../combat/elements';
import { CLIPS, type ClipName } from '../char/anim';
import { glowMat } from '../render/toon';
import { angleDiff } from '../core/math';

/** 一个动作：播哪段动画、多长、在什么时刻触发什么效果 */
export interface Act {
  clip: ClipName; dur: number;
  /** [触发时刻 0..1, 效果] */
  ev: [number, (c: Combat) => void][];
  /** 过了这个进度就能接下一招或用移动打断 */
  cancel?: number;
  /** 出招时向前突进的距离 */
  lunge?: number;
  iframe?: number;
  heavy?: boolean;
}
export interface Skill extends Act { name: string; desc: string; cd?: number; cost?: number }
export interface Kit { weapon: 'cast' | 'fan' | 'claw' | 'heavy'; normalName: string; normals: Act[]; charged: Act; skill: Skill; burst: Skill }

interface Proj {
  owner: 0 | 1; pos: THREE.Vector3; vel: THREE.Vector3; life: number; r: number; mult: number; elem: Elem; mesh: THREE.Mesh;
  homing: Enemy | null; pierce: boolean; hit: Set<Enemy>; aoe: number; dmg: number; poise: number;
}
interface Field { pos: THREE.Vector3; r: number; t: number; dur: number; tick: number; acc: number; fn: (f: Field) => void }
export interface HitOpt { elem?: Elem; poise?: number; knock?: number; noReact?: boolean; quiet?: boolean }

const _v = new THREE.Vector3(), _d = new THREE.Vector3();
const orbGeo = new THREE.IcosahedronGeometry(1, 1);
const matCache = new Map<string, THREE.Material>();
const orbMat = (c: string) => { let m = matCache.get(c); if (!m) matCache.set(c, (m = glowMat(c, 2))); return m; };

/** 战斗：出招、命中判定、属性反应、飞行物、持续领域 */
export class Combat {
  act: Act | null = null;
  actT = 0;
  private evI = 0;
  combo = 0;
  private comboIdle = 9;
  private buf: 'atk' | 'skill' | 'burst' | null = null;
  private bufT = 0;
  private holdT = 0;
  private charged = false;
  target: Enemy | null = null;
  locked = false;
  projs: Proj[] = [];
  fields: Field[] = [];
  private timers: { t: number; fn: () => void }[] = [];
  /** 距离上次出手过了多久（决定表情、是否战斗状态） */
  sinceAttack = 99;
  /** 极限闪避后的反击加成剩余时间 */
  counterT = 0;

  /** 招式之间传落点用的草稿 */
  spot = new THREE.Vector3();
  constructor(public g: Game) {}
  get kit() { return this.g.party.cur.def.kit; }
  get elem(): Elem { return this.g.party.cur.def.elem; }
  col(e: Elem = this.elem) { return ELEM[e].color; }
  get busy() { return this.act !== null; }
  animAction() { return this.act ? { clip: CLIPS[this.act.clip], u: Math.min(1, this.actT / this.act.dur) } : null; }

  cancelAct() { this.act = null; }
  after(t: number, fn: () => void) { this.timers.push({ t, fn }); }

  // ---------------- 每帧 ----------------
  update(dt: number) {
    const g = this.g, inp = g.input, pl = g.player, m = g.party.cur;
    this.sinceAttack += dt;
    this.comboIdle += dt;
    this.counterT = Math.max(0, this.counterT - dt);
    this.bufT -= dt;
    if (this.bufT <= 0) this.buf = null;
    if (this.target && (this.target.dead || this.target.pos.distanceTo(pl.pos) > 32)) { this.target = null; this.locked = false; }

    if (g.playing && !pl.dead) {
      if (inp.hit('Tab') || inp.hit('Mouse1')) this.toggleLock();
      if (inp.hit('Mouse0')) { this.buf = 'atk'; this.bufT = 0.35; this.holdT = 0; this.charged = false; }
      if (inp.down('Mouse0')) this.holdT += dt; else this.holdT = 0;
      if (inp.hit('KeyE')) { this.buf = 'skill'; this.bufT = 0.35; }
      if (inp.hit('KeyQ')) { this.buf = 'burst'; this.bufT = 0.35; }

      const free = !this.act || this.actT >= (this.act.cancel ?? 0.6) * this.act.dur;
      if (pl.state === 'ground' && pl.dodgeT <= 0 && free) {
        if (this.buf === 'burst') {
          if (m.energy >= (this.kit.burst.cost ?? 60)) { m.energy = 0; this.start(this.kit.burst); g.hud.banner(this.kit.burst.name, this.col()); }
          else g.sfx.deny();
          this.buf = null;
        } else if (this.buf === 'skill') {
          if (m.skillCd <= 0) { m.skillCd = this.kit.skill.cd ?? 8; this.start(this.kit.skill); }
          else g.sfx.deny();
          this.buf = null;
        } else if (this.holdT > 0.4 && !this.charged && pl.stamina >= 20) {
          this.charged = true;
          pl.useStamina(20);
          this.combo = 0;
          this.start(this.kit.charged);
          this.buf = null;
        } else if (this.buf === 'atk') {
          if (this.comboIdle > 1.0) this.combo = 0;
          this.start(this.kit.normals[this.combo]);
          this.combo = (this.combo + 1) % this.kit.normals.length;
          this.buf = null;
        }
      } else if ((pl.state === 'air' || pl.state === 'glide') && this.buf === 'atk' && pl.heightAbove() > 2) {
        pl.startPlunge();
        this.buf = null;
      }
    }

    if (this.act) {
      const a = this.act;
      this.actT += dt;
      this.comboIdle = 0;
      while (this.evI < a.ev.length && this.actT >= a.ev[this.evI][0] * a.dur) a.ev[this.evI++][1](this);
      if (this.actT >= a.dur || (this.actT >= (a.cancel ?? 0.6) * a.dur && pl.wantsMove && !this.buf)) this.act = null;
    }
    for (let i = this.timers.length - 1; i >= 0; i--) if ((this.timers[i].t -= dt) <= 0) this.timers.splice(i, 1)[0].fn();
    this.updateProjs(dt);
    for (let i = this.fields.length - 1; i >= 0; i--) {
      const f = this.fields[i];
      f.t += dt; f.acc += dt;
      while (f.acc >= f.tick) { f.acc -= f.tick; f.fn(f); }
      if (f.t >= f.dur) this.fields.splice(i, 1);
    }
  }

  private start(a: Act) {
    const g = this.g, pl = g.player;
    this.act = a; this.actT = 0; this.evI = 0; this.sinceAttack = 0;
    // 出手时自动转向目标：远程角色看得更远，否则背对着敌人时飞行物会朝反方向打出去
    const t = this.pickTarget(this.kit.weapon === 'cast' ? 26 : 11);
    if (t) pl.faceTo(Math.atan2(t.pos.x - pl.pos.x, t.pos.z - pl.pos.z), true);
    else if (pl.wantsMove) pl.faceTo(pl.moveYaw, true);
    if (a.lunge) {
      // 目标就在面前时不要冲过头
      const d = t ? Math.max(0, Math.hypot(t.pos.x - pl.pos.x, t.pos.z - pl.pos.z) - t.def.radius - 1.2) : a.lunge;
      pl.push(Math.min(a.lunge, d), a.dur * 0.35);
    }
    if (a.iframe) pl.iframe = Math.max(pl.iframe, a.iframe);
  }

  toggleLock() {
    if (this.locked) { this.locked = false; this.target = null; return; }
    const t = this.g.enemies.nearest(this.g.player.pos, 26);
    if (t) { this.target = t; this.locked = true; }
  }
  /** 当前要打谁：锁定的目标，否则面前最近的敌人 */
  pickTarget(range: number) {
    const pl = this.g.player;
    if (this.locked && this.target && !this.target.dead) return this.target;
    const yaw = pl.wantsMove ? pl.moveYaw : pl.yaw;
    let best: Enemy | null = null, bs = 1e9;
    for (const e of this.g.enemies.list) {
      if (e.dead) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, d = Math.hypot(dx, dz);
      if (d > range || Math.abs(e.pos.y - pl.pos.y) > 6) continue;
      const off = Math.abs(angleDiff(yaw, Math.atan2(dx, dz)));
      const s = d + off * 4;
      if (s < bs) { bs = s; best = e; }
    }
    this.target = best ?? this.target;
    return best;
  }

  // ---------------- 给招式表用的工具 ----------------
  /** 角色面前 d 米处的点 */
  front(d: number, y = 0) { const p = this.g.player; return new THREE.Vector3(p.pos.x + Math.sin(p.yaw) * d, p.pos.y + y, p.pos.z + Math.cos(p.yaw) * d); }
  /** 技能落点：有目标就落在目标脚下，否则落在面前 */
  aim(dist: number) {
    const t = this.pickTarget(dist * 1.4);
    if (t) return t.pos.clone();
    const p = this.front(dist);
    p.y = this.g.terrain.heightAt(p.x, p.z);
    return p;
  }
  /** 近战扇形判定 + 刀光 */
  arc(r: number, deg: number, mult: number, o: HitOpt & { a0?: number; a1?: number; tilt?: number; pitch?: number; y?: number; w?: number; noFx?: boolean } = {}) {
    const g = this.g, pl = g.player, half = (deg * Math.PI) / 360;
    if (!o.noFx) g.fx.slash(pl.pos, pl.yaw, { r: r + 0.2, w: o.w ?? Math.min(1.3, r * 0.45), a0: o.a0 ?? half, a1: o.a1 ?? -half, tilt: o.tilt, pitch: o.pitch, y: o.y, color: this.col(o.elem) });
    g.sfx.swing(r > 3.2);
    let n = 0;
    for (const e of g.enemies.list) {
      if (e.dead) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, d = Math.hypot(dx, dz);
      if (d > r + e.def.radius || Math.abs(e.pos.y - pl.pos.y) > 3) continue;
      if (d > 0.8 && Math.abs(angleDiff(pl.yaw, Math.atan2(dx, dz))) > half + 0.2) continue;
      this.hit(e, mult, o);
      n++;
    }
    return n;
  }
  /** 圆形范围判定 */
  aoe(pos: THREE.Vector3, r: number, mult: number, o: HitOpt & { noFx?: boolean } = {}) {
    const g = this.g, c = this.col(o.elem);
    if (!o.noFx) { g.fx.ring(pos, r * 0.3, r, 0.4, c); g.fx.burst(_v.copy(pos).setY(pos.y + 0.5), c, 14, r * 2.2, 0.35, 0.5, { up: 2 }); }
    let n = 0;
    for (const e of g.enemies.list) {
      if (e.dead || Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z) > r + e.def.radius || Math.abs(e.pos.y - pos.y) > 5) continue;
      this.hit(e, mult, { ...o, knock: o.knock });
      n++;
    }
    return n;
  }
  /** 面前一条直线上的判定（光束、冲刺斩） */
  line(len: number, width: number, mult: number, o: HitOpt = {}) {
    const pl = this.g.player, fx = Math.sin(pl.yaw), fz = Math.cos(pl.yaw);
    for (const e of this.g.enemies.list) {
      if (e.dead) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, f = dx * fx + dz * fz, s = Math.abs(dx * fz - dz * fx);
      if (f > -0.5 && f < len + e.def.radius && s < width / 2 + e.def.radius && Math.abs(e.pos.y - pl.pos.y) < 4) this.hit(e, mult, o);
    }
  }
  /** 对范围内每个活着的敌人做点什么 */
  each(pos: THREE.Vector3, r: number, fn: (e: Enemy) => void) {
    for (const e of this.g.enemies.list) if (!e.dead && Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z) < r + e.def.radius) fn(e);
  }
  /** 发射飞行物 */
  shot(mult: number, o: { speed?: number; n?: number; spread?: number; size?: number; elem?: Elem; homing?: boolean; pierce?: boolean; aoe?: number; life?: number; poise?: number; up?: number } = {}) {
    const g = this.g, pl = g.player, n = o.n ?? 1, elem = o.elem ?? this.elem, t = this.pickTarget(26);
    g.sfx.cast();
    for (let i = 0; i < n; i++) {
      const off = n === 1 ? 0 : ((i / (n - 1)) * 2 - 1) * (o.spread ?? 0.3);
      const pos = this.front(0.7, 1.15), yaw = pl.yaw + off;
      const vel = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
      if (t) { vel.y = (t.center.y - pos.y) / Math.max(2, Math.hypot(t.pos.x - pos.x, t.pos.z - pos.z)); vel.normalize(); }
      vel.y += o.up ?? 0;
      vel.multiplyScalar(o.speed ?? 22);
      this.spawnProj({ owner: 0, pos, vel, life: o.life ?? 1.6, r: o.size ?? 0.22, mult, elem, homing: o.homing !== false ? t : null, pierce: !!o.pierce, aoe: o.aoe ?? 0, dmg: 0, poise: o.poise ?? 6 });
    }
  }
  spawnProj(p: Omit<Proj, 'mesh' | 'hit'>) {
    const mesh = new THREE.Mesh(orbGeo, orbMat(ELEM[p.elem].color));
    mesh.scale.setScalar(p.r);
    mesh.position.copy(p.pos);
    this.g.scene.add(mesh);
    this.projs.push({ ...p, mesh, hit: new Set() });
  }
  /** 持续一段时间的领域：每 tick 触发一次 fn */
  field(pos: THREE.Vector3, r: number, dur: number, tick: number, fn: (f: Field) => void, elem: Elem = this.elem) {
    this.g.fx.zone(pos, r, dur, this.col(elem));
    this.fields.push({ pos: pos.clone(), r, t: 0, dur, tick, acc: 0, fn });
  }
  heal(pct: number, all = false) {
    const g = this.g;
    for (const m of all ? g.party.members : [g.party.cur]) {
      if (!m.alive) continue;
      const v = Math.round(m.maxHp * pct);
      m.hp = Math.min(m.maxHp, m.hp + v);
      if (m === g.party.cur) g.hud.float(_v.copy(g.player.pos).setY(g.player.pos.y + 1.7), '+' + v, '#7dff9a');
    }
    g.fx.burst(_v.copy(g.player.pos).setY(g.player.pos.y + 1), '#7dff9a', 10, 1.5, 0.22, 0.8, { up: 2 });
  }
  /** 把范围内的敌人往一点吸 */
  pull(pos: THREE.Vector3, r: number, strength = 1) {
    for (const e of this.g.enemies.list) {
      if (e.dead || e.def.kind === 'elite') continue;
      const d = Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z);
      if (d < r && d > 0.6) e.shove((pos.x - e.pos.x) / d * 7 * strength, (pos.z - e.pos.z) / d * 7 * strength);
    }
  }
  /** 瞬移到目标身边（没有目标就向前闪一段） */
  blink(dist: number) {
    const g = this.g, pl = g.player, t = this.pickTarget(dist * 1.6);
    g.fx.burst(_v.copy(pl.pos).setY(pl.pos.y + 1), this.col(), 14, 3, 0.3, 0.4);
    if (t) {
      const a = Math.atan2(pl.pos.x - t.pos.x, pl.pos.z - t.pos.z), d = t.def.radius + 1.3;
      pl.teleportNear(t.pos.x + Math.sin(a) * d, t.pos.z + Math.cos(a) * d);
      pl.faceTo(Math.atan2(t.pos.x - pl.pos.x, t.pos.z - pl.pos.z), true);
    } else pl.teleportNear(pl.pos.x + Math.sin(pl.yaw) * dist, pl.pos.z + Math.cos(pl.yaw) * dist);
    g.fx.burst(_v.copy(pl.pos).setY(pl.pos.y + 1), this.col(), 14, 3, 0.3, 0.4);
    g.sfx.dodge();
  }

  // ---------------- 伤害结算 ----------------
  hit(e: Enemy, mult: number, o: HitOpt = {}) {
    const g = this.g, m = g.party.cur, elem = o.elem ?? this.elem;
    const atk = m.atk * (1 + g.party.atkBuff);
    let dmg = atk * mult * (this.counterT > 0 ? 1.5 : 1);
    const crit = Math.random() < 0.15 + (e.mark?.elem === 'astral' ? 0.15 : 0);
    if (crit) dmg *= 1.6;
    dmg = this.mitigate(e, dmg, elem);
    const pl = g.player, dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, d = Math.hypot(dx, dz) || 1;
    e.damage(dmg, o.poise ?? 10, (dx / d) * (o.knock ?? 1.5), (dz / d) * (o.knock ?? 1.5));
    g.hud.dmg(e.center, Math.round(dmg), ELEM[elem].color, crit);
    g.fx.burst(e.center, ELEM[elem].color, crit ? 12 : 7, 5, 0.26, 0.3);
    if (!o.quiet) {
      if (crit) g.sfx.crit(); else g.sfx.hit(mult > 1.4);
      g.hitStop = Math.max(g.hitStop, crit || mult > 1.4 ? 0.07 : 0.035);
      g.shake(mult > 1.4 ? 0.18 : 0.07);
    }
    for (const mm of g.party.members) mm.energy = Math.min(100, mm.energy + (mm === m ? 2.2 : 0.9) * Math.min(2, 0.5 + mult));
    if (elem !== 'phys' && !o.noReact && !e.dead) {
      if (e.mark && e.mark.elem !== elem && e.reactCd <= 0) this.react(e, elem, atk * Math.max(0.6, mult));
      else e.setMark(elem);
    }
  }
  private mitigate(e: Enemy, dmg: number, elem: Elem) {
    const mi = e.mark ? ELEM[e.mark.elem] : null;
    dmg *= 100 / (100 + e.def.defn * (1 - (mi?.defDown ?? 0)));
    dmg *= 1 + (mi?.vuln ?? 0) + e.vulnT * 0.25;
    if (e.asleep) { dmg *= 2; e.wake(); }
    if (e.elem === elem) dmg *= 0.4;
    return dmg * (0.95 + Math.random() * 0.1);
  }
  /** 反应追加的伤害：不暴击，也不会再触发反应 */
  private raw(e: Enemy, amount: number, elem: Elem) {
    if (e.dead) return;
    const d = this.mitigate(e, amount, elem);
    e.damage(d, 6, 0, 0);
    this.g.hud.dmg(e.center, Math.round(d), ELEM[elem].color, false);
  }
  /** 属性反应：trig 属性引爆敌人身上不同属性的印记 */
  private react(e: Enemy, trig: Elem, base: number) {
    const g = this.g, c = ELEM[trig].color, others = () => g.enemies.list.filter((x) => !x.dead && x !== e);
    e.mark = null;
    e.reactCd = 0.7;
    g.hud.float(e.center.clone().setY(e.center.y + 0.6), ELEM[trig].burst, c, true);
    g.sfx.react();
    g.fx.shock(e.center, 1.6, 0.3, c);
    switch (trig) {
      case 'blaze':
        g.fx.ring(e.pos, 0.6, 3.8, 0.45, c); g.fx.burst(e.center, c, 26, 8, 0.45, 0.6, { color1: '#ff2a00' }); g.sfx.boom();
        this.raw(e, base * 1.2, trig);
        for (const x of others()) if (x.pos.distanceTo(e.pos) < 3.8) this.raw(x, base * 1.2, trig);
        break;
      case 'tide':
        this.raw(e, base * 0.8, trig); this.heal(0.05);
        g.fx.ring(e.pos, 0.5, 4.2, 0.5, c);
        for (const x of others()) { const d = x.pos.distanceTo(e.pos); if (d < 4.2) x.shove(((x.pos.x - e.pos.x) / d) * 8, ((x.pos.z - e.pos.z) / d) * 8); }
        break;
      case 'frost': this.raw(e, base * 0.6, trig); e.freeze(e.def.kind === 'elite' ? 1.0 : 2.4); g.fx.burst(e.center, '#e8faff', 18, 3, 0.3, 0.7); break;
      case 'volt': {
        this.raw(e, base * 0.7, trig);
        let from = e;
        for (const x of others().filter((x) => x.pos.distanceTo(e.pos) < 9).slice(0, 3)) { g.fx.beam(from.center, x.center, 0.07, 0.22, c); this.raw(x, base * 0.7, trig); from = x; }
        break;
      }
      case 'gale': this.raw(e, base * 0.6, trig); this.pull(e.pos, 6.5, 1.2); g.fx.ring(e.pos, 6, 0.6, 0.45, c); break;
      case 'astral':
        this.raw(e, base * 1.8, trig); g.fx.pillar(e.pos, 0.9, 7, 0.5, c);
        for (const m of g.party.members) m.energy = Math.min(100, m.energy + 8);
        break;
      case 'shade':
        this.raw(e, base * 0.5, trig);
        if (e.def.kind === 'elite') e.vulnT = 6; else e.sleep(2.6);
        break;
      case 'radiance':
        g.fx.ring(e.pos, 0.6, 4.2, 0.5, c); g.fx.pillar(e.pos, 1.2, 6, 0.5, c);
        this.raw(e, base * 0.9, trig);
        for (const x of others()) if (x.pos.distanceTo(e.pos) < 4.2) this.raw(x, base * 0.9, trig);
        g.party.buffAtk(0.15, 8);
        break;
    }
  }

  // ---------------- 飞行物 ----------------
  private updateProjs(dt: number) {
    const g = this.g, pl = g.player;
    for (let i = this.projs.length - 1; i >= 0; i--) {
      const p = this.projs[i];
      let dead = (p.life -= dt) <= 0;
      if (p.homing && !p.homing.dead) {
        const sp = p.vel.length();
        _d.copy(p.homing.center).sub(p.pos).normalize();
        p.vel.normalize();
        // 目标正好在正后方时，两个方向相加会抵消成零，先往旁边偏一点才转得过来
        if (p.vel.dot(_d) < -0.9) p.vel.set(p.vel.x - p.vel.z * 0.5, p.vel.y, p.vel.z + p.vel.x * 0.5).normalize();
        p.vel.lerp(_d, Math.min(1, dt * 7)).normalize().multiplyScalar(sp);
      }
      p.pos.addScaledVector(p.vel, dt);
      p.mesh.position.copy(p.pos);
      p.mesh.rotation.y += dt * 9;
      if (Math.random() < dt * 40) g.fx.emit({ pos: p.pos, color: ELEM[p.elem].color, size: p.r * 2.2, size1: 0, life: 0.25 });
      if (p.pos.y < g.terrain.heightAt(p.pos.x, p.pos.z) + 0.05 || g.col.blocked(p.pos.x, p.pos.z, p.r * 0.5, p.pos.y - 1)) dead = true;
      if (p.owner === 0) {
        for (const e of g.enemies.list) {
          if (e.dead || p.hit.has(e) || e.center.distanceTo(p.pos) > p.r + e.def.radius + 0.25) continue;
          p.hit.add(e);
          if (p.aoe > 0) this.aoe(p.pos.clone().setY(e.pos.y), p.aoe, p.mult, { elem: p.elem, poise: p.poise });
          else this.hit(e, p.mult, { elem: p.elem, poise: p.poise, knock: 0.6 });
          if (!p.pierce) { dead = true; break; }
        }
      } else if (!pl.dead && _v.copy(pl.pos).setY(pl.pos.y + 1).distanceTo(p.pos) < p.r + 0.45) {
        if (pl.hurt(p.dmg, p.elem, p.pos) !== 'dodged') dead = true;
      }
      if (dead) {
        if (p.aoe > 0 && p.owner === 0 && p.hit.size === 0) this.aoe(p.pos.clone(), p.aoe, p.mult, { elem: p.elem });
        g.fx.burst(p.pos, ELEM[p.elem].color, 6, 3, 0.22, 0.3);
        g.scene.remove(p.mesh);
        this.projs.splice(i, 1);
      }
    }
  }
  clear() {
    for (const p of this.projs) this.g.scene.remove(p.mesh);
    this.projs.length = 0; this.fields.length = 0; this.timers.length = 0; this.act = null; this.target = null; this.locked = false;
  }
}
