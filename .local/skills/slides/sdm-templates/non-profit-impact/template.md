# Non-Profit Impact

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-non-profit-impact.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "NonProfitImpact" template embodies a clean and modern aesthetic suitable for nonprofit presentations. It features a solid background color of #FDF8F0 (a soft cream) with decorative elements in the form of two large, semi-transparent circular shapes in #1B5E5A (a deep teal) and #C4654A (a warm coral). The text primarily uses #1B5E5A for headings and #C4654A for accents, with the font family set to 'Inter' for body text and 'Playfair Display' for headings, creating a contrast between modern and classic styles. Key layout elements include a structured header, a main content area with a prominent impact badge on the right, and a footer line, all contributing to a balanced and organized presentation. The overall aesthetic feel can be described as "elegant and professional."

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
     "description": "Non-Profit Impact cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FDF8F0
- Palette: #1B5E5A, #C4654A, #FDF8F0
- Type: Inter (weights 300, 400, 500, 600, 8.6–15.4pt); Playfair Display (weights 400, 600, 33.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
