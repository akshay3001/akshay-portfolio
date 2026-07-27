import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:4322";

export default defineConfig({
  testDir: "./src/tests",
  snapshotPathTemplate:
    "{testDir}/snapshots{/projectName}/{testFilePath}/{arg}{ext}",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? "github"
    : [["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    actionTimeout: 0,
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  webServer: {
    command: "npm run preview -- --host 127.0.0.1 --port 4322",
    url: baseURL,
    timeout: 120_000,
    reuseExistingServer: false,
  },
});
