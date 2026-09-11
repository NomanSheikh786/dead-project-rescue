# Tea Ceremony

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-tea-ceremony.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "TeaCeremony" template embodies a serene and elegant aesthetic, reflecting the tranquility associated with traditional tea ceremonies. The background color is a solid dark gray (#1A1A1A), overlaid with a soft linear gradient that transitions from a light beige (rgba(245,240,230,0.9)) to transparent. Text and accent colors include a rich brown (#3B2F20) for the main text elements. The font families used are 'Inter' for body text and 'Playfair Display' for the main heading, providing a modern yet classic feel. Key layout elements include a full-screen background image of a tea ceremony, positioned absolutely, and a structured layout with flexbox that organizes content into distinct sections, including a circular decorative element. The overall aesthetic feel is "calm elegance."

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
     "description": "Tea Ceremony cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #1A1A1A
- Palette: #3B2F20, #F5F0E6, #FFFFFF, #1A1A1A, #000000
- Type: Inter (weights 100, 200, 8.6–14.4pt); Playfair Display (weights 400, 19.2–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: tea-ceremony.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
