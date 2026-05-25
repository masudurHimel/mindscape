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

      {/* Core subjects */}
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
                  key={target}
                  className="bg-white/15 text-white text-sm font-bold px-6 py-3 rounded-full border border-white/25"
                >
                  {target}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
