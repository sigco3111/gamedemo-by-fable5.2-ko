import type { Game } from '../game';
import type { Elem } from '../combat/elements';
import { ELEM } from '../combat/elements';
import { buildChar, CHAR_IDS, type CharId } from '../char/roster';
import type { CharModel } from '../char/builder';
import { Animator, P, type PoseSpec } from '../char/anim';
import type { JointName, PoseVec } from '../char/rig';
import { KITS } from './kits';
import type { Kit } from './combat';

export interface CharDef {
  id: CharId; name: string; title: string; elem: Elem; hp: number; atk: number; defn: number; kit: Kit;
  /** 待机时手臂怎么摆（抱书、持扇、拄斧） */
  hair: string;
  hold?: PoseSpec; holdMask?: JointName[];
  /** 自带翅膀：滑翔时不用滑翔翼，体力消耗减半 */
  wings?: boolean;
  blurb: string;
}

export const CHARS: Record<CharId, CharDef> = {
  claude: { id: 'claude', hair: '#ee6f2a', name: '클로드걸', title: '새벽의 서기', elem: 'blaze', hp: 1000, atk: 104, defn: 52, kit: KITS.claude, hold: { armL: [0.5, 0.12], foreL: 1.75 }, holdMask: ['armL', 'foreL'], blurb: '원거리 · 책에서 햇살을 쏟아내고, 넓은 범위 폭격과 파티 회복에 강합니다.' },
  gpt: { id: 'gpt', hair: '#f1eefb', name: 'GPT걸', title: '하얀 빛의 용족', elem: 'radiance', hp: 1250, atk: 96, defn: 70, kit: KITS.gpt, wings: true, blurb: '근접 · 용의 발톱과 꼬리로 사방을 휩씁니다. 용 날개가 있어 활강 시 스태미나가 덜 듭니다.' },
  deepseek: { id: 'deepseek', hair: '#27398f', name: '딥시크걸', title: '심해의 메이드', elem: 'tide', hp: 1150, atk: 88, defn: 60, kit: KITS.deepseek, blurb: '원거리 · 파티의 힐러. 물방울이 적중하면 좁은 범위로 터집니다.' },
  glm: { id: 'glm', hair: '#1b1b24', name: 'GLM걸', title: '잠자는 여우', elem: 'shade', hp: 950, atk: 108, defn: 48, kit: KITS.glm, blurb: '근접 · 공격 속도가 가장 빠르고, 순식간에 뒤를 잡아 적을 잠재웁니다.' },
  kimi: { id: 'kimi', hair: '#e9ebfa', name: '키미걸', title: '달빛의 피리 연주자', elem: 'frost', hp: 980, atk: 100, defn: 50, kit: KITS.kimi, hold: { armR: [0.35, 0.15], foreR: 1.25 }, holdMask: ['armR', 'foreR'], blurb: '원거리 · 음표의 탄속이 가장 빠릅니다. 달빛 영역은 적을 느리게 하고 아군을 강화합니다.' },
  qwen: { id: 'qwen', hair: '#7a72e2', name: 'Qwen걸', title: '천리의 부채', elem: 'gale', hp: 1050, atk: 98, defn: 56, kit: KITS.qwen, hold: { armR: [0.6, 0.1], foreR: 1.6 }, holdMask: ['armR', 'foreR'], blurb: '중거리 · 부채로 바람 칼날을 날리고, 흩어진 적을 한곳에 모으는 데 강합니다.' },
  gemini: { id: 'gemini', hair: '#5b7af2', name: '제미나이걸', title: '쌍둥이별 고양이', elem: 'astral', hp: 920, atk: 106, defn: 46, kit: KITS.gemini, blurb: '근접 · 민첩한 돌격형. 별 도약의 쿨다운이 매우 짧고 유성우가 넓은 지역을 덮습니다.' },
  grok: { id: 'grok', hair: '#f2d27c', name: '그록걸', title: '천둥의 심판', elem: 'volt', hp: 1300, atk: 112, defn: 66, kit: KITS.grok, hold: { armR: [0.3, 0.3], foreR: 1.5, armL: [0.1, 0.2], foreL: 0.4 }, holdMask: ['armR', 'foreR'], blurb: '근접 · 거대 도끼는 느리지만 범위가 넓고 피해가 크며, 적의 동작을 끊는 데 가장 강합니다.' },
};

export class Member {
  hp = 1; maxHp = 1; atk = 1; defn = 1; energy = 0; skillCd = 0; alive = true;
  readonly model: CharModel;
  readonly anim: Animator;
  readonly hold: PoseVec | null;
  constructor(public def: CharDef) {
    this.model = buildChar(def.id);
    this.anim = new Animator(this.model.rig);
    this.hold = def.hold ? P(def.hold) : null;
  }
  get color() { return ELEM[this.def.elem].color; }
}

/** 队伍：八位角色共享等级，随时切换上场 */
export class Party {
  readonly members: Member[];
  active = 0;
  level = 1;
  exp = 0;
  swapCd = 0;
  atkBuff = 0;
  private atkBuffT = 0;
  items = { berry: 2, dust: 0 };

  constructor(private g: Game) {
    this.members = CHAR_IDS.map((id) => new Member(CHARS[id]));
    this.recalc(true);
  }
  get cur() { return this.members[this.active]; }
  expNeed() { return Math.round(90 * Math.pow(this.level, 1.45)); }

  recalc(full = false) {
    const k = this.level - 1;
    for (const m of this.members) {
      const ratio = m.maxHp > 1 ? m.hp / m.maxHp : 1;
      m.maxHp = Math.round(m.def.hp * (1 + 0.1 * k));
      m.atk = Math.round(m.def.atk * (1 + 0.085 * k));
      m.defn = Math.round(m.def.defn * (1 + 0.05 * k));
      m.hp = full ? m.maxHp : Math.round(m.maxHp * ratio);
    }
  }
  gainExp(n: number) {
    if (this.level >= 20) return;
    this.exp += n;
    let up = false;
    while (this.exp >= this.expNeed() && this.level < 20) { this.exp -= this.expNeed(); this.level++; up = true; }
    if (up) {
      this.recalc();
      for (const m of this.members) if (m.alive) m.hp = Math.min(m.maxHp, m.hp + m.maxHp * 0.3);
      this.g.hud.banner(`파티 레벨 업  Lv.${this.level}`, '#ffe08a');
      this.g.sfx.levelUp();
      this.g.fx.pillar(this.g.player.pos, 1.2, 8, 0.9, '#ffe08a');
    }
  }
  buffAtk(v: number, t: number) { this.atkBuff = Math.max(this.atkBuff, v); this.atkBuffT = Math.max(this.atkBuffT, t); }
  nextAlive() { for (let k = 1; k <= this.members.length; k++) { const i = (this.active + k) % this.members.length; if (this.members[i].alive) return i; } return -1; }
  reviveAll(pct: number) { for (const m of this.members) { m.alive = true; m.hp = Math.max(m.hp, Math.round(m.maxHp * pct)); } }
  healAll() { for (const m of this.members) { m.alive = true; m.hp = m.maxHp; } }

  update(dt: number) {
    this.swapCd = Math.max(0, this.swapCd - dt);
    for (const m of this.members) m.skillCd = Math.max(0, m.skillCd - dt);
    if (this.atkBuffT > 0 && (this.atkBuffT -= dt) <= 0) this.atkBuff = 0;
  }
}
