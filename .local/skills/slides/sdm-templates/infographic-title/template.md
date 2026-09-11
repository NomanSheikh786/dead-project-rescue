# Infographic Title

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-infographic-title.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "InfographicTitle" template presents a modern and clean aesthetic, characterized by a professional layout suitable for data presentation. The background color is a solid light gray (#F0F2F5), while the stat cards feature soft pastel colors: soft blue (#E0E7ED), soft green (#E1EDE4), and soft orange (#F0E4D8). Text colors include a dark slate (#1A1A2E) for headings and key information, a medium gray (#5A5A6E) for subtitles, and a lighter gray (#888) for secondary text. The font family used is 'Inter', sans-serif, which is applied to all text elements for a cohesive look. Key layout elements include a flexible two-column structure with a left side for text and a right side for stat cards, each card having rounded corners and a subtle shadow for depth. Overall, the aesthetic feel can be described as "modern, professional, clean."

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
     "description": "Infographic Title cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F0F2F5
- Palette: #1A1A2E, #5A5A6E, #F0F2F5, #888888, #E0E7ED, #E1EDE4, #F0E4D8, #A0A0B0
- Type: Inter (weights 400, 600, 700, 800, 9.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
