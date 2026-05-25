import type { Course } from '@/data/types'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card-base p-6 hover:shadow-lg hover:shadow-brand-blue/10 transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
        {course.icon}
      </div>
      <h3 className="font-display text-lg font-bold text-navy-dark mb-3">
        {course.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-50 text-brand-blue text-xs font-bold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
