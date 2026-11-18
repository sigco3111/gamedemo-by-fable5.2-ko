import * as THREE from 'three';

interface POpt {
  pos: THREE.Vector3; vel?: THREE.Vector3; life?: number; size?: number; size1?: number; color: THREE.ColorRepresentation; color1?: THREE.ColorRepresentation;
  gravity?: number; drag?: number; alpha?: number;
  /** 只对字符粒子有用：用图集里的第几个字符，不填就随机 */
  glyph?: number;
}
const PV = /* glsl */ `
attribute vec4 aColor; attribute float aSize; uniform float uScale; varying vec4 vColor;
void main() { vColor = aColor; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / max(0.1, -mv.z); }`;
const PF = /* glsl */ `
varying vec4 vColor;
void main() { float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d); gl_FragColor = vec4(vColor.rgb, vColor.a * a); }`;

// 字符粒子：每个点从图集里取一格（8 列 4 行）
const GV = /* glsl */ `
attribute vec4 aColor; attribute float aSize; attribute float aGlyph; uniform float uScale; varying vec4 vColor; varying vec2 vCell;
void main() { vColor = aColor; vCell = vec2(mod(aGlyph, 8.0), floor(aGlyph / 8.0)); vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / max(0.1, -mv.z); }`;
const GF = /* glsl */ `
uniform sampler2D tAtlas; varying vec4 vColor; varying vec2 vCell;
void main() { float a = texture2D(tAtlas, (vCell + gl_PointCoord) / vec2(8.0, 4.0)).a; if (a < 0.04) discard; gl_FragColor = vec4(vColor.rgb * 1.35, vColor.a * a); }`;
export const GLYPHS = ['0', '1', '0', '1', '{', '}', '<', '>', '/', '=', ';', '+', '#', 'λ', 'Σ', '∇', 'θ', 'π', '∂', '%', '&', '@', 'if', 'fn', '[]', '()', '=>', 'GPU', '7', '3', '42', 'tk'];
function glyphAtlas() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
  GLYPHS.forEach((ch, i) => {
    g.font = `700 ${ch.length > 2 ? 26 : ch.length > 1 ? 36 : 50}px Consolas, "Courier New", monospace`;
    g.fillText(ch, (i % 8) * 64 + 32, Math.floor(i / 8) * 64 + 35);
  });
  const t = new THREE.CanvasTexture(c);
  t.flipY = false;
  return t;
}

