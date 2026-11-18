/**
 * 各位角色身上的标志。每个函数在一块正方形画布上作画，坐标已经归一化：
 * 原点在正中，左右上下各到 ±0.5，y 向下为正。由 Builder.decal() 调用，贴到角色身上。
 * 形状按 character/setting/ 里设定图上的样子画。
 */
type G = CanvasRenderingContext2D;
const TAU = Math.PI * 2;

function rrect(g: G, x: number, y: number, w: number, h: number, r: number) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

/** Claude：立体的放射花饰（发饰、领口、裙侧蝴蝶结上）——十六片橙色花瓣围着一颗琥珀色花心 */
export function claudeFlower(g: G) {
  for (let i = 0; i < 16; i++) {
    g.save();
    g.rotate((i / 16) * TAU);
    const L = i % 2 ? 0.43 : 0.48, gr = g.createLinearGradient(0, -0.12, 0, -L);
    gr.addColorStop(0, '#c4501a'); gr.addColorStop(1, '#f8a850');
    g.beginPath(); g.moveTo(0, -0.11); g.quadraticCurveTo(0.068, -0.3, 0, -L); g.quadraticCurveTo(-0.068, -0.3, 0, -0.11);
    g.fillStyle = gr; g.fill();
    g.lineWidth = 0.012; g.strokeStyle = '#7a3410'; g.stroke();
    g.restore();
  }
  const c = g.createRadialGradient(-0.03, -0.05, 0.01, 0, 0, 0.16);
  c.addColorStop(0, '#ffe6a8'); c.addColorStop(0.55, '#f08c2e'); c.addColorStop(1, '#b24c18');
  g.beginPath(); g.ellipse(0, 0, 0.125, 0.145, 0, 0, TAU);
  g.fillStyle = c; g.fill();
  g.lineWidth = 0.014; g.strokeStyle = '#7a3410'; g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.85)';
  g.beginPath(); g.ellipse(-0.04, -0.06, 0.032, 0.02, -0.5, 0, TAU); g.fill();
}
/** Claude：平面的放射标志（披肩、裙片上的印花）——十二道长短不一、末端圆钝的射线 */
export function claudeSpark(g: G, color = '#d9622b') {
  const L = [0.46, 0.35, 0.44, 0.33, 0.46, 0.37, 0.43, 0.34, 0.46, 0.36, 0.42, 0.33];
  g.fillStyle = color;
  L.forEach((len, i) => {
    g.save();
    g.rotate((i / 12) * TAU + 0.1 * Math.sin(i * 2.1));
    g.beginPath(); g.moveTo(-0.017, -0.05); g.lineTo(-0.036, -len + 0.03); g.quadraticCurveTo(0, -len - 0.022, 0.036, -len + 0.03); g.lineTo(0.017, -0.05); g.closePath(); g.fill();
    g.restore();
  });
  g.beginPath(); g.arc(0, 0, 0.066, 0, TAU); g.fill();
}

/** GPT：绳结——六个首尾相扣的环，中间留出六边形的孔 */
export function gptKnot(g: G, ink = '#f8f6ff', edge = '#5a5474') {
  const loops = (w: number, color: string) => {
    g.strokeStyle = color; g.lineWidth = w;
    for (let i = 0; i < 6; i++) {
      g.save();
      g.rotate((i / 6) * TAU);
      g.translate(0, -0.17);
      g.rotate(Math.PI / 6);
      rrect(g, -0.255, -0.135, 0.51, 0.27, 0.135);
      g.stroke();
      g.restore();
    }
  };
  loops(0.092, edge);
  loops(0.054, ink);
}

/** DeepSeek：围裙上的小鲸鱼——头朝左，尾巴向右上翘，头顶喷出三滴水 */
export function whale(g: G, body = '#232a5e', belly = '#eef2ff') {
  g.lineCap = 'round';
  g.strokeStyle = body; g.lineWidth = 0.026;
  for (const [x, a] of [[-0.25, -0.55], [-0.17, 0], [-0.09, 0.55]]) { g.beginPath(); g.moveTo(x, -0.3); g.lineTo(x + Math.sin(a) * 0.06, -0.3 - Math.cos(a) * 0.06); g.stroke(); }
  const path = new Path2D();
  path.moveTo(-0.43, 0.03);
  path.bezierCurveTo(-0.44, -0.2, -0.12, -0.25, 0.1, -0.13);
  path.bezierCurveTo(0.2, -0.08, 0.26, -0.1, 0.29, -0.2);
  path.lineTo(0.36, -0.17);
  path.bezierCurveTo(0.36, 0.0, 0.26, 0.17, 0.04, 0.2);
  path.bezierCurveTo(-0.2, 0.24, -0.41, 0.18, -0.43, 0.03);
  g.fillStyle = body; g.fill(path);
  g.save(); g.clip(path);
  g.fillStyle = belly;
  g.beginPath(); g.ellipse(-0.14, 0.24, 0.36, 0.12, 0.05, 0, TAU); g.fill();
  g.restore();
  // 尾鳍：两片叶子
  for (const [dx, dy] of [[-0.13, -0.15], [0.12, -0.14]]) {
    g.beginPath(); g.moveTo(0.325, -0.18);
    g.quadraticCurveTo(0.325 + dx * 0.2, -0.18 + dy * 1.1, 0.325 + dx, -0.18 + dy);
    g.quadraticCurveTo(0.325 + dx * 0.9, -0.18 + dy * 0.3, 0.325, -0.18);
    g.fillStyle = body; g.fill();
  }
  g.fillStyle = '#ffffff'; g.beginPath(); g.arc(-0.27, -0.03, 0.028, 0, TAU); g.fill();
  g.fillStyle = body; g.beginPath(); g.arc(-0.275, -0.03, 0.013, 0, TAU); g.fill();
}

