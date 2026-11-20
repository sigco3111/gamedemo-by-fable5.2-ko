import * as THREE from 'three';
import { Rig, type Proportions } from './rig';
import { Builder, type CharModel } from './builder';
import { glowMat, toon } from '../render/toon';
import { merge } from '../render/geoutil';
import { type Col } from './geo';
import { drape } from './parts';

const Vec = THREE.Vector3;
type V3 = [number, number, number];
type G2 = CanvasRenderingContext2D;
const PE: Proportions = { hipY: 0.9, spine: 0.1, chest: 0.13, neck: 0.25, head: 0.05, shoulderX: 0.21, shoulderY: 0.18, upperArm: 0.27, foreArm: 0.25, hipX: 0.1, hipDrop: 0.05, thigh: 0.42, shin: 0.38 };
const box = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const FONT = '"Microsoft YaHei", "PingFang SC", sans-serif';

/** 贴花里写字：贴花的画布是按 ±0.5 归一化的，这里换成 ±100 的坐标再写，字号才正常 */
function text(g: G2, s: string, size: number, color: string, y = 0, x = 0, font = FONT) {
  g.save();
  g.scale(1 / 200, 1 / 200);
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `700 ${size}px ${font}`;
  g.fillText(s, x, y);
  g.restore();
}
/** 一格乱码字 */
const glyph = (ch: string, fg: string, bg: string | null = null) => (g: G2) => {
  if (bg) { g.fillStyle = bg; g.fillRect(-0.5, -0.5, 1, 1); }
  text(g, ch, 150, fg, 8);
};
/** 「无法显示的字符」：黑菱形里一个白问号 */
function tofuFace(g: G2) {
  g.fillStyle = '#12151f';
  g.beginPath(); g.moveTo(0, -0.46); g.lineTo(0.4, 0); g.lineTo(0, 0.46); g.lineTo(-0.4, 0); g.closePath(); g.fill();
  text(g, '?', 120, '#ffffff', 6, 0, 'Consolas, monospace');
}

