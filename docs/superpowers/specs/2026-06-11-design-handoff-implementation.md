# Design Handoff Implementation — Moon Studios

**Date:** 2026-06-11  
**Source:** `E:\moon_studios\moon-studios-handoff\moon-studios\project\`  
**Approach:** Extend existing dual-layout pattern — prototype CSS for both mobile and desktop

---

## Scope

Implement the visual design from the Claude Design handoff bundle exactly. Preserve all functionality: routing, WhatsApp links, phone numbers, analytics events, booking form logic, SEO metadata, structured data. Only style changes.

---

## 1. CSS — `src/moon-prototype.css`

- Remove the `@media (max-width: 767px)` wrapper so prototype CSS tokens and base styles apply globally (not mobile-only)
- Append all desktop-specific CSS from handoff `moon.css`:
  - `.dsite`, `.dscreen`, `.dcontain`
  - `.dheader`, `.dlogo`, `.dnav`, `.dcta`, `.dround`, `.dbook`
  - `.dhero`, `.dhero-imgs`, `.dratings`, `.dbadges`, `.dgal-link`
  - Desktop overrides for `.band-head`, `.sec`, `.grid`, `.rev-rail`, `.spot`, `.book`, `.loc`, `.foot`, `.seo`

---

## 2. Home Page Components — Desktop Rewrite

Each component currently has a `hidden md:block` section using Tailwind classes. Replace with prototype desktop CSS classes. The `block md:hidden` mobile sections stay unchanged.

### `Header.tsx`
- Replace Tailwind desktop header with `.dheader > .dcontain.bar`
- Logo: `.dlogo` button
- Nav: `.dnav` with buttons for Services, Process, Reviews, Gallery, Contact
- CTAs: `.dcta` containing `.dround.call` (phone), `.dround.wa` (WhatsApp), `.dbook` button
- Keep all existing click handlers and analytics

### `Hero.tsx`
- Replace Tailwind desktop hero with `.dhero`
- Centered `h1`, `.lede` paragraph, `.dbadges` row (shield/user/star badges)
- `.ctas` row: `.cta-main` (Book Your Visit), `.cta-sec` (Explore Services)
- `.dratings` row with JustDial + Google logos
- `.dhero-imgs` grid: 3 rotated image tiles (hero-1/2/3), each linking to gallery on click
- `.dgal-link` text link below

### `PreferredBy.tsx` (LovedByStylish)
- Replace desktop section with `.band.band-tint` + `.band-head` + `.celeb-rail`
- Celebrity avatars in scrollable rail

### `TopServices.tsx`
- Replace desktop section with `.band` + `.band-head` + `.grid.top4.fb-lift`
- 4 service cards using `.card` pattern
- "View All 70+ Services" using `.outline-btn`

### `SpecialtyHighlight.tsx` (Spotlight)
- Replace with `.spot` inside `.dsite` — two-column grid layout on desktop
- Before/after images + CTA text + WhatsApp button

### `WhyChooseUs.tsx`
- `.band.band-soft` + `.band-head` + `.why-list` (horizontal row on desktop)
- 3 `.why-card` items

### `ClientReviews.tsx`
- `.band.band-soft` + `.band-head.left` + `.rev-rail` (3-column grid on desktop)
- Review cards + action buttons

### `VideoShowcase.tsx`
- `.band` + `.band-head` (eyebrow + h2 + sub) + `.vid-rail` + `.yt-cta`

### `Gallery.tsx`
- `.band.band-soft` + `.band-head` + `.ga-grid` (4-column on desktop)
- Before/after split cards

### `Stylists.tsx`
- `.band` + `.band-head.left` + `.sty-grid`

### `BookingForm.tsx`
- `.book` + `.band-head.left` + `.book-card` with bullets, form fields, actions
- Keep all existing form validation and WhatsApp submission logic

### `Location.tsx`
- `.band` + `.band-head.left` + `.loc` (2-column grid on desktop)
- Map iframe + location card + action buttons

### `Footer.tsx`
- `.foot` with `.foot-inner` (3-column grid on desktop)
- Logo, blurb, quick links, social icons, SEO accordion links, copyright
- Keep all existing links and navigation handlers

---

## 3. Services Page — `src/pages/Services.tsx`

Full rebuild to match prototype `ServicesScreen` component. All existing service data preserved.

### Layout structure
```
<div class="moon dsite">        ← on md+ (desktop wrapper)
  <Header />                    ← shared, already handled
  <div class="screen">
    <div class="scroller">
      <Hero section />
      <CategoryNav (sticky) />
      <Service sections by category />
    </div>
    <FloatingCTA />
  </div>
