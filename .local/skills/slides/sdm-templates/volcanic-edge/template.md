# Volcanic Edge

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-volcanic-edge.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "VolcanicEdge" template embodies a dark, dramatic aesthetic, featuring a background color of #080505. It includes a background image of a volcanic coast located at the URL path "/__mockup/photos/volcanic-coast.png". The design utilizes a diagonal overlay with a semi-transparent black color (rgba(8,5,5,0.9)) to enhance depth. Text elements are styled with the font family 'DM Mono' for headers and metadata, and 'Space Grotesk' for the main title, with colors including #E85A3A for accents and #F0E8E0 for primary text. Key layout elements include a content container positioned on the left side, with a structured arrangement of a header, title, subtitle, and metadata, creating a visually engaging and modern presentation. The overall aesthetic feel is "bold, modern, volcanic."

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
     "description": "Volcanic Edge cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #080505
- Palette: #F0E8E0, #E85A3A, #080505
- Type: DM Mono (weights 400, 600, 7.7–14.4pt); Space Grotesk (weights 700, 17.3–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: volcanic-coast.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
