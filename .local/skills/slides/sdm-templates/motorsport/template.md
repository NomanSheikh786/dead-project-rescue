# Motorsport

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-motorsport.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "Motorsport" template features a sleek, high-energy aesthetic that embodies the excitement of racing. The background color is solid black (#000000), complemented by a full-bleed background image of an F1 racecar at night located at "/__mockup/images/photo-racecar.png". A subtle dark gradient at the bottom, transitioning from rgba(0,0,0,0.8) to transparent, enhances readability. Text elements utilize the 'Inter' font for the company name and year, both in a striking red (#E11D48), while the subtitle and the massive "APEX" title are rendered in white (#ffffff). Key layout elements include a racing stripe in red (#E11D48) and a footer in a semi-transparent white (rgba(255, 255, 255, 0.5)), creating a dynamic and modern feel. Overall, the aesthetic is best described as "dynamic, bold, modern."

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
     "description": "Motorsport cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #E11D48, #000000, #0A0A0A, #111111, #080808
- Type: Inter (weights 600, 700, 900, 8.6–172.8pt); Courier New (weights 400, 7.7pt); DM Mono (weights 900, 52.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: photo-racecar.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
