"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  category: string
  area: string
  image: string
  desc: string
}

interface RealisationsGalleryProps {
  projects: Project[]
}

/* Featured project -- full width with parallax */
function FeaturedProject({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[50vh] md:h-[70vh] rounded-[20px] overflow-hidden group"
    >
      <motion.div style={{ y: imgY, scale }} className="absolute inset-0">
        <Image
          src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&q=80&w=1400&h=800`}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="max-w-2xl">
          <Badge className="bg-accent-500 text-white border-0 mb-3">
            {project.category} &middot; {project.area}
          </Badge>
          <h3 className="font-heading text-2xl md:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="font-body text-base text-ivory-100/80 mt-3 leading-relaxed max-w-lg">
            {project.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* Standard project card with staggered reveal */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  // Alternate card heights for masonry-like effect
  const isLarge = index % 3 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-[16px] shadow-card hover:shadow-card-hover transition-shadow duration-500 ${
        isLarge ? "md:row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isLarge ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        <Image
          src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&q=80&w=600&h=${isLarge ? 800 : 450}`}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-900 border-0 font-body font-semibold text-xs">
          {project.category}
        </Badge>

        {/* Reveal on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-body text-xs text-accent-300 font-semibold mb-1">{project.area}</p>
          <h3 className="font-heading text-lg font-bold text-white leading-tight">
            {project.title}
          </h3>
          <p className="font-body text-sm text-ivory-100/70 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function RealisationsGallery({ projects }: RealisationsGalleryProps) {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Featured full-width project */}
      <FeaturedProject project={featured} />

      {/* Masonry-style grid for remaining projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
        {rest.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
