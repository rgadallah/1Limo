/**
 * Builds a direct Unsplash CDN URL from a photo ID for use with Astro's
 * <Image> component (astro.config.mjs allows images.unsplash.com as a
 * remote source). Placeholder imagery only — swap for real fleet/brand
 * photography before launch.
 *
 * Passing `height` matters: Unsplash's backend (Imgix) crops server-side to
 * the exact requested aspect ratio using `crop=entropy` (keeps the most
 * visually "interesting" region in frame), so the subject stays visible
 * regardless of the source photo's original orientation. Without a height,
 * only `width` is applied, the source's native aspect ratio is kept, and
 * Astro's own image pipeline ends up doing a blind centered crop to fit
 * whatever `width`/`height` the <Image> component was given — which cuts
 * subjects out of frame when the source is portrait but the target box is
 * landscape (or vice versa).
 */
export function unsplashUrl(photoId: string, width: number, height?: number) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: '80',
  });
  if (height) {
    params.set('h', String(height));
    params.set('crop', 'entropy');
  }
  return `https://images.unsplash.com/photo-${photoId}?${params.toString()}`;
}
