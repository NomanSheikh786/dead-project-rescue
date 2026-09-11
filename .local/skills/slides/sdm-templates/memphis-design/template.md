# Memphis Design

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-memphis-design.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The MemphisDesign template features a playful and vibrant aesthetic, characteristic of the Memphis design style. The background color is a soft peach (#FFE8D6), while the text color is a dark gray (#1A1A1A) and accents include a bright coral (#FF6B6B), teal (#4ECDC4), and a sunny yellow (#FFE66D). The font family used is 'DM Sans', a sans-serif typeface, applied for both headings and body text. Key layout elements include various geometric shapes such as circles and rectangles, positioned at different angles and locations to create a dynamic composition, along with a decorative SVG path in a light coral hue (#FF6B6B) that adds visual interest. Overall, the aesthetic feel can be described as vibrant, playful, and modern.

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
     "description": "Memphis Design cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFE8D6
- Palette: #000000, #1A1A1A, #FFFFFF, #FF6B6B, #666666, #4ECDC4, #999999, #FF6B9D, #FFE66D
- Type: DM Sans (weights 400, 600, 700, 800, 900, 8.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
