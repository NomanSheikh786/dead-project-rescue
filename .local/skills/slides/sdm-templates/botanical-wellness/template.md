# Botanical Wellness

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-botanical-wellness.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BotanicalWellness" template embodies a modern and serene aesthetic, characterized by its botanical theme. The background features a solid black color (#000) with a botanical image sourced from "/__mockup/images/photo-botanical.png" that covers the entire viewport. The text and accent colors include a soft green (#52796F) for most text elements, a deeper green (#1B4332) for the main heading, and a light green (#95D5B2) for a decorative accent. The template utilizes the 'Inter' sans-serif font for body text and footer, while 'Playfair Display' serif font is used for the main heading, creating a contrast between modern and classic styles. Key layout elements include a glass panel with a white semi-transparent background (rgba(255, 255, 255, 0.85)) and rounded corners, positioned centrally with a shadow effect, enhancing the overall depth. The overall aesthetic feel can be described as "natural elegance."

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
     "description": "Botanical Wellness cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #52796F, #1B4332, #95D5B2, #000000
- Type: Inter (weights 400, 500, 600, 6.7–38.4pt); Playfair Display (weights 400, 17.3–48pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-botanical.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
