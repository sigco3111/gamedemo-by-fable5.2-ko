import * as THREE from 'three';
import type { Game } from '../game';
import { ELEM } from '../combat/elements';
import { WORLD } from '../world/layout';
import { QUALITY, saveQuality, type QLevel } from '../core/quality';
import type { Member } from '../player/party';
import { houseBadge } from './badges';

const $ = <T extends HTMLElement = HTMLElement>(s: string, root: ParentNode = document) => root.querySelector(s) as T;
const _v = new THREE.Vector3();
interface Float { el: HTMLDivElement; pos: THREE.Vector3; t: number; dur: number; vx: number; rise: number; live: boolean }

const HUD_HTML = `
<div class="tl"><canvas id="mini" width="176" height="176"></canvas><div class="clock"><b id="clock"></b><span id="region"></span></div></div>
<div class="quest"><div id="quest-text"></div><div id="quest-dist"></div><div id="quest-side"></div></div>
<div class="party" id="party"></div>
<div class="bottom">
  <div class="who"><b id="who"></b><span id="who-el"></span><span class="lv">Lv.<b id="lv"></b></span><div class="exp"><i id="exp"></i></div></div>
  <div class="hpbar"><i id="hp"></i><span id="hp-text"></span></div>
  <div class="stbar"><i id="st"></i></div>
</div>
<div class="skills">
  <div class="sk" id="sk-e"><kbd>E</kbd><span class="nm"></span><i class="cd"></i><em></em></div>
  <div class="sk" id="sk-q"><kbd>Q</kbd><span class="nm"></span><i class="fill"></i></div>
  <div class="bag"><span>달콤 열매 <b id="berry"></b> <kbd>Z</kbd></span><span>토큰 <b id="dust"></b></span><span>연산 칩 <b id="crys"></b></span></div>
</div>
<div id="prompt"><kbd>F</kbd><span></span></div>
<div id="banner"></div><div id="regionb"></div><div id="toasts"></div>
<div id="boss"><div class="bn"></div><div class="bb"><i></i></div></div>
<div id="lock"></div><div id="floats"></div><div id="ebars"></div><div id="vignette"></div><div id="fade"></div>
<div id="keys">WASD 이동 · 스페이스 점프/활강 · Shift 회피/돌진 · 좌클릭 공격(길게 누르면 강공격) · E 스킬 · Q 필살기 · 1-8 캐릭터 교체 · Tab 조준 고정 · M 지도 · C 캐릭터 · Esc 메뉴</div>`;

/** 界面：血条体力、技能、队伍、小地图、任务、伤害数字、菜单 */
export class Hud {
  private root = $('#ui');
  private hud = document.createElement('div');
  private menuEl = document.createElement('div');
  private floats: Float[] = [];
  private ebars: { el: HTMLDivElement; fill: HTMLElement; mark: HTMLElement }[] = [];
  private rows: { el: HTMLElement; hp: HTMLElement; en: HTMLElement; m: Member }[] = [];
  private mini!: CanvasRenderingContext2D;
  private bannerT = 0; private regionT = 0; private fadeT = 0; private fadeDur = 1;
  private frame = 0;
  menu: 'start' | 'pause' | 'map' | 'chars' | null = 'start';
  private mapCv: HTMLCanvasElement | null = null;

  constructor(private g: Game) {
    this.hud.id = 'hud';
    this.hud.innerHTML = HUD_HTML;
    this.menuEl.id = 'menu';
    this.root.append(this.hud, this.menuEl);
    this.mini = $<HTMLCanvasElement>('#mini').getContext('2d')!;
    const fl = $('#floats'), eb = $('#ebars');
    for (let i = 0; i < 56; i++) { const el = document.createElement('div'); el.className = 'fl'; fl.appendChild(el); this.floats.push({ el, pos: new THREE.Vector3(), t: 0, dur: 1, vx: 0, rise: 60, live: false }); }
    for (let i = 0; i < 12; i++) { const el = document.createElement('div'); el.className = 'eb'; el.innerHTML = '<b></b><i></i>'; eb.appendChild(el); this.ebars.push({ el, fill: $('i', el), mark: $('b', el) }); }
    const party = $('#party');
    g.party.members.forEach((m, i) => {
      const el = document.createElement('div');
      el.className = 'pm';
      el.innerHTML = `<kbd>${i + 1}</kbd><div class="av"></div><div class="pi"><span>${m.def.name}</span><div class="ph"><i></i></div><div class="pe"><i></i></div></div>`;
      el.style.setProperty('--c', m.color);
      $('.av', el).appendChild(this.avatar(m, 44));
      party.appendChild(el);
      this.rows.push({ el, hp: $('.ph i', el), en: $('.pe i', el), m });
    });
    this.menuEl.addEventListener('click', (e) => this.onMenuClick(e));
    this.menuEl.addEventListener('input', (e) => this.onMenuInput(e));
    this.show('start');
  }

