# Coral Reef

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-coral-reef.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The CoralReef template features a deep oceanic aesthetic, characterized by a linear gradient background transitioning from #0A3D5C to #051B2C. The text color is #E8E0D0, with accent colors including #C4726E and #6B9E8E used for decorative organic shapes and bubbles throughout the design. The primary font family is 'DM Sans' for general text, while 'Playfair Display' is used for the main heading, creating a contrast between modern and classic styles. Key layout elements include various blurred, rounded shapes positioned throughout the background, simulating underwater coral and seafoam, along with strategically placed bubbles. The overall aesthetic feel can be described as tranquil and immersive.

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
     "description": "Coral Reef cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #0A3D5C → #051B2C
- Palette: #FFFFFF, #E8E0D0, #6B9E8E, #C4726E, #C4B896, #0A3D5C, #051B2C
- Type: DM Sans (weights 300, 400, 500, 600, 8.6–14.4pt); Playfair Display (weights 400, 33.6–72pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
