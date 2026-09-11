# Adventure Outdoor

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-adventure-outdoor.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AdventureOutdoor" template embodies an adventurous and rustic aesthetic, featuring a dark background that enhances the outdoor theme. The background color is a solid #0F0C08, complemented by a linear gradient overlay from transparent to rgba(15,12,8,0.85). Text and accent colors include #C4A060 for decorative elements and headings, and #F0E8DA for primary text, creating a warm contrast against the dark background. The font families used are 'Inter' for body text and 'Space Grotesk' for headings, with 'DM Mono' used for decorative compass elements, contributing to a modern yet rugged feel. Key layout elements include a full-screen background image of an autumn road (URL: /__mockup/photos/autumn-road.png), a circular compass in the top right corner, and a structured layout that positions text at the bottom with ample padding. The overall aesthetic feel is "adventurous, rustic."

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
     "description": "Adventure Outdoor cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0F0C08
- Palette: #C4A060, #F0E8DA, #0F0C08, #000000
- Type: Space Grotesk (weights 600, 700, 9.6–67.2pt); DM Mono (weights 400, 5.8–11.5pt); Inter (weights 400, 9.6–15.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: autumn-road.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
