import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Pierre Naturelle Luxembourg | Marbre, Travertin, Ardoise',
  description: 'Guide complet pierre naturelle au Luxembourg : marbre, travertin, granit, ardoise. Choix, pose, entretien. Par Fran\u00e7ois Rodrigues, Compagnon du Tour de France \u00e0 Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/pierre-naturelle-luxembourg' },
}

export default function PierreNaturelleLuxembourg() {
  return (
    <PillarPageLayout
      title="Pierre Naturelle au Luxembourg \u2013 Guide Complet par un Artisan Compagnon"
      subtitle="Marbre, travertin, granit, ardoise"
      intro="Le marbre de Carrare ne se pose pas comme du gr\u00e8s c\u00e9rame. Chaque pierre a son protocole, ses colles, son traitement. Ce guide vous donne les cl\u00e9s pour choisir, poser et entretenir votre pierre naturelle au Grand-Duch\u00e9."
      sections={[
        { title: 'Le marbre : noblesse et exigence', content: 'Calacatta Oro, Carrare C, Statuario, Nero Marquina. Roche calcaire sensible aux acides. Colle blanche obligatoire, joint fin < 3mm, impr\u00e9gnation Fila MP90 Eco Plus avant et apr\u00e8s jointoyage. Book matching possible pour raccord de veinage sur grands formats.', link: { label: 'Service pose marbre', href: '/services/pose-pierre-naturelle' } },
        { title: 'Le travertin : chaleur m\u00e9diterran\u00e9enne', content: 'Tivoli, Noce, Romano. Pierre aux vacuoles caract\u00e9ristiques. Peut \u00eatre bouch\u00e9 (surface lisse) ou ouvert (rustique). Les vacuoles ouvertes sont remplies de joint lors du jointoyage. Vieillit magnifiquement avec une impr\u00e9gnation r\u00e9guli\u00e8re.' },
        { title: 'Le granit : durabilit\u00e9 absolue', content: 'Nero Assoluto Zimbabwe, Baltic Brown. La pierre la plus dure. R\u00e9sistante aux acides, aux taches, aux rayures. Id\u00e9ale pour cuisines et zones \u00e0 fort passage. Pose \u00e0 la colle C2 standard, joint large 3-5mm.' },
        { title: 'L\u0027ardoise : caract\u00e8re minimaliste', content: 'Ardoise des Pyr\u00e9n\u00e9es, Welsh Slate. Variations dimensionnelles naturelles absorb\u00e9es par des colles flexibles S1. Esth\u00e9tique contemporaine et minimaliste. Adapt\u00e9e aux int\u00e9rieurs comme aux ext\u00e9rieurs.' },
        { title: 'Entretien de la pierre naturelle', content: 'R\u00e8gle d\u0027or : savon neutre pH 7. Jamais de vinaigre, jamais de produit acide sur marbre ou travertin. R\u00e9-impr\u00e9gnation tous les 2-3 ans selon le trafic. Terranova remet un carnet d\u0027entretien personnalis\u00e9 \u00e0 la nature de chaque pierre.', link: { label: 'Article entretien pierre', href: '/blog/entretien-carrelage-pierre-naturelle-luxembourg' } },
      ]}
      faq={[
        { q: 'Le marbre est-il adapt\u00e9 \u00e0 une cuisine\u00a0?', a: 'Le marbre est sensible aux acides (citron, vinaigre). Pour une cuisine, le granit ou le quartzite sont plus adapt\u00e9s. Ou alors, le marbre avec une impr\u00e9gnation renforc\u00e9e et un entretien rigoureux.' },
        { q: 'Quelle diff\u00e9rence entre travertin bouch\u00e9 et ouvert\u00a0?', a: 'Le travertin bouch\u00e9 a ses vacuoles remplies en usine (surface lisse). Le travertin ouvert conserve ses creux naturels, remplis au joint lors de la pose. C\u0027est un choix esth\u00e9tique.' },
        { q: 'La pierre naturelle co\u00fbte-t-elle plus cher que le gr\u00e8s c\u00e9rame\u00a0?', a: 'Oui, en g\u00e9n\u00e9ral 30 \u00e0 80% plus cher \u00e0 la pose. Mais la pierre naturelle est unique, vieillit bien, et peut \u00eatre polie (pas remplac\u00e9e) apr\u00e8s 20 ans d\u0027usure.' },
      ]}
      relatedLinks={[
        { label: 'Service pose pierre', href: '/services/pose-pierre-naturelle' },
        { label: 'Guide mat\u00e9riaux', href: '/materiaux' },
        { label: 'Entretien pierre naturelle', href: '/blog/entretien-carrelage-pierre-naturelle-luxembourg' },
        { label: 'Choisir son carrelage', href: '/blog/choisir-carrelage-faience-pierre-naturelle-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Pierre Naturelle au Luxembourg \u2013 Guide Complet",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
      }}
    />
  )
}
