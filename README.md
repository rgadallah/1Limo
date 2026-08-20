# 1Limo — Website Rebuild

Static site (Astro + Tailwind CSS) for 1Limo, a Dallas-Fort Worth chauffeured
transportation company. No backend, no database — the build output is plain
HTML/CSS/JS that can be deployed to any static host.

## Getting started

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

```bash
npm run build    # outputs static site to ./dist
npm run preview  # serve ./dist locally to sanity-check the production build
```

`dist/` is the entire deliverable — upload it as-is to whatever host you land
on (Cloudflare Pages, Netlify, Vercel, S3 + CloudFront, or traditional shared
hosting). Nothing in this repo is tied to a specific host: there's no
`vercel.json`, no CF-only adapter, no serverless functions.

### Live preview (GitHub Pages)

`.github/workflows/deploy-pages.yml` builds and publishes this repo to GitHub
Pages on every push to `main`, purely so there's a clickable link to review —
it is **not** the production deployment. Because a GitHub Pages project site
is served from a `/1Limo/` sub-path rather than a domain root, the workflow
sets `GH_PAGES_PREVIEW=true`, which `astro.config.mjs` reads to switch `site`
and `base` for that one build only; every other build (local dev, the real
production build for 1limo.net) is unaffected. Internal links go through the
`withBase()` helper in `src/lib/site.ts` for this reason — it's a no-op
(returns the path unchanged) whenever `base` is `/`, which is always true
outside of the GitHub Pages workflow. Delete `.github/workflows/deploy-pages.yml`
and `src/lib/site.ts` (reverting `href`s back to plain strings) once a real
host is chosen and this preview is no longer needed.

## Project status

All 17 pages in the site structure are built: Home, Services overview + all 7
individual service pages, Fleet, Service Areas overview + all 4 city pages,
About, and Contact / Get a Quote. Every internal link resolves, the sitemap
lists all 17 URLs, and `astro check` / `astro build` both run clean.

What's left is content, not structure — see the checklist below.

## Where to plug things in

**Logo & brand colors** — see [`src/assets/logo.README.md`](src/assets/logo.README.md).
Drop the real file into `src/assets/`, swap the text wordmark in
[`Header.astro`](src/components/Header.astro) and [`Footer.astro`](src/components/Footer.astro)
for an `<Image>`, and re-check the palette in
[`src/styles/global.css`](src/styles/global.css) (the `@theme` block) against
the logo's real colors. The current black/gold palette is a placeholder.

**Phone, email, address, hours** — all in one place:
[`src/data/business.ts`](src/data/business.ts). Nothing else in the codebase
hardcodes this info.

**Placeholder stock photography** — every image on the site is sourced live
from Unsplash via [`src/lib/unsplash.ts`](src/lib/unsplash.ts) and the
`imageId`/`imageAlt` fields in [`src/data/services.ts`](src/data/services.ts).
To swap in real fleet/brand photography, drop files into `src/assets/`,
import them with `astro:assets`, and replace the `unsplashUrl(...)` calls.

**Lead form backend** — the form ([`src/components/LeadForm.astro`](src/components/LeadForm.astro))
posts to whatever URL you set as `PUBLIC_FORM_ENDPOINT` (see `.env.example`).
Copy `.env.example` to `.env` for local dev, and set the same variables in
your host's environment settings for production. Until `PUBLIC_FORM_ENDPOINT`
is set, the form shows an inline "not configured" notice instead of silently
failing — that's expected during development.

