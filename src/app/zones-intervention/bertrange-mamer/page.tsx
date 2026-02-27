import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur \u00e0 Bertrange et Mamer | Villas Premium',
  description: 'Carreleur \u00e0 Bertrange et Mamer. Villas et r\u00e9sidences haut de gamme. Marbre, travertin, gr\u00e8s c\u00e9rame grand format. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/bertrange-mamer' },
}

export default function BertrangeMamer() {
  return (
    <ZonePageLayout
      city="Bertrange & Mamer"
      h1="Carreleur \u00e0 Bertrange et Mamer \u2013 Villas et R\u00e9sidences Premium"
      intro="Sp\u00e9cialisation dans les villas et r\u00e9sidences haut de gamme des communes de Bertrange, Mamer, Strassen et Capellen."
      specificContent="Bertrange, Mamer, Strassen, Capellen \u2014 la zone ouest du Grand-Duch\u00e9 concentre des villas o\u00f9 le sol est un \u00e9l\u00e9ment d\u0027architecture. Marbre Calacatta en hall d\u0027entr\u00e9e, travertin romain en s\u00e9jour, parquet carrel\u00e9 chevron dans les chambres. Ici, le calepinage est dessin\u00e9 en plan avant le premier coup de peigne \u00e0 colle. Book matching sur les marbres vein\u00e9s, douches italiennes int\u00e9grales avec membrane Schl\u00fcter-Kerdi. Les architectes de la r\u00e9gion connaissent le travail de Fran\u00e7ois."
      focusKeyword="carreleur Bertrange"
      testimonial={{
        author: 'Isabelle Kremer',
        location: 'Bertrange',
        text: 'Salle de bain compl\u00e8te : fa\u00efence Porcelanosa, douche italienne, mosa\u00efque verre bleu nuit. Fran\u00e7ois a dessin\u00e9 le calepinage sur ordinateur. Mon architecte a demand\u00e9 son num\u00e9ro.',
        project: 'Salle de bain compl\u00e8te',
      }}
    />
  )
}
