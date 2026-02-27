import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Tendances Carrelage 2026 Luxembourg | Grands Formats & Terrazzo',
  description: 'Tendances carrelage 2026 au Luxembourg : grands formats, terrazzo, effets matière, couleurs terracotta. Décryptage par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/tendances-carrelage-2026-luxembourg' },
}

export default function TendancesCarrelage2026() {
  return (
    <BlogArticleLayout
      title="Tendances carrelage 2026 au Luxembourg : grands formats, terrazzo et effets matière"
      date="Décembre 2025"
      readTime="7 min"
      intro="Après le salon Cersaie 2025 à Bologne et les retours de nos fournisseurs (Atlas Concorde, Florim, Porcelanosa), voici les tendances qui arrivent dans les maisons luxembourgeoises en 2026. Certaines sont des modes passagères, d\'autres sont là pour durer."
      sections={[
        { title: 'Le très grand format (120x240 et plus)', content: 'La dalle XXL continue sa progression. 120x240cm, 120x260cm, même 160x320cm chez certains fabricants. L\'avantage : moins de joints, aspect monolithique, sol \« sans couture \». La contrainte : la pose exige un double encollage, des ventouses, deux poseurs et un support parfaitement plan. Pas un chantier pour amateur.' },
        { title: 'Le terrazzo fait son retour', content: 'Le terrazzo (granito), technique ancestrale mélangeant éclats de marbre dans un liant ciment, revient en force. Disponible en grès cérame (imitation) ou en vrai coulage (pour les budgets conséquents). Les déclinaisons contemporaines jouent sur des éclats colorés (rose, terracotta, vert) sur fond blanc ou gris.' },
        { title: 'Effets matière : béton, métal, textile', content: 'Au-delà du classique effet pierre et effet bois, 2026 voit l\'essor des effets béton brut (texture irrégulière, patine vieille), métal oxydé (cuivre, laiton, rouille contrôlée), et textile (trame de lin, tweed). Ces décors sont exclusivement en grès cérame et se posent comme tout grand format.' },
        { title: 'Couleurs : terracotta, sauge, bleu profond', content: 'Après des années de gris et de blanc, la couleur revient. Terracotta chaude, vert sauge, bleu profond — en faïence murale principalement. Pour le sol, les teintes restent naturelles : beige, sable, gris chaud, noir.' },
        { title: 'Ce qui passe vs ce qui dure', content: 'Passe : les motifs trop thématiques (carreaux de ciment imprimés, mosaïque zellige partout).\nDure : le grand format, le grès cérame effet pierre, le parquet carrelé. En 25 ans, j\'ai vu passer beaucoup de modes. Le matériau noble et bien posé ne se démode jamais.' },
      ]}
      relatedLinks={[
        { label: 'Choisir son carrelage', href: '/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg' },
        { label: 'Terrasse extérieur', href: '/carrelage-terrasse-exterieur-luxembourg' },
        { label: 'Réalisations', href: '/realisations' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Tendances carrelage 2026 au Luxembourg",
        author: { "@type": "Person", name: "François Rodrigues" },
        datePublished: "2025-12-15",
      }}
    />
  )
}
