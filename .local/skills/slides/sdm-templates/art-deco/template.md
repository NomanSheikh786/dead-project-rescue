# Art Deco

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-art-deco.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ArtDeco" template features a sleek, modern aesthetic with a dark and luxurious feel. The background color is a solid black (#0C0C0C), while the text and accent colors include a gold shade (#D4AF37) and a lighter gold with transparency (rgba(212,175,55,0.3) and rgba(212,175,55,0.7)). The font family used is 'DM Sans', sans-serif, which is applied throughout the component for a clean and contemporary look. Key layout elements include multiple horizontal and vertical lines created with linear gradients, positioned at the top, bottom, and sides of the slide, along with a centered text block that features decorative elements like horizontal lines and arrows (&#9670;). The overall aesthetic feel can be described as "elegant, modern, luxurious."

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
     "description": "Art Deco cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0C0C0C
- Palette: #0C0C0C, #000000, #D4AF37, #FFFFFF, #0A0A0A, #FDFBF7
- Type: DM Sans (weights 400, 700, 7.7–76.8pt); Playfair Display (weights 400, 700, 24–28.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
