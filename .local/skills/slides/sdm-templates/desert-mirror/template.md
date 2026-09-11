# Desert Mirror

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-desert-mirror.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "DesertMirror" template features a serene and modern aesthetic, characterized by a soft desert-inspired color palette. The background color is a solid #D4C4A8, complemented by a background image located at "/__mockup/photos/desert-mirror.png" that covers the entire viewport. Text elements utilize a combination of colors: the main title is in #FFFFFF, while accents and labels are in #D4C4A8. The font families used include 'Inter' for general text and 'Space Grotesk' for the main title and footer, creating a clean and contemporary look. Key layout elements include a frosted horizontal band with a slight blur effect positioned at 36vh, containing centered text elements and a footer that aligns at the bottom of the slide. The overall aesthetic feel is tranquil and modern.

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
     "description": "Desert Mirror cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #D4C4A8
- Palette: #FFFFFF, #D4C4A8, #000000
- Type: Space Grotesk (weights 300, 400, 500, 7.7–48pt); Inter (weights 300, 400, 7.7–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: desert-mirror.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
