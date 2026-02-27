import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Shield, Globe, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'À Propos de Terranova Carrelage | Artisan Compagnon Mersch',
  description: 'Terranova Carrelage, fondé par François Rodrigues, artisan compagnon du Tour de France à Mersch. 25 ans d\'expérience en carrelage haut de gamme au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/a-propos' },
}

const values = [
  { title: 'Rigueur technique sans compromis', desc: 'Contrôle systématique avant pose. Planéité, humidité, fissures — on vérifie avant de poser.' },
  { title: 'Transparence totale', desc: 'On explique, on montre, on justifie. Chaque décision technique est partagée avec le client.' },
  { title: 'Respect du matériau', desc: 'Chaque pierre a son protocole. Marbre, travertin, grès cérame — chacun se pose différemment.' },
  { title: 'Durabilité', desc: 'Garantie décennale, matériaux de premier choix. Le prix d\'un carrelage bien posé, c\'est celui qu\'on ne refait pas.' },
]

const proofs = [
  'Compagnon du Tour de France',
  '25 ans d\'expérience',
  'Certifié Sika Pro (milieux humides)',
  'Membre Fédération des Artisans Luxembourg',
  'Assurance RC Pro Foyer Assurances',
  'Formats jusqu\'à 120x260cm maîtrisés',
  '4 langues parlées (FR, PT, LU, DE)',
]

export default function APropos() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Terranova Carrelage Luxembourg",
        founder: { "@type": "Person", name: "François Rodrigues", jobTitle: "Artisan Compagnon du Tour de France" },
        foundingDate: "2001",
        address: { "@type": "PostalAddress", streetAddress: "5, Rue de la Gare", addressLocality: "Mersch", postalCode: "L-7535", addressCountry: "LU" },
      }} />
      <section className="bg-brand-900 text-ivory-25 pt-28 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: 'À propos' }]}  variant="dark" />
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase">Du showroom au chantier, c&apos;est le même homme</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Terranova Carrelage &mdash; Artisan Compagnon depuis 2001</h1>
            <p className="font-body text-lg text-ivory-100 max-w-[680px] leading-relaxed">
              2001, Mersch. Fran&ccedil;ois Rodrigues, fra&icirc;chement re&ccedil;u Compagnon du Tour de France, ouvre son atelier Rue de la Gare. Vingt-cinq ans plus tard, la m&eacute;thode n&apos;a pas chang&eacute; : on v&eacute;rifie le support au r&eacute;glet de 2&nbsp;m&egrave;tres avant de poser le premier carreau. Pas de raccourci, pas de compromis sur le mat&eacute;riau. Un sol bien pos&eacute;, c&apos;est un sol qui dure une vie.
            </p>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-hero">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c349979?auto=format&fit=crop&q=80&w=600&h=800"
                alt="François Rodrigues, artisan compagnon carreleur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-8">Ce qui guide chaque chantier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="border-ivory-200 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-900 mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-brand-600 leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-100 py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-8">Les faits, pas les promesses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proofs.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-ivory-200">
                <CheckCircle className="size-5 text-accent-500 shrink-0" />
                <p className="font-body text-sm text-brand-800">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="font-heading text-4xl font-bold text-accent-500">2001</p><p className="font-body text-sm text-brand-600 mt-1">Fondée à Mersch</p></div>
          <div><p className="font-heading text-4xl font-bold text-accent-500">2 800+</p><p className="font-body text-sm text-brand-600 mt-1">Chantiers réalisés</p></div>
          <div><p className="font-heading text-4xl font-bold text-accent-500">25 000+</p><p className="font-body text-sm text-brand-600 mt-1">m² posés</p></div>
          <div><p className="font-heading text-4xl font-bold text-accent-500">4,9/5</p><p className="font-body text-sm text-brand-600 mt-1">Note clients</p></div>
        </div>
      </section>

      <CTASection dark title="Votre sol mérite un Compagnon" subtitle="François se déplace, mesure, regarde le support et vous dit exactement ce qu\'il faut. Retour sous 48h." />
    </>
  )
}
