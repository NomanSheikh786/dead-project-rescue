# Social Campaign

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-social-campaign.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "SocialCampaign" template features a modern and vibrant aesthetic, characterized by a light and inviting color palette. The background color is a soft peach (#FFF8F0), complemented by accent colors of deep mauve (#5B2C6F) and a warm coral (#E8634A). The font families used are 'Inter' for general text and 'DM Sans' for headers and titles, providing a clean and contemporary look. Key layout elements include circular background shapes with varying opacities positioned at the corners, a structured content area with a header, main title, subtitle, and footer, all arranged in a flexible column layout. The overall feel of the design is fresh and engaging.

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
     "description": "Social Campaign cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFF8F0
- Palette: #5B2C6F, #E8634A, #FFF8F0
- Type: DM Sans (weights 600, 700, 800, 11.5–72pt); Inter (weights 500, 600, 700, 8.6–17.3pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