/** 粒子池：固定容量，死掉的粒子和末尾交换，保证活着的都排在前面 */
class Pool {
  readonly points: THREE.Points;
  private n = 0;
  private pos: Float32Array; private colr: Float32Array; private size: Float32Array;
  private vel: Float32Array; private life: Float32Array; private maxLife: Float32Array;
  private s0: Float32Array; private s1: Float32Array; private c0: Float32Array; private c1: Float32Array; private grav: Float32Array; private drag: Float32Array;
  private glyph: Float32Array;
  private geo = new THREE.BufferGeometry();
  readonly mat: THREE.ShaderMaterial;
  constructor(private max: number, additive: boolean, atlas?: THREE.Texture) {
    const f = (k: number) => new Float32Array(max * k);
    this.pos = f(3); this.colr = f(4); this.size = f(1); this.vel = f(3); this.life = f(1); this.maxLife = f(1);
    this.s0 = f(1); this.s1 = f(1); this.c0 = f(4); this.c1 = f(3); this.grav = f(1); this.drag = f(1);
    this.glyph = f(1);
    if (atlas) this.geo.setAttribute('aGlyph', new THREE.BufferAttribute(this.glyph, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('aColor', new THREE.BufferAttribute(this.colr, 4).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 600 }, tAtlas: { value: atlas ?? null } }, vertexShader: atlas ? GV : PV, fragmentShader: atlas ? GF : PF, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(this.geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 20;
  }
  private a = new THREE.Color(); private b = new THREE.Color();
  emit(o: POpt) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.pos[i * 3] = o.pos.x; this.pos[i * 3 + 1] = o.pos.y; this.pos[i * 3 + 2] = o.pos.z;
    this.vel[i * 3] = o.vel?.x ?? 0; this.vel[i * 3 + 1] = o.vel?.y ?? 0; this.vel[i * 3 + 2] = o.vel?.z ?? 0;
    this.life[i] = this.maxLife[i] = o.life ?? 0.6;
    this.s0[i] = o.size ?? 0.2; this.s1[i] = o.size1 ?? 0;
    this.a.set(o.color); this.b.set(o.color1 ?? o.color);
    this.c0[i * 4] = this.a.r; this.c0[i * 4 + 1] = this.a.g; this.c0[i * 4 + 2] = this.a.b; this.c0[i * 4 + 3] = o.alpha ?? 1;
    this.c1[i * 3] = this.b.r; this.c1[i * 3 + 1] = this.b.g; this.c1[i * 3 + 2] = this.b.b;
    this.grav[i] = o.gravity ?? 0; this.drag[i] = o.drag ?? 0;
    this.glyph[i] = o.glyph ?? Math.floor(Math.random() * 32);
  }
  update(dt: number) {
    for (let i = 0; i < this.n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const l = --this.n;
        if (i !== l) {
          for (const [arr, k] of [[this.pos, 3], [this.vel, 3], [this.c0, 4], [this.c1, 3]] as [Float32Array, number][]) for (let j = 0; j < k; j++) arr[i * k + j] = arr[l * k + j];
          for (const arr of [this.life, this.maxLife, this.s0, this.s1, this.grav, this.drag, this.glyph]) arr[i] = arr[l];
        }
        i--;
        continue;
      }
      const u = 1 - this.life[i] / this.maxLife[i], d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 2] *= d;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt;
      for (let j = 0; j < 3; j++) {
        this.pos[i * 3 + j] += this.vel[i * 3 + j] * dt;
        this.colr[i * 4 + j] = this.c0[i * 4 + j] + (this.c1[i * 3 + j] - this.c0[i * 4 + j]) * u;
      }
      this.colr[i * 4 + 3] = this.c0[i * 4 + 3] * Math.min(1, (1 - u) * 3) * Math.min(1, u * 12 + 0.2);
      this.size[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * u;
    }
    this.geo.setDrawRange(0, this.n);
    for (const k of ['position', 'aColor', 'aSize', 'aGlyph']) if (this.geo.attributes[k]) (this.geo.attributes[k] as THREE.BufferAttribute).needsUpdate = true;
  }
}

interface Live { obj: THREE.Object3D; t: number; dur: number; step: (u: number, dt: number) => void; mats: THREE.Material[] }

function arcGeo(r0: number, r1: number, a0: number, a1: number, seg = 28) {
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= seg; i++) {
    const u = i / seg, a = a0 + (a1 - a0) * u;
    pos.push(Math.sin(a) * r0, 0, Math.cos(a) * r0, Math.sin(a) * r1, 0, Math.cos(a) * r1);
    uv.push(u, 0, u, 1);
    if (i < seg) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}
function slashTex() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 32;
  const g = c.getContext('2d')!, img = g.createImageData(128, 32);
  for (let y = 0; y < 32; y++)
    for (let x = 0; x < 128; x++) {
      const u = x / 127, v = y / 31, edge = Math.pow(Math.sin(v * Math.PI), 0.7) * Math.pow(u, 1.6) * (u > 0.97 ? (1 - u) / 0.03 : 1);
      const hot = Math.pow(v, 3) * u;
      const o = (y * 128 + x) * 4;
      img.data[o] = img.data[o + 1] = img.data[o + 2] = 255 * Math.min(1, edge * 0.8 + hot);
      img.data[o + 3] = 255;
    }
  g.putImageData(img, 0, 0);
  return new THREE.CanvasTexture(c);
}

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();
/** 特效：粒子、刀光、地面圆环、预警圈、光柱 */
export class Fx {
  private add = new Pool(3500, true);
  private soft = new Pool(900, false);
  private code = new Pool(900, false, glyphAtlas());
  private live: Live[] = [];
  private tex = slashTex();
  private unitRing = new THREE.RingGeometry(0.86, 1, 56).rotateX(-Math.PI / 2);
  private unitDisc = new THREE.CircleGeometry(1, 48).rotateX(-Math.PI / 2);
  private unitTube = new THREE.CylinderGeometry(1, 1, 1, 24, 1, true).translate(0, 0.5, 0);
  private unitSphere = new THREE.SphereGeometry(1, 20, 14);

