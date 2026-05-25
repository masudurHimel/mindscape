# Mindscape Academic Point — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern multi-page portfolio website for Mindscape Academic Point using Next.js 14 (App Router), Tailwind CSS v3, and Framer Motion.

**Architecture:** Next.js App Router with a `src/` directory. All content lives in `src/data/` TypeScript files — swap mock data for real data without touching components. Animated client components use `"use client"`; page files are server components that import them.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v3, Framer Motion 11, next/font/google (Plus Jakarta Sans + Inter), npm

---

## File Map

```
/Users/masudurhimel/Documents/Ongoing Projects/mindscape/
  public/
    logo.jpg                          ← copy from sources/logo.jpg
  src/
    app/
      layout.tsx                      ← root layout: fonts, Navbar, Footer
      page.tsx                        ← home page
      globals.css                     ← Tailwind directives + CSS vars
      about/page.tsx
      courses/page.tsx
      results/page.tsx
      contact/page.tsx
      learn/page.tsx                  ← Coming Soon stub
      notes/page.tsx                  ← Coming Soon stub
      games/page.tsx                  ← Coming Soon stub
      login/page.tsx                  ← Coming Soon stub
      dashboard/page.tsx              ← Coming Soon stub
    components/
      layout/
        Navbar.tsx                    ← sticky nav, scroll opacity, WA CTA
        Footer.tsx
      sections/
        Hero.tsx                      ← immersive dark-blue hero
        AboutSnapshot.tsx
        CoursesSection.tsx
        TutorsSection.tsx
        TestimonialsSection.tsx
        CtaBanner.tsx
      ui/
        CourseCard.tsx
        TutorCard.tsx
        TestimonialCard.tsx
        PageHero.tsx                  ← shared inner-page banner
        StatCounter.tsx               ← animated count-up number
    data/
      types.ts                        ← shared TypeScript interfaces
      stats.ts
      courses.ts
      tutors.ts
      testimonials.ts
  tailwind.config.ts                  ← brand tokens
  next.config.ts
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `tailwind.config.ts` (overwrite scaffolded version)
- Create: `src/app/globals.css` (overwrite scaffolded version)
- Create: `public/logo.jpg` (copy from sources/)
- Modify: `next.config.ts`

- [ ] **Step 1: Scaffold Next.js 14 into the existing project directory**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted, accept defaults. If asked about existing files (CLAUDE.md, .gitignore), choose to keep existing files.

- [ ] **Step 2: Install Framer Motion**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm install framer-motion
```

Expected output: `added X packages`

