import type { Metadata } from 'next'
import ZonePageLayout from '@/components/ZonePageLayout'

export const metadata: Metadata = {
  title: 'Carreleur \u00e0 Mersch et Steinfort | Terranova Carrelage',
  description: 'Carreleur \u00e0 Mersch et Steinfort. Showroom sur place. Pierre naturelle, carrelage sol et mural. Compagnon du Tour de France. Showroom Rue de la Gare.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/zones-intervention/mersch-steinfort' },
}

export default function MerschSteinfort() {
  return (
    <ZonePageLayout
      city="Mersch & Steinfort"
      h1="Carreleur \u00e0 Mersch et Steinfort \u2013 Pose Carrelage & Pierre Naturelle"
      intro="Pr\u00e9sence locale \u00e0 Mersch depuis 2001. Showroom Rue de la Gare sur rendez-vous. Connaissance des constructions du canton et des fournisseurs r\u00e9gionaux."
      specificContent="Mersch, c\u0027est chez Fran\u00e7ois. L\u0027atelier est Rue de la Gare, le showroom aussi. Quand un client du canton appelle, Fran\u00e7ois peut passer voir le support dans la journ\u00e9e. Steinfort, Lintgen, Colmar-Berg, Fischbach \u2014 tout est \u00e0 moins de 20 minutes. Le showroom est ouvert sur rendez-vous : mardi et jeudi apr\u00e8s-midi, samedi matin. On y touche le marbre, on compare les travertins, on choisit la teinte du joint sur l\u0027\u00e9chantillon r\u00e9el."
      focusKeyword="carreleur Mersch"
      testimonial={{
        author: 'Jean-Claude Muller',
        location: 'Mersch',
        text: 'Pose de 140\u00a0m\u00b2 de parquet carrel\u00e9 en chevron. La d\u00e9coupe en biais est tr\u00e8s technique \u2014 z\u00e9ro lippage entre les lames. Apr\u00e8s 6 mois avec deux chiens, aucune rayure.',
        project: 'Parquet carrel\u00e9 chevron 140\u00a0m\u00b2',
      }}
    />
  )
}
