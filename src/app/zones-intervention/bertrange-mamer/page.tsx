import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur à Bertrange et Mamer | Villas Premium',
  description: 'Carreleur à Bertrange et Mamer. Villas et résidences haut de gamme. Marbre, travertin, grès cérame grand format. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/bertrange-mamer' },
}

export default function BertrangeMamer() {
  return (
    <ZonePageLayout
      city="Bertrange & Mamer"
      h1="Carreleur à Bertrange et Mamer \u2013 Villas et Résidences Premium"
      intro="Spécialisation dans les villas et résidences haut de gamme des communes de Bertrange, Mamer, Strassen et Capellen."
      specificContent="Bertrange, Mamer, Strassen, Capellen — la zone ouest du Grand-Duché concentre des villas où le sol est un élément d\'architecture. Marbre Calacatta en hall d\'entrée, travertin romain en séjour, parquet carrelé chevron dans les chambres. Ici, le calepinage est dessiné en plan avant le premier coup de peigne à colle. Book matching sur les marbres veinés, douches italiennes intégrales avec membrane Schlüter-Kerdi. Les architectes de la région connaissent le travail de François."
      focusKeyword="carreleur Bertrange"
      testimonial={{
        author: 'Isabelle Kremer',
        location: 'Bertrange',
        text: 'Salle de bain complète : faïence Porcelanosa, douche italienne, mosaïque verre bleu nuit. François a dessiné le calepinage sur ordinateur. Mon architecte a demandé son numéro.',
        project: 'Salle de bain complète',
      }}
    />
  )
}
