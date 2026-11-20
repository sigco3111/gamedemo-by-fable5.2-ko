import * as THREE from 'three';
import { paint, xf, merge, lathe, blob } from '../render/geoutil';
import { saturate } from '../core/math';
import { toon } from '../render/toon';
import { HOUSES, houseGround } from './layout';
import type { Colliders } from './colliders';
import * as L from '../char/logos';

type V3 = [number, number, number];
type Draw = (g: CanvasRenderingContext2D) => void;
type C = THREE.ColorRepresentation;
const FONT = '"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Microsoft YaHei", sans-serif';

/** 圆形徽章贴图：一圈边、一块底，中间画标志 */
function plaqueTex(draw: Draw, bg: string, rim: string) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const g = cv.getContext('2d')!;
  g.fillStyle = rim; g.beginPath(); g.arc(128, 128, 127, 0, 7); g.fill();
  g.fillStyle = bg; g.beginPath(); g.arc(128, 128, 112, 0, 7); g.fill();
  g.translate(128, 128); g.scale(190, 190);
  draw(g);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
/** 横匾贴图：左边标志，右边公司名 */
function boardTex(text: string, draw: Draw | null, bg: string, fg: string) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 160;
  const g = cv.getContext('2d')!;
  g.fillStyle = bg; g.fillRect(0, 0, 512, 160);
  g.strokeStyle = fg; g.globalAlpha = 0.55; g.lineWidth = 5; g.strokeRect(9, 9, 494, 142); g.globalAlpha = 1;
  if (draw) { g.save(); g.translate(86, 80); g.scale(118, 118); draw(g); g.restore(); }
  g.fillStyle = fg;
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  let size = 76;
  g.font = `700 ${size}px ${FONT}`;
  const room = draw ? 330 : 460;
  while (g.measureText(text).width > room && size > 30) { size -= 4; g.font = `700 ${size}px ${FONT}`; }
  g.fillText(text, draw ? 325 : 256, 84);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** 搭房子用的零件箱。所有坐标都是房子的本地坐标：原点在地面中心，门朝 +z。 */
class Kit {
  solid: THREE.BufferGeometry[] = [];
  lit: THREE.BufferGeometry[] = [];
  signs: THREE.Mesh[] = [];
  /** 烟囱（或塔顶）的位置：代码字符从这里飘出来 */
  chimney = new THREE.Vector3(0, 6, 0);
  /** 门前的站位 */
  doorPos = new THREE.Vector3(0, 0, 5);
  boxes: [number, number, number, number, number][] = [];
  cyls: [number, number, number, number][] = [];

