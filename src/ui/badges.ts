import * as L from '../char/logos';

type Draw = (g: CanvasRenderingContext2D) => void;
/** 地图上每家公司的圆徽：一块底色，上面画自家的标志。k 是标志占圆直径的比例 */
const BADGE: Record<string, { bg: string; k: number; draw: Draw }> = {
  claude: { bg: '#fff3e2', k: 0.84, draw: (g) => L.claudeSpark(g) },
  gpt: { bg: '#2f2c44', k: 0.8, draw: (g) => L.gptKnot(g, '#ffffff', '#2f2c44') },
  deepseek: { bg: '#ffffff', k: 0.82, draw: (g) => L.whale(g, '#3f66cc', '#dfe8ff') },
  glm: { bg: '#15151b', k: 0.92, draw: (g) => L.zBadge(g) },
  kimi: { bg: '#12142a', k: 1.12, draw: (g) => L.kBadge(g, true) },
  qwen: { bg: '#5a5ae8', k: 1.1, draw: L.qwenBadge },
  gemini: { bg: '#ffffff', k: 0.86, draw: L.geminiStar },
  grok: { bg: '#141016', k: 0.86, draw: (g) => L.grokRing(g) },
};
const cache = new Map<string, HTMLCanvasElement>();

/** 某一家的圆徽（画一次就存起来，地图每次重画时直接贴） */
export function houseBadge(id: string) {
  let cv = cache.get(id);
  if (!cv) {
    const b = BADGE[id], S = 64;
    cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const g = cv.getContext('2d')!;
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, 7); g.clip();
    g.fillStyle = b.bg; g.fillRect(0, 0, S, S);
    g.translate(S / 2, S / 2); g.scale(S * b.k, S * b.k);
    b.draw(g);
    cache.set(id, cv);
  }
  return cv;
}
