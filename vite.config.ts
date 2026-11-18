import { defineConfig } from 'vite';

// host: true 让局域网里的另一台电脑（比如带独显的那台）也能打开这个地址来玩
export default defineConfig({
  server: { host: true, port: 5173, strictPort: true },
  build: { target: 'es2022', chunkSizeWarningLimit: 2000 },
});
