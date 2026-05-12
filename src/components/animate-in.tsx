"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
