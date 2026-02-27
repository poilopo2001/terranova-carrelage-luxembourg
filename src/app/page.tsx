import Link from 'next/link'
import { ArrowRight, Shield, Award, Grid3X3, Layers, Feather, Square, AlignLeft, Aperture } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'
import { HeroBento } from '@/components/premium/HeroBento'
import { ParallaxTestimonials } from '@/components/premium/ParallaxTestimonials'

const services = [
  { title: 'Pose carrelage sol', desc: 'Gr\u00e8s c\u00e9rame, grand format jusqu\u0027\u00e0 120x260cm, plancher chauffant.', href: '/services/pose-carrelage-sol', icon: Grid3X3 },
  { title: 'Pose carrelage mural', desc: '\u00c9tanch\u00e9it\u00e9 Schl\u00fcter-Kerdi, douche italienne, grand format 60x180.', href: '/services/pose-carrelage-mural', icon: Layers },
  { title: 'Pierre naturelle', desc: 'Marbre, travertin, granit, ardoise. Chaque pierre a son protocole.', href: '/services/pose-pierre-naturelle', icon: Feather },
  { title: 'Fa\u00efence d\u00e9corative', desc: 'Zellige, subway tiles, hexagones, cr\u00e9dence. Calepinage sur mesure.', href: '/services/pose-faience', icon: Square },
  { title: 'Parquet carrel\u00e9', desc: 'Imitation bois en gr\u00e8s c\u00e9rame. Chevron, quinconce. Lippage garanti < 0,5mm.', href: '/services/pose-parquet-carrele', icon: AlignLeft },
  { title: 'Mosa\u00efque', desc: 'Verre, marbre, \u00e9maux de Briare. Calepinage informatique.', href: '/services/pose-mosaique', icon: Aperture },
]

const testimonials = [
  {
    author: 'Marc Hoffmann',
    location: 'Kirchberg, Luxembourg-Ville',
    text: 'Fran\u00e7ois a pos\u00e9 85\u00a0m\u00b2 de marbre Calacatta Oro dans notre villa au Kirchberg. Le calepinage en diagonale avec book matching sur les veines est spectaculaire. Un r\u00e9sultat digne d\u0027un palace.',
    project: 'Marbre Calacatta Oro 85\u00a0m\u00b2',
    rating: 5,
  },
  {
    author: 'Isabelle Kremer',
    location: 'Bertrange',
    text: 'Salle de bain compl\u00e8te : fa\u00efence Porcelanosa, douche italienne, mosa\u00efque verre bleu nuit. Fran\u00e7ois a dessin\u00e9 le calepinage sur ordinateur avant de commencer. Mon architecte a demand\u00e9 son num\u00e9ro.',
    project: 'Salle de bain compl\u00e8te',
    rating: 5,
  },
  {
    author: 'Christine Schroeder',
    location: 'Ettelbruck',
    text: 'Polissage marbre au lieu d\u0027une d\u00e9pose-repose. Devis \u00e0 850\u20ac vs 3\u00a0500\u20ac propos\u00e9s ailleurs. R\u00e9sultat miroir identique au neuf. C\u0027est un professionnel qui conseille ce qui est le mieux pour le client.',
    project: 'Polissage marbre 15\u00a0m\u00b2',
    rating: 5,
  },
]


export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Terranova Carrelage Luxembourg",
      image: "https://www.terranova-carrelage.lu/og-image.jpg",
      telephone: "+352 26 54 88 75",
      email: "contact@terranova-carrelage.lu",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5, Rue de la Gare",
        addressLocality: "Mersch",
        postalCode: "L-7535",
        addressCountry: "LU",
      },
      geo: { "@type": "GeoCoordinates", latitude: 49.745, longitude: 6.105 },
      url: "https://www.terranova-carrelage.lu",
      priceRange: "\u20ac\u20ac\u20ac",
      openingHours: ["Mo-Fr 07:00-17:30", "Sa 07:00-12:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "47",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Terranova Carrelage Luxembourg",
      url: "https://www.terranova-carrelage.lu",
    },
  ]

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* HERO -- Bento Grid with gallery */}
      <HeroBento stats={[
        { value: '25', label: 'ans de m\u00e9tier' },
        { value: '2\u00a0800+', label: 'chantiers r\u00e9alis\u00e9s' },
        { value: '4', label: 'langues parl\u00e9es' },
        { value: '10', label: 'ans de garantie' },
      ]} />

      {/* SERVICES -- Asymmetric header */}
      <section className="bg-ivory-25 py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">
            <div className="md:col-span-6">
              <p className="text-accent-500 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">Le geste juste, le mat&eacute;riau juste</p>
              <h2 className="font-heading text-3xl md:text-[2.75rem] md:leading-[1.15] font-bold text-brand-900 tracking-tight">
                Chaque technique<br />de pose <span className="italic text-accent-500">ma&icirc;tris&eacute;e</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex items-end">
              <p className="font-body text-brand-600 text-base">
                Du gr&egrave;s c&eacute;rame grand format &agrave; la mosa&iuml;que en &eacute;maux de Briare, chaque mat&eacute;riau a son protocole. 25&nbsp;ans de ma&icirc;trise Compagnon.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full border-ivory-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 bg-white">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
                        <Icon className="size-5 text-accent-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-brand-900 group-hover:text-accent-500 transition-colors">{service.title}</h3>
                      <p className="font-body text-sm text-brand-600 leading-relaxed">{service.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent-500">
                        En savoir plus <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-ivory-25 font-body font-semibold rounded-[8px]">
              <Link href="/services">D&eacute;couvrir chaque technique</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="bg-brand-900 py-12 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-ivory-200 text-sm font-body">
          <span className="flex items-center gap-2"><Shield className="size-5 text-accent-400" /> Assurance RC Pro Foyer</span>
          <span className="flex items-center gap-2"><Award className="size-5 text-accent-400" /> Certifi&eacute; Sika Pro</span>
          <span className="flex items-center gap-2"><Shield className="size-5 text-accent-400" /> F&eacute;d&eacute;ration des Artisans LU</span>
          <span className="flex items-center gap-2"><Award className="size-5 text-accent-400" /> Formats jusqu&apos;&agrave; 120x260cm</span>
        </div>
      </section>

      {/* TESTIMONIALS -- Parallax dark section */}
      <ParallaxTestimonials testimonials={testimonials} />

      {/* ZONES */}
      <section className="bg-ivory-25 py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-900">Tout le Grand-Duch&eacute; couvert</h2>
            <p className="font-body text-brand-600 mt-3 max-w-xl mx-auto">Du Kirchberg aux vignobles de la Moselle, des villas de Bertrange aux maisons ardennaises d&apos;Ettelbruck &mdash; Fran&ccedil;ois conna&icirc;t chaque canton.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Luxembourg-Ville', href: '/zones-intervention/luxembourg-ville' },
              { name: 'Mersch & Steinfort', href: '/zones-intervention/mersch-steinfort' },
              { name: 'Ettelbruck & Diekirch', href: '/zones-intervention/ettelbruck-diekirch' },
              { name: 'Bertrange & Mamer', href: '/zones-intervention/bertrange-mamer' },
              { name: 'Grevenmacher & Remich', href: '/zones-intervention/grevenmacher-remich' },
            ].map((zone) => (
              <Link key={zone.href} href={zone.href} className="group">
                <Card className="border-ivory-200 hover:border-accent-500 hover:shadow-card-hover transition-all duration-300 text-center">
                  <CardContent className="p-4">
                    <p className="font-body font-semibold text-brand-900 group-hover:text-accent-500 transition-colors text-sm">{zone.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  )
}
