# Fashion Editorial

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-fashion-editorial.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "FashionEditorial" template embodies a modern and chic aesthetic, suitable for high-end fashion presentations. The background color is solid black (#000), while a linear gradient overlay at the bottom features a transition from rgba(0,0,0,0.4) to transparent. Text elements are primarily in white (#FFFFFF) with accents of pink (#FF2D78) for decorative elements, and a lighter white (rgba(255,255,255,0.8)) for secondary text. The font families used include 'Playfair Display' in an italic style for the main title "NOVA," and 'Inter' for the supporting text, providing a contemporary and elegant feel. Key layout elements include a full-screen background image of a fashion face, a vertical pink accent line, and a structured layout with text positioned at the bottom, creating a sophisticated and visually striking presentation. The overall aesthetic feel is "modern elegance."

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
     "description": "Fashion Editorial cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #000000, #FF2D78
- Type: Inter (weights 300, 400, 7.7–11.5pt); Playfair Display (weights 400, 57.6–115.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-fashion-face.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