**Analytics & conversion tracking (GTM / Google Ads)** — set `PUBLIC_GTM_ID`
in your environment and the GTM snippet in
[`src/layouts/Layout.astro`](src/layouts/Layout.astro) activates automatically
(it loads nothing at all if unset, so there's no dead weight in production
until you're ready). For Google Ads conversion tracking on a successful lead
submission, set `PUBLIC_GOOGLE_ADS_CONVERSION_ID` and
`PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` — the fire happens inline in
`LeadForm.astro` right after a successful submit (no separate "thank you"
page/redirect needed, since the form submits via `fetch` in place).

## Redirects (old WordPress URLs)

The old site's only indexed URLs — `/`, `/t/`, `/reservation/`, `/home/` —
are mapped in `astro.config.mjs`'s `redirects` block to their closest
equivalent on the new site. Astro emits these as static HTML pages with an
instant `<meta http-equiv="refresh">` + canonical link, which works on any
static host with zero extra config — that's the baseline and it's already
live in every build.

For a true HTTP 301 (a slightly stronger signal for search engines than a
meta-refresh), add the equivalent rule at the host level once you've picked
one:

**Netlify / Cloudflare Pages** (`public/_redirects`):
```
/t/            /contact/  301
/reservation/  /contact/  301
/home/         /          301
```

**Apache** (`.htaccess`):
```apache
Redirect 301 /t/ /contact/
Redirect 301 /reservation/ /contact/
Redirect 301 /home/ /
```

**Nginx**:
```nginx
rewrite ^/t/?$ /contact/ permanent;
rewrite ^/reservation/?$ /contact/ permanent;
rewrite ^/home/?$ / permanent;
```

Only add whichever snippet matches the host you actually choose — none of
these are committed to the repo so the build stays host-agnostic.

## Design system

- **Colors**: `src/styles/global.css` (`@theme` block) — `--color-bg`,
  `--color-surface`, `--color-accent` (gold), `--color-text`, `--color-muted`.
  Placeholder black/gold; re-check against the real logo once it's in.
- **Type**: Playfair Display (headlines, `font-display`) + Inter (body,
  `font-sans`), loaded from Google Fonts in `Layout.astro`.
- **Spacing**: sections use `py-20`–`py-32` consistently; content is wrapped
  in `max-w-7xl` (or `max-w-3xl`/`max-w-2xl` for text-heavy pages) with
  `px-6 md:px-8`. Stick to these rather than improvising new values per page.
- **Motion**: `[data-reveal]` + the `IntersectionObserver` script in
  `Layout.astro` handles scroll-reveal (respects `prefers-reduced-motion`,
  degrades gracefully with `<noscript>`).

## SEO checklist

**Done:**
- [x] Semantic HTML, one `<h1>` per page, descriptive heading hierarchy
- [x] Unique `<title>` + meta description per page (real copy, not templated)
- [x] `LocalBusiness` (`LimousineService`) JSON-LD sitewide, `Service` JSON-LD
      on all 7 service pages and all 4 service-area pages, `FAQPage` JSON-LD
      on every service page with an FAQ block
- [x] Open Graph + Twitter Card meta tags with an image on every page
- [x] Canonical URLs on every page
- [x] Auto-generated `sitemap-index.xml` (via `@astrojs/sitemap`, 17 URLs) and
      `robots.txt` allowing full crawling
- [x] Images served as WebP via Astro's `<Image>` component (build output:
      the 553KB hero source compresses to ~87KB WebP), lazy-loaded by default
      below the fold, descriptive alt text throughout — every placeholder
      image was manually reviewed to confirm it shows what its alt text and
      surrounding copy claim
- [x] Mobile-first responsive layout, tested at 375px width
- [x] Above-the-fold click-to-call + "Get a Quote" CTA on every page
- [x] Soft redirects for the old site's indexed URLs (see above)
- [x] Accessible: labeled form fields, keyboard-operable nav and FAQ
      accordion, visible focus states, high-contrast dark palette
- [x] GTM / Google Ads conversion tracking wired up and ready for real IDs

**Still needs a human:**
- [ ] Google Business Profile — claim/update it, keep NAP identical to
      `src/data/business.ts`
- [ ] Real customer reviews — replace the placeholder testimonials in
      `src/data/business.ts` (`testimonials` array)
- [ ] Real fleet photography — replace the Unsplash placeholders
- [ ] Final phone/email/address — replace placeholders in
      `src/data/business.ts` if they differ from what's there now
- [ ] Run an actual Lighthouse pass against the deployed (not just local)
      build once hosting is chosen — CDN/edge caching affects real-world Core
      Web Vitals more than anything left to fix in code
