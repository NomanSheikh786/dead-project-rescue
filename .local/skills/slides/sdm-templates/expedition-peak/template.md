# Expedition Peak

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-expedition-peak.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ExpeditionPeak" template embodies a modern, adventurous aesthetic, suitable for presentations related to exploration or innovation. The background features a solid color of #111 (dark gray) combined with a gradient that transitions from rgba(0,0,0,0.9) to rgba(0,0,0,0.1), overlaid with a background image of a dramatic mountain scene located at "/__mockup/photos/mountain-dramatic.jpg". Text elements are rendered in white (#fff), with the font family set to 'Space Grotesk', sans-serif for a contemporary feel. Key layout elements include a flexible column structure with a prominent title ("Example Deck") in a large font size of 8vw, a decorative white line, and a footer with a subtle border, creating a clean and organized presentation. The overall aesthetic feel can be described as "modern adventure."

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
     "description": "Expedition Peak cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: image
- Palette: #FFFFFF, #000000
- Type: Space Grotesk (weights 300, 400, 500, 600, 700, 8.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: mountain-dramatic.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
