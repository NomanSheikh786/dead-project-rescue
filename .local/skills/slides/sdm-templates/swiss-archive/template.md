# Swiss Archive

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-swiss-archive.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SwissArchive" template embodies a modern, minimalist aesthetic with a structured layout. It features a solid background color of #F4F4F0, complemented by text and accent colors of #111111 for primary text, #E32929 for a decorative element, and #666666 and #333333 for secondary text. The font families used include 'Space Grotesk' for general text, 'DM Mono' for specific sections like reference numbers and footer details, and 'Inter' for the subtitle, creating a clean and contemporary feel. Key layout elements include a grid structure with two main columns, a circular accent, and a horizontal line for separation, all contributing to a balanced and organized presentation. The overall aesthetic feel can be described as "modern minimalist."

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
     "description": "Swiss Archive cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F4F4F0
- Palette: #111111, #F4F4F0, #666666, #E32929, #333333, #999999
- Type: Space Grotesk (weights 600, 700, 8.6–86.4pt); DM Mono (weights 400, 700, 7.7–14.4pt); Inter (weights 400, 11.5–17.3pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
