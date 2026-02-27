import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur \u00e0 Luxembourg-Ville | Pose Carrelage Haut de Gamme',
  description: 'Artisan compagnon carreleur \u00e0 Luxembourg-Ville. Kirchberg, Limpertsberg, Belair. Marbre, travertin, grand format. Protocoles adapt\u00e9s aux immeubles de la capitale.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/luxembourg-ville' },
}

export default function LuxembourgVille() {
  return (
    <ZonePageLayout
      city="Luxembourg-Ville"
      h1="Carreleur \u00e0 Luxembourg-Ville \u2013 Pose Carrelage Haut de Gamme"
      intro="Interventions fr\u00e9quentes dans les appartements et villas de la capitale. Du Kirchberg au Limpertsberg, de Belair au Grund \u2014 chaque quartier a ses contraintes et ses exigences."
      specificContent="Les immeubles du Limpertsberg ont souvent des planchers bois qui bougent. Ceux du Kirchberg, des chapes neuves mais pas toujours planes. Au Grund, les humidit\u00e9s remontantes exigent un traitement avant toute pose. Fran\u00e7ois conna\u00eet ces contraintes pour y avoir travaill\u00e9 des centaines de fois. La client\u00e8le de la capitale veut du marbre Calacatta, du travertin romain, du grand format 120x260. Ce sont des mat\u00e9riaux qui pardonnent peu : colle blanche obligatoire, double encollage, book matching sur les veines. Pas de place pour l\u0027approximation."
      focusKeyword="carreleur Luxembourg-Ville"
      testimonial={{
        author: 'Marc Hoffmann',
        location: 'Kirchberg, Luxembourg-Ville',
        text: 'Fran\u00e7ois a pos\u00e9 85\u00a0m\u00b2 de marbre Calacatta Oro dans notre villa. Le calepinage en diagonale avec book matching est spectaculaire. Je recommande sans r\u00e9serve.',
        project: 'Marbre Calacatta Oro 85\u00a0m\u00b2',
      }}
    />
  )
}
