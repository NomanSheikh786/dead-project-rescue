# Neo Tokyo

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-neo-tokyo.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "NeoTokyo" template embodies a futuristic, cyberpunk aesthetic, characterized by its dark color palette and neon accents. The background color is a solid #0A0A0F, with a background image sourced from "/__mockup/photos/tokyo-neon.png" that covers the entire viewport. Text colors include #7B9CC4 for accents and #FFFFFF for primary text, with additional use of rgba(255,255,255,0.6) for a subtitle. The font families used are 'DM Mono', a monospace font for various text elements, and 'Space Grotesk', a sans-serif font for the main heading, emphasizing a modern look. Key layout elements include a semi-transparent sidebar with a backdrop blur effect, decorative borders, and a structured arrangement of text elements that create a clean, organized presentation. The overall aesthetic feel is "futuristic neon."

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
     "description": "Neo Tokyo cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0A0A0F
- Palette: #FFFFFF, #7B9CC4, #0A0A0F, #0A0A14
- Type: Space Grotesk (weights 400, 600, 700, 17.3–67.2pt); DM Mono (weights 400, 600, 7.7–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: tokyo-neon.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
