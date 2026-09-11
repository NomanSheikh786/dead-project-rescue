# Origami Couture

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-origami-couture.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "OrigamiCouture" template features a modern and sophisticated aesthetic, reminiscent of high-fashion magazine layouts. The background color is pure white (#FFFFFF), complemented by a full-screen background image of origami fashion located at "/__mockup/photos/origami-fashion.png". Text elements utilize a dark gray color (#0A0A0A) for prominent titles and a lighter gray (#888888) for subtitles, while the watermark is rendered in a very light opacity of the same dark gray. The font families used include 'Inter' for body text and 'Space Grotesk' for titles and decorative elements, creating a clean and contemporary look. Key layout elements include a vertical black bar on the left side, a large rotated title, and a bottom content area that organizes text in a structured manner. The overall aesthetic feel can be described as "elegant, modern, chic."

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
     "description": "Origami Couture cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #0A0A0A, #FFFFFF, #888888, #555555, #E0E0E0, #F0F0F0, #1A1A1A
- Type: Space Grotesk (weights 400, 600, 700, 800, 7.7–192pt); Inter (weights 400, 600, 7.7–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: origami-fashion.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
