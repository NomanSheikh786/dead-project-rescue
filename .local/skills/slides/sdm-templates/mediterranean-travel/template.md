# Mediterranean Travel

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-mediterranean-travel.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "MediterraneanTravel" template embodies a warm and inviting Mediterranean aesthetic. The background color is a soft beige (#F5EEE4), complemented by a background image of the Mediterranean coast located at "/__mockup/photos/mediterranean-coast.png". Text and accent colors include a warm brown (#A0674A) for labels and footer elements, and a deep brown (#2C1E0F) for the main title and subtitle. The font families used are 'Inter' for general text and 'Playfair Display' for the title and footer, creating a contrast between modern and classic styles. Key layout elements include a full-screen background image, a warm gradient overlay, and a content container positioned at the bottom left, featuring decorative elements like icons and horizontal lines. The overall aesthetic feel is "warm, inviting, coastal."

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
     "description": "Mediterranean Travel cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5EEE4
- Palette: #2C1E0F, #A0674A, #F5EEE4, #E8DEC8, #000000
- Type: Inter (weights 300, 400, 500, 600, 7.7–14.4pt); Playfair Display (weights 400, 8.6–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: mediterranean-coast.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
