# Ocean Breeze

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-ocean-breeze.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "OceanBreeze" template features a clean and modern aesthetic, evoking a serene coastal vibe. The background is an image of an ocean aerial view located at the URL "/__mockup/photos/ocean-aerial.jpg", styled to cover the entire viewport. The overlay has a semi-transparent white background with an RGBA value of rgba(255, 255, 255, 0.85), complemented by a backdrop blur effect. Text colors include a deep blue (#1a365d) for the header, a lighter blue (#2c5282) for the main title, and a muted gray (#4a5568) for subtitles and additional text. The font families used are 'DM Sans' for general text and 'Playfair Display' for the main title, enhancing the template's elegant feel. Key layout elements include rounded corners, a shadow effect for depth, and a structured arrangement of text and decorative lines, contributing to an overall aesthetic that feels fresh and inviting.

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
     "description": "Ocean Breeze cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: image
- Palette: #2C5282, #4A5568, #3182CE, #FFFFFF, #1A365D, #718096, #2D3748, #38A169, #2B6CB0
- Type: DM Sans (weights 400, 500, 700, 9.6–17.3pt); Playfair Display (weights 400, 13.4–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: ocean-aerial.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
