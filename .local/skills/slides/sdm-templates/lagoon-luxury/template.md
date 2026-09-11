# Lagoon Luxury

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-lagoon-luxury.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "LagoonLuxury" template embodies a luxurious and serene aesthetic, featuring a rich teal background color (#0D4F4F) that evokes a sense of tranquility. The layout includes a full-bleed background image of a turquoise lagoon (URL: /__mockup/photos/lagoon-aerial.png) that enhances the theme. The overlay card is styled with a semi-transparent white background (rgba(255, 255, 255, 0.95)) and incorporates text in various shades: a deep teal (#0D4F4F) for headings, a soft gray (#888888) for body text, and a subtle shadow effect for depth. The font families used are 'Inter' for general text and 'Playfair Display' for titles, creating a contrast between modern and classic styles. Key layout elements include a positioned info card at the bottom right, decorative spacing, and a rating section with star icons, contributing to an overall elegant and sophisticated feel.

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
     "description": "Lagoon Luxury cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0D4F4F
- Palette: #0D4F4F, #888888, #FFFFFF, #666666, #FAFAFA
- Type: Inter (weights 400, 500, 600, 700, 7.7–11.5pt); Playfair Display (weights 400, 500, 600, 8.6–38.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: lagoon-aerial.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
