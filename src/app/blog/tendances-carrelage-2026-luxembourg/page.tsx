import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Tendances Carrelage 2026 Luxembourg | Grands Formats & Terrazzo',
  description: 'Tendances carrelage 2026 au Luxembourg : grands formats, terrazzo, effets mati\u00e8re, couleurs terracotta. D\u00e9cryptage par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/tendances-carrelage-2026-luxembourg' },
}

export default function TendancesCarrelage2026() {
  return (
    <BlogArticleLayout
      title="Tendances carrelage 2026 au Luxembourg : grands formats, terrazzo et effets mati\u00e8re"
      date="D\u00e9cembre 2025"
      readTime="7 min"
      intro="Apr\u00e8s le salon Cersaie 2025 \u00e0 Bologne et les retours de nos fournisseurs (Atlas Concorde, Florim, Porcelanosa), voici les tendances qui arrivent dans les maisons luxembourgeoises en 2026. Certaines sont des modes passag\u00e8res, d\u0027autres sont l\u00e0 pour durer."
      sections={[
        { title: 'Le tr\u00e8s grand format (120x240 et plus)', content: 'La dalle XXL continue sa progression. 120x240cm, 120x260cm, m\u00eame 160x320cm chez certains fabricants. L\u0027avantage : moins de joints, aspect monolithique, sol \u00ab sans couture \u00bb. La contrainte : la pose exige un double encollage, des ventouses, deux poseurs et un support parfaitement plan. Pas un chantier pour amateur.' },
        { title: 'Le terrazzo fait son retour', content: 'Le terrazzo (granito), technique ancestrale m\u00e9langeant \u00e9clats de marbre dans un liant ciment, revient en force. Disponible en gr\u00e8s c\u00e9rame (imitation) ou en vrai coulage (pour les budgets cons\u00e9quents). Les d\u00e9clinaisons contemporaines jouent sur des \u00e9clats color\u00e9s (rose, terracotta, vert) sur fond blanc ou gris.' },
        { title: 'Effets mati\u00e8re : b\u00e9ton, m\u00e9tal, textile', content: 'Au-del\u00e0 du classique effet pierre et effet bois, 2026 voit l\u0027essor des effets b\u00e9ton brut (texture irr\u00e9guli\u00e8re, patine vieille), m\u00e9tal oxyd\u00e9 (cuivre, laiton, rouille contr\u00f4l\u00e9e), et textile (trame de lin, tweed). Ces d\u00e9cors sont exclusivement en gr\u00e8s c\u00e9rame et se posent comme tout grand format.' },
        { title: 'Couleurs : terracotta, sauge, bleu profond', content: 'Apr\u00e8s des ann\u00e9es de gris et de blanc, la couleur revient. Terracotta chaude, vert sauge, bleu profond \u2014 en fa\u00efence murale principalement. Pour le sol, les teintes restent naturelles : beige, sable, gris chaud, noir.' },
        { title: 'Ce qui passe vs ce qui dure', content: 'Passe : les motifs trop th\u00e9matiques (carreaux de ciment imprim\u00e9s, mosa\u00efque zellige partout).\nDure : le grand format, le gr\u00e8s c\u00e9rame effet pierre, le parquet carrel\u00e9. En 25 ans, j\u0027ai vu passer beaucoup de modes. Le mat\u00e9riau noble et bien pos\u00e9 ne se d\u00e9mode jamais.' },
      ]}
      relatedLinks={[
        { label: 'Choisir son carrelage', href: '/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg' },
        { label: 'Terrasse ext\u00e9rieur', href: '/carrelage-terrasse-exterieur-luxembourg' },
        { label: 'R\u00e9alisations', href: '/realisations' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Tendances carrelage 2026 au Luxembourg",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
        datePublished: "2025-12-15",
      }}
    />
  )
}
