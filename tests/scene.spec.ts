import { test, expect, type Page } from '@playwright/test';

/**
 * 场景检查：给八间小屋、显卡碑、机柜遗迹、二叉树、数据湖各拍一张（存到 tests/screenshots/scene/），
 * 再实际走一遍「拜访小屋」「敲门」「捡 Token 币」。着色器编译失败会报到控制台，所以控制台一报错就失败。
 */
const IDS = ['claude', 'gpt', 'deepseek', 'glm', 'kimi', 'qwen', 'gemini', 'grok'];
const DIR = `tests/screenshots/${process.env.SHOT_DIR ?? 'scene'}`;
const errors: string[] = [];

/** 把相机摆到 eye，看向 at；角色站到 stand（阴影和草都跟着角色走） */
async function view(page: Page, eye: number[], at: number[], stand: number[], hour = 10) {
  await page.evaluate(([e, a, s, hour]) => {
    const g = (window as any).game;
    g.sky.hour = hour; g.sky.paused = true;
    g.player.teleport(s[0], s[1]);
    g.camera.position.set(e[0], e[1], e[2]);
    g.camera.lookAt(a[0], a[1], a[2]);
    g.step(6);
  }, [eye, at, stand, hour] as const);
  await page.waitForTimeout(250);
}
/** 从门的斜前方看一间小屋 */
async function house(page: Page, i: number, dist: number, up: number, side: number, hour = 10) {
  const p = await page.evaluate(async ([i, dist, up, side]) => {
    const g = (window as any).game, h = g.houses.list[i];
    const yaw = Math.atan2(h.door.x - h.pos.x, h.door.z - h.pos.z) + side;
    return { eye: [h.pos.x + Math.sin(yaw) * dist, h.pos.y + up, h.pos.z + Math.cos(yaw) * dist], at: [h.pos.x, h.pos.y + 3.2, h.pos.z], stand: [h.door.x, h.door.z] };
  }, [i, dist, up, side]);
  await view(page, p.eye, p.at, p.stand, hour);
}
const ground = (page: Page, x: number, z: number) => page.evaluate(([x, z]) => (window as any).game.terrain.heightAt(x, z) as number, [x, z]);
const step = (page: Page, n = 1) => page.evaluate((k) => (window as any).game.step(k), n);

