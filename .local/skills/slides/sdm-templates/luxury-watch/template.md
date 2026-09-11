# Luxury Watch

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-luxury-watch.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "LuxuryWatch" template presents a sleek, modern aesthetic characterized by a high-contrast black and gold color scheme. The background color is solid black (#000000), while the text and accent colors include a soft gold (#B8956A) and white (#FFFFFF). The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, emphasizing elegance and sophistication. Key layout elements include a left content area that occupies 40% of the width, featuring a structured arrangement of text and decorative lines, and a right image area showcasing a luxury watch with a soft gradient overlay to blend edges. The overall aesthetic feel is "elegant luxury."

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
     "description": "Luxury Watch cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #B8956A, #FFFFFF, #000000, #888888
- Type: Inter (weights 300, 400, 5.8–9.6pt); Playfair Display (weights 400, 10.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-watch.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
