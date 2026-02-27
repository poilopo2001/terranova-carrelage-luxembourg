import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Réparation Carrelage Luxembourg | Carreaux Cassés & Fissurés',
  description: 'Réparation de carrelage au Luxembourg : remplacement carreaux cassés, injection carreaux creux, réparation fissures. Diagnostic précis par un Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/reparation-carrelage' },
}

export default function ReparationCarrelage() {
  return (
    <ServicePageLayout
      title="Réparation de Carrelage au Luxembourg"
      subtitle="Carreaux cassés, fissurés ou creux"
      description="Pour les carreaux sonnant creux sans être fissurés, on pratique l&apos;injection de résine Mapei Eporip par perçage d&apos;un trou de 6mm — reconsolidation sans dépose. Pour les carreaux cassés, découpe des joints au disque diamant fin, décollement progressif au ciseau fin sans choc aux carreaux voisins. Précision et patience."
      image="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Réparation de carrelage par Terranova Luxembourg"
      priceRange="€80 - €350/zone"
      duration="2 à 8 heures"
      benefits={[
        "Dépose de carreaux individuels sans endommager les carreaux adjacents",
        "Recherche du carreau identique ou proposition de variante décorative",
        "Injection de colle Mapei Eporip pour carreaux sonnant creux (sans dépose)",
        "Traitement des fissures fines par résine époxy teintée assortie",
        "Intervention ponctuelle sans immobiliser une pièce entière",
        "Idéal pour réparations avant vente ou état des lieux",
      ]}
      process={[
        "Diagnostic : test sonorité (carreaux creux) et évaluation des fissures",
        "Identification du carrelage existant et recherche du carreau identique",
        "Option creuse : injection résine Eporip et reconsolidation",
        "Option dépose : découpe joints, dépose carreau, préparation du support",
        "Pose du carreau de remplacement à la colle adaptée",
        "Jointoyage assorti aux joints existants",
        "Nettoyage et présentation",
      ]}
      guarantees={[
        "Garantie 5 ans sur la réparation",
        "Garantie de non-dommage aux carreaux adjacents",
        "Correspondance visuelle validée par le client avant pose",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Réparation carrelage' },
      ]}
      relatedServices={[
        { label: 'Rénovation', href: '/services/renovation-carrelage' },
        { label: 'Jointoyage', href: '/services/jointoyage' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Réparation Carrelage Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
