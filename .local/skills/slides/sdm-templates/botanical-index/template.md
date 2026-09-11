# Botanical Index

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-botanical-index.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BotanicalIndex" template presents a sophisticated and elegant aesthetic, characterized by a clean and botanical-inspired design. The background color is a soft beige (#F4F1EA), complemented by a border in a muted taupe (#D1C7B7). Text is primarily in a dark slate green (#2C3531) with accents in a muted olive green (#4A5D4E) and a warm gray (#7D7461) for secondary elements. The font families used include "Playfair Display" for the main title, conveying a classic feel, "DM Mono" for the specimen details, adding a modern touch, and "Inter" for the subtitle, ensuring readability. Key layout elements include a two-column structure with a left side for indexing information and a right side for the main title, featuring decorative corner elements and a horizontal line accent. There are no background images specified in the code. The overall aesthetic feel can be described as "elegant botanical."

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
     "description": "Botanical Index cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F4F1EA
- Palette: #D1C7B7, #7D7461, #2C3531, #5C6661, #4A5D4E, #F4F1EA
- Type: Inter (weights 300, 400, 9.6–14.4pt); DM Mono (weights 400, 7.7–9.6pt); Playfair Display (weights 400, 9.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
