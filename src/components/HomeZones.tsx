'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const zones = [
  {
    name: 'Luxembourg-Ville',
    detail: 'Kirchberg, Limpertsberg, Belair',
    href: '/zones-intervention/luxembourg-ville',
  },
  {
    name: 'Mersch & Steinfort',
    detail: 'Siège, showroom, canton de Mersch',
    href: '/zones-intervention/mersch-steinfort',
  },
  {
    name: 'Ettelbruck & Diekirch',
    detail: 'Ardenne luxembourgeoise, Nord',
    href: '/zones-intervention/ettelbruck-diekirch',
  },
  {
    name: 'Bertrange & Mamer',
    detail: 'Villas premium, zone ouest',
    href: '/zones-intervention/bertrange-mamer',
  },
  {
    name: 'Grevenmacher & Remich',
    detail: 'Vallée de la Moselle, vignobles',
    href: '/zones-intervention/grevenmacher-remich',
  },
]

export default function HomeZones() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-ivory-25 py-24 md:py-32 px-6 overflow-hidden">
      {/* Watermark number */}
      <div className="absolute bottom-0 left-0 font-heading text-[14rem] md:text-[22rem] font-bold text-brand-900/[0.015] leading-none select-none pointer-events-none tracking-tighter">
        05
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Asymmetric header — 6/5 split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent-500 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Du Kirchberg &agrave; la Moselle
            </p>
            <h2 className="font-heading text-[2rem] md:text-[3rem] leading-[1.1] tracking-tight text-brand-900">
              <span className="font-normal">Tout le</span>{' '}
              <span className="font-bold relative inline-block">
                Grand-Duch&eacute;
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-500 rounded-full" />
              </span>
              <br />
              <span className="italic font-normal text-accent-500">couvert.</span>
            </h2>
          </motion.div>
          <motion.div
            className="md:col-span-4 md:col-start-9 flex items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-brand-600 text-[15px] leading-[1.7]">
              Fran&ccedil;ois se d&eacute;place avec son mat&eacute;riel. Il conna&icirc;t les contraintes de chaque canton &mdash; immeubles anciens de la capitale, villas de l&apos;ouest, maisons viticoles de l&apos;est.
            </p>
          </motion.div>
        </div>

        {/* Zone cards — horizontal scroll on mobile, asymmetric grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {zones.map((zone, i) => {
            /* First two cards span more columns */
            const colSpan = i < 2 ? 'md:col-span-6' : i < 4 ? 'md:col-span-4' : 'md:col-span-4'

            return (
              <motion.div
                key={zone.href}
                className={colSpan}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link href={zone.href} className="group block">
                  <div className="relative border border-ivory-200/80 rounded-2xl p-6 bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_6px_32px_rgba(61,43,31,0.08)] hover:border-accent-500/40">
                    {/* Accent bar top — hidden until hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4 text-accent-500 flex-shrink-0" />
                          <h3 className="font-heading text-lg font-bold text-brand-900 group-hover:text-accent-500 transition-colors duration-300 tracking-tight">
                            {zone.name}
                          </h3>
                        </div>
                        <p className="font-body text-sm text-brand-500 pl-6">
                          {zone.detail}
                        </p>
                      </div>
                      <ArrowRight className="size-4 text-brand-500/0 group-hover:text-accent-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
