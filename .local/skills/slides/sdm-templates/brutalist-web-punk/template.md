# Brutalist Web Punk

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-brutalist-web-punk.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BrutalistWebPunk" template embodies a brutalist aesthetic with a web punk twist, featuring a stark and utilitarian design. The background color is a solid light gray (#D9D9D9), while the main content area has a white background (#FFFFFF) with black accents (#000000) and vibrant red highlights (#FF3B00). The font families used include 'Space Grotesk' for general text and 'DM Mono' for monospace elements, emphasizing a digital and retro feel. Key layout elements include a structured grid with a left sidebar, a central title area, and decorative elements like dashed borders and a fake scrollbar. The overall aesthetic feel can be described as "raw, digital, chaotic."

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
     "description": "Brutalist Web Punk cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #D9D9D9
- Palette: #000000, #FFFFFF, #FF3B00, #D9D9D9
- Type: Space Grotesk (weights 400, 500, 900, 8–86.4pt); DM Mono (weights 400, 700, 9.6–19.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
