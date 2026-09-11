# Fitness Athletics

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-fitness-athletics.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The FitnessAthletics template features a modern and dynamic aesthetic, characterized by a bold and energetic design. The background color is a solid #141414, complemented by a diagonal stripe in #C84B31 and a secondary darker accent in #2A2A2A. Text is primarily rendered in white (#FFFFFF) and light gray (#A0A0A0), with accents in #C84B31. The font family used is 'Inter', a sans-serif typeface, which is applied throughout for headers and body text. Key layout elements include skewed diagonal stripes for visual interest, a structured header with a logo and performance label, and a footer that provides company information and metrics. There are no background images specified in the code. The overall aesthetic feel can be described as "bold, modern, energetic."

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
     "description": "Fitness Athletics cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #141414
- Palette: #FFFFFF, #C84B31, #141414, #A0A0A0, #2A2A2A, #555555, #888888, #000000
- Type: Inter (weights 300, 400, 500, 600, 700, 800, 900, 7.7–115.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
