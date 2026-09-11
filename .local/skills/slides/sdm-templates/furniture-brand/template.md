# Furniture Brand

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-furniture-brand.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "FurnitureBrand" template represents a modern and elegant aesthetic, suitable for showcasing high-end furniture. The background color is a soft beige, specifically #F5F0E8, while the text color is a deep charcoal, #2C2520. The component utilizes the 'Inter' font for general text and 'Playfair Display' for the main title, creating a contrast between a clean sans-serif and a sophisticated serif style. Key layout elements include a left text panel that occupies 35% of the width, featuring a company name, title, subtitle, and footer, alongside a right photo panel that displays an image of furniture, sourced from "/__mockup/images/photo-furniture.png". The overall aesthetic feel can be described as "modern elegance."

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
     "description": "Furniture Brand cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F0E8
- Palette: #2C2520, #F5F0E8, #C47D5A, #FFFFFF
- Type: Inter (weights 300, 400, 500, 6.7–11.5pt); Playfair Display (weights 400, 600, 19.2–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-furniture.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
