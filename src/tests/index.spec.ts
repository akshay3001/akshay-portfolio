import { test, expect } from "@playwright/test";

test("tests", async ({ page }) => {
  await page.goto("http://localhost:4321");

  await expect(page).toHaveTitle("Akshay Mhatre - Frontend Developer");

  await expect(page.getByTestId("header")).toContainText("AM");
  await expect(page.getByTestId("personal-info")).toHaveText("Akshay Mhatre");
  await expect(
    page.getByRole("heading", {
      name: "Frontend work for regulated product teams.",
    })
  ).toBeVisible();
  await expect(page.getByTestId("github-link")).toHaveAttribute(
    "href",
    "https://github.com/akshay3001"
  );
  await expect(page.getByTestId("linked-link")).toHaveAttribute(
    "href",
    "https://in.linkedin.com/in/akshay-mhatre-732a83144"
  );
});
