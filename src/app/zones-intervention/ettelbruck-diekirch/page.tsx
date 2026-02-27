import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur à Ettelbruck et Diekirch | Nord du Luxembourg',
  description: 'Carreleur à Ettelbruck et Diekirch. Couverture du nord du Grand-Duché. Résidentiel et hôtellerie. Compagnon du Tour de France. Protocoles adaptés à chaque bâtiment.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/ettelbruck-diekirch' },
}

export default function EttelbruckDiekirch() {
  return (
    <ZonePageLayout
      city="Ettelbruck & Diekirch"
      h1="Carreleur à Ettelbruck et Diekirch \u2013 Nord du Luxembourg"
      intro="Couverture du nord du Grand-Duché. Résidentiel, hôtellerie et restauration de l\'Ardenne luxembourgeoise."
      specificContent="L\'Ardenne luxembourgeoise a ses particularités : maisons en schiste, caves voûtées, bâtiments hôteliers avec des cuisines professionnelles qui exigent des joints époxy et du grès cérame antidérapant R11. François intervient régulièrement à Ettelbruck, Diekirch, Wiltz et jusqu\'à Clervaux. Les projets du nord vont de la rénovation de sols anciens au carrelage complet de constructions neuves — avec les mêmes protocoles que dans la capitale."
      focusKeyword="carreleur Ettelbruck"
      testimonial={{
        author: 'Christine Schroeder',
        location: 'Ettelbruck',
        text: 'Polissage marbre 15\ m² au lieu d\'une dépose-repose. Devis à 850€ vs 3\ 500€ proposés ailleurs. Résultat miroir identique au neuf.',
        project: 'Polissage marbre entrée 15\ m²',
      }}
    />
  )
}
