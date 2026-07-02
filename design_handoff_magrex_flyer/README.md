# Handoff: Fizio Professional — MAG REX Flyer

## Overview
A single-page promotional flyer (print + digital) for **Fizio Professional Zlatibor**, a physiotherapy & rehabilitation clinic. It markets the **MAG REX 7.5T** treatment — a non-invasive, super-inductive electromagnetic therapy for **urinary incontinence and weakened pelvic-floor muscles**. The flyer is in **Serbian (Latin script)** and is designed at a fixed **1000px** width, intended to be printed on a small flyer/leaflet and also shared digitally. It ends with a scannable QR code that links to the clinic's MAG REX service page.

## About the Design Files
The files in this bundle are **design references authored in HTML** — a prototype showing the intended look, copy, and layout. They are **not production code to ship directly**.

The HTML is written as a "Design Component" (a `.dc.html` file that depends on a proprietary `support.js` runtime and custom `<x-dc>` / `<image-slot>` / `<helmet>` tags). **Do not try to run or reuse that runtime.** The task is to **recreate this design** in your target environment using its established patterns:
- If it's a print/marketing asset, rebuild it as plain semantic HTML/CSS (or a design tool / InDesign / a React component that renders to a fixed-size canvas for PDF export).
- If no environment exists yet, plain HTML + CSS is the most appropriate choice for a print flyer — the layout is a single fixed-width column, no interactivity beyond the QR code.

Everything you need to reproduce it pixel-for-pixel (colors, fonts, sizes, spacing, copy) is documented below, so you can work from this README alone.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and imagery. Recreate pixel-perfectly. All hex values, font sizes (px), and measurements below are exact.

## Canvas
- **Width:** 1000px (fixed). Centered (`margin: 0 auto`).
- **Height:** ~1500px (content-driven; the design flows top to bottom). For PDF/print, size the page to the rendered content.
- **Background:** `#ffffff`
- **Base text color:** `#2C3A38`
- **Base font:** `Mulish`, sans-serif

