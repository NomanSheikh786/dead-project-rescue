# Hypercar Launch

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-hypercar-launch.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "HypercarLaunch" template embodies a sleek, modern aesthetic suitable for high-tech presentations. It features a solid black background color (#030303) with white text (#ffffff) and accents in shades of gray (#8c8c8c, #a3a3a3, #b3b3b3, #595959). The primary font used is 'Space Grotesk' for general text, while 'Inter' is employed for the main heading, which is styled with a gradient from white to gray (#ffffff to #8c8c8c) and has a transparent text fill effect. Key layout elements include a flexible column layout, decorative speed lines created with linear gradients, and a radial gradient overlay that adds depth. There are no background images specified. The overall aesthetic feel can be described as "futuristic, sleek, minimal."

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
     "description": "Hypercar Launch cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #030303
- Palette: #FFFFFF, #595959, #000000, #8C8C8C, #030303, #A3A3A3, #B3B3B3
- Type: Space Grotesk (weights 300, 400, 500, 8.6–15.4pt); Inter (weights 200, 300, 38.4–76.8pt); DM Mono (weights 400, 8.6–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
