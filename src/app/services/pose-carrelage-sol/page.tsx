import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Carrelage Sol Luxembourg | Grand Format & Plancher Chauffant',
  description: 'Pose de carrelage de sol au Luxembourg : grès cérame, grand format jusqu\'à 120x260cm, plancher chauffant. Compagnon du Tour de France. Showroom Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-carrelage-sol' },
}

export default function PoseCarrelageSol() {
  return (
    <ServicePageLayout
      title="Pose de Carrelage de Sol au Luxembourg"
      subtitle="Compagnon du Tour de France &middot; Formats jusqu&apos;à 120x260cm"
      description="Chaque chantier débute par un contrôle de planéité au réglet de 2\ mètres et de l&apos;humidité résiduelle de la chape. On vérifie avant de poser — c&apos;est non négociable. Du 15x15 au 120x260cm, du calepinage droit au chevron, la rigueur Compagnon sur chaque mètre carré."
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de carrelage de sol grand format par Terranova Luxembourg"
      priceRange="€35 - €85/m² pose seule"
      duration="1 à 10 jours selon surface"
      benefits={[
        "Contrôle planéité et humidité avant pose (rapport écrit fourni)",
        "Ragréage autonivelant inclus si nécessaire (< 3mm d\'écart)",
        "Maîtrise des formats jusqu\'à 120x260cm (découpe scie combinée)",
        "Calepinage sur mesure optimisant les chutes et la composition visuelle",
        "Colles S1 désolidarisantes pour planchers chauffants",
        "Joints Mapei Ultracolor Plus ou résine époxy Kerapoxy (milieux humides)",
        "Nettoyage de fin de chantier et soins du carrelage inclus",
        "Garantie 10 ans sur la tenue de la pose",
      ]}
      process={[
        "Visite de chantier et contrôle du support (planéité, humidité, fissures)",
        "Étude de calepinage et validation visuelle avec le client",
        "Ragréage autonivelant si nécessaire",
        "Tracé des axes de pose et pose à sec du calepinage",
        "Encollage du support et du carrelage (double encollage pour grand format > 60cm)",
        "Pose du carrelage avec système de nivellement Raimondi",
        "Contrôle planéité et aplomb en cours de pose",
        "Découpes en scie combinée",
        "Jointoyage à J+24 minimum (mortier ou résine époxy)",
        "Nettoyage final et soins de protection",
      ]}
      guarantees={[
        "Garantie décennale de pose (assurance RC Pro Foyer Assurances)",
        "Garantie adhérence : aucun carreau sonnant creux à la réception",
        "PV de réception contradictoire remis au client",
        "Garantie résistance au gel pour pose extérieure (carreaux R11 minimum)",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose carrelage sol' },
      ]}
      relatedServices={[
        { label: 'Parquet carrelé', href: '/services/pose-parquet-carrele' },
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
            unitText: "m²",
          },
        },
      }}
    />
  )
}
