# Creative Agency

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-creative-agency.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CreativeAgency" template features a modern and vibrant aesthetic, characterized by a clean layout and bold color contrasts. The background color is a soft cream (#FFFBF0), while a striking accent color of orange (#FF4D00) is used for a prominent rectangular element. Text colors include black (#000) for primary text, a muted gray (#666) for subtitles, and a lighter gray (#999) for footer details. The font family used is 'DM Sans', which is applied throughout for a contemporary feel. Key layout elements include a rounded rectangle positioned in the top right, a circular border element, and a structured vertical alignment of text blocks. There are no background images specified in the code. The overall aesthetic feel can be described as "modern, vibrant, clean."

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
     "description": "Creative Agency cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFBF0
- Palette: #000000, #FF4D00, #999999, #666666, #FFFFFF, #FFFBF0
- Type: DM Sans (weights 400, 500, 600, 700, 7.7–62.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