  constructor(private scene: THREE.Scene) { scene.add(this.add.points, this.soft.points, this.code.points); }
  setViewport(h: number, fov: number) {
    const s = h / (2 * Math.tan((fov * Math.PI) / 360));
    this.add.mat.uniforms.uScale.value = s;
    this.soft.mat.uniforms.uScale.value = s;
    this.code.mat.uniforms.uScale.value = s;
  }
  emit(o: POpt, soft = false) { (soft ? this.soft : this.add).emit(o); }
  /** 一个飘着的字符（数字、代码符号） */
  glyph(o: POpt) { this.code.emit(o); }
  /** 一小团向上散开的字符 */
  glyphs(pos: THREE.Vector3, color: THREE.ColorRepresentation, n = 10, spread = 1, size = 0.5, life = 1.6) {
    for (let i = 0; i < n; i++) {
      _v2.set(pos.x + (Math.random() - 0.5) * spread, pos.y + Math.random() * spread * 0.6, pos.z + (Math.random() - 0.5) * spread);
      _v.set((Math.random() - 0.5) * 1.2, 1.2 + Math.random() * 1.6, (Math.random() - 0.5) * 1.2);
      this.code.emit({ pos: _v2, vel: _v, color, size: size * (0.7 + Math.random() * 0.6), life: life * (0.7 + Math.random() * 0.6), drag: 0.6 });
    }
  }