  /** 头像：从设定图里裁出来的脸，八张的脸都在同一个位置（由 tools/make-avatars.py 生成） */
  private avatar(m: Member, size: number) {
    const img = document.createElement('img');
    img.src = `avatars/${m.def.id}.png`;
    img.alt = m.def.name;
    img.width = img.height = size;
    img.draggable = false;
    return img;
  }

  // ---------- 飘字 ----------
  private spawn(pos: THREE.Vector3, text: string, color: string, cls: string, dur: number, rise: number) {
    const f = this.floats.find((x) => !x.live) ?? this.floats[0];
    f.live = true; f.t = 0; f.dur = dur; f.rise = rise; f.vx = (Math.random() - 0.5) * 50;
    f.pos.copy(pos);
    f.el.textContent = text;
    f.el.className = 'fl ' + cls;
    f.el.style.color = color;
    f.el.style.display = 'block';
  }
  dmg(pos: THREE.Vector3, v: number, color: string, crit: boolean, onPlayer = false) { this.spawn(pos, (onPlayer ? '-' : '') + v + (crit ? '!' : ''), color, crit ? 'crit' : onPlayer ? 'hurt' : '', 0.8, 70); }
  float(pos: THREE.Vector3, text: string, color: string, big = false) { this.spawn(pos, text, color, big ? 'tag big' : 'tag', 1.1, 46); }
  banner(text: string, color = '#ffffff') { const b = $('#banner'); b.textContent = text; b.style.color = color; b.classList.remove('on'); void b.offsetWidth; b.classList.add('on'); this.bannerT = 2.2; }
  region(name: string) { const b = $('#regionb'); b.textContent = name; b.classList.remove('on'); void b.offsetWidth; b.classList.add('on'); this.regionT = 3; }
  toast(text: string) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = text;
    const box = $('#toasts');
    box.appendChild(t);
    while (box.children.length > 4) box.firstChild!.remove();
    setTimeout(() => t.remove(), 4200);
  }
  fade(t: number) { this.fadeT = this.fadeDur = t; }

  private project(p: THREE.Vector3, out: { x: number; y: number }) {
    _v.copy(p).project(this.g.camera);
    out.x = (_v.x * 0.5 + 0.5) * innerWidth; out.y = (-_v.y * 0.5 + 0.5) * innerHeight;
    return _v.z < 1 && _v.z > -1;
  }
  private sp = { x: 0, y: 0 };

  update(dt: number) {
    const g = this.g, P = g.party, m = P.cur, pl = g.player, sp = this.sp;
    this.frame++;
    for (const f of this.floats) {
      if (!f.live) continue;
      f.t += dt;
      const u = f.t / f.dur;
      if (u >= 1 || !this.project(f.pos, sp)) { f.live = false; f.el.style.display = 'none'; continue; }
      const e = 1 - Math.pow(1 - u, 3);
      f.el.style.transform = `translate(${sp.x + f.vx * e}px, ${sp.y - f.rise * e}px) translate(-50%,-50%) scale(${u < 0.12 ? 0.6 + u * 5 : 1.2 - 0.2 * Math.min(1, (u - 0.12) * 4)})`;
      f.el.style.opacity = String(u > 0.7 ? (1 - u) / 0.3 : 1);
    }
    // 敌人血条
    let bi = 0, boss = null as null | (typeof g.enemies.list)[0];
    for (const e of g.enemies.list) {
      if (e.dead || !e.seen) continue;
      if (e.def.kind === 'elite') { if (e.aggro) boss = e; continue; }
      if (bi >= this.ebars.length || e.pos.distanceTo(pl.pos) > 32) continue;
      _v.copy(e.center).setY(e.center.y + (e.def.kind === 'wisp' ? 0.8 : 1.0));
      if (!this.project(_v, sp)) continue;
      const b = this.ebars[bi++];
      b.el.style.display = 'block';
      b.el.style.transform = `translate(${sp.x}px, ${sp.y}px) translate(-50%,-50%)`;
      b.fill.style.width = (e.hp / e.maxHp) * 100 + '%';
      b.mark.textContent = e.mark ? ELEM[e.mark.elem].name : e.asleep ? 'z' : '';
      b.mark.style.background = e.mark ? ELEM[e.mark.elem].color : e.asleep ? ELEM.shade.color : 'transparent';
      b.el.classList.toggle('tg', g.combat.target === e);
    }
    for (; bi < this.ebars.length; bi++) this.ebars[bi].el.style.display = 'none';
    const bossEl = $('#boss');
    bossEl.style.display = boss ? 'block' : 'none';
    if (boss) {
      $('.bn', bossEl).textContent = `${boss.def.name}  Lv.${boss.level}` + (boss.mark ? `  〔${ELEM[boss.mark.elem].mark}〕` : '') + (boss.vulnT > 0 ? '  〔방어 붕괴〕' : '');
      $('.bb i', bossEl).style.width = (boss.hp / boss.maxHp) * 100 + '%';
    }
    // 锁定准星
    const lock = $('#lock'), tg = g.combat.locked ? g.combat.target : null;
    if (tg && !tg.dead && this.project(tg.center, sp)) { lock.style.display = 'block'; lock.style.transform = `translate(${sp.x}px, ${sp.y}px) translate(-50%,-50%) rotate(45deg)`; } else lock.style.display = 'none';

    if (this.frame % 2 === 0) {
      $('#hp').style.width = (m.hp / m.maxHp) * 100 + '%';
      $('#hp-text').textContent = `${Math.ceil(m.hp)} / ${m.maxHp}`;
      const st = $('#st');
      st.style.width = (pl.stamina / pl.staminaMax) * 100 + '%';
      st.parentElement!.style.width = 220 * (pl.staminaMax / 100) + 'px';
      st.parentElement!.style.opacity = pl.stamina < pl.staminaMax - 0.5 ? '1' : '0.35';
      st.classList.toggle('low', pl.stamina < 25);
      $('#who').textContent = m.def.name;
      const we = $('#who-el'); we.textContent = ELEM[m.def.elem].name; we.style.background = m.color;
      $('#lv').textContent = String(P.level);
      $('#exp').style.width = (P.level >= 20 ? 100 : (P.exp / P.expNeed()) * 100) + '%';
      const kit = m.def.kit, e = $('#sk-e'), q = $('#sk-q');
      $('.nm', e).textContent = kit.skill.name; $('.nm', q).textContent = kit.burst.name;
      const cd = m.skillCd / (kit.skill.cd ?? 8);
      $<HTMLElement>('.cd', e).style.height = cd * 100 + '%';
      $('em', e).textContent = m.skillCd > 0 ? m.skillCd.toFixed(1) : '';
      const en = m.energy / (kit.burst.cost ?? 60);
      $<HTMLElement>('.fill', q).style.height = Math.min(1, en) * 100 + '%';
      q.classList.toggle('ready', en >= 1);
      q.style.setProperty('--c', m.color); e.style.setProperty('--c', m.color);
      $('#berry').textContent = String(P.items.berry); $('#dust').textContent = String(P.items.dust);
      $('#crys').textContent = `${g.world.crystalCount}/${g.world.crystals.length}`;
      this.rows.forEach((r, i) => {
        r.el.classList.toggle('on', i === P.active);
        r.el.classList.toggle('dead', !r.m.alive);
        r.hp.style.width = (r.m.hp / r.m.maxHp) * 100 + '%';
        r.en.style.width = Math.min(100, (r.m.energy / (r.m.def.kit.burst.cost ?? 60)) * 100) + '%';
      });
      $('#clock').textContent = g.sky.clock();
      $('#region').textContent = g.world.region;
      const s = g.world.stage, t = s.target();
      $('#quest-text').textContent = s.text;
      $('#quest-dist').textContent = t ? `거리 ${Math.round(Math.hypot(t.x - pl.pos.x, t.z - pl.pos.z))}m · 미니맵의 금색 표시` : '';
      $('#quest-side').textContent = `AI 오두막 방문 ${g.world.houseCount}/8 · 길 위의 토큰 ${g.world.tokenCount}/${g.world.tokens.length}`;
      const pr = $('#prompt'), near = g.world.near;
      pr.style.display = near ? 'flex' : 'none';
      if (near) $('span', pr).textContent = near.prompt() ?? '';
      $('#vignette').style.opacity = String(m.hp / m.maxHp < 0.3 ? 0.75 : 0);
      this.drawMini();
    }
    if (this.bannerT > 0 && (this.bannerT -= dt) <= 0) $('#banner').classList.remove('on');
    if (this.regionT > 0 && (this.regionT -= dt) <= 0) $('#regionb').classList.remove('on');
    if (this.fadeT > 0) { this.fadeT -= dt; $('#fade').style.opacity = String(Math.max(0, this.fadeT / this.fadeDur)); }
  }

  // ---------- 地图 ----------
  private icons(c: CanvasRenderingContext2D, toPx: (x: number, z: number) => [number, number], s: number) {
    const g = this.g;
    for (const it of g.world.items) {
      if (it.kind === 'gather' || (it.kind === 'chest' && (it.done || !it.obj.visible))) continue;
      const [x, y] = toPx(it.pos.x, it.pos.z);
      if (it.kind === 'house') {
        // 各家自己的标志；拜访过的套一圈金边
        const r = 10.5 * s;
        c.imageSmoothingQuality = 'high';
        c.drawImage(houseBadge(it.id.slice(2)), x - r, y - r, r * 2, r * 2);
        c.strokeStyle = it.done ? '#ffd24a' : '#1a2a4a'; c.lineWidth = (it.done ? 2.4 : 1.4) * s;
        c.beginPath(); c.arc(x, y, r, 0, 6.3); c.stroke();
      } else if (it.kind === 'way') {
        c.fillStyle = it.done ? '#6fd0ff' : '#8a93a6'; c.strokeStyle = '#10203a'; c.lineWidth = 2;
        c.beginPath(); c.moveTo(x, y - 8 * s); c.lineTo(x + 6 * s, y); c.lineTo(x, y + 8 * s); c.lineTo(x - 6 * s, y); c.closePath(); c.fill(); c.stroke();
      } else { c.fillStyle = it.data.ornate ? '#d8a6ff' : '#ffd24a'; c.strokeStyle = '#3a2a10'; c.lineWidth = 1.5; c.fillRect(x - 4 * s, y - 3 * s, 8 * s, 6 * s); c.strokeRect(x - 4 * s, y - 3 * s, 8 * s, 6 * s); }
    }
    for (const e of g.enemies.list) {
      if (e.dead) continue;
      const [x, y] = toPx(e.pos.x, e.pos.z);
      c.fillStyle = e.def.kind === 'elite' ? '#ff3a2a' : '#ff7a6a';
      c.beginPath(); c.arc(x, y, (e.def.kind === 'elite' ? 5 : 2.6) * s, 0, 6.3); c.fill();
    }
    const t = g.world.stage.target();
    if (t) {
      const [x, y] = toPx(t.x, t.z);
      c.fillStyle = '#ffd24a'; c.strokeStyle = '#5a3a00'; c.lineWidth = 2;
      c.beginPath();
      for (let i = 0; i < 10; i++) { const a = (i / 10) * 6.283 - 1.571, r = (i % 2 ? 4 : 9) * s; c.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); }
      c.closePath(); c.fill(); c.stroke();
    }
    const [px, py] = toPx(g.player.pos.x, g.player.pos.z);
    c.save(); c.translate(px, py); c.rotate(Math.PI - g.player.yaw);
    c.fillStyle = '#ffffff'; c.strokeStyle = '#1a2a4a'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(0, -9 * s); c.lineTo(6 * s, 7 * s); c.lineTo(0, 3 * s); c.lineTo(-6 * s, 7 * s); c.closePath(); c.fill(); c.stroke();
    c.restore();
  }
  private drawMini() {
    const g = this.g, c = this.mini, S = 176, R = 62, k = 512 / WORLD.size, p = g.player.pos;
    c.save();
    c.clearRect(0, 0, S, S);
    c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 2, 0, 6.3); c.clip();
    c.fillStyle = '#2c6fb0'; c.fillRect(0, 0, S, S);
    c.drawImage(g.terrain.mapCanvas, (p.x + WORLD.half - R) * k, (p.z + WORLD.half - R) * k, R * 2 * k, R * 2 * k, 0, 0, S, S);
    const sc = S / (R * 2);
    this.icons(c, (x, z) => {
      let dx = (x - p.x) * sc, dy = (z - p.z) * sc;
      const d = Math.hypot(dx, dy), max = S / 2 - 10;
      if (d > max) { dx *= max / d; dy *= max / d; }
      return [S / 2 + dx, S / 2 + dy];
    }, 0.8);
    c.restore();
    c.strokeStyle = 'rgba(255,255,255,0.85)'; c.lineWidth = 2.5;
    c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 2, 0, 6.3); c.stroke();
  }
  private drawMap() {
    const cv = this.mapCv;
    if (!cv) return;
    const c = cv.getContext('2d')!, S = cv.width;
    c.drawImage(this.g.terrain.mapCanvas, 0, 0, S, S);
    this.icons(c, (x, z) => [((x + WORLD.half) / WORLD.size) * S, ((z + WORLD.half) / WORLD.size) * S], 1.25);
    c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineWidth = 4; c.strokeStyle = 'rgba(10,20,40,0.85)'; c.fillStyle = '#fff';
    // 地名：图标的上、右、下、左四个位置挨个试，挑第一个不压住别的图标和地名的
    const marks = this.g.world.items.filter((it) => it.kind === 'way' || it.kind === 'house').map((it) => ({ it, x: ((it.pos.x + WORLD.half) / WORLD.size) * S, y: ((it.pos.z + WORLD.half) / WORLD.size) * S, r: it.kind === 'house' ? 13 : 10 }));
    const taken = marks.map((m) => [m.x - m.r, m.y - m.r, m.x + m.r, m.y + m.r]);
    for (const m of marks) {
      const house = m.it.kind === 'house', size = house ? 13 : 15;
      c.font = `600 ${size}px "Malgun Gothic", "Noto Sans KR", sans-serif`;
      const w = c.measureText(m.it.label).width + 4, h = size + 2, dx = m.r + w / 2 + 3, dy = m.r + h / 2 + 2;
      const spots = house ? [[dx, 0], [0, dy], [0, -dy], [-dx, 0]] : [[0, -dy], [0, dy], [-dx, 0], [dx, 0]];
      const box = ([ox, oy]: number[]) => [m.x + ox - w / 2, m.y + oy - h / 2, m.x + ox + w / 2, m.y + oy + h / 2];
      const free = spots.find((sp) => { const q = box(sp); return !taken.some((t) => q[0] < t[2] && q[2] > t[0] && q[1] < t[3] && q[3] > t[1]); }) ?? spots[0];
      taken.push(box(free));
      c.strokeText(m.it.label, m.x + free[0], m.y + free[1]); c.fillText(m.it.label, m.x + free[0], m.y + free[1]);
    }
    c.textBaseline = 'alphabetic';
  }

  // ---------- 菜单 ----------
  show(name: Hud['menu']) {
    const g = this.g, M = this.menuEl;
    this.menu = name;
    M.className = name ? 'on ' + name : '';
    this.hud.style.visibility = name === 'start' ? 'hidden' : 'visible';
    if (!name) { M.innerHTML = ''; this.mapCv = null; return; }
    if (name === 'start') {
      M.innerHTML = `<div class="start"><h1>별잿빛 들판</h1><p class="sub">애니메이션풍 오픈 월드 Demo · 여덟 명의 AI 소녀</p><button data-act="begin" class="big">시작하기</button>
        <p class="tip">시작하면 마우스가 시점 회전용으로 잠깁니다. Esc로 메뉴를 열 수 있습니다</p></div>`;
    } else if (name === 'pause') {
      const q = g.quality;
      M.innerHTML = `<div class="panel"><h2>일시정지</h2>
        <button data-act="resume" class="big">계속하기</button>
        <div class="row"><label>화질</label><div class="seg">${(Object.keys(QUALITY) as QLevel[]).map((k) => `<button data-q="${k}" class="${k === q ? 'sel' : ''}">${QUALITY[k].label}</button>`).join('')}</div></div>
        <div class="row"><label>마우스 감도</label><input type="range" id="sens" min="0.8" max="6" step="0.1" value="${(g.cam.sens * 1000).toFixed(1)}"></div>
        <div class="row"><label>음량</label><input type="range" id="vol" min="0" max="1" step="0.05" value="${g.sfx.volume}"></div>
        <h3>조작법</h3>
        <div class="keys">${[['W A S D', '이동'], ['마우스', '시점 회전 · 휠로 거리 조절'], ['스페이스', '점프 · 공중에서 한 번 더 누르면 활강 · 등반 중 위로 도약'], ['Shift', '짧게 누르면 회피(타이밍을 맞추면 완벽 회피) · 길게 누르면 돌진'], ['마우스 좌클릭', '일반 공격 · 길게 누르면 강공격 · 공중 낙하 공격'], ['E / Q', '원소 스킬 / 원소 폭발'], ['1 – 8', '캐릭터 교체'], ['Tab / 휠 버튼', '대상 고정'], ['F', '상호작용(거점, 보물상자, 채집, 오두막)'], ['Z', '달콤 열매를 먹어 생명력 회복'], ['X', '등반 중 손 떼기'], ['M / C', '지도 / 캐릭터 패널']].map(([a, b]) => `<div><kbd>${a}</kbd><span>${b}</span></div>`).join('')}</div>
        <button data-act="reset" class="warn">저장 데이터를 지우고 처음부터</button></div>`;
    } else if (name === 'map') {
      M.innerHTML = `<div class="panel map"><h2>지도 <small>활성화된 거점(파란 마름모)을 클릭하면 순간이동 · 원형 배지는 여덟 AI 회사, 금색 테두리는 방문한 곳 · M으로 닫기</small></h2><canvas id="bigmap" width="640" height="640"></canvas></div>`;
      this.mapCv = $<HTMLCanvasElement>('#bigmap');
      this.drawMap();
    } else {
      M.innerHTML = `<div class="panel chars"><h2>파티 <small>카드를 클릭하면 교체 · C로 닫기</small></h2><div class="grid">${g.party.members.map((m, i) => {
        const e = ELEM[m.def.elem], k = m.def.kit;
        return `<div class="card ${i === g.party.active ? 'sel' : ''} ${m.alive ? '' : 'dead'}" data-char="${i}" style="--c:${m.color}">
          <div class="ch"><div class="av" data-av="${i}"></div><div><b>${m.def.name}</b><span>${m.def.title}</span></div><i>${e.name}</i></div>
          <p class="st">생명력 ${m.maxHp} · 공격력 ${m.atk} · 방어력 ${m.defn}</p><p>${m.def.blurb}</p>
          <p><u>${e.mark}</u> 인장: ${e.markDesc}.<u>${e.burst}</u>：${e.burstDesc}。</p>
          <p><kbd>E</kbd> <b>${k.skill.name}</b>(쿨다운 ${k.skill.cd}초)${k.skill.desc}</p><p><kbd>Q</kbd> <b>${k.burst.name}</b> ${k.burst.desc}</p></div>`;
      }).join('')}</div>
      <p class="note">속성 반응: 적에게 한 속성의 인장이 남아 있을 때 <b>다른</b> 속성으로 공격하면, 나중에 적용한 속성으로 폭발이 한 번 발동하고 인장은 소모됩니다.</p></div>`;
      M.querySelectorAll<HTMLElement>('[data-av]').forEach((el) => el.appendChild(this.avatar(g.party.members[+el.dataset.av!], 52)));
    }
  }
  private onMenuClick(e: Event) {
    const g = this.g, t = e.target as HTMLElement, btn = t.closest<HTMLElement>('[data-act],[data-q],[data-char]');
    if (this.menu === 'map' && t.id === 'bigmap') {
      const cv = t as HTMLCanvasElement, r = cv.getBoundingClientRect(), ev = e as MouseEvent;
      const wx = ((ev.clientX - r.left) / r.width) * WORLD.size - WORLD.half, wz = ((ev.clientY - r.top) / r.height) * WORLD.size - WORLD.half;
      const w = g.world.items.filter((i) => i.kind === 'way' && i.done).sort((a, b) => Math.hypot(a.pos.x - wx, a.pos.z - wz) - Math.hypot(b.pos.x - wx, b.pos.z - wz))[0];
      if (w && Math.hypot(w.pos.x - wx, w.pos.z - wz) < 26) { g.sfx.waypoint(); g.warp(w.pos.x + 1.8, w.pos.z + 1.8); g.setMenu(null); this.toast(`${w.label}(으)로 순간이동했습니다`); } else g.sfx.deny();
      return;
    }
    if (!btn) return;
    g.sfx.ui();
    if (btn.dataset.act === 'begin' || btn.dataset.act === 'resume') g.setMenu(null);
    else if (btn.dataset.act === 'reset') { if (confirm('저장 데이터를 지우고 처음부터 시작할까요?')) { localStorage.removeItem('xingjin.save'); location.reload(); } }
    else if (btn.dataset.q) { saveQuality(btn.dataset.q as QLevel); g.save(); location.reload(); }
    else if (btn.dataset.char) { if (g.player.swapTo(+btn.dataset.char, true)) g.setMenu(null); }
  }
  private onMenuInput(e: Event) {
    const t = e.target as HTMLInputElement;
    if (t.id === 'sens') this.g.cam.sens = +t.value / 1000;
    if (t.id === 'vol') this.g.sfx.setVolume(+t.value);
    this.g.save();
  }
}
