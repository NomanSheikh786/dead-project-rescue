# Studio Noir

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-studio-noir.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "StudioNoir" template embodies a modern, minimalist aesthetic with a dark theme. It features a solid background color of #0A0A0A and uses white (#FFFFFF) for primary text, with accents in a lighter gray (#888888) for subtitles and a darker gray (#666666) for footer text. The font family is set to 'Inter' for general text and 'Playfair Display' in italic for the main heading, creating a contrast between modern sans-serif and classic serif styles. Key layout elements include a flexible column structure with centered text, a decorative horizontal line in rgba(255, 255, 255, 0.2) positioned near the bottom, and overall positioning that emphasizes space and clarity. The overall aesthetic feel can be described as sleek, sophisticated, and contemporary.

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
     "description": "Studio Noir cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0A0A0A
- Palette: #FFFFFF, #666666, #888888, #0A0A0A
- Type: Inter (weights 300, 400, 8.6–19.2pt); Playfair Display (weights 400, 43.2–86.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