  add(g: THREE.BufferGeometry, c: C, p?: V3 | null, r?: V3 | null, s?: number | V3 | null, glow = false) {
    paint(xf(g, p, r, s), c);
    (glow ? this.lit : this.solid).push(g);
    return this;
  }
  box(w: number, h: number, d: number, c: C, p: V3, r?: V3) { return this.add(new THREE.BoxGeometry(w, h, d), c, p, r); }
  cyl(r0: number, r1: number, h: number, c: C, p: V3, seg = 14) { return this.add(new THREE.CylinderGeometry(r0, r1, h, seg), c, p); }
  glow(w: number, h: number, d: number, c: C, p: V3, r?: V3) { return this.add(new THREE.BoxGeometry(w, h, d), c, p, r, null, true); }
  /** 在 fn 里搭的东西整体绕竖轴转 ry 再挪到 p（用来往侧墙上装窗户之类） */
  group(p: V3, ry: number, fn: () => void) {
    const a = this.solid.length, b = this.lit.length, c = this.signs.length;
    fn();
    const m = new THREE.Matrix4().makeRotationY(ry).setPosition(p[0], p[1], p[2]);
    for (const g of [...this.solid.slice(a), ...this.lit.slice(b)]) g.applyMatrix4(m);
    for (const s of this.signs.slice(c)) { s.position.applyMatrix4(m); s.rotation.y += ry; }
  }
  /** 人字屋顶：屋脊沿前后方向，山墙朝前。y 是檐口高度，h 是屋脊比檐口高多少 */
  gable(w: number, d: number, h: number, over: number, roof: C, wall: C, y: number) {
    const a = Math.atan2(h, w / 2), run = w / 2 + over, len = run / Math.cos(a), t = 0.18;
    for (const s of [1, -1]) this.box(len, t, d + over * 2, roof, [s * (run / 2 + Math.sin(a) * t * 0.5), y + h - (run / 2) * Math.tan(a) + Math.cos(a) * t * 0.5, 0], [0, 0, -s * a]);
    this.box(0.34, 0.22, d + over * 2 + 0.1, roof, [0, y + h + 0.1, 0]);
    // 一排排瓦垄
    const dark = new THREE.Color(roof).multiplyScalar(0.8), nx = Math.sin(a), ny = Math.cos(a);
    for (const s of [1, -1]) for (let i = 1; i <= 6; i++) {
      const f = i / 6.4;
      this.box(0.1, 0.07, d + over * 2 + 0.02, dark, [s * (run * f + nx * (t + 0.02)), y + h - run * f * Math.tan(a) + ny * (t + 0.02), 0], [0, 0, -s * a]);
    }
    const tri = new THREE.Shape([new THREE.Vector2(-w / 2, 0), new THREE.Vector2(w / 2, 0), new THREE.Vector2(0, h)]);
    for (const z of [d / 2 - 0.2, -d / 2]) this.add(new THREE.ExtrudeGeometry(tri, { depth: 0.2, bevelEnabled: false }), wall, [0, y, z]);
  }
  /** 四坡屋顶（金字塔形） */
  hip(w: number, d: number, h: number, over: number, c: C, y: number) {
    this.add(new THREE.ConeGeometry(1, h, 4, 1).rotateY(Math.PI / 4), c, [0, y + h / 2, 0], null, [(w + over * 2) / 1.4142, 1, (d + over * 2) / 1.4142]);
  }
  /** 中式屋顶：四角上翘、坡面内凹 */
  pagoda(w: number, d: number, h: number, c: C, y: number) {
    const prof: [number, number][] = [[1.0, 0.14], [0.93, 0.0], [0.7, 0.15], [0.42, 0.5], [0.13, 0.95], [0.0, 1.0]];
    this.add(lathe(prof.map(([r, v]) => [r, v] as [number, number]), 4).rotateY(Math.PI / 4), c, [0, y, 0], null, [w / 1.4142, h, d / 1.4142]);
  }
  /** 圆顶上的棱线 */
  ribs(r: number, sy: number, c: C, p: V3, n = 4) {
    for (let i = 0; i < n; i++) this.add(new THREE.TorusGeometry(r, 0.06, 5, 20, Math.PI).rotateY((i / n) * Math.PI), c, p, null, [1, sy, 1]);
  }
  bush(p: V3, s = 1, seed = 1) {
    const lo = new THREE.Color('#3f8d3f'), hi = new THREE.Color('#8fd15b');
    this.solid.push(paint(xf(blob(0.6, 1, 0.14, seed), p, null, [s, s * 0.78, s]), (v, n, o) => o.copy(lo).lerp(hi, saturate(((v.y - p[1]) / (0.5 * s)) * 0.5 + 0.4 + n.y * 0.3))));
  }
  flowers(p: V3, cols: string[], n = 7, spread = 0.7) {
    for (let i = 0; i < n; i++) {
      const a = i * 2.4, r = spread * Math.sqrt((i + 0.5) / n), x = p[0] + Math.cos(a) * r, z = p[2] + Math.sin(a) * r, h = 0.28 + (i % 3) * 0.08;
      this.box(0.03, h, 0.03, '#4d8f3c', [x, p[1] + h / 2, z]);
      this.add(new THREE.SphereGeometry(0.085, 7, 5), cols[i % cols.length], [x, p[1] + h + 0.04, z], null, [1, 0.7, 1]);
    }
  }
  /** 房前屋后的花草：两侧一排灌木，门两边各一丛花，门前几块踏脚石 */
  garden(hw: number, hd: number, cols: string[], doorX = 0, y = 0) {
    for (const s of [-1, 1]) {
      for (let i = 0; i < 3; i++) this.bush([s * (hw + 0.9), y + 0.3, -hd * 0.6 + i * hd * 0.6], 0.9 + ((i * 7 + (s + 1) * 2) % 3) * 0.15, i * 3 + s);
      this.flowers([doorX + s * 2.3, y + 0.02, hd + 1.3], cols);
      this.flowers([s * (hw + 0.4), y + 0.02, hd + 0.9], cols, 5, 0.5);
    }
    for (let i = 0; i < 4; i++) this.cyl(0.42, 0.46, 0.08, '#b9b3a4', [doorX + ((i % 2) - 0.5) * 0.35, y + 0.05, hd + 1.7 + i * 1.05], 9);
  }
  dome(r: number, c: C, p: V3, sy = 1) { return this.add(new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), c, p, null, [1, sy, 1]); }
  /** 单坡屋顶下面的楔形山墙：后面高 0，前面高 h */
  wedge(w: number, d: number, h: number, c: C, p: V3) {
    const g = new THREE.BufferGeometry(), x = w / 2, z = d / 2;
    const v = [[-x, 0, -z], [x, 0, -z], [x, 0, z], [-x, 0, z], [x, h, z], [-x, h, z]];
    const f = [0, 1, 2, 0, 2, 3, 3, 2, 4, 3, 4, 5, 0, 5, 4, 0, 4, 1, 1, 4, 2, 0, 3, 5];
    g.setAttribute('position', new THREE.Float32BufferAttribute(f.flatMap((i) => v[i]), 3));
    g.computeVertexNormals();
    return this.add(g, c, p);
  }
  /** 窗：窗框、会在夜里亮起来的玻璃、十字窗棂。p 是窗的中心，贴在墙面上 */
  window(w: number, h: number, p: V3, ry: number, frame: C, pane: C = '#ffe2a0') {
    this.group(p, ry, () => {
      this.box(w + 0.2, h + 0.2, 0.12, frame, [0, 0, 0]);
      this.glow(w, h, 0.15, pane, [0, 0, 0]);
      this.box(0.07, h, 0.18, frame, [0, 0, 0]);
      this.box(w, 0.07, 0.18, frame, [0, 0, 0]);
      this.box(w + 0.36, 0.1, 0.26, frame, [0, -h / 2 - 0.14, 0.05]);
    });
  }
  /** 门：门框、门板、把手。p 是门底边的中心 */
  door(w: number, h: number, p: V3, ry: number, c: C, frame: C) {
    this.group(p, ry, () => {
      this.box(w + 0.3, h + 0.16, 0.16, frame, [0, h / 2 + 0.08, 0]);
      this.box(w, h, 0.2, c, [0, h / 2, 0]);
      this.add(new THREE.SphereGeometry(0.06, 8, 6), '#e0b24c', [w * 0.34, h * 0.48, 0.13]);
    });
  }
  /** 圆徽：一块圆牌子，上面画着标志 */
  medallion(draw: Draw, r: number, p: V3, ry: number, bg: string, rim: string) {
    this.group(p, ry, () => {
      this.add(new THREE.CylinderGeometry(r * 1.04, r * 1.04, 0.1, 28).rotateX(Math.PI / 2), rim, [0, 0, -0.06]);
      const m = new THREE.Mesh(new THREE.CircleGeometry(r, 32), toon({ map: plaqueTex(draw, bg, rim), grad: 'soft' }));
      this.signs.push(m);
    });
  }
  /** 方牌：整块牌子就是画出来的图案（Z 牌、星月之类） */
  tile(draw: Draw, size: number, p: V3, ry: number) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 256;
    const g = cv.getContext('2d')!;
    g.translate(128, 128); g.scale(250, 250);
    draw(g);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    const mat = toon({ map: t, grad: 'soft' });
    mat.alphaTest = 0.5;
    this.group(p, ry, () => this.signs.push(new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat)));
  }
  /** 横匾：公司名加标志 */
  sign(text: string, draw: Draw | null, w: number, p: V3, ry: number, bg: string, fg: string) {
    const h = (w * 160) / 512;
    this.group(p, ry, () => {
      this.box(w + 0.14, h + 0.14, 0.1, fg, [0, 0, -0.06]);
      this.signs.push(new THREE.Mesh(new THREE.PlaneGeometry(w, h), toon({ map: boardTex(text, draw, bg, fg), grad: 'soft' })));
    });
  }
  lantern(p: V3, c: C = '#ffd98a') {
    this.box(0.12, 1.5, 0.12, '#3a3340', [p[0], p[1] + 0.75, p[2]]);
    this.glow(0.28, 0.32, 0.28, c, [p[0], p[1] + 1.66, p[2]]);
    this.box(0.38, 0.07, 0.38, '#3a3340', [p[0], p[1] + 1.86, p[2]]);
  }
  steps(w: number, z: number) {
    this.box(w, 0.16, 0.5, '#a59b8c', [0, 0.08, z + 0.25]);
    this.box(w + 0.3, 0.16, 0.5, '#a59b8c', [0, -0.06, z + 0.7]);
  }
}

