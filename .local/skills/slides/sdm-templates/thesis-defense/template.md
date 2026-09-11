# Thesis Defense

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-thesis-defense.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ThesisDefense" template presents a modern and professional aesthetic suitable for academic presentations. The background color is a solid dark blue-gray, specifically #1A2332. Text colors include white (#FFFFFF) for primary text and a muted blue-gray (#8E9EBB) for secondary text and accents. The font families used are 'Inter' for general text and 'Playfair Display' for the main title, creating a contrast between a clean sans-serif and a classic serif style. Key layout elements include a horizontal flexbox for the header, a decorative blue bar (#4A90E2) beneath the title, and a structured arrangement for candidate and committee information. No background images are specified in the code. The overall aesthetic feel can be described as "modern, academic, professional."

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
     "description": "Thesis Defense cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #1A2332
- Palette: #8E9EBB, #FFFFFF, #4A90E2, #1A2332
- Type: Inter (weights 300, 400, 500, 600, 7.7–17.3pt); Playfair Display (weights 400, 600, 19.2–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
