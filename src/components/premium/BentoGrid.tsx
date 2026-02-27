"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-3 md:gap-4",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface BentoCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export function BentoCard({ children, className, index = 0 }: BentoCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={cn(
        "relative overflow-hidden rounded-[12px] group",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
