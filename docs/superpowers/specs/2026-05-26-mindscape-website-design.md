# Mindscape Academic Point — Website Design Spec

**Date:** 2026-05-26  
**Phase:** 1 — Portfolio site  
**Stack:** Next.js (App Router) + Tailwind CSS + Framer Motion

---

## 1. Project Overview

A modern, multi-page portfolio website for **Mindscape Academic Point**, a tutoring centre based in Dhaka, Bangladesh. Founded in 2019, it specialises in science-group coaching (Class 9–12) and medical/engineering admission test preparation.

**Phase 1 goal:** A polished portfolio that builds trust with prospective students and drives contact via WhatsApp and phone call.

**Future phases (not built now, routes stubbed):**
- Online learning platform (`/learn`)
- Downloadable notes (`/notes`)
- Fun minigames (`/games`)
- User authentication and dashboard (`/login`, `/dashboard`)

---

## 2. Target Audience

- **Primary:** Students in Class 9–12, SSC, HSC, and admission test phase (ages ~15–18), deciding for themselves
- **Secondary:** Parents with indirect influence
- **Location:** Dhaka, Bangladesh
- **Language:** English only

---

## 3. Pages

### Phase 1 (built)

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Full scrolling portfolio landing page |
| `/about` | About | Institution story + 3 tutor profiles |
| `/courses` | Courses | Subject offerings + admission prep detail |
| `/results` | Results | Student results and testimonials |
| `/contact` | Contact | Phone, WhatsApp, location |

### Phase 2 stubs (placeholder "Coming Soon" pages)

| Route | Future purpose |
|-------|---------------|
| `/learn` | Online learning platform (auth-gated) |
| `/notes` | Downloadable notes (auth-gated) |
| `/games` | Fun minigames |
| `/login` | Auth entry point |
| `/dashboard` | Student dashboard |

---

## 4. Shared Layout

### Navbar
- Sticky, positioned at the top of every page
- Background: `#0d2244` at 97% opacity with `backdrop-filter: blur(12px)`
- Becomes slightly more opaque with a bottom border on scroll (Framer Motion `useScroll`)
- Left: Logo image (`/public/logo.jpg`) displayed as a circular crop at 36×36px, with the text "Mindscape / Academic Point" beside it. Monogram initials ("SM") used as fallback if image fails to load.
- Centre: Horizontal nav links — Home · About · Courses · Results · Contact
- Right: "💬 WhatsApp Us" CTA button (green `#25D366`)

### Footer
- Background: `#080f1e`
- Brand name + "Est. 2019 · Dhaka, Bangladesh"
- Horizontal quick links
- Copyright line

### Inner page hero
- All inner pages (`/about`, `/courses`, `/results`, `/contact`) share a compact dark-blue page banner (shorter than the home hero) with just the page title and a one-line subtitle.

---

## 5. Home Page Sections (scroll order)

1. **Hero** — immersive dark-navy → brand-blue gradient, full-width centered. Eyebrow label, H1 headline ("Where Science Meets Success"), subheadline, WhatsApp + Call CTAs, stats bar (500+ Students · 95% GPA 5 Rate · 3 Expert Tutors · Est. 2019). Subtle grid texture overlay.
2. **About Snapshot** — two-column: copy on left (institution intro + link to `/about`), visual badge on right ("6+ Years of Excellence").
3. **Courses** — four subject cards (Physics, Chemistry, Biology, Higher Math) each with an icon and SSC/HSC/Admission tags. Below the cards: a dark gradient admission-prep banner highlighting MBBS, BUET, CUET.
4. **Meet the Tutors** — three tutor cards with avatar (initials placeholder until real photos provided), name, subject line, and short bio.
5. **Results & Testimonials** — three testimonial cards with student quote, name, and result badge (e.g., "✅ BUET EEE · GPA 5").
6. **CTA Banner** — bold dark-blue gradient section with "Ready to Start Your Success Story?" headline + WhatsApp + Call buttons.
7. **Footer**

---

## 6. Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#0d2244` | Hero background, headings |
| Brand Blue | `#1a56db` | Primary CTA, links, labels |
| Sky Accent | `#93c5fd` | Hero highlights, eyebrow text |
| Cool White | `#f8faff` | Page background |
| Surface White | `#ffffff` | Cards, sections |
| Body Gray | `#4b5563` | Body copy |
| Border Blue | `#dde8ff` | Card borders, dividers |
| WhatsApp Green | `#25D366` | WhatsApp CTA button only |
| Footer Dark | `#080f1e` | Footer background |

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headings (H1–H3) | Plus Jakarta Sans | 900 / 800 / 700 | Google Fonts |
| Labels / eyebrows | Inter | 700 | Uppercase, letter-spacing 2px |
| Body copy | Inter | 400 | 15px, 1.65 line-height |

