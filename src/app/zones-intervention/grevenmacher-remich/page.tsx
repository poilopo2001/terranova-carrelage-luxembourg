import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur à Grevenmacher et Remich | Vallée de la Moselle',
  description: 'Carreleur à Grevenmacher et Remich. Maisons viticoles, pierres de taille. Architecture régionale de la Moselle luxembourgeoise. Compagnon du Tour de France. Protocoles pierre naturelle.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/grevenmacher-remich' },
}

export default function GrevenmacherRemich() {
  return (
    <ZonePageLayout
      city="Grevenmacher & Remich"
      h1="Carreleur à Grevenmacher et Remich \u2013 Vallée de la Moselle"
      intro="Les belles maisons viticoles et résidences de la Moselle luxembourgeoise méritent un carreleur qui comprend l\'architecture régionale."
      specificContent="La vallée de la Moselle a un patrimoine bâti particulier : maisons viticoles en pierres de taille, caves voûtées, terrasses surplombant les vignobles. Le travertin, la pierre de Bourgogne et l\'ardoise s\'intègrent naturellement dans ces demeures. François travaille régulièrement à Grevenmacher, Remich, Wormeldange et Ehnen. Martine de Remich peut témoigner : 68\ m² de terrasse antidérapante R11, deux hivers sans une seule remontée de gel."
      focusKeyword="carreleur Grevenmacher"
      testimonial={{
        author: 'Martine Faber',
        location: 'Remich',
        text: 'Pose de 68\ m² de carrelage antidérapant R11 en extérieur. François a vérifié la résistance au gel et la classe antidérapante. Aucune remontée de gel après deux hivers.',
        project: 'Terrasse antidérapante 68\ m²',
      }}
    />
  )
}
