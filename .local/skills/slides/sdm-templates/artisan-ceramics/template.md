# Artisan Ceramics

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-artisan-ceramics.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The ArtisanCeramics template features a warm, earthy aesthetic that reflects a handmade pottery style. The background consists of a full-screen image of a pottery studio located at the URL "/__mockup/photos/pottery-studio.png". The overlay has a semi-transparent background color of rgba(245, 240, 232, 0.92). Text colors include a deep brown (#2A2520) for primary text and a muted clay color (#B87A5E) for accents, with the latter also used for decorative elements like a circular border and a horizontal line. The font families used are 'DM Sans' for general text and 'DM Mono' for accentuated phrases, emphasizing a modern yet artisanal feel. Key layout elements include a right-aligned sidebar that contains the title, subtitle, and additional information, creating a structured yet inviting composition. The overall aesthetic feel can be described as "earthy, artisanal, inviting."

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
     "description": "Artisan Ceramics cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #B87A5E, #2A2520, #FFFFFF, #F5F0E8
- Type: DM Mono (weights 400, 500, 7.7–11.5pt); DM Sans (weights 400, 500, 9.6–43.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: pottery-studio.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
