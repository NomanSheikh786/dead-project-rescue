# Neobrutalism

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-neobrutalism.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The Neobrutalism template features a bold and playful aesthetic characterized by vibrant colors and geometric shapes. The background color is a solid light green (#E8FF8B), while accent colors include a bright pink (#FF90E8) and a soft blue (#90C8FF). The text color is black (#000) with highlights in light green (#E8FF8B) and white (#fff) for contrast. The font family used is 'DM Sans', sans-serif, primarily for body text and headings, emphasizing a modern and clean look. Key layout elements include a large rectangular pink shape with rounded corners and a circular blue shape, both positioned absolutely within the viewport, along with a structured layout of text elements that utilize flexbox for alignment. There are no background images specified in the code. The overall aesthetic feel can be described as vibrant and geometric.

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
     "description": "Neobrutalism cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #E8FF8B
- Palette: #000000, #FFFFFF, #00A86B, #E8FF8B, #FF6B9D, #FF3B30, #FF90E8, #90C8FF, #C6F135
- Type: DM Sans (weights 500, 600, 700, 800, 900, 8.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