// ======================= 八种房子 =======================
/** Anthropic：木骨架的书屋，橙红瓦顶，山墙上嵌着放射花徽 */
function cottage(k: Kit) {
  const W = 8.4, D = 6.6, H = 3.3, y0 = 0.3, cream = '#f3e9d6', wood = '#5a3e2a', roof = '#d8693a';
  k.box(W + 0.7, 0.7, D + 0.7, '#a59b8c', [0, -0.05, 0]);
  k.box(W, H, D, cream, [0, y0 + H / 2, 0]);
  for (const x of [-W / 2, W / 2]) for (const z of [-D / 2, D / 2]) k.box(0.28, H, 0.28, wood, [x, y0 + H / 2, z]);
  for (const z of [-D / 2, D / 2]) { k.box(W, 0.22, 0.22, wood, [0, y0 + H - 0.1, z]); k.box(W, 0.16, 0.2, wood, [0, y0 + 1.25, z]); }
  for (const x of [-W / 2, W / 2]) k.box(0.22, 0.22, D, wood, [x, y0 + H - 0.1, 0]);
  for (const s of [-1, 1]) k.box(0.14, 2.3, 0.2, wood, [s * 3.45, y0 + 2.3, D / 2], [0, 0, s * 0.5]);
  k.gable(W, D, 2.9, 0.6, roof, cream, y0 + H);
  k.door(1.15, 2.1, [0, y0, D / 2], 0, '#7a4a2a', wood);
  for (const x of [-2.5, 2.5]) k.window(1.1, 1.2, [x, y0 + 2.05, D / 2 + 0.02], 0, wood);
  for (const s of [-1, 1]) for (const z of [-1.5, 1.5]) k.window(1.0, 1.1, [s * (W / 2 + 0.02), y0 + 2.0, z], (s * Math.PI) / 2, wood);
  k.box(0.85, 2.7, 0.85, '#b05a3c', [2.4, y0 + H + 2.0, -1.5]);
  k.box(1.0, 0.2, 1.0, '#8a4630', [2.4, y0 + H + 3.4, -1.5]);
  k.chimney.set(2.4, y0 + H + 3.7, -1.5);
  k.medallion(L.claudeFlower, 0.82, [0, y0 + H + 1.2, D / 2 + 0.08], 0, '#fff6e6', '#d9a441');
  k.sign('Anthropic', (g) => L.claudeSpark(g), 2.7, [0, y0 + 2.62, D / 2 + 0.2], 0, '#6a4630', '#ffe9c8');
  ([['#c8323c', 0], ['#2f6fb8', 0.25], ['#e0b24c', -0.18], ['#3f8f5a', 0.1]] as [string, number][]).forEach(([c, r], i) => k.box(0.62, 0.15, 0.46, c, [-1.7, y0 + 0.075 + i * 0.15, D / 2 + 0.7], [0, r, 0]));
  for (const s of [-1, 1]) k.lantern([s * 1.25, y0, D / 2 + 0.4]);
  k.steps(1.8, D / 2 + 0.35);
  k.garden(W / 2, D / 2, ['#ff8a3c', '#ffd24a', '#ffffff']);
  k.boxes.push([0, 0, W / 2, D / 2, y0 + H + 1.5]);
  k.doorPos.set(0, 0, D / 2 + 2);
}
/** OpenAI：白色圆顶屋，门廊上方挂着绳结徽 */
function domeHouse(k: Kit) {
  const R = 4.4, H = 3.2, y0 = 0.3, white = '#f6f5fb', lav = '#cbc3ee', silver = '#b8b5cf';
  k.cyl(R + 0.4, R + 0.5, 0.7, '#b9b6c9', [0, -0.05, 0], 32);
  k.cyl(R, R, H, white, [0, y0 + H / 2, 0], 32);
  k.cyl(R + 0.12, R + 0.12, 0.3, lav, [0, y0 + H - 0.1, 0], 32);
  k.cyl(R + 0.08, R + 0.08, 0.2, lav, [0, y0 + 0.6, 0], 32);
  k.dome(R + 0.1, '#f1eff8', [0, y0 + H + 0.05, 0], 0.82);
  k.ribs(R + 0.13, 0.82, lav, [0, y0 + H + 0.05, 0], 4);
  k.cyl(1.0, 1.0, 0.7, white, [0, y0 + H + 3.8, 0], 18);
  k.dome(1.06, lav, [0, y0 + H + 4.15, 0], 0.9);
  k.cyl(0.045, 0.045, 1.5, silver, [0, y0 + H + 5.7, 0], 6);
  k.add(new THREE.SphereGeometry(0.17, 10, 8), '#f1edff', [0, y0 + H + 6.5, 0], null, null, true);
  k.chimney.set(0, y0 + H + 6.8, 0);
  k.box(2.7, 3.0, 1.2, white, [0, y0 + 1.5, R + 0.1]);
  k.box(3.0, 0.26, 1.5, lav, [0, y0 + 3.1, R + 0.15]);
  k.door(1.2, 2.2, [0, y0, R + 0.7], 0, '#8f88b8', silver);
  k.box(1.9, 1.75, 1.5, white, [0, y0 + 4.1, R - 0.3]);
  k.box(2.2, 0.18, 1.7, lav, [0, y0 + 5.05, R - 0.25]);
  k.medallion((g) => L.gptKnot(g), 0.72, [0, y0 + 4.1, R + 0.52], 0, '#3d3a52', silver);
  k.sign('OpenAI', (g) => L.gptKnot(g, '#3d3a52', '#3d3a52'), 2.3, [0, y0 + 2.64, R + 0.76], 0, '#f6f5fb', '#3d3a52');
  for (let i = 1; i < 8; i++) { const a = (i / 8) * Math.PI * 2; k.window(0.9, 1.3, [Math.sin(a) * (R + 0.02), y0 + 1.95, Math.cos(a) * (R + 0.02)], a, silver, '#e9e4ff'); }
  for (const s of [-1, 1]) k.lantern([s * 1.7, y0, R + 1.2], '#e9e4ff');
  k.steps(2.0, R + 0.75);
  k.garden(R, R + 0.75, ['#cbc3ee', '#ffffff', '#9fd0ff']);
  k.cyls.push([0, 0, R + 0.3, y0 + H + 2.5]);
  k.doorPos.set(0, 0, R + 2.6);
}
/** DeepSeek：湖畔的蓝色木屋，带一座灯塔和伸向湖里的栈桥 */
function lakeHouse(k: Kit) {
  const W = 7.6, D = 6, H = 3.0, y0 = 0.3, navy = '#2c3f8f', blue = '#3f66cc', white = '#f4f7ff', wood = '#8a6a48';
  k.box(W + 0.7, 0.7, D + 0.7, '#9aa3b8', [0, -0.05, 0]);
  k.box(W, H, D, navy, [0, y0 + H / 2, 0]);
  for (const x of [-W / 2, W / 2]) for (const z of [-D / 2, D / 2]) k.box(0.26, H, 0.26, white, [x, y0 + H / 2, z]);
  for (const y of [0.9, 1.7, 2.5]) for (const z of [-D / 2, D / 2]) k.box(W, 0.05, 0.06, '#3a52a8', [0, y0 + y, z + Math.sign(z) * 0.02]);
  k.box(W + 0.1, 0.2, D + 0.1, white, [0, y0 + H - 0.1, 0]);
  k.gable(W, D, 2.4, 0.55, blue, navy, y0 + H);
  k.door(1.1, 2.1, [0, y0, D / 2], 0, white, '#3a52a8');
  for (const x of [-2.4, 2.4]) k.window(1.1, 1.2, [x, y0 + 1.9, D / 2 + 0.02], 0, white, '#bfe6ff');
  for (const z of [-1.4, 1.4]) k.window(1.0, 1.1, [-(W / 2 + 0.02), y0 + 1.9, z], -Math.PI / 2, white, '#bfe6ff');
  k.medallion((g) => L.whale(g), 0.8, [0, y0 + H + 1.05, D / 2 + 0.08], 0, '#ffffff', blue);
  k.sign('DeepSeek', (g) => L.whale(g, '#ffffff', '#bfd4ff'), 2.7, [0, y0 + 2.62, D / 2 + 0.2], 0, '#232a5e', '#ffffff');
  // 灯塔
  const tx = W / 2 + 1.5, tz = -0.8;
  k.cyl(1.3, 1.6, 8.6, white, [tx, y0 + 4.3, tz], 20);
  for (const y of [1.6, 4.2, 6.8]) k.cyl(1.31 + (8.6 - y - 0.45) * 0.035 + 0.02, 1.31 + (8.6 - y + 0.45) * 0.035 + 0.02, 0.9, blue, [tx, y0 + y, tz], 20);
  k.cyl(1.75, 1.75, 0.2, navy, [tx, y0 + 8.7, tz], 20);
  k.add(new THREE.CylinderGeometry(0.95, 0.95, 1.2, 14), '#fff3b0', [tx, y0 + 9.4, tz], null, null, true);
  k.add(new THREE.ConeGeometry(1.35, 1.3, 14), navy, [tx, y0 + 10.65, tz]);
  k.chimney.set(tx, y0 + 11.4, tz);
  // 栈桥
  k.box(9, 0.18, 1.7, wood, [W / 2 + 5.4, 0.3, 2.3]);
  for (let i = 0; i < 5; i++) for (const s of [-1, 1]) k.cyl(0.12, 0.12, 4.8, '#6a5038', [W / 2 + 1.6 + i * 1.9, -1.7, 2.3 + s * 0.75], 6);
  // 栈桥尽头拴着一条小船（这间屋的地面比水面高 1.5 米）
  k.add(new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), '#8a5a34', [W / 2 + 8.6, -1.3, 4.0], [0, 0.25, 0], [1.6, 0.6, 0.62]);
  k.box(0.9, 0.06, 1.0, '#c9a06a', [W / 2 + 8.6, -1.42, 4.0], [0, 0.25, 0]);
  k.garden(W / 2, D / 2, ['#ffffff', '#9fd0ff', '#58b0ff']);
  for (const s of [-1, 1]) k.lantern([s * 1.2, y0, D / 2 + 0.4], '#bfe6ff');
  k.steps(1.8, D / 2 + 0.35);
  k.boxes.push([0, 0, W / 2, D / 2, y0 + H + 1.3], [W / 2 + 5.4, 2.3, 4.5, 0.85, 0.4]);
  k.cyls.push([tx, tz, 1.7, y0 + 9]);
  k.doorPos.set(0, 0, D / 2 + 2);
}
/** 智谱 Z.ai：黑白两层的方屋，门前一座黑色的门和两只狐狸石像 */
function shrine(k: Kit) {
  const y0 = 0.3, white = '#f2f2f5', black = '#1c1c22', gray = '#8d8d9b', blue = '#9fc0ff';
  k.box(9, 0.7, 7.4, '#9a9aa6', [0, -0.05, 0]);
  k.box(8, 3.2, 6.4, white, [0, y0 + 1.6, 0]);
  for (const x of [-4, -1.4, 1.4, 4]) for (const z of [-3.2, 3.2]) k.box(0.24, 3.2, 0.24, black, [x, y0 + 1.6, z]);
  k.box(8.1, 0.2, 6.5, black, [0, y0 + 0.5, 0]);
  k.box(9.6, 0.3, 8.0, black, [0, y0 + 3.35, 0]);
  k.box(9.7, 0.08, 8.1, white, [0, y0 + 3.16, 0]);
  k.box(5, 2.5, 4, black, [0, y0 + 4.75, 0]);
  k.box(6.4, 0.28, 5.4, black, [0, y0 + 6.14, 0]);
  k.box(6.5, 0.08, 5.5, white, [0, y0 + 5.96, 0]);
  k.tile((g) => L.zBadge(g), 1.9, [0, y0 + 4.75, 2.03], 0);
  k.door(1.7, 2.3, [0, y0, 3.2], 0, black, gray);
  for (const x of [-0.42, 0.42]) k.box(0.05, 2.1, 0.24, white, [x, y0 + 1.15, 3.2]);
  for (const x of [-2.7, 2.7]) k.window(0.8, 1.9, [x, y0 + 1.75, 3.22], 0, black, blue);
  for (const s of [-1, 1]) for (const z of [-1.5, 1.5]) k.window(0.8, 1.9, [s * 4.02, y0 + 1.75, z], (s * Math.PI) / 2, black, blue);
  k.sign('즈푸 Z.ai', null, 2.6, [0, y0 + 2.78, 3.32], 0, '#15151b', '#ffffff');
  // 门前的门
  for (const s of [-1, 1]) k.cyl(0.17, 0.2, 3.6, black, [s * 1.9, 1.8, 6.4], 10);
  k.box(5.0, 0.24, 0.34, black, [0, 3.55, 6.4]);
  k.box(5.3, 0.1, 0.4, white, [0, 3.72, 6.4]);
  k.box(4.2, 0.18, 0.26, black, [0, 2.95, 6.4]);
  // 狐狸石像
  for (const s of [-1, 1]) {
    k.box(0.75, 0.5, 0.75, gray, [s * 2.9, 0.25, 5.2]);
    k.add(new THREE.SphereGeometry(1, 10, 8), white, [s * 2.9, 0.92, 5.15], null, [0.26, 0.42, 0.32]);
    k.add(new THREE.SphereGeometry(0.2, 10, 8), white, [s * 2.9, 1.48, 5.3]);
    k.add(new THREE.ConeGeometry(0.1, 0.2, 5), white, [s * 2.9, 1.42, 5.5], [1.57, 0, 0]);
    for (const e of [-1, 1]) k.add(new THREE.ConeGeometry(0.08, 0.24, 4), black, [s * 2.9 + e * 0.11, 1.72, 5.25]);
    k.add(new THREE.SphereGeometry(1, 8, 6), white, [s * 2.9, 0.86, 4.8], [0.6, 0, 0], [0.13, 0.36, 0.13]);
  }
  for (const s of [-1, 1]) k.lantern([s * 1.4, y0, 3.7], '#cfe0ff');
  k.steps(2.2, 3.55);
  k.chimney.set(0, y0 + 6.6, 0);
  k.garden(4, 3.2, ['#ffffff', '#cfd4e6', '#9fc0ff']);
  k.boxes.push([0, 0, 4, 3.2, y0 + 5]);
  k.cyls.push([1.9, 6.4, 0.25, 3.6], [-1.9, 6.4, 0.25, 3.6], [2.9, 5.2, 0.45, 1.7], [-2.9, 5.2, 0.45, 1.7]);
  k.doorPos.set(0, 0, 4.9);
}
/** 月之暗面：深蓝色的天文台，银色圆顶上立着一弯月亮 */
function observatory(k: Kit) {
  const y0 = 0.3, navy = '#252a66', silver = '#c9cbe2', R = 3.3, H = 5.2;
  k.cyl(R + 0.5, R + 0.6, 0.7, '#8f93b4', [0, -0.05, 0], 28);
  k.cyl(R, R + 0.15, H, navy, [0, y0 + H / 2, 0], 28);
  for (const y of [0.5, 2.9, H - 0.1]) k.cyl(R + 0.14, R + 0.14, 0.2, silver, [0, y0 + y, 0], 28);
  k.dome(R + 0.06, silver, [0, y0 + H, 0], 0.95);
  k.ribs(R + 0.09, 0.95, '#a9acc8', [0, y0 + H, 0], 3);
  k.box(0.95, 2.6, 2.2, '#20203a', [0, y0 + H + 1.75, 1.75], [-0.72, 0, 0]);
  k.add(new THREE.CylinderGeometry(0.26, 0.3, 2.8, 12), '#3a3f6e', [0, y0 + H + 2.4, 2.1], [-0.85, 0, 0]);
  k.add(new THREE.CylinderGeometry(0.25, 0.25, 0.08, 12), '#bfe6ff', [0, y0 + H + 3.34, 3.16], [-0.85, 0, 0], null, true);
  k.add(new THREE.TorusGeometry(0.62, 0.1, 6, 20, 4.0).rotateZ(0.95), '#ffe9a0', [0, y0 + H + R + 0.8, 0], null, null, true);
  k.cyl(0.04, 0.04, 0.5, silver, [0, y0 + H + R + 0.1, 0], 6);
  k.chimney.set(0, y0 + H + R + 1.7, 0);
  k.box(1.9, 2.7, 0.9, navy, [0, y0 + 1.35, R + 0.2]);
  k.box(2.2, 0.22, 1.2, silver, [0, y0 + 2.8, R + 0.25]);
  k.door(1.1, 2.1, [0, y0, R + 0.66], 0, '#3a3f8a', silver);
  k.medallion((g) => L.kBadge(g, true), 0.7, [0, y0 + 3.75, R + 0.12], 0, '#12142a', silver);
  for (const a of [1.15, -1.15, 2.2, -2.2]) k.tile(L.moonStars, 1.7, [Math.sin(a) * (R + 0.14), y0 + 3.9, Math.cos(a) * (R + 0.14)], a);
  for (const a of [0.8, -0.8, 2.4, -2.4, Math.PI]) k.window(0.7, 1.0, [Math.sin(a) * (R + 0.1), y0 + 1.8, Math.cos(a) * (R + 0.1)], a, silver, '#dfe9ff');
  // 侧屋
  k.box(4, 2.8, 4, navy, [-R - 1.6, y0 + 1.4, 0.4]);
  k.group([-R - 1.6, 0, 0.4], 0, () => k.gable(4, 4, 1.7, 0.4, '#3a3f8a', navy, y0 + 2.8));
  k.window(1.0, 1.1, [-R - 1.6, y0 + 1.7, 2.42], 0, silver, '#dfe9ff');
  k.sign('Moonshot AI', (g) => L.kBadge(g, true), 2.5, [-R - 1.6, y0 + 3.05, 2.5], 0, '#1b2052', '#e6e9ff');
  for (const s of [-1, 1]) k.lantern([s * 1.4, y0, R + 1.2], '#dfe9ff');
  k.steps(1.7, R + 0.7);
  k.garden(R, R + 0.7, ['#bfe0ff', '#ffe9a0', '#ffffff']);
  k.cyls.push([0, 0, R + 0.3, y0 + H + 2]);
  k.boxes.push([-R - 1.6, 0.4, 2, 2, y0 + 3.6]);
  k.doorPos.set(0, 0, R + 2.5);
}
/** 阿里云：紫瓦金饰的两层楼阁，正面一个圆月门 */
function pavilion(k: Kit) {
  const y0 = 0.55, W = 7, H = 3.1, white = '#f7f3ff', purple = '#6257cf', dark = '#3a3390', gold = '#d6b46c';
  k.box(10, 1.0, 10, '#b9b3c8', [0, 0.05, 0]);
  k.box(W, H, W, white, [0, y0 + H / 2, 0]);
  for (const [x, z] of [[-4.1, -4.1], [-1.9, -4.1], [1.9, -4.1], [4.1, -4.1], [-4.1, 4.1], [-1.9, 4.1], [1.9, 4.1], [4.1, 4.1], [-4.1, 0], [4.1, 0]]) k.cyl(0.2, 0.22, H, dark, [x, y0 + H / 2, z], 10);
  k.box(W + 0.1, 0.24, W + 0.1, gold, [0, y0 + H - 0.14, 0]);
  k.pagoda(10.6, 10.6, 2.1, purple, y0 + H);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.add(new THREE.SphereGeometry(0.16, 8, 6), gold, [sx * 5.25, y0 + H + 0.36, sz * 5.25]);
  k.box(4, 1.6, 4, white, [0, y0 + H + 2.3, 0]);
  k.box(4.1, 0.18, 4.1, gold, [0, y0 + H + 3.0, 0]);
  k.pagoda(6.4, 6.4, 2.2, purple, y0 + H + 3.05);
  k.add(new THREE.SphereGeometry(0.26, 10, 8), gold, [0, y0 + H + 5.4, 0]);
  k.add(new THREE.ConeGeometry(0.1, 0.8, 6), gold, [0, y0 + H + 5.95, 0]);
  k.chimney.set(0, y0 + H + 6.6, 0);
  // 圆月门
  k.add(new THREE.TorusGeometry(1.15, 0.11, 6, 28), gold, [0, y0 + 1.3, W / 2 + 0.05]);
  k.add(new THREE.CircleGeometry(1.1, 28), '#3a3390', [0, y0 + 1.3, W / 2 + 0.03]);
  k.box(0.06, 2.1, 0.06, gold, [0, y0 + 1.3, W / 2 + 0.06]);
  for (const x of [-2.5, 2.5]) k.window(1.0, 1.5, [x, y0 + 1.7, W / 2 + 0.02], 0, dark, '#ffe6b0');
  for (const s of [-1, 1]) for (const z of [-1.7, 1.7]) k.window(1.0, 1.5, [s * (W / 2 + 0.02), y0 + 1.7, z], (s * Math.PI) / 2, dark, '#ffe6b0');
  k.medallion(L.qwenBadge, 0.72, [0, y0 + H + 2.3, 2.08], 0, '#5a5ae8', gold);
  k.sign('알리바바 클라우드 · 통이', L.qwenBadge, 3.1, [0, y0 + 2.86, W / 2 + 0.6], 0, '#3a3390', '#f3e3b0');
  // 檐角的灯笼
  for (const s of [-1, 1]) { k.box(0.03, 0.5, 0.03, gold, [s * 3.2, y0 + H - 0.5, 4.6]); k.add(new THREE.SphereGeometry(0.22, 10, 8), '#d9a6ff', [s * 3.2, y0 + H - 0.9, 4.6], null, [1, 1.25, 1], true); }
  k.box(2.4, 0.3, 0.6, '#a59bbc', [0, 0.4, 5.25]);
  k.box(2.8, 0.3, 0.6, '#a59bbc', [0, 0.12, 5.8]);
  k.garden(5, 5.2, ['#d9a6ff', '#f3e3b0', '#ffffff']);
  k.boxes.push([0, 0, 5, 5, 0.55], [0, 0, W / 2, W / 2, y0 + H + 3]);
  k.doorPos.set(0, 0.5, W / 2 + 3.2);
}
/** Google：白墙彩块的工作室，单坡屋顶上竖着一对猫耳，墙上是四角星 */
function studio(k: Kit) {
  const y0 = 0.3, W = 7.6, D = 6, H = 3.3, white = '#fafafa', blue = '#4285f4', red = '#ea4335', yellow = '#fbbc05', green = '#34a853', roof = '#6b7cf0';
  k.box(W + 0.7, 0.7, D + 0.7, '#b4b8c4', [0, -0.05, 0]);
  k.box(W, H, D, white, [0, y0 + H / 2, 0]);
  k.wedge(W, D, 1.5, white, [0, y0 + H, 0]);
  k.box(W + 1.1, 0.22, D + 1.3, roof, [0, y0 + H + 0.86, 0], [-0.245, 0, 0]);
  k.box(W + 1.1, 0.1, 0.3, '#8f6cf5', [0, y0 + H + 1.72, D / 2 + 0.62]);
  // 屋顶上的猫耳
  for (const s of [-1, 1]) {
    k.add(new THREE.ConeGeometry(0.85, 1.7, 4), '#5560e0', [s * 2.0, y0 + H + 2.4, D / 2 - 0.5], [0, Math.PI / 4, 0], [1, 1, 0.45]);
    k.add(new THREE.ConeGeometry(0.55, 1.15, 4), '#ffb0c8', [s * 2.0, y0 + H + 2.25, D / 2 - 0.32], [0, Math.PI / 4, 0], [1, 1, 0.3]);
  }
  [blue, red, yellow, green].forEach((c, i) => k.box(W / 4, 0.26, 0.08, c, [-W / 2 + W / 8 + (i * W) / 4, y0 + H - 0.13, D / 2 + 0.03]));
  [blue, red, yellow, green].forEach((c, i) => k.box(W / 4, 0.2, 0.08, c, [-W / 2 + W / 8 + (i * W) / 4, y0 + 0.5, D / 2 + 0.03]));
  k.door(1.15, 2.15, [1.4, y0, D / 2], 0, blue, '#d0d4de');
  k.box(2.0, 0.14, 1.0, red, [1.4, y0 + 2.5, D / 2 + 0.5], [0.16, 0, 0]);
  k.window(1.7, 1.3, [-1.9, y0 + 1.75, D / 2 + 0.02], 0, yellow, '#eaf3ff');
  for (const s of [-1, 1]) k.window(1.2, 1.2, [s * (W / 2 + 0.02), y0 + 1.8, 0], (s * Math.PI) / 2, yellow, '#eaf3ff');
  k.box(2.0, 0.4, 0.5, green, [-1.9, y0 + 0.75, D / 2 + 0.3]);
  for (let i = 0; i < 4; i++) k.add(new THREE.SphereGeometry(0.17, 8, 6), [red, yellow, blue, '#ffffff'][i], [-2.6 + i * 0.47, y0 + 1.05, D / 2 + 0.3]);
  k.tile(L.geminiStar, 1.9, [-1.6, y0 + H + 0.55, D / 2 + 0.04], 0);
  k.sign('Google', L.geminiStar, 2.3, [1.4, y0 + 3.05, D / 2 + 0.1], 0, '#ffffff', '#3c4043');
  // 风向标：一颗星
  k.cyl(0.04, 0.04, 1.8, '#d0d4de', [W / 2 - 0.6, y0 + H + 1.3, -D / 2 + 0.6], 6);
  k.add(new THREE.OctahedronGeometry(0.3), '#aee6ff', [W / 2 - 0.6, y0 + H + 2.4, -D / 2 + 0.6], null, [1, 1.5, 0.4], true);
  k.chimney.set(W / 2 - 0.6, y0 + H + 3.0, -D / 2 + 0.6);
  for (const [x, c] of [[-3.5, blue], [-3.0, red], [3.2, yellow], [3.7, green]] as [number, string][]) k.box(0.4, 0.4, 0.4, c, [x, y0 + 0.2, D / 2 + 0.9], [0, x, 0]);
  k.lantern([0.2, y0, D / 2 + 0.4], '#eaf3ff');
  k.steps(1.8, D / 2 + 0.35);
  k.garden(W / 2, D / 2, ['#ea4335', '#fbbc05', '#4285f4', '#34a853'], 1.4);
  k.boxes.push([0, 0, W / 2, D / 2, y0 + H + 1]);
  k.doorPos.set(1.4, 0, D / 2 + 2);
}
/** xAI：黑石金饰的尖顶屋，旁边一座高塔，山墙上是斜杠圆环 */
function gothic(k: Kit) {
  const y0 = 0.3, W = 6.6, D = 6, H = 3.8, stone = '#2a262e', dark = '#1a161e', gold = '#d4a84a', red = '#ff4a4a';
  k.box(W + 0.8, 0.7, D + 0.8, '#3a3640', [0, -0.05, 0]);
  k.box(W, H, D, stone, [0, y0 + H / 2, 0]);
  for (const y of [0.45, H - 0.12]) k.box(W + 0.12, 0.16, D + 0.12, gold, [0, y0 + y, 0]);
  for (const x of [-W / 2, W / 2]) for (const z of [-D / 2, D / 2]) k.box(0.4, H, 0.4, dark, [x, y0 + H / 2, z]);
  k.gable(W, D, 4.4, 0.4, dark, stone, y0 + H);
  k.box(0.12, 0.12, D + 0.9, gold, [0, y0 + H + 4.62, 0]);
  for (const z of [D / 2 + 0.4, -D / 2 - 0.4]) k.add(new THREE.ConeGeometry(0.12, 0.9, 5), gold, [0, y0 + H + 5.1, z]);
  // 尖拱窗和门
  const lancet = (p: V3, ry: number, w: number, h: number) => k.group(p, ry, () => {
    k.box(w + 0.2, h + 0.1, 0.12, gold, [0, 0, 0]);
    k.add(new THREE.BoxGeometry((w + 0.2) * 0.7071, (w + 0.2) * 0.7071, 0.12), gold, [0, h / 2 + 0.05, 0], [0, 0, Math.PI / 4]);
    k.glow(w, h, 0.15, red, [0, 0, 0]);
    k.add(new THREE.BoxGeometry(w * 0.7071, w * 0.7071, 0.15), red, [0, h / 2, 0], [0, 0, Math.PI / 4], null, true);
    k.box(0.06, h + w * 0.5, 0.18, dark, [0, w * 0.2, 0]);
  });
  for (const x of [-2.0, 2.0]) lancet([x, y0 + 2.0, D / 2 + 0.02], 0, 0.7, 1.6);
  for (const z of [-1.5, 1.5]) lancet([W / 2 + 0.02, y0 + 2.0, z], Math.PI / 2, 0.7, 1.6);
  k.door(1.3, 2.4, [0, y0, D / 2], 0, dark, gold);
  k.add(new THREE.BoxGeometry(1.13, 1.13, 0.16), gold, [0, y0 + 2.45, D / 2], [0, 0, Math.PI / 4]);
  k.medallion((g) => L.grokRing(g), 0.84, [0, y0 + H + 1.65, D / 2 + 0.08], 0, '#141016', gold);
  k.sign('xAI', (g) => L.grokRing(g), 2.0, [0, y0 + 3.3, D / 2 + 0.2], 0, '#141016', '#e0b24c');
  // 高塔
  const tx = -W / 2 - 0.9, tz = D / 2 - 1.2;
  k.box(2.6, 9.6, 2.6, stone, [tx, y0 + 4.8, tz]);
  for (const y of [3.2, 6.4, 9.5]) k.box(2.74, 0.16, 2.74, gold, [tx, y0 + y, tz]);
  k.group([tx, 0, tz], 0, () => k.hip(2.6, 2.6, 4.4, 0.25, dark, y0 + 9.6));
  k.add(new THREE.ConeGeometry(0.1, 1.0, 5), gold, [tx, y0 + 14.4, tz]);
  lancet([tx, y0 + 7.6, tz + 1.32], 0, 0.6, 1.4);
  lancet([tx, y0 + 4.4, tz + 1.32], 0, 0.6, 1.4);
  k.chimney.set(tx, y0 + 15.2, tz);
  // 门前的铁栅栏
  for (let i = -6; i <= 6; i++) if (Math.abs(i) > 1) { k.cyl(0.035, 0.035, 1.1, dark, [i * 0.55, 0.55, D / 2 + 2.6], 5); k.add(new THREE.ConeGeometry(0.07, 0.22, 4), gold, [i * 0.55, 1.2, D / 2 + 2.6]); }
  for (const s of [-1, 1]) { k.box(2.75, 0.06, 0.06, dark, [s * 2.2, 0.85, D / 2 + 2.6]); k.lantern([s * 1.2, y0, D / 2 + 0.4], '#ff8a6a'); }
  k.steps(2.0, D / 2 + 0.35);
  k.garden(W / 2, D / 2, ['#c01838', '#e0b24c', '#7a1028']);
  k.boxes.push([0, 0, W / 2, D / 2, y0 + H + 2.2], [tx, tz, 1.35, 1.35, y0 + 9.6]);
  k.doorPos.set(0, 0, D / 2 + 1.8);
}

