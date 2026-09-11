# Terracotta Studio

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-terracotta-studio.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "TerracottaStudio" template embodies a warm, earthy aesthetic, characterized by its terracotta color palette. The background color is a soft beige (#F5EDE0), complemented by organic shapes in light brown (#D2B48C) and dark brown (#A0522D) with varying opacities. Text elements utilize the font families 'DM Sans' for general text and 'Playfair Display' for the main heading, creating a modern yet classic feel. Key layout elements include rounded organic shapes positioned throughout the background, with a structured content area that features a mix of flexbox layouts for alignment. The overall aesthetic feel can be described as "warm organic."

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
     "description": "Terracotta Studio cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5EDE0
- Palette: #8B4513, #A0522D, #F5EDE0, #6B4423, #D2B48C, #B85C38, #4A2F1D
- Type: DM Sans (weights 400, 500, 600, 700, 9.6–15.4pt); Playfair Display (weights 600, 19.2–72pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
