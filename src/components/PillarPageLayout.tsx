import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

interface PillarPageLayoutProps {
  title: string
  subtitle: string
  intro: string
  sections: { title: string; content: string; link?: { label: string; href: string } }[]
  faq: { q: string; a: string }[]
  relatedLinks: { label: string; href: string }[]
  schema: Record<string, unknown>
}

export default function PillarPageLayout({ title, subtitle, intro, sections, faq, relatedLinks, schema }: PillarPageLayoutProps) {
  return (
    <>
      <SchemaOrg schema={schema} />

      <section className="bg-brand-900 text-ivory-25 pt-28 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: title }]} variant="dark" />
          <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">{subtitle}</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl">{title}</h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-5 leading-relaxed">{intro}</p>
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

      {/* Content sections */}
      {sections.map((s, i) => (
        <section key={i} className={`${i % 2 === 0 ? 'bg-ivory-25' : 'bg-ivory-100'} py-16 px-6`}>
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-4">{s.title}</h2>
            <p className="font-body text-brand-800 leading-relaxed max-w-3xl">{s.content}</p>
            {s.link && (
              <Link href={s.link.href} className="inline-flex items-center gap-1 mt-4 text-sm font-body font-semibold text-accent-500 hover:text-accent-700">
                {s.link.label} <ArrowRight className="size-3.5" />
              </Link>
            )}
          </div>
        </section>
      ))}

      {/* Related links */}
      <section className="bg-ivory-25 py-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-heading text-xl font-bold text-brand-900 mb-4">Pour aller plus loin</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white border border-ivory-200 text-sm font-body text-brand-800 hover:border-accent-500 hover:text-accent-500 transition-colors">
                {l.label} <ArrowRight className="size-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <Card key={i} className="border-ivory-200 bg-white">
                <CardContent className="p-5">
                  <h3 className="font-body font-semibold text-brand-900 mb-2">{f.q}</h3>
                  <p className="font-body text-sm text-brand-600 leading-relaxed">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  )
}
