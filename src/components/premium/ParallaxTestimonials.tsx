"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star } from "lucide-react"

interface Testimonial {
  author: string
  location: string
  text: string
  project: string
  rating: number
}

interface ParallaxTestimonialsProps {
  testimonials: Testimonial[]
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-shrink-0 w-[340px] md:w-[420px]"
    >
      <div className="relative bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(61,43,31,0.08)] border border-ivory-200 hover:shadow-[0_8px_40px_rgba(61,43,31,0.12)] transition-shadow duration-500">
        {/* Giant quote mark */}
        <span className="absolute -top-4 -left-2 text-[120px] leading-none font-heading text-accent-300/30 select-none pointer-events-none">
          &ldquo;
        </span>

        <div className="flex gap-0.5 mb-4 relative z-10">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="size-4 fill-accent-500 text-accent-500" />
          ))}
        </div>

        <p className="font-heading text-brand-800 text-base md:text-lg leading-relaxed italic relative z-10">
          {t.text}
        </p>

        <div className="mt-6 pt-4 border-t border-ivory-200 flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center text-ivory-25 font-heading font-bold text-sm">
            {t.author.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-body font-semibold text-brand-900 text-sm">{t.author}</p>
            <p className="font-body text-xs text-brand-500">{t.location} &middot; {t.project}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ParallaxTestimonials({ testimonials }: ParallaxTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax background with texture */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[15%] -bottom-[15%] bg-brand-900"
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* Header with asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-5">
            <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Du showroom au chantier, c&apos;est le m&ecirc;me homme
            </p>
            <h2 className="font-heading text-3xl md:text-[3.25rem] md:leading-[1.1] font-bold text-ivory-25 tracking-tight">
              Kirchberg, Bertrange,
              <br />
              <span className="text-accent-400 italic">Ettelbruck &mdash; ils racontent</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <p className="font-body text-ivory-200/70 text-base max-w-md">
              Chaque t&eacute;moignage cite le mat&eacute;riau, la technique, le r&eacute;sultat.
              Parce qu&apos;un avis pr&eacute;cis vaut mille &laquo;&nbsp;je recommande&nbsp;&raquo;.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
