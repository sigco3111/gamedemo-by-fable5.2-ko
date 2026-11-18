import * as THREE from 'three';

export interface FaceStyle {
  skin: string;
  /** 虹膜渐变：上、中、下。左右眼不同色时用 irisR 指定角色右眼（画面左侧） */
  iris: [string, string, string];
  irisR?: [string, string, string];
  pupil: string; lash: string; brow: string;
  eyeW?: number; eyeH?: number;
  /** 外眼角上挑的程度：0 圆眼，0.2 吊眼 */
  tilt?: number;
  blush?: string;
  /** 瞳孔：round 圆瞳，slit 竖瞳（猫、小恶魔） */
  pupilShape?: 'round' | 'slit';
  /** 眼里的特殊高光：star 四角星，moon 月牙 */
  sparkle?: 'star' | 'moon';
  /** 下睫毛的根数 */
  lowerLash?: number;
  /** 嘴唇的颜色，淡淡一抹 */
  lip?: string;
  /** 上眼睑垂下来多少（0 到 0.3）：数值大就是没睡醒的半睁眼 */
  lid?: number;
  /** 嘴型：smile 微笑、flat 抿嘴、cat 猫嘴、fang 露牙笑 */
  mouth?: 'smile' | 'flat' | 'cat' | 'fang';
}
export type Expr = 'neutral' | 'blink' | 'fierce' | 'hurt';
const TAU = Math.PI * 2, S = 1024;

