# Moroccan Tile

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-moroccan-tile.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "MoroccanTile" template embodies a vibrant and intricate Moroccan aesthetic, characterized by geometric patterns and rich colors. The background color is a solid #C4724E, while the text and accent colors include #1E3054 for the primary text and #B8860B for borders and decorative elements. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, providing a modern yet classic contrast. Key layout elements include a series of rotated squares forming a border pattern, a central ornament, and various decorative lines, all positioned to create a visually engaging frame. There are no background images specified in the code. The overall aesthetic feel can be described as "vibrant geometric elegance."

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
     "description": "Moroccan Tile cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #C4724E
- Palette: #B8860B, #1E3054, #C4724E
- Type: Inter (weights 400, 500, 600, 8.6–15.4pt); Playfair Display (weights 700, 28.8–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
