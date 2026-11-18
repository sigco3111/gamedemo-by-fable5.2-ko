import * as THREE from 'three';
import { smoothstep } from '../core/math';
import { CHAR_LIGHT } from './toon';

interface Key { h: number; top: THREE.Color; hor: THREE.Color; light: THREE.Color; li: number; hs: THREE.Color; hg: THREE.Color; hi: number; cloud: THREE.Color; shade: THREE.Color }
const K = (h: number, top: string, hor: string, light: string, li: number, hs: string, hg: string, hi: number, cloud: string, shade: string): Key => ({
  h, top: new THREE.Color(top), hor: new THREE.Color(hor), light: new THREE.Color(light), li,
  hs: new THREE.Color(hs), hg: new THREE.Color(hg), hi, cloud: new THREE.Color(cloud), shade: new THREE.Color(shade),
});
// 一天里的关键时刻：天顶色、地平线色、主光色和强度、环境光（天/地）和强度、云的亮面和暗面
const KEYS: Key[] = [
  K(0, '#070b24', '#182544', '#8fa6ff', 0.85, '#3d4e88', '#1a2034', 1.25, '#2c3658', '#141a30'),
  K(4.5, '#0b1030', '#22305a', '#8fa6ff', 0.8, '#44558e', '#1c2236', 1.25, '#343e62', '#171d34'),
  K(6, '#3d55a0', '#f6a880', '#ffb890', 1.5, '#a59cc4', '#5c4c4a', 1.25, '#ffd2b4', '#8f6c8c'),
  K(8, '#3c8ce8', '#c2e4ff', '#fff0d8', 2.3, '#c4dcff', '#7c8c62', 1.5, '#ffffff', '#c6d4ee'),
  K(12, '#2c7ce6', '#b8deff', '#fffaf0', 2.6, '#cfe3ff', '#869468', 1.55, '#ffffff', '#cbd8f0'),
  K(16.5, '#3a84e0', '#c8e0f8', '#ffeccc', 2.3, '#c8dcf8', '#80885e', 1.5, '#fff6ea', '#c8cfe6'),
  K(18.6, '#4a4a94', '#ff9c60', '#ffa06a', 1.9, '#d6aca4', '#6e5648', 1.5, '#ffc09a', '#84608a'),
  K(20, '#0d1338', '#27335e', '#8fa6ff', 0.8, '#44558e', '#1c2236', 1.25, '#343e62', '#171d34'),
  K(24, '#070b24', '#182544', '#8fa6ff', 0.85, '#3d4e88', '#1a2034', 1.25, '#2c3658', '#141a30'),
];

