# Minimalist Poster

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-minimalist-poster.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "MinimalistPoster" template embodies a clean and modern aesthetic, characterized by its simplicity and spacious layout. The background color is pure white (#FFFFFF), while the text colors include a dark gray (#111111) for primary text, a lighter gray (#666666) for the "DECK" label, a medium gray (#444444) for the subtitle, and a softer gray (#999999) for the "Confidential" label. The font family used is 'Inter', sans-serif, which is applied throughout for a contemporary feel. Key layout elements include a flexible positioning of text blocks, with the main title "EXAMPLE" prominently displayed in bold at the center bottom, and additional text elements strategically placed in the upper corners. There are no background images used in this template. The overall aesthetic feel can be described as "clean, modern, minimalist."

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
     "description": "Minimalist Poster cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #666666, #111111, #FFFFFF, #999999, #444444, #CCCCCC, #AAAAAA, #888888
- Type: Inter (weights 200, 400, 500, 700, 900, 7.7–115.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
