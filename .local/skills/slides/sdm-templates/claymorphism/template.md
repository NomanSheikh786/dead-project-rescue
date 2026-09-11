# Claymorphism

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-claymorphism.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "Claymorphism" template embodies a soft, rounded aesthetic characterized by a clay-like appearance with depth and shadow effects. It features a background color of #E8E2D9 and utilizes a base color of #F4F0EA for its main elements. The text color is #5C544D, with accents in #8E867E and #3D3833 for headings. The font family used is 'DM Sans', applied throughout the component for a modern, clean look. Key layout elements include rounded shapes with varying border radii and soft drop shadows, creating a three-dimensional effect, along with decorative blobs in gradients such as #FFDAB9 to #FFCBA4, #E6E6FA to #D8BFD8, and #CFFFE5 to #98FF98. The overall aesthetic feel is "soft, modern, organic."

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
     "description": "Claymorphism cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #E8E2D9
- Palette: #F4F0EA, #8E867E, #E8E2D9, #5C544D, #FFDAB9, #FFCBA4, #736A61, #3D3833, #F0EBE3
- Type: DM Sans (weights 400, 500, 600, 700, 800, 8.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
