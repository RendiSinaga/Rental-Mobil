# Rendy Rental Website

## Purpose

- Govern every build, overhaul, and QA pass of the Rendy Rental Batam website (rendyrental-batam.netlify.app) so the result is distinctive and conversion-focused — never a generic template and never AI slop.
- Two users of this skill: (1) Cassie, who prepares the brief/package and runs QA on the result; (2) the Antigravity agent on the owner's machine, which receives this file as a project rule file and builds under it. The owner (Bos) is Director and sole final approver in both cases.
- Grafted 2026-11-13 from the GitHub screening at `~/workspace/research_notes/github-skills-website-rendy-20261113/report.md` — ideas grafted, nothing installed wholesale (the standing screening pattern since 2026-10-27).

## Load the constraints first (non-negotiable order)

1. **PRD** — `~/workspace/goals/promosi-rendy-rental-batam/files/prd-website-rendy-rental.md`. No work starts without an approved PRD. If this skill and the PRD disagree, the PRD wins.
2. **Locked data** — PRD §7 (mirrored in the handover file `data-terkunci.md`). Every price, number, and claim on the page must trace to it. The current live website is a *reference for structure only*; its numbers (249K, "4.9 (300 reviews)", 10+ units, postcode 29432) are known-wrong and must never be copied.
3. **Brand system** — `~/workspace/goals/promosi-rendy-rental-batam/files/standar-desain.md`: navy #0a0e27 / blue / white, black master logo placed as-is on dark (never on a white box), promo car colours (Rocky yellow, Agya red, Xenia black, Avanza silver).

## Hard rules (inherited, never relaxed by any grafted source)

- **Fonts: brand only.** Montserrat + Archivo Black (embedded in the video scaffold at `~/workspace/video-motion/public/fonts/`, or already installed). NEVER download fonts. A silent fallback rendering is a failed render.
- **Images: real fleet photos only.** From the project archive (`files/aset-armada/`, 112 photos) or the cleaned Google Maps set (`~/workspace/your_files/foto-produk-gmaps/`). No stock, no AI-generated cars, no stand-ins passed off as the fleet. Cars shown whole, wheels planted naturally; shape, colour, plate text and logos unchanged by any cleanup.
- **Copy is promotional content:** every `/konten` hard rule applies — active tariff only (Xpander Rp350k/day; Xenia/Avanza/Rocky/Brio Rp300k/day; Agya/Calya Rp250k/day); NEVER quote a with-driver price (not set by the owner); NEVER mention Tanjung Pinang in promo content; no urgent wording; no invented claims of any kind.
- **No fabricated trust signals.** No ratings, review counts, customer counts, or testimonials that cannot be pointed to a source. Until real written rental reviews exist, the site carries NO testimonial section and NO aggregateRating schema.
- **WhatsApp is the conversion target.** Number +62 821-6444-7764 (wa.me/6282164447764), digit-checked in QA. Every car card links to WhatsApp with a prefilled message naming that car model.
- **Stack: plain static HTML/CSS/JS**, one page, hosted free on the same Netlify. No React/Tailwind/shadcn or other heavy stack (screening verdict on web-artifacts-builder). Any tool proposing one is refused.

## The method

### Stage 0 — PRD gate (from phuryn/pm-skills `create-prd`, grafted)
- Confirm the PRD exists, is owner-approved, and still validates against the lean structure: problem first, measurable goal, named target users, explicit out-of-scope list, open questions answered or explicitly deferred. Missing approval = stop and ask the owner.

### Stage 1 — Name the philosophy, lock the tokens (from Anthropic `frontend-design`, grafted)
- The design philosophy is named in the PRD before any composition. Current: **"Dermaga Senja" (Dusk Harbour)** — deep navy as dusk sky, the fleet's real dusk/night photos as the visual lead, oversized price numerals as signage, one warm accent (the logo's yellow strip). If the owner renames the philosophy, update the PRD first, then this stage follows it.
- Write the token system before coding: 4–6 colours with roles (all inside the brand palette), type roles (display/body/price numerals — brand fonts only), spacing rhythm, and ONE layout concept with an ASCII wireframe of the page order in PRD §6.
- **Plan review checkpoint:** the wireframe + tokens are reviewed against the PRD brief before any full build. In Antigravity this is a hard stop: present the wireframe and wait for the owner's go-ahead.

