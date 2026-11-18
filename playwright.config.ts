import { defineConfig } from '@playwright/test';

// 用本机自带的 Edge 跑，不用另外下载浏览器
export default defineConfig({
  testDir: 'tests',
  timeout: 300_000,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    channel: 'msedge',
    viewport: { width: 1280, height: 720 },
    launchOptions: { args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'] },
  },
  webServer: { command: 'npm run dev', url: 'http://localhost:5173', reuseExistingServer: true, timeout: 60_000 },
});
