import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TutorCard from '@/components/ui/TutorCard'
import { tutors } from '@/data/tutors'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Mindscape Academic Point — our story, mission, and the expert tutors behind our students\' results.',
}

const aboutStats = [
  { value: '2019', label: 'Founded' },
  { value: '500+', label: 'Students' },
  { value: '95%', label: 'GPA 5 Rate' },
  { value: '3', label: 'Expert Tutors' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About Mindscape"
        subtitle="Six years of helping science students achieve their best."
      />

      {/* Mission */}
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

      {/* Stats */}
      <section className="bg-white py-12 px-6 border-y border-brand-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-black text-brand-blue">{stat.value}</p>
              <p className="text-body-gray text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tutors */}
      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">The Team</p>
            <h2 className="section-heading">Meet the Tutors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
