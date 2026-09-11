# Blackboard Chalk

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-blackboard-chalk.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "BlackboardChalk" template features a dark, educational aesthetic reminiscent of a chalkboard. It uses a solid background color of #2D3436 and text color #E8E2D5, creating a high-contrast look. The font families include 'Space Grotesk' for general text and 'DM Mono' for specific elements, emphasizing a modern yet retro typewriter style. Key layout elements include a flexbox structure with a chalk-like underline and a decorative chalk tray edge at the bottom, enhancing the theme. There are no background images specified in the code. The overall aesthetic feel is "modern chalkboard."

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
     "description": "Blackboard Chalk cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #2D3436
- Palette: #E8E2D5, #2D3436, #222728, #3F484B
- Type: DM Mono (weights 400, 600, 700, 9.6–76.8pt); Space Grotesk (weights 400, 700, 14.4–86.4pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
