import type { Testimonial } from '@/data/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-2xl p-6">
      <p className="text-gray-600 text-sm leading-relaxed italic mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-border flex items-center justify-center flex-shrink-0" aria-hidden="true">
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
