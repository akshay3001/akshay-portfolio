import { expect, test } from "@playwright/test";

const title = "Akshay Mhatre - Frontend Developer";
const description =
  "Akshay Mhatre is a frontend developer focused on digital banking, building features across retail, business, and wealth management with Angular and the Backbase AI-powered banking platform.";
const siteUrl = "https://akshay-portfolio.vercel.app/";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("exposes the expected metadata", async ({ page }) => {
  await expect(page).toHaveTitle(title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    description,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    siteUrl,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    `${siteUrl}portfolio-screenshot.png`,
  );

  const structuredData = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ??
      "{}",
  );

  expect(structuredData).toMatchObject({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akshay Mhatre",
    url: siteUrl,
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://github.com/akshay3001",
      "https://in.linkedin.com/in/akshay-mhatre-732a83144",
    ],
  });
});

test("presents the portfolio content and social links", async ({ page }) => {
  await expect(page.getByText("Hello there", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: "Akshay" }),
  ).toBeVisible();
  await expect(page.getByText("Backbase Certified")).toBeVisible();
  await expect(
    page.getByText(/Frontend developer focused on digital banking/),
  ).toBeVisible();

  const github = page.getByRole("link", { name: /GitHub profile/ });
  await expect(github).toHaveAttribute(
    "href",
    "https://github.com/akshay3001",
  );
  await expect(github).toHaveAttribute("target", "_blank");
  await expect(github).toHaveAttribute("rel", "noopener noreferrer");

  const linkedIn = page.getByRole("link", { name: /LinkedIn profile/ });
  await expect(linkedIn).toHaveAttribute(
    "href",
    "https://in.linkedin.com/in/akshay-mhatre-732a83144",
  );
  await expect(linkedIn).toHaveAttribute("target", "_blank");
  await expect(linkedIn).toHaveAttribute("rel", "noopener noreferrer");
});

test("supports keyboard navigation and reduced motion", async ({ page }) => {
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toHaveAttribute("href", "#main-content");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".name")).toHaveCSS("animation-name", "none");
});

test("serves the generated public assets", async ({ request }) => {
  const image = await request.get("/portfolio-screenshot.png");
  expect(image.ok()).toBe(true);
  expect(image.headers()["content-type"]).toContain("image/png");

  for (const path of ["/robots.txt", "/sitemap-index.xml"]) {
    const response = await request.get(path);
    expect(response.ok()).toBe(true);
  }
});

test("matches the landing-page visual baseline", async ({ page }) => {
  // A warm-cache reload prevents font-display: optional from racing the
  // screenshot while preserving the site's production font-loading policy.
  await page.reload({ waitUntil: "networkidle" });

  await expect(page).toHaveScreenshot("landing.png", {
    animations: "disabled",
    maxDiffPixelRatio: 0.02,
  });
});
