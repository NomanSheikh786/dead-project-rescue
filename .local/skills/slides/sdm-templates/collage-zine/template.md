# Collage / Zine

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-collage-zine.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CollageZine" template embodies a modern, eclectic aesthetic with a playful and artistic flair. The background color is a soft yellow (#FFFDE7), while accent colors include a bold red (#FF1744) and black (#000). The font families used are 'Courier New' for general text and 'Inter' for headings, providing a contrast between a classic typewriter style and a contemporary sans-serif look. Key layout elements include various rotated rectangular shapes in black and red, creating a dynamic composition, along with a repeating linear gradient in the bottom section. There are no background images specified in the code. The overall aesthetic feel can be described as vibrant and contemporary.

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
     "description": "Collage / Zine cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFDE7
- Palette: #000000, #FFFFFF, #EE3333, #FFFDE7, #FF1744, #F0EDE5, #FFD54F, #FF8A80
- Type: Courier New (weights 400, 700, 6.7–76.8pt); Inter (weights 900, 17.3–86.4pt); DM Sans (weights 900, 48–57.6pt); Playfair Display (weights 700, 21.1pt); Georgia (weights 700, 24pt); Caveat (weights 700, 11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