### Component patterns
- **Cards:** `#f8faff` background, `1px solid #dde8ff` border, `border-radius: 16px`, icon + title + tags
- **Buttons — primary:** `#1a56db` fill, white text, `border-radius: 10px`
- **Buttons — outline:** transparent fill, `#1a56db` border + text
- **Buttons — WhatsApp:** `#25D366` fill, white text, WhatsApp SVG icon
- **Tags/pills:** `#eef2ff` background, `#1a56db` text, `border-radius: 999px`

---

## 7. Animation (Framer Motion)

All animations are subtle and non-blocking. They do not run on reduced-motion preference (`prefers-reduced-motion`).

| Animation | Trigger | Implementation |
|-----------|---------|---------------|
| Page transition | Route change | Fade + slight upward slide (`opacity: 0→1`, `y: 16→0`) |
| Section reveal | Scroll into view | `whileInView`, one-time, fade + rise |
| Card stagger | Section reveal | `staggerChildren: 0.08s` on grid container |
| Stat counter | Hero mount | Count up from 0 to target value over 1.5s |
| Navbar scroll | `useScroll` | Opacity and border transition on scroll |
| Card hover | Hover | `y: -4px`, box-shadow increase |
| Button hover | Hover | Background lightens, smooth `transition` |

---

## 8. Content (Phase 1 — mock until replaced)

All content below is placeholder. Real content will be provided by the owner and swapped in without code changes (data lives in a `/data` or `/content` directory, not hardcoded in components).

- **Stats:** 500+ students, 95% GPA 5 rate, 3 tutors, Est. 2019
- **Tutors:** 3 mock tutor profiles (name, subject, bio, initials avatar)
- **Testimonials:** 3 mock student success stories
- **Courses:** Physics, Chemistry, Biology, Higher Math, Admission Prep

### Content update strategy
Each content type maps to a file in `/src/data/`:
- `tutors.ts` — tutor list
- `testimonials.ts` — student testimonials
- `stats.ts` — hero stat numbers
- `courses.ts` — course definitions

Owner replaces mock values in these files; no component code changes needed.

---

## 9. Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 (App Router) | SSG for portfolio, SSR ready for future dynamic features; clean path to auth, API routes, file serving |
| Styling | Tailwind CSS v3 | Utility-first, pairs well with Next.js, fast to iterate |
| Animations | Framer Motion | Best-in-class React animation, declarative API |
| Fonts | Google Fonts (Plus Jakarta Sans + Inter) | Free, fast via `next/font/google` |
| Linting | ESLint + Prettier | Standard Next.js defaults |
| Deployment | Vercel (free tier) | Zero-config Next.js deployment; domain added later |
| Language | TypeScript | Type safety, maintainability |

---

## 10. Folder Structure

```
src/
  app/
    layout.tsx          ← shared navbar + footer
    page.tsx            ← home
    about/page.tsx
    courses/page.tsx
    results/page.tsx
    contact/page.tsx
    learn/page.tsx      ← "Coming Soon" stub
    notes/page.tsx      ← "Coming Soon" stub
    games/page.tsx      ← "Coming Soon" stub
    login/page.tsx      ← "Coming Soon" stub
    dashboard/page.tsx  ← "Coming Soon" stub
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      AboutSnapshot.tsx
      CoursesSection.tsx
      TutorsSection.tsx
      TestimonialsSection.tsx
      CtaBanner.tsx
    ui/
      CourseCard.tsx
      TutorCard.tsx
      TestimonialCard.tsx
      StatsBar.tsx
      PageHero.tsx       ← shared inner-page banner
  data/
    tutors.ts
    testimonials.ts
    courses.ts
    stats.ts
  lib/                   ← future: auth helpers, API clients
public/
  logo.jpg
  "reference picture.jpg"
```

---

## 11. Contact Details (from logo)

- Phone: 01610667603
- WhatsApp: same number
- Location: Dhaka, Bangladesh

---

## 12. Out of Scope (Phase 1)

- User authentication
- File upload / download system
- Minigames
- Online learning platform
- CMS integration
- Analytics (can add later)
- Bengali language support
