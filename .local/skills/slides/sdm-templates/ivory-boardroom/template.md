# Ivory Boardroom

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-ivory-boardroom.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "IvoryBoardroom" template presents a clean and professional aesthetic, characterized by a soft ivory background color (#F5F0E8) that evokes a sense of elegance. The text and accent colors are primarily dark brown (#2C1810) for the main text and a rich gold (#B8960C) for decorative elements, including borders and a diamond shape. The font families used are 'Inter' for body text, providing a modern sans-serif look, and 'Playfair Display' for the main heading, which adds a classic serif touch. Key layout elements include a structured flexbox design with a centered title, a decorative diamond shape, and a top and bottom border in gold, enhancing the overall composition. There are no background images used in this template. The overall aesthetic feel can be described as "elegant professionalism."

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
     "description": "Ivory Boardroom cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F0E8
- Palette: #2C1810, #B8960C, #F5F0E8, #FFFFFF
- Type: Inter (weights 300, 400, 600, 8.6–17.3pt); Playfair Display (weights 300, 400, 600, 13.4–72pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
