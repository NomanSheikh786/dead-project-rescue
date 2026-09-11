# Wireframe Prototype

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-wireframe-prototype.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "WireframePrototype" template represents a clean and minimalistic wireframe aesthetic. It features a solid background color of #F9F9F9 and uses #FFFFFF for the main content area, with text in #333333 and accents in #666666 and #555555. The font family used is 'DM Sans', sans-serif, which is applied throughout for a modern and readable appearance. Key layout elements include a fake browser/app chrome with rounded corners, a top bar with wireframe buttons, a main content area split into text and image placeholders, and decorative elements like dashed borders and a large "X" in the image placeholder area. The overall aesthetic feel is "clean, modern, minimal."

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
     "description": "Wireframe Prototype cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F9F9F9
- Palette: #333333, #888888, #EEEEEE, #FFFFFF, #DDDDDD, #F9F9F9, #FAFAFA, #CCCCCC, #999999
- Type: DM Sans (weights 300, 400, 500, 600, 700, 9.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
