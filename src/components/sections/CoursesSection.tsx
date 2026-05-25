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
                Admission Test Preparation
              </h3>
              <p className="text-white/65 text-sm">
                Specialised coaching for Medical (MBBS) and Engineering (BUET, CUET,
                RUET) entrance exams.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              {admissionTargets.map((target) => (
                <span
                  key={target}
                  className="bg-white/15 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/25"
                >
                  {target}
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
