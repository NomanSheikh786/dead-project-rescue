# Brutalist Studio

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-brutalist-studio.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BrutalistStudio" template embodies a modern brutalist aesthetic, characterized by its stark and bold design elements. The background color is a solid #121212, with a full-bleed architecture photo sourced from "/__mockup/photos/brutalist-golden.png" that covers the entire viewport. A dark overlay band at the bottom, with a background color of rgba(18, 18, 18, 0.92), features text in accent colors: #C4A060 for headers and #888888 for project details, alongside #FFFFFF for the main title and #AAAAAA for the subtitle. The font families used include 'Space Grotesk' for headers and titles, and 'DM Mono' for body text, creating a contrast between modern sans-serif and classic monospace styles. Key layout elements include a structured band at the bottom with a border-top of #C4A060, and a clean, organized arrangement of text that emphasizes hierarchy and readability. The overall aesthetic feel is "bold, modern, stark."

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
     "description": "Brutalist Studio cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #121212
- Palette: #FFFFFF, #C4A060, #888888, #121212, #AAAAAA
- Type: Space Grotesk (weights 400, 500, 700, 8.6–76.8pt); DM Mono (weights 400, 8.6–14.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: brutalist-golden.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
