'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Phone, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'

/* ─── Data ─── */
const services = [
  { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
  { label: 'Pose carrelage mural', href: '/services/pose-carrelage-mural' },
  { label: 'Pose faïence', href: '/services/pose-faience' },
  { label: 'Pose mosaïque', href: '/services/pose-mosaique' },
  { label: 'Pose pierre naturelle', href: '/services/pose-pierre-naturelle' },
  { label: 'Pose parquet carrelé', href: '/services/pose-parquet-carrele' },
  { label: 'Jointoyage', href: '/services/jointoyage' },
  { label: 'Rénovation carrelage', href: '/services/renovation-carrelage' },
  { label: 'Réparation carrelage', href: '/services/reparation-carrelage' },
]

const zones = [
  { label: 'Luxembourg-Ville', href: '/zones-intervention/luxembourg-ville' },
  { label: 'Mersch & Steinfort', href: '/zones-intervention/mersch-steinfort' },
  { label: 'Ettelbruck & Diekirch', href: '/zones-intervention/ettelbruck-diekirch' },
  { label: 'Bertrange & Mamer', href: '/zones-intervention/bertrange-mamer' },
  { label: 'Grevenmacher & Remich', href: '/zones-intervention/grevenmacher-remich' },
]

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services', children: services },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Matériaux', href: '/materiaux' },
  { label: 'Zones', href: '/zones-intervention', children: zones },
  { label: 'À propos', href: '/a-propos' },
]

/* ─── Magnetic button wrapper ─── */
function MagneticWrap({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      x.set((e.clientX - cx) * strength)
      y.set((e.clientY - cy) * strength)
    },
    [x, y, strength]
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
    >
      {children}
    </motion.div>
  )
}

