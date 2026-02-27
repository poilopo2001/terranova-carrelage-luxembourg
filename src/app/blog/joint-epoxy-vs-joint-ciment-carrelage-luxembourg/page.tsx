import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Joint Époxy vs Joint Ciment Carrelage | Comparatif Luxembourg',
  description: 'Joint époxy vs joint ciment pour carrelage : durabilité, prix, entretien. Tout savoir pour bien choisir au Luxembourg par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg' },
}

export default function JointEpoxyVsCiment() {
  return (
    <BlogArticleLayout
      title="Joint époxy vs joint ciment : tout savoir pour bien choisir au Luxembourg"
      date="Janvier 2026"
      readTime="7 min"
      intro="Le choix du joint est aussi important que le choix du carrelage. Un joint mal adapté noircit, fissure, moisit. Voici la vérité technique sur les deux familles de joints, par un Compagnon qui en a posé des milliers de mètres linéaires."
      sections={[
        { title: 'Joint ciment : le standard éprouvé', content: 'Le joint ciment (Mapei Ultracolor Plus) est le choix classique. 27 teintes disponibles, prise rapide, résistant UV. Coût : inclus dans le prix de pose standard. Inconvénient : poreux. En zone humide (douche, bac à receveur), il absorbe l\'eau et peut développer des moisissures au bout de 3-5 ans. Un traitement hydrofuge retarde le phénomène mais ne l\'élimine pas.' },
        { title: 'Joint époxy : l\'alternative premium', content: 'Le joint époxy (Mapei Kerapoxy Design) est une résine bicomposante 100% imperméable. Zéro porosité, zéro moisissure, résistant aux produits chimiques (pH 4-11). 20 teintes. Idéal pour : douches, piscines, cuisines professionnelles, zones hospitalières. Surcoût : 5-15€/m² par rapport au joint ciment. Contrainte : pose plus technique (fenêtre de travail de 45 min avant polymérisation, essuyage à l\'éponge spécifique Rubi).' },
        { title: 'Quand choisir quoi\ ?', content: 'Zone sèche (salon, chambre, couloir) : joint ciment Ultracolor Plus. Suffisant, économique, durable.\n\nZone humide (douche, bac, piscine) : joint époxy Kerapoxy. L\'investissement se justifie par 10+ ans sans moisissure.\n\nCuisine : dépend de l\'usage. Crédence au-dessus de la plaque : époxy recommandé (projections de graisse). Sol cuisine : ciment suffit.\n\nSophie de Hesperange a fait remplacer ses joints ciment moisis par des joints époxy blancs sur 28\ m². Transformation totale pour 620€.' },
      ]}
      relatedLinks={[
        { label: 'Service jointoyage', href: '/services/jointoyage' },
        { label: 'Rénovation carrelage', href: '/renovation-carrelage-luxembourg' },
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Joint époxy vs joint ciment carrelage",
        author: { "@type": "Person", name: "François Rodrigues" },
        datePublished: "2026-01-15",
      }}
    />
  )
}