// ======================= 乱码兵 =======================
/** 乱码兵：一堆错位的方块拼成的人形，身上是显示不出来的字，边缘带着红蓝错位的色边 */
export function buildGrunt(): CharModel {
  const b = new Builder(new Rig(PE));
  const dark = '#1d2333', pale = '#e9edf6', cyan = '#35e8ff', mag = '#ff3bd0', term = '#63ffa1';
  // 腰和躯干：三段，每段都横向错开一点
  b.add('hips', box(0.3, 0.2, 0.2), dark);
  b.add('hips', box(0.3, 0.016, 0.205), cyan, 'glow', [0.03, -0.05, 0]);
  for (let i = 0; i < 4; i++) b.add('hips', box(0.1, 0.13, 0.02), i % 2 ? pale : dark, 'cloth', [-0.165 + i * 0.11, -0.16, 0.1], [0.12, 0, 0]);
  b.add('spine', box(0.24, 0.16, 0.17), pale, 'cloth', [0.03, 0.06, 0]);
  b.add('chest', box(0.4, 0.26, 0.22), dark, 'cloth', [-0.015, 0.12, 0]);
  b.add('chest', box(0.31, 0.15, 0.02), '#0b101c', 'cloth', [-0.015, 0.13, 0.112]);
  ['锟', '斤', '拷'].forEach((c, i) => b.decal('chest', 'c' + i, glyph(c, term), 0.1, [-0.115 + i * 0.1, 0.13, 0.126]));
  b.add('chest', box(0.4, 0.022, 0.225), cyan, 'glow', [0.035, 0.215, 0]);
  b.add('chest', box(0.4, 0.022, 0.225), mag, 'glow', [-0.06, 0.03, 0]);
  ['烫', '屯'].forEach((c, i) => b.decal('chest', 'b' + i, glyph(c, term), 0.12, [-0.08 + i * 0.13, 0.13, -0.113], [0, Math.PI, 0]));
  // 头：一块「豆腐块」，正面是无法显示的字符
  b.add('head', box(0.22, 0.22, 0.22), pale, 'cloth', [0, 0.1, 0]);
  b.decal('head', 'face', tofuFace, 0.2, [0, 0.1, 0.112]);
  b.add('head', box(0.225, 0.04, 0.225), dark, 'cloth', [0.04, 0.175, 0]);
  b.add('head', box(0.22, 0.014, 0.224), cyan, 'glow', [-0.035, 0.04, 0]);
  b.add('head', box(0.22, 0.014, 0.224), mag, 'glow', [0.035, 0.022, 0]);
  for (const [x, y, s] of [[0.1, 0.27, 0.05], [-0.07, 0.29, 0.035], [0.02, 0.33, 0.028]] as V3[]) b.add('head', box(s, s, s), y > 0.28 ? cyan : mag, 'glow', [x, y, 0.02], [0.3, 0.5, 0]);
  for (const s of [1, -1]) {
    const n = s > 0 ? 'L' : 'R';
    b.add(`arm${n}`, box(0.16, 0.12, 0.16), pale, 'cloth', [s * 0.01, 0.01, 0]);
    b.decal(`arm${n}`, 'sh', glyph('□', dark), 0.11, [s * 0.092, 0.01, 0], [0, (s * Math.PI) / 2, 0]);
    b.add(`arm${n}`, box(0.1, PE.upperArm * 0.8, 0.1), dark, 'cloth', [0, -PE.upperArm * 0.52, 0]);
    b.add(`fore${n}`, box(0.105, PE.foreArm * 0.5, 0.105), pale, 'cloth', [0, -PE.foreArm * 0.28, 0]);
    b.add(`fore${n}`, box(0.09, PE.foreArm * 0.28, 0.09), dark, 'cloth', [s * 0.025, -PE.foreArm * 0.8, 0]);
    b.add(`fore${n}`, box(0.108, 0.012, 0.108), s > 0 ? cyan : mag, 'glow', [s * 0.02, -PE.foreArm * 0.58, 0]);
    b.add(`hand${n}`, box(0.095, 0.095, 0.095), dark, 'cloth', [0, -0.04, 0]);
    b.add(`leg${n}`, box(0.135, PE.thigh * 0.86, 0.135), dark, 'cloth', [0, -PE.thigh * 0.46, 0]);
    b.add(`shin${n}`, box(0.15, 0.09, 0.15), pale, 'cloth', [0, 0, 0.01]);
    b.add(`shin${n}`, box(0.115, PE.shin * 0.5, 0.115), dark, 'cloth', [s * 0.02, -PE.shin * 0.36, 0]);
    b.add(`shin${n}`, box(0.12, PE.shin * 0.26, 0.12), pale, 'cloth', [-s * 0.015, -PE.shin * 0.8, 0]);
    b.add(`shin${n}`, box(0.125, 0.012, 0.125), s > 0 ? mag : cyan, 'glow', [0, -PE.shin * 0.64, 0]);
    b.add(`foot${n}`, box(0.13, 0.075, 0.25), dark, 'cloth', [0, -0.015, 0.05]);
  }
  // 武器：一根坏掉的光标，末端的像素正在散开
  const w = b.mount('weapon', 'handR', [0, -0.04, 0.02]), L = 0.9;
  b.add(w, box(0.07, 0.022, L), pale, 'cloth', [0, 0, L / 2 + 0.08]);
  b.add(w, box(0.022, 0.026, L * 0.9), mag, 'glow', [0.034, 0, L / 2 + 0.06]);
  b.add(w, box(0.022, 0.026, L * 0.9), cyan, 'glow', [-0.034, 0, L / 2 + 0.1]);
  for (const [z, s] of [[L + 0.17, 0.055], [L + 0.27, 0.04], [L + 0.35, 0.026]]) b.add(w, box(s, s * 0.5, s), z > L + 0.2 ? cyan : pale, z > L + 0.2 ? 'glow' : 'cloth', [(z * 7) % 0.05 - 0.025, 0, z]);
  b.add(w, box(0.2, 0.04, 0.045), dark, 'cloth', [0, 0, 0.07]);
  b.add(w, new THREE.CylinderGeometry(0.02, 0.02, 0.26, 6).rotateX(Math.PI / 2), dark, 'cloth', [0, 0, -0.06]);
  return b.build();
}

