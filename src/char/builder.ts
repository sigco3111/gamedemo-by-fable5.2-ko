import * as THREE from 'three';
import { Rig, type JointName } from './rig';
import { merge, paint, xf, mergeGeometries } from '../render/geoutil';
import { charToon, glowMat, outlineMat, addOutline } from '../render/toon';
import { faceTextures, type FaceStyle, type Expr } from './face';
import { skinRigid, type Col } from './geo';

export type MatKey = 'cloth' | 'skin' | 'hair' | 'glow';
export type V3 = [number, number, number];
export type Target = JointName | THREE.Object3D;

/** 建好的角色模型 */
export class CharModel {
  readonly root: THREE.Group;
  readonly mats: THREE.MeshToonMaterial[] = [];
  outline!: THREE.ShaderMaterial;
  outlineHair!: THREE.ShaderMaterial;
  faceMat: THREE.MeshToonMaterial | null = null;
  faceTex: Record<Expr, THREE.Texture> | null = null;
  portrait: HTMLCanvasElement | null = null;
  /** 具名挂点：武器、翅膀、滑翔翼等 */
  readonly parts: Record<string, THREE.Object3D> = {};
  private expr: Expr = 'neutral';
  private blinkT = 2;
  constructor(public rig: Rig) { this.root = rig.root; }

  setExpr(e: Expr) {
    if (e === this.expr || !this.faceMat || !this.faceTex) return;
    this.expr = e;
    this.faceMat.map = this.faceTex[e];
  }
  /** 自动眨眼；mood 是当前应有的表情 */
  updateFace(dt: number, mood: Expr) {
    this.blinkT -= dt;
    if (this.blinkT < -0.12) this.blinkT = 1.8 + Math.random() * 3.5;
    this.setExpr(mood === 'neutral' && this.blinkT < 0 ? 'blink' : mood);
  }
  /** 受击闪白 */
  setFlash(v: number) {
    for (const m of this.mats) m.emissive.setScalar(v * 0.55);
    this.outline.uniforms.uFlash.value = v;
    this.outlineHair.uniforms.uFlash.value = v;
  }
}

/** 把一块块几何体按「关节 × 材质」归并，最后每组合成一个网格（外加描边） */
export class Builder {
  private rigid = new Map<THREE.Object3D, Partial<Record<MatKey, THREE.BufferGeometry[]>>>();
  private skinned: Record<'cloth' | 'hair' | 'skin', THREE.BufferGeometry[]> = { cloth: [], hair: [], skin: [] };
  private fixed = new Map<THREE.Object3D, number>();
  private face: { geo: THREE.BufferGeometry; style: FaceStyle } | null = null;
  // 贴花：标志之类画出来的图案，画在一张 4×4 格的图集上，再用小方片贴到身上
  private atlas: HTMLCanvasElement | null = null;
  private cells = new Map<string, number>();
  private decalRigid = new Map<THREE.Object3D, THREE.BufferGeometry[]>();
  private decalSkin: THREE.BufferGeometry[] = [];
  readonly model: CharModel;

  constructor(public rig: Rig) { this.model = new CharModel(rig); }
  J(t: Target) { return typeof t === 'string' ? this.rig.j[t] : t; }

