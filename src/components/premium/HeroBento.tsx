"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useCallback } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion"
import { ArrowRight, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoCard } from "./BentoGrid"

/* ═══════════════════════════════════════════
   MAGNETIC CTA
   ═══════════════════════════════════════════ */

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
  const springX = useSpring(x, { stiffness: 220, damping: 16 })
  const springY = useSpring(y, { stiffness: 220, damping: 16 })

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      x.set((e.clientX - rect.left - rect.width / 2) * 0.22)
      y.set((e.clientY - rect.top - rect.height / 2) * 0.22)
    },
    [x, y]
  )

  const reset = useCallback(() => { x.set(0); y.set(0) }, [x, y])

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

/* ═══════════════════════════════════════════
   STAT COUNTER
   ═══════════════════════════════════════════ */

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <motion.p
        className="font-heading text-3xl md:text-4xl font-bold text-accent-500"
        initial={{ scale: 0.85 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.p>
      <p className="font-body text-sm text-brand-600 mt-1">{label}</p>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════
   SVG TILE PATTERN — subtle calepinage
   ═══════════════════════════════════════════ */

function TilePattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-tile" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="30" height="30" fill="none" stroke="#F0E6D3" strokeWidth="0.5" rx="1" />
          <rect x="33" y="1" width="30" height="30" fill="none" stroke="#F0E6D3" strokeWidth="0.5" rx="1" />
          <rect x="1" y="33" width="30" height="30" fill="none" stroke="#F0E6D3" strokeWidth="0.5" rx="1" />
          <rect x="33" y="33" width="30" height="30" fill="none" stroke="#F0E6D3" strokeWidth="0.5" rx="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-tile)" />
    </svg>
  )
}

/* ═══════════════════════════════════════════
   GRAIN NOISE OVERLAY
   ═══════════════════════════════════════════ */

function GrainOverlay() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay pointer-events-none hidden md:block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  )
}

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const galleryImages = [
  {
    src: "photo-1600607687939-ce8a6c349979",
    alt: "Marbre Calacatta Oro \u2014 calepinage diagonal avec book matching",
    label: "Marbre Calacatta",
  },
  {
    src: "photo-1600607688969-a5bfcd646154",
    alt: "Salle de bain compl\u00e8te \u2014 fa\u00efence Porcelanosa et mosa\u00efque verre",
    label: "Salle de bain Bertrange",
  },
  {
    src: "photo-1562259949-e8e7689d7828",
    alt: "Parquet carrel\u00e9 chevron \u2014 z\u00e9ro lippage, joints tabac",
    label: "Chevron gr\u00e8s c\u00e9rame",
  },
  {
    src: "photo-1600585154340-be6161a56a0c",
    alt: "Travertin roman bouch\u00e9 \u2014 format 120x60cm",
    label: "Travertin roman",
  },
]

const trustBadges = ["Garantie d\u00e9cennale", "Retour sous 48h", "4 langues"]

/* ═══════════════════════════════════════════
   HERO BENTO
   ═══════════════════════════════════════════ */

interface HeroBentoProps {
  stats: { value: string; label: string }[]
}

