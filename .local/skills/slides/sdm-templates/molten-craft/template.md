# Molten Craft

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-molten-craft.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "MoltenCraft" template features a modern and artistic aesthetic, characterized by a striking visual of molten glass. The background consists of a radial gradient transitioning from transparent to rgba(0,0,0,0.7), layered over a full-screen image sourced from "/__mockup/photos/molten-glass.png". The primary text color is #E8A84C, with accents in #C4652A and #FFFFFF for contrast. The font families used include 'DM Sans' for body text and 'DM Mono' for secondary elements, while 'Playfair Display' is employed for headings, creating a sophisticated yet approachable feel. Key layout elements include a large, semi-transparent text overlay reading "STUDIO" and a structured footer with additional text elements, all positioned to enhance readability against the dynamic background. The overall aesthetic feel is "artistic, modern, molten."

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
     "description": "Molten Craft cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #000000 → #000000
- Palette: #E8A84C, #FFFFFF, #C4652A, #0A0805, #000000, #0D0A08
- Type: DM Sans (weights 300, 800, 11.5–240pt); DM Mono (weights 400, 500, 9.6–11.5pt); Playfair Display (weights 400, 500, 14.4–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: molten-glass.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
