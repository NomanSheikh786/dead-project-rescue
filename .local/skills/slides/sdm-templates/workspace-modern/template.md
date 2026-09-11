# Workspace Modern

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-workspace-modern.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "WorkspaceModern" template features a clean and contemporary aesthetic, characterized by a minimalist design. The background color is a solid light gray (#F4F4F5), while the text colors include a dark gray (#18181B) for primary text, a medium gray (#71717A) for the year, and a lighter gray (#52525B) for the subtitle, with an accent color of a muted gray (#A1A1AA) for the footer text. The font families used are 'Inter' for general text, 'DM Mono' for the year, and 'Space Grotesk' for the main heading, emphasizing a modern and professional look. Key layout elements include a left text panel with structured spacing and a right image panel featuring a background image from the URL "/__mockup/photos/workspace-minimal.jpg," complemented by a subtle linear gradient overlay. The overall aesthetic feel can be described as "modern minimalist."

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
     "description": "Workspace Modern cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #F4F4F5
- Palette: #18181B, #F4F4F5, #71717A, #A1A1AA, #52525B, #E4E4E7, #FFFFFF, #10B981
- Type: Inter (weights 400, 500, 600, 8.6–17.3pt); DM Mono (weights 400, 600, 9.6–11.5pt); Space Grotesk (weights 700, 33.6–67.2pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: workspace-minimal.jpg — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
