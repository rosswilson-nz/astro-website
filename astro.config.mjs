import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://calm-hotteok-23d102.netlify.app/",
  integrations: [preact()]
});