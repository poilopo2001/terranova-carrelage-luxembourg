import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Blog Carrelage Luxembourg | Conseils, Techniques, Tendances',
  description: 'Blog carrelage par Terranova : prix pose 2026, choisir son carrelage, joint \u00e9poxy, calepinage, tendances, entretien pierre. Conseils d\u0027un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog' },
}

const articles = [
  { title: 'Combien co\u00fbte la pose de carrelage au Luxembourg en 2026\u00a0?', slug: '/blog/cout-pose-carrelage-luxembourg-2026', type: 'Budget', date: 'F\u00e9vrier 2026' },
  { title: 'Comment choisir son carrelage : gr\u00e8s c\u00e9rame, fa\u00efence ou pierre naturelle\u00a0?', slug: '/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg', type: 'Conseil', date: 'F\u00e9vrier 2026' },
  { title: 'Joint \u00e9poxy vs joint ciment : tout savoir pour bien choisir', slug: '/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg', type: 'Technique', date: 'Janvier 2026' },
  { title: 'Pose droite, diagonale ou chevron : quel calepinage choisir\u00a0?', slug: '/blog/calepinage-carrelage-pose-droite-diagonale-chevron-luxembourg', type: 'Comparatif', date: 'Janvier 2026' },
  { title: 'Tendances carrelage 2026 : grands formats, terrazzo et effets mati\u00e8re', slug: '/blog/tendances-carrelage-2026-luxembourg', type: 'Tendance', date: 'D\u00e9cembre 2025' },
  { title: 'Entretien du carrelage et de la pierre naturelle : le guide complet', slug: '/blog/entretien-carrelage-pierre-naturelle-luxembourg', type: 'Guide', date: 'D\u00e9cembre 2025' },
]

export default function Blog() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <section className="bg-brand-900 text-ivory-25 py-16 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">25 ans de terrain condens&eacute;s en articles</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Le carnet de chantier de Fran&ccedil;ois</h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-4">Prix r&eacute;els au Grand-Duch&eacute;, erreurs &agrave; &eacute;viter, d&eacute;tails techniques que personne ne publie. Fran&ccedil;ois &eacute;crit ce qu&apos;il sait, pas ce qu&apos;il a lu ailleurs.</p>
        </div>
      </section>

      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link key={a.slug} href={a.slug} className="group">
              <Card className="h-full border-ivory-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-accent-500/10 text-accent-600 border-0 font-body">{a.type}</Badge>
                    <span className="text-xs text-brand-500 font-body flex items-center gap-1"><Calendar className="size-3" /> {a.date}</span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-brand-900 group-hover:text-accent-500 transition-colors leading-snug">{a.title}</h2>
                  <span className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent-500">
                    Lire l&apos;article <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <CTASection dark />
    </>
  )
}
