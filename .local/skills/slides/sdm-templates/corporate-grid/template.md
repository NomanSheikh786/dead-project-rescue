# Corporate Grid

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-corporate-grid.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CorporateGrid" template presents a clean, professional aesthetic characterized by a structured grid layout. The background color is #FFFFFF (white), while the grid lines are rendered in #F0F0F0 (light gray). Text colors include #3D5A80 (dark blue) for headings and accents, #999999 (light gray) for secondary text, #111111 (black) for the main title, and #666666 (medium gray) for the subtitle. The font family used is 'Inter', sans-serif, which is applied throughout for a modern and readable appearance. Key layout elements include a grid of horizontal and vertical lines, a small blue square positioned at the top left, and text elements aligned to the right and bottom left of the slide. There are no background images specified in the code. The overall aesthetic feel can be described as "modern corporate."

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
     "description": "Corporate Grid cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #F0F0F0, #3D5A80, #666666, #111111, #FFFFFF, #999999, #98C1D9, #F9F9F9, #E0E0E0
- Type: Inter (weights 400, 600, 700, 7.7–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
