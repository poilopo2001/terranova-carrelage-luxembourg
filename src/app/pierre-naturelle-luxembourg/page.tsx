import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Pierre Naturelle Luxembourg | Marbre, Travertin, Ardoise',
  description: 'Guide complet pierre naturelle au Luxembourg : marbre, travertin, granit, ardoise. Choix, pose, entretien. Par François Rodrigues, Compagnon du Tour de France à Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/pierre-naturelle-luxembourg' },
}

export default function PierreNaturelleLuxembourg() {
  return (
    <PillarPageLayout
      title="Pierre Naturelle au Luxembourg \u2013 Guide Complet par un Artisan Compagnon"
      subtitle="Marbre, travertin, granit, ardoise"
      intro="Le marbre de Carrare ne se pose pas comme du grès cérame. Chaque pierre a son protocole, ses colles, son traitement. Ce guide vous donne les clés pour choisir, poser et entretenir votre pierre naturelle au Grand-Duché."
      sections={[
        { title: 'Le marbre : noblesse et exigence', content: 'Calacatta Oro, Carrare C, Statuario, Nero Marquina. Roche calcaire sensible aux acides. Colle blanche obligatoire, joint fin < 3mm, imprégnation Fila MP90 Eco Plus avant et après jointoyage. Book matching possible pour raccord de veinage sur grands formats.', link: { label: 'Service pose marbre', href: '/services/pose-pierre-naturelle' } },
        { title: 'Le travertin : chaleur méditerranéenne', content: 'Tivoli, Noce, Romano. Pierre aux vacuoles caractéristiques. Peut être bouché (surface lisse) ou ouvert (rustique). Les vacuoles ouvertes sont remplies de joint lors du jointoyage. Vieillit magnifiquement avec une imprégnation régulière.' },
        { title: 'Le granit : durabilité absolue', content: 'Nero Assoluto Zimbabwe, Baltic Brown. La pierre la plus dure. Résistante aux acides, aux taches, aux rayures. Idéale pour cuisines et zones à fort passage. Pose à la colle C2 standard, joint large 3-5mm.' },
        { title: 'L\'ardoise : caractère minimaliste', content: 'Ardoise des Pyrénées, Welsh Slate. Variations dimensionnelles naturelles absorbées par des colles flexibles S1. Esthétique contemporaine et minimaliste. Adaptée aux intérieurs comme aux extérieurs.' },
        { title: 'Entretien de la pierre naturelle', content: 'Règle d\'or : savon neutre pH 7. Jamais de vinaigre, jamais de produit acide sur marbre ou travertin. Ré-imprégnation tous les 2-3 ans selon le trafic. Terranova remet un carnet d\'entretien personnalisé à la nature de chaque pierre.', link: { label: 'Article entretien pierre', href: '/blog/entretien-carrelage-pierre-naturelle-luxembourg' } },
      ]}
      faq={[
        { q: 'Le marbre est-il adapté à une cuisine\ ?', a: 'Le marbre est sensible aux acides (citron, vinaigre). Pour une cuisine, le granit ou le quartzite sont plus adaptés. Ou alors, le marbre avec une imprégnation renforcée et un entretien rigoureux.' },
        { q: 'Quelle différence entre travertin bouché et ouvert\ ?', a: 'Le travertin bouché a ses vacuoles remplies en usine (surface lisse). Le travertin ouvert conserve ses creux naturels, remplis au joint lors de la pose. C\'est un choix esthétique.' },
        { q: 'La pierre naturelle coûte-t-elle plus cher que le grès cérame\ ?', a: 'Oui, en général 30 à 80% plus cher à la pose. Mais la pierre naturelle est unique, vieillit bien, et peut être polie (pas remplacée) après 20 ans d\'usure.' },
      ]}
      relatedLinks={[
        { label: 'Service pose pierre', href: '/services/pose-pierre-naturelle' },
        { label: 'Guide matériaux', href: '/materiaux' },
        { label: 'Entretien pierre naturelle', href: '/blog/entretien-carrelage-pierre-naturelle-luxembourg' },
        { label: 'Choisir son carrelage', href: '/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Pierre Naturelle au Luxembourg \u2013 Guide Complet",
        author: { "@type": "Person", name: "François Rodrigues" },
      }}
    />
  )
}
