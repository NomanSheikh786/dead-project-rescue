# Apple Minimal

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-apple-minimal.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AppleMinimal" template embodies a clean and modern aesthetic, characterized by its simplicity and elegance. It features a solid white background color (#FFFFFF) and utilizes a monochromatic color scheme with text colors including dark gray (#000000) and lighter shades of gray (#666666, #999999), alongside a vibrant blue accent (#007AFF) for emphasis. The font family used is 'Inter', a sans-serif typeface, which is applied for both body text and headings, enhancing readability and a contemporary feel. Key layout elements include a flexible, columnar arrangement with centered text, and the overall design is structured with ample padding and negative margins to create a spacious and uncluttered look. There are no background images used in this template. The overall aesthetic feel can be described as "clean, modern, minimal."

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
     "description": "Apple Minimal cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #FFFFFF, #666666, #999999, #000000, #007AFF, #0071E3, #1D1D1F, #86868B, #F5F5F7
- Type: Inter (weights 200, 300, 400, 500, 600, 8.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
