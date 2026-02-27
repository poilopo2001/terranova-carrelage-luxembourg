import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Entretien Carrelage & Pierre Naturelle | Guide Complet',
  description: 'Comment entretenir carrelage et pierre naturelle au Luxembourg : produits adapt\u00e9s, erreurs \u00e0 \u00e9viter, fr\u00e9quence. Guide par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/entretien-carrelage-pierre-naturelle-luxembourg' },
}

export default function EntretienPierreNaturelle() {
  return (
    <BlogArticleLayout
      title="Entretien du carrelage et de la pierre naturelle : le guide complet"
      date="D\u00e9cembre 2025"
      readTime="8 min"
      intro="Un sol bien pos\u00e9 ne suffit pas \u2014 il faut aussi l\u0027entretenir correctement. Et les erreurs sont fr\u00e9quentes : vinaigre sur marbre, javel sur joints ciment, nettoyeur vapeur sur travertin. Voici le carnet d\u0027entretien que Terranova remet \u00e0 chaque client."
      sections={[
        { title: 'Gr\u00e8s c\u00e9rame : le plus facile', content: 'Le gr\u00e8s c\u00e9rame est non poreux et r\u00e9sistant aux produits m\u00e9nagers. Nettoyage : eau chaude + savon neutre (Fila Cleaner ou savon de Marseille dilu\u00e9). \u00c0 \u00e9viter : les cires et les produits gras qui laissent un film. Pour un nettoyage en profondeur : Fila PS87 (d\u00e9graissant alcalin) une fois par an.' },
        { title: 'Marbre : la pierre qui demande du respect', content: 'R\u00e8gle absolue : jamais d\u0027acide sur le marbre. Le vinaigre, le citron, les nettoyants WC, l\u0027anticalcaire \u2014 tous attaquent le calcaire et cr\u00e9ent des aurol\u00e9s mates irr\u00e9versibles. Nettoyage quotidien : eau + savon neutre pH 7 (Fila Marble Restorer). R\u00e9-impr\u00e9gnation : Fila MP90 Eco Plus tous les 2-3 ans selon le trafic. Si tache : cataplasme Fila SR95 (solvant neutre).' },
        { title: 'Travertin : attention aux vacuoles', content: 'Le travertin bouch\u00e9 s\u0027entretient comme le marbre (sensible aux acides). Le travertin ouvert a des vacuoles o\u00f9 la salet\u00e9 peut s\u0027accumuler : un brossage doux r\u00e9gulier avec Fila Cleaner suffit. Ne jamais utiliser de nettoyeur haute pression sur travertin (d\u00e9t\u00e9riore les vacuoles).' },
        { title: 'Granit : quasi indestructible', content: 'Le granit est la pierre la plus facile \u00e0 entretenir. R\u00e9sistant aux acides, aux rayures, aux taches. Un nettoyage \u00e0 l\u0027eau savonneuse suffit. Impr\u00e9gnation optionnelle mais recommand\u00e9e en cuisine (Fila Stone Protect).' },
        { title: 'Les joints : l\u0027\u00e9l\u00e9ment oubli\u00e9', content: 'Les joints ciment sont poreux et absorbent la salet\u00e9. Nettoyage : brosse + Fila Fuganet (nettoyant joints). Pr\u00e9vention : traitement hydrofuge Fila Fugaproof apr\u00e8s pose et tous les 2 ans. Si les joints sont irr\u00e9cup\u00e9rables : rejointoiement \u00e9poxy (voir notre service jointoyage).' },
      ]}
      relatedLinks={[
        { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
        { label: 'Guide mat\u00e9riaux', href: '/materiaux' },
        { label: 'Service jointoyage', href: '/services/jointoyage' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Entretien du carrelage et de la pierre naturelle",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
        datePublished: "2025-12-01",
      }}
    />
  )
}
