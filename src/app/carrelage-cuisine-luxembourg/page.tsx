import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carrelage Cuisine Luxembourg | Sol, Cr\u00e9dence & Plan de Travail',
  description: 'Pose de carrelage cuisine au Luxembourg : sol gr\u00e8s c\u00e9rame, cr\u00e9dence fa\u00efence, grand format. Compagnon du Tour de France. Chaque surface a son protocole.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carrelage-cuisine-luxembourg' },
}

export default function CarrelageCuisine() {
  return (
    <PillarPageLayout
      title="Carrelage Cuisine au Luxembourg \u2013 Sol, Cr\u00e9dence & Plan de Travail"
      subtitle="Gr\u00e8s c\u00e9rame, fa\u00efence, grand format"
      intro="La cuisine est la pi\u00e8ce la plus sollicit\u00e9e de la maison. Le carrelage y doit r\u00e9sister aux taches, aux chocs, \u00e0 l\u0027humidit\u00e9 et aux variations de temp\u00e9rature. Du sol en grand format \u00e0 la cr\u00e9dence en zellige \u2014 chaque surface a ses exigences."
      sections={[
        { title: 'Sol de cuisine en grand format', content: 'Gr\u00e8s c\u00e9rame rectifi\u00e9 60x120 ou 120x120 pour un sol sans coutures visuelles. Joint fin 2mm, facile \u00e0 nettoyer. Imitation b\u00e9ton, pierre ou bois selon le style de la cuisine. Andr\u00e9 de Walferdange : 38\u00a0m\u00b2 de Florim Maxfine 120x240cm dans sa cuisine ouverte.', link: { label: 'Service pose sol', href: '/services/pose-carrelage-sol' } },
        { title: 'Cr\u00e9dence cuisine : fa\u00efence ou gr\u00e8s fin', content: 'Cr\u00e9dence en zellige (artisanale, irr\u00e9guli\u00e8re), subway tiles (classique), hexagone (g\u00e9om\u00e9trique), ou gr\u00e8s c\u00e9rame fin 6mm (sans sur\u00e9paisseur, raccord plan de travail). Joints \u00e9poxy recommand\u00e9s pour r\u00e9sister aux projections de graisse.', link: { label: 'Service fa\u00efence', href: '/services/pose-faience' } },
        { title: 'Mat\u00e9riaux recommand\u00e9s', content: 'Sol : gr\u00e8s c\u00e9rame (r\u00e9sistant aux taches, aux chocs). Cr\u00e9dence : fa\u00efence d\u00e9corative ou gr\u00e8s fin. Plan de travail : granit (r\u00e9sistant aux acides et aux rayures). \u00c0 \u00e9viter : marbre en plan de travail (trop sensible aux acides alimentaires).', link: { label: 'Guide mat\u00e9riaux', href: '/materiaux' } },
      ]}
      faq={[
        { q: 'Quel carrelage pour un sol de cuisine\u00a0?', a: 'Gr\u00e8s c\u00e9rame rectifi\u00e9, minimum 60x60, r\u00e9sistant aux taches (classe 5). Le grand format r\u00e9duit les joints et facilite le nettoyage.' },
        { q: 'Cr\u00e9dence fa\u00efence ou verre\u00a0?', a: 'Fa\u00efence : plus de choix d\u00e9coratifs (zellige, subway), r\u00e9parable. Verre : plus lisse, moins de joints. Fran\u00e7ois pose uniquement les cr\u00e9dences carrelage et fa\u00efence.' },
      ]}
      relatedLinks={[
        { label: 'Carrelage mural', href: '/services/pose-carrelage-mural' },
        { label: 'Fa\u00efence', href: '/services/pose-faience' },
        { label: 'Guide mat\u00e9riaux', href: '/materiaux' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Carrelage Cuisine au Luxembourg",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
      }}
    />
  )
}
