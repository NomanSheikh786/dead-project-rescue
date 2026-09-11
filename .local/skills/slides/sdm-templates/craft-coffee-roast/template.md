# Craft Coffee Roast

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-craft-coffee-roast.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "CraftCoffeeRoast" template embodies a rustic and sophisticated aesthetic, ideal for showcasing coffee-related content. The background features a linear gradient with colors rgba(25, 15, 8, 0.9) to rgba(25, 15, 8, 0.5) transitioning to transparent, set against a full-screen image of coffee roasting located at "/__mockup/photos/coffee-roasting.png". Text elements utilize the font families 'Inter' for body text, 'DM Mono' for accent details, and 'Playfair Display' for the main heading, creating a blend of modern and classic styles. Key colors include #B87333 for accents and #F5E8D4 for primary text, contributing to a warm, inviting feel. The layout is structured with a flexible design, featuring a prominent title, subtitle, and additional details, all positioned thoughtfully within the frame. Overall, the aesthetic feel can be described as "rustic elegance."

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
     "description": "Craft Coffee Roast cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: linear gradient #190F08 → #190F08 → #000000
- Palette: #F5E8D4, #B87333, #190F08, #000000
- Type: Playfair Display (weights 500, 600, 19.2–67.2pt); Inter (weights 400, 600, 10.6–24pt); DM Mono (weights 400, 8.6–11.5pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- Photo assets: coffee-roasting.png — stock art served from the public template-asset bucket. Keep them, or generate deck-specific replacements with `generateImage` into `public/` and point the asset `src` at the relative path.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
