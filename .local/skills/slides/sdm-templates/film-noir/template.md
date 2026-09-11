# Film Noir

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-film-noir.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "FilmNoir" template embodies a dark, cinematic aesthetic reminiscent of classic film noir. It features a solid background color of #0D0D0D, complemented by a dramatic linear gradient of #1A1A1A and #2A2A2A for a light beam effect. Text and accent colors include #E0E0E0 for primary text, #D4C36A for highlights, and #808080 for secondary text. The font families used are 'Inter' for general text and 'DM Mono' and 'Georgia' for specific elements, creating a mix of modern and vintage styles. Key layout elements include a dramatic diagonal light beam, Venetian blind slats, and a vignette effect that darkens the corners, enhancing the overall moody atmosphere. The template does not utilize any background images. The overall aesthetic feel is "dark, cinematic."

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
     "description": "Film Noir cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0D0D0D
- Palette: #000000, #D4C36A, #666666, #1A1A1A, #A0A0A0, #0D0D0D, #808080, #E0E0E0, #2A2A2A
- Type: DM Mono (weights 400, 600, 700, 7.7–14.4pt); Inter (weights 300, 400, 500, 7.7–15.4pt); Georgia (weights 400, 11.5–86.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