/** 画一只眼睛。本地坐标：+x 朝外（耳朵方向），原点在眼睛中心 */
function eye(g: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, side: number, st: FaceStyle, iris: [string, string, string], ex: Expr) {
  const up = (st.tilt ?? 0.06) + (ex === 'fierce' ? 0.07 : 0);
  g.save();
  g.translate(cx, cy);
  g.scale(side, 1);
  g.lineCap = 'round';
  g.lineJoin = 'round';
  if (ex === 'blink' || ex === 'hurt') {
    g.strokeStyle = st.lash;
    g.lineWidth = h * 0.085;
    g.beginPath();
    if (ex === 'hurt') { g.moveTo(w * 0.46, -h * 0.24); g.lineTo(-w * 0.32, h * 0.06); g.lineTo(w * 0.46, h * 0.32); }
    else {
      g.moveTo(-w * 0.5, h * 0.04); g.quadraticCurveTo(0, h * 0.36, w * 0.52, -h * 0.02 - up * h);
      g.moveTo(w * 0.52, -h * 0.02 - up * h); g.lineTo(w * 0.64, -h * 0.1 - up * h);
    }
    g.stroke();
    g.restore();
    return;
  }
  const hh = ex === 'fierce' ? h * 0.88 : h, oy = -up * hh;
  const white = new Path2D();
  white.moveTo(-w * 0.5, hh * 0.1);
  white.bezierCurveTo(-w * 0.4, -hh * 0.46, w * 0.16, -hh * 0.62, w * 0.5, -hh * 0.18 + oy);
  white.bezierCurveTo(w * 0.48, hh * 0.36, -w * 0.16, hh * 0.54, -w * 0.5, hh * 0.1);
  g.fillStyle = '#fffdfd';
  g.fill(white);
  g.save();
  g.clip(white);
  // 上眼睑投在眼白上的影子
  const sh = g.createLinearGradient(0, -hh * 0.62, 0, hh * 0.08);
  sh.addColorStop(0, 'rgba(120,105,155,0.62)');
  sh.addColorStop(1, 'rgba(120,105,155,0)');
  g.fillStyle = sh;
  g.fillRect(-w, -hh, w * 2, hh * 2);
  // 虹膜
  const ix = -w * 0.015, iy = hh * 0.02, rx = w * 0.345, ry = hh * 0.5;
  const ig = g.createLinearGradient(0, iy - ry, 0, iy + ry);
  ig.addColorStop(0, iris[0]); ig.addColorStop(0.5, iris[1]); ig.addColorStop(1, iris[2]);
  g.fillStyle = ig;
  g.beginPath(); g.ellipse(ix, iy, rx, ry, 0, 0, TAU); g.fill();
  g.save();
  g.beginPath(); g.ellipse(ix, iy, rx, ry, 0, 0, TAU); g.clip();
  // 放射状的细纹
  g.strokeStyle = 'rgba(255,255,255,0.13)';
  g.lineWidth = w * 0.012;
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * TAU + 0.1;
    g.beginPath(); g.moveTo(ix + Math.cos(a) * rx * 0.42, iy + Math.sin(a) * ry * 0.42); g.lineTo(ix + Math.cos(a) * rx * 0.96, iy + Math.sin(a) * ry * 0.96); g.stroke();
  }
  // 下半的亮弧和上半的暗影
  const low = g.createRadialGradient(ix, iy + ry * 0.75, 0, ix, iy + ry * 0.75, rx * 0.95);
  low.addColorStop(0, 'rgba(255,255,255,0.62)');
  low.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = low;
  g.fillRect(-w, -hh, w * 2, hh * 2);
  const topSh = g.createLinearGradient(0, iy - ry, 0, iy + ry * 0.1);
  topSh.addColorStop(0, 'rgba(14,8,40,0.7)');
  topSh.addColorStop(1, 'rgba(14,8,40,0)');
  g.fillStyle = topSh;
  g.fillRect(-w, -hh, w * 2, hh * 2);
  g.restore();
  g.lineWidth = w * 0.036;
  g.strokeStyle = iris[0];
  g.beginPath(); g.ellipse(ix, iy, rx, ry, 0, 0, TAU); g.stroke();
  // 瞳孔
  const pg = g.createRadialGradient(ix, iy - ry * 0.02, 0, ix, iy - ry * 0.02, rx * 0.5);
  pg.addColorStop(0, st.pupil); pg.addColorStop(0.72, st.pupil); pg.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = st.pupilShape === 'slit' ? st.pupil : pg;
  g.beginPath();
  if (st.pupilShape === 'slit') g.ellipse(ix, iy - ry * 0.02, rx * 0.15, ry * 0.68, 0, 0, TAU);
  else g.ellipse(ix, iy - ry * 0.02, rx * 0.46, ry * 0.52, 0, 0, TAU);
  g.fill();
  // 瞳孔外一圈淡淡的亮环
  g.strokeStyle = 'rgba(255,255,255,0.22)';
  g.lineWidth = w * 0.014;
  g.beginPath(); g.ellipse(ix, iy, rx * 0.68, ry * 0.7, 0, 0, TAU); g.stroke();
  g.restore();
  // 高光：左上一大块，右下一小点，再加一粒
  g.fillStyle = '#ffffff';
  g.beginPath(); g.ellipse(ix - rx * 0.4, iy - ry * 0.42, rx * 0.33, ry * 0.25, -0.45, 0, TAU); g.fill();
  const hx = ix + rx * 0.44, hy = iy + ry * 0.32, hr = rx * 0.34;
  g.beginPath();
  if (st.sparkle === 'star') {
    for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU, r = i % 2 ? hr * 0.28 : hr; g.lineTo(hx + Math.sin(a) * r, hy - Math.cos(a) * r); }
    g.closePath();
  } else if (st.sparkle === 'moon') {
    g.arc(hx, hy, hr * 0.8, 0.7, 0.7 + Math.PI * 1.45);
    g.arc(hx + hr * 0.34, hy - hr * 0.14, hr * 0.62, 0.7 + Math.PI * 1.36, 0.82, true);
    g.closePath();
  } else g.arc(hx, hy, rx * 0.14, 0, TAU);
  g.fill();
  g.globalAlpha = 0.85;
  g.beginPath(); g.arc(ix - rx * 0.05, iy - ry * 0.68, rx * 0.07, 0, TAU); g.fill();
  g.globalAlpha = 1;
  // 半垂的眼睑：先用肤色盖住眼睛上沿，再把睫毛整体往下挪
  const lid = (st.lid ?? 0) * hh;
  if (lid > 0) {
    g.save(); g.clip(white);
    g.fillStyle = st.skin;
    g.beginPath(); g.moveTo(-w, -hh); g.lineTo(w, -hh); g.lineTo(w, -hh * 0.2 + oy + lid); g.bezierCurveTo(w * 0.18, -hh * 0.68 + lid, -w * 0.43, -hh * 0.5 + lid, -w * 0.6, hh * 0.14); g.closePath(); g.fill();
    g.restore();
    g.translate(0, lid);
  }
  // 上睫毛：两头细中间粗的色块，外眼角带上翘和两根睫毛
  g.fillStyle = st.lash;
  g.beginPath();
  g.moveTo(-w * 0.56, hh * 0.14);
  g.bezierCurveTo(-w * 0.43, -hh * 0.52, w * 0.18, -hh * 0.7, w * 0.56, -hh * 0.22 + oy);
  g.lineTo(w * 0.72, -hh * 0.4 + oy);
  g.bezierCurveTo(w * 0.22, -hh * 0.9, -w * 0.5, -hh * 0.68, -w * 0.56, hh * 0.14);
  g.fill();
  for (const [a, b, c] of [[0.5, -0.3, 0.7], [0.4, -0.5, 0.56]] as const) {
    g.beginPath(); g.moveTo(w * a, hh * b + oy); g.lineTo(w * (c + 0.04), hh * (b - 0.2) + oy); g.lineTo(w * (a - 0.1), hh * (b - 0.08) + oy); g.fill();
  }
  if (lid > 0) g.translate(0, -lid);
  g.strokeStyle = st.lash;
  g.globalAlpha = 0.75;
  g.lineWidth = hh * 0.022;
  g.beginPath(); g.moveTo(w * 0.48, hh * 0.2); g.quadraticCurveTo(w * 0.36, hh * 0.42, w * 0.08, hh * 0.49); g.stroke();
  for (let i = 0; i < (st.lowerLash ?? 0); i++) { const u = 0.42 - i * 0.13; g.beginPath(); g.moveTo(w * u, hh * (0.31 + i * 0.07)); g.lineTo(w * (u + 0.07), hh * (0.44 + i * 0.07)); g.stroke(); }
  g.globalAlpha = 1;
  g.strokeStyle = 'rgba(170,100,100,0.5)';
  g.lineWidth = hh * 0.02;
  g.beginPath(); g.moveTo(-w * 0.3, -hh * 0.72); g.quadraticCurveTo(w * 0.12, -hh * 0.96, w * 0.5, -hh * 0.62 + oy); g.stroke();
  g.restore();
}

