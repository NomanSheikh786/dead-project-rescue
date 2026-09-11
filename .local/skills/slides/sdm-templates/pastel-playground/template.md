# Pastel Playground

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-pastel-playground.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "PastelPlayground" template embodies a soft, playful aesthetic characterized by pastel colors and rounded shapes. The background color is a light cream (#fdfbf7), complemented by decorative shapes in pastel pink (#ffd8d8), mint green (#d8f0e6), lavender (#e2d8ff), soft yellow (#ffe8a1), and peach (#ffc4a3). The text colors include dark gray (#1a1a1a) for headers, a muted purple (#5c3ca8) for accent text, and lighter grays (#666666, #555555, #888888) for additional text elements. The font family used is 'DM Sans', which is applied throughout for a modern, clean look. Key layout elements include multiple circular decorative shapes positioned at various angles and a central content container with rounded corners and a semi-transparent white background. No background images are specified in the code. The overall aesthetic feel can be described as "soft, whimsical, cheerful."

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
     "description": "Pastel Playground cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FDFBF7
- Palette: #1A1A1A, #FFFFFF, #E2D8FF, #555555, #D8F0E6, #888888, #FFD8D8, #FFE8A1, #FFC4A3
- Type: DM Sans (weights 400, 500, 600, 700, 800, 11.5–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
