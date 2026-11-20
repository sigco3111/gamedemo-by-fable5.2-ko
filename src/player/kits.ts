import * as THREE from 'three';
import type { Combat, Kit, Act } from './combat';
import type { CharId } from '../char/roster';

const HP = Math.PI / 2;
const rnd = (r: number) => (Math.random() * 2 - 1) * r;
/** 以某点为圆心随机取一个落点，贴到地面上 */
const scatter = (c: Combat, p: THREE.Vector3, r: number) => {
  const q = new THREE.Vector3(p.x + rnd(r), 0, p.z + rnd(r));
  q.y = c.g.terrain.heightAt(q.x, q.z);
  return q;
};
const here = (c: Combat) => c.g.player.pos.clone();
const inside = (c: Combat, p: THREE.Vector3, r: number) => c.g.player.pos.distanceTo(p) < r;

/** 施法型的三段普攻：前两段单发，第三段多发 */
const castNormals = (m: number, o: Parameters<Combat['shot']>[1], last: Parameters<Combat['shot']>[1]): Act[] => [
  { clip: 'cast1', dur: 0.5, cancel: 0.62, ev: [[0.46, (c) => c.shot(m, o)]] },
  { clip: 'cast2', dur: 0.5, cancel: 0.62, ev: [[0.46, (c) => c.shot(m * 1.05, o)]] },
  { clip: 'cast3', dur: 0.74, cancel: 0.72, ev: [[0.56, (c) => c.shot(m, last)]] },
];
/** 爪击型的四段普攻：左右爪、回旋、扑击 */
const clawNormals = (m: number, speed: number, last: (c: Combat) => void): Act[] => [
  { clip: 'claw1', dur: 0.4 * speed, cancel: 0.62, lunge: 1.2, ev: [[0.48, (c) => c.arc(2.6, 110, m, { a0: 1.0, a1: -1.0, tilt: 0.55, y: 1.1 })]] },
  { clip: 'claw2', dur: 0.4 * speed, cancel: 0.62, lunge: 1.0, ev: [[0.48, (c) => c.arc(2.6, 110, m * 1.05, { a0: -1.0, a1: 1.0, tilt: -0.55, y: 1.1 })]] },
  { clip: 'claw3', dur: 0.6 * speed, cancel: 0.72, lunge: 0.8, ev: [[0.42, (c) => c.arc(3.4, 360, m * 1.5, { a0: Math.PI, a1: -Math.PI, y: 0.7, poise: 16 })]] },
  { clip: 'claw4', dur: 0.62 * speed, cancel: 0.72, lunge: 1.6, ev: [[0.52, last]] },
];

