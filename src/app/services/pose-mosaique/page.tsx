import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Mosaïque Luxembourg | Verre, Marbre, Émaux',
  description: 'Pose de mosaïque au Luxembourg : verre, marbre, émaux de Briare, céramique. Douches, piscines, crédences. Calepinage informatique. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-mosaique' },
}

export default function PoseMosaique() {
  return (
    <ServicePageLayout
      title="Pose de Mosaïque au Luxembourg"
      subtitle="L&apos;aboutissement du métier de carreleur"
      description="La mosaïque, c&apos;est l&apos;aboutissement du métier. Chaque tesselle compte. Verre soufflé irisé pour bassins, marbre Volakas en opus byzantin pour halls d&apos;entrée, émaux de Briare pour des projets de prestige — chaque pose est précédée d&apos;un calepinage informatique qui valide le motif avant l&apos;achat du matériel."
      image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de mosaïque décorative par Terranova Luxembourg"
      priceRange="€75 - €180/m² pose seule"
      duration="2 à 10 jours"
      benefits={[
        "Calepinage informatique du motif avant commande du matériel",
        "Maîtrise des 4 types : verre, marbre, céramique sur filet, émaux Briare",
        "Colles spéciales transparentes pour mosaïque verre (pas de halo)",
        "Colles hydrofuges et joints époxy pour bassins et piscines",
        "Réalisation de frises décoratives et inserts dans carrelage standard",
        "Finitions bord de mosaïque en profilé aluminium ou inox",
      ]}
      process={[
        "Calepinage informatique du motif (validation visuelle avant achat)",
        "Préparation du support (étanchéité Schlüter-Kerdi si zone humide)",
        "Encollage en couche peignée de la colle adaptée",
        "Pose des plaques de mosaïque ou des plaquettes individuelles",
        "Contrôle de l\'alignement avec règle et niveau laser",
        "Retrait du papier de maintien après 24h de séchage",
        "Jointoyage au mortier fin ou résine époxy",
        "Nettoyage et soins de protection",
      ]}
      guarantees={[
        "Garantie décennale de tenue de la pose",
        "Garantie étanchéité pour bassins et piscines",
        "Calepinage informatique conservé : repose identique possible en cas de dommage partiel",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose mosaïque' },
      ]}
      relatedServices={[
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Mosaïque Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
