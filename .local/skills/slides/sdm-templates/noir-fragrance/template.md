# Noir Fragrance

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-noir-fragrance.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "NoirFragrance" template embodies a luxurious and elegant aesthetic, characterized by a dark and sophisticated style. The background color is solid black (#000000), complemented by a radial gradient overlay that transitions from transparent to rgba(0,0,0,0.4). Text and accent colors include a soft beige (#D4C4A0) for primary text and a muted gray (#A0A0A0) for secondary text. The font families used are 'Inter' for body text and 'Playfair Display' for headings, with 'Inter' providing a modern sans-serif look and 'Playfair Display' adding a classic serif touch. Key layout elements include a full-screen background image of a perfume crystal, positioned absolutely, and various text elements arranged in a structured manner on the top left and bottom corners. The overall aesthetic feel is "luxurious elegance."

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
     "description": "Noir Fragrance cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #D4C4A0, #A0A0A0, #000000
- Type: Inter (weights 300, 6.7–11.5pt); Playfair Display (weights 400, 9.6–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: perfume-crystal.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
