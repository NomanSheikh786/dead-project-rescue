# CPG (Cold Brew Coffee)

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-cpg-coffee.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CpgCoffee" template features a modern and sophisticated aesthetic, characterized by a dark and light split background. The left side has a background color of #1A0E08 (dark brown), while the right side is #F5E6D3 (cream). Text and accent colors include #F5E6D3 for light text and #1A0E08 for darker text elements. The font families used are 'Inter' for body text and 'Playfair Display' for headings, providing a contemporary yet elegant feel. Key layout elements include large decorative arcs with a subtle border, positioned content areas for text, and a product image of a coffee bottle bridging the split. The overall aesthetic feel can be described as "modern elegance."

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
     "description": "CPG (Cold Brew Coffee) cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #F5E6D3, #1A0E08, #B87333, #1A1410, #FFFFFF
- Type: Inter (weights 300, 400, 500, 600, 700, 7.7–11.5pt); Playfair Display (weights 400, 500, 600, 900, 10.6–288pt); Courier New (weights 400, 7.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: product-coffee.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
