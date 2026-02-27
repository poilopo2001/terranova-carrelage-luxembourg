import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Pierre Naturelle Luxembourg | Marbre, Travertin, Granit',
  description: 'Pose de pierre naturelle au Luxembourg : marbre, travertin, granit, ardoise. Impr\u00e9gnation et traitement inclus. Protocoles adapt\u00e9s \u00e0 chaque pierre. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-pierre-naturelle' },
}

export default function PosePierreNaturelle() {
  return (
    <ServicePageLayout
      title="Pose de Pierre Naturelle au Luxembourg"
      subtitle="Marbre, travertin, granit, ardoise"
      description="Le marbre de Carrare ne se pose pas comme du gr\u00e8s c\u00e9rame. Chaque pierre a son protocole, ses colles, son traitement. Colle blanche obligatoire sur marbre, impr\u00e9gnation Fila MP90 avant et apr\u00e8s jointoyage, remplissage des vacuoles du travertin \u2014 c&apos;est ce savoir-faire qui fait la diff\u00e9rence entre un sol qui vieillit bien et un sol qui se tache au premier caf\u00e9 renvers\u00e9."
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c349979?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de pierre naturelle marbre par Terranova Luxembourg"
      priceRange="\u20ac65 - \u20ac150/m\u00b2 pose seule"
      duration="2 \u00e0 12 jours"
      benefits={[
        "Protocoles de pose distincts adapt\u00e9s \u00e0 chaque nature de pierre",
        "Colles blanches syst\u00e9matiques pour pierres translucides (marbre, onyx)",
        "Impr\u00e9gnation et traitement de protection Fila inclus dans le devis",
        "Ma\u00eetrise du marbre Calacatta, travertin, granit, quartzite, ardoise",
        "Remplissage des vacuoles de travertin inclus",
        "Conseils d\u0027entretien et carnet de maintenance de la pierre remis",
        "Coupe miroir pour raccord de veinage (book matching) sur demande",
      ]}
      process={[
        "\u00c9tude de la pierre (r\u00e9sistance, porosit\u00e9, sensibilit\u00e9 acide) et protocole adapt\u00e9",
        "Calepinage en plan pour optimiser les veines et minimiser les chutes",
        "Pr\u00e9paration support (chape, ragr\u00e9age, d\u00e9solidarisation si plancher bois)",
        "Pr\u00e9-impr\u00e9gnation de la pierre (marbre, travertin) avant pose",
        "Encollage double avec colle adapt\u00e9e",
        "Pose avec joints fins et niveleurs Raimondi",
        "Remplissage vacuoles travertin si applicable",
        "Jointoyage adapt\u00e9 (mortier fin blanc ou \u00e9poxy)",
        "Impr\u00e9gnation finale et protection",
        "Remise du carnet d\u0027entretien personnalis\u00e9",
      ]}
      guarantees={[
        "Garantie d\u00e9cennale de la pose (assurance RC Pro d\u00e9cennale)",
        "Garantie de non-tachage \u00e0 la colle (colles blanches pour pierres sensibles)",
        "Carnet d\u0027entretien personnalis\u00e9 avec produits adapt\u00e9s \u00e0 chaque type de pierre",
        "R\u00e9sistance antiglisse certifi\u00e9e pour surfaces ext\u00e9rieures (R11 minimum)",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose pierre naturelle' },
      ]}
      relatedServices={[
        { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
        { label: 'Guide mat\u00e9riaux', href: '/materiaux' },
        { label: 'R\u00e9alisations', href: '/realisations' },
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
