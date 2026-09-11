# Swiss Typographic

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-swiss-typographic.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SwissTypographic" template embodies a clean, minimalist aesthetic typical of Swiss design. It features a solid white background (#FFFFFF) with light gray vertical lines (#E0E0E0 and #F0F0F0) creating a structured grid layout. The text colors include dark gray (#999) for secondary text, black (#000) for primary headings, and a lighter gray (#666) for the subtitle, while the accent color is a bold red (#FF0000) used for a decorative square. The font family is 'Inter', with Helvetica and Arial as fallbacks, used throughout for a modern, sans-serif look. Key layout elements include a centered vertical line and a horizontal line at the midpoint, along with a prominent title area featuring large headings and a subtitle. There are no background images used in this template. The overall aesthetic feel can be described as "clean, structured, modern."

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
     "description": "Swiss Typographic cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #F0F0F0, #000000, #FF0000, #999999, #666666, #FFFFFF, #E0E0E0, #888888
- Type: Inter (weights 100, 300, 400, 500, 600, 700, 800, 7.7–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