/* ─── Hamburger icon ─── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <motion.span
        className="block h-[2px] w-full bg-brand-900 origin-left rounded-full"
        animate={open ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="block h-[2px] w-full bg-brand-900 rounded-full"
        animate={open ? { opacity: 0, x: -12 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[2px] w-full bg-brand-900 origin-left rounded-full"
        animate={open ? { rotate: -45, y: 1 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

/* ─── Mobile menu nav item ─── */
const mobileItemVariants = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 * i + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ─── Main Header ─── */
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 60], [0, 1])
  const headerHeight = useTransform(scrollY, [0, 60], [80, 64])
  const headerShadow = useTransform(
    scrollY,
    [0, 60],
    ['0 0 0 rgba(61,43,31,0)', '0 2px 12px rgba(61,43,31,0.08)']
  )
  const springBg = useSpring(headerBg, { stiffness: 200, damping: 30 })
  const springHeight = useSpring(headerHeight, { stiffness: 200, damping: 30 })

  // Gold line progress across header
  const lineWidth = useTransform(scrollY, [0, 300], ['0%', '100%'])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: springHeight,
          boxShadow: headerShadow,
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Animated background opacity */}
        <motion.div
          className="absolute inset-0 bg-[#FAFAF8]"
          style={{ opacity: useTransform(springBg, [0, 1], [0.8, 0.97]) }}
        />

        {/* Gold accent line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-accent-500/80 via-accent-400/60 to-transparent"
          style={{ width: lineWidth }}
        />

        <nav className="relative max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Monogram */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-brand-900 group-hover:border-accent-500 transition-colors duration-300"
                whileHover={{ rotate: 3, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              />
              <span className="font-heading text-lg font-bold text-brand-900 group-hover:text-accent-500 transition-colors duration-300 relative z-10">
                T
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-brand-900 tracking-tight leading-none group-hover:text-accent-500 transition-colors duration-300">
                Terranova
              </span>
              <span className="text-[10px] font-body font-semibold text-brand-500 tracking-[0.2em] uppercase leading-none mt-0.5">
                Carrelage Luxembourg
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 px-4 py-2 text-[15px] font-body font-semibold text-brand-900 hover:text-accent-500 transition-colors duration-200 group"
                >
                  {item.label}
                  {item.children && (
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="size-3.5" />
                    </motion.span>
                  )}
                  {/* Underline slide */}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white/95 backdrop-blur-xl border border-ivory-200 rounded-xl shadow-[0_8px_32px_rgba(61,43,31,0.12)] py-2 min-w-[260px] overflow-hidden">
                        {item.children.map((child, idx) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03, duration: 0.3 }}
                          >
                            <Link
                              href={child.href}
                              className="group/item flex items-center gap-3 px-5 py-2.5 text-sm font-body text-brand-800 hover:text-accent-500 hover:bg-ivory-50/80 transition-all duration-200"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent-500/0 group-hover/item:bg-accent-500 transition-colors duration-200" />
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+35226548875"
              className="flex items-center gap-2 text-sm font-body font-semibold text-brand-900 hover:text-accent-500 transition-colors duration-200"
            >
              <Phone className="size-4" />
              <span className="hidden xl:inline">+352 26 54 88 75</span>
            </a>
            <MagneticWrap strength={0.15}>
              <Button
                asChild
                className="bg-brand-900 hover:bg-brand-800 text-ivory-25 font-body font-semibold rounded-lg h-10 px-6 transition-all duration-200 shadow-[0_2px_8px_rgba(61,43,31,0.2)] hover:shadow-[0_4px_16px_rgba(61,43,31,0.25)]"
              >
                <Link href="/contact">Appeler Fran\u00e7ois</Link>
              </Button>
            </MagneticWrap>
          </div>

          {/* ── Mobile ── */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:+35226548875" className="p-2 text-brand-900">
              <Phone className="size-5" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 text-brand-900 hover:text-accent-500 transition-colors"
                  aria-label="Ouvrir le menu"
                >
                  <MenuIcon open={mobileOpen} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[380px] bg-[#FAFAF8] p-0 border-none"
              >
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>

                {/* Mobile menu content */}
                <div className="flex flex-col h-full">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-200">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-brand-900">
                        <span className="font-heading text-base font-bold text-brand-900">T</span>
                      </div>
                      <span className="font-heading text-lg font-bold text-brand-900">
                        Terranova
                      </span>
                    </div>
                  </div>

                  {/* Mobile nav */}
                  <nav className="flex-1 overflow-y-auto px-6 py-6">
                    <motion.div
                      initial="closed"
                      animate="open"
                      className="space-y-1"
                    >
                      {navItems.map((item, i) => (
                        <motion.div
                          key={item.href}
                          custom={i}
                          variants={mobileItemVariants}
                        >
                          {item.children ? (
                            <div>
                              <button
                                onClick={() =>
                                  setMobileExpanded(
                                    mobileExpanded === item.label ? null : item.label
                                  )
                                }
                                className="flex items-center justify-between w-full py-3.5 text-[17px] font-body font-semibold text-brand-900 border-b border-ivory-200/60"
                              >
                                {item.label}
                                <motion.span
                                  animate={{
                                    rotate: mobileExpanded === item.label ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="size-4 text-brand-500" />
                                </motion.span>
                              </button>
                              <AnimatePresence>
                                {mobileExpanded === item.label && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4 py-2 space-y-0.5">
                                      {item.children.map((child) => (
                                        <Link
                                          key={child.href}
                                          href={child.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="flex items-center gap-2.5 py-2.5 text-[15px] text-brand-600 hover:text-accent-500 transition-colors"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-accent-400" />
                                          {child.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-3.5 text-[17px] font-body font-semibold text-brand-900 hover:text-accent-500 border-b border-ivory-200/60 transition-colors"
                            >
                              {item.label}
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </nav>

                  {/* Mobile footer */}
                  <div className="px-6 pb-8 pt-4 border-t border-ivory-200 space-y-4">
                    <Button
                      asChild
                      className="w-full bg-brand-900 hover:bg-brand-800 text-ivory-25 font-body font-semibold rounded-lg h-13 text-base shadow-[0_4px_16px_rgba(61,43,31,0.2)]"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center gap-2"
                      >
                        Appeler Fran\u00e7ois
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <div className="flex items-center justify-between text-sm text-brand-600">
                      <a
                        href="tel:+35226548875"
                        className="flex items-center gap-2 hover:text-accent-500 transition-colors"
                      >
                        <Phone className="size-4" /> +352 26 54 88 75
                      </a>
                      <span className="text-xs text-brand-500">Lun-Ven 7h-17h30</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}
