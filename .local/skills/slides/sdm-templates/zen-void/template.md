# Zen Void

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-zen-void.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The ZenVoid template features a serene and minimalist aesthetic, characterized by a soft, neutral background color of #FAF8F5. It incorporates a background image of a zen garden located at "/__mockup/photos/zen-garden.png," which is displayed in full cover. The text elements utilize the font family 'DM Sans' for the main title, styled in #1A1A1A, and 'Inter' for the subtitle and footer text, with colors #8A8578 and #1A1A1A respectively. Key layout elements include a rotated title positioned at the bottom right, a decorative horizontal line in #8A8578, and a circular accent in #1A1A1A at the bottom left. The overall aesthetic feel can be described as tranquil and modern.

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
     "description": "Zen Void cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FAF8F5
- Palette: #1A1A1A, #8A8578, #FAF8F5, #EAE6DF, #000000
- Type: Inter (weights 300, 400, 7.7–14.4pt); DM Sans (weights 400, 14.4–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: zen-garden.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
