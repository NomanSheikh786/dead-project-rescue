# Urban Golden

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-urban-golden.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "UrbanGolden" template features a modern and sleek aesthetic, characterized by a dark urban theme with golden accents. The background color is a solid #111111, while the text color is primarily #f8f9fa, with accents in #d4af37 for highlights and #a0a0a0 for secondary text. The font family used is 'Space Grotesk', sans-serif, which is applied to all text elements for a contemporary look. Key layout elements include a two-column design, with the left column containing text and decorative elements like a horizontal line in #d4af37, and the right column featuring a background image of a city during golden hour (URL: "/__mockup/photos/city-golden-hour.jpg"). The overall aesthetic feel can be described as "modern elegance."

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
     "description": "Urban Golden cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #111111
- Palette: #D4AF37, #666666, #111111, #333333, #FFFFFF, #A0A0A0, #F8F9FA, #1A1A1A
- Type: Space Grotesk (weights 300, 400, 500, 700, 9.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: city-golden-hour.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