export function HeroBento({ stats }: HeroBentoProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const galleryY = useTransform(scrollYProgress, [0, 1], ["0%", "4%"])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-brand-900 text-ivory-25 overflow-hidden"
      >
        {/* Atmosphere layers */}
        <TilePattern />
        <GrainOverlay />

        {/* Radial gradient mesh — light point on text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 25% 40%, rgba(196,150,90,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(61,43,31,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-900/97 to-brand-800/92" />

        <div className="relative max-w-[1440px] mx-auto px-6 pt-16 md:pt-24 lg:pt-28 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* ── Text column (5 cols) ── */}
            <motion.div
              className="lg:col-span-5 space-y-7 lg:sticky lg:top-32"
              style={{ y: textY }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Overline */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <motion.span
                  className="h-[1px] bg-accent-500/50"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <p className="text-accent-400 font-body font-semibold text-xs tracking-[0.2em] uppercase">
                  Compagnon du Tour de France &middot; Mersch
                </p>
              </motion.div>

              {/* H1 — tension typographique */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] tracking-tight leading-[1.06]"
              >
                <span className="font-normal">Chaque pierre a</span>{" "}
                <span className="relative inline-block font-bold">
                  son protocole
                  <motion.span
                    className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-accent-500 origin-left rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
                  />
                </span>
                .
                <br />
                <span className="text-accent-400 italic font-normal">Chaque sol, son artisan.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={itemVariants}
                className="font-body text-lg text-ivory-100/85 max-w-[540px] leading-[1.7]"
              >
                Marbre, travertin, gr&egrave;s c&eacute;rame &mdash; Fran&ccedil;ois
                Rodrigues pose chaque carreau avec la rigueur d&apos;un Compagnon et la
                passion d&apos;un artisan. 25&nbsp;ans de chantiers, pas un carreau sonnant
                creux.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-1">
                <MagneticCTA
                  href="/contact"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold rounded-xl h-14 px-8 text-base shadow-[0_4px_20px_rgba(196,150,90,0.25)] hover:shadow-[0_6px_28px_rgba(196,150,90,0.35)] transition-all duration-300"
                >
                  D\u00e9crire mon projet
                  <ArrowRight className="size-4 ml-2" />
                </MagneticCTA>
                <MagneticCTA
                  href="/realisations"
                  className="bg-transparent border border-ivory-200/20 text-ivory-100 hover:bg-ivory-25/8 hover:border-ivory-200/40 font-body font-semibold rounded-xl h-14 px-8 text-base backdrop-blur-sm transition-all duration-300"
                >
                  Parcourir les chantiers
                </MagneticCTA>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-2">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-2 text-sm text-ivory-200/70 font-body"
                  >
                    <CheckCircle className="size-3.5 text-accent-400/80 flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Bento gallery column (7 cols) ── */}
            <motion.div className="lg:col-span-7" style={{ y: galleryY }}>
              <BentoGrid className="md:grid-cols-3 md:grid-rows-2 h-auto md:h-[520px] lg:h-[580px]">
                {/* Cell 1: large featured — 2 cols, 2 rows */}
                <BentoCard className="md:col-span-2 md:row-span-2 min-h-[280px]">
                  <Image
                    src={`https://images.unsplash.com/${galleryImages[0].src}?auto=format&fit=crop&q=80&w=800&h=600`}
                    alt={galleryImages[0].alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <span className="inline-block bg-accent-500/85 backdrop-blur-sm text-white font-body font-semibold text-[11px] tracking-wide px-3 py-1 rounded-full mb-2 uppercase">
                      R&eacute;alisation phare
                    </span>
                    <p className="font-heading text-lg md:text-xl font-bold text-white">
                      {galleryImages[0].label}
                    </p>
                  </div>
                  {/* Compagnon floating badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_32px_rgba(61,43,31,0.18)] p-3 flex items-center gap-2.5 z-10"
                    initial={{ opacity: 0, y: -12, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <div className="bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg p-2 shadow-[0_4px_12px_rgba(196,150,90,0.3)]">
                      <Award className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-brand-900 text-xs leading-tight">
                        Compagnon du Tour
                      </p>
                      <p className="font-body text-[10px] text-brand-500">depuis 2001</p>
                    </div>
                  </motion.div>
                </BentoCard>

                {/* Cell 2: top-right */}
                <BentoCard className="min-h-[140px]">
                  <Image
                    src={`https://images.unsplash.com/${galleryImages[1].src}?auto=format&fit=crop&q=80&w=400&h=300`}
                    alt={galleryImages[1].alt}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/55 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-body font-semibold text-white text-xs z-10">
                    {galleryImages[1].label}
                  </p>
                </BentoCard>

                {/* Cell 3: bottom-right */}
                <BentoCard className="min-h-[140px]">
                  <Image
                    src={`https://images.unsplash.com/${galleryImages[2].src}?auto=format&fit=crop&q=80&w=400&h=300`}
                    alt={galleryImages[2].alt}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/55 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-body font-semibold text-white text-xs z-10">
                    {galleryImages[2].label}
                  </p>
                </BentoCard>
              </BentoGrid>

              {/* Asymmetric offset image below */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                className="hidden md:block mt-4 ml-auto w-2/3 h-[160px] relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src={`https://images.unsplash.com/${galleryImages[3].src}?auto=format&fit=crop&q=80&w=600&h=200`}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-900/50 to-transparent" />
                <p className="absolute bottom-3 left-4 font-body font-semibold text-white text-xs">
                  {galleryImages[3].label}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-ivory-25 border-b border-ivory-200 relative -mt-1">
        <div className="max-w-[1280px] mx-auto px-6 py-14">
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
