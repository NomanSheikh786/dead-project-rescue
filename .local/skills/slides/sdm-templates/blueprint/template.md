# Blueprint

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-blueprint.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "Blueprint" template presents a modern, technical aesthetic reminiscent of architectural designs. It features a solid background color of #1B3A5C, complemented by a subtle linear gradient overlay with two layers of white lines at varying opacities (rgba(255,255,255,0.05) and rgba(255,255,255,0.1)). The text color is #FFFFFF, while the font family used throughout is 'Inter' for body text and 'monospace' for specific labels and values, emphasizing a clean and structured look. Key layout elements include multiple bordered sections with varying opacities, a prominent title area with large text (6vw) for "EXAMPLE DECK," and a decorative line in rgba(255,255,255,0.4) to separate content. The overall aesthetic feel can be described as "sleek, professional, technical."

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
     "description": "Blueprint cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #1B3A5C
- Palette: #FFFFFF, #BAE6FD, #000000, #1B3A5C, #EF4444, #E0F2FE
- Type: Courier New (weights 300, 400, 600, 700, 6.7–38.4pt); Inter (weights 300, 400, 5.8–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
