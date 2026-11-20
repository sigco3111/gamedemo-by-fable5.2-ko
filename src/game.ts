import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Input } from './core/input';
import { Sfx } from './core/audio';
import { QUALITY, detectQuality, type QConf, type QLevel } from './core/quality';
import { Terrain } from './world/terrain';
import { Colliders } from './world/colliders';
import { Props } from './world/props';
import { buildStructures } from './world/structures';
import { Houses } from './world/houses';
import { AiProps } from './world/aiprops';
import { World } from './world/world';
import { POI } from './world/layout';
import { Sky } from './render/sky';
import { Water } from './render/water';
import { Grass } from './render/grass';
import { Fx } from './render/fx';
import { Party } from './player/party';
import { Player } from './player/player';
import { Combat } from './player/combat';
import { FollowCam } from './player/camera';
import { Enemies } from './enemy/enemies';
import { Hud } from './ui/hud';

const SAVE_KEY = 'xingjin.save';

/** 游戏本体：创建所有系统，跑主循环 */
export class Game {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(55, 1, 0.12, 1600);
  readonly input: Input;
  readonly sfx = new Sfx();
  readonly quality: QLevel;
  readonly q: QConf;
  readonly terrain: Terrain;
  readonly col: Colliders;
  readonly props: Props;
  readonly houses: Houses;
  readonly ai: AiProps;
  readonly sky: Sky;
  readonly water: Water;
  readonly grass: Grass;
  readonly fx: Fx;
  readonly party: Party;
  readonly player: Player;
  readonly combat: Combat;
  readonly cam: FollowCam;
  readonly enemies: Enemies;
  readonly world: World;
  readonly hud: Hud;
  time = 0;
  /** 命中停顿：大于 0 时游戏时间几乎停住 */
  hitStop = 0;
  /** 极限闪避后的「时滞」：敌人变慢 */
  slowT = 0;
  playing = false;
  fps = 60;
  private composer: EffectComposer | null = null;
  private last = performance.now();
  private saveT = 0;
  private sizeKey = '';

