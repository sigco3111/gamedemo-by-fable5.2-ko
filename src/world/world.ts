import * as THREE from 'three';
import type { Game } from '../game';
import type { Enemy } from '../enemy/enemies';
import { POI, PATHS, HOUSES, plateauMask, forestMask, ruinsMask, pathDist, samplePath } from './layout';
import type { HouseInfo } from './houses';
import type { Structures } from './structures';
import { toon, glowMat } from '../render/toon';
import { lathe, paint, xf, merge } from '../render/geoutil';
import { mulberry32 } from '../core/math';
import { blob } from '../render/geoutil';

export interface Interact { id: string; kind: 'way' | 'chest' | 'gather' | 'house'; pos: THREE.Vector3; r: number; label: string; done: boolean; prompt(): string | null; use(): void; obj: THREE.Object3D; t: number; data?: any }
interface Crystal { id: string; pos: THREE.Vector3; obj: THREE.Object3D; got: boolean }
interface Stage { text: string; target: () => THREE.Vector3 | null; done: () => boolean; exp: number }
const _v = new THREE.Vector3(), _w = new THREE.Vector3(), _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _e = new THREE.Euler();
/** 敲门时屋里的动静 */
const KNOCK: Record<string, string> = {
  claude: '门缝里递出一张便签：「让我想仔细一点，再回答你。」',
  gpt: '屋里传来一阵打字声，然后停住了：「正在生成……」',
  deepseek: '灯塔的灯闪了一下：「服务器繁忙，请稍后再试。」',
  glm: '门口的狐狸石像眨了眨眼，又睡着了。',
  kimi: '圆顶上的望远镜转过来看了你一眼：「长文本？放着我来。」',
  qwen: '檐下的灯笼晃了晃：「通情，达义。」',
  gemini: '窗台上的四色积木自己换了个顺序。',
  grok: '塔顶传来一声笑：「答案是 42。」',
};
/** 算力晶片：一块带针脚的芯片 */
function chipGeo() {
  const parts: THREE.BufferGeometry[] = [paint(new THREE.BoxGeometry(0.44, 0.07, 0.44), '#3a3320'), paint(xf(new THREE.BoxGeometry(0.24, 0.03, 0.24), [0, 0.05, 0]), '#ffe9a0')];
  for (let i = 0; i < 5; i++) for (const s of [-1, 1]) {
    parts.push(paint(xf(new THREE.BoxGeometry(0.1, 0.025, 0.04), [s * 0.26, 0, -0.16 + i * 0.08]), '#ffd870'));
    parts.push(paint(xf(new THREE.BoxGeometry(0.04, 0.025, 0.1), [-0.16 + i * 0.08, 0, s * 0.26]), '#ffd870'));
  }
  return merge(parts).rotateX(1.2);
}
/** Token 币：六边形的小金币 */
function tokenGeo() {
  return merge([paint(new THREE.TorusGeometry(0.2, 0.055, 5, 6).rotateZ(Math.PI / 6), '#ffd870'), paint(new THREE.BoxGeometry(0.1, 0.24, 0.05), '#fff3c0'), paint(xf(new THREE.BoxGeometry(0.22, 0.07, 0.05), [0, 0.09, 0]), '#fff3c0')]);
}
const stone = toon({ color: '#b9b3a4', grad: 'soft' }), wood = toon({ color: '#8a5a34', grad: 'soft' }), gold = toon({ color: '#e0b24c', grad: 'soft' }), purple = toon({ color: '#6a4fc0', grad: 'soft' });

/** 世界里的可互动物：传送锚点、宝箱、采集点、辉晶、上升气流；以及任务引导 */
export class World {
  items: Interact[] = [];
  crystals: Crystal[] = [];
  updrafts: { x: number; z: number; r: number; y0: number; y1: number }[] = [];
  fires: THREE.Vector3[];
  quest = 0;
  private stages: Stage[] = [];
  region = '';
  near: Interact | null = null;
  private eliteDead = false;
  /** 路上的 Token 币 */
  tokens: { pos: THREE.Vector3; got: boolean }[] = [];
  private tokenMesh!: THREE.InstancedMesh;
  private chip = chipGeo();
  private allVisited = false;
  private blueGlow = glowMat('#6fd0ff', 2);
  private t = 0;

