'use client'

import Link from 'next/link'
import { useRef, useCallback } from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

function MagneticWrap({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 240, damping: 18 })
  const springY = useSpring(y, { stiffness: 240, damping: 18 })

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      x.set((e.clientX - rect.left - rect.width / 2) * 0.18)
      y.set((e.clientY - rect.top - rect.height / 2) * 0.18)
    },
    [x, y]
  )

  const reset = useCallback(() => { x.set(0); y.set(0) }, [x, y])

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} onMouseMove={handleMouse} onMouseLeave={reset} className="inline-block">
      {children}
    </motion.div>
  )
}

export default function HomeCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-brand-900 overflow-hidden">
      {/* Atmosphere */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cta-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#cta-grain)" />
      </svg>

      {/* Gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,150,90,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <motion.div
            className="md:col-span-7 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-[2rem] md:text-[3rem] leading-[1.1] tracking-tight text-ivory-25">
              <span className="font-normal">Parlons de</span>{' '}
              <span className="font-bold relative inline-block">
                votre sol
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-500 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <span className="italic font-normal text-accent-400">.</span>
            </h2>
            <p className="font-body text-lg text-ivory-200/75 max-w-lg leading-[1.7]">
              Fran&ccedil;ois d&eacute;croche en personne. D&eacute;crivez votre projet, recevez un retour sous 48h avec calepinage et chiffrage d&eacute;taill&eacute;.
            </p>
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            className="md:col-span-4 md:col-start-9 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticWrap>
              <Button
                asChild
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold rounded-xl h-14 px-8 text-base shadow-[0_4px_20px_rgba(196,150,90,0.25)] hover:shadow-[0_6px_28px_rgba(196,150,90,0.35)] transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  D&eacute;crire mon projet <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MagneticWrap>

            <a
              href="tel:+35226548875"
              className="flex items-center justify-center gap-3 w-full h-14 rounded-xl border border-ivory-200/20 text-ivory-100 hover:bg-ivory-25/8 hover:border-ivory-200/35 font-body font-semibold text-base transition-all duration-300"
            >
              <Phone className="size-4" />
              +352 26 54 88 75
            </a>

            <p className="text-center font-body text-xs text-ivory-200/40 pt-1">
              Lun-Ven 7h-17h30 &middot; Sam 7h-12h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
