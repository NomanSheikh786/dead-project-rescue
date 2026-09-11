# Arctic Minimal

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-arctic-minimal.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The ArcticMinimal template features a clean and modern aesthetic, characterized by a light and airy design. The background color is a soft light blue, specifically #F0F4F8, complemented by a radial gradient of rgba(148, 163, 184, 0.15) that adds subtle texture. Text elements utilize a color palette of #334155 for primary text, #94A3B8 for secondary text, and #3B82F6 for decorative lines. The font family used is 'Inter', sans-serif, which is applied for both headings and body text to maintain a contemporary feel. Key layout elements include a centered alignment of content, a decorative horizontal line, and absolute positioning for the header and footer sections. There are no background images specified in the code. The overall aesthetic feel can be described as "clean, modern, minimal."

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
     "description": "Arctic Minimal cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F0F4F8
- Palette: #94A3B8, #334155, #3B82F6, #64748B, #F0F4F8, #FFFFFF
- Type: Inter (weights 200, 300, 400, 600, 700, 7.7–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
