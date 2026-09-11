# Hospitality Resort

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-hospitality-resort.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "HospitalityResort" template features a luxurious and elegant aesthetic, suitable for a high-end resort presentation. The background color is a solid black (#111), overlaid with a linear gradient that transitions from a dark brown (#231912) to a semi-transparent brown (#231912) and then to transparent. Text colors include a goldish hue (#C4A265), a light beige (#E8D5B8), and a soft off-white (#F5EDE0). The font families used are "serif" for the establishment date and "Playfair Display" for the main title, conveying sophistication, while "Inter" is used for subtitles and body text for modern readability. Key layout elements include a full-screen background image of a resort pool, a structured layout with flexbox for content positioning, and decorative horizontal lines in gold. The background image is sourced from "/__mockup/photos/resort-pool.png". The overall aesthetic feel is "luxurious elegance."

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
     "description": "Hospitality Resort cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #111111
- Palette: #E8D5B8, #C4A265, #111111, #F5EDE0, #231912, #000000
- Type: Inter (weights 300, 400, 7.7–13.4pt); Georgia (weights 400, 9.6–57.6pt); Playfair Display (weights 400, 38.4–57.6pt); DM Mono (weights 400, 8.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: resort-pool.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