/** GLM：黑底白字的 Z 牌。diamond 为真时牌子转成菱形，字保持正立 */
export function zBadge(g: G, diamond = false) {
  g.save();
  if (diamond) g.rotate(Math.PI / 4);
  const a = diamond ? 0.33 : 0.4;
  rrect(g, -a, -a, a * 2, a * 2, 0.06); g.fillStyle = '#15151b'; g.fill();
  rrect(g, -a + 0.04, -a + 0.04, a * 2 - 0.08, a * 2 - 0.08, 0.04); g.lineWidth = 0.016; g.strokeStyle = '#dfe3f0'; g.stroke();
  g.restore();
  const k = diamond ? 0.8 : 1;
  g.save(); g.scale(k, k);
  g.fillStyle = '#ffffff';
  g.beginPath();
  for (const [x, y] of [[-0.12, -0.21], [0.2, -0.21], [0.2, -0.135], [-0.06, 0.135], [0.2, 0.135], [0.2, 0.21], [-0.2, 0.21], [-0.2, 0.135], [0.06, -0.135], [-0.12, -0.135]]) g.lineTo(x, y);
  g.closePath(); g.fill();
  g.fillRect(-0.25, -0.21, 0.075, 0.075); // 左上角分出来的一小段
  g.restore();
}
/** GLM：眼罩上闭着的眼睛 */
export function sleepEyes(g: G) {
  g.strokeStyle = '#ffffff'; g.lineCap = 'round';
  for (const s of [-1, 1]) {
    g.lineWidth = 0.028;
    g.beginPath(); g.moveTo(s * 0.1, -0.02); g.quadraticCurveTo(s * 0.23, 0.07, s * 0.36, -0.02); g.stroke();
    g.lineWidth = 0.018;
    for (let i = 0; i < 4; i++) { const x = s * (0.14 + i * 0.065), y = 0.03 - Math.abs(i - 1.5) * 0.014; g.beginPath(); g.moveTo(x, y); g.lineTo(x + s * (i - 1.5) * 0.012, y + 0.055); g.stroke(); }
  }
}

/** Kimi：白色的 K，右上角一颗蓝点。round 为真时底是圆的 */
export function kBadge(g: G, round = false) {
  if (round) { g.beginPath(); g.arc(0, 0, 0.42, 0, TAU); g.fillStyle = '#12142a'; g.fill(); g.lineWidth = 0.03; g.strokeStyle = '#c9cbe2'; g.stroke(); }
  else { rrect(g, -0.38, -0.44, 0.76, 0.88, 0.07); g.fillStyle = '#1b2052'; g.fill(); rrect(g, -0.34, -0.4, 0.68, 0.8, 0.05); g.lineWidth = 0.016; g.strokeStyle = '#c9cbe2'; g.stroke(); }
  g.fillStyle = '#ffffff';
  g.fillRect(-0.17, -0.21, 0.085, 0.42);
  g.beginPath(); for (const [x, y] of [[-0.085, -0.01], [0.08, -0.21], [0.19, -0.21], [-0.01, 0.03]]) g.lineTo(x, y); g.closePath(); g.fill();
  g.beginPath(); for (const [x, y] of [[-0.04, -0.01], [0.2, 0.21], [0.09, 0.21], [-0.085, 0.05]]) g.lineTo(x, y); g.closePath(); g.fill();
  g.fillStyle = '#2f8fff'; g.beginPath(); g.arc(0.2, -0.23, 0.05, 0, TAU); g.fill();
}
/** Kimi：发饰上的三棱镜和它折出来的彩虹 */
export function prism(g: G) {
  const cols = ['#ff4d4d', '#ff9a3c', '#ffe14a', '#58d27a', '#4aa3ff', '#8a6cf0'];
  cols.forEach((c, i) => {
    g.fillStyle = c;
    g.beginPath(); g.moveTo(0.02, -0.04 + i * 0.012); g.lineTo(0.48, -0.16 + i * 0.045); g.lineTo(0.48, -0.115 + i * 0.045); g.lineTo(0.02, -0.028 + i * 0.012); g.closePath(); g.fill();
  });
  g.beginPath(); g.moveTo(-0.42, 0.24); g.lineTo(-0.14, -0.3); g.lineTo(0.14, 0.24); g.closePath();
  g.fillStyle = '#17171f'; g.fill();
  g.lineWidth = 0.022; g.strokeStyle = '#c9cbe2'; g.lineJoin = 'round'; g.stroke();
}

