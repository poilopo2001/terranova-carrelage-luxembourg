import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Fa\u00efence Luxembourg | Cr\u00e9dence, Subway, Zellige',
  description: 'Pose de fa\u00efence d\u00e9corative au Luxembourg : zellige, subway tiles, hexagones, cr\u00e9dence. Calepinages sur mesure. Compagnon du Tour de France \u00e0 Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-faience' },
}

export default function PoseFaience() {
  return (
    <ServicePageLayout
      title="Pose de Fa\u00efence D\u00e9corative au Luxembourg"
      subtitle="Zellige, subway tiles & cr\u00e9dence"
      description="La fa\u00efence, c\u0027est l\u0027expression d\u00e9corative du carrelage. Zellige marocain aux irr\u00e9gularit\u00e9s volontaires, subway tiles en bossage, hexagones g\u00e9om\u00e9triques \u2014 chaque format a sa technique de pose et ses colles sp\u00e9cifiques. Les colles blanches C2 TE \u00e9vitent les halos sur les fa\u00efences claires et poreuses."
      image="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de fa\u00efence d\u00e9corative par Terranova Luxembourg"
      priceRange="\u20ac38 - \u20ac72/m\u00b2 pose seule"
      duration="1 \u00e0 5 jours"
      benefits={[
        "Colles blanches C2 TE pour fa\u00efences claires et poreuses (pas de halo)",
        "Double encollage syst\u00e9matique pour formats > 30cm",
        "Calepinages d\u00e9coratifs : subway tiles, hexagones, motifs g\u00e9om\u00e9triques",
        "R\u00e9alisation de cr\u00e9dences cuisine grand format sans sur\u00e9paisseur",
        "Joints \u00e9poxy Kerapoxy disponibles pour hygi\u00e8ne maximale",
        "Correspondance carreaux et joints pour coh\u00e9rence visuelle",
      ]}
      process={[
        "Contr\u00f4le support et validation calepinage avec client",
        "Application primaire d\u0027adh\u00e9rence sur support absorbant",
        "Trac\u00e9 des rep\u00e8res horizontaux et verticaux au laser",
        "Encollage support + carrelage et pose avec auto-nivelants",
        "D\u00e9coupes en carrelette manuelle ou scie \u00e0 eau",
        "Pose des profil\u00e9s de finition et angles",
        "Jointoyage et nettoyage des surplus",
        "Finition et livraison",
      ]}
      guarantees={[
        "Garantie d\u00e9cennale de tenue de la pose",
        "Aucun carreau sonnant creux garanti \u00e0 la r\u00e9ception",
        "Garantie couleur des joints : Mapei Ultracolor certifi\u00e9 r\u00e9sistance UV",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose fa\u00efence' },
      ]}
      relatedServices={[
        { label: 'Carrelage mural', href: '/services/pose-carrelage-mural' },
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Cuisine', href: '/carrelage-cuisine-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Fa\u00efence Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
