/** 用 WebAudio 现场合成的音效，不依赖任何音频文件 */
export class Sfx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  volume = 0.5;
  private noise: AudioBuffer | null = null;

  /** 浏览器要求用户先有过一次点击才能出声 */
  unlock() {
    if (this.ctx) { void this.ctx.resume(); return; }
    try {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
      const n = this.ctx.sampleRate, buf = this.ctx.createBuffer(1, n, n), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      this.noise = buf;
    } catch { this.ctx = null; }
  }
  setVolume(v: number) { this.volume = v; if (this.master) this.master.gain.value = v; }

  private tone(freq: number, dur: number, o: { type?: OscillatorType; to?: number; vol?: number; delay?: number } = {}) {
    const c = this.ctx;
    if (!c || !this.master) return;
    const t = c.currentTime + (o.delay ?? 0), osc = c.createOscillator(), g = c.createGain();
    osc.type = o.type ?? 'sine';
    osc.frequency.setValueAtTime(freq, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol ?? 0.2, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }
  private hiss(dur: number, o: { freq?: number; to?: number; q?: number; vol?: number; type?: BiquadFilterType; delay?: number } = {}) {
    const c = this.ctx;
    if (!c || !this.master || !this.noise) return;
    const t = c.currentTime + (o.delay ?? 0), src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    src.buffer = this.noise;
    src.loop = true;
    f.type = o.type ?? 'bandpass';
    f.frequency.setValueAtTime(o.freq ?? 1200, t);
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    f.Q.value = o.q ?? 1;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol ?? 0.2, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.02);
  }

  swing(heavy = false) { this.hiss(heavy ? 0.26 : 0.16, { freq: heavy ? 500 : 900, to: heavy ? 1800 : 3200, q: 0.8, vol: heavy ? 0.22 : 0.14 }); }
  cast() { this.tone(520, 0.18, { to: 1040, type: 'triangle', vol: 0.1 }); this.hiss(0.14, { freq: 2600, vol: 0.05 }); }
  hit(heavy = false) { this.hiss(0.09, { freq: heavy ? 600 : 1500, q: 0.6, vol: 0.28 }); this.tone(heavy ? 110 : 170, 0.1, { to: 60, type: 'square', vol: 0.12 }); }
  crit() { this.hit(true); this.tone(1400, 0.12, { to: 2200, type: 'triangle', vol: 0.09 }); }
  react() { this.tone(660, 0.25, { to: 1320, type: 'sawtooth', vol: 0.08 }); this.hiss(0.3, { freq: 3000, to: 500, vol: 0.14 }); }
  boom() { this.hiss(0.5, { freq: 900, to: 90, q: 0.4, vol: 0.4, type: 'lowpass' }); this.tone(90, 0.4, { to: 35, vol: 0.3 }); }
  dodge() { this.hiss(0.2, { freq: 700, to: 2600, q: 0.7, vol: 0.16 }); }
  perfect() { this.tone(880, 0.3, { to: 1760, type: 'triangle', vol: 0.14 }); this.tone(1320, 0.3, { to: 2640, type: 'sine', vol: 0.08, delay: 0.05 }); }
  jump() { this.tone(280, 0.12, { to: 460, type: 'triangle', vol: 0.07 }); }
  land() { this.hiss(0.1, { freq: 300, q: 0.5, vol: 0.18, type: 'lowpass' }); }
  step() { this.hiss(0.05, { freq: 500 + Math.random() * 300, q: 0.6, vol: 0.05, type: 'lowpass' }); }
  hurt() { this.tone(220, 0.2, { to: 110, type: 'sawtooth', vol: 0.14 }); }
  pick() { this.tone(880, 0.1, { type: 'triangle', vol: 0.1 }); this.tone(1320, 0.14, { type: 'triangle', vol: 0.1, delay: 0.07 }); }
  chest() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.22, { type: 'triangle', vol: 0.11, delay: i * 0.08 })); }
  waypoint() { [392, 587, 784, 1175].forEach((f, i) => this.tone(f, 0.5, { type: 'sine', vol: 0.12, delay: i * 0.1 })); }
  levelUp() { [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.3, { type: 'triangle', vol: 0.12, delay: i * 0.07 })); }
  swap() { this.tone(700, 0.1, { to: 1100, type: 'sine', vol: 0.09 }); }
  glide() { this.hiss(0.35, { freq: 400, to: 1400, q: 0.5, vol: 0.12 }); }
  splash() { this.hiss(0.4, { freq: 1800, to: 400, q: 0.5, vol: 0.2 }); }
  ui() { this.tone(900, 0.06, { type: 'triangle', vol: 0.06 }); }
  deny() { this.tone(200, 0.12, { type: 'square', vol: 0.06 }); }
}