// ======================= 大文档巨像 =======================
/** 一页文档：几行灰色的字，其中两行被红笔划了 */
function pageLines(g: G2) {
  g.fillStyle = '#fbfaf5'; g.fillRect(-0.5, -0.5, 1, 1);
  for (let i = 0; i < 7; i++) {
    g.fillStyle = i === 2 || i === 5 ? '#e0483c' : '#9a9aa6';
    g.fillRect(-0.4, -0.4 + i * 0.12, i % 3 === 2 ? 0.5 : 0.8, 0.05);
  }
}
/** 封面标签 */
function coverLabel(g: G2) {
  g.fillStyle = '#fbfaf5'; g.fillRect(-0.5, -0.3, 1, 0.6);
  g.strokeStyle = '#8a6a20'; g.lineWidth = 0.03; g.strokeRect(-0.47, -0.27, 0.94, 0.54);
  text(g, '최종본_v37', 30, '#3a3020', -14);
  text(g, '9999 페이지', 34, '#c8323c', 26);
}
/** 红色角标 */
function badge(g: G2) {
  g.fillStyle = '#e0352b'; g.beginPath(); g.arc(0, 0, 0.48, 0, 7); g.fill();
  text(g, '99+', 74, '#ffffff', 4, 0, 'Consolas, monospace');
}
/** 大文档巨像：文件夹当胸甲，纸页堆成身体，头是一张折了角的文档，身后拖着一长条打印纸 */
export function buildElite(): CharModel {
  const b = new Builder(new Rig(PE));
  const paper = '#f4f1e8', edge = '#b9b4a6', manila = '#e2b24f', spine = '#9a7424', blue = '#3f66cc', red = '#e0352b', black = '#1c1c22', steel = '#b8bcc8';
  /** 一摞纸：白色的方块，侧面一道道纸边 */
  const stack = (t: Parameters<Builder['add']>[0], w: number, h: number, d: number, p: V3, n = 5) => {
    b.add(t, box(w, h, d), paper, 'cloth', p);
    for (let i = 1; i < n; i++) b.add(t, box(w + 0.008, 0.005, d + 0.008), edge, 'cloth', [p[0], p[1] - h / 2 + (h * i) / n, p[2]]);
  };
  stack('hips', 0.34, 0.2, 0.26, [0, 0, 0], 6);
  b.add('hips', box(0.36, 0.05, 0.28), black, 'cloth', [0, 0.08, 0]);
  stack('spine', 0.28, 0.16, 0.22, [0, 0.06, 0], 5);
  // 胸口：一个塞得合不上的文件夹
  b.add('chest', box(0.47, 0.3, 0.3), manila, 'cloth', [0, 0.12, 0]);
  b.add('chest', box(0.035, 0.31, 0.31), spine, 'cloth', [-0.24, 0.12, 0]);
  b.add('chest', box(0.41, 0.05, 0.26), paper, 'cloth', [0.01, 0.285, 0]);
  b.add('chest', box(0.3, 0.008, 0.22), paper, 'cloth', [0.05, 0.318, 0.01], [0, 0.28, 0.05]);
  b.add('chest', box(0.26, 0.008, 0.2), '#fff7c2', 'cloth', [-0.06, 0.33, -0.01], [0.04, -0.35, 0]);
  b.decal('chest', 'label', coverLabel, 0.3, [0.02, 0.1, 0.153]);
  b.add('chest', new THREE.SphereGeometry(0.052, 12, 8), red, 'glow', [0.2, 0.25, 0.14]);
  b.decal('chest', 'badge', badge, 0.085, [0.2, 0.25, 0.194]);
  b.decal('chest', 'page', pageLines, 0.26, [0, 0.12, -0.153], [0, Math.PI, 0]);
  // 头：一张折了角的文档，两行高亮当眼睛
  b.add('head', box(0.25, 0.31, 0.07), paper, 'cloth', [0, 0.13, 0]);
  b.add('head', box(0.085, 0.085, 0.074), edge, 'cloth', [0.125, 0.285, 0], [0, 0, Math.PI / 4]);
  b.decal('head', 'page', pageLines, 0.2, [-0.015, 0.075, 0.037]);
  for (const s of [1, -1]) b.add('head', box(0.075, 0.02, 0.014), '#ff5c3c', 'glow', [s * 0.055 - 0.01, 0.2, 0.036], [0, 0, -s * 0.22]);
  b.add('head', box(0.04, 0.2, 0.012), red, 'cloth', [-0.08, 0.2, -0.04]);
  for (const s of [1, -1]) {
    const n = s > 0 ? 'L' : 'R';
    // 肩上：一本蓝皮书，上面夹着长尾夹
    b.add(`arm${n}`, box(0.22, 0.13, 0.22), blue, 'cloth', [s * 0.02, 0.03, 0]);
    b.add(`arm${n}`, box(0.2, 0.09, 0.225), paper, 'cloth', [s * 0.035, 0.03, 0]);
    b.add(`arm${n}`, box(0.12, 0.08, 0.16), black, 'cloth', [s * 0.03, 0.13, 0], [0, 0, -s * 0.25]);
    b.add(`arm${n}`, new THREE.TorusGeometry(0.05, 0.008, 5, 12), steel, 'cloth', [s * 0.05, 0.2, 0], [0, Math.PI / 2, 0]);
    // 手臂：卷起来的纸，用皮筋扎着
    b.add(`arm${n}`, new THREE.CylinderGeometry(0.066, 0.06, PE.upperArm, 12).translate(0, -PE.upperArm / 2, 0), paper);
    b.add(`arm${n}`, new THREE.TorusGeometry(0.066, 0.012, 5, 14).rotateX(Math.PI / 2), red, 'cloth', [0, -PE.upperArm * 0.55, 0]);
    b.add(`fore${n}`, new THREE.CylinderGeometry(0.082, 0.07, PE.foreArm, 12).translate(0, -PE.foreArm / 2, 0), paper);
    b.add(`fore${n}`, new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12).translate(0, -PE.foreArm, 0), edge);
    b.add(`fore${n}`, new THREE.TorusGeometry(0.08, 0.012, 5, 14).rotateX(Math.PI / 2), blue, 'cloth', [0, -PE.foreArm * 0.4, 0]);
    b.add(`hand${n}`, box(0.12, 0.1, 0.11), black, 'cloth', [0, -0.045, 0]);
    // 腿：纸摞和文件夹
    stack(`leg${n}`, 0.17, PE.thigh * 0.9, 0.17, [0, -PE.thigh * 0.47, 0], 8);
    b.add(`shin${n}`, box(0.19, 0.1, 0.19), blue, 'cloth', [0, 0, 0.01]);
    b.add(`shin${n}`, box(0.16, PE.shin * 0.84, 0.16), manila, 'cloth', [0, -PE.shin * 0.5, 0]);
    b.add(`shin${n}`, box(0.02, PE.shin * 0.84, 0.165), spine, 'cloth', [s * 0.08, -PE.shin * 0.5, 0]);
    b.add(`foot${n}`, box(0.17, 0.09, 0.3), blue, 'cloth', [0, -0.015, 0.05]);
    b.add(`foot${n}`, box(0.15, 0.055, 0.305), paper, 'cloth', [0, -0.015, 0.053]);
  }
  // 武器：一支批注用的大红笔
  const w = b.mount('weapon', 'handR', [0, -0.04, 0.02]), L = 1.35;
  b.add(w, new THREE.CylinderGeometry(0.045, 0.045, L, 10).rotateX(Math.PI / 2), red, 'cloth', [0, 0, L / 2 + 0.02]);
  b.add(w, new THREE.CylinderGeometry(0.05, 0.05, 0.3, 10).rotateX(Math.PI / 2), black, 'cloth', [0, 0, 0.05]);
  b.add(w, new THREE.ConeGeometry(0.045, 0.2, 10).rotateX(Math.PI / 2), steel, 'cloth', [0, 0, L + 0.12]);
  b.add(w, new THREE.SphereGeometry(0.022, 8, 6), '#ff5c3c', 'glow', [0, 0, L + 0.23]);
  b.add(w, box(0.016, 0.1, L * 0.5), '#ff5c3c', 'glow', [0, 0, L * 0.62]);
  b.add(w, box(0.014, 0.03, 0.34), steel, 'cloth', [0, 0.05, 0.16]);
  // 身后拖着的连续打印纸：两边一排孔，中间一行行字
  const c0 = new THREE.Color(paper), c1 = new THREE.Color('#8f8f9c'), c2 = new THREE.Color('#d8d4c6');
  drape(b, 'chest', {
    top: [-0.17, -0.06, 0.06, 0.17].map((x) => new Vec(x, 0.24, -0.16)),
    drop: (i, t) => new Vec((i - 1.5) * 0.02 * t, -(1.0 - 0.04 * (i % 2)) * t, -0.24 * Math.sin(t * 1.4)), bones: 3, rows: 40, cols: 14,
    col: (u, v, o) => {
      const side = u < 0.08 || u > 0.92, row = (v * 20) % 1;
      if (side) o.copy(row < 0.5 ? c2 : c0);
      else o.copy(row < 0.3 && u > 0.16 && u < (Math.floor(v * 20) % 3 === 2 ? 0.6 : 0.86) ? c1 : c0);
    },
  });
  const m = b.build();
  m.root.scale.setScalar(1.85);
  m.rig.scale = 1.85;
  return m;
}

