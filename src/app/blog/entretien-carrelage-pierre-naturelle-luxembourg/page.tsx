import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Entretien Carrelage & Pierre Naturelle | Guide Complet',
  description: 'Comment entretenir carrelage et pierre naturelle au Luxembourg : produits adaptés, erreurs à éviter, fréquence. Guide par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/entretien-carrelage-pierre-naturelle-luxembourg' },
}

export default function EntretienPierreNaturelle() {
  return (
    <BlogArticleLayout
      title="Entretien du carrelage et de la pierre naturelle : le guide complet"
      date="Décembre 2025"
      readTime="8 min"
      intro="Un sol bien posé ne suffit pas — il faut aussi l\'entretenir correctement. Et les erreurs sont fréquentes : vinaigre sur marbre, javel sur joints ciment, nettoyeur vapeur sur travertin. Voici le carnet d\'entretien que Terranova remet à chaque client."
      sections={[
        { title: 'Grès cérame : le plus facile', content: 'Le grès cérame est non poreux et résistant aux produits ménagers. Nettoyage : eau chaude + savon neutre (Fila Cleaner ou savon de Marseille dilué). À éviter : les cires et les produits gras qui laissent un film. Pour un nettoyage en profondeur : Fila PS87 (dégraissant alcalin) une fois par an.' },
        { title: 'Marbre : la pierre qui demande du respect', content: 'Règle absolue : jamais d\'acide sur le marbre. Le vinaigre, le citron, les nettoyants WC, l\'anticalcaire — tous attaquent le calcaire et créent des aurolés mates irréversibles. Nettoyage quotidien : eau + savon neutre pH 7 (Fila Marble Restorer). Ré-imprégnation : Fila MP90 Eco Plus tous les 2-3 ans selon le trafic. Si tache : cataplasme Fila SR95 (solvant neutre).' },
        { title: 'Travertin : attention aux vacuoles', content: 'Le travertin bouché s\'entretient comme le marbre (sensible aux acides). Le travertin ouvert a des vacuoles où la saleté peut s\'accumuler : un brossage doux régulier avec Fila Cleaner suffit. Ne jamais utiliser de nettoyeur haute pression sur travertin (détériore les vacuoles).' },
        { title: 'Granit : quasi indestructible', content: 'Le granit est la pierre la plus facile à entretenir. Résistant aux acides, aux rayures, aux taches. Un nettoyage à l\'eau savonneuse suffit. Imprégnation optionnelle mais recommandée en cuisine (Fila Stone Protect).' },
        { title: 'Les joints : l\'élément oublié', content: 'Les joints ciment sont poreux et absorbent la saleté. Nettoyage : brosse + Fila Fuganet (nettoyant joints). Prévention : traitement hydrofuge Fila Fugaproof après pose et tous les 2 ans. Si les joints sont irrécupérables : rejointoiement époxy (voir notre service jointoyage).' },
      ]}
      relatedLinks={[
        { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
        { label: 'Guide matériaux', href: '/materiaux' },
        { label: 'Service jointoyage', href: '/services/jointoyage' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Entretien du carrelage et de la pierre naturelle",
        author: { "@type": "Person", name: "François Rodrigues" },
        datePublished: "2025-12-01",
      }}
    />
  )
}
