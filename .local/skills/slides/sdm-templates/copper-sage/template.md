# Copper & Sage

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-copper-sage.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The CopperSage template features a clean and modern aesthetic with a natural, earthy feel. The background color is a soft light gray (#E8EDE5), complemented by a border in a copper hue (#B87333). Text colors include a deep green (#2D3B2D) for primary text and a muted green (#546654) for secondary text. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, creating a contrast between modern sans-serif and classic serif styles. Key layout elements include a structured flexbox design with decorative elements like small rotated squares in copper, positioned strategically to enhance the overall composition. There are no background images used in this template. The overall aesthetic feel can be described as "natural elegance."

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
     "description": "Copper & Sage cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #E8EDE5
- Palette: #B87333, #546654, #2D3B2D, #E8EDE5, #C4CFC4
- Type: Inter (weights 300, 400, 500, 8.6–15.4pt); Playfair Display (weights 300, 400, 33.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
