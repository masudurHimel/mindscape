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
