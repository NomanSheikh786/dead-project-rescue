# Desert Modernism

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-desert-modernism.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "DesertModernism" template features a contemporary aesthetic with a warm, earthy color palette. The background color is a soft beige (#EFEBE3), complemented by accent colors including a muted teal (#638C80), a warm terracotta (#D48B6A), and a sandy orange (#E3A881). The primary font used is 'DM Sans' for general text, while 'Playfair Display' is employed for the main heading, creating a contrast between modern and classic styles. Key layout elements include abstract geometric shapes, such as circular and arched frames, positioned strategically to enhance the design. There are no background images specified in the code. The overall aesthetic feel can be described as "modern, warm, inviting."

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
     "description": "Desert Modernism cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #EFEBE3
- Palette: #2C3531, #EFEBE3, #D48B6A, #638C80, #E3A881, #5B645E, #8E9791
- Type: DM Sans (weights 400, 500, 600, 700, 8.6–17.3pt); Playfair Display (weights 400, 14.4–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
