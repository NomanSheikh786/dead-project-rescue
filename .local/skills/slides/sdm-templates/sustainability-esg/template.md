# Sustainability ESG

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-sustainability-esg.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SustainabilityEsg" template embodies an organic and eco-friendly aesthetic, characterized by soft, natural colors and rounded shapes. The background color is a light greenish-gray (#F5F7F2), complemented by organic shapes in muted green (#5B7C5A) and a warm beige (#C4A962) with low opacity. Text is primarily in a dark green (#2C3E2D) and lighter shades like (#4A5D4B) and (#6B7C6A), with accents in a soft beige (#C4A962) and a muted gray (#8A998A). The font family used is 'Inter' for body text and 'Playfair Display' for headings, providing a modern yet classic feel. Key layout elements include large circular shapes in the background, a structured two-column layout for content, and a header and footer with subtle borders. There are no background images used. The overall aesthetic feel is "natural elegance."

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
     "description": "Sustainability ESG cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F5F7F2
- Palette: #5B7C5A, #C4A962, #2C3E2D, #6B7C6A, #8A998A, #FFFFFF, #F5F7F2, #4A5D4B
- Type: Inter (weights 300, 400, 500, 600, 8.6–15.4pt); Playfair Display (weights 400, 17.3–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
