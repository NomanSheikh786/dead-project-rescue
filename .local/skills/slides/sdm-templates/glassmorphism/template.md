# Glassmorphism

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-glassmorphism.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "Glassmorphism" template features a modern, translucent aesthetic characterized by a vibrant linear gradient background transitioning from #667eea to #764ba2 and finally to #f093fb. The text color is set to white (#fff), while various accent elements utilize shades of white with varying opacities, such as rgba(255,255,255,0.15) and rgba(255,255,255,0.12). The primary font family used is 'Inter', which is applied throughout the component for a clean and contemporary look. Key layout elements include several circular, blurred decorative shapes positioned at various corners of the viewport, enhancing the glass-like effect. There are no background images specified in the code. The overall aesthetic feel can be described as "modern, sleek, vibrant."

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
     "description": "Glassmorphism cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #667EEA → #764BA2 → #F093FB
- Palette: #FFFFFF, #667EEA, #F093FB, #764BA2, #1E0B3D, #3A1C71, #4A54C4
- Type: Inter (weights 400, 500, 600, 700, 800, 7.7–52.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
