import * as THREE from 'three';
import { lathe } from '../render/geoutil';
import { lerp } from '../core/math';

export type Col = THREE.ColorRepresentation;
const V3 = THREE.Vector3;

/** 肢体：两端粗细不同的胶囊，顶端球心在原点，沿 -Y 伸出 len。bulge 让中段鼓一点（小腿肚）。 */
export function limb(r0: number, r1: number, len: number, seg = 10, bulge = 0) {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 4; i++) { const a = (i / 4) * Math.PI * 0.5; pts.push([r1 * Math.sin(a), -len - r1 * Math.cos(a)]); }
  for (let i = 1; i < 5; i++) { const t = i / 5; pts.push([lerp(r1, r0, t) * (1 + bulge * Math.sin(Math.PI * t)), -len * (1 - t)]); }
  for (let i = 0; i <= 4; i++) { const a = (i / 4) * Math.PI * 0.5; pts.push([r0 * Math.cos(a), r0 * Math.sin(a)]); }
  return lathe(pts, seg);
}
export function ell(rx: number, ry: number, rz: number, seg = 12) {
  return new THREE.SphereGeometry(1, seg, Math.max(6, Math.round(seg * 0.7))).scale(rx, ry, rz);
}

export interface StrandOpt {
  w: number; t?: number; seg?: number; taper?: number; rootW?: number; tipW?: number;
  c0: Col; c1?: Col; center?: THREE.Vector3; up?: THREE.Vector3; flat?: boolean;
}
/**
 * 一缕头发 / 一条飘带：沿曲线扫出的扁平锥形。带 sParam 属性（顶点在曲线上的位置 0..1），蒙皮时用。
 * center：发片的宽面朝向背离这个点的方向（头发用头心）；up：直接指定宽面法线。
 */
export function strand(pts: THREE.Vector3[], o: StrandOpt) {
  const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
  const N = o.seg ?? 8, th = o.t ?? o.w * 0.42, taper = o.taper ?? 2.2, rootW = o.rootW ?? 0.6, tipW = o.tipW ?? 0.05;
  const pos: number[] = [], colr: number[] = [], sA: number[] = [], idx: number[] = [];
  const c0 = new THREE.Color(o.c0), c1 = new THREE.Color(o.c1 ?? o.c0), cc = new THREE.Color();
  const P = new V3(), T = new V3(), Nn = new V3(), S = new V3();
  const ring: [number, number][] = o.flat
    ? [[-1, 0.12], [-0.5, 0.2], [0.5, 0.2], [1, 0.12], [0.5, -0.12], [-0.5, -0.12]]
    : [[-1, 0], [-0.72, 0.64], [0, 1], [0.72, 0.64], [1, 0], [0, -0.3]];
  for (let i = 0; i <= N; i++) {
    const s = i / N;
    curve.getPoint(s, P);
    curve.getTangent(s, T);
    if (o.center) Nn.copy(P).sub(o.center); else Nn.copy(o.up ?? new V3(0, 0, 1));
    Nn.addScaledVector(T, -Nn.dot(T));
    if (Nn.lengthSq() < 1e-8) Nn.set(0, 0, 1).addScaledVector(T, -T.z);
    Nn.normalize();
    S.crossVectors(T, Nn).normalize();
    const prof = Math.max(tipW, (rootW + (1 - rootW) * Math.min(1, s / 0.2)) * (1 - Math.pow(s, taper)));
    const w = o.w * prof, t = th * prof;
    cc.copy(c0).lerp(c1, Math.pow(s, 1.3));
    for (const [a, b] of ring) {
      pos.push(P.x + S.x * a * w + Nn.x * b * t, P.y + S.y * a * w + Nn.y * b * t, P.z + S.z * a * w + Nn.z * b * t);
      colr.push(cc.r, cc.g, cc.b);
      sA.push(s);
    }
  }
  for (let i = 0; i < N; i++)
    for (let k = 0; k < 6; k++) {
      const a = i * 6 + k, b = i * 6 + ((k + 1) % 6), c = a + 6, d = b + 6;
      idx.push(a, b, c, b, d, c);
    }
  return finish(pos, colr, sA, idx);
}

