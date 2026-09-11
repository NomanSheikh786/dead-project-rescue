# Culinary Brand

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-culinary-brand.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CulinaryBrand" template features a sophisticated and elegant aesthetic, suitable for fine dining or culinary presentations. The background color is a solid #0F0C0A, complemented by a background image sourced from "/__mockup/photos/fine-dining.png" that covers the entire viewport. A linear gradient overlay transitions from transparent to rgba(15,12,10,0.9) and finally to rgba(15,12,10,1), adding depth to the design. Text elements utilize the 'DM Mono' monospace font for headings and body text, while 'Playfair Display' serif font is used for the main title, with colors including #B8A07A for accents and #F0E8DA for the title. Key layout elements include a structured flexbox arrangement with decorative horizontal lines in #B87333 and rgba(184, 160, 122, 0.3), creating a refined and upscale feel. Overall, the aesthetic can be described as "elegant sophistication."

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
     "description": "Culinary Brand cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0F0C0A
- Palette: #B8A07A, #0F0C0A, #B87333, #F0E8DA, #000000
- Type: DM Mono (weights 300, 400, 8.2–11.5pt); Playfair Display (weights 400, 28.8–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: fine-dining.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