The flyer is **5 stacked sections**: Hero → "Kome je namenjen?" (who it's for) → "Šta može MAG REX?" (benefits row) → CTA band → Contact row.

---

## Sections / Layout

### 1. HERO  (relative container, height 712px)
Two-column visual: text on the left (~540px), patient/device photo bleeding into the top-right.

- **Photo:** `magrex-device.jpg` (included in bundle). Positioned top-right, object-fit: cover. In the reference it sits at roughly `left:573px, top:121px, width:427px, height:642px` (the author nudged it by hand — treat as "photo occupies the right ~430px of the hero, vertically roughly centered/bleeding to the right edge"). A **left-to-right white gradient** (`linear-gradient(90deg, rgba(255,255,255,0) 0%, #ffffff 92%)`, 120px wide, positioned just left of the photo) softens the seam so text never collides with the image.
- **Logo:** clinic logo image, height **160px**, top-left. Source: `https://fizioprofessional.com/assets/logo.png` (also save locally).
- **Tagline** under logo: `VAŠ PARTNER ZA ZDRAVLJE I POKRET` — 15px, weight 700, letter-spacing 2.5px, color `#8FA09C`, uppercase.
- **Eyebrow:** `REVOLUCIJA U NEINVAZIVNOM LEČENJU` — 16px, weight 700, letter-spacing 2.5px, color `#00A39B`.
- **Headline (h1):** `INKONTINENCIJE / I OSLABLJENIH / KARLIČNIH MIŠIĆA` (3 lines) — Montserrat, weight 800, **49px**, line-height 1.05, letter-spacing -0.5px, color `#0B6A60`.
- **Accent rule:** 84×6px, border-radius 3px, background `#89CA7E`, 22px above body.
- **Body paragraph 1:** "MAG REX je neinvazivan, bezbolan i efikasan tretman za jačanje karličnog dna pomoću fokusirane visoko-intenzivne elektromagnetne energije." — 21px, line-height 1.5, color `#46544F`, max-width 440px.
- **Body paragraph 2:** "**Jedna procedura = hiljade supramaksimalnih kontrakcija** koje jačaju mišiće karličnog dna." — 21px; the bold lead clause is colored `#00A39B`, weight inherited bold.

### 2. KOME JE NAMENJEN?  (who it's for — flex row, padding 8px 50px 40px)
Left column (flex:1) = heading + checklist; right column = circular badge.

- **Heading (h2):** `KOME JE NAMENJEN?` — Montserrat, weight 800, 27px, letter-spacing 0.5px, color `#00A39B`, margin-bottom 20px.
- **Checklist:** vertical flex, **gap 17px**. Each row = filled check icon + text.
  - Icon: Phosphor `ph-fill ph-check-circle`, 26px, color `#89CA7E`, `flex-shrink:0`, margin-top 2px.
  - Text: 21px, line-height 1.5, color `#46544F`. Bold emphasis spans use color `#2C3A38`.
  - Items (exact copy):
    1. "Osobe svih uzrasta sa problemom nemogućnosti voljnog zadržavanja mokraće (urinarna **inkontinencija**)"
    2. "Oslabljeni mišići karličnog dna nakon porođaja ili u menopauzi"
    3. "**Prolaps karličnih organa** (blagi i umeren stepen)"
    4. "**Smanjena seksualna funkcija** i zadovoljstvo"
    5. "Rehabilitacija nakon **ginekoloških operacija**"
    6. "Prevencija i **unapređenje zdravlja** karličnog dna"
- **Badge (circle):** 228×228px, border-radius 50%, background `#EAF5F1`, border 2px solid `#BFE0D2`, margin-top 14px, centered column.
  - Icon: Phosphor `ph ph-flower-lotus`, 40px, color `#00A39B`, margin-bottom 12px.
  - Text: Montserrat, weight 800, 18.5px, line-height 1.5, letter-spacing 1px, color `#0B6A60`, centered: `BEZBOLNO / BEZ DOWNTIME-A / BEZ OPERACIJE / BEZ LEKOVA` (4 lines).

### 3. ŠTA MOŽE MAG REX?  (benefits — padding 6px 44px 30px)
- **Heading (h2):** `ŠTA MOŽE ` + colored span `MAG REX` + `?` — centered, Montserrat, weight 800, **37px**, letter-spacing 0.5px. Base color `#2C3A38`; the `MAG REX` span is `#00A39B`. Margin-bottom 26px.
- **Row:** flex, 5 equal columns (`flex:1`, text-center, padding 0 8px). Columns 2–5 have a **left divider** `1px solid #E0EDE8`.
  - Each: Phosphor icon 39px color `#00A39B`, then label 13px-top-margin, 17px, weight 700, letter-spacing 0.5px, line-height 1.4, color `#46544F`.
  - Columns (icon → 2-line label):
    1. `ph-barbell` → JAČA KARLIČNE / MIŠIĆE
    2. `ph-drop` → SMANJUJE / INKONTINENCIJU
    3. `ph-heartbeat` → POBOLJŠAVA / KVALITET ŽIVOTA
    4. `ph-smiley` → POVEĆAVA / SAMOPOUZDANJE
    5. `ph-gender-female` → UNAPREĐUJE / INTIMNO ZADOVOLJSTVO

### 4. CTA BAND  (height 118px, background `#D6EAD7`)
Two overlapping zones:
- **Left (dark, 60% width):** background `#0E6F66`, **angled right edge** via `clip-path: polygon(0 0, 100% 0, calc(100% - 46px) 100%, 0 100%)`, padding-left 50px, vertical-centered flex row.
  - Icon: Phosphor `ph-heart`, 38px, white, opacity 0.92, margin-right 20px.
  - Line 1: "Zašto trpeti, kada rešenje postoji?" — Montserrat, weight 700, 23.5px, white.
  - Line 2 (italic): "Povratite kontrolu. Povratite sebe." — 19px, color `#BFE0D2`, margin-top 4px.
- **Right (on the light band, 40% width):** centered column, padding-left 30px.
  - Line 1: "ZAKAŽITE SVOJ TERMIN!" — Montserrat, weight 800, 24px, letter-spacing 0.5px, color `#0B6A60`.
  - Line 2: "Vaše zdravlje je na prvom mestu." — 17.5px, color `#1F6A5C`, margin-top 5px.

### 5. CONTACT ROW  (padding 34px 50px 40px, flex space-between, gap 24px)
Three groups: brand wordmark · contact details · QR.

- **Brand wordmark (text logo, centered, line-height 0.92):**
  - `FIZIO` — Zilla Slab, weight 700, 50px, letter-spacing 1px, color `#00A39B`.
  - `PROFESSIONAL` — Zilla Slab, weight 600, 23px, letter-spacing 0.5px, color `#89CA7E`, margin-top 3px.
  - `ZLATIBOR` — Zilla Slab, weight 600, 16px, letter-spacing 7px, color `#00A39B`, margin-top 4px, padding-left 7px.
- **Contact details (vertical flex, gap 13px).** Each row = circular icon chip + text.
  - Chip: 42×42px circle, background `#EAF5F1`, centered icon Phosphor `ph-bold`, 21px, color `#00A39B`.
  - Rows:
    - `ph-phone` → "065/933-1-733" (19.5px, weight 700, `#2C3A38`)
    - `ph-map-pin` → "Ulica Sportova 24B, 31315 Zlatibor / (Dvorana TRK na Zlatiboru)" (17.5px, `#46544F`, line-height 1.35)
    - `ph-globe` → "www.fizioprofessional.com" (18.5px, weight 600, `#2C3A38`)
    - `ph-instagram-logo` → "@fizio_professional" (18.5px, weight 600, `#2C3A38`)
- **QR group (flex row, gap 14px):**
  - Handwritten prompt: "Skeniraj i saznaj / više o tretmanu!" — Caveat, weight 700, 25.5px, line-height 1.15, color `#00A39B`, right-aligned.
  - Arrow: Phosphor `ph-bold ph-arrow-elbow-down-right`, 24px, color `#89CA7E`.
  - QR code: 96×96px box, white bg, border 1px solid `#D8E8E2`, border-radius 10px. **Encodes the URL `https://fizioprofessional.com/magnetic.html`.** Module color `#0F5E5C` (dark), background white, error-correction level M, rendered ~86×86px inside the box. Generate with any QR library (e.g. `qrcode`, `qrcode.react`).

---

## Interactions & Behavior
This is a static flyer. The only dynamic element is the **QR code**, generated at render time pointing to `https://fizioprofessional.com/magnetic.html`. No hover/click/animation states, no forms, no responsive breakpoints (fixed 1000px canvas for print). The photo in the reference is a drag-and-drop slot; in production just place `magrex-device.jpg` as a normal cover-fit image.

## Design Tokens

**Colors**
- Brand teal (primary accent, icons, eyebrow, links): `#00A39B`
- Brand green (leaf — accent rule, check icons, arrow, "PROFESSIONAL"): `#89CA7E`
- Deep teal (headings, badge text, CTA right title): `#0B6A60`
- CTA dark band: `#0E6F66`
- CTA light band: `#D6EAD7`
- CTA subtitle (on light): `#1F6A5C`
- CTA italic (on dark): `#BFE0D2`
- Light teal chip / badge fill: `#EAF5F1`
- Badge border: `#BFE0D2`
- Divider lines: `#E0EDE8`
- QR border: `#D8E8E2`
- QR module dark: `#0F5E5C`
- Body text: `#46544F`
- Strong/dark text: `#2C3A38`
- Muted tagline grey: `#8FA09C`
- Page background: `#ffffff`

**Typography**
- Display/headings: **Montserrat** (600/700/800)
- Body/UI: **Mulish** (400/500/600/700/800)
- Brand wordmark: **Zilla Slab** (500/600/700)
- Handwritten accent: **Caveat** (600/700)
- Google Fonts URL: `https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Mulish:wght@400;500;600;700;800&family=Caveat:wght@600;700&family=Zilla+Slab:wght@500;600;700&display=swap`

**Font sizes (px):** 49 (h1) · 37 (benefits h2) · 27 (section h2) · 25.5 (QR prompt) · 24 / 23.5 (CTA) · 21 (body & list) · 19.5 / 19 · 18.5 · 17.5 · 17 · 16 · 15 (small caps)

**Icon set:** Phosphor Icons (`@phosphor-icons/web@2.1.1`) — weights `regular` (`ph`), `bold` (`ph-bold`), `fill` (`ph-fill`). Icons used: check-circle, flower-lotus, barbell, drop, heartbeat, smiley, gender-female, heart, phone, map-pin, globe, instagram-logo, arrow-elbow-down-right.

**Spacing scale (px) seen in layout:** 8, 13, 14, 17, 20, 22, 26, 30, 34, 40, 44, 46, 50.

## Assets
- `magrex-device.jpg` — photo of the MAG REX 7.5T device in the clinic treatment room (included in bundle).
- Clinic logo — `https://fizioprofessional.com/assets/logo.png` (download and self-host; included reference URL only).
- Fonts — Google Fonts (see URL above).
- Icons — Phosphor Icons via CDN/npm.

## Source Reference Files (in this bundle)
- `Fizio MAG REX Flyer.dc.html` — the full design reference (HTML). Open in a browser **only** via the original project's runtime; otherwise read it as a spec. All inline styles map 1:1 to the documentation above.
- `magrex-device.jpg` — hero image asset.

> Note: the `.dc.html` references a proprietary `support.js` runtime and custom elements (`<x-dc>`, `<helmet>`, `<image-slot>`) that are **not** included and should not be reproduced — they are authoring-tool scaffolding, not part of the design.

## Copy (full Serbian text, for proofing)
- Tagline: VAŠ PARTNER ZA ZDRAVLJE I POKRET
- Eyebrow: REVOLUCIJA U NEINVAZIVNOM LEČENJU
- Headline: INKONTINENCIJE I OSLABLJENIH KARLIČNIH MIŠIĆA
- Body: "MAG REX je neinvazivan, bezbolan i efikasan tretman za jačanje karličnog dna pomoću fokusirane visoko-intenzivne elektromagnetne energije. Jedna procedura = hiljade supramaksimalnih kontrakcija koje jačaju mišiće karličnog dna."
- Section: KOME JE NAMENJEN? (+ 6 list items above)
- Badge: BEZBOLNO / BEZ DOWNTIME-A / BEZ OPERACIJE / BEZ LEKOVA
- Section: ŠTA MOŽE MAG REX? (+ 5 benefit labels above)
- CTA: "Zašto trpeti, kada rešenje postoji? / Povratite kontrolu. Povratite sebe." · "ZAKAŽITE SVOJ TERMIN! / Vaše zdravlje je na prvom mestu."
- Contact: 065/933-1-733 · Ulica Sportova 24B, 31315 Zlatibor (Dvorana TRK na Zlatiboru) · www.fizioprofessional.com · @fizio_professional
- QR prompt: "Skeniraj i saznaj više o tretmanu!" → https://fizioprofessional.com/magnetic.html