  /** 往关节上加一块几何体（关节本地坐标）。color 为 null 表示几何体自带顶点色。 */
  add(t: Target, geo: THREE.BufferGeometry, color: Col | null = null, mat: MatKey = 'cloth', p?: V3 | null, r?: V3 | null, s?: number | V3 | null) {
    if (p || r || s) xf(geo, p, r, s);
    if (color != null) paint(geo, color);
    const o = this.J(t);
    let bk = this.rigid.get(o);
    if (!bk) this.rigid.set(o, (bk = {}));
    (bk[mat] ??= []).push(geo);
    return this;
  }
  /** 新建一个挂点（比如武器、翅膀），之后可以往上面 add */
  mount(name: string, parent: Target, p: V3 = [0, 0, 0], r: V3 = [0, 0, 0]) {
    const g = new THREE.Group();
    g.position.set(...p);
    g.rotation.set(...r);
    this.J(parent).add(g);
    this.model.parts[name] = g;
    return g;
  }
  /** 一根不动的骨骼：蒙皮网格里需要「固定在这个关节上」的顶点绑它 */
  fixedBone(t: Target) {
    const o = this.J(t);
    let i = this.fixed.get(o);
    if (i === undefined) {
      const b = new THREE.Bone();
      o.add(b);
      i = this.rig.bones.length;
      this.rig.bones.push(b);
      this.fixed.set(o, i);
    }
    return i;
  }
  /** 蒙皮几何体：顶点在 parent 的本地坐标里，已带 skinIndex / skinWeight */
  addSkinned(parent: Target, geo: THREE.BufferGeometry, mat: 'cloth' | 'hair' | 'skin' = 'cloth') {
    this.rig.root.updateMatrixWorld(true);
    geo.applyMatrix4(this.J(parent).matrixWorld);
    this.skinned[mat].push(geo);
    return this;
  }
  setFace(geo: THREE.BufferGeometry, style: FaceStyle) { this.face = { geo, style }; }
  /**
   * 贴一个画出来的标志。draw 在归一化的画布上作画（见 logos.ts）；同一个 key 只画一次。
   * p 是方片中心（t 的本地坐标），r 是 [俯仰, 朝向, 侧倾]：先侧倾、再俯仰、最后转到朝向。
   * 给了 bone 就绑到那根弹簧骨骼上（比如钉在裙子上跟着飘）。
   */
  decal(t: Target, key: string, draw: (g: CanvasRenderingContext2D) => void, size: number, p: V3, r: V3 = [0, 0, 0], bone?: number) {
    const N = 4, CS = 256;
    if (!this.atlas) { this.atlas = document.createElement('canvas'); this.atlas.width = this.atlas.height = N * CS; }
    let i = this.cells.get(key);
    if (i === undefined) {
      i = this.cells.size;
      if (i >= N * N) throw new Error('贴花图集放不下了');
      this.cells.set(key, i);
      const g = this.atlas.getContext('2d')!;
      g.save();
      g.beginPath(); g.rect((i % N) * CS, Math.floor(i / N) * CS, CS, CS); g.clip();
      g.translate((i % N + 0.5) * CS, (Math.floor(i / N) + 0.5) * CS);
      g.scale(CS * 0.98, CS * 0.98);
      draw(g);
      g.restore();
    }
    const geo = new THREE.PlaneGeometry(size, size), uv = geo.attributes.uv, cx = i % N, cy = Math.floor(i / N);
    for (let k = 0; k < uv.count; k++) uv.setXY(k, (cx + uv.getX(k)) / N, 1 - (cy + 1 - uv.getY(k)) / N);
    geo.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(...p), new THREE.Quaternion().setFromEuler(new THREE.Euler(r[0], r[1], r[2], 'YXZ')), new THREE.Vector3(1, 1, 1)));
    const o = this.J(t);
    if (bone !== undefined) {
      this.rig.root.updateMatrixWorld(true);
      geo.applyMatrix4(o.matrixWorld);
      this.decalSkin.push(skinRigid(geo, bone));
    } else {
      let a = this.decalRigid.get(o);
      if (!a) this.decalRigid.set(o, (a = []));
      a.push(geo);
    }
    return this;
  }

  build() {
    const M = this.model, rig = this.rig;
    const mats: Record<MatKey, THREE.Material> = {
      cloth: charToon('cloth', { side: THREE.DoubleSide }),
      skin: charToon('skin'),
      hair: charToon('hair', { side: THREE.DoubleSide }),
      glow: glowMat(0xffffff, 1.35, true),
    };
    M.mats.push(mats.cloth as THREE.MeshToonMaterial, mats.skin as THREE.MeshToonMaterial, mats.hair as THREE.MeshToonMaterial);
    M.outline = outlineMat(0.0054, '#6a4458');
    M.outlineHair = outlineMat(0.0042, '#9a7890');
    for (const [obj, bk] of this.rigid)
      for (const k of Object.keys(bk) as MatKey[]) {
        const m = new THREE.Mesh(merge(bk[k]!), mats[k]);
        m.castShadow = k !== 'glow';
        obj.add(m);
        if (k !== 'glow') addOutline(m, k === 'hair' ? M.outlineHair : M.outline);
      }
    if (this.face) {
      const f = faceTextures(this.face.style);
      M.faceTex = f.tex;
      M.portrait = f.portrait;
      M.faceMat = charToon('face', { map: f.tex.neutral, vertexColors: false });
      M.mats.push(M.faceMat);
      const fm = new THREE.Mesh(this.face.geo, M.faceMat);
      rig.j.head.add(fm);
      paint(this.face.geo, this.face.style.skin);
      addOutline(fm, M.outline);
    }
    rig.root.updateMatrixWorld(true);
    const skel = rig.bones.length ? new THREE.Skeleton(rig.bones) : null;
    if (this.atlas) {
      const tex = new THREE.CanvasTexture(this.atlas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      // 透明的地方直接丢弃；略微往镜头方向偏一点，免得和下面的衣服打架
      const dm = charToon('cloth', { map: tex, vertexColors: false, side: THREE.DoubleSide });
      dm.alphaTest = 0.5;
      dm.polygonOffset = true; dm.polygonOffsetFactor = -2; dm.polygonOffsetUnits = -2;
      M.mats.push(dm);
      for (const [obj, geos] of this.decalRigid) obj.add(new THREE.Mesh(mergeGeometries(geos, false)!, dm));
      if (this.decalSkin.length && skel) {
        const sm = new THREE.SkinnedMesh(mergeGeometries(this.decalSkin, false)!, dm);
        rig.root.add(sm);
        sm.bind(skel);
        sm.frustumCulled = false;
      }
    }
    for (const k of ['cloth', 'hair', 'skin'] as const) {
      if (!this.skinned[k].length || !skel) continue;
      const sm = new THREE.SkinnedMesh(merge(this.skinned[k]), mats[k]);
      rig.root.add(sm);
      sm.bind(skel);
      sm.frustumCulled = false;
      sm.castShadow = true;
      addOutline(sm, k === 'hair' ? M.outlineHair : M.outline);
    }
    return M;
  }
}
