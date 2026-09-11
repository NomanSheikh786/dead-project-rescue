# Annual Report Cover

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-annual-report-cover.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "AnnualReportCover" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is a solid light gray (#FDFDFD), while the prominent text "2026" is rendered in a soft gray (#ECECEC) using the serif font "Playfair Display" at a large size for emphasis. The main text color is a dark gray (#111111), with accent colors including medium gray (#666666) for the company name and lighter gray (#888888) for the confidentiality note. The font family "Inter" is used for body text, ensuring readability. Key layout elements include a large, centered year at the bottom, a header with company branding, and a title and subtitle section that are flexibly positioned to create a structured yet open feel. There are no background images used in this template. The overall aesthetic feel can be described as "modern minimalism."

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
     "description": "Annual Report Cover cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FDFDFD
- Palette: #111111, #888888, #333333, #666666, #E0E0E0, #FDFDFD, #555555, #F5F5F5, #ECECEC
- Type: Inter (weights 400, 500, 600, 700, 8.6–67.2pt); Playfair Display (weights 600, 700, 11.5–240pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