test('场景：八间小屋和 AI 摆设', async ({ page }) => {
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) errors.push(m.text().slice(0, 400)); });
  page.on('pageerror', (e) => errors.push(String(e)));
  // 只在第一次打开时清存档，后面的刷新要留着存档（用来测读档）
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('scene')) { localStorage.removeItem('xingjin.save'); localStorage.setItem('xingjin.quality', 'high'); sessionStorage.setItem('scene', '1'); }
  });
  await page.goto('/?nolock&manual');
  await page.waitForFunction(() => (window as any).game, null, { timeout: 60_000 });
  await page.getByRole('button', { name: '시작하기' }).click();

  await test.step('八间小屋都建在陆地上，门口能站人', async () => {
    const list = await page.evaluate(() => {
      const g = (window as any).game;
      return g.houses.list.map((h: any) => ({ id: h.id, y: h.pos.y, door: g.terrain.heightAt(h.door.x, h.door.z), blocked: g.col.blocked(h.door.x, h.door.z, 0.4, h.door.y) }));
    });
    expect(list.map((h: any) => h.id)).toEqual(IDS);
    for (const h of list) {
      expect(h.y, `${h.id} 的地基应高于水面`).toBeGreaterThan(1);
      expect(Math.abs(h.door - h.y), `${h.id} 门口应和地基差不多平`).toBeLessThan(1.2);
      expect(h.blocked, `${h.id} 门口不应被挡住`).toBe(false);
    }
  });

  await test.step('拍照', async () => {
    await page.evaluate(() => {
      const g = (window as any).game;
      document.getElementById('hud')!.style.display = 'none';
      g.cam.update0 = g.cam.update; g.cam.update = () => {};
      for (const e of g.enemies.list) e.pos.set(300, 0, 300);
    });
    const SHOTS: [number, number, number][] = [[16, 4.5, 0.4], [18, 5.5, 0.3], [24, 7, 0.95], [20, 5, -0.35], [22, 7, 0.3], [22, 6, 0.3], [18, 5, 0.3], [24, 7, -0.4]];
    for (let i = 0; i < IDS.length; i++) {
      await house(page, i, ...SHOTS[i]);
      await page.screenshot({ path: `${DIR}/house-${i + 1}-${IDS[i]}.png` });
    }
    await house(page, 0, 17, 4.5, -0.5, 21.5);
    await page.screenshot({ path: `${DIR}/night-anthropic.png` });
    await house(page, 7, 24, 7, -0.4, 21.5);
    await page.screenshot({ path: `${DIR}/night-xai.png` });

    const G = { x: 20, z: 48, yaw: -0.69 }, gy = await ground(page, G.x, G.z);
    const dir = (a: number, d: number) => [G.x + Math.sin(a) * d, G.z + Math.cos(a) * d];
    let [ex, ez] = dir(G.yaw + 0.5, 17), [sx, sz] = dir(G.yaw, 5);
    await view(page, [ex, gy + 5, ez], [G.x, gy + 3.4, G.z], [sx, sz]);
    await page.screenshot({ path: `${DIR}/gpu-front.png` });
    [ex, ez] = dir(G.yaw + Math.PI - 0.6, 16);
    await view(page, [ex, gy + 6, ez], [G.x, gy + 3.4, G.z], [sx, sz]);
    await page.screenshot({ path: `${DIR}/gpu-back.png` });
    await view(page, [ex, gy + 6, ez], [G.x, gy + 3.4, G.z], [sx, sz], 21.5);
    await page.screenshot({ path: `${DIR}/gpu-night.png` });

    const dy = await ground(page, -175, -30);
    await view(page, [-187, dy + 6, -21], [-174, dy + 1.2, -30], [-177, -30]);
    await page.screenshot({ path: `${DIR}/datacenter.png` });
    await view(page, [-170.5, dy + 2.2, -30], [-166, dy + 1.8, -30], [-172, -30], 21);
    await page.screenshot({ path: `${DIR}/datacenter-terminal.png` });

    const ty = await ground(page, -22, 84);
    await view(page, [-6, ty + 4, 74], [-22, ty + 5.5, 84], [-16, 80]);
    await page.screenshot({ path: `${DIR}/binary-tree.png` });
    await view(page, [-10, ty + 3.2, 63], [-3.5, ty + 2.4, 69], [-6, 66]);
    await page.screenshot({ path: `${DIR}/signpost.png` });

    // 从湖心岛上空看数据湖的网格
    await view(page, [100, 26, 60], [118, 0, 18], [115, 25]);
    await page.screenshot({ path: `${DIR}/data-lake.png` });
    await view(page, [100, 26, 60], [118, 0, 18], [115, 25], 21.5);
    await page.screenshot({ path: `${DIR}/data-lake-night.png` });
    // 起点往北看：路、走线、Token 币、远处的显卡和高地
    await view(page, [0, 12.5, 80], [8, 9, 40], [0, 70]);
    await page.screenshot({ path: `${DIR}/start-view.png` });
    // 夜里的路：路灯、走线
    await view(page, [0, 12.5, 80], [8, 9, 40], [0, 70], 21.5);
    await page.screenshot({ path: `${DIR}/start-night.png` });
    // 上升气流里的数字
    const uy = await ground(page, -103, -128);
    await view(page, [-92, uy + 4, -118], [-103, uy + 7, -128], [-96, -122]);
    await step(page, 120);
    await page.waitForTimeout(250);
    await page.screenshot({ path: `${DIR}/updraft.png` });
  });

  await test.step('拜访小屋、敲门、捡 Token 币', async () => {
    await page.evaluate(() => {
      const g = (window as any).game, h = g.houses.list[0];
      document.getElementById('hud')!.style.display = '';
      g.cam.update = g.cam.update0;
      g.sky.hour = 10;
      g.player.teleport(h.door.x, h.door.z); g.cam.snap(); g.step(20);
    });
    await expect(page.locator('#prompt')).toContainText('Anthropic의 책방 방문');
    const dust0 = await page.evaluate(() => (window as any).game.party.items.dust as number);
    await page.keyboard.down('f'); await step(page, 1); await page.keyboard.up('f'); await step(page, 5);
    await expect(page.locator('#banner')).toContainText('Anthropic 방문 완료 · 1/8');
    expect(await page.evaluate(() => (window as any).game.world.houseCount)).toBe(1);
    expect(await page.evaluate(() => (window as any).game.party.items.dust as number)).toBe(dust0 + 150);
    await expect(page.locator('#quest-side')).toContainText('AI 오두막 방문 1/8');
    await page.waitForTimeout(250);
    await page.screenshot({ path: `${DIR}/visit.png` });

    await expect(page.locator('#prompt')).toContainText('Anthropic 책방 문 두드리기');
    await page.keyboard.down('f'); await step(page, 1); await page.keyboard.up('f'); await step(page, 5);
    await expect(page.locator('#toasts')).toContainText('쪽지');
    expect(await page.evaluate(() => (window as any).game.world.houseCount), '敲门不应再算一次拜访').toBe(1);

    const before = await page.evaluate(() => {
      const g = (window as any).game, t = g.world.tokens[3];
      g.player.teleport(t.pos.x, t.pos.z); g.step(10);
      return { got: t.got as boolean, n: g.world.tokenCount as number, dust: g.party.items.dust as number };
    });
    expect(before.got, '走到币上应捡起来').toBe(true);
    expect(before.n).toBeGreaterThanOrEqual(1);
    expect(before.dust).toBeGreaterThanOrEqual(dust0 + 160);
  });

  await test.step('地图上每家是自己的标志', async () => {
    // 八张圆徽要各不相同（画不出来或者画成同一张都会在这里失败）
    const urls = await page.evaluate(async ([ids, path]) => {
      const m = await import(/* @vite-ignore */ path as string);
      return (ids as string[]).map((i) => m.houseBadge(i).toDataURL() as string);
    }, [IDS, '/src/ui/badges.ts'] as const);
    expect(new Set(urls).size).toBe(8);
    for (const u of urls) expect(u.length, '圆徽不应是空白').toBeGreaterThan(1500);
    await page.locator('#mini').screenshot({ path: `${DIR}/map-mini.png` });
    await page.keyboard.down('m'); await step(page, 1); await page.keyboard.up('m'); await step(page, 2);
    await expect(page.locator('#bigmap')).toBeVisible();
    await page.locator('#bigmap').screenshot({ path: `${DIR}/map.png` });
    await page.keyboard.down('m'); await step(page, 1); await page.keyboard.up('m'); await step(page, 2);
    await expect(page.locator('#bigmap')).toHaveCount(0);
  });

  await test.step('存档后刷新，拜访记录和捡过的币还在', async () => {
    const before = await page.evaluate(() => { const g = (window as any).game; g.save(); return { tokens: g.world.tokenCount as number, dust: g.party.items.dust as number }; });
    await page.reload();
    await page.waitForFunction(() => (window as any).game, null, { timeout: 60_000 });
    const after = await page.evaluate(() => { const g = (window as any).game; return { houses: g.world.houseCount as number, tokens: g.world.tokenCount as number, dust: g.party.items.dust as number, done: g.world.items.find((i: any) => i.id === 'h-claude').done as boolean }; });
    expect(after.houses).toBe(1);
    expect(after.done).toBe(true);
    expect(after.tokens).toBe(before.tokens);
    expect(after.dust).toBe(before.dust);
  });

  expect(errors, '控制台不应有报错').toEqual([]);
});
