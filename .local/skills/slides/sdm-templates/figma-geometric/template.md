# Figma Geometric

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-figma-geometric.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The FigmaGeometric template features a clean and modern aesthetic characterized by geometric shapes and a minimalist layout. The background color is a soft off-white, specifically #F5F5F0. Text and accent colors include a dark gray #1E1E1E for primary text, a lighter gray #666666 for the year, and #555555 for the subtitle, with additional accents in #888888 for the company name and a white background #FFFFFF for the "Confidential" label. The font families used are 'Inter' for general text and 'Space Grotesk' for the main heading, providing a contemporary feel. Key layout elements include decorative overlapping circles with borders in #E8878C, #7B9FCC, and #7BC8A4, positioned absolutely in the top right corner, and a structured flexbox layout that organizes content vertically and horizontally. There are no background images used in this template. The overall aesthetic feel can be described as modern, geometric, and minimalist.

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
     "description": "Figma Geometric cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F5F0
- Palette: #1E1E1E, #666666, #888888, #FFFFFF, #E8878C, #7BC8A4, #7B9FCC, #555555, #F5F5F0
- Type: Inter (weights 400, 500, 600, 700, 9.6–19.2pt); Space Grotesk (weights 600, 700, 11.5–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
