# Vision Editorial

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-vision-editorial.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "VisionEditorial" template embodies a modern and sophisticated aesthetic, characterized by its use of a dark color palette and elegant typography. The background features a solid black color (#000) with a background image of an eye macro located at "/__mockup/photos/eye-macro.png", which is overlaid with a linear gradient transitioning from rgba(0,0,0,0.8) to rgba(0,0,0,0.3) and then to transparent. Text elements utilize a color scheme of white (#FFFFFF) and a soft pinkish hue (#C4A0A0), with the font families "Inter" for body text and "Playfair Display" for headings, creating a contrast between modern sans-serif and classic serif styles. Key layout elements include a content container positioned on the left side of the screen, a vertical accent line, and a structured arrangement of headers, titles, and footers, all contributing to a clean and organized presentation. The overall aesthetic feel can be described as elegant and contemporary.

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
     "description": "Vision Editorial cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #C4A0A0, #FFFFFF, #000000, #0A0A0A
- Type: Inter (weights 300, 400, 7.7–11.5pt); Playfair Display (weights 400, 8.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: eye-macro.png, fashion-studio.png, origami-fashion.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
