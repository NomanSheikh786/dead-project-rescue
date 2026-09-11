# Newspaper Broadsheet

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-newspaper-broadsheet.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "NewspaperBroadsheet" template embodies a classic, editorial aesthetic reminiscent of traditional newspaper layouts. It features a solid background color of #F7F4EF, with text primarily in #111111 for a stark contrast. The font family used is 'Inter' for general text, while 'Georgia, serif' is employed for headings and emphasized text, enhancing the formal newspaper feel. Key layout elements include a structured header with a border, a prominent title section, and a two-column layout for the main content, separated by a thin vertical line. There are no background images specified in the code. The overall aesthetic feel can be described as "classic editorial."

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
     "description": "Newspaper Broadsheet cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F7F4EF
- Palette: #111111, #F7F4EF, #444444, #E0DDD6, #D1CEC7, #666666, #EBE7DF, #333333
- Type: Inter (weights 400, 500, 600, 700, 7.7–11.5pt); Georgia (weights 400, 700, 7.7–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
