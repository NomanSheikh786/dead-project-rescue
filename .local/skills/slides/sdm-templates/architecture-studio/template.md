# Architecture Studio

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-architecture-studio.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ArchitectureStudio" template embodies a modern and minimalist aesthetic, primarily featuring a clean and structured layout. The background color is solid white (#FFFFFF), while the text colors include a deep black (#000000) for the main heading, a medium gray (#666666) for the subheading, and a lighter gray (#999999) for the footer text. The font families used are 'Inter' for the heading and body text, providing a contemporary sans-serif feel, and 'Playfair Display' for the italicized subheading, adding a touch of elegance. Key layout elements include a large top section that occupies 60% of the height with a full-width image of a brutalist concrete building, and a bottom section that is centered and padded, featuring a prominent heading and a footer with company details. The background image is sourced from "/__mockup/images/photo-architecture.png". The overall aesthetic feel can be described as sleek and sophisticated.

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
     "description": "Architecture Studio cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #000000, #999999, #666666, #FFFFFF
- Type: Inter (weights 400, 600, 700, 900, 6.7–57.6pt); Playfair Display (weights 400, 11.5–17.3pt); DM Sans (weights 400, 9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-architecture.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
