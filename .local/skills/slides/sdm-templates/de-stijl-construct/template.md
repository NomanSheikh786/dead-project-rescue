# De Stijl Construct

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-de-stijl-construct.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "DeStijlConstruct" template embodies a modernist aesthetic inspired by the De Stijl movement, characterized by geometric abstraction and a primary color palette. The background color is #FFFFFF (white), with thick black lines (#111111) creating a grid layout. The text color is also #111111, while accent colors include #D92E2E (red), #F2B807 (yellow), and #1A3B8C (blue). The font family used is 'Inter', sans-serif, for both headings and body text, emphasizing clarity and modernity. Key layout elements include a series of positioned divs that simulate a grid with colored blocks, and the overall feel is minimalist and structured. No background images are used in this template.

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
     "description": "De Stijl Construct cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #111111, #FFFFFF, #D92E2E, #F2B807, #1A3B8C
- Type: Inter (weights 500, 700, 800, 900, 9.6–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
