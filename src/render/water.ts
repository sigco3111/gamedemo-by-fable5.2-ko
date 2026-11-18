import * as THREE from 'three';
import { WORLD, POI } from '../world/layout';
import type { Sky } from './sky';

const VERT = /* glsl */ `
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;
const FRAG = /* glsl */ `
uniform sampler2D tColor;
uniform float uTime, uHalf;
uniform vec3 uSunDir, uSunColor, uSky, uHorizon, uShallow, uDeep, uLake;
uniform float uGlow;
varying vec3 vWorld;
#include <fog_pars_fragment>
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float wave(vec2 p) { return vn(p * 0.35 + vec2(uTime * 0.25, uTime * 0.13)) + 0.5 * vn(p * 0.9 - vec2(uTime * 0.3, -uTime * 0.21)); }
void main() {
  vec2 uv = (vWorld.xz + uHalf) / (uHalf * 2.0);
  float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  float h = mix(-10.0, texture2D(tColor, uv).a * 16.0 - 8.0, inside);
  float depth = max(-h, 0.0);

  vec2 p = vWorld.xz;
  float e = 0.35;
  float w0 = wave(p);
  vec3 n = normalize(vec3((w0 - wave(p + vec2(e, 0.0))) * 0.55, 1.0, (w0 - wave(p + vec2(0.0, e))) * 0.55));
  vec3 view = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(view, n), 0.0), 3.0);

  vec3 col = mix(uShallow, uDeep, smoothstep(0.0, 5.0, depth));
  col = mix(col, mix(uHorizon, uSky, 0.5), fres * 0.65);
  // 高光和卡通亮纹
  float spec = pow(max(dot(reflect(-uSunDir, n), view), 0.0), 140.0);
  col += uSunColor * spec * 1.6;
  float streak = smoothstep(0.80, 0.84, vn(vec2(p.x * 0.16, p.y * 0.7) + vec2(uTime * 0.12, 0.0)) * 0.6 + vn(vec2(p.x * 0.5, p.y * 1.9) - vec2(0.0, uTime * 0.25)) * 0.4 + 0.2);
  col += streak * 0.10 * uSunColor;
  // 数据湖：湖水深处有一张发光的网格，光点沿着格线一格一格地跑
  float lake = smoothstep(uLake.z, uLake.z - 18.0, distance(p, uLake.xy)) * smoothstep(1.0, 3.5, depth);
  if (lake > 0.0) {
    vec2 gp = p / 5.0, gf = abs(fract(gp) - 0.5), fw = fwidth(gp);
    float lx = smoothstep(0.5 - 0.03 - fw.x, 0.5 - fw.x * 0.3, gf.x), ly = smoothstep(0.5 - 0.03 - fw.y, 0.5 - fw.y * 0.3, gf.y);
    float far = smoothstep(170.0, 50.0, distance(cameraPosition, vWorld));
    vec2 id = floor(gp + 0.5);
    float runX = smoothstep(0.86, 1.0, fract(gp.y * 0.11 + hash(vec2(id.x, 3.0)) - uTime * 0.16));
    float runY = smoothstep(0.86, 1.0, fract(gp.x * 0.11 + hash(vec2(7.0, id.y)) + uTime * 0.13));
    col += vec3(0.30, 0.95, 1.0) * (lx * (0.12 + 0.9 * runX) + ly * (0.12 + 0.9 * runY)) * lake * far * uGlow;
  }
  // 岸边白沫
  float foam = smoothstep(0.55, 0.0, depth + 0.18 * sin(depth * 9.0 - uTime * 2.2) + 0.25 * vn(p * 1.6 + uTime * 0.2));
  col = mix(col, vec3(1.0), foam * 0.75 * step(0.001, depth));
  float alpha = mix(0.5, 0.93, smoothstep(0.0, 3.2, depth));
  alpha = max(alpha, foam * 0.8) * smoothstep(0.0, 0.08, depth);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export class Water {
  readonly mesh: THREE.Mesh;
  private u: Record<string, THREE.IUniform>;
  private t = 0;
  constructor(colorTex: THREE.Texture) {
    this.u = THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      {
        tColor: { value: null }, uTime: { value: 0 }, uHalf: { value: WORLD.half },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color() },
        uSky: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() },
        uShallow: { value: new THREE.Color('#5fd6d0') }, uDeep: { value: new THREE.Color('#1f6fc4') },
        uLake: { value: new THREE.Vector3(POI.lake.x, POI.lake.z, POI.lake.r) }, uGlow: { value: 1 },
      },
    ]);
    this.u.tColor.value = colorTex;
    const mat = new THREE.ShaderMaterial({ uniforms: this.u, vertexShader: VERT, fragmentShader: FRAG, transparent: true, fog: true, depthWrite: false });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2600, 2600, 1, 1).rotateX(-Math.PI / 2), mat);
    this.mesh.position.y = WORLD.sea;
    this.mesh.renderOrder = 5;
  }
  update(dt: number, sky: Sky) {
    this.t += dt;
    this.u.uTime.value = this.t;
    (this.u.uSunDir.value as THREE.Vector3).copy(sky.lightDir);
    (this.u.uSunColor.value as THREE.Color).copy(sky.lightColor).multiplyScalar(1 - sky.night * 0.6);
    (this.u.uSky.value as THREE.Color).copy(sky.top);
    (this.u.uHorizon.value as THREE.Color).copy(sky.horizon);
    this.u.uGlow.value = 0.55 + sky.night * 0.75;
    const dim = 1 - sky.night * 0.72;
    (this.u.uShallow.value as THREE.Color).set('#5fd6d0').multiplyScalar(dim);
    (this.u.uDeep.value as THREE.Color).set('#1f6fc4').multiplyScalar(dim);
  }
}
