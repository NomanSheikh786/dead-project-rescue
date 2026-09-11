# Astronomy Log

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-astronomy-log.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The AstronomyLog template features a modern, celestial aesthetic with a dark theme. The background color is a solid #0F1423, complemented by a subtle grid pattern created with a linear gradient of rgba(212, 222, 235, 0.05) and transparent. Text and accent colors include #D4DEEB for primary text, with various shades of rgba(212, 222, 235, 0.2) and rgba(212, 222, 235, 0.6) for secondary elements. The font families used are 'DM Mono' for general text and 'Playfair Display' for the main heading, providing a mix of modern and classic styles. Key layout elements include crosshairs and circular borders positioned centrally, creating a focal point, while the content is organized in a flexible layout with padding for readability. Overall, the aesthetic feel is sleek and futuristic.

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
     "description": "Astronomy Log cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0F1423
- Palette: #D4DEEB, #0F1423, #000000
- Type: DM Mono (weights 300, 400, 600, 7.7–14.4pt); Playfair Display (weights 400, 28.8–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
