# Artisan Food

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-artisan-food.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The ArtisanFood template features a modern and elegant aesthetic, characterized by a dark and sophisticated style. The background color is a solid black (#111), complemented by a full-bleed background image of artisan sourdough bread on dark marble, located at "/__mockup/images/photo-food-bread.png". A gradient overlay is applied on the left side, transitioning from rgba(0,0,0,0.6) to transparent, enhancing text readability. Text colors include a soft white (#FFF8F0) for most text elements and a warm gold (#D4A86A) for accents, while the font families used are 'Inter' for body text and 'Playfair Display' for headings, creating a refined contrast. Key layout elements include a structured content container with a top-left quadrant for the main text and a bottom section for additional information, all arranged with ample padding and spacing for a clean presentation. The overall aesthetic feel can be described as "sophisticated elegance."

## Apply this template

The `slide<N>.sdm.yaml` files in this folder are the template's sample slides as `replit.sdm` version 1 documents. Copy them — do NOT retype or re-emit their contents:

1. `cp` each sample slide you need from this folder into the deck's `src/data/slides/`.
2. Register every copied slide in `src/data/slides-manifest.json` with `kind: "sdm"`, for example:
   ```json
   {
     "id": "slide1",
     "position": 1,
     "kind": "sdm",
     "filepath": "src/data/slides/slide1.sdm.yaml",
     "title": "Title slide",
     "description": "Artisan Food cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #111111
- Palette: #FFF8F0, #D4A86A, #111111, #2A1F14, #000000
- Type: Inter (weights 300, 400, 500, 7.7–14.4pt); Playfair Display (weights 300, 400, 600, 17.3–67.2pt); Georgia (weights 400, 7.7–9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-food-bread.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
