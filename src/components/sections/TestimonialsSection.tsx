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
