import { test, expect } from "@playwright/test";

test("tests", async ({ page }) => {
  await page.goto("http://localhost:4321");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    "Akshay - Backbase Certifed Front End Developer"
  );

  await expect(page.getByTestId("header")).toHaveText("Hello");
  await expect(page.getByTestId("personal-info")).toHaveText(
    `I'am Akshay, Backbase Certified Front End Developer`
  );
  await expect(page.getByTestId("github-link")).toHaveAttribute(
    "href",
    "https://github.com/akshay3001"
  );
  await expect(page.getByTestId("linked-link")).toHaveAttribute(
    "href",
    "https://in.linkedin.com/in/akshay-mhatre-732a83144"
  );

  await expect(page).toHaveScreenshot('landing.png');
});
