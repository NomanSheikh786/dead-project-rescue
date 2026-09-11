# Jazz Blue Note

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-jazz-blue-note.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "JazzBlueNote" template features a modern and sophisticated aesthetic, characterized by a clean layout and a mix of bold and subtle colors. The background color is a soft beige (#F4F0EA), complemented by a deep navy blue block (#1C2A43) on the left side. Text colors include a dark gray (#1A1A1A) for primary text, a lighter gray (#8C8C8C) for secondary text, and an accent color of warm gold (#D4A373) used for highlights. The font family used is 'Space Grotesk' for general text and 'DM Mono' for specific elements, providing a contemporary and tech-inspired feel. Key layout elements include a thick left color block, a right content area with a large header and subtitle, and a decorative overlapping circle with a gold border positioned centrally. There are no background images used in this template. The overall aesthetic feel can be described as "modern elegance."

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
     "description": "Jazz Blue Note cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F4F0EA
- Palette: #1C2A43, #D4A373, #F4F0EA, #1A1A1A, #4A4A4A, #8C8C8C, #4A5B7A
- Type: Space Grotesk (weights 400, 500, 600, 700, 9.6–115.2pt); DM Mono (weights 400, 9.6–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
