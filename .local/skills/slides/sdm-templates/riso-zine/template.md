# Riso Zine

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-riso-zine.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The RisoZine template features a playful and modern aesthetic, characterized by its use of vibrant colors and organic shapes. The background color is a soft beige (#f4f0e6), complemented by a repeating radial gradient texture in black with an opacity of 0.15. Text and accent colors include a deep slate blue (#1a2a3a), teal (#008080), and coral (#ff6b5b). The font families used are 'Space Grotesk' and 'DM Sans' for body text, while 'DM Mono' is employed for headers and footers, providing a contemporary and slightly retro feel. Key layout elements include large, overlapping circular blobs and a prominent arch graphic, all positioned dynamically across the slide. The overall aesthetic feel can be described as vibrant, modern, and artistic.

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
     "description": "Riso Zine cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F4F0E6
- Palette: #1A2A3A, #F4F0E6, #FF6B5B, #008080
- Type: Space Grotesk (weights 500, 600, 900, 13.4–115.2pt); DM Mono (weights 700, 800, 11.5–17.3pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
