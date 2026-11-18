/** 键盘和鼠标输入。鼠标锁定后转视角；没锁定时按住右键拖动也能转。 */
export class Input {
  private held = new Set<string>();
  private pressed = new Set<string>();
  private released = new Set<string>();
  dx = 0;
  dy = 0;
  wheel = 0;
  locked = false;
  /** 关掉后不再请求锁定鼠标（调试、自动化测试用） */
  allowLock = true;
  onLockChange: ((locked: boolean) => void) | null = null;

  constructor(public el: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'AltLeft'].includes(e.code)) e.preventDefault();
      if (e.repeat) return;
      this.set(e.code, true);
    });
    window.addEventListener('keyup', (e) => this.set(e.code, false));
    el.addEventListener('mousedown', (e) => this.set('Mouse' + e.button, true));
    window.addEventListener('mouseup', (e) => this.set('Mouse' + e.button, false));
    window.addEventListener('mousemove', (e) => {
      if (this.locked || this.held.has('Mouse2')) {
        this.dx += e.movementX;
        this.dy += e.movementY;
      }
    });
    el.addEventListener('wheel', (e) => {
      this.wheel += Math.sign(e.deltaY);
      e.preventDefault();
    }, { passive: false });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.el;
      this.onLockChange?.(this.locked);
    });
    window.addEventListener('blur', () => {
      for (const k of this.held) this.released.add(k);
      this.held.clear();
    });
  }

  set(code: string, down: boolean) {
    if (down) {
      if (!this.held.has(code)) this.pressed.add(code);
      this.held.add(code);
    } else if (this.held.delete(code)) {
      this.released.add(code);
    }
  }
  down(code: string) { return this.held.has(code); }
  hit(code: string) { return this.pressed.has(code); }
  up(code: string) { return this.released.has(code); }
  /** 消费一次按键，避免同一帧被两个系统各用一遍 */
  consume(code: string) {
    const h = this.pressed.has(code);
    this.pressed.delete(code);
    return h;
  }
  get moveX() { return (this.down('KeyD') ? 1 : 0) - (this.down('KeyA') ? 1 : 0); }
  get moveY() { return (this.down('KeyW') ? 1 : 0) - (this.down('KeyS') ? 1 : 0); }

  lock() {
    if (!this.allowLock || this.locked) return;
    try {
      const p = this.el.requestPointerLock() as unknown as Promise<void> | undefined;
      p?.catch?.(() => {});
    } catch { /* 浏览器拒绝时退回右键拖动 */ }
  }
  unlock() { if (this.locked) document.exitPointerLock(); }
  clearAll() { this.held.clear(); this.pressed.clear(); this.released.clear(); }
  endFrame() {
    this.pressed.clear();
    this.released.clear();
    this.dx = this.dy = this.wheel = 0;
  }
}
