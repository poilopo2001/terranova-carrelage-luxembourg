import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur \u00e0 Ettelbruck et Diekirch | Nord du Luxembourg',
  description: 'Carreleur \u00e0 Ettelbruck et Diekirch. Couverture du nord du Grand-Duch\u00e9. R\u00e9sidentiel et h\u00f4tellerie. Compagnon du Tour de France. Protocoles adapt\u00e9s \u00e0 chaque b\u00e2timent.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/ettelbruck-diekirch' },
}

export default function EttelbruckDiekirch() {
  return (
    <ZonePageLayout
      city="Ettelbruck & Diekirch"
      h1="Carreleur \u00e0 Ettelbruck et Diekirch \u2013 Nord du Luxembourg"
      intro="Couverture du nord du Grand-Duch\u00e9. R\u00e9sidentiel, h\u00f4tellerie et restauration de l\u0027Ardenne luxembourgeoise."
      specificContent="L\u0027Ardenne luxembourgeoise a ses particularit\u00e9s : maisons en schiste, caves vo\u00fbt\u00e9es, b\u00e2timents h\u00f4teliers avec des cuisines professionnelles qui exigent des joints \u00e9poxy et du gr\u00e8s c\u00e9rame antid\u00e9rapant R11. Fran\u00e7ois intervient r\u00e9guli\u00e8rement \u00e0 Ettelbruck, Diekirch, Wiltz et jusqu\u0027\u00e0 Clervaux. Les projets du nord vont de la r\u00e9novation de sols anciens au carrelage complet de constructions neuves \u2014 avec les m\u00eames protocoles que dans la capitale."
      focusKeyword="carreleur Ettelbruck"
      testimonial={{
        author: 'Christine Schroeder',
        location: 'Ettelbruck',
        text: 'Polissage marbre 15\u00a0m\u00b2 au lieu d\u0027une d\u00e9pose-repose. Devis \u00e0 850\u20ac vs 3\u00a0500\u20ac propos\u00e9s ailleurs. R\u00e9sultat miroir identique au neuf.',
        project: 'Polissage marbre entr\u00e9e 15\u00a0m\u00b2',
      }}
    />
  )
}
