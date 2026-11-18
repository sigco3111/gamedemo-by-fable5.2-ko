import * as THREE from 'three';
import type { Terrain } from './terrain';

export interface Box { kind: 'box'; x: number; z: number; hx: number; hz: number; cos: number; sin: number; y0: number; y1: number; climb: boolean }
export interface Cyl { kind: 'cyl'; x: number; z: number; r: number; y0: number; y1: number }
export type Collider = Box | Cyl;
export interface Contact { c: Collider; nx: number; nz: number }

const CELL = 8;
const key = (i: number, j: number) => (i + 512) * 2048 + (j + 512);

/** 静态碰撞世界：地形高度场 + 少量盒子（墙、塔）和圆柱（树、柱子） */
export class Colliders {
  private grid = new Map<number, Collider[]>();
  readonly all: Collider[] = [];
  constructor(public terrain: Terrain) {}

  addBox(x: number, z: number, hx: number, hz: number, yaw: number, y0: number, y1: number, climb = true) {
    const b: Box = { kind: 'box', x, z, hx, hz, cos: Math.cos(yaw), sin: Math.sin(yaw), y0, y1, climb };
    this.insert(b, Math.hypot(hx, hz));
    return b;
  }
  addCyl(x: number, z: number, r: number, y0: number, y1: number) {
    const c: Cyl = { kind: 'cyl', x, z, r, y0, y1 };
    this.insert(c, r);
    return c;
  }
  private insert(c: Collider, r: number) {
    this.all.push(c);
    for (let i = Math.floor((c.x - r) / CELL); i <= Math.floor((c.x + r) / CELL); i++)
      for (let j = Math.floor((c.z - r) / CELL); j <= Math.floor((c.z + r) / CELL); j++) {
        const k = key(i, j);
        let a = this.grid.get(k);
        if (!a) this.grid.set(k, (a = []));
        a.push(c);
      }
  }
  private near(x: number, z: number, r: number, out: Collider[]) {
    out.length = 0;
    for (let i = Math.floor((x - r) / CELL); i <= Math.floor((x + r) / CELL); i++)
      for (let j = Math.floor((z - r) / CELL); j <= Math.floor((z + r) / CELL); j++) {
        const a = this.grid.get(key(i, j));
        if (a) for (const c of a) if (!out.includes(c)) out.push(c);
      }
    return out;
  }
  private tmp: Collider[] = [];

  /** 把世界坐标转到盒子的本地坐标 */
  static local(b: Box, x: number, z: number, out: { x: number; z: number }) {
    const dx = x - b.x, dz = z - b.z;
    out.x = dx * b.cos - dz * b.sin;
    out.z = dx * b.sin + dz * b.cos;
    return out;
  }
  private l = { x: 0, z: 0 };

  /** 脚下的地面高度：地形，或者能踩上去的盒子顶、柱子顶 */
  groundAt(x: number, z: number, feetY: number, step = 0.45) {
    let h = this.terrain.heightAt(x, z);
    for (const c of this.near(x, z, 0.1, this.tmp)) {
      if (c.y1 > feetY + step || c.y1 <= h) continue;
      if (c.kind === 'cyl') {
        if (Math.hypot(x - c.x, z - c.z) <= c.r) h = c.y1;
      } else {
        const l = Colliders.local(c, x, z, this.l);
        if (Math.abs(l.x) <= c.hx && Math.abs(l.z) <= c.hz) h = c.y1;
      }
    }
    return h;
  }

