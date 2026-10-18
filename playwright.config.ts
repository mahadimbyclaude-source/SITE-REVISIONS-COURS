// Test visuel du site construit : npm run build, puis npm run test:visuel
// Sous Windows, le test utilise Microsoft Edge déjà installé (aucun téléchargement).
// Ailleurs : PW_CHANNEL=chrome, ou « npx playwright install chromium ».
import { defineConfig } from '@playwright/test';

const PORT = 4322;
const channel = process.env.PW_CHANNEL ?? (process.platform === 'win32' ? 'msedge' : undefined);

export default defineConfig({
  testDir: 'tests',
  outputDir: 'test-results/artefacts',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    channel,
  },
  projects: [
    { name: 'mobile', use: { viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true } },
    { name: 'ordinateur', use: { viewport: { width: 1280, height: 900 } } },
  ],
  webServer: {
    command: `npx astro preview --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
