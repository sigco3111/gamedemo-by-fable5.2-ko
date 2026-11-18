import * as THREE from 'three';
import { WORLD } from '../world/layout';
import type { Terrain } from '../world/terrain';
import { toon } from './toon';

interface LayerOpt { count: number; tile: number; width: number; height: number; seed: number; inner: number }

/**
 * 草：一层固定数量的草叶，在着色器里绕着玩家「环绕平铺」，所以走到哪儿脚边都有草，
 * 数量却不随地图大小增长。高度和草密度从地形数据贴图里读。
 */
class GrassLayer {
  readonly mesh: THREE.Mesh;
  private u = {
    uCenter: { value: new THREE.Vector3() }, uTime: { value: 0 }, tData: { value: null as THREE.Texture | null },
    tColor: { value: null as THREE.Texture | null }, uTile: { value: 0 }, uSize: { value: new THREE.Vector2() },
    uPush: { value: new THREE.Vector3() }, uInner: { value: 0 },
  };

  constructor(terrain: Terrain, o: LayerOpt) {
    // 一片草叶：两节加一个尖
    const blade = new Float32Array([-1, 0, 0, 1, 0, 0, -0.8, 0.4, 0, 0.8, 0.4, 0, -0.5, 0.75, 0, 0.5, 0.75, 0, 0, 1, 0]);
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(blade, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(21).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
    geo.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4, 3, 5, 4, 4, 5, 6]);
    const off = new Float32Array(o.count * 2), rnd = new Float32Array(o.count * 4);
    let s = o.seed;
    const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < o.count; i++) {
      off[i * 2] = r() * o.tile; off[i * 2 + 1] = r() * o.tile;
      rnd[i * 4] = r() * 6.2832; rnd[i * 4 + 1] = 0.6 + r() * 0.8; rnd[i * 4 + 2] = r(); rnd[i * 4 + 3] = r() - 0.5;
    }
    geo.setAttribute('aOffset', new THREE.InstancedBufferAttribute(off, 2));
    geo.setAttribute('aRand', new THREE.InstancedBufferAttribute(rnd, 4));
    geo.instanceCount = o.count;

    this.u.tData.value = terrain.dataTex;
    this.u.tColor.value = terrain.colorTex;
    this.u.uTile.value = o.tile;
    this.u.uSize.value.set(o.width, o.height);

    this.u.uInner.value = o.inner;
    const mat = toon({ grad: 'ground', side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, this.u);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', /* glsl */ `#include <common>
          attribute vec2 aOffset; attribute vec4 aRand;
          uniform vec3 uCenter, uPush; uniform float uTime, uTile, uInner; uniform vec2 uSize;
          uniform sampler2D tData, tColor;
          varying vec3 vGrass;
          vec4 terr(vec2 xz) {
            vec2 g = (xz + ${WORLD.half.toFixed(1)}) / ${WORLD.cell.toFixed(1)};
            ivec2 i = ivec2(floor(g)); vec2 f = fract(g);
            ivec2 mx = ivec2(${WORLD.n - 1});
            vec4 a = texelFetch(tData, clamp(i, ivec2(0), mx), 0), b = texelFetch(tData, clamp(i + ivec2(1, 0), ivec2(0), mx), 0);
            vec4 c = texelFetch(tData, clamp(i + ivec2(0, 1), ivec2(0), mx), 0), d = texelFetch(tData, clamp(i + ivec2(1, 1), ivec2(0), mx), 0);
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
          }`)
        .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);')
        .replace('#include <begin_vertex>', /* glsl */ `
          vec2 rel = mod(aOffset - uCenter.xz, uTile) - uTile * 0.5;
          vec2 wxz = uCenter.xz + rel;
          float dd = length(rel) / (uTile * 0.5);
          vec4 td = terr(wxz);
          float keep = step(aRand.z, td.g * 1.15) * (1.0 - smoothstep(0.72, 0.98, dd)) * smoothstep(uInner * 0.6, uInner, dd);
          float hgt = uSize.y * aRand.y * keep;
          float wind = sin(uTime * 1.7 + wxz.x * 0.33 + wxz.y * 0.21) * 0.6 + sin(uTime * 0.6 + wxz.x * 0.05 - wxz.y * 0.07);
          float k = position.y * position.y;
          vec2 dir = vec2(cos(aRand.x), sin(aRand.x));
          vec3 transformed = vec3(wxz.x, td.r, wxz.y);
          transformed.xz += dir * position.x * uSize.x * (keep > 0.0 ? 1.0 : 0.0);
          transformed.y += position.y * hgt;
          transformed.xz += (vec2(0.8, 0.5) * wind * 0.16 + dir.yx * aRand.w * 0.3) * k * hgt;
          // 被角色踩开
          vec2 away = wxz - uPush.xz;
          float pd = length(away);
          transformed.xz += normalize(away + 0.0001) * (1.0 - smoothstep(0.2, 1.1, pd)) * 0.45 * k * step(abs(td.r - uPush.y), 1.5);
          vec2 cuv = (wxz + ${WORLD.half.toFixed(1)}) / ${WORLD.size.toFixed(1)};
          vec3 base = texture2D(tColor, cuv).rgb;
          vGrass = mix(base * 0.82, base * 1.18 + vec3(0.07, 0.09, 0.0), position.y) * (0.92 + 0.16 * aRand.z);`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vGrass;')
        .replace('#include <color_fragment>', 'diffuseColor.rgb = vGrass;')
        .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal = normalize(vNormal);');
    };
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.receiveShadow = true;
  }
  update(t: number, center: THREE.Vector3, push: THREE.Vector3) {
    this.u.uTime.value = t;
    this.u.uCenter.value.copy(center);
    this.u.uPush.value.copy(push);
  }
}

export class Grass {
  private layers: GrassLayer[];
  private t = 0;
  constructor(scene: THREE.Scene, terrain: Terrain, near: number, far: number) {
    this.layers = [
      new GrassLayer(terrain, { count: near, tile: 46, width: 0.05, height: 0.46, seed: 11, inner: 0 }),
      // 远景层的草叶更大更稀，只在近景层之外出现
      new GrassLayer(terrain, { count: far, tile: 140, width: 0.11, height: 0.6, seed: 97, inner: 0.3 }),
    ];
    for (const l of this.layers) scene.add(l.mesh);
  }
  update(dt: number, center: THREE.Vector3, push: THREE.Vector3) {
    this.t += dt;
    for (const l of this.layers) l.update(this.t, center, push);
  }
}
