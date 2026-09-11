# Watercolor Illustration

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-watercolor-city.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "WatercolorCity" template features a modern and artistic aesthetic, characterized by a watercolor cityscape background. The background color is solid black (#000), with a subtle dark overlay gradient transitioning from transparent to rgba(0,0,0,0.5). The text color is a soft white (#FDFDFD), while the font families used include 'Inter' for general text and 'Playfair Display' for the main heading, creating a contrast between modern sans-serif and elegant serif styles. Key layout elements include a full-screen background image of a watercolor city, positioned absolutely, with a content container that utilizes flexbox for vertical alignment and spacing. The overall aesthetic feel can be described as "artistic elegance." The background image is sourced from "/__mockup/images/illust-watercolor-city.png".

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
     "description": "Watercolor Illustration cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FDFDFD, #2C2C2C, #FFFFFF, #000000, #E6E6FA, #1A1A1A, #FF7F50, #FFD700, #008080
- Type: Inter (weights 300, 400, 500, 600, 7.7–14.4pt); Playfair Display (weights 300, 400, 600, 9.6–115.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: illust-watercolor-city.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
