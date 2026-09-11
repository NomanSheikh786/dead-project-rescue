# Brutalist Concrete

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-brutalist-concrete.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BrutalistConcrete" template embodies a modern, minimalist aesthetic with a focus on stark contrasts and functional design. The background color is a solid light gray (#E5E5E5) for the main container, while the right section features a slightly darker gray (#F2F2F2). Text is primarily in a dark gray (#1A1A1A) for headings and a medium gray (#4A4A4A) for body text, with the font family set to 'Space Grotesk' for general text and 'DM Mono' for monospace elements. Key layout elements include a left column with a solid border on the right side and a full-height background image of concrete architecture, which is displayed with a grayscale filter. The overall aesthetic feel can be described as "modern minimalist."

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
     "description": "Brutalist Concrete cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #E5E5E5
- Palette: #1A1A1A, #4A4A4A, #E5E5E5, #888888, #F2F2F2, #333333
- Type: DM Mono (weights 400, 700, 8.2–14.4pt); Space Grotesk (weights 700, 11.5–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: concrete-architecture.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
