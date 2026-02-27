'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Phone, ChevronDown, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════
   MAGNETIC BUTTON
   ═══════════════════════════════════════════ */

function MagneticWrap({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18 })
  const springY = useSpring(y, { stiffness: 260, damping: 18 })

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      x.set((e.clientX - rect.left - rect.width / 2) * strength)
      y.set((e.clientY - rect.top - rect.height / 2) * strength)
    },
    [x, y, strength]
  )

  const reset = useCallback(() => { x.set(0); y.set(0) }, [x, y])

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} onMouseMove={handleMouse} onMouseLeave={reset}>
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════
   HAMBURGER — three bars morphing to X
   ═══════════════════════════════════════════ */

function MenuIcon({ open }: { open: boolean }) {
  const ease = [0.16, 1, 0.3, 1] as const
  return (
    <div className="relative w-7 h-5 flex flex-col justify-between">
      <motion.span
        className="block h-[2px] w-full rounded-full origin-left"
        animate={open
          ? { rotate: 45, y: -1, backgroundColor: '#FAFAF8' }
          : { rotate: 0, y: 0, backgroundColor: 'currentColor' }
        }
        transition={{ duration: 0.35, ease }}
      />
      <motion.span
        className="block h-[2px] w-4/5 rounded-full"
        animate={open
          ? { opacity: 0, x: -16, backgroundColor: '#FAFAF8' }
          : { opacity: 1, x: 0, backgroundColor: 'currentColor' }
        }
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="block h-[2px] w-3/5 rounded-full origin-left"
        animate={open
          ? { rotate: -45, y: 1, width: '100%', backgroundColor: '#FAFAF8' }
          : { rotate: 0, y: 0, width: '60%', backgroundColor: 'currentColor' }
        }
        transition={{ duration: 0.35, ease }}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   MOBILE MENU — cinematic full-screen wipe
   ═══════════════════════════════════════════ */

const mobileNavVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const mobileItemVariants = {
  closed: { opacity: 0, x: 50, filter: 'blur(4px)' },
  open: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  // Lock body scroll + focus trap
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
      window.addEventListener('keydown', handler)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handler)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-brand-900 flex flex-col"
          style={{ height: '100dvh' }}
          initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
          animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
          exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-ivory-200/30">
                <span className="font-heading text-base font-bold text-ivory-25">T</span>
              </div>
              <span className="font-heading text-lg font-bold text-ivory-25 tracking-tight">
                Terranova
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-ivory-200 hover:text-accent-400 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Separator */}
          <div className="mx-6 h-px bg-ivory-200/10" />

          {/* Nav links */}
          <motion.nav
            className="flex-1 overflow-y-auto px-6 py-8"
            variants={mobileNavVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="space-y-0">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={mobileItemVariants}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-4 text-2xl font-heading font-bold text-ivory-25 tracking-tight border-b border-ivory-200/8"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: expanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <ChevronDown className="size-5 text-accent-400" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 py-3 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="flex items-center gap-3 py-2.5 text-base font-body text-ivory-200/70 hover:text-accent-400 transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500/40" />
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
                      onClick={onClose}
                      className="block py-4 text-2xl font-heading font-bold text-ivory-25 tracking-tight border-b border-ivory-200/8 hover:text-accent-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.nav>

          {/* Bottom CTA band */}
          <div className="px-6 pb-8 pt-4 space-y-4 border-t border-ivory-200/10">
            <Button
              asChild
              className="w-full bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-xl h-14 text-base shadow-[0_4px_20px_rgba(196,150,90,0.3)]"
            >
              <Link href="/contact" onClick={onClose} className="flex items-center justify-center gap-2">
                D&eacute;crire mon projet <ArrowRight className="size-4" />
              </Link>
            </Button>
            <div className="flex items-center justify-between">
              <a
                href="tel:+35226548875"
                className="flex items-center gap-2 text-sm font-body font-semibold text-accent-400 hover:text-accent-300 transition-colors"
              >
                <Phone className="size-4" /> +352 26 54 88 75
              </a>
              <span className="text-xs text-ivory-200/40 font-body">Lun-Ven 7h-17h30</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════
   MAIN HEADER
   ═══════════════════════════════════════════ */

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  const { scrollY } = useScroll()

  // --- Floating island transformation ---
  const scrollProgress = useTransform(scrollY, [0, 100], [0, 1])
  const springProgress = useSpring(scrollProgress, { stiffness: 180, damping: 28 })

  // Header dimensions & style
  const headerHeight = useTransform(springProgress, [0, 1], [80, 56])
  const headerMx = useTransform(springProgress, [0, 1], [0, 24])
  const headerRadius = useTransform(springProgress, [0, 1], [0, 16])
  const headerTop = useTransform(springProgress, [0, 1], [0, 8])
  const bgOpacity = useTransform(springProgress, [0, 1], [0, 0.97])
  const shadowOpacity = useTransform(springProgress, [0, 1], [0, 0.12])
  const blurAmount = useTransform(springProgress, [0, 1], [0, 16])

  // Logo color: ivory at top → brand at scroll
  const logoColorProgress = useTransform(scrollY, [0, 80], [0, 1])
  const springLogoColor = useSpring(logoColorProgress, { stiffness: 200, damping: 25 })

  // Gold progress line
  const lineWidth = useTransform(scrollY, [0, 500], ['0%', '100%'])

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 z-50"
        style={{
          height: headerHeight,
          marginLeft: headerMx,
          marginRight: headerMx,
          borderRadius: headerRadius,
          top: headerTop,
        }}
      >
        {/* Background layer — transparent → glassmorphism island */}
        <motion.div
          className="absolute inset-0 bg-[#FAFAF8]"
          style={{
            opacity: bgOpacity,
            borderRadius: headerRadius,
            backdropFilter: useTransform(blurAmount, (v) => `blur(${v}px)`),
            boxShadow: useTransform(
              shadowOpacity,
              (v) => `0 4px 24px rgba(61,43,31,${v}), 0 1px 3px rgba(61,43,31,${v * 0.5})`
            ),
          }}
        />

        {/* Gold accent line at bottom — scroll progress */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500/0"
          style={{
            width: lineWidth,
            borderRadius: headerRadius,
          }}
        />

        <nav className="relative max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <motion.div className="relative w-10 h-10 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-lg border-2 transition-colors duration-300"
                style={{
                  borderColor: useTransform(springLogoColor, [0, 1], ['rgba(250,250,248,0.5)', 'rgba(61,43,31,1)']),
                }}
                whileHover={{ rotate: 4, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              />
              <motion.span
                className="font-heading text-lg font-bold relative z-10 transition-colors duration-300 group-hover:text-accent-500"
                style={{
                  color: useTransform(springLogoColor, [0, 1], ['#FAFAF8', '#3D2B1F']),
                }}
              >
                T
              </motion.span>
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="font-heading text-xl font-bold tracking-tight leading-none transition-colors duration-300 group-hover:text-accent-500"
                style={{
                  color: useTransform(springLogoColor, [0, 1], ['#FAFAF8', '#3D2B1F']),
                }}
              >
                Terranova
              </motion.span>
              <motion.span
                className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase leading-none mt-0.5 transition-colors duration-300"
                style={{
                  color: useTransform(springLogoColor, [0, 1], ['rgba(250,250,248,0.6)', 'rgba(61,43,31,0.5)']),
                }}
              >
                Carrelage Luxembourg
              </motion.span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div
            className="hidden lg:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  setHoveredNav(item.label)
                  if (item.children) setOpenDropdown(item.label)
                }}
                onMouseLeave={() => {
                  if (item.children) setOpenDropdown(null)
                }}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 px-4 py-2 text-[15px] font-body font-semibold transition-colors duration-200"
                  onMouseEnter={() => setHoveredNav(item.label)}
                >
                  {/* layoutId sliding underline */}
                  {hoveredNav === item.label && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <motion.span
                    className="relative z-10"
                    style={{
                      color: useTransform(springLogoColor, [0, 1], ['rgba(250,250,248,0.85)', 'rgba(61,43,31,1)']),
                    }}
                  >
                    {item.label}
                  </motion.span>

                  {item.children && (
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="size-3.5" style={{ opacity: 0.6 }} />
                    </motion.span>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="bg-white/96 backdrop-blur-xl border border-ivory-200/60 rounded-2xl shadow-[0_12px_40px_rgba(61,43,31,0.12)] py-2 min-w-[280px] overflow-hidden">
                        {item.children.map((child, idx) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.025, duration: 0.3 }}
                          >
                            <Link
                              href={child.href}
                              className="group/item flex items-center gap-3 px-5 py-2.5 text-sm font-body text-brand-800 hover:text-accent-500 hover:bg-ivory-50/60 transition-all duration-200"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-500/0 group-hover/item:bg-accent-500 transition-all duration-200 group-hover/item:scale-100 scale-50" />
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

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-5">
            <motion.a
              href="tel:+35226548875"
              className="flex items-center gap-2 text-sm font-body font-semibold transition-colors duration-200 hover:text-accent-500"
              style={{
                color: useTransform(springLogoColor, [0, 1], ['rgba(250,250,248,0.8)', 'rgba(61,43,31,0.8)']),
              }}
            >
              <Phone className="size-4" />
              <span className="hidden xl:inline">+352 26 54 88 75</span>
            </motion.a>
            <MagneticWrap strength={0.18}>
              <Button
                asChild
                className="bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold rounded-xl h-10 px-6 text-sm shadow-[0_3px_12px_rgba(196,150,90,0.25)] hover:shadow-[0_5px_20px_rgba(196,150,90,0.35)] transition-all duration-300"
              >
                <Link href="/contact">
                  Décrire mon projet
                </Link>
              </Button>
            </MagneticWrap>
          </div>

          {/* ── MOBILE RIGHT ── */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+35226548875"
              className="p-2.5 rounded-lg transition-colors"
              aria-label="Appeler François"
            >
              <motion.div
                style={{
                  color: useTransform(springLogoColor, [0, 1], ['#FAFAF8', '#3D2B1F']),
                }}
              >
                <Phone className="size-5" />
              </motion.div>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors relative z-[70]"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              <motion.div
                style={{
                  color: useTransform(springLogoColor, [0, 1], ['#FAFAF8', '#3D2B1F']),
                }}
              >
                <MenuIcon open={mobileOpen} />
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer — matches header height at top-of-page */}
      <div className="h-20" />
    </>
  )
}
