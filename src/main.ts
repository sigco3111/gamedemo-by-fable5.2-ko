import './ui/style.css';
import { Game } from './game';

// 用定时器而不是帧回调来启动：标签页在后台时帧回调会被浏览器暂停，定时器不会
setTimeout(() => {
  try {
    const game = new Game(document.getElementById('app')!);
    (window as any).game = game;
    // 地址带 ?manual 时不启动主循环，只能用 game.step() 推进（自动化测试用，结果不受帧率影响）
    if (!location.search.includes('manual')) game.start();
    document.getElementById('boot')?.remove();
  } catch (e) {
    console.error(e);
    const t = document.getElementById('boot-text');
    if (t) t.textContent = '启动失败：' + (e as Error).message;
  }
}, 50);
