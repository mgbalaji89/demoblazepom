// playwright.config.ts

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    browserName: 'chromium',
    headless: false,
    trace: 'on'
  }
});
