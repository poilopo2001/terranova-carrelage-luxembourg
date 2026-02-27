import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Faïence Luxembourg | Crédence, Subway, Zellige',
  description: 'Pose de faïence décorative au Luxembourg : zellige, subway tiles, hexagones, crédence. Calepinages sur mesure. Compagnon du Tour de France à Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-faience' },
}

export default function PoseFaience() {
  return (
    <ServicePageLayout
      title="Pose de Faïence Décorative au Luxembourg"
      subtitle="Zellige, subway tiles & crédence"
      description="La faïence, c\'est l\'expression décorative du carrelage. Zellige marocain aux irrégularités volontaires, subway tiles en bossage, hexagones géométriques — chaque format a sa technique de pose et ses colles spécifiques. Les colles blanches C2 TE évitent les halos sur les faïences claires et poreuses."
      image="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de faïence décorative par Terranova Luxembourg"
      priceRange="€38 - €72/m² pose seule"
      duration="1 à 5 jours"
      benefits={[
        "Colles blanches C2 TE pour faïences claires et poreuses (pas de halo)",
        "Double encollage systématique pour formats > 30cm",
        "Calepinages décoratifs : subway tiles, hexagones, motifs géométriques",
        "Réalisation de crédences cuisine grand format sans surépaisseur",
        "Joints époxy Kerapoxy disponibles pour hygiène maximale",
        "Correspondance carreaux et joints pour cohérence visuelle",
      ]}
      process={[
        "Contrôle support et validation calepinage avec client",
        "Application primaire d\'adhérence sur support absorbant",
        "Tracé des repères horizontaux et verticaux au laser",
        "Encollage support + carrelage et pose avec auto-nivelants",
        "Découpes en carrelette manuelle ou scie à eau",
        "Pose des profilés de finition et angles",
        "Jointoyage et nettoyage des surplus",
        "Finition et livraison",
      ]}
      guarantees={[
        "Garantie décennale de tenue de la pose",
        "Aucun carreau sonnant creux garanti à la réception",
        "Garantie couleur des joints : Mapei Ultracolor certifié résistance UV",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose faïence' },
      ]}
      relatedServices={[
        { label: 'Carrelage mural', href: '/services/pose-carrelage-mural' },
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Cuisine', href: '/carrelage-cuisine-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Faïence Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
