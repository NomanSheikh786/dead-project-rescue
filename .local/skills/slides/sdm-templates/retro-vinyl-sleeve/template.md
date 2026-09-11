# Retro Vinyl Sleeve

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-retro-vinyl-sleeve.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "RetroVinylSleeve" template embodies a retro aesthetic, reminiscent of vintage vinyl record covers. It features a solid background color of #D3A052 (a warm beige) and utilizes #1A1A1A (a deep black) for text and accents, with #F4F0EA (a light cream) used for contrast in the "VOL. 26" label. The primary font is "'Space Grotesk', sans-serif" for the main text, while "'Inter', sans-serif" is used for secondary text elements, providing a modern touch. Key layout elements include a large circular shape representing a vinyl record, positioned at the top right, and various text blocks arranged in a flexible layout that emphasizes hierarchy and readability. There are no background images specified in the code. The overall aesthetic feel is "vintage chic."

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
     "description": "Retro Vinyl Sleeve cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #D3A052
- Palette: #1A1A1A, #D3A052, #B98638, #000000, #DAD6D0
- Type: Space Grotesk (weights 400, 500, 700, 11.5–105.6pt); Inter (weights 400, 500, 600, 8.6–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
