# Artisanal Chalkboard

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-artisanal-chalkboard.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ArtisanalChalkboard" template embodies a rustic, hand-crafted aesthetic reminiscent of a chalkboard design. It features a background color of dark green (#1a251d) with text and accent colors in a soft cream (#e8ecd7). The font families used are 'DM Sans' for general text and 'Playfair Display' for headings, providing a contrast between modern and classic styles. Key layout elements include a central hand-drawn effect box with dashed borders and a chalk dust effect created through box shadows, enhancing the artisanal feel. There are no background images specified in the code. Overall, the aesthetic feel can be described as "rustic elegance."

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
     "description": "Artisanal Chalkboard cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #1A251D
- Palette: #E8ECD7, #1A251D
- Type: Playfair Display (weights 400, 700, 13.4–96pt); DM Sans (weights 400, 500, 9.6–21.1pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
