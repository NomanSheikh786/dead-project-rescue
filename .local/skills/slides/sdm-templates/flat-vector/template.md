# Flat Vector Illustration

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-flat-vector.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "FlatVector" template presents a modern, minimalistic aesthetic with a clean layout. The background color is a solid light gray, specifically #FAFAFA. Text and accent colors include a dark gray (#111827) for primary text, a muted gray (#4B5563) for secondary text, and a vibrant orange (#F97316) and deep blue (#4F46E5) for accents. The font family used is 'DM Sans', sans-serif, which is applied throughout for a contemporary feel. Key layout elements include circular geometric accents in the background, positioned flexibly within the viewport, and a structured left content area that features a company logo, title, description, and footer details. A background shape in a light blue tint (rgba(79, 70, 229, 0.03)) complements the right side, which showcases an illustration of team collaboration sourced from "/__mockup/images/illust-team-collab-nobg.png". The overall aesthetic feel can be described as clean, modern, and professional.

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
     "description": "Flat Vector Illustration cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FAFAFA
- Palette: #4F46E5, #FFFFFF, #111827, #9CA3AF, #6B7280, #F97316, #FAFAFA, #4B5563, #000000
- Type: DM Sans (weights 400, 500, 600, 700, 800, 8.2–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: illust-team-collab-nobg.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
