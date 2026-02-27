import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur à Mersch et Steinfort | Terranova Carrelage',
  description: 'Carreleur à Mersch et Steinfort. Showroom sur place. Pierre naturelle, carrelage sol et mural. Compagnon du Tour de France. Showroom Rue de la Gare.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/mersch-steinfort' },
}

export default function MerschSteinfort() {
  return (
    <ZonePageLayout
      city="Mersch & Steinfort"
      h1="Carreleur à Mersch et Steinfort \u2013 Pose Carrelage & Pierre Naturelle"
      intro="Présence locale à Mersch depuis 2001. Showroom Rue de la Gare sur rendez-vous. Connaissance des constructions du canton et des fournisseurs régionaux."
      specificContent="Mersch, c\'est chez François. L\'atelier est Rue de la Gare, le showroom aussi. Quand un client du canton appelle, François peut passer voir le support dans la journée. Steinfort, Lintgen, Colmar-Berg, Fischbach — tout est à moins de 20 minutes. Le showroom est ouvert sur rendez-vous : mardi et jeudi après-midi, samedi matin. On y touche le marbre, on compare les travertins, on choisit la teinte du joint sur l\'échantillon réel."
      focusKeyword="carreleur Mersch"
      testimonial={{
        author: 'Jean-Claude Muller',
        location: 'Mersch',
        text: 'Pose de 140\ m² de parquet carrelé en chevron. La découpe en biais est très technique — zéro lippage entre les lames. Après 6 mois avec deux chiens, aucune rayure.',
        project: 'Parquet carrelé chevron 140\ m²',
      }}
    />
  )
}
