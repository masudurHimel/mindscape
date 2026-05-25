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
      <p className="text-brand-blue text-sm font-semibold mb-3">
        {tutor.subjects.join(', ')}
      </p>
      <p className="text-body-gray text-sm leading-relaxed whitespace-pre-line">{tutor.bio}</p>
    </div>
  )
}