- [ ] **Step 3: Copy logo to public/**

```bash
cp "/Users/masudurhimel/Documents/Ongoing Projects/mindscape/sources/logo.jpg" \
   "/Users/masudurhimel/Documents/Ongoing Projects/mindscape/public/logo.jpg"
```

- [ ] **Step 4: Overwrite tailwind.config.ts with brand tokens**

Replace the entire file content at `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0d2244',
        'navy-footer': '#080f1e',
        'brand-blue': '#1a56db',
        'brand-sky': '#93c5fd',
        'brand-border': '#dde8ff',
        'brand-surface': '#f8faff',
        'wa-green': '#25D366',
        'body-gray': '#4b5563',
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #0d2244 0%, #1a3a6e 45%, #1a56db 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0d2244 0%, #1a3a6e 50%, #1a56db 100%)',
        'admission-gradient': 'linear-gradient(135deg, #0d2244 0%, #1a56db 100%)',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 5: Overwrite src/app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-brand-surface text-navy-dark font-body;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .section-label {
    @apply text-xs font-bold tracking-widest uppercase text-brand-blue font-body;
  }

  .section-heading {
    @apply font-display text-3xl md:text-4xl font-black text-navy-dark leading-tight;
  }

  .btn-primary {
    @apply bg-brand-blue text-white font-bold rounded-xl px-7 py-3.5 text-sm
           transition-all hover:bg-blue-700 active:scale-95;
  }

  .btn-outline {
    @apply border-2 border-brand-blue text-brand-blue font-bold rounded-xl px-7 py-3.5 text-sm
           transition-all hover:bg-brand-blue hover:text-white active:scale-95;
  }

  .btn-wa {
    @apply bg-wa-green text-white font-bold rounded-xl px-7 py-3.5 text-sm
           transition-all hover:bg-green-600 active:scale-95 flex items-center gap-2;
  }

  .card-base {
    @apply bg-white border border-brand-border rounded-2xl;
  }
}
```

- [ ] **Step 6: Verify dev server starts**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run dev &
sleep 5
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200`

Kill dev server: `kill %1`

- [ ] **Step 7: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add -A
git commit -m "feat: scaffold Next.js 14 with Tailwind brand tokens and Framer Motion"
```

---

## Task 2: Content Data Layer

**Files:**
- Create: `src/data/types.ts`
- Create: `src/data/stats.ts`
- Create: `src/data/courses.ts`
- Create: `src/data/tutors.ts`
- Create: `src/data/testimonials.ts`

- [ ] **Step 1: Create src/data/types.ts**

```typescript
export interface Stat {
  value: string
  label: string
}

export interface Course {
  id: string
  title: string
  icon: string
  tags: string[]
}

export interface AdmissionTarget {
  label: string
}

export interface Tutor {
  id: string
  name: string
  initials: string
  subjects: string
  bio: string
  photo?: string
}

export interface Testimonial {
  id: string
  quote: string
  studentName: string
  studentInitials: string
  result: string
}
```

- [ ] **Step 2: Create src/data/stats.ts**

```typescript
import type { Stat } from './types'

export const stats: Stat[] = [
  { value: '500+', label: 'Students' },
  { value: '95%', label: 'GPA 5 Rate' },
  { value: '3', label: 'Expert Tutors' },
  { value: '2019', label: 'Est.' },
]
```

- [ ] **Step 3: Create src/data/courses.ts**

```typescript
import type { Course, AdmissionTarget } from './types'

export const courses: Course[] = [
  {
    id: 'physics',
    title: 'Physics',
    icon: '⚛️',
    tags: ['SSC', 'HSC', 'Admission'],
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    icon: '⚗️',
    tags: ['SSC', 'HSC', 'Admission'],
  },
  {
    id: 'biology',
    title: 'Biology',
    icon: '🧬',
    tags: ['SSC', 'HSC', 'Medical Prep'],
  },
  {
    id: 'math',
    title: 'Higher Math',
    icon: '📐',
    tags: ['SSC', 'HSC', 'Engg. Prep'],
  },
]

export const admissionTargets: AdmissionTarget[] = [
  { label: 'MBBS' },
  { label: 'BUET' },
  { label: 'CUET' },
  { label: 'RUET' },
]
```

- [ ] **Step 4: Create src/data/tutors.ts**

```typescript
import type { Tutor } from './types'

export const tutors: Tutor[] = [
  {
    id: 'tutor-1',
    name: 'Md. Abdur Rahim',
    initials: 'AR',
    subjects: 'Physics & Higher Math',
    bio: 'MSc in Physics, University of Dhaka. 8+ years coaching HSC and admission test students with a 92% pass rate.',
  },
  {
    id: 'tutor-2',
    name: 'Sadia Ferdousi',
    initials: 'SF',
    subjects: 'Chemistry & Biology',
    bio: 'MBBS graduate with a passion for helping students crack medical admission tests through conceptual clarity.',
  },
  {
    id: 'tutor-3',
    name: 'Khalid Hasan',
    initials: 'KH',
    subjects: 'Biology & Chemistry',
    bio: 'BSc (Hons) in Biochemistry. Specialises in SSC and HSC Biology with a focus on exam technique and retention.',
  },
]
```

- [ ] **Step 5: Create src/data/testimonials.ts**

```typescript
import type { Testimonial } from './types'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'I was struggling with Physics before joining Mindscape. After 6 months, I scored A+ in HSC and got into BUET. The teaching method here is unlike anything else.',
    studentName: 'Rafiul Karim',
    studentInitials: 'RK',
    result: '✅ BUET (EEE) · HSC GPA 5',
  },
  {
    id: 'testimonial-2',
    quote:
      "Sadia ma'am's Biology classes made the medical admission syllabus feel manageable. I cleared the MBBS admission test in my first attempt.",
    studentName: 'Nusrat Akter',
    studentInitials: 'NA',
    result: '✅ MBBS Admission · GPA 5',
  },
  {
    id: 'testimonial-3',
    quote:
      'Mindscape helped me jump from a B grade to A+ in Chemistry in just one term. The notes, practice tests, and personal attention made the difference.',
    studentName: 'Tanvir Islam',
    studentInitials: 'TI',
    result: '✅ SSC GPA 5 · Science Group',
  },
]
```

- [ ] **Step 6: Type-check**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 7: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/data/
git commit -m "feat: add typed content data layer with mock data"
```

---

## Task 3: Shared UI Components

**Files:**
- Create: `src/components/ui/CourseCard.tsx`
- Create: `src/components/ui/TutorCard.tsx`
- Create: `src/components/ui/TestimonialCard.tsx`
- Create: `src/components/ui/PageHero.tsx`
- Create: `src/components/ui/StatCounter.tsx`

- [ ] **Step 1: Create src/components/ui/CourseCard.tsx**

```typescript
import type { Course } from '@/data/types'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card-base p-6 hover:shadow-lg hover:shadow-brand-blue/10 transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
        {course.icon}
      </div>
      <h3 className="font-display text-lg font-bold text-navy-dark mb-3">
        {course.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-50 text-brand-blue text-xs font-bold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create src/components/ui/TutorCard.tsx**

```typescript
import Image from 'next/image'
import type { Tutor } from '@/data/types'

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <div className="card-base p-7 text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-border to-blue-50 border-4 border-blue-50 flex items-center justify-center mx-auto mb-4 overflow-hidden">
        {tutor.photo ? (
          <Image
            src={tutor.photo}
            alt={tutor.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="font-display text-2xl font-black text-brand-blue">
            {tutor.initials}
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-bold text-navy-dark mb-1">
        {tutor.name}
      </h3>
      <p className="text-brand-blue text-sm font-semibold mb-3">{tutor.subjects}</p>
      <p className="text-body-gray text-sm leading-relaxed">{tutor.bio}</p>
    </div>
  )
}
```

- [ ] **Step 3: Create src/components/ui/TestimonialCard.tsx**

```typescript
import type { Testimonial } from '@/data/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-2xl p-6">
      <p className="text-gray-600 text-sm leading-relaxed italic mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-border flex items-center justify-center flex-shrink-0">
          <span className="font-display text-xs font-black text-brand-blue">
            {testimonial.studentInitials}
          </span>
        </div>
        <div>
          <p className="font-bold text-navy-dark text-sm">{testimonial.studentName}</p>
          <p className="text-green-600 text-xs font-semibold">{testimonial.result}</p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create src/components/ui/PageHero.tsx**

```typescript
interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-hero-gradient py-16 px-6 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 48px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 48px)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="section-label text-brand-sky mb-3">{label}</p>
        <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/65 text-base mt-4 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Create src/components/ui/StatCounter.tsx**

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

interface StatCounterProps {
  value: string
  label: string
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  const numericPart = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/\d/g, '')
  const isYear = !suffix && numericPart > 2000

  useEffect(() => {
    if (!isInView || !ref.current) return
    if (isYear) {
      if (ref.current) ref.current.textContent = value
      return
    }
    const controls = animate(0, numericPart, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest) + suffix
        }
      },
    })
    return () => controls.stop()
  }, [isInView, numericPart, suffix, isYear, value])

  return (
    <div className="text-center flex-1 py-4 px-3">
      <span
        ref={ref}
        className="font-display text-2xl md:text-3xl font-black text-white block"
      >
        {value}
      </span>
      <span className="text-white/50 text-xs mt-1 block">{label}</span>
    </div>
  )
}
```

- [ ] **Step 6: Type-check**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 7: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/components/ui/
git commit -m "feat: add shared UI components (cards, PageHero, StatCounter)"
```

---

## Task 4: Layout Components + Root Layout

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create src/components/layout/Navbar.tsx**

```typescript
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
]

const WHATSAPP_NUMBER = '8801610667603'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-navy-dark/98 border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-navy-dark/97'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Mindscape Academic Point"
              width={36}
              height={36}
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-black text-white">Mindscape</p>
            <p className="text-white/50 text-[9px] font-medium tracking-widest uppercase">
              Academic Point
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-wa-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa justify-center mt-2"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Create src/components/layout/Footer.tsx**

```typescript
import Link from 'next/link'

const PHONE = '01610667603'
const WHATSAPP_NUMBER = '8801610667603'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-footer py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white text-base">
              Mindscape Academic Point
            </p>
            <p className="text-white/40 text-xs mt-1">Est. 2019 · Dhaka, Bangladesh</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-white/50 hover:text-white text-xs transition-colors"
            >
              📞 {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wa-green hover:text-green-400 text-xs font-bold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Mindscape Academic Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Overwrite src/app/layout.tsx**

```typescript
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mindscape Academic Point',
    template: '%s | Mindscape Academic Point',
  },
  description:
    'Expert tutoring for Class 9–12, SSC, HSC & Medical/Engineering admission in Dhaka, Bangladesh. Founded 2019.',
  keywords: ['tutor', 'Dhaka', 'SSC', 'HSC', 'physics', 'chemistry', 'biology', 'MBBS', 'BUET'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Type-check**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 5: Verify dev server renders navbar and footer**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run dev &
sleep 6
curl -s http://localhost:3000 | grep -q "Mindscape" && echo "PASS" || echo "FAIL"
kill %1
```

Expected: `PASS`

- [ ] **Step 6: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/components/layout/ src/app/layout.tsx
git commit -m "feat: add Navbar, Footer, and root layout with Google Fonts"
```

---

## Task 5: Home Page Sections

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/AboutSnapshot.tsx`
- Create: `src/components/sections/CoursesSection.tsx`
- Create: `src/components/sections/TutorsSection.tsx`
- Create: `src/components/sections/TestimonialsSection.tsx`
- Create: `src/components/sections/CtaBanner.tsx`

- [ ] **Step 1: Create src/components/sections/Hero.tsx**

```typescript
import StatCounter from '@/components/ui/StatCounter'
import { stats } from '@/data/stats'

const PHONE = '01610667603'
const WHATSAPP_URL = 'https://wa.me/8801610667603'

export default function Hero() {
  return (
    <section className="bg-hero-gradient py-24 px-6 text-center relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 48px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 48px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="section-label text-brand-sky mb-5">
          Expert Tutoring · Dhaka, Bangladesh
        </p>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5">
          Where Science
          <br />
          Meets{' '}
          <span className="text-brand-sky">Success</span>
        </h1>

        <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Focused coaching for Class 9–12, SSC, HSC & Medical / Engineering
          admission — by expert tutors who know what it takes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a href={`tel:${PHONE}`} className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white justify-center">
            📞 Call Now
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex divide-x divide-white/10 bg-white/8 rounded-2xl overflow-hidden max-w-lg mx-auto backdrop-blur-sm border border-white/10">
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create src/components/sections/AboutSnapshot.tsx**

```typescript
import Link from 'next/link'

export default function AboutSnapshot() {
  return (
    <section className="bg-brand-surface py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label mb-3">Who We Are</p>
          <h2 className="section-heading mb-5">
            A Trusted Name in Science Education
          </h2>
          <p className="text-body-gray text-base leading-relaxed mb-6">
            Founded in 2019, Mindscape Academic Point has been helping students in
            Dhaka unlock their potential in science subjects. Our tutors combine deep
            subject expertise with a results-focused approach that prepares students
            for SSC, HSC, and competitive admission tests.
          </p>
          <Link
            href="/about"
            className="text-brand-blue font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Learn more about us →
          </Link>
        </div>

        <div className="bg-gradient-to-br from-brand-border to-blue-50 rounded-3xl h-64 flex items-center justify-center">
          <div className="bg-brand-blue text-white rounded-2xl px-10 py-7 text-center shadow-xl shadow-brand-blue/30">
            <p className="font-display text-5xl font-black">6+</p>
            <p className="text-white/80 text-sm mt-2 font-medium">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create src/components/sections/CoursesSection.tsx**

```typescript
import Link from 'next/link'
import CourseCard from '@/components/ui/CourseCard'
import { courses, admissionTargets } from '@/data/courses'

export default function CoursesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">What We Teach</p>
          <h2 className="section-heading">Our Courses</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Admission prep banner */}
        <div className="bg-admission-gradient rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-black text-white mb-1">
              🎯 Admission Test Preparation
            </h3>
            <p className="text-white/65 text-sm">
              Specialised coaching for Medical (MBBS) and Engineering (BUET, CUET,
              RUET) entrance exams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            {admissionTargets.map((target) => (
              <span
                key={target.label}
                className="bg-white/15 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/25"
              >
                {target.label}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/courses" className="btn-outline inline-block">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create src/components/sections/TutorsSection.tsx**

```typescript
import Link from 'next/link'
import TutorCard from '@/components/ui/TutorCard'
import { tutors } from '@/data/tutors'

export default function TutorsSection() {
  return (
    <section className="bg-brand-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">The Team</p>
          <h2 className="section-heading">Meet the Tutors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/about" className="btn-outline inline-block">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Create src/components/sections/TestimonialsSection.tsx**

```typescript
import Link from 'next/link'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Student Success</p>
          <h2 className="section-heading">Results That Speak</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/results" className="btn-outline inline-block">
            See All Results
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Create src/components/sections/CtaBanner.tsx**

```typescript
const PHONE = '01610667603'
const WHATSAPP_URL = 'https://wa.me/8801610667603'

export default function CtaBanner() {
  return (
    <section className="bg-cta-gradient py-20 px-6 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 24px)',
        }}
      />
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Ready to Start Your
          <br />
          Success Story?
        </h2>
        <p className="text-white/60 text-base mb-10">
          Join hundreds of students who trusted Mindscape to get them where they
          wanted to go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </a>
          <a href={`tel:${PHONE}`} className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white justify-center">
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 7: Type-check**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 8: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/components/sections/
git commit -m "feat: add all home page section components"
```

---

## Task 6: Home Page Assembly

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Overwrite src/app/page.tsx**

```typescript
import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import AboutSnapshot from '@/components/sections/AboutSnapshot'
import CoursesSection from '@/components/sections/CoursesSection'
import TutorsSection from '@/components/sections/TutorsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Mindscape Academic Point — Expert Science Tutoring in Dhaka',
  description:
    'Focused coaching for Class 9–12, SSC, HSC & Medical/Engineering admission. Expert tutors, proven results. Est. 2019, Dhaka.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <CoursesSection />
      <TutorsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
```

- [ ] **Step 2: Start dev server and verify all sections render**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run dev &
sleep 6
curl -s http://localhost:3000 | grep -q "Where Science" && echo "Hero: PASS" || echo "Hero: FAIL"
curl -s http://localhost:3000 | grep -q "Trusted Name" && echo "About: PASS" || echo "About: FAIL"
curl -s http://localhost:3000 | grep -q "Our Courses" && echo "Courses: PASS" || echo "Courses: FAIL"
curl -s http://localhost:3000 | grep -q "Meet the Tutors" && echo "Tutors: PASS" || echo "Tutors: FAIL"
curl -s http://localhost:3000 | grep -q "Results That Speak" && echo "Testimonials: PASS" || echo "Testimonials: FAIL"
curl -s http://localhost:3000 | grep -q "Success Story" && echo "CTA: PASS" || echo "CTA: FAIL"
kill %1
```

Expected: All six lines print `PASS`.

- [ ] **Step 3: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/app/page.tsx
git commit -m "feat: assemble home page with all sections"
```

---

## Task 7: Inner Pages

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/app/courses/page.tsx`
- Create: `src/app/results/page.tsx`
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create src/app/about/page.tsx**

```typescript
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TutorCard from '@/components/ui/TutorCard'
import { tutors } from '@/data/tutors'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Mindscape Academic Point — our story, mission, and the expert tutors behind our students’ results.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About Mindscape"
        subtitle="Six years of helping science students achieve their best."
      />

      {/* Mission section */}
      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-3">Who We Are</p>
          <h2 className="section-heading mb-6">A Trusted Name in Science Education</h2>
          <p className="text-body-gray text-base leading-relaxed mb-4">
            Founded in 2019, Mindscape Academic Point started with a simple mission:
            make expert science coaching accessible to every motivated student in
            Dhaka. We focus exclusively on the science stream — Physics, Chemistry,
            Biology, and Higher Math — and on preparing students for SSC, HSC, and
            the country&rsquo;s most competitive admission tests.
          </p>
          <p className="text-body-gray text-base leading-relaxed">
            Our approach is straightforward: deep subject knowledge, structured
            practice, and honest feedback. We don&rsquo;t promise shortcuts — we
            deliver understanding.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-white py-12 px-6 border-y border-brand-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '2019', label: 'Founded' },
            { value: '500+', label: 'Students' },
            { value: '95%', label: 'GPA 5 Rate' },
            { value: '3', label: 'Expert Tutors' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-black text-brand-blue">{stat.value}</p>
              <p className="text-body-gray text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tutors section */}
      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">The Team</p>
            <h2 className="section-heading">Meet the Tutors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Create src/app/courses/page.tsx**

```typescript
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import CourseCard from '@/components/ui/CourseCard'
import { courses, admissionTargets } from '@/data/courses'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Physics, Chemistry, Biology, Higher Math — and Medical/Engineering admission test preparation. SSC, HSC, and beyond.',
}

export default function CoursesPage() {
  return (
    <>
      <PageHero
        label="What We Teach"
        title="Our Courses"
        subtitle="Science-focused coaching for SSC, HSC, and competitive admission exams."
      />

      {/* Subject courses */}
      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Science Subjects</p>
            <h2 className="section-heading">Core Subjects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission prep */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Admission Prep</p>
            <h2 className="section-heading">Medical & Engineering Admission</h2>
          </div>
          <div className="bg-admission-gradient rounded-2xl p-8 text-center">
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Specialised coaching for Medical (MBBS) and Engineering (BUET, CUET,
              RUET) entrance exams. We cover the full admission syllabus with
              intensive practice tests and past-paper analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {admissionTargets.map((target) => (
                <span
                  key={target.label}
                  className="bg-white/15 text-white text-sm font-bold px-6 py-3 rounded-full border border-white/25"
                >
                  {target.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Create src/app/results/page.tsx**

```typescript
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Results',
  description:
    'Real results from Mindscape students — GPA 5s, MBBS admissions, BUET qualifiers. See what our students have achieved.',
}

const highlights = [
  { value: '95%', label: 'GPA 5 Rate', sub: 'SSC & HSC science group' },
  { value: '80+', label: 'Medical Admits', sub: 'MBBS admission clearance' },
  { value: '60+', label: 'Engineering Admits', sub: 'BUET, CUET, RUET' },
  { value: '500+', label: 'Students Coached', sub: 'Since 2019' },
]

export default function ResultsPage() {
  return (
    <>
      <PageHero
        label="Student Success"
        title="Results That Speak"
        subtitle="Our students go on to top medical colleges and engineering universities across Bangladesh."
      />

      {/* Result highlights */}
      <section className="bg-white py-12 px-6 border-b border-brand-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="font-display text-4xl font-black text-brand-blue">{h.value}</p>
              <p className="font-bold text-navy-dark text-sm mt-1">{h.label}</p>
              <p className="text-body-gray text-xs mt-1">{h.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Student Stories</p>
            <h2 className="section-heading">In Their Own Words</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 4: Create src/app/contact/page.tsx**

```typescript
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Mindscape Academic Point — WhatsApp, phone, or visit us in Dhaka.',
}

const PHONE = '01610667603'
const WHATSAPP_NUMBER = '8801610667603'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="We're happy to answer questions about courses, batches, and enrolment."
      />

      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:shadow-wa-green/10 transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                💬
              </div>
              <p className="font-display font-bold text-navy-dark">WhatsApp</p>
              <p className="text-wa-green font-bold text-sm">+88 {PHONE}</p>
              <p className="text-body-gray text-xs">Tap to open WhatsApp chat</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="card-base p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:shadow-brand-blue/10 transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📞
              </div>
              <p className="font-display font-bold text-navy-dark">Call Us</p>
              <p className="text-brand-blue font-bold text-sm">{PHONE}</p>
              <p className="text-body-gray text-xs">Available during batch hours</p>
            </a>
          </div>

          {/* Location */}
          <div className="card-base p-6 text-center">
            <p className="text-3xl mb-3">📍</p>
            <p className="font-display font-bold text-navy-dark mb-1">Location</p>
            <p className="text-body-gray text-sm">Dhaka, Bangladesh</p>
            <p className="text-body-gray text-xs mt-2">
              Exact address shared upon enrolment enquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 5: Verify all inner pages respond**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run dev &
sleep 6
for path in about courses results contact; do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/$path)
  echo "$path: $code"
done
kill %1
```

Expected: all four print `200`.

- [ ] **Step 6: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/app/about/ src/app/courses/ src/app/results/ src/app/contact/
git commit -m "feat: add About, Courses, Results, and Contact inner pages"
```

---

## Task 8: Stub Pages

**Files:**
- Create: `src/app/learn/page.tsx`
- Create: `src/app/notes/page.tsx`
- Create: `src/app/games/page.tsx`
- Create: `src/app/login/page.tsx`
- Create: `src/app/dashboard/page.tsx`

- [ ] **Step 1: Create all five stub pages**

Create `src/app/learn/page.tsx`:

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Online Learning — Coming Soon' }

export default function LearnPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-5">🎓</p>
        <h1 className="font-display text-4xl font-black text-navy-dark mb-3">Coming Soon</h1>
        <p className="text-body-gray mb-8">
          Our online learning platform is under development. Check back soon!
        </p>
        <Link href="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
```

Create `src/app/notes/page.tsx`:

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Notes — Coming Soon' }

export default function NotesPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-5">📄</p>
        <h1 className="font-display text-4xl font-black text-navy-dark mb-3">Coming Soon</h1>
        <p className="text-body-gray mb-8">
          Downloadable notes and study materials are coming soon.
        </p>
        <Link href="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
```

Create `src/app/games/page.tsx`:

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Games — Coming Soon' }

export default function GamesPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-5">🎮</p>
        <h1 className="font-display text-4xl font-black text-navy-dark mb-3">Coming Soon</h1>
        <p className="text-body-gray mb-8">
          Fun science minigames are in the works. Stay tuned!
        </p>
        <Link href="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
```

Create `src/app/login/page.tsx`:

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Login — Coming Soon' }

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-5">🔐</p>
        <h1 className="font-display text-4xl font-black text-navy-dark mb-3">Coming Soon</h1>
        <p className="text-body-gray mb-8">
          Student accounts are not yet available. We&rsquo;ll let you know when they launch.
        </p>
        <Link href="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
```

Create `src/app/dashboard/page.tsx`:

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Dashboard — Coming Soon' }

export default function DashboardPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-5">📊</p>
        <h1 className="font-display text-4xl font-black text-navy-dark mb-3">Coming Soon</h1>
        <p className="text-body-gray mb-8">
          Student dashboards are under development.
        </p>
        <Link href="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify stub pages**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run dev &
sleep 6
for path in learn notes games login dashboard; do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/$path)
  echo "$path: $code"
done
kill %1
```

Expected: all five print `200`.

- [ ] **Step 3: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/app/learn/ src/app/notes/ src/app/games/ src/app/login/ src/app/dashboard/
git commit -m "feat: add Coming Soon stub pages for future scope routes"
```

---

## Task 9: Framer Motion Animations

**Files:**
- Modify: `src/components/sections/Hero.tsx` — stat counters already use Framer Motion (StatCounter); add entrance animation to hero text
- Modify: `src/components/sections/AboutSnapshot.tsx`
- Modify: `src/components/sections/CoursesSection.tsx`
- Modify: `src/components/sections/TutorsSection.tsx`
- Modify: `src/components/sections/TestimonialsSection.tsx`
- Modify: `src/components/sections/CtaBanner.tsx`
- Create: `src/components/ui/FadeInSection.tsx` — reusable scroll-reveal wrapper

- [ ] **Step 1: Create src/components/ui/FadeInSection.tsx**

```typescript
'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function FadeInSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: FadeInSectionProps) {
  const initial: Record<string, number> = { opacity: 0 }
  if (direction === 'up') initial.y = 24
  if (direction === 'left') initial.x = -24
  if (direction === 'right') initial.x = 24

  const animate: Record<string, number> = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Add hero entrance animation — overwrite src/components/sections/Hero.tsx**

```typescript
'use client'

import { motion } from 'framer-motion'
import StatCounter from '@/components/ui/StatCounter'
import { stats } from '@/data/stats'

const PHONE = '01610667603'
const WHATSAPP_URL = 'https://wa.me/8801610667603'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 },
  }),
}

export default function Hero() {
  return (
    <section className="bg-hero-gradient py-24 px-6 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 48px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 48px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          custom={0}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="section-label text-brand-sky mb-5"
        >
          Expert Tutoring · Dhaka, Bangladesh
        </motion.p>

        <motion.h1
          custom={1}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5"
        >
          Where Science
          <br />
          Meets <span className="text-brand-sky">Success</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Focused coaching for Class 9–12, SSC, HSC & Medical / Engineering
          admission — by expert tutors who know what it takes.
        </motion.p>

        <motion.div
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href={`tel:${PHONE}`}
            className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white justify-center"
          >
            📞 Call Now
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex divide-x divide-white/10 bg-white/8 rounded-2xl overflow-hidden max-w-lg mx-auto backdrop-blur-sm border border-white/10"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add scroll animations to AboutSnapshot — overwrite src/components/sections/AboutSnapshot.tsx**

```typescript
import Link from 'next/link'
import FadeInSection from '@/components/ui/FadeInSection'

export default function AboutSnapshot() {
  return (
    <section className="bg-brand-surface py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeInSection direction="left">
          <p className="section-label mb-3">Who We Are</p>
          <h2 className="section-heading mb-5">
            A Trusted Name in Science Education
          </h2>
          <p className="text-body-gray text-base leading-relaxed mb-6">
            Founded in 2019, Mindscape Academic Point has been helping students in
            Dhaka unlock their potential in science subjects. Our tutors combine deep
            subject expertise with a results-focused approach that prepares students
            for SSC, HSC, and competitive admission tests.
          </p>
          <Link
            href="/about"
            className="text-brand-blue font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Learn more about us →
          </Link>
        </FadeInSection>

        <FadeInSection direction="right" delay={0.15}>
          <div className="bg-gradient-to-br from-brand-border to-blue-50 rounded-3xl h-64 flex items-center justify-center">
            <div className="bg-brand-blue text-white rounded-2xl px-10 py-7 text-center shadow-xl shadow-brand-blue/30">
              <p className="font-display text-5xl font-black">6+</p>
              <p className="text-white/80 text-sm mt-2 font-medium">Years of Excellence</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Add stagger animation to CoursesSection — overwrite src/components/sections/CoursesSection.tsx**

```typescript
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeInSection from '@/components/ui/FadeInSection'
import CourseCard from '@/components/ui/CourseCard'
import { courses, admissionTargets } from '@/data/courses'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function CoursesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <p className="section-label mb-3">What We Teach</p>
          <h2 className="section-heading">Our Courses</h2>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={item}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <FadeInSection delay={0.2}>
          <div className="bg-admission-gradient rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-black text-white mb-1">
                🎯 Admission Test Preparation
              </h3>
              <p className="text-white/65 text-sm">
                Specialised coaching for Medical (MBBS) and Engineering (BUET, CUET,
                RUET) entrance exams.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              {admissionTargets.map((target) => (
                <span
                  key={target.label}
                  className="bg-white/15 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/25"
                >
                  {target.label}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>

        <div className="text-center mt-8">
          <Link href="/courses" className="btn-outline inline-block">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Add stagger to TutorsSection — overwrite src/components/sections/TutorsSection.tsx**

```typescript
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeInSection from '@/components/ui/FadeInSection'
import TutorCard from '@/components/ui/TutorCard'
import { tutors } from '@/data/tutors'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function TutorsSection() {
  return (
    <section className="bg-brand-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <p className="section-label mb-3">The Team</p>
          <h2 className="section-heading">Meet the Tutors</h2>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {tutors.map((tutor) => (
            <motion.div key={tutor.id} variants={item}>
              <TutorCard tutor={tutor} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/about" className="btn-outline inline-block">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Add stagger to TestimonialsSection — overwrite src/components/sections/TestimonialsSection.tsx**

```typescript
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeInSection from '@/components/ui/FadeInSection'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <p className="section-label mb-3">Student Success</p>
          <h2 className="section-heading">Results That Speak</h2>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={item}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/results" className="btn-outline inline-block">
            See All Results
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 7: Add fade to CtaBanner — overwrite src/components/sections/CtaBanner.tsx**

```typescript
import FadeInSection from '@/components/ui/FadeInSection'

const PHONE = '01610667603'
const WHATSAPP_URL = 'https://wa.me/8801610667603'

export default function CtaBanner() {
  return (
    <section className="bg-cta-gradient py-20 px-6 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 24px)',
        }}
      />
      <FadeInSection className="relative z-10 max-w-xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Ready to Start Your
          <br />
          Success Story?
        </h2>
        <p className="text-white/60 text-base mb-10">
          Join hundreds of students who trusted Mindscape to get them where they
          wanted to go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </a>
          <a
            href={`tel:${PHONE}`}
            className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white justify-center"
          >
            📞 Call Now
          </a>
        </div>
      </FadeInSection>
    </section>
  )
}
```

- [ ] **Step 8: Type-check**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 9: Commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add src/components/
git commit -m "feat: add Framer Motion scroll reveals, stagger, and hero entrance animations"
```

---

## Task 10: Final Build Verification

**Files:** None created — verification and fixes only.

- [ ] **Step 1: Run full TypeScript check**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npx tsc --noEmit
```

Expected: Exit code 0, no output. Fix any reported errors before continuing.

- [ ] **Step 2: Run production build**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run build
```

Expected: `✓ Compiled successfully` with all routes listed. Fix any build errors before continuing.

- [ ] **Step 3: Smoke-test all routes against the production build**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
npm run start &
sleep 6
for path in "" about courses results contact learn notes games login dashboard; do
  url="http://localhost:3000/$path"
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$path (${code})"
done
kill %1
```

Expected: All routes print `200`.

- [ ] **Step 4: Check for mobile responsiveness issues**

Start the dev server (`npm run dev`), open http://localhost:3000 in a browser, use DevTools responsive mode at 375px width (iPhone SE). Verify:

- Navbar hamburger menu appears and works
- Hero text is not truncated
- Stats bar wraps cleanly (or scrolls)
- Course cards stack to 1 column
- Tutor cards stack to 1 column
- Testimonial cards stack to 1 column
- Footer stacks vertically

Fix any layout issues with Tailwind responsive classes (`sm:`, `md:`, `lg:`).

- [ ] **Step 5: Final commit**

```bash
cd "/Users/masudurhimel/Documents/Ongoing Projects/mindscape"
git add -A
git commit -m "feat: complete Mindscape Academic Point Phase 1 portfolio site"
```

---

## Post-Build Notes

- **Real content:** Replace mock data in `src/data/` — no component code changes needed.
- **Real photos:** Add tutor photos to `public/tutors/` and set `tutor.photo` in `src/data/tutors.ts`.
- **Domain + deployment:** Run `vercel` from the project root (install once with `npm i -g vercel`).
- **WhatsApp number:** Defined in `Navbar.tsx`, `Hero.tsx`, `CtaBanner.tsx`, `contact/page.tsx`, and `Footer.tsx` — search for `8801610667603` to update all at once.
- **Phone number:** Same pattern — search for `01610667603`.
