import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Pierre Naturelle Luxembourg | Marbre, Travertin, Granit',
  description: 'Pose de pierre naturelle au Luxembourg : marbre, travertin, granit, ardoise. Imprégnation et traitement inclus. Protocoles adaptés à chaque pierre. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-pierre-naturelle' },
}

export default function PosePierreNaturelle() {
  return (
    <ServicePageLayout
      title="Pose de Pierre Naturelle au Luxembourg"
      subtitle="Marbre, travertin, granit, ardoise"
      description="Le marbre de Carrare ne se pose pas comme du grès cérame. Chaque pierre a son protocole, ses colles, son traitement. Colle blanche obligatoire sur marbre, imprégnation Fila MP90 avant et après jointoyage, remplissage des vacuoles du travertin — c&apos;est ce savoir-faire qui fait la différence entre un sol qui vieillit bien et un sol qui se tache au premier café renversé."
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c349979?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de pierre naturelle marbre par Terranova Luxembourg"
      priceRange="€65 - €150/m² pose seule"
      duration="2 à 12 jours"
      benefits={[
        "Protocoles de pose distincts adaptés à chaque nature de pierre",
        "Colles blanches systématiques pour pierres translucides (marbre, onyx)",
        "Imprégnation et traitement de protection Fila inclus dans le devis",
        "Maîtrise du marbre Calacatta, travertin, granit, quartzite, ardoise",
        "Remplissage des vacuoles de travertin inclus",
        "Conseils d\'entretien et carnet de maintenance de la pierre remis",
        "Coupe miroir pour raccord de veinage (book matching) sur demande",
      ]}
      process={[
        "Étude de la pierre (résistance, porosité, sensibilité acide) et protocole adapté",
        "Calepinage en plan pour optimiser les veines et minimiser les chutes",
        "Préparation support (chape, ragréage, désolidarisation si plancher bois)",
        "Pré-imprégnation de la pierre (marbre, travertin) avant pose",
        "Encollage double avec colle adaptée",
        "Pose avec joints fins et niveleurs Raimondi",
        "Remplissage vacuoles travertin si applicable",
        "Jointoyage adapté (mortier fin blanc ou époxy)",
        "Imprégnation finale et protection",
        "Remise du carnet d\'entretien personnalisé",
      ]}
      guarantees={[
        "Garantie décennale de la pose (assurance RC Pro décennale)",
        "Garantie de non-tachage à la colle (colles blanches pour pierres sensibles)",
        "Carnet d\'entretien personnalisé avec produits adaptés à chaque type de pierre",
        "Résistance antiglisse certifiée pour surfaces extérieures (R11 minimum)",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose pierre naturelle' },
      ]}
      relatedServices={[
        { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
        { label: 'Guide matériaux', href: '/materiaux' },
        { label: 'Réalisations', href: '/realisations' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Pierre Naturelle Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
