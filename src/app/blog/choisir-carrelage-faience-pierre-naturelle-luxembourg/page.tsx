import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Comment Choisir Son Carrelage au Luxembourg | Guide Complet',
  description: 'Grès cérame, faïence ou pierre naturelle\ ? Guide de choix par un artisan compagnon du Tour de France au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg' },
}

export default function ChoisirCarrelage() {
  return (
    <BlogArticleLayout
      title="Comment choisir son carrelage au Luxembourg : grès cérame, faïence ou pierre naturelle\ ?"
      date="Février 2026"
      readTime="10 min"
      intro="Après 25 ans et plus de 2 800 chantiers, la question qui revient le plus : quel matériau choisir\ ? La réponse dépend de la pièce, du budget et du style de vie. Voici un guide sans langue de bois."
      sections={[
        { title: 'Grès cérame : le choix rationnel', content: 'Le grès cérame couvre 80% des besoins. Résistant au gel, aux taches, à l\'usure, disponible dans tous les formats et décors (imitation bois, béton, pierre, métal). C\'est le matériau que je recommande pour les sols à fort passage, les cuisines, les terrasses. Formats jusqu\'à 120x260cm. Entretien : eau et savon neutre. Pas de traitement nécessaire.' },
        { title: 'Faïence : la liberté décorative', content: 'La faïence est une céramique émaillée réservée aux murs (trop fragile pour le sol). Son atout : la diversité décorative. Zellige marocain, subway tiles, hexagones, motifs floraux, bossage 3D. Les marques Porcelanosa, Equipe Ceramicas, Peronda offrent des gammes spectaculaires. Crédence de cuisine, murs de salle de bain — c\'est là que la faïence excelle.' },
        { title: 'Pierre naturelle : l\'investissement émotionnel', content: 'Le marbre, le travertin, le granit ne se choisissent pas comme un carrelage. C\'est un investissement émotionnel. Chaque dalle est unique. Le marbre vieillit, se patine, raconte une histoire. Mais il exige un entretien spécifique : jamais d\'acide, imprégnation régulière, nettoyant neutre. Si vous acceptez cette règle, la pierre naturelle vous le rendra par sa beauté durable.' },
        { title: 'Mon conseil selon la pièce', content: 'Séjour : grès cérame grand format OU pierre naturelle (travertin, marbre)\nCuisine sol : grès cérame (résistant taches)\nCuisine crédence : faïence décorative ou grès fin\nSalle de bain sol : grès cérame antidérapant R10\nSalle de bain murs : faïence, grès cérame, mosaïque\nTerrasse : grès cérame 20mm GEL+ R11\nChambre : parquet carrelé (chaleur du bois, durabilité du carrelage)' },
      ]}
      relatedLinks={[
        { label: 'Guide matériaux complet', href: '/materiaux' },
        { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
        { label: 'Tendances 2026', href: '/blog/tendances-carrelage-2026-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Comment choisir son carrelage au Luxembourg",
        author: { "@type": "Person", name: "François Rodrigues" },
        datePublished: "2026-02-15",
      }}
    />
  )
}
