import * as THREE from 'three';

/** 卡通渲染用的色阶贴图：16 格，左半是背光面，右半是受光面 */
function gradient(shadow: number, mid: number, edge: number) {
  const d = new Uint8Array(16);
  for (let i = 0; i < 16; i++) d[i] = i < edge ? shadow : i === edge ? mid : 255;
  const t = new THREE.DataTexture(d, 16, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}
/** 地面用的平滑色阶：背光面也不会黑下去，山坡的明暗是渐变而不是硬边 */
function ramp(lo: number) {
  const d = new Uint8Array(16);
  for (let i = 0; i < 16; i++) d[i] = lo + (255 - lo) * Math.min(1, Math.max(0, (i - 6) / 7));
  const t = new THREE.DataTexture(d, 16, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}
export const GRAD = {
  ground: ramp(150),
  cloth: gradient(148, 205, 9),
  skin: gradient(208, 232, 9),
  hair: gradient(138, 200, 8),
  soft: gradient(176, 220, 8),
};
export type GradName = keyof typeof GRAD;

export function toon(o: { color?: THREE.ColorRepresentation; grad?: GradName; vertexColors?: boolean; map?: THREE.Texture; side?: THREE.Side; emissive?: THREE.ColorRepresentation } = {}) {
  return new THREE.MeshToonMaterial({
    color: o.color ?? 0xffffff, gradientMap: GRAD[o.grad ?? 'cloth'], vertexColors: o.vertexColors ?? false,
    map: o.map ?? null, side: o.side ?? THREE.FrontSide, emissive: o.emissive ?? 0x000000,
  });
}

// ---------------------------------------------------------------------------
// 角色专用的着色：受光面用本色，背光面换成带色相偏移的暗色（皮肤偏暖、布料和头发偏冷），
// 再加一圈边缘光；头发另有一道「天使环」高光。亮度由 CHAR_LIGHT 统一控制，
// 这样白衣服不会被太阳照得过曝，夜里角色也不会黑成一团。
// ---------------------------------------------------------------------------
export const CHAR_LIGHT = {
  uSunCol: { value: new THREE.Color(1, 1, 1) },
  uLevel: { value: new THREE.Color(0.92, 0.92, 0.9) },
  uRimCol: { value: new THREE.Color(1, 0.98, 0.94) },
};
/** 角色用的明暗分界：0 = 暗面，1 = 亮面，中间用几格做一小段过渡，边缘不锯齿 */
function charGradient(edge: number, soft: number) {
  const N = 64, d = new Uint8Array(N);
  for (let i = 0; i < N; i++) d[i] = 255 * Math.min(1, Math.max(0, (i - edge) / soft + 0.5));
  const t = new THREE.DataTexture(d, N, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}
export type CharKind = 'cloth' | 'skin' | 'hair' | 'face';
const CHAR: Record<CharKind, { grad: THREE.DataTexture; tint: [number, number, number]; rim: number }> = {
  cloth: { grad: charGradient(36, 2.5), tint: [0.7, 0.68, 0.86], rim: 0.26 },
  skin: { grad: charGradient(33, 6), tint: [0.99, 0.8, 0.78], rim: 0.2 },
  hair: { grad: charGradient(35, 3), tint: [0.64, 0.6, 0.8], rim: 0.34 },
  face: { grad: charGradient(22, 10), tint: [1.0, 0.86, 0.84], rim: 0.0 },
};
const CHAR_FRAG = /* glsl */ `
  vec3 _base = diffuseColor.rgb;
  float _full = max(dot(_base * uSunCol, vec3(1.0)) * RECIPROCAL_PI, 1e-5);
  float _k = clamp(dot(reflectedLight.directDiffuse, vec3(1.0)) / _full, 0.0, 1.0);
  vec3 _shd = _base * uShadeTint;
  _shd = mix(vec3(dot(_shd, vec3(0.299, 0.587, 0.114))), _shd, 1.2);
  vec3 _col = mix(_shd, _base, _k) * uLevel;
  vec3 _wn = transformDirectionByInverseViewMatrix(normal, viewMatrix);
  float _rim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 4.0);
  _col += uRimCol * _rim * uRimK * (0.3 + 0.7 * clamp(_wn.y + 0.45, 0.0, 1.0));
  if (uHair > 0.5) {
    float _ring = smoothstep(0.40, 0.55, _wn.y) * (1.0 - smoothstep(0.60, 0.80, _wn.y));
    float _a = atan(_wn.x, _wn.z);
    _ring *= clamp(0.6 + 0.55 * sin(_a * 17.0) * sin(_a * 6.0 + 1.3), 0.0, 1.0);
    _col += uRimCol * _ring * 0.3 * (0.35 + 0.65 * _k);
  }
  vec3 outgoingLight = _col + totalEmissiveRadiance;`;

export function charToon(kind: CharKind, o: { map?: THREE.Texture; vertexColors?: boolean; side?: THREE.Side } = {}) {
  const c = CHAR[kind];
  const m = new THREE.MeshToonMaterial({ gradientMap: c.grad, vertexColors: o.vertexColors ?? true, map: o.map ?? null, side: o.side ?? THREE.FrontSide });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, CHAR_LIGHT, { uShadeTint: { value: new THREE.Color(...c.tint) }, uRimK: { value: c.rim }, uHair: { value: kind === 'hair' ? 1 : 0 } });
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uSunCol, uLevel, uRimCol, uShadeTint;\nuniform float uRimK, uHair;')
      .replace('vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;', CHAR_FRAG);
  };
  // 同一种写法的材质共用一份着色器程序，各自的 uniform 不同
  m.customProgramCacheKey = () => 'char';
  return m;
}

/** 发光体：不受光照，颜色可以大于 1，配合泛光后期会「亮起来」 */
export function glowMat(color: THREE.ColorRepresentation = 0xffffff, intensity = 1, vertexColors = false) {
  const m = new THREE.MeshBasicMaterial({ color, vertexColors, toneMapped: false });
  m.color.multiplyScalar(intensity);
  return m;
}

const OUTLINE_VERT = /* glsl */ `
#include <common>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
uniform float uThick;
varying vec3 vCol;
void main() {
  #include <beginnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
  vec3 n = normalize(normalMatrix * objectNormal);
  // 描边粗细随距离略微变粗，远处不至于消失
  mvPosition.xyz += n * uThick * (0.55 + 0.45 * clamp(-mvPosition.z / 5.0, 0.0, 4.0));
  gl_Position = projectionMatrix * mvPosition;
  #ifdef USE_COLOR
    vCol = color;
  #else
    vCol = vec3(1.0);
  #endif
  #include <fog_vertex>
}`;
const OUTLINE_FRAG = /* glsl */ `
uniform vec3 uTint;
uniform float uFlash;
varying vec3 vCol;
#include <fog_pars_fragment>
void main() {
  gl_FragColor = vec4(mix(vCol * uTint, vec3(1.0), uFlash), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

/** 反向外壳描边：把模型沿法线撑大一圈，只画背面 */
export function outlineMat(thick = 0.011, tint: THREE.ColorRepresentation = '#4a3040', vertexColors = true) {
  return new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uThick: { value: thick }, uTint: { value: new THREE.Color(tint) }, uFlash: { value: 0 } },
    ]),
    vertexShader: OUTLINE_VERT, fragmentShader: OUTLINE_FRAG, side: THREE.BackSide, vertexColors, fog: true,
  });
}

export function addOutline(mesh: THREE.Mesh, mat: THREE.ShaderMaterial) {
  let o: THREE.Mesh;
  if ((mesh as THREE.SkinnedMesh).isSkinnedMesh) {
    const sk = mesh as THREE.SkinnedMesh;
    const so = new THREE.SkinnedMesh(mesh.geometry, mat);
    so.bind(sk.skeleton, sk.bindMatrix);
    so.frustumCulled = false;
    mesh.parent?.add(so);
    o = so;
  } else {
    o = new THREE.Mesh(mesh.geometry, mat);
    mesh.add(o);
  }
  o.userData.outline = true;
  return o;
}
