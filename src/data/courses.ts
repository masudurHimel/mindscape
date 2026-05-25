import type { Course } from './types'

export const courses: Course[] = [
  {
    id: 'physics',
    title: 'Physics',
    icon: '⚛️',
    tags: ['SSC', 'HSC', 'Admission'],
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    icon: '⚗️',
    tags: ['SSC', 'HSC', 'Admission'],
  },
  {
    id: 'biology',
    title: 'Biology',
    icon: '🧬',
    tags: ['SSC', 'HSC', 'Medical Prep'],
  },
  {
    id: 'math',
    title: 'Higher Math',
    icon: '📐',
    tags: ['SSC', 'HSC', 'Engg. Prep'],
  },
]

export const admissionTargets: string[] = ['MBBS', 'BUET', 'CUET', 'RUET']
