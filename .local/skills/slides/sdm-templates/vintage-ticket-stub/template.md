# Vintage Ticket Stub

**Visual Reference**: Before you build any slides, list the `attached_assets/` directory and open the template preview image (`slides-template-vintage-ticket-stub.png`). Your first slide MUST match that image as closely as possible. Build slide 1 from `slide1.sdm.yaml`, take a screenshot, and compare it against the reference before you continue.

The "VintageTicketStub" template embodies a retro aesthetic reminiscent of classic ticket designs. It features a warm cream background color (#EBE3D5) with a lighter ticket area in a soft beige (#F9F6F0). The text is primarily deep slate/navy (#2C3539) with accents in deep red (#BA3B31) and muted gray (#6B7280). The font family used is 'DM Sans' for general text, 'DM Mono' for ticket details, and 'Space Grotesk' for the main title, creating a vintage yet modern feel. Key layout elements include rounded corners, a dashed border for a perforation effect, and decorative notches at the top and bottom of the ticket. There are no background images used in this design. The overall aesthetic feel is "retro elegance."

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
     "description": "Vintage Ticket Stub cover",
     "speakerNotes": ""
   }
   ```
   To rename a slide, keep the filename as `<slide-id>.sdm.yaml` and keep the manifest `id` and `filepath` in sync.
3. Replace the placeholder copy (names, numbers, dates, feature text) by editing the copied files in place. Do NOT change frames, colors, fonts, or spacing while you swap copy.
4. Run `pnpm run validate-slides` in the deck after your content edits.

## Design summary

- Background: solid #EBE3D5
- Palette: #2C3539, #6B7280, #F9F6F0, #BA3B31, #EBE3D5, #4A5568
- Type: DM Sans (weights 400, 500, 600, 700, 800, 8.6–19.2pt); DM Mono (weights 400, 700, 9.6–14.4pt); Space Grotesk (weights 900, 28.8–76.8pt)
- All fonts come from the built-in registry (font table in `references/sdm-building.md`); this template needs no `index.html` font links.
- For slides beyond the four samples, reuse the palette, type scale, and layout patterns from the YAML documents in this folder.
