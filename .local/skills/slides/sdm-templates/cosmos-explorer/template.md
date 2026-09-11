# Cosmos Explorer

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-cosmos-explorer.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CosmosExplorer" template embodies a futuristic and space-themed aesthetic. It features a solid background color of #05050F, complemented by a gradient overlay transitioning from transparent to rgba(5,5,15,0.85). The text and accent colors include #E0E8F0 for primary text, #6A8AAA for secondary text, and rgba(224, 232, 240, 0.7) for subtle text elements. The font families used are 'Space Grotesk' for headings and key text, 'DM Mono' for monospace elements, and Georgia in italic for a stylistic touch, enhancing the overall theme. Key layout elements include a full-screen astronaut image positioned absolutely, a gradient overlay for depth, and a structured layout with flexbox for content alignment. The background image is sourced from "/__mockup/photos/astronaut-space.png". The overall aesthetic feel is "futuristic space."

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
     "description": "Cosmos Explorer cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #05050F
- Palette: #6A8AAA, #E0E8F0, #05050F, #000000
- Type: Space Grotesk (weights 500, 600, 8.6–67.2pt); DM Mono (weights 400, 600, 7.7–28.8pt); Georgia (weights 400, 9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: astronaut-space.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
