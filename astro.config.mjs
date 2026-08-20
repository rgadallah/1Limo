// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Only true inside the GitHub Actions workflow that deploys the temporary
// GitHub Pages preview (.github/workflows/deploy-pages.yml). Every other
// build — local dev, `npm run build` for the real host, any other CI —
// leaves `site`/`base` at their production values below untouched.
const isGhPagesPreview = process.env.GH_PAGES_PREVIEW === 'true';

// https://astro.build/config
export default defineConfig({
  // TODO: update if the final hosting domain differs — stays 1limo.net per the migration plan.
  site: isGhPagesPreview ? 'https://rgadallah.github.io' : 'https://1limo.net',
  base: isGhPagesPreview ? '/1Limo' : '/',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  image: {
    // Lets Astro's <Image> component fetch + optimize (resize/WebP/AVIF) the
    // placeholder Unsplash photos used across the site. Remove once real fleet
    // photography replaces them, or keep it if you keep sourcing stock images.
    domains: ['images.unsplash.com'],
  },

  // Soft redirects for the handful of indexed URLs on the old WordPress site.
  // Astro emits static HTML pages here (instant meta-refresh + canonical link),
  // which works on ANY static host with zero config. For a stronger, true HTTP
  // 301 (better SEO signal), also add the equivalent rule at the host level once
  // a host is chosen — see README.md "Redirects" section for copy-paste snippets
  // (Netlify/Cloudflare _redirects, Apache .htaccess, Nginx).
  redirects: {
    '/t/': '/contact/',
    '/reservation/': '/contact/',
    '/home/': '/',
  },
});
