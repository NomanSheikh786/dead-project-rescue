# Academic Lecture

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-academic-lecture.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AcademicLecture" template presents a clean and modern aesthetic suitable for educational contexts. It features a solid background color of #FBF7F0, complemented by decorative borders in a muted green (#2D4A3E) with varying opacities for a subtle layered effect. The text primarily uses the same green color (#2D4A3E) for headings and accents, while the main title is rendered in a darker shade (#1A2C25). The font families include 'Inter' for general text and 'Playfair Display' for headings, providing a contrast between modern sans-serif and classic serif styles. Key layout elements include circular decorative shapes, a centered title, and a structured arrangement of text blocks, creating a balanced and professional look. Overall, the aesthetic feel can be described as "academic elegance."

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
     "description": "Academic Lecture cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FBF7F0
- Palette: #2D4A3E, #1A2C25, #FBF7F0
- Type: Inter (weights 400, 500, 600, 8.6–14.4pt); Playfair Display (weights 400, 600, 700, 8.6–62.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