  constructor(private g: Game, st: Structures) {
    this.fires = st.fires;
    const T = g.terrain, at = (x: number, z: number, dy = 0) => new THREE.Vector3(x, T.heightAt(x, z) + dy, z);
    const ent = st.entranceAngle, R = POI.ruins, S = POI.start;
    // 传送锚点
    this.waypoint('w0', '提示词原野', at(S.x + 6, S.z - 6));
    this.waypoint('w1', '算力高地', at(4, -128));
    this.waypoint('w2', '遗忘之门', at(R.x + Math.cos(ent) * 40, R.z + Math.sin(ent) * 40));
    this.waypoint('w3', '数据湖西岸', at(34, 36));
    this.waypoint('w4', '随机森林', at(-128, -8));
    for (const h of g.houses.list) this.house(h);
    this.scatterTokens();
    // 敌人营地
    const E = g.enemies;
    E.addCamp({ id: 0, name: '原野营地', x: POI.campA.x, z: POI.campA.z, grunts: 3, wisps: 0, level: 1 });
    E.addCamp({ id: 1, name: '林间营地', x: POI.campB.x, z: POI.campB.z, grunts: 3, wisps: 2, level: 3 });
    E.addCamp({ id: 2, name: '南丘营地', x: POI.campC.x, z: POI.campC.z, grunts: 2, wisps: 2, level: 4 });
    E.addCamp({ id: 3, name: '崖顶哨所', x: POI.tower.x - 20, z: POI.tower.z + 6, grunts: 2, wisps: 3, level: 6 });
    E.addCamp({ id: 4, name: '遗忘之门', x: R.x, z: R.z, grunts: 0, wisps: 0, level: 8, elite: true });
    E.addCamp({ id: 5, name: '湖畔', x: 62, z: 74, grunts: 0, wisps: 2, level: 2 });
    // 宝箱
    this.chest('c0', at(S.x - 7, S.z - 9), false);
    this.chest('c1', at(POI.campA.x + 4, POI.campA.z + 5), false, 0);
    this.chest('c2', at(POI.campB.x - 4, POI.campB.z + 5), false, 1);
    this.chest('c3', at(POI.campC.x + 4, POI.campC.z - 5), false, 2);
    this.chest('c4', at(POI.islet.x + 3, POI.islet.z - 3), true);
    this.chest('c5', at(POI.peak.x, POI.peak.z), true);
    this.chest('c6', new THREE.Vector3(POI.tower.x, st.towerTop, POI.tower.z), true, 3);
    this.chest('c7', at(R.x, R.z, 0.3), true, 4);
    // 辉晶：放在需要攀爬、滑翔才够得到的地方
    const perch = g.props.perches;
    const spots: THREE.Vector3[] = [
      ...[0, 5, 9, 14, 19, 23].map((i) => perch[i % perch.length].clone().setY(perch[i % perch.length].y + 1.3)),
      at(POI.islet.x - 22, POI.islet.z, 7), at(POI.islet.x - 3, POI.islet.z + 2, 8.5), at(POI.peak.x + 2, POI.peak.z + 1, 2.4),
      new THREE.Vector3(POI.tower.x + 2, st.towerTop + 1.4, POI.tower.z + 2), at(POI.forest.x, POI.forest.z, 1.4), at(-40, -96, 1.6),
    ];
    spots.forEach((p, i) => this.crystal('k' + i, p));
    // 采集点（甜果）
    const r = mulberry32(77), n = new THREE.Vector3();
    for (let i = 0, made = 0; i < 400 && made < 16; i++) {
      const x = (r() - 0.5) * 520, z = (r() - 0.5) * 520, h = T.heightAt(x, z);
      if (h < 2 || T.normalAt(x, z, n).y < 0.9 || ruinsMask(x, z) > 0 || pathDist(x, z) < 3 || pathDist(x, z) > 30 || plateauMask(x, z).m1 > 0 || g.col.blocked(x, z, 1.2, h)) continue;
      this.gather('g' + made++, new THREE.Vector3(x, h, z));
    }
    // 上升气流
    for (const [x, z, y1] of [[POI.updraft.x, POI.updraft.z, 66], [-6, -60, 64]] as const) this.updrafts.push({ x, z, r: 4, y0: T.heightAt(x, z), y1 });

    const way = (id: string) => this.items.find((i) => i.id === id)!;
    const onTop = () => { const p = g.player.pos; return p.y > 44 && plateauMask(p.x, p.z).m2 > 0.6 && g.player.state === 'ground'; };
    this.stages = [
      { text: '激活前方的传送锚点（走近后按 F）', target: () => way('w0').pos, done: () => way('w0').done, exp: 40 },
      { text: '沿土路向西，清剿原野上的乱码兵营地', target: () => at(POI.campA.x, POI.campA.z), done: () => E.alive(0) === 0, exp: 80 },
      { text: '打开营地里的宝箱', target: () => way('c1').pos, done: () => way('c1').done, exp: 40 },
      { text: '登上北面的算力高地：贴着崖壁按住 W 攀爬，或跳进崖脚的上升气流再按空格滑翔', target: () => way('w1').pos, done: onTop, exp: 120 },
      { text: '从高地滑翔到数据湖的湖心岛（跳起后在空中再按一次空格）', target: () => at(POI.islet.x, POI.islet.z), done: () => Math.hypot(g.player.pos.x - POI.islet.x, g.player.pos.z - POI.islet.z) < 13 && g.player.state === 'ground', exp: 150 },
      { text: '前往西南的遗忘之门，击败大文档巨像', target: () => at(R.x, R.z), done: () => this.eliteDead, exp: 300 },
      { text: '开启遗忘之门中央的华丽宝箱', target: () => way('c7').pos, done: () => way('c7').done, exp: 100 },
      { text: '主线完成！自由探索：拜访八家 AI 小屋、收集算力晶片、试试八位角色', target: () => null, done: () => false, exp: 0 },
    ];
  }

