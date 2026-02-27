import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'R\u00e9paration Carrelage Luxembourg | Carreaux Cass\u00e9s & Fissur\u00e9s',
  description: 'R\u00e9paration de carrelage au Luxembourg : remplacement carreaux cass\u00e9s, injection carreaux creux, r\u00e9paration fissures. Diagnostic pr\u00e9cis par un Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/reparation-carrelage' },
}

export default function ReparationCarrelage() {
  return (
    <ServicePageLayout
      title="R\u00e9paration de Carrelage au Luxembourg"
      subtitle="Carreaux cass\u00e9s, fissur\u00e9s ou creux"
      description="Pour les carreaux sonnant creux sans \u00eatre fissur\u00e9s, on pratique l&apos;injection de r\u00e9sine Mapei Eporip par per\u00e7age d&apos;un trou de 6mm \u2014 reconsolidation sans d\u00e9pose. Pour les carreaux cass\u00e9s, d\u00e9coupe des joints au disque diamant fin, d\u00e9collement progressif au ciseau fin sans choc aux carreaux voisins. Pr\u00e9cision et patience."
      image="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="R\u00e9paration de carrelage par Terranova Luxembourg"
      priceRange="\u20ac80 - \u20ac350/zone"
      duration="2 \u00e0 8 heures"
      benefits={[
        "D\u00e9pose de carreaux individuels sans endommager les carreaux adjacents",
        "Recherche du carreau identique ou proposition de variante d\u00e9corative",
        "Injection de colle Mapei Eporip pour carreaux sonnant creux (sans d\u00e9pose)",
        "Traitement des fissures fines par r\u00e9sine \u00e9poxy teint\u00e9e assortie",
        "Intervention ponctuelle sans immobiliser une pi\u00e8ce enti\u00e8re",
        "Id\u00e9al pour r\u00e9parations avant vente ou \u00e9tat des lieux",
      ]}
      process={[
        "Diagnostic : test sonorit\u00e9 (carreaux creux) et \u00e9valuation des fissures",
        "Identification du carrelage existant et recherche du carreau identique",
        "Option creuse : injection r\u00e9sine Eporip et reconsolidation",
        "Option d\u00e9pose : d\u00e9coupe joints, d\u00e9pose carreau, pr\u00e9paration du support",
        "Pose du carreau de remplacement \u00e0 la colle adapt\u00e9e",
        "Jointoyage assorti aux joints existants",
        "Nettoyage et pr\u00e9sentation",
      ]}
      guarantees={[
        "Garantie 5 ans sur la r\u00e9paration",
        "Garantie de non-dommage aux carreaux adjacents",
        "Correspondance visuelle valid\u00e9e par le client avant pose",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'R\u00e9paration carrelage' },
      ]}
      relatedServices={[
        { label: 'R\u00e9novation', href: '/services/renovation-carrelage' },
        { label: 'Jointoyage', href: '/services/jointoyage' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "R\u00e9paration Carrelage Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
