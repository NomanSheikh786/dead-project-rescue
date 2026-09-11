# Scandinavian

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-scandinavian.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "Scandinavian" template features a minimalist and clean aesthetic typical of Scandinavian design. The background color is a soft beige (#F7F3EE), complemented by a light taupe accent (#E8DFD3) used in a rounded shape at the bottom right. Text colors include a dark brown (#3D3832) for primary text, a muted olive (#8B7E6E) for subtitles, and a light taupe (#B5A898) for secondary text elements. The font family used is 'DM Sans', which is applied throughout for a modern and legible appearance. Key layout elements include a large rounded shape in the bottom right corner, a circular decorative element, and a structured layout with flexbox for alignment. There are no background images specified in the code. The overall aesthetic feel can be described as "minimalist elegance."

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
     "description": "Scandinavian cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F7F3EE
- Palette: #B5A898, #C4B8A8, #4A4A4A, #8B7E6E, #3D3832, #6B6B6B, #E8DFD3, #F7F3EE, #8FAE8B
- Type: DM Sans (weights 400, 500, 600, 700, 7.7–52.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
