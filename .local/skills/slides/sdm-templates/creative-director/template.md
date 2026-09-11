# Creative Director

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-creative-director.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CreativeDirector" template features a modern and professional aesthetic, characterized by a clean layout and a creative workspace theme. The background is a full-screen image sourced from "/__mockup/photos/creative-flatlay.png," which visually enhances the design. The floating card has a solid white background color (#ffffff) and is positioned at the top right, slightly rotated for a dynamic effect. Text colors include a dark gray (#1A1A1A) for primary text, a lighter gray (#4A4A4A) for subtitles, and a soft gray (#F0F0F0) for the large "01" detail. The font families used are 'Inter' for body text and 'Space Grotesk' for headings, creating a contemporary feel. Key layout elements include a circular accent in a warm tone (#C4786E) and a subtle shadow effect on the card, contributing to a layered appearance. The overall aesthetic feel can be described as "modern elegance."

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
     "description": "Creative Director cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #1A1A1A, #FFFFFF, #4A4A4A, #C4786E, #F0F0F0, #E5E5E5, #888888
- Type: Space Grotesk (weights 600, 700, 800, 11.5–172.8pt); Inter (weights 400, 500, 600, 8.6–13.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: creative-flatlay.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
