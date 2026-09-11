# Fluid Luxe

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-fluid-luxe.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The FluidLuxe template features a sophisticated and elegant aesthetic, characterized by a dark and luxurious style. The background color is a solid #08060c, complemented by a linear gradient overlay transitioning from transparent to rgba(8,6,12,0.95). Text colors include #D4B896 for accents and headings, and #E8DFD0 for secondary text, with a subtle opacity effect on some elements. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, enhancing the refined look. Key layout elements include a full-screen background image of fluid gold and navy art, positioned absolutely, and a right-aligned content area that features various text elements and decorative lines. The overall aesthetic feel can be described as "luxurious elegance."

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
     "description": "Fluid Luxe cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #08060C
- Palette: #D4B896, #E8DFD0, #08060C, #000000
- Type: Inter (weights 300, 400, 5.8–11.5pt); Playfair Display (weights 400, 24–48pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: fluid-gold.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
