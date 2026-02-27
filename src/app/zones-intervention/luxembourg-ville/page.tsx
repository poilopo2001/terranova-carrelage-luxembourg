import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur à Luxembourg-Ville | Pose Carrelage Haut de Gamme',
  description: 'Artisan compagnon carreleur à Luxembourg-Ville. Kirchberg, Limpertsberg, Belair. Marbre, travertin, grand format. Protocoles adaptés aux immeubles de la capitale.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/luxembourg-ville' },
}

export default function LuxembourgVille() {
  return (
    <ZonePageLayout
      city="Luxembourg-Ville"
      h1="Carreleur à Luxembourg-Ville \u2013 Pose Carrelage Haut de Gamme"
      intro="Interventions fréquentes dans les appartements et villas de la capitale. Du Kirchberg au Limpertsberg, de Belair au Grund — chaque quartier a ses contraintes et ses exigences."
      specificContent="Les immeubles du Limpertsberg ont souvent des planchers bois qui bougent. Ceux du Kirchberg, des chapes neuves mais pas toujours planes. Au Grund, les humidités remontantes exigent un traitement avant toute pose. François connaît ces contraintes pour y avoir travaillé des centaines de fois. La clientèle de la capitale veut du marbre Calacatta, du travertin romain, du grand format 120x260. Ce sont des matériaux qui pardonnent peu : colle blanche obligatoire, double encollage, book matching sur les veines. Pas de place pour l\'approximation."
      focusKeyword="carreleur Luxembourg-Ville"
      testimonial={{
        author: 'Marc Hoffmann',
        location: 'Kirchberg, Luxembourg-Ville',
        text: 'François a posé 85\ m² de marbre Calacatta Oro dans notre villa. Le calepinage en diagonale avec book matching est spectaculaire. Je recommande sans réserve.',
        project: 'Marbre Calacatta Oro 85\ m²',
      }}
    />
  )
}
