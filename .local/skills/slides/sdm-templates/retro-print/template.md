# Retro Print / Mystical

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-retro-print.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "RetroPrint" template features a vintage aesthetic with a clean and modern twist. It has a background color of #F5F0E6, complemented by a subtle radial gradient of rgba(0,0,0,0.05) that creates a textured effect. The primary text and accent color is #1B2A4A, while the secondary accent color is #E8573A, used for emphasis. The font families include 'Inter' for general text and 'Playfair Display' for the main heading, providing a mix of modern sans-serif and classic serif styles. Key layout elements include two decorative frames with a solid border, a left content column with structured text, and a right column featuring an image of a glowing crystal orb. The image is sourced from "/__mockup/images/illust-retro-orb-nobg.png". Overall, the aesthetic feel can be described as "vintage elegance."

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
     "description": "Retro Print / Mystical cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F0E6
- Palette: #1B2A4A, #E8573A, #F5F0E6
- Type: Playfair Display (weights 400, 600, 700, 14.4–72pt); Inter (weights 400, 600, 7.7–24pt); DM Mono (weights 400, 600, 10.6–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: illust-retro-orb-nobg.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
