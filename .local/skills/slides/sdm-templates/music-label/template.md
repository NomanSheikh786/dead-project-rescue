# Music Label

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-music-label.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "MusicLabel" template embodies a modern and sophisticated aesthetic, suitable for a music studio presentation. The background color is a solid #0C080F, complemented by a full-bleed background image of a recording studio located at "/__mockup/photos/recording-studio.png". A gradient overlay transitions from transparent to rgba(12,8,15,0.88) on the right half of the slide. Text colors include #9B8BB4 for general text, #C4A060 for accents, and #F0ECE4 for the main title. The font families used are 'DM Mono', a monospace font for captions and details, and 'Playfair Display', a serif font for the main title and subtitle, enhancing the elegant feel. Key layout elements include right-aligned text, decorative horizontal lines, and a structured arrangement of content that creates a clean and organized look. The overall aesthetic feel is modern elegance.

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
     "description": "Music Label cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0C080F
- Palette: #9B8BB4, #C4A060, #F0ECE4, #0C080F, #000000
- Type: Playfair Display (weights 400, 600, 14.4–57.6pt); DM Mono (weights 400, 8.6–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: recording-studio.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
