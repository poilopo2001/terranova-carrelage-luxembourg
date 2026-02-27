'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Euro,
  Shield,
  Quote,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaOrg from '@/components/SchemaOrg'

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  benefits: string[]
  process: string[]
  guarantees: string[]
  priceRange: string
  duration: string
  breadcrumb: { label: string; href?: string }[]
  relatedServices?: { label: string; href: string }[]
  schema: Record<string, unknown>
  children?: React.ReactNode
}

/* ═══════════════════════════════════════════
   ANIMATION CONSTANTS
   ═══════════════════════════════════════════ */

const ease = [0.16, 1, 0.3, 1] as const
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

/* ═══════════════════════════════════════════
   REUSABLE SECTION HEADER — asymmetric 7/5
   ═══════════════════════════════════════════ */

function SectionHeader({
  number,
  label,
  title,
  titleAccent,
  description,
  dark = false,
}: {
  number: string
  label: string
  title: string
  titleAccent?: string
  description?: string
  dark?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16">
      <motion.div
        className="md:col-span-7"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.7, ease }}
      >
        <p className={`font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 ${dark ? 'text-accent-400' : 'text-accent-500'}`}>
          {label}
        </p>
        <h2 className={`font-heading text-[1.75rem] md:text-[2.5rem] leading-[1.15] tracking-tight ${dark ? 'text-ivory-25' : 'text-brand-900'}`}>
          <span className="font-normal">{title}</span>
          {titleAccent && (
            <>
              {' '}
              <span className="font-bold relative inline-block">
                {titleAccent}
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${dark ? 'bg-accent-400' : 'bg-accent-500'}`} />
              </span>
              <span className={`italic font-normal ${dark ? 'text-accent-400' : 'text-accent-500'}`}>.</span>
            </>
          )}
        </h2>
      </motion.div>
      {description && (
        <motion.div
          className="md:col-span-4 md:col-start-9 flex items-end"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ delay: 0.15, duration: 0.6, ease }}
        >
          <p className={`font-body text-[15px] leading-[1.7] ${dark ? 'text-ivory-200/70' : 'text-brand-600'}`}>
            {description}
          </p>
        </motion.div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════
   GRAIN OVERLAY (reusable)
   ═══════════════════════════════════════════ */

function GrainOverlay({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  )
}

/* ═══════════════════════════════════════════
   GRADIENT DIVIDER
   ═══════════════════════════════════════════ */

function GradientDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
}

/* ═══════════════════════════════════════════
   MAIN LAYOUT
   ═══════════════════════════════════════════ */

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  benefits,
  process,
  guarantees,
  priceRange,
  duration,
  breadcrumb,
  relatedServices,
  schema,
  children,
}: ServicePageLayoutProps) {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-60px' })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-60px' })
  const guaranteesRef = useRef(null)
  const guaranteesInView = useInView(guaranteesRef, { once: true, margin: '-60px' })
  const quoteRef = useRef(null)
  const quoteInView = useInView(quoteRef, { once: true, margin: '-60px' })
  const relatedRef = useRef(null)
  const relatedInView = useInView(relatedRef, { once: true, margin: '-60px' })

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative bg-brand-900 text-ivory-25 pt-28 pb-12 md:pt-36 md:pb-20 px-6 overflow-hidden">
        <GrainOverlay id="svc-hero-grain" />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(196,150,90,0.06) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="mb-6">
            <Breadcrumb items={breadcrumb} variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left column — text */}
            <motion.div
              className="lg:col-span-7 space-y-5"
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
            >
              <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase">
                {subtitle}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1]">
                {title}
              </h1>
              <p className="font-body text-lg text-ivory-100/85 max-w-[640px] leading-relaxed">
                {description}
              </p>

              {/* Price & Duration — accent cards */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="flex items-center gap-2.5 bg-accent-500/10 border border-accent-500/20 rounded-xl px-4 py-2.5">
                  <Euro className="size-4 text-accent-400" />
                  <span className="font-body text-sm font-semibold text-accent-300">{priceRange}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-ivory-25/5 border border-ivory-200/15 rounded-xl px-4 py-2.5">
                  <Clock className="size-4 text-ivory-200/60" />
                  <span className="font-body text-sm text-ivory-200/70">{duration}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold rounded-xl h-12 px-8 shadow-[0_4px_20px_rgba(196,150,90,0.25)] hover:shadow-[0_6px_28px_rgba(196,150,90,0.35)] transition-all duration-300"
                >
                  <Link href="/contact">
                    Discuter du projet <ArrowRight className="size-4 ml-1" />
                  </Link>
                </Button>
                <a
                  href="tel:+35226548875"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-body font-semibold border border-ivory-200/20 text-ivory-100 hover:bg-ivory-25/8 hover:border-ivory-200/35 transition-all duration-300"
                >
                  <Phone className="size-4" /> +352 26 54 88 75
                </a>
              </div>
            </motion.div>

            {/* Right column — image (visible on all screens) */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.4)]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent" />

                {/* Corner brackets — editorial motif */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent-500/40 rounded-tl-sm" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent-500/40 rounded-br-sm" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
      </section>

      {/* ─── 01 — BENEFITS ─── */}
      <section ref={benefitsRef} className="relative bg-ivory-25 py-20 md:py-28 px-6 overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-8 right-0 font-heading text-[10rem] md:text-[16rem] font-bold text-brand-900/[0.02] leading-none select-none pointer-events-none tracking-tighter" aria-hidden="true">
          01
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <SectionHeader
            number="01"
            label="Savoir-faire Compagnon"
            title="La rigueur du geste,"
            titleAccent="concr&egrave;tement"
          />

          {/* Benefits grid — asymmetric with offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease }}
                className={i % 3 === 1 ? 'md:mt-6' : ''}
              >
                <div className="group relative h-full bg-white border border-ivory-200/80 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_36px_rgba(61,43,31,0.08)] hover:-translate-y-0.5">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-accent-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />

                  {/* Number watermark */}
                  <span className="absolute -top-2 -right-1 font-heading text-[4rem] font-bold text-brand-900/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-900 transition-colors duration-400">
                      <CheckCircle className="size-5 text-accent-500 group-hover:text-accent-400 transition-colors duration-400" />
                    </div>
                    <p className="font-body text-[15px] text-brand-800 leading-[1.65] pt-2">
                      {benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* ─── 02 — PROCESS / TIMELINE ─── */}
      <section ref={processRef} className="relative bg-brand-900 text-ivory-25 py-20 md:py-28 px-6 overflow-hidden">
        <GrainOverlay id="svc-process-grain" />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(196,150,90,0.04) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Watermark */}
        <div className="absolute bottom-4 left-0 font-heading text-[10rem] md:text-[16rem] font-bold text-ivory-25/[0.02] leading-none select-none pointer-events-none tracking-tighter" aria-hidden="true">
          02
        </div>

        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <SectionHeader
            number="02"
            label={`${process.length} &eacute;tapes v&eacute;rifi&eacute;es`}
            title="Du contr&ocirc;le du support"
            titleAccent="au nettoyage final"
            dark
          />

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-accent-500/20 to-transparent" aria-hidden="true" />

            <div className="space-y-6 md:space-y-8">
              {process.map((step, i) => {
                const isLeft = i % 2 === 0
                const cleanStep = step.replace(/^\d+\.\s*/, '')
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Step number node */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center font-body font-bold text-sm shadow-[0_0_16px_rgba(196,150,90,0.3)] md:absolute md:left-1/2 md:-translate-x-1/2">
                      {i + 1}
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <div className="bg-ivory-25/[0.04] backdrop-blur-sm border border-ivory-200/10 rounded-xl p-5 hover:border-accent-500/25 transition-colors duration-300">
                        <p className="font-body text-[15px] text-ivory-100/85 leading-relaxed">
                          {cleanStep}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      </section>

      {/* ─── QUOTE BREAK ─── */}
      <section ref={quoteRef} className="relative bg-ivory-100 py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={quoteInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.8, ease }}
          >
            <Quote className="size-10 text-accent-500/30 mx-auto mb-6" aria-hidden="true" />
            <blockquote className="font-heading text-xl md:text-2xl lg:text-[1.75rem] leading-[1.5] text-brand-900 italic">
              &laquo;&nbsp;Avant de poser le premier carreau, on v&eacute;rifie la plan&eacute;it&eacute; au r&eacute;glet de 2&nbsp;m&egrave;tres. Si la chape n&apos;est pas pr&ecirc;te, on ragr&eacute;age. Pas de raccourci.&nbsp;&raquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-px bg-accent-500/40" aria-hidden="true" />
              <p className="font-body text-sm text-brand-600 font-semibold">
                Fran&ccedil;ois Rodrigues
              </p>
              <span className="font-body text-xs text-brand-400">
                Compagnon du Tour de France
              </span>
              <div className="w-10 h-px bg-accent-500/40" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INLINE CTA ─── */}
      <section className="relative bg-brand-900 overflow-hidden">
        <GrainOverlay id="svc-cta-grain" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,150,90,0.05) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-ivory-25 tracking-tight">
                Ce service vous int&eacute;resse&nbsp;?
              </h2>
              <p className="font-body text-ivory-200/70 mt-2 max-w-md leading-relaxed">
                D&eacute;crivez votre projet &agrave; Fran&ccedil;ois. Retour personnalis&eacute; sous 48h avec calepinage.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col sm:flex-row md:flex-col gap-3">
              <Button
                asChild
                className="bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold rounded-xl h-12 px-8 shadow-[0_4px_20px_rgba(196,150,90,0.25)] hover:shadow-[0_6px_28px_rgba(196,150,90,0.35)] transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  D&eacute;crire mon projet <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href="tel:+35226548875"
                className="flex items-center justify-center gap-2 h-12 rounded-xl border border-ivory-200/20 text-ivory-100 hover:bg-ivory-25/8 hover:border-ivory-200/35 font-body font-semibold transition-all duration-300"
              >
                <Phone className="size-4" /> +352 26 54 88 75
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      </section>

      {/* ─── 03 — GUARANTEES ─── */}
      <section ref={guaranteesRef} className="relative bg-ivory-25 py-20 md:py-28 px-6 overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-8 right-0 font-heading text-[10rem] md:text-[16rem] font-bold text-brand-900/[0.02] leading-none select-none pointer-events-none tracking-tighter" aria-hidden="true">
          03
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <SectionHeader
            number="03"
            label="Engagements Terranova"
            title="Nos garanties,"
            titleAccent="par &eacute;crit"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guarantees.map((guarantee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={guaranteesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
              >
                <div className="group relative h-full bg-white border-2 border-accent-500/15 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-accent-500/40 hover:shadow-[0_8px_32px_rgba(196,150,90,0.1)]">
                  {/* Shield badge top-right */}
                  <div className="absolute -top-px -right-px w-16 h-16 overflow-hidden" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-[90px] h-[90px] rotate-45 translate-x-[45px] -translate-y-[45px] bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors duration-400" />
                  </div>

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 group-hover:border-accent-500 transition-all duration-400">
                      <Shield className="size-5 text-accent-500 group-hover:text-white transition-colors duration-400" />
                    </div>
                    <div className="pt-1.5">
                      <p className="font-body text-[15px] text-brand-800 leading-[1.65] font-medium">
                        {guarantee}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ─── 04 — RELATED SERVICES ─── */}
      {relatedServices && relatedServices.length > 0 && (
        <section ref={relatedRef} className="relative bg-ivory-100 py-16 md:py-24 px-6 overflow-hidden">
          {/* Watermark */}
          <div className="absolute bottom-4 left-0 font-heading text-[10rem] md:text-[16rem] font-bold text-brand-900/[0.02] leading-none select-none pointer-events-none tracking-tighter" aria-hidden="true">
            04
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto">
            <SectionHeader
              number="04"
              label="Services compl&eacute;mentaires"
              title="Dans le m&ecirc;me"
              titleAccent="registre"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((service, i) => (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 25 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
                >
                  <Link href={service.href} className="group block">
                    <div className="relative bg-white border border-ivory-200/80 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_36px_rgba(61,43,31,0.08)] hover:-translate-y-0.5">
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />

                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-lg font-bold text-brand-900 group-hover:text-accent-500 transition-colors duration-300 tracking-tight">
                          {service.label}
                        </h3>
                        <ArrowRight className="size-4 text-brand-400/0 group-hover:text-accent-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FINAL CTA ─── */}
      <section className="relative bg-brand-900 overflow-hidden">
        <GrainOverlay id="svc-final-grain" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,150,90,0.05) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              className="md:col-span-7 space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="font-heading text-[2rem] md:text-[3rem] leading-[1.1] tracking-tight text-ivory-25">
                <span className="font-normal">Parlons de</span>{' '}
                <span className="font-bold relative inline-block">
                  votre projet
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-500 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease }}
                  />
                </span>
                <span className="italic font-normal text-accent-400">.</span>
              </h2>
              <p className="font-body text-lg text-ivory-200/75 max-w-lg leading-[1.7]">
                Fran&ccedil;ois d&eacute;croche en personne. D&eacute;crivez votre chantier, recevez un retour sous 48h avec calepinage et chiffrage d&eacute;taill&eacute;.
              </p>
            </motion.div>

            <motion.div
              className="md:col-span-4 md:col-start-9 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.6, ease }}
            >
              <Button
                asChild
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold rounded-xl h-14 px-8 text-base shadow-[0_4px_20px_rgba(196,150,90,0.25)] hover:shadow-[0_6px_28px_rgba(196,150,90,0.35)] transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  D&eacute;crire mon projet <ArrowRight className="size-4" />
                </Link>
              </Button>
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
    </>
  )
}
