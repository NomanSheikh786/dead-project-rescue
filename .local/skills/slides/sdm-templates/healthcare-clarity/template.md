# Healthcare Clarity

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-healthcare-clarity.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "HealthcareClarity" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), while a decorative circular element in the background features a light teal border (#2A7B7B) with 20% opacity. Text colors include a dark navy (#1A1A2E) for the main heading, a muted teal (#2A7B7B) for the company name, and a soft grayish-blue (#4A4A68) for the subtitle. The font family used throughout is 'Inter', with bold weights for headings and lighter weights for body text. Key layout elements include a large circular shape positioned off-screen, a structured layout with a header, main content area, and a footer that contrasts with the background using a teal color (#2A7B7B). The overall aesthetic feel is "clean, modern, professional."

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
     "description": "Healthcare Clarity cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #2A7B7B, #FFFFFF, #1A1A2E, #4A4A68, #F8F9FA, #E2E8F0
- Type: Inter (weights 400, 500, 600, 700, 9.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
