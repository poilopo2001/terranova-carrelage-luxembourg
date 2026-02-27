import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carrelage Terrasse Extérieur Luxembourg | Antidérapant & Gel',
  description: 'Pose de carrelage terrasse extérieur au Luxembourg. Résistance gel, antidérapant R11, grès cérame 20mm. Compagnon du Tour de France. Showroom Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carrelage-terrasse-exterieur-luxembourg' },
}

export default function CarrelageTerrasse() {
  return (
    <PillarPageLayout
      title="Carrelage Terrasse Extérieur au Luxembourg"
      subtitle="Résistant au gel, antidérapant"
      intro="Le Luxembourg connaît des hivers rudes. Un carrelage extérieur doit résister au gel (classe GEL+), être antidérapant (R11 minimum en bord de piscine), et supporté par un protocole de pose adapté. On ne pose pas une terrasse comme un sol intérieur."
      sections={[
        { title: 'Grès cérame 20mm sur plots ou collé', content: 'Deux techniques : pose collée sur chape béton (colle C2 FE S2 résistant gel, pente 1,5% obligatoire) ou pose sur plots réglables (dalles 20mm, pas de colle, drainage naturel). Le grès cérame 20mm Marazzi, Refin ou Mirage offre une résistance mécanique supérieure.', link: { label: 'Service pose sol', href: '/services/pose-carrelage-sol' } },
        { title: 'Pierre naturelle en extérieur', content: 'Granit bouchardé, travertin bouchiardé, ardoise naturelle. Traitement antidérapant Fila Finish Antislip obligatoire. Imprégnation hydrofuge et oléofuge pour résister aux intempéries.', link: { label: 'Service pierre naturelle', href: '/services/pose-pierre-naturelle' } },
        { title: 'Résistance au gel luxembourgeois', content: 'Tout carrelage extérieur posé par Terranova est certifié GEL+ (absorption d\'eau < 0,5%). Les joints sont réalisés en mortier-colle souple (pas de joint dur qui fissure au gel). Martine de Remich : aucune remontée de gel après deux hivers sur sa terrasse de 68\ m².' },
      ]}
      faq={[
        { q: 'Quel carrelage pour une terrasse au Luxembourg\ ?', a: 'Grès cérame 20mm GEL+ R11. Ou pierre naturelle bouchardée avec traitement antidérapant. Absorption d\'eau inférieure à 0,5%.' },
        { q: 'Pose sur plots ou posé collé\ ?', a: 'Plots : plus facile, réversible, bon drainage. Collé : plus stable, aspect plus fini, nécessite une chape béton avec pente. François recommande en fonction de votre terrain.' },
        { q: 'La garantie couvre-t-elle le gel\ ?', a: 'Oui. Garantie décennale sur la pose et garantie résistance gel (sous réserve carreaux GEL+ validés dans le devis).' },
      ]}
      relatedLinks={[
        { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
        { label: 'Tendances 2026', href: '/blog/tendances-carrelage-2026-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Carrelage Terrasse Extérieur au Luxembourg",
        author: { "@type": "Person", name: "François Rodrigues" },
      }}
    />
  )
}
