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
