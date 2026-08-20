/**
 * Builds a direct Unsplash CDN URL from a photo ID for use with Astro's
 * <Image> component (astro.config.mjs allows images.unsplash.com as a
 * remote source). Placeholder imagery only — swap for real fleet/brand
 * photography before launch.
 *
 * Passing `height` matters: Unsplash's backend (Imgix) crops server-side to
 * the exact requested aspect ratio, so the subject stays visible regardless
 * of the source photo's original orientation. Without a height, only
 * `width` is applied, the source's native aspect ratio is kept, and Astro's
 * own image pipeline ends up doing a blind centered crop to fit whatever
 * `width`/`height` the <Image> component was given — which cuts subjects
 * out of frame when the source is portrait but the target box is landscape
 * (or vice versa).
 *
 * By default the crop uses `crop=entropy` (keeps the most visually
 * "interesting" region in frame), which works well for most photos. For one
 * that still crops too tight against a subject at the edge (verify by eye
 * before shipping any placeholder), pass `focal: { x, y }` instead — 0-1
 * fractions of the *source* image's width/height marking the exact point to
 * center the crop on. Determine it by fetching the uncropped source and
 * measuring where the subject actually sits, not by guessing.
 */
export function unsplashUrl(
  photoId: string,
  width: number,
  height?: number,
  focal?: { x: number; y: number }
) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: '80',
  });
  if (height) {
    params.set('h', String(height));
    if (focal) {
      params.set('crop', 'focalpoint');
      params.set('fp-x', String(focal.x));
      params.set('fp-y', String(focal.y));
    } else {
      params.set('crop', 'entropy');
    }
  }
  return `https://images.unsplash.com/photo-${photoId}?${params.toString()}`;
}
