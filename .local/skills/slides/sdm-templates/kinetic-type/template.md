# Kinetic Type

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-kinetic-type.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The KineticType template features a clean and modern aesthetic, primarily utilizing a minimalist style. The background color is solid white (#FFFFFF), while the text color is black (#000000) with accents in a vibrant red (#C41E3A). The font family used throughout is 'Space Grotesk', a sans-serif typeface, which is employed for both metadata and main content to maintain a contemporary look. Key layout elements include absolute positioning for small metadata text at the corners, a centered title section with uppercase lettering, and a prominent display of the words "EXAMPLE" and "DECK" in large font sizes (18vw) with a bold weight (900). There are no background images used in this template. The overall aesthetic feel can be described as modern, bold, and minimalist.

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
     "description": "Kinetic Type cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #000000, #C41E3A, #FFFFFF
- Type: Space Grotesk (weights 500, 600, 700, 900, 7.7–268.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
