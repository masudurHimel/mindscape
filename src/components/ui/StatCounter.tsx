'use client'

import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

interface StatCounterProps {
  value: string
  label: string
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  const numericPart = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/\d/g, '')
  const isYear = !suffix && numericPart > 2000

  useEffect(() => {
    if (!isInView || !ref.current) return
    if (isYear) {
      if (ref.current) ref.current.textContent = value
      return
    }
    const controls = animate(0, numericPart, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest) + suffix
        }
      },
    })
    return () => controls.stop()
  }, [isInView, numericPart, suffix, isYear, value])

  return (
    <div className="text-center flex-1 py-4 px-3">
      <span
        ref={ref}
        className="font-display text-2xl md:text-3xl font-black text-white block"
      >
        {value}
      </span>
      <span className="text-white/50 text-xs mt-1 block">{label}</span>
    </div>
  )
}
