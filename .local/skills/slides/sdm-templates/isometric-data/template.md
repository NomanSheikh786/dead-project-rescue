# Isometric 3D Data

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-isometric-data.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "IsometricData" template features a modern, sleek aesthetic with a dark theme. The background color is a solid #0F172A, complemented by a subtle grid pattern created with a linear gradient of rgba(255,255,255,0.03). Text elements utilize white (#FFFFFF) for primary content, with accents in #14B8A6 for highlights and #94A3B8 for secondary text. The font family used is 'DM Sans' for the main body and 'Inter' for smaller text, providing a clean and contemporary look. Key layout elements include a left content area with a rounded accent box, a prominent header, and a right illustration area featuring a blurred green circle behind an isometric data dashboard image sourced from "/__mockup/images/illust-isometric-data-nobg.png". The overall aesthetic feel is modern and professional.

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
     "description": "Isometric 3D Data cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0F172A
- Palette: #FFFFFF, #14B8A6, #94A3B8, #0F172A, #000000
- Type: DM Sans (weights 400, 500, 600, 700, 7.7–57.6pt); Inter (weights 400, 500, 600, 8.6–17.3pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: illust-isometric-data-nobg.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
