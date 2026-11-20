import { test, expect, type Page } from '@playwright/test';

/**
 * 给三种敌人拍特写（存到 tests/screenshots/enemies/），顺带检查头像：
 * 队伍栏里的八张头像都要是从设定图裁出来的图片，并且真的加载出来了。
 */
const DIR = 'tests/screenshots/enemies';
const errors: string[] = [];

/** 找到一只某种敌人，把相机摆到它面前（side 是绕到侧面的角度，π 就是背后） */
async function closeUp(page: Page, kind: string, dist: number, up: number, side: number) {
  await page.evaluate(([kind, dist, up, side]) => {
    const g = (window as any).game, e = g.enemies.list.find((x: any) => x.def.kind === kind && !x.dead);
    // 角色站在 30 米外：敌人不会进入战斗，但还在阴影范围里
    g.player.teleport(e.pos.x + 30, e.pos.z);
    g.step(3);
    const a = e.yaw + (side as number), c = e.center;
    g.camera.position.set(c.x + Math.sin(a) * (dist as number), c.y + (up as number), c.z + Math.cos(a) * (dist as number));
    g.camera.lookAt(c.x, c.y, c.z);
    g.step(1);
  }, [kind, dist, up, side] as const);
  await page.waitForTimeout(200);
}

test('敌人特写和头像', async ({ page }) => {
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) errors.push(m.text().slice(0, 400)); });
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  await page.addInitScript(() => { localStorage.removeItem('xingjin.save'); localStorage.setItem('xingjin.quality', 'high'); });
  await page.goto('/?nolock&manual');
  await page.waitForFunction(() => (window as any).game, null, { timeout: 60_000 });
  await page.getByRole('button', { name: '시작하기' }).click();

  await test.step('头像是设定图里裁出来的图片', async () => {
    const imgs = page.locator('#party .av img');
    await expect(imgs).toHaveCount(8);
    await page.waitForFunction(() => [...document.querySelectorAll<HTMLImageElement>('#party .av img')].every((i) => i.complete));
    const info = await imgs.evaluateAll((els) => els.map((e) => ({ src: (e as HTMLImageElement).src.split('/').slice(-2).join('/'), w: (e as HTMLImageElement).naturalWidth })));
    expect(info.map((i) => i.src)).toEqual(['claude', 'gpt', 'deepseek', 'glm', 'kimi', 'qwen', 'gemini', 'grok'].map((i) => `avatars/${i}.png`));
    for (const i of info) expect(i.w, `${i.src} 应加载成功`).toBe(192);
    await page.evaluate(() => (window as any).game.step(2));
    await page.locator('#party').screenshot({ path: `${DIR}/avatars-party.png` });
    await page.keyboard.press('c');
    await page.evaluate(() => (window as any).game.step(2));
    await expect(page.locator('#menu .card img')).toHaveCount(8);
    await page.waitForFunction(() => [...document.querySelectorAll<HTMLImageElement>('#menu .card img')].every((i) => i.complete));
    await page.screenshot({ path: `${DIR}/avatars-menu.png` });
    await page.keyboard.press('c');
    await page.evaluate(() => (window as any).game.step(2));
  });

  await test.step('三种敌人的名字', async () => {
    const names = await page.evaluate(() => [...new Set((window as any).game.enemies.list.map((e: any) => e.def.name as string))].sort());
    expect(names).toEqual(['글리치 병사', '거대 문서 골렘 · 망각의 문의 수호자', '전자 바이러스'].sort());
  });

  await test.step('拍特写', async () => {
    await page.evaluate(() => {
      const g = (window as any).game;
      document.getElementById('hud')!.style.display = 'none';
      g.cam.update = () => {};
      g.sky.hour = 10; g.sky.paused = true;
    });
    const SHOTS: [string, string, number, number, number][] = [
      ['grunt', 'grunt-front', 2.7, 0.25, 0.35], ['grunt', 'grunt-back', 2.7, 0.4, 2.6],
      ['wisp', 'virus', 2.3, 0.2, 0.4], ['wisp', 'virus-night', 2.3, 0.2, 0.4],
      ['elite', 'doc-front', 6.2, 0.6, 0.35], ['elite', 'doc-back', 6.2, 1.0, 2.7],
    ];
    for (const [kind, name, dist, up, side] of SHOTS) {
      if (name === 'virus-night') await page.evaluate(() => ((window as any).game.sky.hour = 21.5));
      await closeUp(page, kind, dist, up, side);
      await page.screenshot({ path: `${DIR}/${name}.png` });
      if (name === 'virus-night') await page.evaluate(() => ((window as any).game.sky.hour = 10));
    }
  });

  expect(errors, '控制台不应有报错').toEqual([]);
});
