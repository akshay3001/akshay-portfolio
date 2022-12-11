import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://akshay-portfolio.vercel.app/",
  integrations: [sitemap()],
});
