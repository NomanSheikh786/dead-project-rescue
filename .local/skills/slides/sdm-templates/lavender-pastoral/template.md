# Lavender Pastoral

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-lavender-pastoral.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "LavenderPastoral" template embodies a serene and elegant aesthetic, reminiscent of the French countryside. The background features a full-screen image of lavender fields located at the URL path "/__mockup/photos/lavender-provence.png". The overlaying content area has a soft background color of rgba(255, 252, 245, 0.88) and is bordered with a light, translucent brown (#B4A082) border. Text colors include a deep mauve (#4A2040) for the title, a muted lavender (#7A5A80) for the subtitle and decorative elements, and an italicized date. The font families used are 'Inter' for general text and 'Playfair Display' for the title and metadata, enhancing the template's refined feel. Key layout elements include a centered content box with rounded corners, a decorative fleur-de-lis icon, and a subtle separator line, all contributing to a tranquil and pastoral vibe. Overall, the aesthetic feel can be described as "elegant pastoral."

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
     "description": "Lavender Pastoral cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #FFFFFF
- Palette: #7A5A80, #4A2040, #FFFCF5, #B4A082, #FFFFFF
- Type: Inter (weights 300, 400, 500, 700, 7.7–24pt); Playfair Display (weights 400, 500, 10.6–57.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: lavender-provence.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
