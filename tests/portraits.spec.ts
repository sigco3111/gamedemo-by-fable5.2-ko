import { test, type Page } from '@playwright/test';

/**
 * 给 8 位角色各拍四张特写（脸、正面全身、背面全身、半身），存到 tests/screenshots/chars/。
 * 不做断言，只负责出图给人看：建模好不好看机器判断不了。
 * 换个目录存：$env:SHOT_DIR='chars-before'; npx playwright test portraits
 */
const IDS = ['claude', 'gpt', 'deepseek', 'glm', 'kimi', 'qwen', 'gemini', 'grok'];
const DIR = `tests/screenshots/${process.env.SHOT_DIR ?? 'chars'}`;
test.use({ viewport: { width: 600, height: 800 } });

async function pose(page: Page, o: { dist: number; pitch: number; yaw: number; lookY: number }) {
  await page.evaluate((o) => {
    const g = (window as any).game;
    g.cam.dist = o.dist; g.cam.pitch = o.pitch; g.cam.yaw = o.yaw; g.cam.lookY = o.lookY;
    g.step(50);
  }, o);
  await page.waitForTimeout(200);
}

test('角色特写', async ({ page }) => {
  await page.addInitScript(() => { localStorage.removeItem('xingjin.save'); localStorage.setItem('xingjin.quality', 'high'); });
  await page.goto('/?nolock&manual');
  await page.waitForFunction(() => (window as any).game, null, { timeout: 60_000 });
  await page.getByRole('button', { name: '开始游戏' }).click();
  await page.evaluate(() => {
    const g = (window as any).game;
    document.getElementById('hud')!.style.display = 'none';
    g.sky.hour = 10; g.sky.paused = true; g.cam.minDist = 0.6;
    for (const e of g.enemies.list) e.pos.set(300, 0, 300); // 把敌人挪开，免得来打扰拍照
  });
  for (let i = 0; i < IDS.length; i++) {
    await page.evaluate((i) => {
      const g = (window as any).game;
      g.party.swapCd = 0; g.player.swapTo(i, true); g.fx.clear();
      g.player.teleport(2.2, 50); g.player.yaw = 0; g.step(30); g.player.yaw = 0;
    }, i);
    await pose(page, { dist: 1.0, pitch: 0.02, yaw: 0.25, lookY: 1.42 });
    await page.screenshot({ path: `${DIR}/${IDS[i]}-1-face.png` });
    await pose(page, { dist: 2.5, pitch: 0.06, yaw: 0.2, lookY: 0.86 });
    await page.screenshot({ path: `${DIR}/${IDS[i]}-2-front.png` });
    await pose(page, { dist: 2.5, pitch: 0.1, yaw: 2.7, lookY: 0.86 });
    await page.screenshot({ path: `${DIR}/${IDS[i]}-3-back.png` });
    await pose(page, { dist: 1.55, pitch: 0.04, yaw: 0.35, lookY: 1.05 });
    await page.screenshot({ path: `${DIR}/${IDS[i]}-4-mid.png` });
  }
});
