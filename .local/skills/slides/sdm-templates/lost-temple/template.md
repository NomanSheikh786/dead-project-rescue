# Lost Temple

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-lost-temple.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "LostTemple" template features a dark, adventurous aesthetic, reminiscent of ancient ruins and exploration themes. The background color is a solid #0C0A08, complemented by a linear gradient overlay that transitions from transparent to rgba(12,10,8,0.88) at the bottom 45%. Text colors include #B8965A for accents and #E8D8C4 for primary text, creating a warm contrast against the dark background. The font families used are 'DM Mono' for metadata and footer elements, 'Playfair Display' for headings and italicized text, and 'Inter' for the subtitle, providing a mix of modern and classic styles. Key layout elements include a full-screen background image of a jungle temple, positioned absolutely, and a content container that flexibly positions text at the bottom, enhancing readability. The overall aesthetic feel is "mysterious, adventurous."

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
     "description": "Lost Temple cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #0C0A08
- Palette: #B8965A, #E8D8C4, #0C0A08, #000000
- Type: DM Mono (weights 400, 7.7–9.6pt); Playfair Display (weights 400, 9.6–76.8pt); Inter (weights 400, 9.6–15.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: jungle-temple.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
