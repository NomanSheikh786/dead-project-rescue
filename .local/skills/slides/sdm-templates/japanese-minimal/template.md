# Japanese Minimal

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-japanese-minimal.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "JapaneseMinimal" template embodies a clean and understated aesthetic, reflecting minimalism with a touch of Japanese design principles. The background color is a soft off-white (#FAF8F5), complemented by accent lines in a muted taupe (#D4CFC8) that create vertical and horizontal divisions. Text is primarily rendered in a dark gray (#2C2C2C) with secondary text in a lighter taupe (#A0978D) and a subtle beige (#8C8478) for the subtitle, all using the 'Inter' sans-serif font for a modern and legible appearance. Key layout elements include thin lines for separation, a circular decorative element, and a structured arrangement of text that emphasizes hierarchy and spacing. No background images are utilized, contributing to the overall clean and serene feel of the design. The overall aesthetic can be described as "clean, serene, minimal."

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
     "description": "Japanese Minimal cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FAF8F5
- Palette: #2C2C2C, #A0978D, #D4CFC8, #8C8478, #C4BCB2, #C53D43, #FAF8F5, #000000
- Type: Inter (weights 300, 400, 6.7–48pt); Playfair Display (weights 400, 21.1pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
