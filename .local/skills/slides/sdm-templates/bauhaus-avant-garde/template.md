# Bauhaus Avant Garde

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-bauhaus-avant-garde.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BauhausAvantGarde" template embodies a modernist aesthetic with bold geometric shapes and a vibrant color palette. The background color is a soft beige (#EBE6DE), complemented by a diagonal red element (#D9281C) and a large yellow circle (#F2B705). Text is primarily in a dark gray (#111111), with accents in light gray (#F2F2F2) for the subtitle background. The font family used is 'Inter', with varying weights for headers and body text to create a hierarchy. Key layout elements include a large blue rectangle (#033E8C), a triangular shape created with borders, and heavy black rules for visual separation. There are no background images specified. The overall aesthetic feel is "bold geometric."

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
     "description": "Bauhaus Avant Garde cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #EBE6DE
- Palette: #111111, #EBE6DE, #D9281C, #F2B705, #033E8C, #F2F2F2, #333333, #A0A0A0
- Type: Inter (weights 400, 500, 700, 800, 900, 9.6–105.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
