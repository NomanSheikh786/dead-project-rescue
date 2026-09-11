# Investor Memo

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-investor-memo.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "InvestorMemo" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), while the primary text color is a dark gray (#1C1C1C), with accents in lighter gray (#666666) and (#4A4A4A). The font family used is 'Inter' for the main text and 'DM Mono' for the footer details, providing a contemporary and professional look. Key layout elements include a horizontal line at the top, large text for the slide number (01) in a very light gray (#F5F5F5), and a structured footer with three columns for date, prepared by, and status information, separated by a light gray border (#E0E0E0). There are no background images used in this template. The overall aesthetic feel is "clean, modern, professional."

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
     "description": "Investor Memo cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #1C1C1C, #4A4A4A, #888888, #666666, #E0E0E0, #FFFFFF, #F5F5F5, #FAFAFA, #C0C0C0
- Type: Inter (weights 400, 600, 700, 9.6–240pt); DM Mono (weights 400, 600, 6.7–12.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
