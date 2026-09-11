# Private Equity Dark

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-private-equity-dark.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "PrivateEquityDark" template features a sleek, modern aesthetic with a dark theme. The background color is a solid #141414, while an accent line at the bottom is colored #A0785A. The primary text color is #FFFFFF, with a secondary text color of #888888 for the paragraph and #666666 for the footer details. The font family used is 'Inter', sans-serif, with varying weights for headings and body text. Key layout elements include a centered title and subtitle in a flexbox arrangement, with a decorative horizontal line positioned at the bottom of the main content area. The overall aesthetic feel is "sleek, modern, dark."

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
     "description": "Private Equity Dark cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #141414
- Palette: #FFFFFF, #A0785A, #666666, #888888, #333333, #141414, #1A1A1A, #222222
- Type: Inter (weights 300, 400, 500, 7.7–52.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
