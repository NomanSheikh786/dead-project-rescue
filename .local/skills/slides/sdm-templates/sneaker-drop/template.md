# Sneaker Drop

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-sneaker-drop.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SneakerDrop" template embodies a modern, urban aesthetic with a focus on sneaker culture. It features a solid black background color (#0A0A0A) with a subtle radial gradient texture in white (#ffffff) at 5% opacity. The primary text color is white (#ffffff), while accents are highlighted in neon green (#39FF14). The font family used is 'Inter' for general text, with 'Courier New' for technical details, and 'DM Sans' for descriptive text, creating a contemporary and tech-inspired feel. Key layout elements include a dramatic diagonal neon green slash, oversized text elements ("VELO" and "X1"), and a prominent sneaker image, all positioned dynamically to create visual interest. The overall aesthetic feel can be described as "edgy, vibrant, urban."

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
     "description": "Sneaker Drop cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0A0A0A
- Palette: #FFFFFF, #39FF14, #0A0A0A, #888888, #666666, #555555, #333333
- Type: Inter (weights 400, 700, 800, 900, 7.7–211.2pt); Courier New (weights 400, 700, 800, 7.7–14.4pt); DM Sans (weights 400, 500, 700, 8.6–9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: product-sneaker.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
