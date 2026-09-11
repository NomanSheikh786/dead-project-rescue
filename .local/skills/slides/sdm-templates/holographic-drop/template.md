# Holographic Drop

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-holographic-drop.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "HolographicDrop" template features a modern, futuristic aesthetic with a dark, immersive background. The primary background color is #05050A, complemented by a linear gradient that transitions from transparent to rgba(5,5,10,0.92) at the bottom. Text colors include #B8A9D4 for the main title, rgba(184, 169, 212, 0.6) for the subtitle, and #FFFFFF for the "COMING SOON" label, with additional text in rgba(255,255,255,0.7). The template utilizes the 'Inter' font for most text elements, providing a clean and contemporary look, while 'Space Grotesk' is used for the main heading to add a distinctive flair. Key layout elements include a full-screen background image of iridescent bubbles located at "/__mockup/photos/iridescent-bubbles.png," and various flexbox arrangements for positioning text and decorative elements. The overall aesthetic feel can be described as "futuristic elegance."

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
     "description": "Holographic Drop cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #05050A
- Palette: #B8A9D4, #FFFFFF, #05050A, #000000
- Type: Inter (weights 400, 500, 600, 6.7–13.4pt); Space Grotesk (weights 700, 38.4–86.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: iridescent-bubbles.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
