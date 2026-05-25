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