  constructor(mount: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.quality = detectQuality(this.renderer.getContext());
    this.q = QUALITY[this.quality];
    this.renderer.shadowMap.enabled = this.q.shadow > 0;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    mount.appendChild(this.renderer.domElement);
    this.input = new Input(this.renderer.domElement);
    this.input.allowLock = !location.search.includes('nolock');

    this.terrain = new Terrain();
    this.scene.add(this.terrain.mesh);
    this.col = new Colliders(this.terrain);
    this.props = new Props(this.scene, this.terrain, this.col);
    const st = buildStructures(this.props, this.terrain);
    const reserve = (x: number, z: number, r: number) => this.props.reserve(x, z, r);
    this.houses = new Houses(this.scene, this.col, reserve);
    this.ai = new AiProps(this.scene, this.terrain, this.col, reserve);
    this.sky = new Sky(this.scene, this.q.shadow);
    this.water = new Water(this.terrain.colorTex);
    this.scene.add(this.water.mesh);
    this.grass = new Grass(this.scene, this.terrain, this.q.grassNear, this.q.grassFar);
    this.fx = new Fx(this.scene);
    this.party = new Party(this);
    this.enemies = new Enemies(this);
    this.player = new Player(this);
    this.combat = new Combat(this);
    this.cam = new FollowCam(this);
    this.world = new World(this, st);
    this.props.scatter();
    this.hud = new Hud(this);

    if (this.q.bloom) {
      const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: this.q.msaa });
      this.composer = new EffectComposer(this.renderer, rt);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.composer.addPass(new UnrealBloomPass(new THREE.Vector2(4, 4), 0.36, 0.6, 1.0));
      this.composer.addPass(new OutputPass());
    }
    this.load();
    for (let i = 0; i < 20; i++) this.player.update(1 / 60);
    this.cam.snap();
    this.input.onLockChange = (locked) => { if (!locked && this.playing && this.input.allowLock) this.setMenu('pause'); };
    this.renderer.domElement.addEventListener('mousedown', () => { if (this.playing) this.input.lock(); });
    window.addEventListener('beforeunload', () => this.save());
  }

  start() { this.last = performance.now(); requestAnimationFrame(this.tick); }

  setMenu(name: Hud['menu']) {
    this.hud.show(name);
    this.playing = name === null;
    this.input.clearAll();
    if (this.playing) { this.sfx.unlock(); this.input.lock(); this.last = performance.now(); }
    else this.input.unlock();
  }
  shake(v: number) { this.cam.shake(v); }
  perfectDodge() {
    this.slowT = 1.3;
    this.combat.counterT = 4;
    this.party.cur.energy = Math.min(100, this.party.cur.energy + 10);
    this.hud.banner('완벽 회피 · 반격 피해 증가', '#bfe9ff');
    this.sfx.perfect();
    this.fx.ring(this.player.pos, 0.3, 3.2, 0.45, '#ffffff');
  }
  /** 传送：清掉场上的招式，让敌人脱战 */
  warp(x: number, z: number) {
    this.player.teleport(x, z);
    this.combat.clear();
    this.fx.clear();
    this.enemies.calm();
    this.hud.fade(0.7);
  }
  /** 全队倒下：回到最近激活的锚点 */
  wipe() {
    const w = this.world.items.filter((i) => i.kind === 'way' && i.done).sort((a, b) => a.pos.distanceTo(this.player.pos) - b.pos.distanceTo(this.player.pos))[0];
    this.party.reviveAll(0.6);
    this.player.dead = false;
    this.player.stamina = this.player.staminaMax;
    this.warp(w ? w.pos.x + 1.8 : POI.start.x, w ? w.pos.z + 1.8 : POI.start.z);
    this.hud.fade(1.4);
    this.hud.toast('파티가 전멸해 가장 가까운 거점에서 재정비했습니다');
  }
  private eat() {
    const m = this.party.cur;
    if (this.party.items.berry <= 0 || m.hp >= m.maxHp || this.player.dead) { this.sfx.deny(); return; }
    this.party.items.berry--;
    this.combat.heal(0.3);
    this.sfx.pick();
  }

  // ---------- 存档 ----------
  save() {
    if (this.hud.menu === 'start') return;
    const p = this.player, P = this.party;
    const pos = p.state === 'ground' ? p.pos : p.safe;
    const d = {
      v: 1, pos: [pos.x, pos.z], yaw: p.yaw, hour: this.sky.hour, level: P.level, exp: P.exp, active: P.active, hp: P.members.map((m) => m.hp),
      energy: P.members.map((m) => m.energy), items: P.items, stamina: p.staminaMax, world: this.world.serialize(), sens: this.cam.sens, vol: this.sfx.volume,
    };
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(d)); } catch { /* 存不了就算了 */ }
  }
  private load() {
    let d: any = null;
    try { d = JSON.parse(localStorage.getItem(SAVE_KEY) ?? 'null'); } catch { d = null; }
    const p = this.player, P = this.party;
    if (!d || d.v !== 1) {
      p.teleport(POI.start.x, POI.start.z);
      p.yaw = Math.PI;
      this.cam.yaw = 0;
      return;
    }
    P.level = d.level; P.exp = d.exp;
    P.recalc(true);
    P.members.forEach((m, i) => { m.hp = Math.min(m.maxHp, d.hp?.[i] ?? m.maxHp); m.alive = m.hp > 0; m.energy = d.energy?.[i] ?? 0; });
    if (P.members.every((m) => !m.alive)) P.reviveAll(0.6);
    P.active = P.members[d.active]?.alive ? d.active : Math.max(0, P.nextAlive());
    P.items = { berry: d.items?.berry ?? 2, dust: d.items?.dust ?? 0 };
    p.staminaMax = d.stamina ?? 100;
    p.stamina = p.staminaMax;
    this.sky.hour = d.hour ?? 9;
    this.cam.sens = d.sens ?? this.cam.sens;
    this.sfx.volume = d.vol ?? 0.5;
    this.world.restore(d.world);
    p.teleport(d.pos[0], d.pos[1]);
    p.yaw = d.yaw ?? Math.PI;
    this.cam.yaw = p.yaw + Math.PI;
    p.swapTo(P.active, true);
    (p as any).showActive?.();
  }

  private resize() {
    const w = innerWidth, h = innerHeight, pr = Math.min(devicePixelRatio || 1, this.q.pixelRatio), key = `${w}x${h}x${pr}`;
    if (key === this.sizeKey || w === 0 || h === 0) return;
    this.sizeKey = key;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    this.composer?.setPixelRatio(pr);
    this.composer?.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private tick = () => {
    requestAnimationFrame(this.tick);
    const now = performance.now(), real = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.fps += (1 / Math.max(real, 0.001) - this.fps) * 0.05;
    this.frame(real, true);
  };
  /** 调试和自动化测试用：不等浏览器的帧回调，直接连续推进 n 帧 */
  step(n = 1, dt = 1 / 60) { for (let i = 0; i < n; i++) this.frame(dt, i === n - 1); }

  private frame(real: number, draw: boolean) {
    const inp = this.input, menu = this.hud.menu;
    this.resize();
    if (menu === null) {
      if (inp.hit('KeyM')) this.setMenu('map');
      else if (inp.hit('KeyC')) this.setMenu('chars');
      else if (inp.hit('Escape')) this.setMenu('pause');
    } else if (menu !== 'start' && (inp.hit('Escape') || (menu === 'map' && inp.hit('KeyM')) || (menu === 'chars' && inp.hit('KeyC')))) this.setMenu(null);

    if (this.playing) {
      this.time += real;
      let dt = real;
      if (this.hitStop > 0) { this.hitStop -= real; dt = real * 0.06; }
      if (this.slowT > 0) this.slowT -= real;
      this.party.update(dt);
      this.player.update(dt);
      this.combat.update(dt);
      this.enemies.update(dt * (this.slowT > 0 ? 0.22 : 1));
      this.world.update(dt);
      if (inp.hit('KeyZ')) this.eat();
      this.fx.update(dt);
      if ((this.saveT += real) > 15) { this.saveT = 0; this.save(); }
    }
    this.cam.update(real);
    this.sky.update(this.playing ? real : 0, this.camera.position, this.player.pos);
    this.water.update(real, this.sky);
    this.grass.update(real, this.player.pos, this.player.pos);
    this.props.update(real);
    this.houses.update(this.sky.night);
    this.ai.update(real, this.sky.night, this.player.pos, this.fx);
    this.fx.setViewport(this.renderer.domElement.height, this.camera.fov);
    this.hud.update(real);
    if (draw) { if (this.composer) this.composer.render(); else this.renderer.render(this.scene, this.camera); }
    inp.endFrame();
  }
}
