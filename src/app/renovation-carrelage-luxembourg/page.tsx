import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'R\u00e9novation Carrelage Luxembourg | Rejointoiement & Remplacement',
  description: 'R\u00e9novation de carrelage au Luxembourg : rejointoiement \u00e9poxy, remplacement, d\u00e9pose-repose, polissage marbre. Diagnostic par Fran\u00e7ois Rodrigues, Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/renovation-carrelage-luxembourg' },
}

export default function RenovationCarrelageLuxembourg() {
  return (
    <PillarPageLayout
      title="R\u00e9novation Carrelage au Luxembourg \u2013 Guide et Solutions"
      subtitle="Rejointoiement, d\u00e9pose-repose, polissage"
      intro="Votre carrelage vieillit mal\u00a0? Trois solutions existent : rejointoiement (\u00e9conomie 80%), polissage en place (\u00e9conomie 95% sur pierre naturelle), ou d\u00e9pose-repose compl\u00e8te. Fran\u00e7ois diagnostique et recommande la solution la plus adapt\u00e9e \u2014 pas forc\u00e9ment la plus co\u00fbteuse."
      sections={[
        { title: 'Rejointoiement : la solution \u00e9conomique', content: 'Les joints noirs, moisis ou fissur\u00e9s se remplacent sans d\u00e9poser le carrelage. D\u00e9pose au couteau oscillant Fein, traitement fongicide, pose de joints neufs ciment (27 teintes Mapei) ou \u00e9poxy (20 teintes). Transformation visuelle compl\u00e8te pour 15-35\u20ac/m\u00b2 au lieu de 45-130\u20ac/m\u00b2 pour une d\u00e9pose-repose.', link: { label: 'Service jointoyage', href: '/services/jointoyage' } },
        { title: 'Polissage de marbre et pierre naturelle', content: 'Un marbre terne et ray\u00e9 retrouve son \u00e9clat gr\u00e2ce au polissage progressif (disques diamant 80 \u00e0 1800 mesh, machine Klindex Expander 750). R\u00e9sultat miroir identique au neuf. Impr\u00e9gnation protectrice Fila incluse. Christine de Ettelbruck a pay\u00e9 850\u20ac au lieu de 3 500\u20ac pour sa d\u00e9pose-repose.', link: { label: 'Service r\u00e9novation', href: '/services/renovation-carrelage' } },
        { title: 'D\u00e9pose-repose compl\u00e8te', content: 'Quand le support est compromis ou le carrelage irr\u00e9parable : d\u00e9pose m\u00e9canique, fraisage du mortier r\u00e9siduel, ragr\u00e9age autonivelant, puis repose d\u0027un carrelage neuf. Fran\u00e7ois prot\u00e8ge le plancher b\u00e9ton sous-jacent et garantit la plan\u00e9it\u00e9 du nouveau sol.' },
        { title: 'R\u00e9paration ponctuelle', content: 'Carreaux cass\u00e9s, fissur\u00e9s ou creux. D\u00e9pose individuelle au disque diamant fin, ou injection de r\u00e9sine Mapei Eporip pour carreaux creux sans d\u00e9pose. Forfait 80-350\u20ac par zone. Id\u00e9al avant vente ou \u00e9tat des lieux.', link: { label: 'Service r\u00e9paration', href: '/services/reparation-carrelage' } },
      ]}
      faq={[
        { q: 'Peut-on r\u00e9nover un carrelage sans le remplacer\u00a0?', a: 'Oui, dans la majorit\u00e9 des cas. Rejointoiement (joints us\u00e9s) ou polissage (pierre terne) suffisent. Seuls les carrelages cass\u00e9s ou dont le support est compromis n\u00e9cessitent une d\u00e9pose.' },
        { q: 'Combien co\u00fbte un rejointoiement\u00a0?', a: 'De 15 \u00e0 35\u20ac/m\u00b2 selon le type de joint (ciment ou \u00e9poxy). Une salle de bain de 10m\u00b2 co\u00fbte entre 150 et 350\u20ac.' },
        { q: 'Le polissage abime-t-il la pierre\u00a0?', a: 'Non. Le polissage retire une couche microscopique de surface (< 0,1mm) pour r\u00e9v\u00e9ler la pierre saine en dessous. R\u00e9alisable 3-4 fois sur la dur\u00e9e de vie d\u0027un sol en marbre.' },
      ]}
      relatedLinks={[
        { label: 'Jointoyage', href: '/services/jointoyage' },
        { label: 'R\u00e9novation carrelage', href: '/services/renovation-carrelage' },
        { label: 'R\u00e9paration carrelage', href: '/services/reparation-carrelage' },
        { label: 'Joint \u00e9poxy vs ciment', href: '/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "R\u00e9novation Carrelage au Luxembourg",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
      }}
    />
  )
}
