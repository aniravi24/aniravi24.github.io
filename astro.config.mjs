import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aniravi.com",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
});
