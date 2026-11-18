import * as THREE from 'three';
import { POI } from './layout';
import type { Props } from './props';
import type { Terrain } from './terrain';

/** 让盒子/拱门的长边对准 (dx, dz) 方向所需的 yaw */
export const yawFor = (dx: number, dz: number) => Math.atan2(-dz, dx);

export interface Structures { fires: THREE.Vector3[]; towerTop: number; entranceAngle: number }

/** 摆放所有手工设计的建筑：遗迹竞技场、高塔、起点残垣、零散废墟、敌人营地 */
export function buildStructures(props: Props, terrain: Terrain): Structures {
  const R = POI.ruins;
  const ent = Math.atan2(POI.start.z - R.z, POI.start.x - R.x);
  props.slab(R.x, R.z, 9);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    let d = a - ent;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    if (Math.abs(d) < 0.33) continue;
    props.pillar(R.x + Math.cos(a) * 27, R.z + Math.sin(a) * 27, i % 3 === 1 ? 2.2 + (i % 4) * 0.5 : 6.2, i % 3 === 1);
  }
  props.arch(R.x + Math.cos(ent) * 28.5, R.z + Math.sin(ent) * 28.5, yawFor(-Math.sin(ent), Math.cos(ent)));
  [1.2, 2.5, 3.6, 5.0].forEach((off, i) => {
    const a = ent + off;
    props.wall(R.x + Math.cos(a) * 31.5, R.z + Math.sin(a) * 31.5, 6 + i * 0.8, 2.5 + (i % 2) * 1.2, yawFor(-Math.sin(a), Math.cos(a)), 11 + i);
  });
  props.reserve(R.x, R.z, R.r + 3);

  // 起点附近的残垣
  const S = POI.start;
  props.pillar(S.x - 12, S.z - 8, 4.4);
  props.pillar(S.x - 15.5, S.z - 4, 2.3, true);
  props.pillar(S.x - 9, S.z - 12.5, 1.6, true);
  props.wall(S.x - 16, S.z - 12, 6.5, 2.5, 0.5, 3);
  props.reserve(S.x, S.z, 9);

  // 高地上的塔和柱阵
  const T = POI.tower;
  const towerTop = props.tower(T.x, T.z);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.3;
    props.pillar(T.x - 22 + Math.cos(a) * 7, T.z + 6 + Math.sin(a) * 7, i % 2 ? 5.2 : 2.4, i % 2 === 0);
  }
  props.wall(T.x + 12, T.z + 9, 7, 3.1, 1.1, 21);

  // 零散的小废墟
  const n = new THREE.Vector3();
  const spots: [number, number][] = [[62, 98], [-38, -18], [84, -38], [176, -62], [-176, 60], [38, 196], [-204, -104], [200, 96], [-52, 110]];
  spots.forEach(([x, z], i) => {
    if (terrain.heightAt(x, z) < 2.2 || terrain.normalAt(x, z, n).y < 0.9) return;
    props.pillar(x, z, 4.8 + (i % 3) * 0.7);
    props.pillar(x + 3.4, z + 1.2, 2 + (i % 2), true);
    if (i % 2 === 0) props.wall(x - 2.5, z + 4.5, 5.5, 2.5, i * 0.7, 30 + i);
    if (i % 3 === 0) props.pillar(x - 3.2, z - 2.6, 3.4);
  });

  const fires = [POI.campA, POI.campB, POI.campC].map((c, i) => props.camp(c.x, c.z, 50 + i));
  return { fires, towerTop, entranceAngle: ent };
}
