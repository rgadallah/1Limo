// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update if the final hosting domain differs — stays 1limo.net per the migration plan.
  site: 'https://1limo.net',

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
