import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carrelage Cuisine Luxembourg | Sol, Crédence & Plan de Travail',
  description: 'Pose de carrelage cuisine au Luxembourg : sol grès cérame, crédence faïence, grand format. Compagnon du Tour de France. Chaque surface a son protocole.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carrelage-cuisine-luxembourg' },
}

export default function CarrelageCuisine() {
  return (
    <PillarPageLayout
      title="Carrelage Cuisine au Luxembourg \u2013 Sol, Crédence & Plan de Travail"
      subtitle="Grès cérame, faïence, grand format"
      intro="La cuisine est la pièce la plus sollicitée de la maison. Le carrelage y doit résister aux taches, aux chocs, à l\'humidité et aux variations de température. Du sol en grand format à la crédence en zellige — chaque surface a ses exigences."
      sections={[
        { title: 'Sol de cuisine en grand format', content: 'Grès cérame rectifié 60x120 ou 120x120 pour un sol sans coutures visuelles. Joint fin 2mm, facile à nettoyer. Imitation béton, pierre ou bois selon le style de la cuisine. André de Walferdange : 38\ m² de Florim Maxfine 120x240cm dans sa cuisine ouverte.', link: { label: 'Service pose sol', href: '/services/pose-carrelage-sol' } },
        { title: 'Crédence cuisine : faïence ou grès fin', content: 'Crédence en zellige (artisanale, irrégulière), subway tiles (classique), hexagone (géométrique), ou grès cérame fin 6mm (sans surépaisseur, raccord plan de travail). Joints époxy recommandés pour résister aux projections de graisse.', link: { label: 'Service faïence', href: '/services/pose-faience' } },
        { title: 'Matériaux recommandés', content: 'Sol : grès cérame (résistant aux taches, aux chocs). Crédence : faïence décorative ou grès fin. Plan de travail : granit (résistant aux acides et aux rayures). À éviter : marbre en plan de travail (trop sensible aux acides alimentaires).', link: { label: 'Guide matériaux', href: '/materiaux' } },
      ]}
      faq={[
        { q: 'Quel carrelage pour un sol de cuisine\ ?', a: 'Grès cérame rectifié, minimum 60x60, résistant aux taches (classe 5). Le grand format réduit les joints et facilite le nettoyage.' },
        { q: 'Crédence faïence ou verre\ ?', a: 'Faïence : plus de choix décoratifs (zellige, subway), réparable. Verre : plus lisse, moins de joints. François pose uniquement les crédences carrelage et faïence.' },
      ]}
      relatedLinks={[
        { label: 'Carrelage mural', href: '/services/pose-carrelage-mural' },
        { label: 'Faïence', href: '/services/pose-faience' },
        { label: 'Guide matériaux', href: '/materiaux' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Carrelage Cuisine au Luxembourg",
        author: { "@type": "Person", name: "François Rodrigues" },
      }}
    />
  )
}
