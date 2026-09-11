# Risograph

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-risograph.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "Risograph" template features a playful and artistic aesthetic, reminiscent of traditional printmaking techniques. The background color is a soft beige (#f5f0e6), complemented by various shapes in muted tones, including a large yellow shape (#DAC070) and a dusty pink shape (#E8A0BF), both with 85% opacity. The text color is a deep teal (#1a3636), while accent colors include a cyan blue (#5B8FB9) and pink (#E8A0BF) for the main title, which is rendered in a bold, sans-serif font ('DM Sans') for a modern look. Key layout elements include overlapping circular and rounded shapes, a paper texture overlay, and a halftone dot pattern, creating a layered visual effect. The overall aesthetic feel is vibrant and eclectic.

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
     "description": "Risograph cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F0E6
- Palette: #1A3636, #F5F0E6, #E8573A, #1B2A4A, #2D8A8E, #E8A0BF, #5B8FB9, #DAC070, #F5F0E8
- Type: DM Sans (weights 500, 600, 700, 800, 900, 9.6–105.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
