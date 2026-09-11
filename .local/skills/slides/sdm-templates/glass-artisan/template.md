# Glass Artisan

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-glass-artisan.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "GlassArtisan" template features a modern, elegant aesthetic with a dark and sophisticated style. The background color is a solid #0A0A0F, complemented by a full-bleed background image located at "/__mockup/photos/glass-art.png". A dark gradient overlay is applied to the bottom 55% of the slide, transitioning from transparent to rgba(10,10,15,1). Text elements utilize the font families 'DM Mono' for labels and footers, and 'Playfair Display' for the title, creating a contrast between a modern and classic feel. Key layout elements include a thin amber line (#D4A84B) for decoration, positioned content at the bottom, and a clean, structured arrangement of text. The overall aesthetic feel can be described as "dark elegance."

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
     "description": "Glass Artisan cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0A0A0F
- Palette: #D4A84B, #F0ECE4, #0A0A0F, #FFFFFF
- Type: DM Mono (weights 300, 400, 7.7–11.5pt); Playfair Display (weights 400, 19.2–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: glass-art.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
