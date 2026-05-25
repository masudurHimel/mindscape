import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Results',
  description:
    'Real results from Mindscape students — GPA 5s, MBBS admissions, BUET qualifiers.',
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

      {/* Highlights */}
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
