# Street Drop

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-street-drop.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "StreetDrop" template features a modern, urban aesthetic with a focus on sneaker culture. It has a solid background color of #080808 (black) and includes a background image of a floating sneaker located at "/__mockup/photos/sneaker-float.png". A dark gradient overlay is applied, transitioning from rgba(8,8,8,0.92) to rgba(8,8,8,0.5) and then to transparent. The text colors include #7AB87A (a soft green) for accents and #ffffff (white) for primary text, with additional text in rgba(255, 255, 255, 0.7) for a subtle effect. The font families used are 'Inter' for general text, 'Space Grotesk' for the main title, and 'DM Mono' for technical details, creating a contemporary and tech-inspired feel. Key layout elements include a flexbox structure for content organization, with a prominent title and subtitle positioned centrally, and decorative badges at the top. The overall aesthetic feel can be described as "urban chic."

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
     "description": "Street Drop cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #080808
- Palette: #FFFFFF, #7AB87A, #080808, #000000
- Type: Inter (weights 400, 500, 600, 700, 8.2–14.4pt); DM Mono (weights 400, 500, 700, 8.6–11.5pt); Space Grotesk (weights 700, 800, 14.4–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: sneaker-float.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
