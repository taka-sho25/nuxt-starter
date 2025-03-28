import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0, // CIでも retry しない → fail-fast
  workers: process.env.CI ? 2 : undefined,
  reporter: 'html',
  testIgnore: 'example.spec.ts',
  timeout: 3 * 60 * 1000,
  use: {
    baseURL: 'http://127.0.0.1:8585',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'HOST=127.0.0.1 PORT=8585 npm-run-all -p prism start',
    url: 'http://127.0.0.1:8585',
    reuseExistingServer: !process.env.CI,
    timeout: 60 * 1000,
  },
});
