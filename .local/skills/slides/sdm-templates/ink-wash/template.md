# Ink Wash

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-ink-wash.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "InkWash" template features a soft, organic aesthetic reminiscent of traditional ink wash painting. The background color is a light beige (#F5F0E6), complemented by various translucent dark gray circles (#1A1A1A) with different opacities (0.05, 0.08, 0.12, 0.08) that create a layered, blurred effect. The text color is primarily a dark gray (#1A1A1A) with variations in opacity for different elements, while the accent color for the Hanko seal is a vibrant red (#D93829). The font families used are 'Inter' for general text and 'Playfair Display' for headings and decorative elements, providing a contrast between modern and classic styles. Key layout elements include the circular ink wash shapes positioned throughout the background, a content container that is centered and left-aligned, and a footer with company information. There are no background images used. The overall aesthetic feel is "elegant, serene."

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
     "description": "Ink Wash cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F0E6
- Palette: #1A1A1A, #F5F0E6, #D93829
- Type: Inter (weights 200, 300, 400, 7.7–15.4pt); Playfair Display (weights 400, 700, 7.7–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
