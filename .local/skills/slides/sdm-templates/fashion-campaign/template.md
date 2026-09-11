# Fashion Campaign

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-fashion-campaign.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "FashionCampaign" template embodies a modern and sophisticated aesthetic, suitable for high-end fashion presentations. It features a solid black background color (#000000) with a dark overlay gradient that transitions from rgba(0,0,0,0.85) to rgba(0,0,0,0.4) and then to transparent. The text is primarily in white (#FFFFFF) and light gray (#C0C0C0), utilizing the 'Inter' sans-serif font for body text and the 'Playfair Display' serif font for the main heading, creating a stylish contrast. Key layout elements include a full-screen background image of a fashion studio, positioned absolutely, and a content container that is flexibly arranged to center the text, with decorative horizontal lines and a corner label for branding. The overall aesthetic feel is "chic elegance."

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
     "description": "Fashion Campaign cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #000000
- Palette: #FFFFFF, #000000, #C0C0C0
- Type: Inter (weights 100, 300, 6.7–13.4pt); Playfair Display (weights 400, 43.2–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: fashion-studio.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
