# Engineering Blueprint

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-engineering-blueprint.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "EngineeringBlueprint" template embodies a technical and modern aesthetic, reminiscent of engineering schematics. It features a solid background color of #0F2537, complemented by a complex layered linear gradient of white shades for a subtle grid effect. The primary text color is #E0F2FE, with accents in #7DD3FC for borders and decorative elements. The font families used include 'DM Mono' for general text, conveying a monospaced, technical feel, and 'Space Grotesk' for the main title, which is bold and modern. Key layout elements include a central content area framed by dashed borders, crosshairs for precision, and dimension markers, all contributing to a structured and organized appearance. There are no background images used in this template. The overall aesthetic feel can be described as "technical blueprint."

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
     "description": "Engineering Blueprint cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0F2537
- Palette: #7DD3FC, #E0F2FE, #FFFFFF, #0F2537
- Type: DM Mono (weights 400, 700, 6.7–11.5pt); Space Grotesk (weights 400, 700, 14.4–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
