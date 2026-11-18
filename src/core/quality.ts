export type QLevel = 'low' | 'mid' | 'high';

export interface QConf {
  label: string;
  pixelRatio: number;
  shadow: number;
  grassNear: number;
  grassFar: number;
  bloom: boolean;
  msaa: number;
}

export const QUALITY: Record<QLevel, QConf> = {
  low: { label: '流畅（核显）', pixelRatio: 0.8, shadow: 1024, grassNear: 14000, grassFar: 10000, bloom: false, msaa: 0 },
  mid: { label: '均衡', pixelRatio: 1.25, shadow: 2048, grassNear: 32000, grassFar: 24000, bloom: true, msaa: 4 },
  high: { label: '精致（独显）', pixelRatio: 2, shadow: 4096, grassNear: 64000, grassFar: 48000, bloom: true, msaa: 4 },
};

const KEY = 'xingjin.quality';

/** 没有手动选过时，按显卡名字猜一档 */
export function detectQuality(gl: WebGLRenderingContext | WebGL2RenderingContext): QLevel {
  const saved = localStorage.getItem(KEY) as QLevel | null;
  if (saved && saved in QUALITY) return saved;
  let name = '';
  try {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    if (ext) name = String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
  } catch { /* 取不到就按中档 */ }
  if (/RTX|GTX|Radeon RX|Radeon Pro|Apple M/i.test(name)) return 'high';
  if (/Intel|UHD|Iris|Arc|SwiftShader|llvmpipe/i.test(name)) return /Arc/i.test(name) ? 'mid' : 'low';
  return 'mid';
}
export function saveQuality(q: QLevel) { localStorage.setItem(KEY, q); }
