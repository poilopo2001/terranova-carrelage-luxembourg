import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur \u00e0 Grevenmacher et Remich | Vall\u00e9e de la Moselle',
  description: 'Carreleur \u00e0 Grevenmacher et Remich. Maisons viticoles, pierres de taille. Architecture r\u00e9gionale de la Moselle luxembourgeoise. Compagnon du Tour de France. Protocoles pierre naturelle.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/grevenmacher-remich' },
}

export default function GrevenmacherRemich() {
  return (
    <ZonePageLayout
      city="Grevenmacher & Remich"
      h1="Carreleur \u00e0 Grevenmacher et Remich \u2013 Vall\u00e9e de la Moselle"
      intro="Les belles maisons viticoles et r\u00e9sidences de la Moselle luxembourgeoise m\u00e9ritent un carreleur qui comprend l\u0027architecture r\u00e9gionale."
      specificContent="La vall\u00e9e de la Moselle a un patrimoine b\u00e2ti particulier : maisons viticoles en pierres de taille, caves vo\u00fbt\u00e9es, terrasses surplombant les vignobles. Le travertin, la pierre de Bourgogne et l\u0027ardoise s\u0027int\u00e8grent naturellement dans ces demeures. Fran\u00e7ois travaille r\u00e9guli\u00e8rement \u00e0 Grevenmacher, Remich, Wormeldange et Ehnen. Martine de Remich peut t\u00e9moigner : 68\u00a0m\u00b2 de terrasse antid\u00e9rapante R11, deux hivers sans une seule remont\u00e9e de gel."
      focusKeyword="carreleur Grevenmacher"
      testimonial={{
        author: 'Martine Faber',
        location: 'Remich',
        text: 'Pose de 68\u00a0m\u00b2 de carrelage antid\u00e9rapant R11 en ext\u00e9rieur. Fran\u00e7ois a v\u00e9rifi\u00e9 la r\u00e9sistance au gel et la classe antid\u00e9rapante. Aucune remont\u00e9e de gel apr\u00e8s deux hivers.',
        project: 'Terrasse antid\u00e9rapante 68\u00a0m\u00b2',
      }}
    />
  )
}
