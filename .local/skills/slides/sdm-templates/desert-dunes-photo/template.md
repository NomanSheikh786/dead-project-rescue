# Desert Dunes

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-desert-dunes-photo.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "DesertDunes" template features a warm, earthy aesthetic inspired by desert landscapes. The background is a full-screen image of desert dunes located at the URL "/__mockup/photos/desert-dunes.jpg", overlaid with a dark gradient that transitions from rgba(30,20,10,0.8) to rgba(30,20,10,0.2). The primary text color is #FDFBF7, with accent colors including #E2C792 for headings and decorative elements. The font family used for body text is 'DM Sans', while the main title utilizes 'Playfair Display', creating a contrast between modern and classic styles. Key layout elements include a flexible content container with a header, main title area, and footer, all positioned to enhance readability against the background. The overall aesthetic feel can be described as "earthy elegance."

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
     "description": "Desert Dunes cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: image
- Palette: #FDFBF7, #E2C792, #1E140A
- Type: DM Sans (weights 300, 400, 500, 600, 8.6–24pt); Playfair Display (weights 400, 38.4–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: desert-dunes.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
