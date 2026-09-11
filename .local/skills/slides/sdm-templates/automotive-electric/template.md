# Automotive Electric

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-automotive-electric.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AutomotiveElectric" template embodies a modern and sleek aesthetic, suitable for showcasing electric vehicles. The background color is a solid dark shade, specifically #08080C, with a full-bleed background image of an electric car sourced from "/__mockup/photos/electric-car.png". A gradient overlay at the bottom 45% of the slide transitions from transparent to rgba(8,8,12,0.92), enhancing depth. Text elements utilize the 'DM Mono' font for headings and footer labels in #A0A8B4, while the main title is presented in 'Space Grotesk' with a striking #FFFFFF color, emphasizing its importance. Key layout features include a decorative blue accent line (#4A90D9) and strategic positioning of content elements, creating a visually engaging hierarchy. The overall feel is contemporary and sophisticated.

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
     "description": "Automotive Electric cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #08080C
- Palette: #A0A8B4, #4A90D9, #FFFFFF, #08080C, #1A1A24, #000000
- Type: DM Mono (weights 400, 600, 9.6–11.5pt); Space Grotesk (weights 400, 700, 11.5–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: electric-car.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