/** Qwen：金边蓝底的圆徽，中间是三段互相咬合成六边形的白色标志 */
export function qwenBadge(g: G) {
  g.beginPath(); g.arc(0, 0, 0.45, 0, TAU); g.fillStyle = '#d6b46c'; g.fill();
  g.beginPath(); g.arc(0, 0, 0.39, 0, TAU); g.fillStyle = '#5a5ae8'; g.fill();
  g.beginPath(); g.arc(0, 0, 0.35, 0, TAU); g.lineWidth = 0.012; g.strokeStyle = '#e8d49a'; g.stroke();
  const hex = (r: number, rot = 0) => { g.beginPath(); for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU + rot; g.lineTo(Math.sin(a) * r, -Math.cos(a) * r); } g.closePath(); };
  g.fillStyle = '#ffffff'; hex(0.27); g.fill();
  g.fillStyle = '#5a5ae8'; hex(0.115, Math.PI / 6); g.fill();
  // 三道斜向的缝，把六边形环分成三段互相咬合的折线
  g.strokeStyle = '#5a5ae8'; g.lineWidth = 0.034; g.lineCap = 'butt';
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU;
    g.beginPath(); g.moveTo(Math.sin(a) * 0.29, -Math.cos(a) * 0.29); g.lineTo(Math.sin(a + 1.2) * 0.1, -Math.cos(a + 1.2) * 0.1); g.stroke();
  }
}

/** Gemini：四角星——四条边向内凹，蓝到紫到粉的渐变，金色描边 */
export function geminiStar(g: G) {
  const R = 0.46, r = 0.36, star = new Path2D();
  star.moveTo(0, -R);
  star.quadraticCurveTo(0.055, -0.055, r, 0); star.quadraticCurveTo(0.055, 0.055, 0, R);
  star.quadraticCurveTo(-0.055, 0.055, -r, 0); star.quadraticCurveTo(-0.055, -0.055, 0, -R);
  const gr = g.createLinearGradient(-0.3, -0.4, 0.3, 0.4);
  gr.addColorStop(0, '#55a4ff'); gr.addColorStop(0.5, '#8f6cf5'); gr.addColorStop(1, '#f28ad4');
  g.fillStyle = gr; g.fill(star);
  // 切面：四个象限明暗交替，像一颗切割过的宝石
  g.save(); g.clip(star);
  [[0, -R, r, 0, 0.22, '#ffffff'], [r, 0, 0, R, 0.14, '#20104a'], [0, R, -r, 0, 0.2, '#ffffff'], [-r, 0, 0, -R, 0.1, '#20104a']].forEach(([x0, y0, x1, y1, a, c]) => {
    g.globalAlpha = a as number; g.fillStyle = c as string;
    g.beginPath(); g.moveTo(0, 0); g.lineTo(x0 as number, y0 as number); g.lineTo(x1 as number, y1 as number); g.closePath(); g.fill();
  });
  g.restore();
  g.globalAlpha = 1;
  g.lineWidth = 0.028; g.strokeStyle = '#e3c16f'; g.lineJoin = 'round'; g.stroke(star);
}

/** Grok：一个圆环被一道斜杠从左下到右上贯穿 */
export function grokRing(g: G, gold = '#e0b24c', edge = '#3a2a10') {
  const draw = (wRing: number, wSlash: number, c: string) => {
    g.strokeStyle = c; g.lineCap = 'round';
    g.lineWidth = wRing; g.beginPath(); g.arc(0, 0, 0.27, 0, TAU); g.stroke();
    g.lineWidth = wSlash; g.beginPath(); g.moveTo(-0.4, 0.4); g.lineTo(0.42, -0.42); g.stroke();
  };
  draw(0.115, 0.09, edge);
  draw(0.075, 0.052, gold);
}

/** Kimi：披肩和裙子上的月牙与星星 */
export function moonStars(g: G) {
  g.fillStyle = '#f4f4ff';
  g.beginPath(); g.arc(-0.08, 0.04, 0.26, 0.5, 0.5 + Math.PI * 1.5); g.arc(0.03, -0.02, 0.2, 0.5 + Math.PI * 1.42, 0.62, true); g.closePath(); g.fill();
  const star = (x: number, y: number, r: number) => {
    g.beginPath(); g.moveTo(x, y - r);
    g.quadraticCurveTo(x + r * 0.12, y - r * 0.12, x + r * 0.8, y); g.quadraticCurveTo(x + r * 0.12, y + r * 0.12, x, y + r);
    g.quadraticCurveTo(x - r * 0.12, y + r * 0.12, x - r * 0.8, y); g.quadraticCurveTo(x - r * 0.12, y - r * 0.12, x, y - r); g.fill();
  };
  star(0.28, -0.26, 0.13); star(0.34, 0.16, 0.08); star(-0.34, -0.32, 0.07); star(0.1, 0.36, 0.06); star(-0.3, 0.36, 0.045);
}
