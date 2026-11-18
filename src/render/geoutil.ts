import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

type V3 = [number, number, number];
const _c = new THREE.Color(), _p = new THREE.Vector3(), _n = new THREE.Vector3();
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();

/** 给几何体写顶点色。可以是一个颜色，也可以是按位置算颜色的函数。 */
export function paint(geo: THREE.BufferGeometry, c: THREE.ColorRepresentation | ((p: THREE.Vector3, n: THREE.Vector3, out: THREE.Color) => void)) {
  const pos = geo.attributes.position, nor = geo.attributes.normal;
  const arr = new Float32Array(pos.count * 3);
  if (typeof c !== 'function') _c.set(c);
  for (let i = 0; i < pos.count; i++) {
    if (typeof c === 'function') {
      _p.fromBufferAttribute(pos, i);
      if (nor) _n.fromBufferAttribute(nor, i);
      c(_p, _n, _c);
    }
    arr[i * 3] = _c.r; arr[i * 3 + 1] = _c.g; arr[i * 3 + 2] = _c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

/** 平移 / 旋转（欧拉角，弧度）/ 缩放，直接烘进顶点里 */
export function xf(geo: THREE.BufferGeometry, p?: V3 | null, r?: V3 | null, s?: number | V3 | null) {
  _e.set(r?.[0] ?? 0, r?.[1] ?? 0, r?.[2] ?? 0);
  _q.setFromEuler(_e);
  const sc = typeof s === 'number' ? [s, s, s] : s ?? [1, 1, 1];
  _m.compose(new THREE.Vector3(p?.[0] ?? 0, p?.[1] ?? 0, p?.[2] ?? 0), _q, new THREE.Vector3(sc[0], sc[1], sc[2]));
  geo.applyMatrix4(_m);
  return geo;
}

/** 合并前统一成「非索引 + position/normal/color（+蒙皮）」 */
export function norm(geo: THREE.BufferGeometry) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.color) paint(g, 0xffffff);
  return g;
}
export function merge(geos: THREE.BufferGeometry[]) {
  const m = mergeGeometries(geos.map(norm), false);
  if (!m) throw new Error('merge failed');
  return m;
}

/** 旋转体。profile 是 [半径, 高度] 的列表，自下而上。 */
export function lathe(profile: [number, number][], seg = 14, phiStart = 0, phiLen = Math.PI * 2) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(Math.max(r, 0.0001), y)), seg, phiStart, phiLen);
}

/** 凹凸不平的球：用来做树冠、石头 */
export function blob(r: number, detail: number, amp: number, seed: number, flat = false) {
  let g: THREE.BufferGeometry = new THREE.IcosahedronGeometry(r, detail);
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  g = mergeVertices(g, 1e-4);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    _p.fromBufferAttribute(pos, i);
    const k = 1 + amp * (Math.sin(_p.x * 2.3 / r + seed) * Math.cos(_p.y * 2.9 / r + seed * 1.7) + 0.6 * Math.sin(_p.z * 4.1 / r + seed * 2.3));
    pos.setXYZ(i, _p.x * k, _p.y * k, _p.z * k);
  }
  if (flat) g = g.toNonIndexed();
  g.computeVertexNormals();
  return g;
}

export { mergeGeometries, mergeVertices };
