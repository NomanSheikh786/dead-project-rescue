# Wine & Spirits

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-wine-spirits.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "WineSpirits" template features a sophisticated and elegant aesthetic, characterized by a dark, moody style. The background color is a solid #1A1216, while the text and accent colors are primarily #F0E8DC with varying opacities (rgba(240,232,220,0.6), rgba(240,232,220,0.7), and rgba(240,232,220,0.5)). The template uses the font family 'Playfair Display' for the main text and 'Inter' for secondary text, creating a contrast between a classic and modern feel. Key layout elements include a centered title, decorative lines, and a rotated accent element, all arranged in a flexible column layout. There are no background images specified in the code. The overall aesthetic feel can be described as "elegant sophistication."

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
     "description": "Wine & Spirits cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #1A1216
- Palette: #F0E8DC, #1A1216
- Type: Inter (weights 300, 400, 7.7–11.5pt); Playfair Display (weights 400, 17.3–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
