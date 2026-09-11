# Gallery Modern

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-gallery-modern.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "GalleryModern" template features a contemporary aesthetic, characterized by a clean and minimalistic design. The background color is a soft off-white, specifically #FCFAF8, with a background image sourced from "/__mockup/photos/art-gallery.png" that covers the entire viewport. A white overlay gradient is applied, transitioning from transparent to rgba(252,250,248,0.95) and rgba(252,250,248,0.98) towards the bottom. Text elements utilize the 'Inter' font for body text and 'Space Grotesk' for headings, with colors including #666666 for secondary text and #1A1A1A for primary headings. The layout includes a flexible content container positioned at the bottom, with elements arranged in a row and aligned to create a balanced composition. The overall aesthetic feel is modern and sophisticated.

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
     "description": "Gallery Modern cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FCFAF8
- Palette: #1A1A1A, #666666, #FCFAF8, #E5E5E5, #000000
- Type: Inter (weights 300, 400, 500, 7.7–11.5pt); Space Grotesk (weights 400, 38.4–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: art-gallery.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
