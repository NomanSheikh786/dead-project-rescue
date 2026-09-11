# Renaissance Florals

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-renaissance-florals.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "RenaissanceFlorals" template embodies a sophisticated and elegant aesthetic, characterized by its dark floral theme. The background features a solid color of #050505 combined with a linear gradient from rgba(0,0,0,0.9) to rgba(0,0,0,0.4), overlaid with a background image sourced from "/__mockup/photos/dark-florals.jpg". Text elements are rendered in #FDFBF7 for primary text, with accents in #D4C5B9 for secondary text and #A89F96 for subtitles, while additional text appears in #8A8179. The primary font used is 'Playfair Display' for headings, conveying a classic feel, while 'DM Sans' is employed for body text, providing a modern contrast. The layout includes a flexible structure with decorative elements positioned to create a balanced composition, featuring ample padding and spacing to enhance readability. The overall aesthetic feel can be described as "elegant, dark, floral."

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
     "description": "Renaissance Florals cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: image
- Palette: #D4C5B9, #FDFBF7, #000000, #A89F96, #8A8179
- Type: DM Sans (weights 300, 400, 9.6–17.3pt); Playfair Display (weights 400, 19.2–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: dark-florals.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
