# Perfume Noir

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-perfume-noir.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "PerfumeNoir" template embodies a sophisticated and elegant aesthetic, characterized by its dark and luxurious style. The background color is solid black (#000000), while the text color is white (#FFFFFF) with accents in a muted burgundy (#5C0A2A) and varying opacities of white (rgba(255, 255, 255, 0.6) and rgba(255, 255, 255, 0.7)). The font family used for the main text is 'Inter', a sans-serif typeface, while the title employs 'Playfair Display', a serif font, to convey a classic and refined feel. Key layout elements include a vertical burgundy line positioned on the left, uppercase text with letter spacing for a modern touch, and a structured arrangement that balances text and decorative elements. The overall aesthetic feel can be described as "luxurious elegance."

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
     "description": "Perfume Noir cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #5C0A2A, #000000
- Type: Inter (weights 200, 400, 6.7–11.5pt); Playfair Display (weights 300, 400, 28.8–96pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