function finish(pos: number[], colr: number[], sA: number[], idx: number[]) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  g.setAttribute('sParam', new THREE.Float32BufferAttribute(sA, 1));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** 沿曲线的圆管（尾巴、辫子）：半径和颜色都是曲线位置 s 的函数 */
export function tube(pts: THREE.Vector3[], rFn: (s: number) => number, colFn: (s: number, ang: number, out: THREE.Color) => void, seg = 14, radial = 10, flatten = 1) {
  const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
  const pos: number[] = [], colr: number[] = [], sA: number[] = [], idx: number[] = [];
  const P = new V3(), T = new V3(), Nn = new V3(), S = new V3(), cc = new THREE.Color();
  let prevN = new V3(0, 1, 0);
  for (let i = 0; i <= seg; i++) {
    const s = i / seg, r = rFn(s);
    curve.getPoint(s, P);
    curve.getTangent(s, T);
    Nn.copy(prevN).addScaledVector(T, -prevN.dot(T));
    if (Nn.lengthSq() < 1e-6) Nn.set(0, 0, -1).addScaledVector(T, T.z);
    Nn.normalize();
    prevN = Nn.clone();
    S.crossVectors(T, Nn).normalize();
    for (let k = 0; k < radial; k++) {
      const a = (k / radial) * Math.PI * 2, ca = Math.cos(a) * r, sa = Math.sin(a) * r * flatten;
      pos.push(P.x + S.x * ca + Nn.x * sa, P.y + S.y * ca + Nn.y * sa, P.z + S.z * ca + Nn.z * sa);
      colFn(s, a, cc);
      colr.push(cc.r, cc.g, cc.b);
      sA.push(s);
    }
  }
  for (let i = 0; i < seg; i++)
    for (let k = 0; k < radial; k++) {
      const a = i * radial + k, b = i * radial + ((k + 1) % radial), c = a + radial, d = b + radial;
      idx.push(a, c, b, b, c, d);
    }
  return finish(pos, colr, sA, idx);
}

/** 按 sParam 给几何体写蒙皮权重。sNodes 是各骨骼节点对应的 s；s 小于第一个节点的顶点绑到 rootBone。 */
export function skinAlong(geo: THREE.BufferGeometry, bones: number[], sNodes: number[], rootBone = bones[0]) {
  const sp = geo.attributes.sParam, n = sp.count, nb = bones.length;
  const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    const s = sp.getX(i);
    if (s <= sNodes[0]) { si[i * 4] = rootBone; sw[i * 4] = 1; continue; }
    let k = 0;
    while (k < nb - 1 && s >= sNodes[k + 1]) k++;
    const f = Math.min(1, (s - sNodes[k]) / (sNodes[k + 1] - sNodes[k]));
    si[i * 4] = bones[k];
    if (k + 1 < nb) { si[i * 4 + 1] = bones[k + 1]; sw[i * 4] = 1 - f; sw[i * 4 + 1] = f; } else sw[i * 4] = 1;
  }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  geo.deleteAttribute('sParam');
  return geo;
}
/** 整块绑到一根骨骼上 */
export function skinRigid(geo: THREE.BufferGeometry, bone: number) {
  const n = geo.attributes.position.count, si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) { si[i * 4] = bone; sw[i * 4] = 1; }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  if (geo.attributes.sParam) geo.deleteAttribute('sParam');
  return geo;
}

export interface SkirtOpt {
  y: number; len: number; r0: number; r1: number; zs?: number; pleats?: number; pleatAmp?: number; rows?: number; cols?: number;
  /** 下摆长度随方位角变化（前短后长之类）。回调里的 phi 都在 (-π, π]：0 正前，正值是角色左侧，±π 正后。 */
  lenFn?: (phi: number) => number;
  /** 返回 true 的方位不生成面（开襟、只有前片的围裙等） */
  skip?: (phi: number) => boolean;
  col: (phi: number, v: number, out: THREE.Color) => void;
  flare?: number;
  /** 只生成 v0..1 这一段（下摆的荷叶边用） */
  v0?: number;
}
const signed = (phi: number) => (phi > Math.PI ? phi - Math.PI * 2 : phi);
/**
 * 裙摆曲面（带褶）。返回几何体，附带 aPhi / aV 两个属性供多链蒙皮。
 * phi：0 = 正前(+z)，逆时针到 +x(角色左侧)。
 */
