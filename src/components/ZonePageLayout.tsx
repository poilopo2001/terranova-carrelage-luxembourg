import Link from 'next/link'
import { MapPin, Phone, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

interface ZonePageLayoutProps {
  city: string
  h1: string
  intro: string
  specificContent: string
  focusKeyword: string
  testimonial?: { author: string; location: string; text: string; project: string }
}

const services = [
  { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
  { label: 'Pose carrelage mural', href: '/services/pose-carrelage-mural' },
  { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
  { label: 'Fa\u00efence d\u00e9corative', href: '/services/pose-faience' },
  { label: 'Parquet carrel\u00e9', href: '/services/pose-parquet-carrele' },
  { label: 'Mosa\u00efque', href: '/services/pose-mosaique' },
  { label: 'R\u00e9novation', href: '/services/renovation-carrelage' },
  { label: 'Jointoyage', href: '/services/jointoyage' },
]

export default function ZonePageLayout({ city, h1, intro, specificContent, focusKeyword, testimonial }: ZonePageLayoutProps) {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Terranova Carrelage Luxembourg",
        telephone: "+352 26 54 88 75",
        areaServed: { "@type": "City", name: city },
        address: { "@type": "PostalAddress", streetAddress: "5, Rue de la Gare", addressLocality: "Mersch", postalCode: "L-7535", addressCountry: "LU" },
      }} />
      <Breadcrumb items={[
        { label: 'Zones d\u0027intervention', href: '/zones-intervention' },
        { label: city },
      ]} />

      <section className="bg-brand-900 text-ivory-25 py-16 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 text-accent-400 mb-3">
            <MapPin className="size-4" />
            <p className="font-body font-semibold text-sm tracking-[0.15em] uppercase">{city} &middot; Grand-Duch\u00e9;</p>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{h1}</h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-4 leading-relaxed">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-[8px] h-12 px-8">
              <Link href="/contact">D&eacute;crire mon projet <ArrowRight className="size-4 ml-1" /></Link>
            </Button>
            <a href="tel:+35226548875" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[8px] font-body font-semibold border-2 border-ivory-200 text-ivory-100 hover:bg-ivory-25 hover:text-brand-900 transition-colors">
              <Phone className="size-4" /> +352 26 54 88 75
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-brand-900">Fran&ccedil;ois &agrave; {city} &mdash; 25 ans de terrain</h2>
            <p className="font-body text-brand-800 leading-relaxed">{specificContent}</p>
            <div className="space-y-3">
              {['Garantie d\u00e9cennale assur\u00e9e par Foyer Assurances', 'Visite technique sur place avant chaque chiffrage', 'Fran\u00e7ais, portugais, luxembourgeois, allemand', 'Marbre de Carrare, travertin romain, gr\u00e8s c\u00e9rame grand format', 'Dalles jusqu\u0027\u00e0 120x260cm pos\u00e9es \u00e0 deux avec ventouses'].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-accent-500 shrink-0" />
                  <p className="font-body text-sm text-brand-800">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="border-ivory-200 shadow-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-bold text-brand-900">Ce que Fran&ccedil;ois pose &agrave; {city}</h3>
                <div className="space-y-2">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center justify-between p-2 rounded-lg hover:bg-ivory-50 transition-colors group">
                      <span className="font-body text-sm text-brand-800 group-hover:text-accent-500">{s.label}</span>
                      <ArrowRight className="size-3 text-brand-500 group-hover:text-accent-500" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {testimonial && (
        <section className="bg-ivory-100 py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-ivory-200 shadow-card bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent-500 text-accent-500" />)}</div>
                <p className="font-body text-brand-800 italic leading-relaxed">&laquo;&nbsp;{testimonial.text}&nbsp;&raquo;</p>
                <p className="font-body font-semibold text-brand-900 text-sm">{testimonial.author} &middot; {testimonial.location}</p>
                <p className="font-body text-xs text-brand-500">{testimonial.project}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <CTASection dark title={`Un chantier pr\u00e9vu \u00e0 ${city}\u00a0?`} subtitle="Fran\u00e7ois se d\u00e9place pour voir le support, mesurer et discuter du mat\u00e9riau. Premier \u00e9change sous 48h." />
    </>
  )
}
