'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, Grid3X3, Layers, Feather, Square, AlignLeft, Aperture } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'

const services = [
  { title: 'Pose carrelage sol', desc: 'Gr\u00e8s c\u00e9rame, grand format jusqu\u0027\u00e0 120x260cm, plancher chauffant.', href: '/services/pose-carrelage-sol', icon: Grid3X3 },
  { title: 'Pose carrelage mural', desc: '\u00c9tanch\u00e9it\u00e9 Schl\u00fcter-Kerdi, douche italienne, grand format 60x180.', href: '/services/pose-carrelage-mural', icon: Layers },
  { title: 'Pierre naturelle', desc: 'Marbre, travertin, granit, ardoise. Chaque pierre a son protocole.', href: '/services/pose-pierre-naturelle', icon: Feather },
  { title: 'Fa\u00efence d\u00e9corative', desc: 'Zellige, subway tiles, hexagones, cr\u00e9dence. Calepinage sur mesure.', href: '/services/pose-faience', icon: Square },
  { title: 'Parquet carrel\u00e9', desc: 'Imitation bois en gr\u00e8s c\u00e9rame. Chevron, quinconce. Lippage garanti < 0,5mm.', href: '/services/pose-parquet-carrele', icon: AlignLeft },
  { title: 'Mosa\u00efque', desc: 'Verre, marbre, \u00e9maux de Briare. Calepinage informatique.', href: '/services/pose-mosaique', icon: Aperture },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      /* Offset: odd cards shifted down on desktop for masonry feel */
      className={index % 2 === 1 ? 'md:mt-8' : ''}
    >
      <Link href={service.href} className="group block h-full">
        <div className="relative h-full bg-white border border-ivory-200/80 rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(61,43,31,0.1)] hover:-translate-y-1">
          {/* Top accent bar — signature motif */}
          <div className="absolute top-0 left-7 right-7 h-[2px] bg-accent-500/0 group-hover:bg-accent-500 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" />

          {/* Large faded index number */}
          <span className="absolute -top-3 -right-2 font-heading text-[5rem] font-bold text-brand-900/[0.03] leading-none select-none pointer-events-none">
            0{index + 1}
          </span>

          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-ivory-100/80 flex items-center justify-center group-hover:bg-brand-900 transition-colors duration-400">
              <Icon className="size-5 text-accent-500 group-hover:text-accent-400 transition-colors duration-400" />
            </div>

            <h3 className="font-heading text-xl font-bold text-brand-900 group-hover:text-accent-500 transition-colors duration-300 tracking-tight">
              {service.title}
            </h3>

            <p className="font-body text-sm text-brand-600 leading-[1.7]">
              {service.desc}
            </p>

            <span className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-accent-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              En savoir plus <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function HomeServices() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-ivory-25 py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle tile pattern watermark */}
      <div className="absolute top-12 right-0 font-heading text-[12rem] md:text-[18rem] font-bold text-brand-900/[0.02] leading-none select-none pointer-events-none tracking-tighter">
        06
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Asymmetric header — 7/5 split */}
        <motion.div
          ref={headerRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="md:col-span-7">
            <motion.p
              className="text-accent-500 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Le geste juste, le mat&eacute;riau juste
            </motion.p>
            <motion.h2
              className="font-heading text-[2rem] md:text-[3rem] leading-[1.1] tracking-tight text-brand-900"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-normal">Chaque technique</span>
              <br />
              <span className="font-bold">de pose{' '}
                <span className="relative inline-block italic text-accent-500">
                  ma&icirc;tris&eacute;e
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-500 rounded-full" />
                </span>
              </span>
            </motion.h2>
          </div>
          <motion.div
            className="md:col-span-4 md:col-start-9 flex items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-brand-600 text-[15px] leading-[1.7]">
              Du gr&egrave;s c&eacute;rame grand format &agrave; la mosa&iuml;que en &eacute;maux de Briare, chaque mat&eacute;riau a son protocole. 25&nbsp;ans de ma&icirc;trise Compagnon.
            </p>
          </motion.div>
        </motion.div>

        {/* Service cards grid with offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.href} service={service} index={i} />
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button
            asChild
            variant="outline"
            className="border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-ivory-25 font-body font-semibold rounded-xl h-12 px-8 transition-all duration-300"
          >
            <Link href="/services">D&eacute;couvrir les 9 techniques</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
