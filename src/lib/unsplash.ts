/**
 * Builds a direct Unsplash CDN URL from a photo ID for use with Astro's
 * <Image> component (astro.config.mjs allows images.unsplash.com as a
 * remote source). Placeholder imagery only — swap for real fleet/brand
 * photography before launch.
 */
export function unsplashUrl(photoId: string, width = 1600) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}
