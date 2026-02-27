import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'
import { LayeredServices } from '@/components/premium/LayeredServices'

export const metadata: Metadata = {
  title: 'Services Carrelage Luxembourg | Pose, Rénovation, Pierre',
  description: 'Pose carrelage sol et mural, faïence, mosaïque, pierre naturelle, parquet carrelé, rénovation et réparation au Luxembourg. Artisan Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services' },
}

const services = [
  { title: 'Pose carrelage sol', desc: 'Grès cérame, grand format jusqu\'à 120x260cm, plancher chauffant. Calepinage sur mesure. Double encollage systématique pour les formats supérieurs à 60x60cm.', href: '/services/pose-carrelage-sol', icon: 'Grid3X3', price: '€35 - €85/m²' },
  { title: 'Pierre naturelle', desc: 'Marbre, travertin, granit, ardoise. Chaque pierre a son protocole : colle spécifique, imprégnation adaptée, joints calculés. La beauté durable.', href: '/services/pose-pierre-naturelle', icon: 'Feather', price: '€65 - €150/m²' },
  { title: 'Pose carrelage mural', desc: 'Étanchéité Schlüter-Kerdi, douche italienne, grand format 60x180cm. Zéro infiltration, garanti.', href: '/services/pose-carrelage-mural', icon: 'Layers', price: '€40 - €95/m²' },
  { title: 'Pose faïence', desc: 'Zellige, subway tiles, hexagones, crédence cuisine. Calepinage décoratif sur mesure.', href: '/services/pose-faience', icon: 'Square', price: '€38 - €72/m²' },
  { title: 'Pose mosaïque', desc: 'Verre, marbre, émaux de Briare. Douches, piscines. Calepinage informatique au millimètre.', href: '/services/pose-mosaique', icon: 'Aperture', price: '€75 - €180/m²' },
  { title: 'Pose parquet carrelé', desc: 'Imitation bois grès cérame. Chevron, quinconce. Lippage garanti < 0,5mm.', href: '/services/pose-parquet-carrele', icon: 'AlignLeft', price: '€50 - €90/m²' },
  { title: 'Jointoyage', desc: 'Rejointoiement ciment ou époxy. Traitement anti-moisissures. Économie 80% vs dépose-repose.', href: '/services/jointoyage', icon: 'MinusSquare', price: '€15 - €35/m²' },
  { title: 'Rénovation carrelage', desc: 'Dépose-repose ou polissage marbre en place. Économie jusqu\'à 95%.', href: '/services/renovation-carrelage', icon: 'RotateCcw', price: '€45 - €130/m²' },
  { title: 'Réparation carrelage', desc: 'Remplacement carreaux cassés, injection carreaux creux, fissures.', href: '/services/reparation-carrelage', icon: 'Wrench', price: '€80 - €350/zone' },
]

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Carrelage Terranova Luxembourg",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
        url: `https://www.terranova-carrelage.lu${s.href}`,
      },
    })),
  }

  return (
    <>
      <SchemaOrg schema={schema} />
      {/* Hero header -- asymmetric split */}
      <section className="bg-brand-900 text-ivory-25 pt-28 pb-16 md:pt-36 md:pb-24 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: 'Services' }]}  variant="dark" />
        </div>
        {/* Decorative large text background */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 font-heading text-[14rem] md:text-[20rem] font-bold text-ivory-25/[0.02] leading-none select-none pointer-events-none whitespace-nowrap">
          TERRANOVA
        </div>

        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-10 bg-accent-500/60" />
                <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase">
                  Le geste juste, le mat&eacute;riau juste
                </p>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] lg:leading-[1.1] font-bold tracking-tight">
                Du sol au mur, du marbre
                <br />au gr&egrave;s &mdash; <span className="italic text-accent-400">chaque geste compt&eacute;</span>
              </h1>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex items-end">
              <p className="font-body text-base text-ivory-100/80 leading-relaxed">
                De la pose de gr&egrave;s c&eacute;rame grand format au polissage de marbre ancien, chaque prestation suit un protocole adapt&eacute; au mat&eacute;riau. 25&nbsp;ans de savoir-faire Compagnon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layered services grid */}
      <section className="bg-ivory-25 py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <LayeredServices services={services} />
        </div>
      </section>

      <CTASection dark />
    </>
  )
}
