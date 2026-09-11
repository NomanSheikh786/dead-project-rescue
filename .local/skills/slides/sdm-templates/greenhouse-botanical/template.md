# Greenhouse Botanical

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-greenhouse-botanical.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "GreenhouseBotanical" template embodies a natural and serene aesthetic, reminiscent of a botanical garden. The background color is a deep green, specifically #1A3A2A, complemented by a linear gradient overlay featuring rgba(245,240,232,0.7) and rgba(245,240,232,0.95) for a soft, light touch. The text color is also #1A3A2A, while the font families used are 'Inter' for general text and 'Playfair Display' for titles and subtitles, creating a contrast between modern and classic styles. Key layout elements include a full-screen background image of a greenhouse interior, positioned absolutely, with content aligned to the bottom right, featuring decorative elements like a leaf emoji and a subtle border. The overall aesthetic feel can be described as "natural elegance."

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
     "description": "Greenhouse Botanical cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #1A3A2A
- Palette: #F5F0E8, #1A3A2A, #000000
- Type: Inter (weights 200, 300, 400, 500, 600, 7.7–17.3pt); Playfair Display (weights 300, 400, 8.6–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: greenhouse-interior.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
