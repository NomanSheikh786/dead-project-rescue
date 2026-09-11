# Zen Meditation

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-zen-meditation.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ZenMeditation" template embodies a serene and minimalist aesthetic, characterized by a calming layout and soft color palette. The background color is a solid #F4F1ED, while text colors include #2C2C2A for primary text, #7A7874 for secondary text, #D1C9BE for a decorative line, #1A1A19 for the main heading, #5A5854 for the subtitle, and #A39E96 for the footer text. The font family used is 'Space Grotesk' for general text and 'DM Mono' for specific elements, providing a modern yet understated feel. Key layout elements include a flexible column structure with a decorative horizontal line, a prominent heading, and a background image of a zen garden located at "/__mockup/photos/zen-garden.jpg". The overall aesthetic feel is tranquil and modern.

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
     "description": "Zen Meditation cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F4F1ED
- Palette: #5A5854, #D1C9BE, #1A1A19, #F4F1ED, #7A7874, #A39E96, #2C2C2A, #EBE6E0
- Type: Space Grotesk (weights 300, 400, 700, 11.5–67.2pt); DM Mono (weights 400, 8.6–9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: zen-garden.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
