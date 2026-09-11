# Gaming Esports

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-gaming-esports.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "GamingEsports" template embodies a modern, tech-inspired aesthetic suitable for gaming presentations. It features a solid background color of #0D0D12, complemented by angular elements in #15151C and decorative accents in #8B1A2B and #3D5AF1. The text is primarily rendered in white (#FFFFFF) and shades of gray (#8A8A9E, #A0A0B5), using the 'DM Mono' font for body text and 'Space Grotesk' for headers, emphasizing a sleek, contemporary look. Key layout elements include angular shapes, a hexagon placeholder, and a structured header and footer, creating a dynamic and engaging composition. The overall feel is futuristic and bold.

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
     "description": "Gaming Esports cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0D0D12
- Palette: #3D5AF1, #FFFFFF, #8B1A2B, #8A8A9E, #4A4A5A, #15151C, #0D0D12, #A0A0B5, #2A2A3A
- Type: Space Grotesk (weights 400, 600, 700, 11.5–72pt); DM Mono (weights 400, 700, 7.7–13.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
