import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Rénovation Carrelage Luxembourg | Rejointoiement & Remplacement',
  description: 'Rénovation de carrelage au Luxembourg : rejointoiement époxy, remplacement, dépose-repose, polissage marbre. Diagnostic par François Rodrigues, Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/renovation-carrelage-luxembourg' },
}

export default function RenovationCarrelageLuxembourg() {
  return (
    <PillarPageLayout
      title="Rénovation Carrelage au Luxembourg \u2013 Guide et Solutions"
      subtitle="Rejointoiement, dépose-repose, polissage"
      intro="Votre carrelage vieillit mal\ ? Trois solutions existent : rejointoiement (économie 80%), polissage en place (économie 95% sur pierre naturelle), ou dépose-repose complète. François diagnostique et recommande la solution la plus adaptée — pas forcément la plus coûteuse."
      sections={[
        { title: 'Rejointoiement : la solution économique', content: 'Les joints noirs, moisis ou fissurés se remplacent sans déposer le carrelage. Dépose au couteau oscillant Fein, traitement fongicide, pose de joints neufs ciment (27 teintes Mapei) ou époxy (20 teintes). Transformation visuelle complète pour 15-35€/m² au lieu de 45-130€/m² pour une dépose-repose.', link: { label: 'Service jointoyage', href: '/services/jointoyage' } },
        { title: 'Polissage de marbre et pierre naturelle', content: 'Un marbre terne et rayé retrouve son éclat grâce au polissage progressif (disques diamant 80 à 1800 mesh, machine Klindex Expander 750). Résultat miroir identique au neuf. Imprégnation protectrice Fila incluse. Christine de Ettelbruck a payé 850€ au lieu de 3 500€ pour sa dépose-repose.', link: { label: 'Service rénovation', href: '/services/renovation-carrelage' } },
        { title: 'Dépose-repose complète', content: 'Quand le support est compromis ou le carrelage irréparable : dépose mécanique, fraisage du mortier résiduel, ragréage autonivelant, puis repose d\'un carrelage neuf. François protège le plancher béton sous-jacent et garantit la planéité du nouveau sol.' },
        { title: 'Réparation ponctuelle', content: 'Carreaux cassés, fissurés ou creux. Dépose individuelle au disque diamant fin, ou injection de résine Mapei Eporip pour carreaux creux sans dépose. Forfait 80-350€ par zone. Idéal avant vente ou état des lieux.', link: { label: 'Service réparation', href: '/services/reparation-carrelage' } },
      ]}
      faq={[
        { q: 'Peut-on rénover un carrelage sans le remplacer\ ?', a: 'Oui, dans la majorité des cas. Rejointoiement (joints usés) ou polissage (pierre terne) suffisent. Seuls les carrelages cassés ou dont le support est compromis nécessitent une dépose.' },
        { q: 'Combien coûte un rejointoiement\ ?', a: 'De 15 à 35€/m² selon le type de joint (ciment ou époxy). Une salle de bain de 10m² coûte entre 150 et 350€.' },
        { q: 'Le polissage abime-t-il la pierre\ ?', a: 'Non. Le polissage retire une couche microscopique de surface (< 0,1mm) pour révéler la pierre saine en dessous. Réalisable 3-4 fois sur la durée de vie d\'un sol en marbre.' },
      ]}
      relatedLinks={[
        { label: 'Jointoyage', href: '/services/jointoyage' },
        { label: 'Rénovation carrelage', href: '/services/renovation-carrelage' },
        { label: 'Réparation carrelage', href: '/services/reparation-carrelage' },
        { label: 'Joint époxy vs ciment', href: '/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Rénovation Carrelage au Luxembourg",
        author: { "@type": "Person", name: "François Rodrigues" },
      }}
    />
  )
}