  /** 把一个竖直圆柱体（角色）从障碍物里推出来。返回最深的那次接触。 */
  resolve(p: THREE.Vector3, radius: number, height: number, step = 0.45): Contact | null {
    let best: Contact | null = null, deep = 0;
    for (const c of this.near(p.x, p.z, radius + 0.1, this.tmp)) {
      if (c.y1 <= p.y + step || c.y0 >= p.y + height) continue;
      let nx = 0, nz = 0, pen = 0;
      if (c.kind === 'cyl') {
        const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), rr = c.r + radius;
        if (d >= rr) continue;
        nx = d > 1e-5 ? dx / d : 1; nz = d > 1e-5 ? dz / d : 0; pen = rr - d;
      } else {
        const l = Colliders.local(c, p.x, p.z, this.l);
        const qx = Math.max(-c.hx, Math.min(c.hx, l.x)), qz = Math.max(-c.hz, Math.min(c.hz, l.z));
        let lx = l.x - qx, lz = l.z - qz;
        const d = Math.hypot(lx, lz);
        if (d >= radius) continue;
        if (d < 1e-5) {
          // 圆心在盒子里：沿最浅的轴推出去
          const ex = c.hx - Math.abs(l.x), ez = c.hz - Math.abs(l.z);
          if (ex < ez) { lx = Math.sign(l.x) || 1; lz = 0; pen = ex + radius; } else { lx = 0; lz = Math.sign(l.z) || 1; pen = ez + radius; }
        } else { lx /= d; lz /= d; pen = radius - d; }
        nx = lx * c.cos + lz * c.sin; nz = -lx * c.sin + lz * c.cos;
      }
      p.x += nx * pen; p.z += nz * pen;
      if (pen > deep) { deep = pen; best = { c, nx, nz }; }
    }
    return best;
  }

  /** 射线检测（相机防穿墙、投射物撞墙）。返回命中距离，没命中返回 maxT。 */
  raycast(o: THREE.Vector3, d: THREE.Vector3, maxT: number, stepLen = 0.35) {
    let best = maxT;
    for (let t = stepLen; t < best; t += stepLen) {
      const y = o.y + d.y * t;
      if (y < this.terrain.heightAt(o.x + d.x * t, o.z + d.z * t) + 0.15) { best = Math.max(0, t - stepLen); break; }
    }
    const mx = o.x + d.x * best * 0.5, mz = o.z + d.z * best * 0.5;
    for (const c of this.near(mx, mz, best * 0.5 + 1, this.tmp)) {
      let t0 = 0, t1 = best;
      if (c.kind === 'box') {
        const lo = Colliders.local(c, o.x, o.z, this.l), ox = lo.x, oz = lo.z;
        const dx = d.x * c.cos - d.z * c.sin, dz = d.x * c.sin + d.z * c.cos;
        const slab = (po: number, pd: number, lo2: number, hi: number) => {
          if (Math.abs(pd) < 1e-6) return po >= lo2 && po <= hi;
          let a = (lo2 - po) / pd, b = (hi - po) / pd;
          if (a > b) [a, b] = [b, a];
          t0 = Math.max(t0, a); t1 = Math.min(t1, b);
          return t0 <= t1;
        };
        if (slab(ox, dx, -c.hx, c.hx) && slab(oz, dz, -c.hz, c.hz) && slab(o.y, d.y, c.y0, c.y1) && t0 < best) best = t0;
      } else {
        const ox = o.x - c.x, oz = o.z - c.z, a = d.x * d.x + d.z * d.z;
        if (a < 1e-8) continue;
        const b = ox * d.x + oz * d.z, cc = ox * ox + oz * oz - c.r * c.r, disc = b * b - a * cc;
        if (disc < 0) continue;
        const t = (-b - Math.sqrt(disc)) / a, y = o.y + d.y * t;
        if (t > 0 && t < best && y > c.y0 && y < c.y1) best = t;
      }
    }
    return best;
  }

  /** 这一点是否被障碍物占着（放置物体、敌人寻路时用） */
  blocked(x: number, z: number, r: number, y: number) {
    for (const c of this.near(x, z, r + 0.1, this.tmp)) {
      if (c.y1 <= y + 0.4 || c.y0 >= y + 1.5) continue;
      if (c.kind === 'cyl') { if (Math.hypot(x - c.x, z - c.z) < c.r + r) return true; }
      else {
        const l = Colliders.local(c, x, z, this.l);
        if (Math.abs(l.x) < c.hx + r && Math.abs(l.z) < c.hz + r) return true;
      }
    }
    return false;
  }
}