function draw(st: FaceStyle, ex: Expr) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d')!, C = S / 2;
  g.fillStyle = st.skin;
  g.fillRect(0, 0, S, S);
  // 刘海在额头上的影子，以及两颊向后转过去的暗一点
  const top = g.createLinearGradient(0, 0, 0, S * 0.44);
  top.addColorStop(0, 'rgba(196,118,120,0.5)'); top.addColorStop(0.7, 'rgba(196,118,120,0.16)'); top.addColorStop(1, 'rgba(196,118,120,0)');
  g.fillStyle = top;
  g.fillRect(0, 0, S, S * 0.44);
  for (const s of [0, 1]) {
    const e = g.createLinearGradient(s ? S : 0, 0, s ? S * 0.8 : S * 0.2, 0);
    e.addColorStop(0, 'rgba(200,120,120,0.3)'); e.addColorStop(1, 'rgba(200,120,120,0)');
    g.fillStyle = e;
    g.fillRect(s ? S * 0.8 : 0, 0, S * 0.2, S);
  }
  // 两眼之间留出大约一只眼睛的宽度：靠得太近会显得脸挤
  const ew = S * (st.eyeW ?? 0.232), eh = S * (st.eyeH ?? 0.232), ey = S * 0.598, ex0 = S * 0.226;
  for (const s of [-1, 1]) {
    // 腮红：一团柔和的粉色加三道斜线
    const bx = C + s * S * 0.275, by = ey + S * 0.128;
    const bl = g.createRadialGradient(bx, by, 4, bx, by, S * 0.1);
    bl.addColorStop(0, st.blush ?? 'rgba(255,128,140,0.45)');
    bl.addColorStop(1, 'rgba(255,128,140,0)');
    g.fillStyle = bl;
    g.fillRect(0, 0, S, S);
    g.strokeStyle = 'rgba(245,110,125,0.5)';
    g.lineWidth = 3.5;
    g.lineCap = 'round';
    for (let i = -1; i <= 1; i++) { g.beginPath(); g.moveTo(bx + i * 20 - 7, by + 9); g.lineTo(bx + i * 20 + 7, by - 9); g.stroke(); }
    // 画面左侧(s=-1)是角色的右眼
    eye(g, C + s * ex0, ey, ew, eh, s, st, s < 0 ? st.irisR ?? st.iris : st.iris, ex);
    // 眉毛：内粗外细
    const byb = ey - eh * 0.9, ang = ex === 'fierce' ? 0.14 : ex === 'hurt' ? -0.12 : 0;
    const x0 = C + s * (ex0 - ew * 0.44), x1 = C + s * (ex0 + ew * 0.52), xm = C + s * ex0;
    g.fillStyle = st.brow;
    g.beginPath();
    g.moveTo(x0, byb + eh * ang - 6);
    g.quadraticCurveTo(xm, byb - eh * 0.15 - 5, x1, byb - eh * ang * 0.7 + 2);
    g.quadraticCurveTo(xm, byb - eh * 0.15 + 5, x0, byb + eh * ang + 6);
    g.fill();
  }
  // 下颌的阴影：越靠近下巴越深一点，脸才有立体感
  const jawG = g.createLinearGradient(0, S * 0.84, 0, S);
  jawG.addColorStop(0, 'rgba(206,126,120,0)'); jawG.addColorStop(1, 'rgba(206,126,120,0.34)');
  g.fillStyle = jawG;
  g.fillRect(0, S * 0.84, S, S * 0.16);
  // 鼻子：一小撇影子加一点高光
  g.strokeStyle = 'rgba(205,120,110,0.8)';
  g.lineWidth = 5;
  g.lineCap = 'round';
  g.beginPath(); g.moveTo(C + 2, S * 0.722); g.quadraticCurveTo(C + 9, S * 0.735, C + 3, S * 0.745); g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.55)';
  g.beginPath(); g.arc(C - 6, S * 0.727, 5, 0, TAU); g.fill();
  // 嘴
  const my = S * 0.822, m = st.mouth ?? 'smile';
  g.strokeStyle = '#a44c56';
  g.lineWidth = 6.5;
  g.beginPath();
  if (ex === 'fierce' || ex === 'hurt' || m === 'fang') {
    const open = ex === 'hurt' ? 18 : ex === 'fierce' ? 30 : 26, mw = m === 'fang' && ex === 'neutral' ? 58 : 34;
    g.fillStyle = '#8a3644';
    g.moveTo(C - mw, my - 6);
    g.quadraticCurveTo(C, my + 4, C + mw, my - 6);
    g.quadraticCurveTo(C, my + open * 2, C - mw, my - 6);
    g.fill();
    g.fillStyle = '#f08a96';
    g.beginPath(); g.ellipse(C, my + open * 0.72, mw * 0.5, open * 0.3, 0, 0, TAU); g.fill();
    if (m === 'fang') { g.fillStyle = '#fff'; g.beginPath(); g.moveTo(C + mw * 0.42, my - 3); g.lineTo(C + mw * 0.58, my + 18); g.lineTo(C + mw * 0.74, my - 4); g.fill(); }
  } else if (m === 'cat') {
    g.moveTo(C - 40, my - 6); g.quadraticCurveTo(C - 20, my + 16, C, my - 2); g.quadraticCurveTo(C + 20, my + 16, C + 40, my - 6); g.stroke();
  } else if (m === 'flat') {
    g.moveTo(C - 24, my); g.quadraticCurveTo(C, my + 5, C + 24, my); g.stroke();
  } else {
    g.moveTo(C - 32, my - 4); g.quadraticCurveTo(C, my + 16, C + 32, my - 4); g.stroke();
  }
  // 下唇：一抹唇色、一点高光，再加唇下的影子
  if (st.lip && m !== 'fang' && (ex === 'neutral' || ex === 'blink')) {
    g.fillStyle = st.lip;
    g.globalAlpha = 0.6;
    g.beginPath(); g.ellipse(C, my + 9, 22, 11, 0, 0, Math.PI); g.fill();
    g.globalAlpha = 1;
    g.fillStyle = 'rgba(255,255,255,0.75)';
    g.beginPath(); g.ellipse(C + 6, my + 13, 6, 2.6, 0, 0, TAU); g.fill();
  }
  g.fillStyle = 'rgba(210,125,120,0.35)';
  g.beginPath(); g.ellipse(C, my + 32, 20, 5, 0, 0, TAU); g.fill();
  return cv;
}

export function faceTextures(st: FaceStyle) {
  const out = {} as Record<Expr, THREE.CanvasTexture>;
  const canv = {} as Record<Expr, HTMLCanvasElement>;
  for (const e of ['neutral', 'blink', 'fierce', 'hurt'] as Expr[]) {
    canv[e] = draw(st, e);
    const t = new THREE.CanvasTexture(canv[e]);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    out[e] = t;
  }
  return { tex: out, portrait: canv.neutral };
}
