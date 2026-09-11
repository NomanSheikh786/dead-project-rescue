# Line Art Sketch

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-lineart-sketch.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "LineartSketch" template embodies a modern, artistic aesthetic with a hand-drawn feel. The background color is a soft off-white, specifically #FEFCF8, complemented by a repeating linear gradient that introduces a subtle texture with rgba(0,0,0,0.05). Text elements are primarily in dark gray (#333) and accented with a vibrant orange (#E54D2E) for emphasis. The font families used include 'Courier New' for general text, giving a typewriter-like appearance, and 'DM Sans' for headings and accents, providing a clean, contemporary look. Key layout elements include decorative vertical margin lines in varying opacities of rgba(229, 77, 46, 0.4) and rgba(229, 77, 46, 0.2), an accent circle behind the title, and a hero illustration of a rocket launching from a laptop, sourced from "/__mockup/images/illust-lineart-rocket-nobg.png". The overall aesthetic feel can be described as "artistic, modern, playful."

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
     "description": "Line Art Sketch cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FEFCF8
- Palette: #333333, #E54D2E, #FEFCF8, #666666, #FFFFFF, #000000, #444444, #888888, #555555
- Type: Courier New (weights 400, 600, 700, 9.6–57.6pt); DM Sans (weights 400, 700, 800, 13.4–96pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: illust-lineart-rocket-nobg.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