// ======================= 电子病毒 =======================
export interface WispModel { root: THREE.Group; shell: THREE.Group; ring: THREE.Mesh; mats: THREE.MeshToonMaterial[]; core: THREE.MeshBasicMaterial }
/** 电子病毒：发光的核心外面裹着一层裂开的壳，壳上伸出一圈带球头的刺，身边绕着一环数据块 */
export function buildWisp(color: Col): WispModel {
  const root = new THREE.Group(), shell = new THREE.Group();
  // 核心最亮；刺头和数据环用暗一档的同色，不然泛光会把整只糊成一团白
  const core = glowMat(color, 1.6), dim = glowMat(color, 0.82), hull = toon({ color: '#4d3163', grad: 'soft', side: THREE.DoubleSide });
  root.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.19, 2), core));
  // 壳：二十面体的每一片都往自己的中心缩一点，缝里透出核心的光
  const plates = new THREE.IcosahedronGeometry(0.3, 0), p = plates.attributes.position, c = new Vec(), v = new Vec();
  for (let f = 0; f < p.count; f += 3) {
    c.set(0, 0, 0);
    for (let k = 0; k < 3; k++) c.add(v.fromBufferAttribute(p, f + k));
    c.multiplyScalar(1 / 3);
    for (let k = 0; k < 3; k++) { v.fromBufferAttribute(p, f + k).sub(c).multiplyScalar(0.87).add(c); p.setXYZ(f + k, v.x, v.y, v.z); }
  }
  plates.computeVertexNormals();
  // 刺：从二十面体的十二个顶点伸出去
  const PHI = (1 + Math.sqrt(5)) / 2, dirs: THREE.Vector3[] = [], up = new Vec(0, 1, 0), q = new THREE.Quaternion();
  for (const a of [-1, 1]) for (const d of [-PHI, PHI]) dirs.push(new Vec(0, a, d).normalize(), new Vec(a, d, 0).normalize(), new Vec(d, 0, a).normalize());
  const stems: THREE.BufferGeometry[] = [plates], knobs: THREE.BufferGeometry[] = [];
  for (const d of dirs) {
    q.setFromUnitVectors(up, d);
    stems.push(new THREE.CylinderGeometry(0.02, 0.04, 0.2, 6).translate(0, 0.36, 0).applyQuaternion(q));
    stems.push(new THREE.SphereGeometry(0.058, 8, 6).translate(0, 0.48, 0).applyQuaternion(q));
    knobs.push(new THREE.SphereGeometry(0.03, 8, 6).translate(0, 0.53, 0).applyQuaternion(q));
  }
  const body = new THREE.Mesh(merge(stems), hull);
  body.castShadow = true;
  shell.add(body, new THREE.Mesh(merge(knobs), dim));
  // 数据环：一圈细线上串着八个小方块
  const bits: THREE.BufferGeometry[] = [new THREE.TorusGeometry(0.62, 0.008, 4, 40)];
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, s = i % 2 ? 0.05 : 0.075; bits.push(box(s, s, s).rotateZ(a).translate(Math.cos(a) * 0.62, Math.sin(a) * 0.62, 0)); }
  const ring = new THREE.Mesh(merge(bits), dim);
  ring.rotation.x = 1.2;
  // 往下掉的碎像素
  const drip = [[0, -0.56, 0.09], [0.05, -0.7, 0.06], [-0.03, -0.81, 0.038]].map(([x, y, s]) => box(s, s, s).rotateY(y * 9).translate(x, y, 0));
  root.add(shell, ring, new THREE.Mesh(merge(drip), dim));
  return { root, shell, ring, mats: [hull], core };
}
