# Vintage Apothecary

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-vintage-apothecary.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "VintageApothecary" template embodies a warm, vintage aesthetic reminiscent of old apothecary labels. It features a background color of #EBE3D5 (warm parchment) and uses a dark forest green (#2C3E2D) for text and accent elements. The font family is primarily 'Playfair Display' for headings and Georgia, serif for body text, providing a classic and elegant feel. Key layout elements include a thick outer border, inner double border, and decorative corner ornaments, all styled with circular shapes and lines. There are no background images specified in the code. The overall aesthetic feel can be described as "classic vintage."

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
     "description": "Vintage Apothecary cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #EBE3D5
- Palette: #2C3E2D, #4A5D4E, #EBE3D5, #000000, #8B7355, #E4DCCB
- Type: Playfair Display (weights 400, 600, 700, 8.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
