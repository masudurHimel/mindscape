'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function FadeInSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: FadeInSectionProps) {
  const initial: Record<string, number> = { opacity: 0 }
  if (direction === 'up') initial.y = 24
  if (direction === 'left') initial.x = -24
  if (direction === 'right') initial.x = 24

  const animate: Record<string, number> = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
