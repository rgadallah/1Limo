/**
 * Prefixes an absolute internal path with Astro's configured `base`.
 *
 * This is a no-op in production (base defaults to "/", so withBase("/foo/")
 * returns "/foo/" unchanged) — it only matters when the site is built for a
 * sub-path deployment, e.g. the GitHub Pages preview at /1Limo/. Using this
 * everywhere internal links appear keeps the codebase host-agnostic: nothing
 * here assumes any particular host.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}
