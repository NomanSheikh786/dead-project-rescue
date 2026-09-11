# Aurora Expedition

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-aurora-expedition.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AuroraExpedition" template embodies a modern and ethereal aesthetic, reminiscent of the northern lights. It features a solid black background color (#000000) with a background image of northern lights over snowy mountains located at "/__mockup/images/photo-aurora.png". The text color is pure white (#FFFFFF), and a bottom gradient overlay uses a linear gradient from rgba(0,0,20,0.5) to transparent for enhanced readability. The font family used is 'Inter', sans-serif, with varying weights for different text elements, including a bold 8vw for the main title "POLARIS". Key layout elements include a centered title, a decorative horizontal line in white (#FFFFFF), and a footer with a lower opacity for subtlety. The overall aesthetic feel can be described as "mystical and modern."

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
     "description": "Aurora Expedition cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #000000, #0A0A14, #000014
- Type: Inter (weights 200, 300, 400, 600, 7.7–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-aurora.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
