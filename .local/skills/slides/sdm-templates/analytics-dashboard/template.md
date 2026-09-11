# Analytics Dashboard

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-analytics-dashboard.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AnalyticsDashboard" template presents a clean and modern aesthetic, characterized by a professional layout suitable for data presentation. The background color is a soft light grayish-blue, specifically #FAFBFC. Text and accent colors include a deep navy blue (#1E3A5F) for primary text, a teal (#0D9488) for highlights, and a muted gray (#64748B) for secondary text. The font family used is 'Inter', sans-serif, which is employed for both headings and body text to ensure readability and a contemporary feel. Key layout elements include a grid structure with a header, main content area divided into two columns, and a footer, all featuring rounded corners and subtle shadows for depth. There are no background images used in this template. The overall aesthetic feel can be described as "clean, modern, professional."

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
     "description": "Analytics Dashboard cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FAFBFC
- Palette: #0D9488, #64748B, #E2E8F0, #1E3A5F, #FFFFFF, #94A3B8, #FAFBFC, #475569
- Type: Inter (weights 400, 500, 600, 700, 800, 7.7–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
