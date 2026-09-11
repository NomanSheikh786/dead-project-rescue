# SaaS Product Launch

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-saas-product-launch.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SaasProductLaunch" template features a modern, tech-oriented aesthetic with a dark theme. The background color is a solid #0C0F1A, complemented by accent shapes in light blue (#4F7FFF) and purple (#7C6BF0) with low opacity and blur effects. Text is primarily in white (#FFFFFF) and light gray (#rgba(255, 255, 255, 0.7)), with accents in a lighter purple (#7C6BF0) for the version badge. The font family used is 'Inter', sans-serif, which is applied throughout for a clean and contemporary look. Key layout elements include large circular accent shapes, a grid overlay for texture, and a structured arrangement of content with a central focus on the title and action buttons. There are no background images used, and the overall aesthetic feel can be described as sleek, modern, and professional.

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
     "description": "SaaS Product Launch cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0C0F1A
- Palette: #FFFFFF, #4F7FFF, #000000, #7C6BF0, #131726, #0C0F1A, #27C93F, #FF5F56, #FFBD2E
- Type: Inter (weights 300, 400, 500, 600, 700, 800, 7.7–62.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
