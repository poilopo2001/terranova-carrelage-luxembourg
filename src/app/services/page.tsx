import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'
import { LayeredServices } from '@/components/premium/LayeredServices'

export const metadata: Metadata = {
  title: 'Services Carrelage Luxembourg | Pose, R\u00e9novation, Pierre',
  description: 'Pose carrelage sol et mural, fa\u00efence, mosa\u00efque, pierre naturelle, parquet carrel\u00e9, r\u00e9novation et r\u00e9paration au Luxembourg. Artisan Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services' },
}

const services = [
  { title: 'Pose carrelage sol', desc: 'Gr\u00e8s c\u00e9rame, grand format jusqu\u0027\u00e0 120x260cm, plancher chauffant. Calepinage sur mesure. Double encollage syst\u00e9matique pour les formats sup\u00e9rieurs \u00e0 60x60cm.', href: '/services/pose-carrelage-sol', icon: 'Grid3X3', price: '\u20ac35 - \u20ac85/m\u00b2' },
  { title: 'Pierre naturelle', desc: 'Marbre, travertin, granit, ardoise. Chaque pierre a son protocole : colle sp\u00e9cifique, impr\u00e9gnation adapt\u00e9e, joints calcul\u00e9s. La beaut\u00e9 durable.', href: '/services/pose-pierre-naturelle', icon: 'Feather', price: '\u20ac65 - \u20ac150/m\u00b2' },
  { title: 'Pose carrelage mural', desc: '\u00c9tanch\u00e9it\u00e9 Schl\u00fcter-Kerdi, douche italienne, grand format 60x180cm. Z\u00e9ro infiltration, garanti.', href: '/services/pose-carrelage-mural', icon: 'Layers', price: '\u20ac40 - \u20ac95/m\u00b2' },
  { title: 'Pose fa\u00efence', desc: 'Zellige, subway tiles, hexagones, cr\u00e9dence cuisine. Calepinage d\u00e9coratif sur mesure.', href: '/services/pose-faience', icon: 'Square', price: '\u20ac38 - \u20ac72/m\u00b2' },
  { title: 'Pose mosa\u00efque', desc: 'Verre, marbre, \u00e9maux de Briare. Douches, piscines. Calepinage informatique au millim\u00e8tre.', href: '/services/pose-mosaique', icon: 'Aperture', price: '\u20ac75 - \u20ac180/m\u00b2' },
  { title: 'Pose parquet carrel\u00e9', desc: 'Imitation bois gr\u00e8s c\u00e9rame. Chevron, quinconce. Lippage garanti < 0,5mm.', href: '/services/pose-parquet-carrele', icon: 'AlignLeft', price: '\u20ac50 - \u20ac90/m\u00b2' },
  { title: 'Jointoyage', desc: 'Rejointoiement ciment ou \u00e9poxy. Traitement anti-moisissures. \u00c9conomie 80% vs d\u00e9pose-repose.', href: '/services/jointoyage', icon: 'MinusSquare', price: '\u20ac15 - \u20ac35/m\u00b2' },
  { title: 'R\u00e9novation carrelage', desc: 'D\u00e9pose-repose ou polissage marbre en place. \u00c9conomie jusqu\u0027\u00e0 95%.', href: '/services/renovation-carrelage', icon: 'RotateCcw', price: '\u20ac45 - \u20ac130/m\u00b2' },
  { title: 'R\u00e9paration carrelage', desc: 'Remplacement carreaux cass\u00e9s, injection carreaux creux, fissures.', href: '/services/reparation-carrelage', icon: 'Wrench', price: '\u20ac80 - \u20ac350/zone' },
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
      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* Hero header -- asymmetric split */}
      <section className="bg-brand-900 text-ivory-25 py-16 md:py-24 px-6 relative overflow-hidden">
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
