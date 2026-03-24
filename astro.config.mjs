import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://akshay-portfolio.vercel.app/",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [300, 400, 600, 900],
      styles: ["normal"],
      display: "optional",
    },
  ],
  integrations: [
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
