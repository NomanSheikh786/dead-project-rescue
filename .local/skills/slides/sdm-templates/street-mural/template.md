# Street Mural

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-street-mural.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "StreetMural" template features a vibrant urban aesthetic, characterized by a full-bleed background image of a street mural located at "/__mockup/photos/street-mural.png". The background is complemented by a solid black rectangle (#0A0A0A) positioned at the bottom, which houses various text elements. The text colors include a warm accent of #D4695A for headers, #FFFFFF for the main title, and #A0A0A0 for the subtitle, with additional shades of #666666 and varying opacities for other text elements. The font families used are "'Space Grotesk', sans-serif" for the overall layout and "'DM Mono', monospace" for the text, providing a modern and clean look. Key layout elements include a structured arrangement of text within the black rectangle, with a focus on hierarchy and spacing, creating a dynamic yet organized presentation. The overall aesthetic feel is urban and contemporary.

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
     "description": "Street Mural cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #FFFFFF, #D4695A, #0A0A0A, #666666, #A0A0A0, #333333
- Type: DM Mono (weights 400, 500, 600, 6.7–11.5pt); Space Grotesk (weights 800, 38.4–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: street-mural.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
