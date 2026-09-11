# Slate Modern

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-slate-modern.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The SlateModern template features a clean and contemporary aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), with a dark accent strip on the left side in a deep grayish-blue (#3D4852). Text colors include a darker grayish-blue (#3D4852) for the main headings, a lighter gray (#99A3A4) for secondary text, and a muted teal (#7F8C8D) for the subtitle. The font family used is 'Inter', sans-serif, which is applied throughout for a modern and readable appearance. Key layout elements include a vertical accent bar, a large bold heading, and a circular decorative element positioned near the subtitle. There are no background images used in this template. The overall aesthetic feel can be described as "modern minimalist."

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
     "description": "Slate Modern cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #99A3A4, #3D4852, #5A8A7A, #7F8C8D, #FFFFFF, #F8F9F9
- Type: Inter (weights 400, 500, 600, 700, 800, 8.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