### Stage 2 — Build
- Compose editorially and asymmetrically: large real photography and large price numerals carry the design; text is short and specific (Batam place names, this fleet's real facts), never lorem-like filler.
- Page order and content sources are fixed by PRD §6 (hero → fleet → how to book → why us (max 3 proven points) → service area → FAQ from the owner's locked /balas texts → footer + floating WhatsApp button on mobile).
- Microcopy rule: a sentence that could belong to any rental company in any city is rewritten until it could only belong to Rendy Rental in Batam, or deleted.

### Stage 3 — Refinement pass (mandatory, from canvas-design via poster_design)
- A second pass whose only job is to refine what exists: tighten alignment, spacing, hierarchy, cohesion. Do NOT add elements; when the instinct is to add, ask what can be removed. Log what was removed or tightened — a pass that only adds fails.

### Stage 4 — Conversion pass (from coreyhaines31/marketingskills `cro` + `copywriting`, grafted)
Audit the built page in this order and fix findings before QA:
1. **5-second test:** a first-time visitor can say what this is, where, and the starting price within 5 seconds.
2. **Headline specificity:** names Batam + rental + a real differentiator; clichés ("Kebebasan Berkendara Dimulai Disini") fail.
3. **CTA:** one primary action (WhatsApp) everywhere; per-car prefilled messages work; no competing primary buttons.
4. **Trust:** only verifiable signals (since 2020, 11 units, 24 hours, real photos, real address).
5. **Objections:** price, deposit, pickup, requirements, hours — all answered on-page from the locked FAQ texts.
6. **Friction:** no form to fill, no account, no dead links; booking is one tap to a chat.

### Stage 5 — Quality pass (from addyosmani/web-quality-skills, grafted)
- Budgets: JavaScript < 300 KB, total page < 1.5 MB (compress fleet photos without altering the car).
- Core Web Vitals targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
- Accessibility (WCAG 2.2 intent): semantic HTML, visible focus states, sufficient contrast on navy, alt text on every car photo, `prefers-reduced-motion` respected, tap targets usable on phones.
- Interface audit categories (snapshotted from Vercel's Web Interface Guidelines — the snapshot lives HERE so the standard cannot drift at runtime): accessibility, focus, forms, animation, typography, images (dimensions set, lazy-load below the fold), performance, touch, i18n basics.

### Stage 6 — Local SEO (ideas from AgriciDaniel/claude-seo `seo-local` + `seo-schema`, grafted)
- Title/meta describe the real offer with the real starting price (Rp250rb).
- JSON-LD `AutoRental` schema with locked facts only (name, phone, address, openingHours 24/7, priceRange Rp250.000–Rp350.000, sameAs links to IG/FB/TikTok). NO review/aggregateRating nodes until real reviews exist.
- Name/address/phone must match the Google Business Profile listing exactly (consistency is a local ranking input), including the owner-confirmed postcode once PRD open question §11.4 is answered.

## Anti-slop detector checklist (adapted from pbakaus/impeccable's detector concept + taste-skill ban list; checklist only — the Impeccable binary and its live mode are NEVER installed or run)

Run over the rendered page; ANY hit = fix and re-check:
- Purple/blue generic gradients, glassmorphism, uniform floating-card kits.
- 3-column icon feature rows, emoji icons, generic line-icon sets.
- Centred-everything symmetrical template layout; all-caps eyebrow labels on every heading; fade-up animation on every section.
- Big-number hero with invented stats; any stat, rating, or testimonial without a source.
- Stock or AI car imagery; cropped cars; wheels floating or sunk.
- Default/Inter/system font rendering; more than the two brand fonts.
- Headline or body copy that could belong to any business in any city.
- Placeholder text, dead buttons, or a CTA that does not open WhatsApp.

## QA gates (run on the RENDER, never on code alone — extends PRD §10; Playwright-screenshot method from Anthropic `webapp-testing`)

Capture screenshots at 1440 / 1024 / 768 / 390 px widths (desktop → phone) and check line by line; re-run IN FULL after the last correction:
1. **Facts** — every price matches the locked tariff; WhatsApp number digit-checked; no driver price; no Tanjung Pinang; no fabricated rating/testimonial/stat; postcode and address match the owner's confirmed data.
2. **Font proof** — screenshots visibly render Montserrat/Archivo Black; fallback look = fail, rebuild.
3. **Visual** — philosophy readable in the render; cars whole with planted wheels; logo black master blending on dark, no white box; zero anti-slop detector hits.
4. **Function** — every WhatsApp link opens a chat with the correct per-car prefilled text; IG/FB/TikTok/Maps links correct; layout sound at all four widths; floating button never covers content.
5. **Quality budgets** — Stage 5 budgets and vitals targets measured, not assumed.
6. **Fresh eyes** — one final pass over the phone-width screenshot as a first-time visitor: message understood in 5 seconds, price found without scrolling past the fleet section.

## Antigravity handover (how the owner runs this on his machine)

- The project folder the owner opens in Antigravity contains, in this reading order: the owner's current website files (his reference, supplied by him), the PRD, this skill as the project rule file, `data-terkunci.md`, and the starter prompt (`paket-antigravity/` in the Promosi project files).
- The starter prompt orders the agent to: read PRD → locked data → this skill; confirm the philosophy back to the owner; STOP at the Stage 1 wireframe checkpoint for approval; only then build; then run the refinement pass and self-run the detector checklist + QA gates before presenting.
- The agent in Antigravity never invents a fact to fill a gap: gaps are reported to the owner as questions, exactly as the PRD open questions were.
- Cassie does not operate Antigravity or the owner's computer; Cassie re-runs the QA gates independently on the delivered result.

## First-use test protocol

- This skill is UNTESTED until the website rebuild v1 runs end-to-end as its exam: PRD gate → philosophy/tokens → wireframe checkpoint approved → build → refinement pass logged → conversion + quality passes → full QA gates on screenshots → owner approval within ≤2 consolidated revision rounds.
- PASS = every QA line passes, zero hard-rule leaks, owner approves. FAIL on any line = the failure is written into this skill as a proposed fix (applied only after the owner agrees) and the test re-runs on the next job.

## Improve this skill from feedback

- Classify each owner correction as one-off or recurring; fix one-offs in that build only, propose recurring ones as skill edits and apply only after the owner agrees. Log changes in the version notes with dates.

## Version notes

- v1, 2026-11-13. Created at the owner's order from the 13 Nov 2026 GitHub website-skills screening (report in research_notes). Graft sources: Anthropic frontend-design (method, Stage 1), phuryn/pm-skills create-prd (Stage 0), canvas-design refinement pass via the local poster_design skill (Stage 3), coreyhaines31/marketingskills cro + copywriting (Stage 4), addyosmani/web-quality-skills (Stage 5), AgriciDaniel/claude-seo local/schema ideas (Stage 6), pbakaus/impeccable detector concept + Leonxlnx/taste-skill ban list and multi-width finish check (detector checklist + QA widths — ideas/checklists only, no binaries, no live mode, no fetched-at-runtime rules), Anthropic webapp-testing (screenshot QA method), Vercel web-design-guidelines (categories snapshotted into Stage 5). Deliberately NOT grafted: web-artifacts-builder (wrong stack), brand-guidelines as-is (Anthropic's own brand), theme-factory presets (font conflicts), ui-ux-pro-max (token-heavy; stacking taste systems averages into generic). Status: UNTESTED — first use (website rebuild v1, built by the owner in Antigravity) is its test.
