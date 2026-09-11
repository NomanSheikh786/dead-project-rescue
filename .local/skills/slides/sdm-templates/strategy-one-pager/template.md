# Strategy One-Pager

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-strategy-one-pager.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "StrategyOnePager" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), while the primary text color is a dark navy (#0A1628) and the secondary text color is a muted gray (#4A5568). Accent text appears in a lighter gray (#A0AEC0) for labels, and a subtle light gray (#E2E8F0) is used for a decorative horizontal line. The font families utilized are 'Inter' for general text and 'DM Mono' for specific details, providing a contemporary and professional look. Key layout elements include a flexible layout with a header section, a prominent title area with a semi-transparent dark rectangle behind it, and a structured arrangement of project details on the right. Overall, the aesthetic feel can be described as "modern minimalist."

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
     "description": "Strategy One-Pager cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #0A1628, #4A5568, #A0AEC0, #FFFFFF, #E2E8F0, #718096, #F7FAFC
- Type: Inter (weights 400, 500, 700, 800, 900, 8.6–76.8pt); DM Mono (weights 400, 600, 8.2–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