export function skirtGeo(o: SkirtOpt) {
  const rows = o.rows ?? 8, cols = o.cols ?? 48, zs = o.zs ?? 0.86, pl = o.pleats ?? 0, amp = o.pleatAmp ?? 0.05, flare = o.flare ?? 0.8;
  const pos: number[] = [], colr: number[] = [], ph: number[] = [], vv: number[] = [], idx: number[] = [];
  const cc = new THREE.Color();
  for (let i = 0; i <= rows; i++) {
    const v = (o.v0 ?? 0) + (1 - (o.v0 ?? 0)) * (i / rows);
    for (let k = 0; k <= cols; k++) {
      const phi = (k / cols) * Math.PI * 2, L = o.len * (o.lenFn ? o.lenFn(signed(phi)) : 1);
      const r = lerp(o.r0, o.r1, Math.pow(v, flare)) * (1 + (pl ? amp * v * Math.cos(pl * phi) : 0));
      pos.push(Math.sin(phi) * r, o.y - L * v, Math.cos(phi) * r * zs);
      o.col(signed(phi), v, cc);
      colr.push(cc.r, cc.g, cc.b);
      ph.push(phi);
      vv.push(v);
    }
  }
  for (let i = 0; i < rows; i++)
    for (let k = 0; k < cols; k++) {
      if (o.skip?.(signed(((k + 0.5) / cols) * Math.PI * 2))) continue;
      const a = i * (cols + 1) + k, b = a + 1, c = a + cols + 1, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  g.setAttribute('aPhi', new THREE.Float32BufferAttribute(ph, 1));
  g.setAttribute('aV', new THREE.Float32BufferAttribute(vv, 1));
  g.setIndex(idx);
  g.computeVertexNormals();
  // 接缝处（phi = 0 和 2π）法线对齐，避免描边裂开
  const nor = g.attributes.normal;
  for (let i = 0; i <= rows; i++) {
    const a = i * (cols + 1), b = a + cols;
    const x = nor.getX(a) + nor.getX(b), y = nor.getY(a) + nor.getY(b), z = nor.getZ(a) + nor.getZ(b), l = Math.hypot(x, y, z) || 1;
    nor.setXYZ(a, x / l, y / l, z / l);
    nor.setXYZ(b, x / l, y / l, z / l);
  }
  return g;
}

/** 给裙摆写多链蒙皮：chains[c] 是第 c 条链的骨骼下标（自上而下），各链按方位角均匀分布 */
export function skinSkirt(geo: THREE.BufferGeometry, chains: number[][], phi0 = 0) {
  const ph = geo.attributes.aPhi, vv = geo.attributes.aV, n = ph.count, nc = chains.length, nb = chains[0].length;
  const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    const x = (((ph.getX(i) - phi0) / (Math.PI * 2)) % 1 + 1) % 1 * nc, c0 = Math.floor(x) % nc, c1 = (c0 + 1) % nc, fa = x - Math.floor(x);
    const y = Math.min(vv.getX(i) * nb, nb - 1e-4), k = Math.floor(y), k1 = Math.min(k + 1, nb - 1), fv = k1 === k ? 0 : y - k;
    si[i * 4] = chains[c0][k]; sw[i * 4] = (1 - fa) * (1 - fv);
    si[i * 4 + 1] = chains[c0][k1]; sw[i * 4 + 1] = (1 - fa) * fv;
    si[i * 4 + 2] = chains[c1][k]; sw[i * 4 + 2] = fa * (1 - fv);
    si[i * 4 + 3] = chains[c1][k1]; sw[i * 4 + 3] = fa * fv;
  }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  geo.deleteAttribute('aPhi');
  geo.deleteAttribute('aV');
  return geo;
}

/** 脸型参数：每位角色可以不一样 */
export interface HeadShape {
  /** 下半张脸向下巴收窄的程度：0.36 很圆，0.5 偏尖 */
  jaw?: number;
  /** 脸颊的饱满程度：0.03 清瘦，0.075 肉嘟嘟 */
  cheek?: number;
  /** 脸的长度（下巴到头部中心，相对头半径）：1.0 短圆脸，1.1 鹅蛋长脸 */
  len?: number;
  /** 下巴尖再额外收一点（猫系、小恶魔系用） */
  chin?: number;
}
/**
 * 头：从球面「捏」出来的动漫头型——上半是圆的颅顶，脸颊饱满，到下巴才圆润地收起来，正面略平，带一点鼻尖。
 * 返回前半（带正面投影 UV，用来贴脸部贴图）和后半。
 */
