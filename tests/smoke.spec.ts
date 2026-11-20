import { test, expect, type Page } from '@playwright/test';

/**
 * 冒烟测试：在真浏览器里把主要玩法走一遍，每一步截图，控制台一报错就失败。
 * 页面用 ?manual 打开：游戏不自己跑主循环，由测试调用 game.step(n) 推进 n 帧，所以结果和机器快慢无关。
 * 按键和鼠标是真实事件；瞬移、回满血这些只是为了把角色摆到要测的地方。
 */
const NAMES = ['클로드걸', 'GPT걸', '딥시크걸', 'GLM걸', '키미걸', 'Qwen걸', '제미나이걸', '그록걸'];
const errors: string[] = [];

const step = (page: Page, n = 1) => page.evaluate((k) => (window as any).game.step(k), n);
const info = (page: Page) =>
  page.evaluate(() => {
    const g = (window as any).game, p = g.player, m = g.party.cur;
    return { st: p.state as string, x: p.pos.x as number, y: p.pos.y as number, z: p.pos.z as number, vy: p.vel.y as number, stamina: p.stamina as number, hp: m.hp as number, quest: g.world.quest as number, level: g.party.level as number };
  });
/** 把角色摆到某处，回满状态，相机朝向 yaw */
const place = (page: Page, x: number, z: number, yaw: number) =>
  page.evaluate(([x, z, yaw]) => {
    const g = (window as any).game;
    g.party.healAll(); g.player.dead = false; g.player.stamina = g.player.staminaMax; g.party.swapCd = 0;
    g.combat.clear(); g.fx.clear(); g.player.teleport(x, z); g.cam.yaw = yaw; g.cam.pitch = 0.28; g.step(30);
  }, [x, z, yaw]);
async function hold(page: Page, keys: string[], frames: number) {
  for (const k of keys) await page.keyboard.down(k);
  await step(page, frames);
  for (const k of keys) await page.keyboard.up(k);
}
async function tap(page: Page, key: string, after = 2) {
  await page.keyboard.down(key);
  await step(page, 1);
  await page.keyboard.up(key);
  await step(page, after);
}
async function click(page: Page, after = 40) {
  await page.mouse.move(640, 360);
  await page.mouse.down();
  await step(page, 1);
  await page.mouse.up();
  await step(page, after);
}
async function shot(page: Page, name: string) {
  await step(page, 1);
  await page.waitForTimeout(200);
  await page.screenshot({ path: `tests/screenshots/${name}.png` });
}
async function boot(page: Page) {
  await page.goto('/?nolock&manual');
  await page.waitForFunction(() => (window as any).game, null, { timeout: 60_000 });
}
const noErrors = () => expect(errors, '控制台不应有报错').toEqual([]);

