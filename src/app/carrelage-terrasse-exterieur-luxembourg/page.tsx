import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carrelage Terrasse Ext\u00e9rieur Luxembourg | Antid\u00e9rapant & Gel',
  description: 'Pose de carrelage terrasse ext\u00e9rieur au Luxembourg. R\u00e9sistance gel, antid\u00e9rapant R11, gr\u00e8s c\u00e9rame 20mm. Compagnon du Tour de France. Showroom Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carrelage-terrasse-exterieur-luxembourg' },
}

export default function CarrelageTerrasse() {
  return (
    <PillarPageLayout
      title="Carrelage Terrasse Ext\u00e9rieur au Luxembourg"
      subtitle="R\u00e9sistant au gel, antid\u00e9rapant"
      intro="Le Luxembourg conna\u00eet des hivers rudes. Un carrelage ext\u00e9rieur doit r\u00e9sister au gel (classe GEL+), \u00eatre antid\u00e9rapant (R11 minimum en bord de piscine), et support\u00e9 par un protocole de pose adapt\u00e9. On ne pose pas une terrasse comme un sol int\u00e9rieur."
      sections={[
        { title: 'Gr\u00e8s c\u00e9rame 20mm sur plots ou coll\u00e9', content: 'Deux techniques : pose coll\u00e9e sur chape b\u00e9ton (colle C2 FE S2 r\u00e9sistant gel, pente 1,5% obligatoire) ou pose sur plots r\u00e9glables (dalles 20mm, pas de colle, drainage naturel). Le gr\u00e8s c\u00e9rame 20mm Marazzi, Refin ou Mirage offre une r\u00e9sistance m\u00e9canique sup\u00e9rieure.', link: { label: 'Service pose sol', href: '/services/pose-carrelage-sol' } },
        { title: 'Pierre naturelle en ext\u00e9rieur', content: 'Granit bouchard\u00e9, travertin bouchiard\u00e9, ardoise naturelle. Traitement antid\u00e9rapant Fila Finish Antislip obligatoire. Impr\u00e9gnation hydrofuge et ol\u00e9ofuge pour r\u00e9sister aux intemp\u00e9ries.', link: { label: 'Service pierre naturelle', href: '/services/pose-pierre-naturelle' } },
        { title: 'R\u00e9sistance au gel luxembourgeois', content: 'Tout carrelage ext\u00e9rieur pos\u00e9 par Terranova est certifi\u00e9 GEL+ (absorption d\u0027eau < 0,5%). Les joints sont r\u00e9alis\u00e9s en mortier-colle souple (pas de joint dur qui fissure au gel). Martine de Remich : aucune remont\u00e9e de gel apr\u00e8s deux hivers sur sa terrasse de 68\u00a0m\u00b2.' },
      ]}
      faq={[
        { q: 'Quel carrelage pour une terrasse au Luxembourg\u00a0?', a: 'Gr\u00e8s c\u00e9rame 20mm GEL+ R11. Ou pierre naturelle bouchard\u00e9e avec traitement antid\u00e9rapant. Absorption d\u0027eau inf\u00e9rieure \u00e0 0,5%.' },
        { q: 'Pose sur plots ou pos\u00e9 coll\u00e9\u00a0?', a: 'Plots : plus facile, r\u00e9versible, bon drainage. Coll\u00e9 : plus stable, aspect plus fini, n\u00e9cessite une chape b\u00e9ton avec pente. Fran\u00e7ois recommande en fonction de votre terrain.' },
        { q: 'La garantie couvre-t-elle le gel\u00a0?', a: 'Oui. Garantie d\u00e9cennale sur la pose et garantie r\u00e9sistance gel (sous r\u00e9serve carreaux GEL+ valid\u00e9s dans le devis).' },
      ]}
      relatedLinks={[
        { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
        { label: 'Tendances 2026', href: '/blog/tendances-carrelage-2026-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Carrelage Terrasse Ext\u00e9rieur au Luxembourg",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
      }}
    />
  )
}