export function headGeo(R: number, S: HeadShape = {}) {
  const jaw = S.jaw ?? 0.42, cheek = S.cheek ?? 0.05, len = S.len ?? 1.06, chin = S.chin ?? 0, cy = 1.1 * R - 0.006;
  const sculpt = (dx: number, dy: number, dz: number, o: THREE.Vector3) => {
    const t = dy < 0 ? -dy : 0, f = Math.min(1, Math.max(0, dz / 0.35)), fr = f * f * (3 - 2 * f);
    const ck = Math.exp(-(((t - 0.42) / 0.26) ** 2)), tip = Math.min(1, Math.max(0, (t - 0.72) / 0.28));
    const sx = 0.97 * (1 - jaw * Math.pow(t, 2.3)) * (1 + cheek * ck) * (1 - chin * tip * tip);
    const sy = dy < 0 ? len : 1.0, sz = (dz > 0 ? 0.93 : 1.03) * (1 - 0.26 * Math.pow(t, 1.8));
    o.set(dx * sx, dy * sy, dz * sz).multiplyScalar(R);
    // 正面：下巴略向前、鼻尖、两颊向前鼓一点
    const nose = 0.06 * Math.exp(-((dx / 0.15) ** 2 + ((dy + 0.2) / 0.11) ** 2));
    const puff = cheek * 0.55 * Math.exp(-((((Math.abs(dx) - 0.5) / 0.24) ** 2) + ((dy + 0.34) / 0.2) ** 2));
    o.z += R * fr * (0.085 * t * t + nose + puff);
    o.y += cy;
    return o;
  };
  const mk = (phi0: number) => {
    const g = new THREE.SphereGeometry(1, 32, 36, phi0, Math.PI);
    const pos = g.attributes.position, nor = g.attributes.normal;
    const d = new V3(), p = new V3(), a = new V3(), b = new V3(), e1 = new V3(), e2 = new V3(), q = new V3();
    for (let i = 0; i < pos.count; i++) {
      d.fromBufferAttribute(pos, i).normalize();
      e1.set(-d.z, 0, d.x);
      if (e1.lengthSq() < 1e-6) e1.set(1, 0, 0);
      e1.normalize();
      e2.crossVectors(d, e1).normalize();
      sculpt(d.x, d.y, d.z, p);
      q.copy(d).addScaledVector(e1, 0.03).normalize(); sculpt(q.x, q.y, q.z, a);
      q.copy(d).addScaledVector(e2, 0.03).normalize(); sculpt(q.x, q.y, q.z, b);
      a.sub(p); b.sub(p);
      q.crossVectors(a, b).normalize();
      if (q.dot(d) < 0) q.negate();
      pos.setXYZ(i, p.x, p.y, p.z);
      nor.setXYZ(i, q.x, q.y, q.z);
    }
    return g;
  };
  const front = mk(0), back = mk(Math.PI);
  const p = front.attributes.position, uv = front.attributes.uv;
  front.computeBoundingBox();
  const bb = front.boundingBox!;
  for (let i = 0; i < p.count; i++)
    uv.setXY(i, (p.getX(i) - bb.min.x) / (bb.max.x - bb.min.x), (p.getY(i) - bb.min.y) / (bb.max.y - bb.min.y));
  return { front, back, cy, top: cy + R };
}

export interface Sec { y: number; w: number; d?: number; db?: number; zc?: number }
const catmull = (p0: number, p1: number, p2: number, p3: number, t: number) =>
  0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
function secAt(secs: Sec[], y: number, get: (s: Sec) => number) {
  let i = 0;
  while (i < secs.length - 2 && y > secs[i + 1].y) i++;
  const a = secs[i], b = secs[i + 1], t = Math.min(1, Math.max(0, (y - a.y) / (b.y - a.y)));
  return catmull(get(secs[Math.max(0, i - 1)]), get(a), get(b), get(secs[Math.min(secs.length - 1, i + 2)]), t);
}
/**
 * 把一组水平截面连成一段身体（躯干、手臂、腿）。截面是超椭圆：w 是半宽，d / db 是前 / 后半厚。
 * 只取 y0..y1 这一段，方便把同一个身体按衣服和皮肤切成几块。带 aY 属性（顶点高度），蒙皮时用。
 */
