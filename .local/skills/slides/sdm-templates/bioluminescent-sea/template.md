# Bioluminescent Sea

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-bioluminescent-sea.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BioluminescentSea" template features a serene and ethereal aesthetic, evoking the beauty of bioluminescent waves. The background consists of a full-bleed image sourced from "/__mockup/photos/bioluminescent-waves.png" with a subtle gradient overlay that transitions from rgba(5,5,15,0.6) at the top to transparent at 40%. Text elements utilize a color palette of #D0E8F0 for primary text and #4A7A8C for accents. The font families include 'Inter' for general text and 'Playfair Display' for headings and decorative text, enhancing the elegant feel. Key layout elements include a flexible content container with a structured arrangement of text and decorative lines, creating a balanced composition. The overall aesthetic feel can be described as tranquil and sophisticated.

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
     "description": "Bioluminescent Sea cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #05050F → #000000
- Palette: #D0E8F0, #4A7A8C, #05050F, #000000
- Type: Inter (weights 300, 400, 600, 7.7–14.4pt); Playfair Display (weights 400, 500, 7.7–67.2pt); DM Mono (weights 400, 9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: bioluminescent-waves.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
