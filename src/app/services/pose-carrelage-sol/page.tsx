import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Carrelage Sol Luxembourg | Grand Format & Plancher Chauffant',
  description: 'Pose de carrelage de sol au Luxembourg : gr\u00e8s c\u00e9rame, grand format jusqu\u0027\u00e0 120x260cm, plancher chauffant. Compagnon du Tour de France. Showroom Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-carrelage-sol' },
}

export default function PoseCarrelageSol() {
  return (
    <ServicePageLayout
      title="Pose de Carrelage de Sol au Luxembourg"
      subtitle="Compagnon du Tour de France &middot; Formats jusqu&apos;\u00e0 120x260cm"
      description="Chaque chantier d\u00e9bute par un contr\u00f4le de plan\u00e9it\u00e9 au r\u00e9glet de 2\u00a0m\u00e8tres et de l&apos;humidit\u00e9 r\u00e9siduelle de la chape. On v\u00e9rifie avant de poser \u2014 c&apos;est non n\u00e9gociable. Du 15x15 au 120x260cm, du calepinage droit au chevron, la rigueur Compagnon sur chaque m\u00e8tre carr\u00e9."
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de carrelage de sol grand format par Terranova Luxembourg"
      priceRange="\u20ac35 - \u20ac85/m\u00b2 pose seule"
      duration="1 \u00e0 10 jours selon surface"
      benefits={[
        "Contr\u00f4le plan\u00e9it\u00e9 et humidit\u00e9 avant pose (rapport \u00e9crit fourni)",
        "Ragr\u00e9age autonivelant inclus si n\u00e9cessaire (< 3mm d\u0027\u00e9cart)",
        "Ma\u00eetrise des formats jusqu\u0027\u00e0 120x260cm (d\u00e9coupe scie combin\u00e9e)",
        "Calepinage sur mesure optimisant les chutes et la composition visuelle",
        "Colles S1 d\u00e9solidarisantes pour planchers chauffants",
        "Joints Mapei Ultracolor Plus ou r\u00e9sine \u00e9poxy Kerapoxy (milieux humides)",
        "Nettoyage de fin de chantier et soins du carrelage inclus",
        "Garantie 10 ans sur la tenue de la pose",
      ]}
      process={[
        "Visite de chantier et contr\u00f4le du support (plan\u00e9it\u00e9, humidit\u00e9, fissures)",
        "\u00c9tude de calepinage et validation visuelle avec le client",
        "Ragr\u00e9age autonivelant si n\u00e9cessaire",
        "Trac\u00e9 des axes de pose et pose \u00e0 sec du calepinage",
        "Encollage du support et du carrelage (double encollage pour grand format > 60cm)",
        "Pose du carrelage avec syst\u00e8me de nivellement Raimondi",
        "Contr\u00f4le plan\u00e9it\u00e9 et aplomb en cours de pose",
        "D\u00e9coupes en scie combin\u00e9e",
        "Jointoyage \u00e0 J+24 minimum (mortier ou r\u00e9sine \u00e9poxy)",
        "Nettoyage final et soins de protection",
      ]}
      guarantees={[
        "Garantie d\u00e9cennale de pose (assurance RC Pro Foyer Assurances)",
        "Garantie adh\u00e9rence : aucun carreau sonnant creux \u00e0 la r\u00e9ception",
        "PV de r\u00e9ception contradictoire remis au client",
        "Garantie r\u00e9sistance au gel pour pose ext\u00e9rieure (carreaux R11 minimum)",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose carrelage sol' },
      ]}
      relatedServices={[
        { label: 'Parquet carrel\u00e9', href: '/services/pose-parquet-carrele' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
        { label: 'Carreleur Luxembourg', href: '/carreleur-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Carrelage Sol Luxembourg",
        description: "Pose professionnelle de carrelage de sol au Luxembourg par artisan compagnon du Tour de France.",
        provider: {
          "@type": "LocalBusiness",
          name: "Terranova Carrelage Luxembourg",
          telephone: "+352 26 54 88 75",
        },
        areaServed: { "@type": "Country", name: "Luxembourg" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "35-85",
            priceCurrency: "EUR",
            unitText: "m\u00b2",
          },
        },
      }}
    />
  )
}
