# Biophilic Urban

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-biophilic-urban.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BiophilicUrban" template embodies a modern, nature-inspired aesthetic, featuring a vertical garden background image sourced from "/__mockup/photos/vertical-garden.png". The primary background color is black (#000), while the frosted glass panel uses a semi-transparent white background (rgba(255, 255, 255, 0.8)). Text colors include a muted green (#6B8E6B) for accents and a dark green (#1A3A2A) for main text. The font families used are 'Inter' for general text and 'DM Sans' for headings, creating a clean and contemporary look. Key layout elements include a frosted glass panel with rounded corners positioned at the bottom of the screen, and a structured arrangement of headers, subtitles, and footers. The overall aesthetic feel is "modern organic".

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
     "description": "Biophilic Urban cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #1A3A2A, #6B8E6B, #FFFFFF, #000000, #0F172A
- Type: Inter (weights 400, 500, 600, 7.7–12.5pt); DM Sans (weights 500, 600, 700, 8.6–43.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: vertical-garden.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
