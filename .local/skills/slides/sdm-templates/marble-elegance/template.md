# Marble Elegance

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-marble-elegance.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "MarbleElegance" template features a sophisticated and refined aesthetic, characterized by its use of a light marble texture. The background color is a soft off-white, specifically #F9F8F6, complemented by a marble texture image located at "/__mockup/photos/marble-texture.jpg". Text is rendered in a dark gray color (#2C2A29) for the main content, with lighter gray accents (#666 for secondary text and #555 for paragraph text) and a very light gray (#999) for footer text. The primary font used is 'Playfair Display', a serif font for the main title, while 'Inter', a sans-serif font, is used for the subtitle and other text elements, providing a modern contrast. The layout includes a split design with a left section for the marble background and a right section for text, featuring absolute positioning for branding elements and a clean, structured arrangement that enhances readability. The overall aesthetic feel can be described as elegant and modern.

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
     "description": "Marble Elegance cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F9F8F6
- Palette: #2C2A29, #666666, #999999, #F9F8F6, #555555, #EAE7E1, #000000, #DCD8CF
- Type: Inter (weights 300, 400, 8.6–14.4pt); Playfair Display (weights 400, 14.4–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: marble-texture.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
