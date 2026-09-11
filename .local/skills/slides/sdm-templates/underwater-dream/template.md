# Underwater Dream

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-underwater-dream.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "UnderwaterDream" template presents a serene underwater aesthetic, characterized by deep blues and soft gradients. The background color is a solid #0A1432, complemented by a gradient overlay transitioning from rgba(10,20,50,0.7) to transparent. Text colors include #9AA8C8 for accents and #E8E4F0 for primary text. The font families used are 'Inter' for body text and 'Playfair Display' for titles, creating a modern yet elegant feel. Key layout elements include a full-screen background image of an underwater dancer, positioned absolutely, and a content container that occupies the left half of the screen, featuring a structured arrangement of headers, titles, and footers. The overall aesthetic feel is tranquil and elegant.

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
     "description": "Underwater Dream cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0A1432
- Palette: #9AA8C8, #E8E4F0, #0A1432, #000000
- Type: Inter (weights 100, 300, 7.7–13.4pt); Playfair Display (weights 300, 400, 9.6–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: underwater-dancer.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
