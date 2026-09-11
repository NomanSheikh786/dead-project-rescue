# Treasury Policy

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-treasury-policy.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "TreasuryPolicy" template features a modern and professional aesthetic, primarily using a clean layout with a strong contrast between dark and light elements. The background color is #FFFFFF (white), while the header section has a background color of #1C2541 (dark blue) with text in #FFFFFF (white). The main text color is #333333 (dark gray), with accent colors including #555555 (medium gray) and #888888 (light gray) for secondary text. The font family used is 'Inter' for general text and 'DM Mono' for specific sections, providing a contemporary and tech-savvy feel. Key layout elements include a circular decorative element in the header, positioned at the bottom right, and a grid layout for additional information in the lower section. There are no background images specified in the code. The overall aesthetic feel can be described as "modern corporate."

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
     "description": "Treasury Policy cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #555555, #FFFFFF, #1C2541, #888888, #333333, #E0E0E0, #F5F7FA, #5C6B89, #A0AABF
- Type: Inter (weights 400, 500, 600, 700, 9.6–43.2pt); DM Mono (weights 400, 600, 7.7–9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