export function loft(secs: Sec[], o: { y0?: number; y1?: number; step?: number; radial?: number; n?: number; cap0?: boolean; cap1?: boolean; bump?: (x: number, y: number) => number } = {}) {
  const y0 = o.y0 ?? secs[0].y, y1 = o.y1 ?? secs[secs.length - 1].y, rings = Math.max(2, Math.ceil((y1 - y0) / (o.step ?? 0.014))), R = o.radial ?? 18, ex = 2 / (o.n ?? 2.3);
  const pos: number[] = [], ay: number[] = [], idx: number[] = [];
  for (let i = 0; i <= rings; i++) {
    const y = y0 + ((y1 - y0) * i) / rings;
    const w = Math.max(0.001, secAt(secs, y, (s) => s.w)), df = Math.max(0.001, secAt(secs, y, (s) => s.d ?? s.w)), db = Math.max(0.001, secAt(secs, y, (s) => s.db ?? s.d ?? s.w)), zc = secAt(secs, y, (s) => s.zc ?? 0);
    for (let k = 0; k < R; k++) {
      const a = (k / R) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      const x = w * Math.sign(c) * Math.pow(Math.abs(c), ex), zr = Math.sign(sn) * Math.pow(Math.abs(sn), ex);
      let z = zc + (zr > 0 ? df : db) * zr;
      if (o.bump && zr > 0) z += o.bump(x, y) * zr;
      pos.push(x, y, z);
      ay.push(y);
    }
  }
  for (let i = 0; i < rings; i++)
    for (let k = 0; k < R; k++) {
      const a = i * R + k, b = i * R + ((k + 1) % R), c = a + R, d = b + R;
      idx.push(a, c, b, b, c, d);
    }
  const cap = (ring: number, y: number, flip: boolean) => {
    const ci = pos.length / 3, zc = secAt(secs, y, (s) => s.zc ?? 0);
    pos.push(0, y, zc);
    ay.push(y);
    for (let k = 0; k < R; k++) { const a = ring * R + k, b = ring * R + ((k + 1) % R); if (flip) idx.push(ci, a, b); else idx.push(ci, b, a); }
  };
  if (o.cap0) cap(0, y0, true);
  if (o.cap1) cap(rings, y1, false);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aY', new THREE.Float32BufferAttribute(ay, 1));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
/** 按高度给 loft 出来的几何体写蒙皮权重。stops 是 [高度, 骨骼下标]，相邻两档之间线性过渡。 */
export function skinByY(geo: THREE.BufferGeometry, stops: [number, number][]) {
  const ay = geo.attributes.aY, n = ay.count, si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    const y = ay.getX(i);
    let k = 0;
    while (k < stops.length - 2 && y > stops[k + 1][0]) k++;
    const a = stops[k], b = stops[k + 1], f = Math.min(1, Math.max(0, (y - a[0]) / (b[0] - a[0])));
    if (a[1] === b[1]) { si[i * 4] = a[1]; sw[i * 4] = 1; }
    else { si[i * 4] = a[1]; sw[i * 4] = 1 - f; si[i * 4 + 1] = b[1]; sw[i * 4 + 1] = f; }
  }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  geo.deleteAttribute('aY');
  return geo;
}

/** 四角星 */
export function star4(r: number, t = 0.25, depth = 0.25) {
  const sh = new THREE.Shape();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2, rr = i % 2 ? r * t : r;
    if (i === 0) sh.moveTo(Math.sin(a) * rr, Math.cos(a) * rr); else sh.lineTo(Math.sin(a) * rr, Math.cos(a) * rr);
  }
  const g = new THREE.ExtrudeGeometry(sh, { depth: r * depth, bevelEnabled: true, bevelSize: r * 0.06, bevelThickness: r * 0.1, bevelSegments: 1 });
  g.translate(0, 0, -r * depth * 0.5);
  return g;
}
/** 蝴蝶结：两个向外张开、靠结处收窄的环，中间一个结，下面两条垂带。返回 [左环, 右环, 结, 垂带, 垂带] */
export function bowGeo(w: number, h: number) {
  const lobe = (s: number) => {
    const g = new THREE.SphereGeometry(1, 12, 8).scale(w * 0.26, h * 0.5, w * 0.11);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const t = Math.min(1, Math.max(0, (s * p.getX(i)) / (w * 0.26) * 0.5 + 0.5)); // 0 靠结，1 在外端
      p.setY(i, p.getY(i) * (0.28 + 0.72 * Math.pow(t, 0.8)));
      p.setZ(i, p.getZ(i) * (0.45 + 0.55 * t));
    }
    g.computeVertexNormals();
    g.translate(s * w * 0.25, 0, 0);
    g.rotateZ(s * 0.16);
    return g;
  };
  const tail = (s: number) => {
    const g = new THREE.BoxGeometry(w * 0.15, h * 0.95, w * 0.03);
    g.translate(0, -h * 0.5, 0);
    g.rotateZ(s * 0.32);
    g.translate(s * w * 0.03, -h * 0.12, -w * 0.01);
    return g;
  };
  return [lobe(1), lobe(-1), new THREE.SphereGeometry(h * 0.22, 10, 8).scale(1, 1.1, 0.9), tail(1), tail(-1)];
}
