export interface Stat {
  value: string
  label: string
}

export interface Course {
  id: string
  title: string
  icon: string
  tags: string[]
}

export interface Tutor {
  id: string
  name: string
  initials: string
  subjects: string[]
  bio: string
  photo?: string
}

export interface Testimonial {
  id: string
  quote: string
  studentName: string
  studentInitials: string
  result: string
}
