import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Clock, Euro } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

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
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero */}
      <section className="bg-brand-900 text-ivory-25 pt-28 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="max-w-[1280px] mx-auto mb-6">
          <Breadcrumb items={breadcrumb} variant="dark" />
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase">
              {subtitle}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h1>
            <p className="font-body text-lg text-ivory-100 max-w-[680px] leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-ivory-200 pt-2">
              <span className="flex items-center gap-1.5"><Euro className="size-4 text-accent-400" /> {priceRange}</span>
              <span className="flex items-center gap-1.5"><Clock className="size-4 text-accent-400" /> {duration}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-[8px] h-12 px-8">
                <Link href="/contact">
                  Discuter du projet
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <a
                href="tel:+35226548875"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[8px] font-body font-semibold border-2 border-ivory-200 text-ivory-100 hover:bg-ivory-25 hover:text-brand-900 transition-colors"
              >
                +352 26 54 88 75
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-hero">
              <Image src={image} alt={imageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-8">La rigueur Compagnon, concr&egrave;tement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-ivory-200">
                <CheckCircle className="size-5 text-accent-500 shrink-0 mt-0.5" />
                <p className="font-body text-sm text-brand-800 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* Process */}
      <section className="bg-ivory-100 py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-8">Du contr&ocirc;le du support au nettoyage final</h2>
          <div className="space-y-4 max-w-3xl">
            {process.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center shrink-0 font-body font-semibold text-sm">
                  {i + 1}
                </div>
                <p className="font-body text-brand-800 text-sm leading-relaxed pt-1">{step.replace(/^\d+\.\s*/, '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-8">Garanties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guarantees.map((g, i) => (
              <Card key={i} className="border-ivory-200 bg-white">
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle className="size-5 text-success shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-brand-800">{g}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="bg-ivory-100 py-12 px-6">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-heading text-xl font-bold text-brand-900 mb-4">Dans le m&ecirc;me registre</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white border border-ivory-200 text-sm font-body text-brand-800 hover:border-accent-500 hover:text-accent-500 transition-colors">
                  {s.label} <ArrowRight className="size-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