  // ---------- 各种物件 ----------
  private add(it: Omit<Interact, 't'>) { const i = { ...it, t: 0 }; this.items.push(i); this.g.scene.add(i.obj); return i; }
  private waypoint(id: string, label: string, pos: THREE.Vector3) {
    const g = this.g, o = new THREE.Group(), dim = toon({ color: '#7d8799', grad: 'soft' });
    const base = new THREE.Mesh(lathe([[0, 0], [0.75, 0], [0.7, 0.18], [0.42, 0.3], [0.3, 0.9], [0.36, 1.0], [0, 1.05]], 10), stone);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.34).scale(1, 2.1, 1), dim);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.035, 5, 28), dim);
    gem.position.y = 2.0; ring.position.y = 2.0; ring.rotation.x = 1.2;
    base.castShadow = gem.castShadow = true;
    o.add(base, gem, ring);
    o.position.copy(pos);
    g.col.addCyl(pos.x, pos.z, 0.6, pos.y - 1, pos.y + 1.0);
    const it = this.add({
      id, kind: 'way', pos, r: 2.6, label, done: false, obj: o, data: { gem, ring },
      prompt: () => (it.done ? '在锚点休整（回复全队）' : '激活传送锚点'),
      use: () => {
        if (!it.done) {
          this.unlock(it);
          g.hud.banner(`已激活锚点 · ${label}`, '#8fd8ff');
          g.sfx.waypoint();
          g.fx.pillar(pos, 1, 14, 1.2, '#8fd8ff');
        } else { g.sfx.pick(); g.hud.toast('全队已回复'); }
        g.party.healAll();
        g.player.stamina = g.player.staminaMax;
        g.fx.burst(_v.copy(pos).setY(pos.y + 2), '#8fd8ff', 20, 3, 0.3, 0.9, { up: 1 });
        g.save();
      },
    });
    return it;
  }
  /** 小屋门口的互动点：第一次是拜访，之后是敲门 */
  private house(h: HouseInfo) {
    const g = this.g, o = new THREE.Group();
    const it = this.add({
      id: 'h-' + h.id, kind: 'house', pos: h.door, r: 3.2, label: h.company, done: false, obj: o, data: { color: h.color, home: h.home, chimney: h.chimney },
      prompt: () => (it.done ? `敲敲 ${h.company} ${h.home}的门` : `拜访 ${h.company} 的${h.home}`),
      use: () => {
        // 特效放在门板那一侧，别糊在站在门口的角色和相机上
        const at = _w.copy(h.pos).sub(h.door).setY(0).normalize().multiplyScalar(1.3).add(h.door);
        if (it.done) { g.sfx.ui(); g.hud.toast(KNOCK[h.id]); g.fx.glyphs(_v.copy(at).setY(at.y + 1.5), h.color, 6, 1.0, 0.3); return; }
        it.done = true;
        const n = this.houseCount, own = g.party.cur.def.id === h.id;
        g.party.items.dust += 150; g.party.items.berry += 1;
        g.party.gainExp(70);
        g.hud.banner(`已拜访 ${h.company} · ${n}/${HOUSES.length}`, h.color);
        g.hud.toast(`获得 Token ×150、甜果 ×1`);
        if (own) { g.party.cur.energy = 100; g.hud.toast(`${g.party.cur.def.name} 回到了自己家：元素爆发充满`); }
        g.sfx.waypoint();
        g.fx.pillar(h.pos, 2.2, 20, 1.4, h.color);
        g.fx.glyphs(_v.copy(at).setY(at.y + 1.2), h.color, 22, 1.8, 0.32, 2.2);
        if (n === HOUSES.length && !this.allVisited) {
          this.allVisited = true;
          g.player.staminaMax += 30; g.party.items.dust += 800;
          g.hud.banner('八家小屋全部拜访 · 体力上限 +30', '#ffe08a');
          g.hud.toast('获得 Token ×800');
        }
        g.save();
      },
    });
    return it;
  }
  /** 沿着土路每隔一段放一枚 Token 币，把人往各家小屋引 */
  private scatterTokens() {
    const T = this.g.terrain;
    PATHS.forEach((path, pi) => {
      samplePath(path, 13).forEach((s, i) => {
        if (i === 0 || ruinsMask(s.x, s.z) > 0.02 || HOUSES.some((h) => Math.hypot(s.x - h.x, s.z - h.z) < 12) || Math.hypot(s.x - POI.start.x, s.z - POI.start.z) < 8) return;
        const side = ((i + pi) % 2 ? 1 : -1) * 0.25;
        const x = s.x - s.tz * side, z = s.z + s.tx * side;
        this.tokens.push({ pos: new THREE.Vector3(x, T.heightAt(x, z) + 1.05, z), got: false });
      });
    });
    this.tokenMesh = new THREE.InstancedMesh(tokenGeo(), glowMat('#ffffff', 1.5, true), this.tokens.length);
    this.tokenMesh.frustumCulled = false;
    this.g.scene.add(this.tokenMesh);
  }
  get houseCount() { return this.items.filter((i) => i.kind === 'house' && i.done).length; }
  get tokenCount() { return this.tokens.filter((t) => t.got).length; }
  private unlock(it: Interact) {
    it.done = true;
    it.data.gem.material = this.blueGlow;
    it.data.ring.material = this.blueGlow;
  }
  private chest(id: string, pos: THREE.Vector3, ornate: boolean, guard = -1) {
    const g = this.g, o = new THREE.Group(), s = ornate ? 1.25 : 1, body = ornate ? purple : wood;
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.6), body);
    box.position.y = 0.25;
    const lid = new THREE.Group(), top = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.9, 10, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateX(-Math.PI / 2), body);
    top.position.set(0, 0, 0.3);
    lid.position.set(0, 0.5, -0.3);
    lid.add(top);
    for (const x of [-0.3, 0.3]) {
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.52, 0.62), gold), b2 = new THREE.Mesh(new THREE.TorusGeometry(0.305, 0.04, 4, 10, Math.PI).rotateY(Math.PI / 2), gold);
      b1.position.set(x, 0.25, 0); b2.position.set(x, 0, 0.3);
      o.add(b1); lid.add(b2);
    }
    const lock = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), ornate ? glowMat('#d8a6ff', 2) : gold);
    lock.position.set(0, 0.45, 0.32);
    o.add(box, lid, lock);
    o.scale.setScalar(s);
    o.position.copy(pos);
    o.rotation.y = (pos.x * 7.3) % 6.28;
    o.traverse((m) => { (m as THREE.Mesh).castShadow = true; });
    if (id === 'c7') o.visible = false;
    const it = this.add({
      id, kind: 'chest', pos, r: 2.2, label: ornate ? '华丽宝箱' : '宝箱', done: false, obj: o, data: { lid, guard, ornate },
      prompt: () => (it.done || !o.visible ? null : guard >= 0 && g.enemies.alive(guard) > 0 ? '周围还有敌人，宝箱打不开' : `开启${ornate ? '华丽' : ''}宝箱`),
      use: () => {
        if (it.done || (guard >= 0 && g.enemies.alive(guard) > 0)) { g.sfx.deny(); return; }
        it.done = true;
        const dust = ornate ? 300 : 90 + Math.floor(Math.random() * 40), berry = ornate ? 3 : 2;
        g.party.items.dust += dust; g.party.items.berry += berry;
        g.party.gainExp(ornate ? 160 : 45);
        g.hud.toast(`获得 Token ×${dust}、甜果 ×${berry}`);
        g.sfx.chest();
        g.fx.pillar(pos, 0.7, ornate ? 9 : 5, 0.9, ornate ? '#d8a6ff' : '#ffe08a');
        g.fx.burst(_v.copy(pos).setY(pos.y + 0.8), '#ffe08a', 24, 4, 0.3, 0.9, { up: 4, gravity: 8 });
        g.save();
      },
    });
    g.col.addCyl(pos.x, pos.z, 0.55 * s, pos.y - 1, pos.y + 0.75 * s);
    return it;
  }
  private gather(id: string, pos: THREE.Vector3) {
    const g = this.g, o = new THREE.Group();
    const bush = new THREE.Mesh(blob(0.5, 1, 0.16, pos.x), toon({ color: '#4c9a48', grad: 'soft' }));
    bush.scale.y = 0.75; bush.position.y = 0.32;
    const berries = new THREE.Group(), bm = toon({ color: '#ff5a6e', grad: 'soft' });
    for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), bm), a = i * 1.05; b.position.set(Math.sin(a) * 0.36, 0.38 + (i % 3) * 0.12, Math.cos(a) * 0.36); berries.add(b); }
    o.add(bush, berries);
    o.position.copy(pos);
    const it = this.add({
      id, kind: 'gather', pos, r: 1.8, label: '甜果丛', done: false, obj: o, data: { berries },
      prompt: () => (it.done ? null : '采集甜果'),
      use: () => {
        if (it.done) return;
        it.done = true; it.t = 0;
        berries.visible = false;
        const n = 1 + Math.floor(Math.random() * 2);
        g.party.items.berry += n;
        g.hud.toast(`获得 甜果 ×${n}（按 Z 食用，回复生命）`);
        g.sfx.pick();
      },
    });
  }
  private crystal(id: string, pos: THREE.Vector3) {
    const o = new THREE.Group();
    const core = new THREE.Mesh(this.chip, glowMat('#ffffff', 1.8, true)), halo = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.018, 4, 4), glowMat('#ffe9a0', 2.2));
    o.add(core, halo);
    o.position.copy(pos);
    this.g.scene.add(o);
    this.crystals.push({ id, pos, obj: o, got: false });
  }

  inUpdraft(p: THREE.Vector3) { return this.updrafts.some((u) => Math.hypot(p.x - u.x, p.z - u.z) < u.r && p.y > u.y0 - 1 && p.y < u.y1); }
  onEnemyDead(e: Enemy) {
    if (e.def.kind !== 'elite') return;
    this.eliteDead = true;
    const c = this.items.find((i) => i.id === 'c7')!;
    c.obj.visible = true;
    this.g.fx.pillar(c.pos, 1.2, 12, 1.2, '#d8a6ff');
    this.g.hud.banner('大文档巨像已被击败', '#ffd24a');
  }
  get stage() { return this.stages[Math.min(this.quest, this.stages.length - 1)]; }
  get crystalCount() { return this.crystals.filter((c) => c.got).length; }

  update(dt: number) {
    const g = this.g, pl = g.player, p = pl.pos;
    this.t += dt;
    pl.updraft = (pl.state === 'glide' || pl.state === 'air') && this.inUpdraft(p);
    // 互动物
    let best: Interact | null = null, bd = 1e9;
    for (const it of this.items) {
      it.t += dt;
      if (it.kind === 'way') { it.data.gem.rotation.y += dt * (it.done ? 1.2 : 0.3); it.data.gem.position.y = 2.0 + Math.sin(this.t * 1.5 + it.pos.x) * 0.08; it.data.ring.rotation.z += dt * 0.7; }
      else if (it.kind === 'chest' && it.done) it.data.lid.rotation.x = Math.max(-1.9, it.data.lid.rotation.x - dt * 5);
      else if (it.kind === 'gather' && it.done && it.t > 150) { it.done = false; it.data.berries.visible = true; }
      else if (it.kind === 'house' && Math.random() < dt * 1.6 && it.pos.distanceToSquared(p) < 90 * 90) {
        // 烟囱里冒出来的不是烟，是代码
        const c = it.data.chimney as THREE.Vector3;
        g.fx.glyph({ pos: _v.set(c.x + (Math.random() - 0.5) * 0.3, c.y, c.z + (Math.random() - 0.5) * 0.3), vel: _w.set(0.5 + Math.random() * 0.4, 1.1 + Math.random() * 0.5, (Math.random() - 0.5) * 0.4), color: it.data.color, size: 0.62, life: 3.4, drag: 0.15 });
      }
      const d = it.pos.distanceTo(p);
      if (d < it.r && d < bd && it.prompt()) { bd = d; best = it; }
    }
    this.near = pl.dead || pl.state === 'climb' || pl.state === 'glide' ? null : best;
    if (this.near && g.playing && g.input.hit('KeyF')) this.near.use();
    // 辉晶
    for (const c of this.crystals) {
      if (c.got) continue;
      c.obj.rotation.y += dt * 1.6;
      c.obj.position.y = c.pos.y + Math.sin(this.t * 2 + c.pos.x) * 0.12;
      if (Math.random() < dt * 3) g.fx.emit({ pos: _v.copy(c.obj.position).add(new THREE.Vector3((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6)), vel: new THREE.Vector3(0, 0.5, 0), color: '#ffe9a0', size: 0.12, life: 0.8 });
      if (_v.copy(p).setY(p.y + 0.9).distanceTo(c.obj.position) < 1.5) this.collect(c);
    }
    // Token 币
    for (let i = 0; i < this.tokens.length; i++) {
      const t = this.tokens[i], d2 = t.pos.distanceToSquared(p);
      if (t.got || d2 > 80 * 80) _s.setScalar(t.got ? 0 : 1);
      else {
        _s.setScalar(1);
        if (_v.copy(p).setY(p.y + 0.9).distanceTo(t.pos) < 1.35) { this.takeToken(i); _s.setScalar(0); }
      }
      this.tokenMesh.setMatrixAt(i, _m.compose(_v.copy(t.pos).setY(t.pos.y + Math.sin(this.t * 2.2 + i) * 0.1), _q.setFromEuler(_e.set(0, this.t * 2.4 + i * 0.7, 0)), _s));
    }
    this.tokenMesh.instanceMatrix.needsUpdate = true;
    // 上升气流和篝火的粒子
    for (const u of this.updrafts) {
      if (Math.hypot(p.x - u.x, p.z - u.z) > 90) continue;
      for (let i = 0; i < 2; i++) { const a = Math.random() * 6.28, r = Math.random() * u.r; g.fx.emit({ pos: _v.set(u.x + Math.sin(a) * r, u.y0 + Math.random() * 4, u.z + Math.cos(a) * r), vel: new THREE.Vector3(Math.cos(a) * 1.5, 9 + Math.random() * 4, -Math.sin(a) * 1.5), color: '#c8fff0', size: 0.22, size1: 0.05, life: 2.4, alpha: 0.6 }); }
      // 气流里夹着一串往上飘的数字
      if (Math.random() < dt * 14) { const a = Math.random() * 6.28, r = Math.random() * u.r; g.fx.glyph({ pos: _v.set(u.x + Math.sin(a) * r, u.y0 + Math.random() * 6, u.z + Math.cos(a) * r), vel: _w.set(0, 7 + Math.random() * 3, 0), color: '#b8fff0', size: 1.0, life: 3.2, glyph: Math.floor(Math.random() * 4) }); }
    }
    for (const f of this.fires) {
      if (f.distanceTo(p) > 70) continue;
      g.fx.emit({ pos: _v.set(f.x + (Math.random() - 0.5) * 0.4, f.y, f.z + (Math.random() - 0.5) * 0.4), vel: new THREE.Vector3((Math.random() - 0.5) * 0.4, 1.4 + Math.random(), (Math.random() - 0.5) * 0.4), color: '#ffb040', color1: '#ff3010', size: 0.55, size1: 0.05, life: 0.7 });
    }
    // 任务推进
    const s = this.stage;
    if (s.done() && this.quest < this.stages.length - 1) {
      this.quest++;
      g.party.gainExp(s.exp);
      g.hud.banner('目标达成', '#ffe08a');
      g.sfx.pick();
      g.save();
    }
    // 区域名
    const reg = plateauMask(p.x, p.z).m2 > 0.5 ? '算力高地' : ruinsMask(p.x, p.z) > 0.3 ? '遗忘之门' : Math.hypot(p.x - POI.lake.x, p.z - POI.lake.z) < 72 ? '数据湖' : forestMask(p.x, p.z) > 0.45 ? '随机森林' : '提示词原野';
    if (reg !== this.region) { if (this.region) g.hud.region(reg); this.region = reg; }
  }
  private takeToken(i: number) {
    const g = this.g, t = this.tokens[i];
    t.got = true;
    g.party.items.dust += 10;
    g.hud.float(t.pos, '+10 Token', '#ffe08a');
    g.fx.glyphs(t.pos, '#ffe08a', 4, 0.5, 0.36, 0.9);
    g.sfx.pick();
  }
  private collect(c: Crystal, silent = false) {
    const g = this.g;
    c.got = true;
    c.obj.visible = false;
    if (silent) return;
    const n = this.crystalCount;
    g.fx.burst(c.obj.position, '#ffe9a0', 24, 4, 0.3, 0.8);
    g.sfx.chest();
    if (n % 3 === 0) { g.player.staminaMax += 15; g.hud.banner(`算力晶片 ${n}/${this.crystals.length} · 体力上限 +15`, '#ffe9a0'); }
    else g.hud.toast(`获得算力晶片 ${n}/${this.crystals.length}（每 3 枚提升体力上限）`);
    g.save();
  }

  // ---------- 存档 ----------
  serialize() {
    return {
      way: this.items.filter((i) => i.kind === 'way' && i.done).map((i) => i.id), chest: this.items.filter((i) => i.kind === 'chest' && i.done).map((i) => i.id),
      crystal: this.crystals.filter((c) => c.got).map((c) => c.id), quest: this.quest, elite: this.eliteDead,
      house: this.items.filter((i) => i.kind === 'house' && i.done).map((i) => i.id), token: this.tokens.flatMap((t, i) => (t.got ? [i] : [])),
    };
  }
  restore(d: ReturnType<World['serialize']>) {
    for (const it of this.items) {
      if (it.kind === 'way' && d.way.includes(it.id)) this.unlock(it);
      if (it.kind === 'chest' && d.chest.includes(it.id)) { it.done = true; it.obj.visible = true; it.data.lid.rotation.x = -1.9; }
    }
    for (const c of this.crystals) if (d.crystal.includes(c.id)) this.collect(c, true);
    for (const it of this.items) if (it.kind === 'house' && d.house?.includes(it.id)) it.done = true;
    this.allVisited = this.houseCount === HOUSES.length;
    for (const i of d.token ?? []) if (this.tokens[i]) this.tokens[i].got = true;
    this.quest = Math.min(d.quest ?? 0, this.stages.length - 1);
    if (d.elite) {
      this.eliteDead = true;
      this.items.find((i) => i.id === 'c7')!.obj.visible = true;
      for (const e of this.g.enemies.list) if (e.def.kind === 'elite') { e.dead = true; e.removed = true; this.g.scene.remove(e.root); }
    }
  }
}