const STYLE: Record<string, { build: (k: Kit) => void; color: string; home: string }> = {
  claude: { build: cottage, color: '#ff8a3c', home: '책방' },
  gpt: { build: domeHouse, color: '#e9e4fb', home: '돔 하우스' },
  deepseek: { build: lakeHouse, color: '#58b0ff', home: '호숫가 등대 집' },
  glm: { build: shrine, color: '#cfd4e6', home: '네모난 집' },
  kimi: { build: observatory, color: '#bfe0ff', home: '천문대' },
  qwen: { build: pavilion, color: '#9a8cff', home: '누각' },
  gemini: { build: studio, color: '#d59bff', home: '작업실' },
  grok: { build: gothic, color: '#ffd23e', home: '첨탑 집' },
};

export interface HouseInfo { id: string; company: string; home: string; color: string; pos: THREE.Vector3; door: THREE.Vector3; chimney: THREE.Vector3 }

/** 八家 AI 公司的小屋：建模、摆放、登记碰撞体 */
export class Houses {
  readonly list: HouseInfo[] = [];
  /** 窗户和灯：白天暗、夜里亮 */
  private glowMat = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });

  constructor(scene: THREE.Scene, col: Colliders, reserve: (x: number, z: number, r: number) => void) {
    const wallMat = toon({ vertexColors: true, grad: 'soft', side: THREE.DoubleSide });
    HOUSES.forEach((h, i) => {
      const st = STYLE[h.id], k = new Kit(), y = houseGround(i), cos = Math.cos(h.yaw), sin = Math.sin(h.yaw);
      st.build(k);
      const toWorld = (v: THREE.Vector3) => new THREE.Vector3(h.x + v.x * cos + v.z * sin, y + v.y, h.z - v.x * sin + v.z * cos);
      const grp = new THREE.Group();
      grp.position.set(h.x, y, h.z);
      grp.rotation.y = h.yaw;
      const body = new THREE.Mesh(merge(k.solid), wallMat);
      // 房子只投影、不接影：背光的墙靠卡通色阶压暗就够了，再叠一层自己的影子会灰成一片
      body.castShadow = true;
      grp.add(body);
      if (k.lit.length) grp.add(new THREE.Mesh(merge(k.lit), this.glowMat));
      for (const s of k.signs) grp.add(s);
      scene.add(grp);
      grp.updateMatrixWorld(true);
      for (const [bx, bz, hx, hz, top] of k.boxes) { const c = toWorld(new THREE.Vector3(bx, 0, bz)); col.addBox(c.x, c.z, hx, hz, h.yaw, y - 2, y + top, false); }
      for (const [cx, cz, r, top] of k.cyls) { const c = toWorld(new THREE.Vector3(cx, 0, cz)); col.addCyl(c.x, c.z, r, y - 2, y + top); }
      reserve(h.x, h.z, 15);
      this.list.push({ id: h.id, company: h.company, home: st.home, color: st.color, pos: new THREE.Vector3(h.x, y, h.z), door: toWorld(k.doorPos), chimney: toWorld(k.chimney) });
    });
  }
  update(night: number) { this.glowMat.color.setScalar(0.72 + night * 1.1); }
}
