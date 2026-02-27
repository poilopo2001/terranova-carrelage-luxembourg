import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carrelage Salle de Bain Luxembourg | Pose & Étanchéité',
  description: 'Pose de carrelage salle de bain au Luxembourg. Étanchéité Schlüter-Ditra, faïence, douche italienne. Garantie 10 ans.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carrelage-salle-de-bain-luxembourg' },
}

export default function CarrelageSalleDeBain() {
  return (
    <PillarPageLayout
      title="Carrelage Salle de Bain au Luxembourg \u2013 Pose & Étanchéité"
      subtitle="Douche italienne, faïence, mosaïque"
      intro="La salle de bain est la pièce la plus technique d\'une maison. Étanchéité sous carrelage, pente d\'écoulement, résistance à l\'humidité permanente — on ne pose pas du grand format 60x120 en douche sans membrane Schlüter-Kerdi et joints époxy. C\'est non négociable."
      sections={[
        { title: 'Douche italienne intégrale', content: 'Receveur extra-plat ou receveur maçonné, membrane Schlüter-Kerdi intégrale, pente 1,5% vers le siphon, caniveau ou bonde. Joints époxy Kerapoxy sur toute la surface. Niche encastrée Schlüter-SHELF avec étanchéité intégrée.', link: { label: 'Service carrelage mural', href: '/services/pose-carrelage-mural' } },
        { title: 'Faïence décorative', content: 'Zellige, subway tiles en bossage, hexagones, grands formats 30x90. Calepinage décoratif validé sur écran avant début du chantier. Colles blanches C2 TE pour faïences claires.', link: { label: 'Service faïence', href: '/services/pose-faience' } },
        { title: 'Mosaïque en salle de bain', content: 'Mosaïque verre, marbre ou émaux pour bac de douche, fond de niche, frise décorative. Joints époxy impératifs en zone immergée. Calepinage informatique pour valider le motif.', link: { label: 'Service mosaïque', href: '/services/pose-mosaique' } },
        { title: 'Matériaux recommandés', content: 'Sol salle de bain : grès cérame antidérapant R10 minimum (R11 pour douche). Murs : faïence, grès cérame rectifié, pierre naturelle imprégnée. Éviter le marbre en sol de douche (trop glissant) sauf traitement antidérapant spécifique.' },
      ]}
      faq={[
        { q: 'Quel carrelage pour une douche italienne\ ?', a: 'Grès cérame antidérapant R10/R11 en sol, grand format ou mosaïque en mur. Étanchéité sous carrelage obligatoire (membrane Schlüter-Kerdi). Joints époxy Kerapoxy.' },
        { q: 'Combien coûte le carrelage d\'une salle de bain complète\ ?', a: 'De 2 500€ (petite salle d\'eau 6m²) à 15 000€+ (grande salle de bain avec douche italienne, mosaïque et marbre). François chiffre après visite technique.' },
        { q: 'Faut-il une étanchéité sous le carrelage\ ?', a: 'Oui, c\'est obligatoire en zone douche (locale P3). Membrane Schlüter-Kerdi ou Sika Toperfix. Sans étanchéité, l\'eau s\'infiltre et détériore le support en quelques années.' },
      ]}
      relatedLinks={[
        { label: 'Carrelage mural', href: '/services/pose-carrelage-mural' },
        { label: 'Faïence', href: '/services/pose-faience' },
        { label: 'Mosaïque', href: '/services/pose-mosaique' },
        { label: 'Prix pose carrelage 2026', href: '/blog/cout-pose-carrelage-luxembourg-2026' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Carrelage Salle de Bain au Luxembourg",
        author: { "@type": "Person", name: "François Rodrigues" },
      }}
    />
  )
}
