import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carrelage Salle de Bain Luxembourg | Pose & \u00c9tanch\u00e9it\u00e9',
  description: 'Pose de carrelage salle de bain au Luxembourg. \u00c9tanch\u00e9it\u00e9 Schl\u00fcter-Ditra, fa\u00efence, douche italienne. Garantie 10 ans.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carrelage-salle-de-bain-luxembourg' },
}

export default function CarrelageSalleDeBain() {
  return (
    <PillarPageLayout
      title="Carrelage Salle de Bain au Luxembourg \u2013 Pose & \u00c9tanch\u00e9it\u00e9"
      subtitle="Douche italienne, fa\u00efence, mosa\u00efque"
      intro="La salle de bain est la pi\u00e8ce la plus technique d\u0027une maison. \u00c9tanch\u00e9it\u00e9 sous carrelage, pente d\u0027\u00e9coulement, r\u00e9sistance \u00e0 l\u0027humidit\u00e9 permanente \u2014 on ne pose pas du grand format 60x120 en douche sans membrane Schl\u00fcter-Kerdi et joints \u00e9poxy. C\u0027est non n\u00e9gociable."
      sections={[
        { title: 'Douche italienne int\u00e9grale', content: 'Receveur extra-plat ou receveur ma\u00e7onn\u00e9, membrane Schl\u00fcter-Kerdi int\u00e9grale, pente 1,5% vers le siphon, caniveau ou bonde. Joints \u00e9poxy Kerapoxy sur toute la surface. Niche encastr\u00e9e Schl\u00fcter-SHELF avec \u00e9tanch\u00e9it\u00e9 int\u00e9gr\u00e9e.', link: { label: 'Service carrelage mural', href: '/services/pose-carrelage-mural' } },
        { title: 'Fa\u00efence d\u00e9corative', content: 'Zellige, subway tiles en bossage, hexagones, grands formats 30x90. Calepinage d\u00e9coratif valid\u00e9 sur \u00e9cran avant d\u00e9but du chantier. Colles blanches C2 TE pour fa\u00efences claires.', link: { label: 'Service fa\u00efence', href: '/services/pose-faience' } },
        { title: 'Mosa\u00efque en salle de bain', content: 'Mosa\u00efque verre, marbre ou \u00e9maux pour bac de douche, fond de niche, frise d\u00e9corative. Joints \u00e9poxy imp\u00e9ratifs en zone immerg\u00e9e. Calepinage informatique pour valider le motif.', link: { label: 'Service mosa\u00efque', href: '/services/pose-mosaique' } },
        { title: 'Mat\u00e9riaux recommand\u00e9s', content: 'Sol salle de bain : gr\u00e8s c\u00e9rame antid\u00e9rapant R10 minimum (R11 pour douche). Murs : fa\u00efence, gr\u00e8s c\u00e9rame rectifi\u00e9, pierre naturelle impr\u00e9gn\u00e9e. \u00c9viter le marbre en sol de douche (trop glissant) sauf traitement antid\u00e9rapant sp\u00e9cifique.' },
      ]}
      faq={[
        { q: 'Quel carrelage pour une douche italienne\u00a0?', a: 'Gr\u00e8s c\u00e9rame antid\u00e9rapant R10/R11 en sol, grand format ou mosa\u00efque en mur. \u00c9tanch\u00e9it\u00e9 sous carrelage obligatoire (membrane Schl\u00fcter-Kerdi). Joints \u00e9poxy Kerapoxy.' },
        { q: 'Combien co\u00fbte le carrelage d\u0027une salle de bain compl\u00e8te\u00a0?', a: 'De 2 500\u20ac (petite salle d\u0027eau 6m\u00b2) \u00e0 15 000\u20ac+ (grande salle de bain avec douche italienne, mosa\u00efque et marbre). Fran\u00e7ois chiffre apr\u00e8s visite technique.' },
        { q: 'Faut-il une \u00e9tanch\u00e9it\u00e9 sous le carrelage\u00a0?', a: 'Oui, c\u0027est obligatoire en zone douche (locale P3). Membrane Schl\u00fcter-Kerdi ou Sika Toperfix. Sans \u00e9tanch\u00e9it\u00e9, l\u0027eau s\u0027infiltre et d\u00e9t\u00e9riore le support en quelques ann\u00e9es.' },
      ]}
      relatedLinks={[
        { label: 'Carrelage mural', href: '/services/pose-carrelage-mural' },
        { label: 'Fa\u00efence', href: '/services/pose-faience' },
        { label: 'Mosa\u00efque', href: '/services/pose-mosaique' },
        { label: 'Prix pose carrelage 2026', href: '/blog/cout-pose-carrelage-luxembourg-2026' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Carrelage Salle de Bain au Luxembourg",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
      }}
    />
  )
}
