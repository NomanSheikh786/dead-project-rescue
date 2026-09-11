# Arctic Expedition

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-arctic-expedition.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ArcticExpedition" template features a cold, minimalist aesthetic that evokes the serene and stark beauty of the Arctic. The background color is a deep navy blue, specifically #081423, complemented by a linear gradient overlay transitioning from rgba(8,20,35,0.92) to transparent. Text and accent colors include a soft light blue #C8DDE8, which is used for various text elements and a decorative line. The template employs three font families: 'DM Mono' for the uppercase labels, 'Playfair Display' for the main title, and 'Inter' for the subtitle, creating a contrast between modern and classic styles. Key layout elements include a full-screen background image of Arctic icebergs, positioned absolutely, and a structured layout with flexbox for content alignment, featuring decorative lines and ample padding. The overall aesthetic feel can be described as "cold elegance."

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
     "description": "Arctic Expedition cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #081423
- Palette: #C8DDE8, #081423, #000000
- Type: DM Mono (weights 400, 8.6–11.5pt); Playfair Display (weights 400, 33.6–62.4pt); Inter (weights 300, 11.5–17.3pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: arctic-icebergs.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
