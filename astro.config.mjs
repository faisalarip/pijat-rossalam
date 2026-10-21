// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// MARK: - Canonical site URL
// Set SITE_URL to the production domain (e.g. https://pijatrossalam.com) in the
// hosting dashboard. It drives canonical links, Open Graph URLs and the sitemap.
// Platform variables are fallbacks so preview builds still produce absolute URLs.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  process.env.CF_PAGES_URL ||
  'http://localhost:4321';

// Sub-path the site is served from. "/" for a custom domain; "/pijat-rossalam"
// for the GitHub Pages project site (set in .github/workflows/deploy.yml).
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // The whole stylesheet is ~8 kB gzipped; inlining it removes the only
  // render-blocking request on first paint.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