  /** 向四周炸开的一团粒子 */
  burst(pos: THREE.Vector3, color: THREE.ColorRepresentation, n = 12, speed = 4, size = 0.25, life = 0.5, o: { up?: number; gravity?: number; color1?: THREE.ColorRepresentation; soft?: boolean; flat?: boolean } = {}) {
    for (let i = 0; i < n; i++) {
      _v.set(Math.random() - 0.5, o.flat ? 0 : Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.8));
      _v.y += o.up ?? 0;
      this.emit({ pos, vel: _v, life: life * (0.6 + Math.random() * 0.7), size: size * (0.6 + Math.random() * 0.8), color, color1: o.color1, gravity: o.gravity ?? 0, drag: 2.5 }, o.soft);
    }
  }
  private mat(color: THREE.ColorRepresentation, k = 1.6, map?: THREE.Texture, side: THREE.Side = THREE.DoubleSide) {
    const m = new THREE.MeshBasicMaterial({ color, map: map ?? null, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side, toneMapped: false, fog: false });
    m.color.multiplyScalar(k);
    return m;
  }
  private spawn(obj: THREE.Object3D, dur: number, step: Live['step'], mats: THREE.Material[]) {
    obj.renderOrder = 15;
    this.scene.add(obj);
    this.live.push({ obj, t: 0, dur, step, mats });
    return obj;
  }

  /** 一道弧形刀光。yaw 是角色朝向；a0→a1 是扫过的角度（0 = 正前，正值向左）；tilt 让弧面倾斜 */
  slash(pos: THREE.Vector3, yaw: number, o: { r?: number; w?: number; a0: number; a1: number; tilt?: number; pitch?: number; y?: number; color: THREE.ColorRepresentation; dur?: number }) {
    const r = o.r ?? 2.4, m = this.mat(o.color, 2.2, this.tex);
    const mesh = new THREE.Mesh(arcGeo(r - (o.w ?? 0.9), r, o.a0, o.a1), m);
    mesh.position.copy(pos).setY(pos.y + (o.y ?? 1.0));
    mesh.rotation.set(o.pitch ?? 0, yaw, o.tilt ?? 0, 'YXZ');
    this.spawn(mesh, o.dur ?? 0.22, (u) => { m.opacity = u < 0.25 ? u / 0.25 : 1 - (u - 0.25) / 0.75; mesh.scale.setScalar(0.9 + u * 0.18); }, [m]);
    mesh.geometry.userData.own = true;
  }
  /** 贴地扩散的圆环 */
  ring(pos: THREE.Vector3, r0: number, r1: number, dur: number, color: THREE.ColorRepresentation, k = 1.6) {
    const m = this.mat(color, k), mesh = new THREE.Mesh(this.unitRing, m);
    mesh.position.copy(pos).setY(pos.y + 0.08);
    this.spawn(mesh, dur, (u) => { const e = 1 - Math.pow(1 - u, 2.5); mesh.scale.setScalar(r0 + (r1 - r0) * e); m.opacity = 1 - u; }, [m]);
  }
  /** 冲击波球 */
  shock(pos: THREE.Vector3, r: number, dur: number, color: THREE.ColorRepresentation) {
    // 只画朝外的一面：相机在球里面时什么都不画，免得整个画面被叠成一片白
    const m = this.mat(color, 0.9, undefined, THREE.FrontSide), mesh = new THREE.Mesh(this.unitSphere, m);
    mesh.position.copy(pos);
    this.spawn(mesh, dur, (u) => { mesh.scale.setScalar(r * (0.2 + 0.8 * (1 - Math.pow(1 - u, 3)))); m.opacity = 0.4 * (1 - u); }, [m]);
  }
  /** 光柱 */
  pillar(pos: THREE.Vector3, r: number, h: number, dur: number, color: THREE.ColorRepresentation) {
    const m = this.mat(color, 1.1, undefined, THREE.FrontSide), mesh = new THREE.Mesh(this.unitTube, m), k = 0.6 * Math.min(1, 1.8 / r);
    mesh.position.copy(pos);
    this.spawn(mesh, dur, (u) => { mesh.scale.set(r * (1 - u * 0.5), h * (0.3 + 0.7 * Math.min(1, u * 4)), r * (1 - u * 0.5)); m.opacity = k * (1 - u); }, [m]);
  }
  /** 敌人范围攻击的预警圈：外圈固定，内圈逐渐填满，填满时就是落招的时刻 */
  telegraph(pos: THREE.Vector3, r: number, dur: number, color: THREE.ColorRepresentation = '#ff3a2a') {
    const g = new THREE.Group(), m1 = this.mat(color, 1.3), m2 = this.mat(color, 0.6);
    const ring = new THREE.Mesh(this.unitRing, m1), disc = new THREE.Mesh(this.unitDisc, m2);
    ring.scale.setScalar(r);
    g.add(ring, disc);
    g.position.copy(pos).setY(pos.y + 0.07);
    m2.opacity = 0.35;
    this.spawn(g, dur + 0.12, (u) => { const k = Math.min(1, (u * (dur + 0.12)) / dur); disc.scale.setScalar(Math.max(0.01, r * k)); m1.opacity = 0.9; m2.opacity = k >= 1 ? 0.6 : 0.2; }, [m1, m2]);
    return g;
  }
  /** 持续存在的地面法阵（技能领域）。返回的对象由调用方在结束时交给 fade() */
  zone(pos: THREE.Vector3, r: number, dur: number, color: THREE.ColorRepresentation) {
    const g = new THREE.Group(), m1 = this.mat(color, 1.2), m2 = this.mat(color, 0.3);
    const ring = new THREE.Mesh(this.unitRing, m1), disc = new THREE.Mesh(this.unitDisc, m2), inner = new THREE.Mesh(this.unitRing, m1);
    ring.scale.setScalar(r); disc.scale.setScalar(r); inner.scale.setScalar(r * 0.55);
    g.add(ring, disc, inner);
    g.position.copy(pos).setY(pos.y + 0.09);
    this.spawn(g, dur, (u, dt) => {
      const a = Math.min(1, u * 8, (1 - u) * 6);
      m1.opacity = 0.7 * a; m2.opacity = 0.14 * a;
      inner.rotation.y += dt * 1.2;
      inner.scale.setScalar(r * (0.5 + 0.08 * Math.sin(u * dur * 3)));
    }, [m1, m2]);
    return g;
  }
  /** 两点之间的一道闪光（连锁闪电、光束） */
  beam(a: THREE.Vector3, b: THREE.Vector3, w: number, dur: number, color: THREE.ColorRepresentation) {
    const m = this.mat(color, 2.2), len = a.distanceTo(b);
    const mesh = new THREE.Mesh(this.unitTube, m);
    mesh.position.copy(a);
    mesh.quaternion.setFromUnitVectors(_v.set(0, 1, 0), _v2.copy(b).sub(a).normalize());
    this.spawn(mesh, dur, (u) => { const s = w * (1 - u * 0.7); mesh.scale.set(s, len, s); m.opacity = 1 - u; }, [m]);
  }

  /** 立刻清掉所有还在播的网格特效（传送、读档时用） */
  clear() { for (const l of this.live) l.t = l.dur; }

  update(dt: number) {
    this.add.update(dt);
    this.soft.update(dt);
    this.code.update(dt);
    for (let i = this.live.length - 1; i >= 0; i--) {
      const l = this.live[i];
      l.t += dt;
      l.step(Math.min(1, l.t / l.dur), dt);
      if (l.t >= l.dur) {
        this.scene.remove(l.obj);
        for (const m of l.mats) m.dispose();
        const mesh = l.obj as THREE.Mesh;
        if (mesh.geometry?.userData.own) mesh.geometry.dispose();
        this.live.splice(i, 1);
      }
    }
  }
}
