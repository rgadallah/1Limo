# Dropping in the real logo

1. Add the file here as `logo.png` or `logo.svg` (transparent background,
   ideally SVG or a high-res PNG).
2. In `src/components/Header.astro` and `src/components/Footer.astro`, replace
   the text wordmark (`<span class="font-display ...">1Limo</span>`) with:

   ```astro
   ---
   import { Image } from 'astro:assets';
   import logo from '../assets/logo.png';
   ---
   <Image src={logo} alt="1Limo" class="h-10 w-auto" />
   ```

   (Use a plain `<img src="/logo.svg">` from `public/` instead if you go SVG
   and don't need Astro's raster optimization.)
3. Re-check the palette in `src/styles/global.css` (`@theme` block) against
   the logo's actual brand colors and adjust `--color-accent` /
   `--color-accent-light` / `--color-accent-dark` if the real gold (or
   silver) differs from the placeholder.
