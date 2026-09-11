# Prairie Storm

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-prairie-storm.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "PrairieStorm" template features a rustic and atmospheric aesthetic, evoking the feeling of a stormy wheat field. The background consists of a full-screen image of a stormy wheat field located at "/__mockup/photos/stormy-wheat-field.png," overlaid with a linear gradient that transitions from transparent to rgba(25,20,15,0.85) at 70% and rgba(25,20,15,0.95) at 100%. Text elements utilize the 'Inter' sans-serif font for body and subtitle text, while the title is rendered in Georgia serif, creating a contrast between modern and classic styles. Key colors include a soft beige (#E8DFD0) for the title, a muted gold (#B5A07A) for accents, and a dark brown gradient for the overlay. The layout features a right-aligned content area with a chapter label, title, separator line, and subtitle, all positioned to create a balanced and visually appealing composition. The overall aesthetic feel is "rustic elegance."

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
     "description": "Prairie Storm cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #000000 → #000000 → #19140F → #19140F
- Palette: #B5A07A, #E8DFD0, #19140F, #000000
- Type: Inter (weights 300, 400, 500, 7.7–17.3pt); Georgia (weights 400, 17.3–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: stormy-wheat-field.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
