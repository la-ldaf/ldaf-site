import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "e2e-tests",
  // retry once in CI
  retries: process.env.CI ? 1 : 0,
  // limit number of concurrent workers in CI, use default locally
  workers: process.env.CI ? 2 : undefined,
  // Use the GitHub Actions reporter for CI; otherwise use the default list reporter and an HTML
  //   reporter, which can be viewed with `npm run test:e2e:report`.
  reporter: process.env.CI
    ? "github"
    : [["list"], ["html", { outputFolder: "e2e-tests/report", open: "on-failure" }]],
  use: {
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
  outputDir: "e2e-tests/results",
};

export default config;