</div>
```

### Hero section (`.hero`)
- Eyebrow: "WHAT WE DO"
- `h1`: "Walk in stressed, walk out *made* for it."
- Sub-copy: "Over 70 services — hair, skin, nails, waxing, massage and grooming — all done with genuine care."
- Rating row with stars

### Category chip nav (`.catnav`, sticky)
Categories in order:
1. Hair (scissors icon)
2. Skin & Face (sparkles icon)
3. Nails & Feet (hand icon)
4. Waxing (droplet icon)
5. Massage (heart icon)
6. Men's (user icon)

Active chip: `.catnav button.on` (primary color). Clicking scrolls to the category section.

### Service sections
Each category renders:
- Section header: `.sec` with `.catline` (icon badge + h2 + sub description)
- `.grid` (2-col mobile, 3-col desktop) of `.card` service cards
- Card structure: image (4:3), category icon overlay, title, blurb, duration, "View →"

### Service detail bottom sheet
Tapping a card opens `.sheet-wrap` bottom sheet with:
- Hero image (16:10)
- Close button (`.sheet-x`)
- Category badge (`.sheet-cat`)
- Service name, duration chip, "Free consultation" chip, "Premium products" chip
- Description text
- Pricing note
- Sticky CTA: "Book on WhatsApp" + "Call" buttons

### Floating CTA (`FloatingCTA.tsx`)
Already exists as untracked file. Wire up: WhatsApp (primary) + Call (secondary) buttons visible always on mobile, hidden on desktop.

---

## 4. What Does NOT Change

- All route paths (`/`, `/services`, `*`)
- All WhatsApp links (`wa.me/919004832184`)
- All phone numbers (`tel:+919004832184`)
- All external URLs (Google Maps, Instagram, YouTube, Facebook)
- All `trackEvent` analytics calls and `data-analytics-*` attributes
- Booking form validation logic and WhatsApp message formatting
- SEO: `<title>`, `<meta description>`, canonical, structured data
- Google Analytics and GTM tags in `index.html`
- All service names, descriptions, images, categories
- Font families (Playfair Display + Inter — already loaded)

---

## 5. Files to Modify

| File | Change |
|------|--------|
| `src/moon-prototype.css` | Remove mobile media wrapper, add desktop CSS |
| `src/main.tsx` | Ensure `moon-prototype.css` is imported |
| `src/components/Header.tsx` | Rewrite desktop section |
| `src/components/Hero.tsx` | Rewrite desktop section |
| `src/components/PreferredBy.tsx` | Rewrite desktop section |
| `src/components/TopServices.tsx` | Rewrite desktop section |
| `src/components/SpecialtyHighlight.tsx` | Rewrite desktop section |
| `src/components/WhyChooseUs.tsx` | Rewrite desktop section |
| `src/components/ClientReviews.tsx` | Rewrite desktop section |
| `src/components/VideoShowcase.tsx` | Rewrite desktop section |
| `src/components/Gallery.tsx` | Rewrite desktop section |
| `src/components/Stylists.tsx` | Rewrite desktop section |
| `src/components/BookingForm.tsx` | Rewrite desktop section |
| `src/components/Location.tsx` | Rewrite desktop section |
| `src/components/Footer.tsx` | Rewrite desktop section |
| `src/pages/Services.tsx` | Full rebuild with category nav + card grid + sheet |
| `src/components/FloatingCTA.tsx` | Wire up (already exists as new file) |
| `src/pages/Index.tsx` | Add `dsite` wrapper class for desktop |
