'use client'

import { useRef } from 'react'
import { Shield, Award, Languages, Ruler } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const trustItems = [
  { icon: Award, label: 'Compagnon du Tour de France', emphasis: true },
  { icon: Shield, label: 'Assurance RC Pro Foyer' },
  { icon: Award, label: 'Certifié Sika Pro' },
  { icon: Shield, label: 'Fédération des Artisans LU' },
  { icon: Languages, label: 'FR · PT · LU · DE' },
  { icon: Ruler, label: "Formats jusqu\u0027à 120×260cm" },
]

export default function HomeTrustBand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="relative bg-brand-900 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

      {/* Subtle grain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="trust-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#trust-grain)" />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                  item.emphasis
                    ? 'bg-accent-500/20 ring-1 ring-accent-500/30'
                    : 'bg-ivory-25/8'
                }`}>
                  <Icon className={`size-4 ${item.emphasis ? 'text-accent-400' : 'text-accent-400/70'}`} />
                </div>
                <span className={`font-body text-[13px] leading-tight ${
                  item.emphasis ? 'text-ivory-100 font-semibold' : 'text-ivory-200/70'
                }`}>
                  {item.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
    </section>
  )
}
