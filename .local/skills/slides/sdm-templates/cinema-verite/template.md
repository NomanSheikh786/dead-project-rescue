# Cinema Vérité

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-cinema-verite.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The CinemaVerite template features a sleek, modern aesthetic reminiscent of a cinematic experience. The background color is a solid black (#050505) with a top and bottom bar in pure black (#000000), creating a stark contrast with the text color of light gray (#F0F0F0) and accent colors of medium gray (#666) and dark gray (#444). The font families used include 'Space Grotesk' for the main body text, 'DM Mono' for headers and footer elements, and 'Inter' for the subtitle, emphasizing a contemporary and tech-savvy feel. Key layout elements include a large title block positioned to the left, a decorative focal crosshair in the center-right, and a structured arrangement of header and footer elements, all contributing to a balanced and visually engaging composition. The overall aesthetic feel can be described as "modern cinematic."

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
     "description": "Cinema Vérité cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #050505
- Palette: #666666, #222222, #444444, #555555, #000000, #333333, #050505, #F0F0F0, #FFFFFF
- Type: DM Mono (weights 300, 400, 7.7–14.4pt); Space Grotesk (weights 700, 28.8–115.2pt); Inter (weights 300, 11.5–17.3pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
