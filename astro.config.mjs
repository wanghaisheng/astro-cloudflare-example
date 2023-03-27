import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-yt3.pages.dev',
  integrations: [mdx()],
  output: "server",
  adapter: cloudflare()
});
