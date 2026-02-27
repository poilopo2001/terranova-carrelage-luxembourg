"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Grid3X3,
  Layers,
  Square,
  Aperture,
  Feather,
  AlignLeft,
  MinusSquare,
  RotateCcw,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  Grid3X3,
  Layers,
  Square,
  Aperture,
  Feather,
  AlignLeft,
  MinusSquare,
  RotateCcw,
  Wrench,
}

interface Service {
  title: string
  desc: string
  href: string
  icon: string
  price: string
}

type ResolvedService = Omit<Service, "icon"> & { icon: LucideIcon }

interface LayeredServicesProps {
  services: Service[]
}

function resolveIcon(name: string): LucideIcon {
  return iconMap[name] || Grid3X3
}

export function LayeredServices({ services: rawServices }: LayeredServicesProps) {
  const services: ResolvedService[] = rawServices.map((s) => ({
    ...s,
    icon: resolveIcon(s.icon),
  }))
  // Split into featured (first 3) and rest
  const featured = services.slice(0, 3)
  const rest = services.slice(3)

  return (
    <div className="space-y-6">
      {/* Featured trio -- overlapping layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Big card spanning 7 cols */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 md:row-span-2"
        >
          <ServiceCardLarge service={featured[0]} />
        </motion.div>

        {/* Two stacked cards spanning 5 cols */}
        {featured.slice(1).map((service, i) => (
          <motion.div
            key={service.href}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <ServiceCardMedium service={service} />
          </motion.div>
        ))}
      </div>

      {/* Remaining services -- offset grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:-mt-4"
      >
        {rest.map((service, i) => (
          <motion.div
            key={service.href}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            className={cn(i % 2 !== 0 && "md:translate-y-6")}
          >
            <ServiceCardCompact service={service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function ServiceCardLarge({ service }: { service: ResolvedService }) {
  const Icon = service.icon
  return (
    <Link href={service.href} className="group block h-full">
      <div className="relative h-full min-h-[360px] md:min-h-[420px] bg-brand-900 rounded-[16px] p-8 md:p-10 flex flex-col justify-end overflow-hidden transition-all duration-500 hover:shadow-hero">
        {/* Huge faded icon */}
        <Icon className="absolute -top-8 -right-8 size-64 text-ivory-25/[0.03] rotate-12 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" strokeWidth={0.5} />

        {/* Accent bar */}
        <div className="absolute top-0 left-8 w-16 h-1 bg-accent-500 rounded-b-full" />

        <div className="relative z-10 mt-auto">
          <span className="inline-block bg-accent-500/20 text-accent-400 font-body font-semibold text-xs px-3 py-1 rounded-full mb-4">
            {service.price}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ivory-25 tracking-tight group-hover:text-accent-400 transition-colors duration-300">
            {service.title}
          </h2>
          <p className="font-body text-ivory-200/80 text-base leading-relaxed mt-3 max-w-md">
            {service.desc}
          </p>
          <span className="inline-flex items-center gap-2 text-accent-400 font-body font-semibold text-sm mt-5">
            D&eacute;couvrir <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function ServiceCardMedium({ service }: { service: ResolvedService }) {
  const Icon = service.icon
  return (
    <Link href={service.href} className="group block h-full">
      <div className="relative h-full min-h-[200px] bg-ivory-100 rounded-[16px] p-6 md:p-8 flex flex-col justify-between overflow-hidden border border-ivory-200 hover:border-accent-400 hover:shadow-card-hover transition-all duration-500">
        <Icon className="absolute -bottom-4 -right-4 size-32 text-brand-900/[0.04] rotate-[-15deg]" strokeWidth={0.7} />

        <div className="flex items-center justify-between relative z-10">
          <div className="w-11 h-11 rounded-xl bg-brand-900 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
            <Icon className="size-5 text-ivory-25" />
          </div>
          <span className="text-xs font-body font-semibold text-accent-600">{service.price}</span>
        </div>

        <div className="relative z-10 mt-6">
          <h2 className="font-heading text-lg md:text-xl font-bold text-brand-900 group-hover:text-accent-700 transition-colors">
            {service.title}
          </h2>
          <p className="font-body text-sm text-brand-600 leading-relaxed mt-2">{service.desc}</p>
          <span className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent-500 mt-3">
            D&eacute;couvrir <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function ServiceCardCompact({ service }: { service: ResolvedService }) {
  const Icon = service.icon
  return (
    <Link href={service.href} className="group block">
      <div className="relative bg-white rounded-[12px] p-6 border border-ivory-200 hover:border-accent-400 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-300">
            <Icon className="size-5 text-accent-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-heading text-base font-bold text-brand-900 group-hover:text-accent-700 transition-colors truncate">
                {service.title}
              </h3>
              <span className="text-xs font-body font-semibold text-accent-600 flex-shrink-0">{service.price}</span>
            </div>
            <p className="font-body text-sm text-brand-600 leading-relaxed mt-1">{service.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
