# Skater Culture

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-skater-culture.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SkaterCulture" template features a gritty, urban aesthetic that resonates with skateboarding culture. The background color is a solid #0A0805, complemented by a linear gradient that transitions from transparent to rgba(10,8,5,0.85). Text and accent colors include #C4865A for highlights and #F5EDE0 for primary text, with the latter appearing in a 'Space Grotesk' font for headings and a 'DM Mono' font for supporting text. Key layout elements include a full-screen background image of a skater at sunset (URL: /__mockup/photos/skater-sunset.png), layered with a gradient overlay, and a structured bottom section that organizes text and interactive elements in a flexible column layout. The overall aesthetic feel can be described as "urban, edgy, dynamic."

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
     "description": "Skater Culture cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0A0805
- Palette: #F5EDE0, #C4865A, #0A0805, #1A1510, #000000
- Type: Space Grotesk (weights 400, 700, 8.6–76.8pt); DM Mono (weights 400, 7.7–13.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: skater-sunset.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
