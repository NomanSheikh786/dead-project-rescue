# Brand Book Page

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-brand-book-page.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BrandBookPage" template presents a modern and clean aesthetic, characterized by a minimalist design. The background color is set to pure white (#FFFFFF), while the primary text color is a dark gray (#1A1A1A). The font family used for the main content is 'Inter', sans-serif, with 'DM Mono', monospace, used for displaying color codes. Key layout elements include a centered title ("Example Deck") in a large font size (6vw) and a subtitle, along with decorative horizontal lines in light gray (#E5E5E5) separating sections. The template also features a color palette display with five colors: Dark Navy (#1A2530), Warm Gray (#EBE9E4), Sage Green (#8F9B8B), Terracotta (#C27A65), and Cream (#F7F5F0). The overall aesthetic feel is modern, clean, and professional.

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
     "description": "Brand Book Page cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #1A1A1A, #666666, #C27A65, #FFFFFF, #E5E5E5, #1A2530, #F7F5F0, #999999, #8F9B8B
- Type: Inter (weights 400, 500, 600, 700, 8.6–57.6pt); DM Mono (weights 400, 7.7–10.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
