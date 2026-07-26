import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("presents Akshay's profile and social links", async ({ page }) => {
  await expect(page).toHaveTitle("Akshay Mhatre - Frontend Developer");

  await expect(page.getByTestId("header")).toContainText("Akshay Mhatre");
  await expect(page.getByTestId("personal-info")).toHaveText("Akshay Mhatre");
  await expect(page.getByTestId("role")).toContainText("Backbase Certified");
  await expect(page.getByTestId("bio")).toContainText(
    "Frontend developer focused on digital banking."
  );
  await expect(page.getByTestId("github-link")).toHaveAttribute(
    "href",
    "https://github.com/akshay3001"
  );
  await expect(page.getByTestId("linked-link")).toHaveAttribute(
    "href",
    "https://in.linkedin.com/in/akshay-mhatre-732a83144"
  );
  await expect(page.getByTestId("github-link")).toHaveAttribute(
    "rel",
    "noopener noreferrer"
  );
});

test("fits narrow screens without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.reload();

  const layout = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));

  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  await expect(page.getByTestId("portfolio-shell")).toBeVisible();
});

test("matches the desktop design", async ({ page }) => {
  await expect(page).toHaveScreenshot("landing.png", {
    animations: "disabled",
    maxDiffPixels: 2000,
  });
});

test("matches the mobile design", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();

  await expect(page).toHaveScreenshot("mobile.png", {
    animations: "disabled",
    fullPage: true,
    maxDiffPixels: 1200,
  });
});
