import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Comment Choisir Son Carrelage au Luxembourg | Guide Complet',
  description: 'Gr\u00e8s c\u00e9rame, fa\u00efence ou pierre naturelle\u00a0? Guide de choix par un artisan compagnon du Tour de France au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg' },
}

export default function ChoisirCarrelage() {
  return (
    <BlogArticleLayout
      title="Comment choisir son carrelage au Luxembourg : gr\u00e8s c\u00e9rame, fa\u00efence ou pierre naturelle\u00a0?"
      date="F\u00e9vrier 2026"
      readTime="10 min"
      intro="Apr\u00e8s 25 ans et plus de 2 800 chantiers, la question qui revient le plus : quel mat\u00e9riau choisir\u00a0? La r\u00e9ponse d\u00e9pend de la pi\u00e8ce, du budget et du style de vie. Voici un guide sans langue de bois."
      sections={[
        { title: 'Gr\u00e8s c\u00e9rame : le choix rationnel', content: 'Le gr\u00e8s c\u00e9rame couvre 80% des besoins. R\u00e9sistant au gel, aux taches, \u00e0 l\u0027usure, disponible dans tous les formats et d\u00e9cors (imitation bois, b\u00e9ton, pierre, m\u00e9tal). C\u0027est le mat\u00e9riau que je recommande pour les sols \u00e0 fort passage, les cuisines, les terrasses. Formats jusqu\u0027\u00e0 120x260cm. Entretien : eau et savon neutre. Pas de traitement n\u00e9cessaire.' },
        { title: 'Fa\u00efence : la libert\u00e9 d\u00e9corative', content: 'La fa\u00efence est une c\u00e9ramique \u00e9maill\u00e9e r\u00e9serv\u00e9e aux murs (trop fragile pour le sol). Son atout : la diversit\u00e9 d\u00e9corative. Zellige marocain, subway tiles, hexagones, motifs floraux, bossage 3D. Les marques Porcelanosa, Equipe Ceramicas, Peronda offrent des gammes spectaculaires. Cr\u00e9dence de cuisine, murs de salle de bain \u2014 c\u0027est l\u00e0 que la fa\u00efence excelle.' },
        { title: 'Pierre naturelle : l\u0027investissement \u00e9motionnel', content: 'Le marbre, le travertin, le granit ne se choisissent pas comme un carrelage. C\u0027est un investissement \u00e9motionnel. Chaque dalle est unique. Le marbre vieillit, se patine, raconte une histoire. Mais il exige un entretien sp\u00e9cifique : jamais d\u0027acide, impr\u00e9gnation r\u00e9guli\u00e8re, nettoyant neutre. Si vous acceptez cette r\u00e8gle, la pierre naturelle vous le rendra par sa beaut\u00e9 durable.' },
        { title: 'Mon conseil selon la pi\u00e8ce', content: 'S\u00e9jour : gr\u00e8s c\u00e9rame grand format OU pierre naturelle (travertin, marbre)\nCuisine sol : gr\u00e8s c\u00e9rame (r\u00e9sistant taches)\nCuisine cr\u00e9dence : fa\u00efence d\u00e9corative ou gr\u00e8s fin\nSalle de bain sol : gr\u00e8s c\u00e9rame antid\u00e9rapant R10\nSalle de bain murs : fa\u00efence, gr\u00e8s c\u00e9rame, mosa\u00efque\nTerrasse : gr\u00e8s c\u00e9rame 20mm GEL+ R11\nChambre : parquet carrel\u00e9 (chaleur du bois, durabilit\u00e9 du carrelage)' },
      ]}
      relatedLinks={[
        { label: 'Guide mat\u00e9riaux complet', href: '/materiaux' },
        { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
        { label: 'Tendances 2026', href: '/blog/tendances-carrelage-2026-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Comment choisir son carrelage au Luxembourg",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
        datePublished: "2026-02-15",
      }}
    />
  )
}
