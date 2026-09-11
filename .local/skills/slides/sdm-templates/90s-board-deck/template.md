# 90s Board Deck

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-90s-board-deck.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BoardDeck90s" template presents a retro aesthetic reminiscent of the 1990s, characterized by its bold color contrasts and structured layout. The background features a linear gradient transitioning from #1a2744 at the top to #0d1a33 at the bottom. Text and accent colors include white (#fff) for primary text, a gold hue (#c5a044) for accents, and a soft beige (#e8d08c) in the decorative elements. The font family used is Georgia, Times New Roman, serif for the main body, while Arial, sans-serif is employed for headings and accent text. Key layout elements include a bordered central content area, decorative gradient bars at the top and bottom, and a structured arrangement of text and shapes that emphasize clarity and organization. No background images are specified in the code. The overall aesthetic feel can be described as "retro elegance."

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
     "description": "90s Board Deck cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #1A2744 → #0D1A33
- Palette: #C5A044, #FFFFFF, #E8D08C, #0D1A33, #1A2744, #000000, #4CAF50
- Type: Arial (weights 400, 700, 9.6–28.8pt); Georgia (weights 400, 700, 9.6–48pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