const _night = new THREE.Color(0.5, 0.56, 0.74), _white = new THREE.Color(1, 1, 1);
const VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;
const FRAG = /* glsl */ `
uniform vec3 uTop, uHorizon, uSunColor, uSunDir, uMoonDir, uCloud, uShade;
uniform float uTime, uNight;
varying vec3 vDir;
// 不用 sin 的哈希：sin 在部分显卡上精度不够，云的边缘会出现锯齿状的折线
float hash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
// 每一层都转个角度，免得各层的格子方向叠在一起露出网格
const mat2 ROT = mat2(0.8, -0.6, 0.6, 0.8);
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vn(p); p = ROT * p * 2.03 + 11.7; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  vec3 col = mix(uHorizon, uTop, pow(max(d.y, 0.0), 0.5));
  col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.3, d.y));
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (pow(sd, 28.0) * 0.28 + pow(sd, 5.0) * 0.1) * (1.0 - uNight);
  col = mix(col, uSunColor * 2.6, smoothstep(0.99925, 0.9996, sd) * (1.0 - uNight));
  // 月亮和星星
  float md = max(dot(d, uMoonDir), 0.0);
  col = mix(col, vec3(1.5, 1.6, 1.9), smoothstep(0.9990, 0.9994, md) * uNight);
  col += vec3(0.5, 0.6, 1.0) * pow(md, 60.0) * 0.25 * uNight;
  vec2 sp = d.xz / (abs(d.y) + 0.35) * 90.0;
  vec2 cell = floor(sp);
  float star = step(0.985, hash(cell)) * smoothstep(0.35, 0.0, length(fract(sp) - 0.5));
  col += star * uNight * smoothstep(0.0, 0.25, d.y) * (0.6 + 0.4 * sin(uTime * 2.0 + hash(cell) * 50.0)) * 1.6;
  // 卡通感的云：密度用窄的 smoothstep 切出硬边
  if (d.y > 0.0) {
    vec2 uv = d.xz / (d.y + 0.14) * 0.85 + vec2(uTime * 0.006, uTime * 0.0025);
    uv += 0.22 * vec2(vn(uv * 0.7 + 3.1), vn(uv * 0.7 + 7.7));
    float c = fbm(uv * 1.25);
    float dens = smoothstep(0.52, 0.60, c);
    float inner = smoothstep(0.60, 0.74, c);
    float lit = smoothstep(0.45, 0.62, fbm(uv * 1.25 + uSunDir.xz * 0.12));
    vec3 cc = mix(uCloud, uShade, max(inner * 0.55, (1.0 - lit) * 0.5));
    col = mix(col, cc, dens * smoothstep(0.03, 0.24, d.y) * 0.95);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

/** 天空穹顶 + 昼夜循环 + 主光和阴影 */
export class Sky {
  hour = 9;
  /** 现实多少秒走完游戏里的一天 */
  dayLength = 900;
  paused = false;
  readonly sun = new THREE.DirectionalLight(0xffffff, 2);
  readonly hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1);
  readonly mesh: THREE.Mesh;
  readonly lightDir = new THREE.Vector3(0, 1, 0);
  readonly sunDir = new THREE.Vector3();
  readonly horizon = new THREE.Color();
  readonly top = new THREE.Color();
  readonly lightColor = new THREE.Color();
  night = 0;
  private time = 0;
  private u = {
    uTop: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uSunColor: { value: new THREE.Color() },
    uSunDir: { value: new THREE.Vector3() }, uMoonDir: { value: new THREE.Vector3() },
    uCloud: { value: new THREE.Color() }, uShade: { value: new THREE.Color() }, uTime: { value: 0 }, uNight: { value: 0 },
  };

  constructor(private scene: THREE.Scene, shadowSize: number) {
    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 16),
      new THREE.ShaderMaterial({ uniforms: this.u, vertexShader: VERT, fragmentShader: FRAG, side: THREE.BackSide, depthWrite: false, fog: false }),
    );
    this.mesh.scale.setScalar(600);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1000;
    scene.add(this.mesh, this.hemi, this.sun, this.sun.target);
    scene.fog = new THREE.FogExp2(0xffffff, 0.0021);
    if (shadowSize > 0) {
      const s = this.sun.shadow, R = 46;
      this.sun.castShadow = true;
      s.mapSize.set(shadowSize, shadowSize);
      s.camera.left = -R; s.camera.right = R; s.camera.top = R; s.camera.bottom = -R;
      s.camera.near = 1; s.camera.far = 320;
      s.bias = -0.0004; s.normalBias = 0.045;
    }
  }

  update(dt: number, cam: THREE.Vector3, focus: THREE.Vector3) {
    if (!this.paused) this.hour = (this.hour + (dt * 24) / this.dayLength) % 24;
    this.time += dt;
    const h = this.hour;
    let i = 0;
    while (i < KEYS.length - 2 && KEYS[i + 1].h <= h) i++;
    const a = KEYS[i], b = KEYS[i + 1], t = (h - a.h) / (b.h - a.h);

    const th = ((h - 6) / 12) * Math.PI;
    this.sunDir.set(Math.cos(th), Math.sin(th), 0.38).normalize();
    const moon = this.u.uMoonDir.value.set(-Math.cos(th), -Math.sin(th), 0.38).normalize();
    const day = this.sunDir.y > 0.02;
    this.lightDir.copy(day ? this.sunDir : moon);
    const fade = smoothstep(0.0, 0.16, this.lightDir.y);
    this.night = smoothstep(0.08, -0.14, this.sunDir.y);

    this.top.copy(a.top).lerp(b.top, t);
    this.horizon.copy(a.hor).lerp(b.hor, t);
    this.lightColor.copy(a.light).lerp(b.light, t);
    this.sun.color.copy(this.lightColor);
    this.sun.intensity = (a.li + (b.li - a.li) * t) * (0.25 + 0.75 * fade);
    this.hemi.color.copy(a.hs).lerp(b.hs, t);
    this.hemi.groundColor.copy(a.hg).lerp(b.hg, t);
    this.hemi.intensity = a.hi + (b.hi - a.hi) * t;
    (this.scene.fog as THREE.FogExp2).color.copy(this.horizon);

    // 阴影相机跟着玩家走；位置按纹素取整，减少阴影边缘抖动
    const snap = 92 / this.sun.shadow.mapSize.x;
    const fx = Math.round(focus.x / snap) * snap, fz = Math.round(focus.z / snap) * snap;
    this.sun.target.position.set(fx, focus.y, fz);
    this.sun.position.set(fx, focus.y, fz).addScaledVector(this.lightDir, 150);

    // 角色的受光水平：白天接近 1，夜里压暗偏蓝，但留一个下限保证看得清
    const lv = CHAR_LIGHT.uLevel.value, sc = CHAR_LIGHT.uSunCol.value.copy(this.sun.color).multiplyScalar(this.sun.intensity);
    lv.copy(this.hemi.color).add(this.hemi.groundColor).multiplyScalar((0.5 * this.hemi.intensity * 0.75) / Math.PI);
    lv.r += (sc.r * 0.8) / Math.PI; lv.g += (sc.g * 0.8) / Math.PI; lv.b += (sc.b * 0.8) / Math.PI;
    lv.lerp(_night, this.night * 0.65);
    lv.r = Math.min(lv.r, 1); lv.g = Math.min(lv.g, 1); lv.b = Math.min(lv.b, 1);
    CHAR_LIGHT.uRimCol.value.copy(this.lightColor).lerp(_white, 0.35);
    this.u.uTop.value.copy(this.top);
    this.u.uHorizon.value.copy(this.horizon);
    this.u.uSunColor.value.copy(this.lightColor);
    this.u.uSunDir.value.copy(this.sunDir);
    this.u.uCloud.value.copy(a.cloud).lerp(b.cloud, t);
    this.u.uShade.value.copy(a.shade).lerp(b.shade, t);
    this.u.uTime.value = this.time;
    this.u.uNight.value = this.night;
    this.mesh.position.copy(cam);
  }

  /** 给界面显示用，例如 "09:30" */
  clock() {
    const m = Math.floor((this.hour % 1) * 60);
    return `${String(Math.floor(this.hour)).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }
}
