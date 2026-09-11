# Workspace Design

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-workspace-design.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "WorkspaceDesign" template features a modern and sleek aesthetic, characterized by a dark theme. The background color is a solid #121216, complemented by a background image of a skyline located at "/__mockup/photos/coworking-skyline.png". A dark overlay gradient transitions from transparent to rgba(18,18,22,0.98), enhancing depth. Text colors include #FFFFFF for primary text and #A0A0A0 for secondary elements. The font families used are 'Inter' for general text and 'Space Grotesk' for the title, with 'DM Mono' for footer information, creating a contemporary feel. Key layout elements include a content container positioned to the right, a top label, a title, a separator line, and a footer, all contributing to a structured and organized presentation. The overall aesthetic feel is "modern, sleek, dark".

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
     "description": "Workspace Design cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #121216
- Palette: #FFFFFF, #A0A0A0, #121216, #000000
- Type: Inter (weights 300, 400, 500, 7.7–11.5pt); Space Grotesk (weights 300, 400, 14.4–57.6pt); DM Mono (weights 400, 7.7–9.6pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: coworking-skyline.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