export const KITS: Record<CharId, Kit> = {
  // ---------- Claude娘 · 炽 · 法典 ----------
  claude: {
    weapon: 'cast', normalName: '햇살 장',
    normals: castNormals(0.55, { speed: 22 }, { n: 3, spread: 0.26, speed: 22 }),
    charged: { clip: 'cast3', dur: 0.86, ev: [[0.56, (c) => c.shot(1.6, { size: 0.42, pierce: true, speed: 26, poise: 18, homing: false })]] },
    skill: {
      name: '여명의 주석', desc: '대상의 발밑에 원을 표시한 뒤 햇살 기둥을 떨어뜨려 범위 화염 피해를 주고, 지속적으로 타오르는 지역을 남깁니다.', cd: 7, clip: 'raise', dur: 0.85,
      ev: [
        [0.18, (c) => { c.spot.copy(c.aim(9)); c.g.fx.ring(c.spot, 4, 0.6, 0.4, c.col()); }],
        [0.52, (c) => {
          const p = c.spot.clone();
          c.g.fx.pillar(p, 1.8, 10, 0.6, c.col()); c.g.sfx.boom(); c.g.shake(0.25);
          c.aoe(p, 4, 2.3, { poise: 25 });
          c.field(p, 4, 4, 0.8, (f) => c.aoe(f.pos, 4, 0.3, { noFx: true, quiet: true }));
        }],
      ],
    },
    burst: {
      name: '끝없는 여명', desc: '자신을 중심으로 아침 해를 떠올려 넓은 범위의 적에게 막대한 화염 피해를 주고, 파티 전체의 생명력을 회복합니다.', cost: 60, clip: 'raise', dur: 1.3, iframe: 1.3,
      ev: [
        [0.3, (c) => c.g.fx.ring(here(c), 9, 0.8, 0.4, c.col())],
        [0.6, (c) => {
          const p = here(c);
          c.g.fx.pillar(p, 3, 14, 0.9, c.col()); c.g.fx.shock(p.clone().setY(p.y + 1), 9, 0.5, c.col()); c.g.sfx.boom(); c.g.shake(0.5);
          c.aoe(p, 9, 4.4, { poise: 45, knock: 4 });
          c.heal(0.15, true);
          c.field(p, 7, 6, 1, (f) => c.aoe(f.pos, 7, 0.3, { noFx: true, quiet: true }));
        }],
      ],
    },
  },
  // ---------- GPT娘 · 光 · 龙裔 ----------
  gpt: {
    weapon: 'claw', normalName: '용의 발톱',
    normals: clawNormals(0.6, 1.05, (c) => c.arc(3.0, 120, 1.2, { tilt: HP, a0: 2.2, a1: -0.3, poise: 20 })),
    charged: { clip: 'slam', dur: 0.9, heavy: true, ev: [[0.6, (c) => { c.aoe(c.front(1.8), 3.4, 1.9, { poise: 32, knock: 3 }); c.g.shake(0.3); c.g.sfx.boom(); }]] },
    skill: {
      name: '용꼬리 회전', desc: '몸을 회전하며 용의 꼬리로 두 바퀴 휩쓸어 주변의 모든 적을 밀쳐냅니다.', cd: 6, clip: 'spin', dur: 0.85, iframe: 0.3,
      ev: [
        [0.3, (c) => c.arc(4.6, 360, 1.3, { a0: Math.PI, a1: -Math.PI, y: 0.6, poise: 15 })],
        [0.62, (c) => { c.arc(4.6, 360, 1.6, { a0: -Math.PI, a1: Math.PI, y: 0.8, poise: 30, knock: 6 }); c.g.shake(0.2); }],
      ],
    },
    burst: {
      name: '광룡의 숨결', desc: '전방에 빛의 숨결을 내뿜어 직선상의 적에게 연속으로 빛 피해를 줍니다.', cost: 60, clip: 'channel', dur: 1.6, iframe: 1.6,
      ev: [[0.22, (c) => {
        for (let k = 0; k < 7; k++) c.after(k * 0.14, () => {
          const a = c.front(0.6, 1.35), b = c.front(14, 0.8);
          c.g.fx.beam(a, b, 0.55, 0.2, c.col()); c.g.fx.burst(b, c.col(), 6, 5, 0.4, 0.4);
          c.line(14, 3.4, 0.9, { poise: 10, quiet: k % 2 === 1 });
          c.g.shake(0.1);
        });
        c.g.sfx.boom();
      }]],
    },
  },
  // ---------- DeepSeek娘 · 潮 · 鲸歌 ----------
  deepseek: {
    weapon: 'cast', normalName: '물방울',
    normals: castNormals(0.5, { speed: 15, size: 0.3 }, { speed: 14, size: 0.42, aoe: 2.4 }),
    charged: { clip: 'cast3', dur: 0.86, ev: [[0.56, (c) => c.shot(1.4, { size: 0.52, aoe: 3.2, speed: 13, poise: 18 })]] },
    skill: {
      name: '고래 도약', desc: '영혼 고래를 불러 땅에서 뛰어오르게 해 범위 내 적에게 물결 피해를 주고, 현재 캐릭터의 생명력을 회복합니다.', cd: 9, clip: 'raise', dur: 0.9,
      ev: [
        [0.15, (c) => { c.spot.copy(c.aim(10)); c.g.fx.ring(c.spot, 5, 0.6, 0.45, c.col()); }],
        [0.52, (c) => {
          const p = c.spot.clone();
          c.g.fx.pillar(p, 2.4, 7, 0.7, c.col()); c.g.fx.burst(p.clone().setY(p.y + 1), '#e8f6ff', 30, 7, 0.4, 0.8, { up: 6, gravity: 14 }); c.g.sfx.splash(); c.g.shake(0.25);
          c.aoe(p, 5, 2.1, { poise: 25, knock: 2.5 });
          c.heal(0.12);
        }],
      ],
    },
    burst: {
      name: '심해의 요람', desc: '바다를 펼칩니다: 안에 있는 캐릭터의 생명력을 지속적으로 회복하고, 적에게 물결 피해를 줍니다.', cost: 60, clip: 'channel', dur: 1.2, iframe: 1.2,
      ev: [[0.6, (c) => {
        const p = here(c);
        c.g.fx.ring(p, 0.8, 8, 0.6, c.col()); c.g.sfx.splash();
        c.aoe(p, 8, 1.6, { poise: 20 });
        c.field(p, 8, 9, 1, (f) => { c.aoe(f.pos, 8, 0.55, { noFx: true, quiet: true }); if (inside(c, f.pos, 8)) c.heal(0.045); });
      }]],
    },
  },
  // ---------- GLM娘 · 影 · 狐步 ----------
  glm: {
    weapon: 'claw', normalName: '그림자 발톱',
    normals: clawNormals(0.5, 0.86, (c) => c.arc(2.9, 130, 1.0, { a0: 1.1, a1: -1.1, poise: 16 })),
    charged: { clip: 'thrust', dur: 0.5, lunge: 5, iframe: 0.3, ev: [[0.42, (c) => c.arc(3.2, 170, 1.5, { poise: 20 })]] },
    skill: {
      name: '섬영', desc: '대상의 옆으로 순식간에 이동해 한 번 벱니다. 남은 잔상은 잠시 후 폭발합니다. 이동 중에는 피해를 받지 않습니다.', cd: 6, clip: 'thrust', dur: 0.52, iframe: 0.5,
      ev: [
        [0.12, (c) => { c.spot.copy(here(c)); c.blink(8); }],
        [0.46, (c) => {
          c.arc(3.2, 220, 2.2, { poise: 22 });
          const p = c.spot.clone();
          c.g.fx.zone(p, 3.5, 1.2, c.col());
          c.after(1.2, () => { c.g.fx.shock(p.clone().setY(p.y + 1), 3.5, 0.35, c.col()); c.aoe(p, 3.5, 1.5, { poise: 15 }); });
        }],
      ],
    },
    burst: {
      name: '천 개의 꿈', desc: '여러 갈래의 검은 그림자가 되어 적들 사이를 여덟 번 연속으로 베고, 마지막에 범위 내 일반 적을 잠재웁니다.', cost: 60, clip: 'spin', dur: 1.4, iframe: 1.5,
      ev: [
        [0.12, (c) => {
          for (let k = 0; k < 8; k++) c.after(k * 0.12, () => {
            const p = here(c);
            c.g.fx.slash(p, Math.random() * 6.28, { r: 5 + Math.random() * 2, w: 1.6, a0: 1.5, a1: -1.5, tilt: rnd(1), y: 0.6 + Math.random(), color: c.col(), dur: 0.2 });
            c.aoe(p, 7, 0.7, { noFx: true, quiet: k % 2 === 1, poise: 6 });
            c.g.sfx.swing();
          });
        }],
        [0.9, (c) => c.each(here(c), 7, (e) => { if (e.def.kind !== 'elite') e.sleep(2.6); else e.vulnT = 6; })],
      ],
    },
  },
  // ---------- Kimi娘 · 霜 · 月笛 ----------
  kimi: {
    weapon: 'cast', normalName: '음표',
    normals: castNormals(0.5, { speed: 28, size: 0.17 }, { n: 2, spread: 0.1, speed: 28, size: 0.17 }),
    charged: {
      clip: 'cast3', dur: 0.86,
      ev: [[0.56, (c) => { c.g.fx.beam(c.front(0.6, 1.2), c.front(16, 1.0), 0.3, 0.3, c.col()); c.line(16, 1.8, 1.5, { poise: 18 }); c.g.sfx.cast(); }]],
    },
    skill: {
      name: '달의 위상', desc: '대상 위치에 서리 고리를 피워 서리 피해를 주고, 몇 초 동안 그 안의 적을 느리게 합니다.', cd: 8, clip: 'raise', dur: 0.82,
      ev: [
        [0.16, (c) => { c.spot.copy(c.aim(10)); c.g.fx.ring(c.spot, 4.5, 0.6, 0.4, c.col()); }],
        [0.5, (c) => {
          const p = c.spot.clone();
          c.g.fx.pillar(p, 1.4, 8, 0.6, c.col()); c.g.fx.burst(p.clone().setY(p.y + 0.6), '#ffffff', 22, 6, 0.3, 0.7, { flat: true });
          c.aoe(p, 4.5, 2.0, { poise: 22 });
          c.field(p, 4.5, 5, 0.5, (f) => c.each(f.pos, 4.5, (e) => (e.slowT = 0.8)));
        }],
      ],
    },
    burst: {
      name: '월광 소나타', desc: '피리를 불어 달빛을 펼칩니다: 적에게 지속적으로 서리 피해를 주고, 안에 있는 캐릭터의 공격력이 올라갑니다.', cost: 60, clip: 'channel', dur: 1.3, iframe: 1.3,
      ev: [[0.6, (c) => {
        const p = here(c);
        c.g.fx.pillar(p, 2.5, 12, 0.8, c.col()); c.g.fx.ring(p, 0.8, 9, 0.6, c.col()); c.g.sfx.waypoint();
        c.aoe(p, 9, 1.8, { poise: 20 });
        c.field(p, 9, 10, 0.5, (f) => { c.aoe(f.pos, 9, 0.42, { noFx: true, quiet: true }); if (inside(c, f.pos, 9)) c.g.party.buffAtk(0.2, 1); });
      }]],
    },
  },
  // ---------- Qwen娘 · 岚 · 折扇 ----------
  qwen: {
    weapon: 'fan', normalName: '부채춤',
    normals: [
      { clip: 'blade1', dur: 0.44, cancel: 0.62, lunge: 1.0, ev: [[0.48, (c) => c.arc(3.0, 140, 0.55, { a0: -1.2, a1: 1.2 })]] },
      { clip: 'blade2', dur: 0.44, cancel: 0.62, lunge: 0.8, ev: [[0.46, (c) => { c.arc(3.0, 140, 0.55, { a0: 1.2, a1: -1.2 }); c.shot(0.35, { speed: 18, life: 0.5, size: 0.34, pierce: true, homing: false }); }]] },
      { clip: 'blade3', dur: 0.5, cancel: 0.66, lunge: 0.8, ev: [[0.48, (c) => c.arc(3.0, 100, 0.72, { tilt: HP, a0: -0.4, a1: 2.3, poise: 14 })]] },
      { clip: 'blade4', dur: 0.72, cancel: 0.78, ev: [[0.45, (c) => { c.arc(3.5, 360, 1.0, { a0: Math.PI, a1: -Math.PI, poise: 18 }); c.shot(0.4, { n: 3, spread: 0.4, speed: 18, life: 0.5, size: 0.34, pierce: true, homing: false }); }]] },
    ],
    charged: { clip: 'blade4', dur: 0.82, ev: [[0.45, (c) => { c.shot(1.3, { size: 0.6, pierce: true, speed: 12, life: 1.1, homing: false, poise: 16 }); c.pull(c.front(4), 6, 0.8); }]] },
    skill: {
      name: '바람 모으기', desc: '대상 위치에 회오리를 일으켜 주변 적을 한곳으로 빨아들인 뒤 터뜨려 질풍 피해를 줍니다.', cd: 9, clip: 'raise', dur: 0.82,
      ev: [[0.45, (c) => {
        const p = c.aim(9);
        c.field(p, 6.5, 2.4, 0.15, (f) => { c.pull(f.pos, 6.5, 0.5); c.g.fx.burst(f.pos.clone().setY(f.pos.y + 1), c.col(), 3, 4, 0.3, 0.5, { up: 3 }); });
        c.after(2.4, () => { c.g.fx.pillar(p, 2, 8, 0.5, c.col()); c.aoe(p, 5, 2.0, { poise: 22, knock: 3 }); c.g.sfx.boom(); });
      }]],
    },
    burst: {
      name: '천리의 바람', desc: '몇 초 동안 지속되는 거대한 회오리를 날려 적을 계속 휘말리게 하며 질풍 피해를 줍니다.', cost: 60, clip: 'spin', dur: 1.2, iframe: 1.2,
      ev: [[0.4, (c) => {
        const p = c.front(4.5);
        p.y = c.g.terrain.heightAt(p.x, p.z);
        c.g.sfx.glide();
        c.field(p, 6, 6.5, 0.35, (f) => {
          c.pull(f.pos, 7.5, 0.6); c.aoe(f.pos, 6, 0.72, { noFx: true, quiet: true });
          for (let i = 0; i < 4; i++) { const a = Math.random() * 6.28, r = Math.random() * 3; c.g.fx.emit({ pos: new THREE.Vector3(f.pos.x + Math.sin(a) * r, f.pos.y + Math.random() * 4, f.pos.z + Math.cos(a) * r), vel: new THREE.Vector3(Math.cos(a) * 6, 3, -Math.sin(a) * 6), color: c.col(), size: 0.5, life: 0.6 }); }
        });
      }]],
    },
  },
  // ---------- Gemini娘 · 星 · 双子星 ----------
  gemini: {
    weapon: 'claw', normalName: '별 발톱',
    normals: clawNormals(0.5, 0.86, (c) => c.shot(0.42, { n: 3, spread: 0.3, speed: 24, size: 0.2 })),
    charged: { clip: 'cast3', dur: 0.8, ev: [[0.56, (c) => c.shot(0.85, { n: 2, spread: 0.45, pierce: true, speed: 17, life: 0.9, size: 0.34 })]] },
    skill: {
      name: '별 도약', desc: '유성이 되어 대상 곁으로 이동해 벱니다. 쿨다운이 매우 짧고, 이동 중에는 피해를 받지 않습니다.', cd: 5, clip: 'thrust', dur: 0.46, iframe: 0.45,
      ev: [
        [0.1, (c) => c.blink(9)],
        [0.45, (c) => { c.arc(3.0, 220, 2.0, { poise: 20 }); c.g.fx.pillar(here(c), 0.8, 6, 0.4, c.col()); }],
      ],
    },
    burst: {
      name: '유성우', desc: '열 개의 유성을 불러 대상 지역에 연달아 떨어뜨리고, 각각 범위 별 피해를 줍니다.', cost: 60, clip: 'raise', dur: 1.3, iframe: 1.3,
      ev: [[0.4, (c) => {
        const p = c.aim(10);
        c.g.fx.ring(p, 6, 0.8, 0.5, c.col());
        for (let k = 0; k < 10; k++) c.after(0.2 + k * 0.15, () => {
          const q = scatter(c, p, 4.5);
          c.g.fx.beam(q.clone().add(new THREE.Vector3(3, 14, 2)), q, 0.25, 0.25, c.col()); c.g.fx.pillar(q, 0.9, 5, 0.4, c.col());
          c.aoe(q, 2.8, 0.78, { poise: 10, quiet: k % 2 === 1 });
          c.g.shake(0.12); if (k % 3 === 0) c.g.sfx.boom();
        });
      }]],
    },
  },
  // ---------- Grok娘 · 雷 · 巨斧 ----------
  grok: {
    weapon: 'heavy', normalName: '균열 베기',
    normals: [
      { clip: 'heavy1', dur: 0.82, cancel: 0.72, lunge: 1.2, heavy: true, ev: [[0.56, (c) => c.arc(4.0, 180, 1.1, { a0: -1.5, a1: 1.5, poise: 24, knock: 3, w: 1.6 })]] },
      { clip: 'heavy2', dur: 0.78, cancel: 0.72, lunge: 1.0, heavy: true, ev: [[0.54, (c) => c.arc(4.0, 180, 1.15, { a0: 1.5, a1: -1.5, poise: 24, knock: 3, w: 1.6 })]] },
      { clip: 'heavy3', dur: 0.98, cancel: 0.78, lunge: 1.2, heavy: true, ev: [[0.6, (c) => { c.arc(3.8, 70, 0.9, { tilt: HP, a0: 2.3, a1: -0.2, poise: 20, w: 1.6 }); c.aoe(c.front(2.3), 3.2, 1.0, { poise: 36, knock: 2 }); c.g.shake(0.3); c.g.sfx.boom(); }]] },
    ],
    charged: {
      clip: 'spin', dur: 1.1, heavy: true,
      ev: [[0.3, (c) => c.arc(4.3, 360, 1.0, { a0: Math.PI, a1: -Math.PI, poise: 20, w: 1.7 })], [0.6, (c) => c.arc(4.3, 360, 1.3, { a0: -Math.PI, a1: Math.PI, poise: 32, knock: 5, w: 1.7 })]],
    },
    skill: {
      name: '번개 낙하', desc: '높이 뛰어올라 도끼를 전방에 내리꽂아 착지와 함께 번개 폭발을 일으킵니다. 느리지만 피해와 방어 붕괴 능력이 매우 높습니다.', cd: 8, clip: 'slam', dur: 1.0, lunge: 5, iframe: 0.55, heavy: true,
      ev: [[0.6, (c) => {
        const p = c.front(1.6);
        c.g.fx.pillar(p, 1.8, 12, 0.5, c.col()); c.g.fx.shock(p.clone().setY(p.y + 0.6), 5, 0.4, c.col()); c.g.sfx.boom(); c.g.shake(0.5);
        c.aoe(p, 5, 3.0, { poise: 48, knock: 4 });
      }]],
    },
    burst: {
      name: 'X·심판', desc: '도끼를 두 번 휘둘러 X자로 교차하는 두 갈래 번개 빛을 내어, 전방 넓은 범위의 적에게 두 차례 막대한 번개 피해를 줍니다.', cost: 60, clip: 'heavy3', dur: 1.45, iframe: 1.45, heavy: true,
      ev: [
        [0.42, (c) => { c.arc(6.5, 190, 2.6, { tilt: 0.8, a0: -1.6, a1: 1.6, w: 2.4, y: 1.3, poise: 40 }); c.g.shake(0.35); c.g.sfx.boom(); }],
        [0.62, (c) => {
          c.arc(6.5, 190, 2.6, { tilt: -0.8, a0: 1.6, a1: -1.6, w: 2.4, y: 1.3, poise: 40, knock: 5 });
          const p = c.front(3.5);
          for (let k = 0; k < 5; k++) { const q = scatter(c, p, 4); c.g.fx.beam(q.clone().setY(q.y + 14), q, 0.2, 0.3, c.col()); }
          c.aoe(p, 6, 1.2, { poise: 20 }); c.g.shake(0.5); c.g.sfx.boom();
        }],
      ],
    },
  },
};
