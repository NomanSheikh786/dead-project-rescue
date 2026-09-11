# Origami Paper

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-origami-paper.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "OrigamiPaper" template features a soft, minimalist aesthetic reminiscent of folded paper art. The background color is a light beige (#FAF8F5), complemented by text in a dark gray (#2C2C2C). The design employs the 'DM Sans' font for body text and 'Space Grotesk' for the main title, creating a modern and clean look. Key layout elements include diagonal dashed lines representing paper creases in muted colors (rgba(61, 79, 124, 0.15) and rgba(196, 120, 110, 0.2)), and a cluster of origami-inspired shapes in shades of dusty coral (#C4786E), muted indigo (#3D4F7C), and light paper fold (#F0EAE1). The overall aesthetic feel is "soft elegance."

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
     "description": "Origami Paper cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FAF8F5
- Palette: #3D4F7C, #FAF8F5, #C4786E, #6B768B, #8E99AF, #F0EAE1, #B3685F, #000000
- Type: DM Sans (weights 300, 400, 500, 8.6–15.4pt); Space Grotesk (weights 400, 500, 28.8–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
