"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ScrollItem {
  title: string
  category: string
  area: string
  desc: string
  image: string
}

interface StickyScrollRevealProps {
  items: ScrollItem[]
}

function ScrollCard({
  item,
  index,
  progress,
  total,
}: {
  item: ScrollItem
  index: number
  progress: import('framer-motion').MotionValue<number>
  total: number
}) {
  const start = index / total
  const end = (index + 1) / total

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0])
  const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.92, 1, 1, 0.92])

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full rounded-[16px] overflow-hidden shadow-hero">
        <Image
          src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&q=80&w=800&h=600`}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block bg-accent-500 text-white font-body font-semibold text-xs px-3 py-1 rounded-full mb-2">
            {item.category} &middot; {item.area}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export function StickyScrollReveal({ items }: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={containerRef} className="relative bg-ivory-25" style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full h-[80%]">
            {/* Left: sticky text descriptions */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {items.map((item, i) => {
                const start = i / items.length
                const end = (i + 1) / items.length
                return (
                  <ScrollTextBlock
                    key={i}
                    item={item}
                    index={i}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                )
              })}
            </div>

            {/* Right: image reveal */}
            <div className="lg:col-span-7 relative hidden lg:block">
              {items.map((item, i) => (
                <ScrollCard
                  key={i}
                  item={item}
                  index={i}
                  progress={scrollYProgress}
                  total={items.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ScrollTextBlock({
  item,
  index,
  progress,
  start,
  end,
}: {
  item: ScrollItem
  index: number
  progress: import('framer-motion').MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0])
  const y = useTransform(progress, [start, start + 0.05, end - 0.05, end], [40, 0, 0, -40])

  return (
    <motion.div style={{ opacity, y }} className="absolute max-w-md">
      <span className="font-body font-semibold text-accent-500 text-sm tracking-[0.15em] uppercase">
        {String(index + 1).padStart(2, "0")} / {String(8).padStart(2, "0")}
      </span>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mt-3 tracking-tight">
        {item.title}
      </h3>
      <p className="font-body text-brand-600 text-base leading-relaxed mt-4">
        {item.desc}
      </p>

      {/* Mobile image */}
      <div className="lg:hidden mt-6 relative aspect-[16/9] rounded-[12px] overflow-hidden shadow-card-hover">
        <Image
          src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&q=80&w=600&h=340`}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
}
