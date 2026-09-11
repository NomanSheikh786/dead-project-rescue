# Executive Mono

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-executive-mono.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "ExecutiveMono" template presents a clean, modern aesthetic with a focus on minimalism and clarity. It features a solid white background color (#FFFFFF) and utilizes a monochrome color palette for text and accents, including light gray (#E5E5E5) for the large "01" element, black (#000000) for various text elements and lines, and a medium gray (#555555) for the subtitle. The font family used is "'DM Mono', Courier, monospace," which conveys a technical and professional feel, with varying weights for emphasis. Key layout elements include a large title area, a subtitle section, and a footer with company information, all arranged in a structured, flexible layout that emphasizes vertical space. There are no background images used in this template. The overall aesthetic feel can be described as "modern minimalism."

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
     "description": "Executive Mono cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #000000, #555555, #FFFFFF, #E5E5E5
- Type: DM Mono (weights 400, 500, 600, 8.6–115.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
