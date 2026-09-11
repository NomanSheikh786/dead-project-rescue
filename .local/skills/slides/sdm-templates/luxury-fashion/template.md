# Luxury Fashion

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-luxury-fashion.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "LuxuryFashion" template presents a sleek, modern aesthetic characterized by a minimalist design. It features a solid background color of #111111 (dark gray) and uses white (#FFFFFF) for the primary text color, with accents in rgba(255,255,255,0.4) for muted text and rgba(255,255,255,0.5) for subtitles. The font family is primarily Georgia and 'Times New Roman' for the overall text, while 'Inter' is used for various headings and accents, emphasizing a contemporary feel. Key layout elements include a centered title with italic styling, uppercase text for branding, and a subtle border around the main content area, enhancing the luxurious vibe. The overall aesthetic feel can be described as "elegant minimalism."

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
     "description": "Luxury Fashion cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #111111
- Palette: #FFFFFF, #C9A96E, #111111, #000000
- Type: Inter (weights 300, 400, 5.8–28.8pt); Georgia (weights 400, 11.5–76.8pt); Playfair Display (weights 400, 33.6–38.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
