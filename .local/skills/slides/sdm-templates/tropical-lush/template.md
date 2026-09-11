# Tropical Lush

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-tropical-lush.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "TropicalLush" template embodies a lush, nature-inspired aesthetic. It features a background color of #0A120D, complemented by a linear gradient that transitions from rgba(10, 18, 13, 0.9) to rgba(10, 18, 13, 0.2), overlaid with a background image of a forest canopy located at "/__mockup/photos/forest-canopy.jpg". The text color is primarily #F4F7F5, with accents in #8EAF96 for secondary text, and #D1E0D5 for paragraph text. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, creating a contrast between modern and classic styles. Key layout elements include a flexible column layout with padding, a border accent on the paragraph, and a structured positioning of text elements that enhances readability. The overall aesthetic feel is "natural elegance."

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
     "description": "Tropical Lush cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: image
- Palette: #8EAF96, #0A120D, #FFFFFF, #D1E0D5, #F4F7F5
- Type: Inter (weights 300, 400, 600, 8.6–14.4pt); Playfair Display (weights 400, 33.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: forest-canopy.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
