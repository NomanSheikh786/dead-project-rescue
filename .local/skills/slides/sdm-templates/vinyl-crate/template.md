# Vinyl Crate

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-vinyl-crate.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "VinylCrate" template embodies a retro aesthetic reminiscent of classic vinyl records. It features a solid background color of #C4A872, complemented by a subtle noise texture overlay. The text and accent colors include #2C1E0F for general text, #8B3A3A for decorative elements, and #F0E6D2 for highlighted text. The font families used are 'DM Mono' for metadata and labels, 'Space Grotesk' for the main title, and Georgia for the subtitle, creating a mix of modern and vintage styles. Key layout elements include a large circular vinyl record graphic positioned on the right side, with concentric borders representing grooves, and a content container on the left side that organizes the header, main content, and footer metadata. The overall aesthetic feel is "retro vintage."

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
     "description": "Vinyl Crate cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #C4A872
- Palette: #2C1E0F, #C4A872, #8B3A3A, #FFFFFF, #18130E, #F0E6D2
- Type: DM Mono (weights 400, 500, 600, 5.4–11.5pt); Space Grotesk (weights 600, 700, 19.2–57.6pt); Georgia (weights 400, 11.5–15.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
