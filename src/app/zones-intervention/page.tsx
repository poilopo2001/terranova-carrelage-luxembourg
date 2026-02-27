import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Zones d\'Intervention Carreleur Luxembourg | Terranova',
  description: 'Terranova Carrelage intervient dans tout le Grand-Duché : Luxembourg-Ville, Mersch, Ettelbruck, Bertrange, Grevenmacher et zones frontalières.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention' },
}

const zones = [
  { name: 'Luxembourg-Ville', href: '/zones-intervention/luxembourg-ville', desc: 'Kirchberg, Limpertsberg, Belair. Chantiers de prestige, immeubles anciens, résidences haut de gamme.' },
  { name: 'Mersch & Steinfort', href: '/zones-intervention/mersch-steinfort', desc: 'Siège et showroom. Proximité immédiate, délais d\'intervention parmi les meilleurs du canton.' },
  { name: 'Ettelbruck & Diekirch', href: '/zones-intervention/ettelbruck-diekirch', desc: 'Nord du Grand-Duché. Résidentiel et hôtellerie de l\'Ardenne luxembourgeoise.' },
  { name: 'Bertrange & Mamer', href: '/zones-intervention/bertrange-mamer', desc: 'Villas premium de la zone ouest. Clientèle exigeante, matériaux nobles.' },
  { name: 'Grevenmacher & Remich', href: '/zones-intervention/grevenmacher-remich', desc: 'Maisons viticoles et pierres de taille de la Moselle luxembourgeoise.' },
]

export default function ZonesIntervention() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zones d\'intervention' }]} />

      <section className="bg-brand-900 text-ivory-25 py-16 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">Tout le Grand-Duché couvert</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Chaque canton du Grand-Duch&eacute;, un carreleur qui conna&icirc;t le terrain</h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-4">Des immeubles anciens du Limpertsberg aux villas de Bertrange, des maisons viticoles de Remich aux ardoises de Diekirch. Fran&ccedil;ois adapte le protocole au b&acirc;timent.</p>
        </div>
      </section>

      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto space-y-6">
          {zones.map((z) => (
            <Link key={z.href} href={z.href} className="group block">
              <Card className="border-ivory-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory-100 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                    <MapPin className="size-5 text-accent-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-xl font-bold text-brand-900 group-hover:text-accent-500 transition-colors">{z.name}</h2>
                    <p className="font-body text-sm text-brand-600 mt-1">{z.desc}</p>
                  </div>
                  <ArrowRight className="size-5 text-brand-500 group-hover:text-accent-500 group-hover:translate-x-1 transition-all" />
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
