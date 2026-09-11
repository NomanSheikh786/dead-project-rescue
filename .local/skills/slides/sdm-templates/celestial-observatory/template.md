# Celestial Observatory

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-celestial-observatory.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CelestialObservatory" template embodies a cosmic and modern aesthetic, featuring a dark, starry background. The background color is a radial gradient transitioning from #152243 at the center to #0B1026 at the edges. Text and accent colors include #ffffff for primary text and #D4C5A0 for decorative elements, with additional rgba variations for subtle effects. The font families used are 'DM Sans' for general text, 'DM Mono' for coordinate notations and bottom bar text, and 'Playfair Display' for the main title, providing a mix of modern and classic styles. Key layout elements include decorative constellation shapes, connecting lines, and grid lines, all positioned strategically to create a celestial theme. The overall aesthetic feel is "cosmic elegance."

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
     "description": "Celestial Observatory cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #152243 → #0B1026
- Palette: #FFFFFF, #D4C5A0, #152243, #0B1026
- Type: DM Mono (weights 400, 6.7–10.6pt); Playfair Display (weights 400, 14.4–62.4pt); DM Sans (weights 300, 9.6–14.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
