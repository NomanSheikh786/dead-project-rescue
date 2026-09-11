# Travel Aerial

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-travel-aerial.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "TravelAerial" template features a modern and sleek aesthetic, emphasizing a travel theme with an aerial view. The background color is solid black (#000000), overlaid with a radial gradient vignette that transitions from transparent to rgba(0,0,0,0.5). The text color is white (#FFFFFF), providing a stark contrast against the dark background. The font family used is 'Inter', sans-serif, which is applied throughout for a clean and contemporary look. Key layout elements include a full-screen background image of an ocean aerial view located at "/__mockup/images/photo-ocean-aerial.png", a central header with the word "BOUNDLESS" in large, bold text, and a footer that aligns to the bottom right. The overall aesthetic feel can be described as "elegant adventure."

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
     "description": "Travel Aerial cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #000000, #0D1117
- Type: Inter (weights 300, 400, 500, 600, 700, 800, 7.7–96pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-ocean-aerial.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
