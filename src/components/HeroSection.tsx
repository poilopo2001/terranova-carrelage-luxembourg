'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from 'framer-motion'
import { useRef, useCallback } from 'react'

/* ─── Magnetic CTA ─── */
function MagneticCTA({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      x.set((e.clientX - rect.left - rect.width / 2) * 0.2)
      y.set((e.clientY - rect.top - rect.height / 2) * 0.2)
    },
    [x, y]
  )

  const reset = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      <Button asChild className={className}>
        <Link href={href}>{children}</Link>
      </Button>
    </motion.div>
  )
}

/* ─── Animated stat counter ─── */
function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.p
        className="font-heading text-3xl md:text-4xl font-bold text-accent-500"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: 'spring', stiffness: 200 }}
      >
        {value}
      </motion.p>
      <p className="font-body text-sm text-brand-600 mt-1">{label}</p>
    </motion.div>
  )
}

/* ─── Tile grid pattern (SVG) ─── */
function TilePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="tile" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="38" height="38" fill="#F0E6D3" rx="2" />
          <rect x="42" y="0" width="38" height="38" fill="#F0E6D3" rx="2" />
          <rect x="0" y="42" width="38" height="38" fill="#F0E6D3" rx="2" />
          <rect x="42" y="42" width="38" height="38" fill="#F0E6D3" rx="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tile)" />
    </svg>
  )
}

const stats = [
  { value: '25', label: 'ans de métier' },
  { value: '2\ 800+', label: 'chantiers réalisés' },
  { value: '4', label: 'langues parlées' },
  { value: '10', label: 'ans de garantie' },
]

const trustBadges = [
  'Garantie décennale',
  'Retour sous 48h',
  '4 langues',
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6])
  const badgeScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0.9]),
    { stiffness: 100, damping: 20 }
  )

  // Stagger text animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={sectionRef} className="relative bg-brand-900 text-ivory-25 overflow-hidden">
        <TilePattern />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-900/95 to-brand-800/90" />

        <div className="relative max-w-[1280px] mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* ── Text Column ── */}
            <motion.div
              className="lg:col-span-7 space-y-7"
              style={{ y: textY }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Overline */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-accent-500/60" />
                <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase">
                  Compagnon du Tour de France &middot; Mersch
                </p>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-4xl md:text-5xl lg:text-display-1 tracking-tight leading-[1.1]"
              >
                Chaque pierre a{' '}
                <span className="relative inline-block">
                  son protocole
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
                .
                <br />
                <span className="text-accent-400">Chaque sol, son artisan.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={itemVariants}
                className="font-body text-lg md:text-xl text-ivory-100/90 max-w-[640px] leading-relaxed"
              >
                Marbre, travertin, grès cérame — François Rodrigues pose chaque
                carreau avec la rigueur d&apos;un Compagnon et la passion d&apos;un artisan.
                25&nbsp;ans de chantiers, pas un carreau sonnant creux.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <MagneticCTA
                  href="/contact"
                  className="bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-lg h-14 px-8 text-base shadow-[0_4px_20px_rgba(196,150,90,0.3)] hover:shadow-[0_6px_28px_rgba(196,150,90,0.4)] transition-all duration-300"
                >
                  Décrire mon projet
                  <ArrowRight className="size-4 ml-2" />
                </MagneticCTA>
                <MagneticCTA
                  href="/realisations"
                  className="bg-transparent border-2 border-ivory-200/30 text-ivory-100 hover:bg-ivory-25/10 hover:border-ivory-200/50 font-body font-semibold rounded-lg h-14 px-8 text-base backdrop-blur-sm transition-all duration-300"
                >
                  Parcourir les chantiers
                </MagneticCTA>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-5 pt-3"
              >
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-2 text-sm text-ivory-200/80 font-body"
                  >
                    <CheckCircle className="size-4 text-accent-400 flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Image Column ── */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                className="aspect-[3/4] relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Decorative frame */}
                <motion.div
                  className="absolute -inset-3 border border-accent-500/20 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                />

                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(61,43,31,0.3)]"
                  style={{ y: imageY }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c349979?auto=format&fit=crop&q=80&w=800&h=1066"
                    alt="Pose de pierre naturelle par Terranova Carrelage Luxembourg"
                    fill
                    className="object-cover scale-[1.1]"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-brand-900/10 to-transparent"
                    style={{ opacity: overlayOpacity }}
                  />
                </motion.div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-[0_8px_32px_rgba(61,43,31,0.15)] p-4 flex items-center gap-3"
                style={{ scale: badgeScale }}
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl p-2.5 shadow-[0_4px_12px_rgba(196,150,90,0.3)]">
                  <Award className="size-5 text-white" />
                </div>
                <div>
                  <p className="font-body font-semibold text-brand-900 text-sm leading-tight">
                    Compagnon du Tour
                  </p>
                  <p className="font-body text-xs text-brand-500">de France depuis 2001</p>
                </div>
              </motion.div>

              {/* Small floating accent */}
              <motion.div
                className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-accent-500/10 backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, type: 'spring' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade into stats */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-ivory-25 border-b border-ivory-200 relative -mt-1">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