test('主要玩法走一遍', async ({ page }) => {
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  // 加载失败的资源单独记，带上地址，方便看是哪个文件
  page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  // 只在第一次打开时清存档，之后的刷新要保留存档（用来测读档）
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('smoke')) { localStorage.removeItem('xingjin.save'); localStorage.setItem('xingjin.quality', 'mid'); sessionStorage.setItem('smoke', '1'); }
  });

  await test.step('启动：出现标题画面', async () => {
    await boot(page);
    await expect(page.locator('#menu h1')).toHaveText('별잿빛 들판');
    await shot(page, '01-title');
  });

  await test.step('开始游戏：按 W 向前跑', async () => {
    await page.getByRole('button', { name: '시작하기' }).click();
    await expect(page.locator('#hud')).toBeVisible();
    const a = await info(page);
    await hold(page, ['KeyW'], 90);
    const b = await info(page);
    expect(a.z - b.z, '1.5 秒应向北跑出 5 米以上').toBeGreaterThan(5);
    await shot(page, '02-run');
  });

  await test.step('激活传送锚点，任务推进', async () => {
    await place(page, 7.8, 67.5, 0);
    await expect(page.locator('#prompt')).toContainText('순간이동 거점 활성화');
    await tap(page, 'KeyF', 5);
    expect((await info(page)).quest).toBe(1);
    await expect(page.locator('#quest-text')).toContainText('야영지');
    await shot(page, '03-waypoint');
  });

  await test.step('跳跃、闪避、冲刺', async () => {
    await tap(page, 'Space', 10);
    expect((await info(page)).st).toBe('air');
    await step(page, 80);
    expect((await info(page)).st).toBe('ground');
    const s0 = (await info(page)).stamina;
    await tap(page, 'ShiftLeft', 40);
    expect((await info(page)).stamina, '闪避要消耗体力').toBeLessThan(s0);
    const z0 = (await info(page)).z;
    await hold(page, ['KeyW', 'ShiftLeft'], 60);
    expect(z0 - (await info(page)).z, '冲刺 1 秒应超过 6.5 米').toBeGreaterThan(6.5);
  });

  await test.step('攀爬：顶着崖壁按 W 爬上去', async () => {
    await place(page, -6, -56, 0);
    const y0 = (await info(page)).y;
    await hold(page, ['KeyW'], 360);
    const c = await info(page);
    expect(c.st).toBe('climb');
    expect(c.y - y0, '6 秒应爬高 8 米以上').toBeGreaterThan(8);
    await shot(page, '04-climb');
  });

  await test.step('滑翔：冲出崖顶后在空中按空格', async () => {
    await place(page, 4, -124, Math.PI);
    await page.keyboard.down('KeyW');
    await page.keyboard.down('ShiftLeft');
    for (let i = 0; i < 60 && (await info(page)).st === 'ground'; i++) await step(page, 10);
    await page.keyboard.up('ShiftLeft');
    expect((await info(page)).st, '冲出崖边应腾空').toBe('air');
    await step(page, 14);
    await tap(page, 'Space', 60);
    const g = await info(page);
    expect(g.st).toBe('glide');
    expect(g.vy, '滑翔时下落速度应很慢').toBeGreaterThan(-3);
    await shot(page, '05-glide');
    await page.keyboard.up('KeyW');
  });

  await test.step('游泳：走进湖里', async () => {
    await place(page, 60, 30, -Math.PI / 2);
    await hold(page, ['KeyW'], 150);
    expect((await info(page)).st).toBe('swim');
    await shot(page, '06-swim');
  });

  await test.step('战斗：普攻、技能、爆发能打掉营地敌人的血', async () => {
    await place(page, -62, 30, Math.PI / 2);
    const sum = () => page.evaluate(() => (window as any).game.enemies.list.filter((e: any) => e.camp === 0).reduce((s: number, e: any) => s + Math.max(0, e.hp), 0));
    const h0 = await sum();
    for (let i = 0; i < 3; i++) await click(page, 36);
    const h1 = await sum();
    expect(h1, '三下普攻后敌人总血量应下降').toBeLessThan(h0);
    await tap(page, 'KeyE', 70);
    await page.evaluate(() => ((window as any).game.party.cur.energy = 100));
    await tap(page, 'KeyQ', 60);
    await shot(page, '07-combat');
    await step(page, 60);
    expect(await sum(), '技能和爆发后应继续掉血').toBeLessThan(h1);
    await expect(page.locator('#sk-e em'), '技能进入冷却').not.toHaveText('');
  });

  await test.step('八位角色：都能换上场，整套招式能伤到精英怪', async () => {
    for (let i = 0; i < 8; i++) {
      await place(page, -90, 160, Math.PI / 2);
      if (i > 0 || (await page.locator('#who').textContent()) !== NAMES[0]) await tap(page, 'Digit' + (i + 1), 6);
      await expect(page.locator('#who')).toHaveText(NAMES[i]);
      const hp = () => page.evaluate(() => (window as any).game.enemies.list.find((e: any) => e.def.kind === 'elite').hp as number);
      const h0 = await hp();
      for (let k = 0; k < 3; k++) await click(page, 42);
      await tap(page, 'KeyE', 50);
      await page.evaluate(() => ((window as any).game.party.cur.energy = 100));
      await tap(page, 'KeyQ', 45);
      await shot(page, `08-char-${i + 1}`);
      await step(page, 150);
      expect(await hp(), `${NAMES[i]} 的整套招式应造成伤害`).toBeLessThan(h0);
      await page.evaluate(() => { const e = (window as any).game.enemies.list.find((e: any) => e.def.kind === 'elite'); e.hp = e.maxHp; });
      noErrors();
    }
  });

  await test.step('角色面板和地图', async () => {
    await place(page, 8, 60, 0);
    await tap(page, 'KeyC');
    await expect(page.locator('#menu .card')).toHaveCount(8);
    await shot(page, '09-characters');
    await tap(page, 'KeyC');
    await expect(page.locator('#menu .card')).toHaveCount(0);
    await tap(page, 'KeyM');
    await expect(page.locator('#bigmap')).toBeVisible();
    await shot(page, '10-map');
    await tap(page, 'KeyM');
  });

  await test.step('存档：刷新页面后进度还在', async () => {
    await tap(page, 'Digit2', 6);
    const before = await info(page);
    await page.reload();
    await page.waitForFunction(() => (window as any).game, null, { timeout: 60_000 });
    await page.getByRole('button', { name: '시작하기' }).click();
    await step(page, 5);
    const after = await info(page);
    expect(after.quest).toBe(before.quest);
    expect(after.level).toBe(before.level);
    await expect(page.locator('#who')).toHaveText('GPT걸');
    expect(Math.hypot(after.x - 8, after.z - 60), '应回到存档时的位置附近').toBeLessThan(3);
    await shot(page, '11-loaded');
  });

  noErrors();
});
