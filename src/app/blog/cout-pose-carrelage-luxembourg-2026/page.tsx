import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Coût Pose Carrelage Luxembourg 2026 | Tarifs au m²',
  description: 'Combien coûte la pose de carrelage au Luxembourg en 2026\ ? Tarifs détaillés par m² et par type de prestation. Guide par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/cout-pose-carrelage-luxembourg-2026' },
}

export default function CoutPoseCarrelage() {
  return (
    <BlogArticleLayout
      title="Combien coûte la pose de carrelage au Luxembourg en 2026\ ?"
      date="Février 2026"
      readTime="8 min"
      intro="Le prix de la pose de carrelage au Grand-Duché dépend du matériau, du format, de la complexité du calepinage et de la préparation du support. Voici un guide transparent des tarifs 2026, sans approximation."
      sections={[
        { title: 'Tarifs par type de prestation (pose seule, hors matériau)', content: 'Carrelage sol standard (\u2264 30x30) : 35-50€/m²\nCarrelage sol grand format (60x60 à 60x120) : 50-70€/m²\nCarrelage sol très grand format (120x120+) : 70-85€/m²\nCarrelage mural : 40-95€/m²\nFaïence décorative : 38-72€/m²\nMosaïque : 75-180€/m²\nPierre naturelle : 65-150€/m²\nParquet carrelé : 50-90€/m²\nJointoyage seul : 15-35€/m²\nRénovation complète : 45-130€/m²' },
        { title: 'Ce qui fait varier le prix', content: 'Le format : plus le carreau est grand, plus la pose est technique (double encollage, niveleurs, découpe à la scie à eau). Un 120x260 demande deux fois plus de temps qu\'un 30x30.\n\nLe calepinage : pose droite < diagonale < chevron < opus romain. Un calepinage chevron en parquet carrelé demande des découpes en biais au degré près.\n\nLe support : si la chape n\'est pas plane (> 3mm/2m), un ragréage est nécessaire (250-400€ pour une pièce standard).\n\nLe matériau : la pierre naturelle exige des protocoles spécifiques (colle blanche sur marbre, imprégnation incluse).' },
        { title: 'Exemples de budgets réels au Luxembourg', content: 'Salle de bain 10\ m² (sol + murs) en grès cérame : 2 500 - 4 500€\nSalon 40\ m² en grand format 60x120 : 2 800 - 4 000€\nVilla 120\ m² en marbre travertin : 12 000 - 18 000€\nCrédence cuisine 3\ m² en zellige : 400 - 700€\nTerrasse 50\ m² en grès cérame 20mm : 3 500 - 5 500€\n\nCes fourchettes incluent la pose seule. Le matériau est en sus (10 à 120€/m² selon le choix).' },
        { title: 'Pourquoi le prix d\'un carrelage bien posé, c\'est celui qu\'on ne refait pas', content: 'Un carrelage mal posé (lippage, carreaux creux, fissures aux joints) coûte 2 à 3 fois plus cher à déposer et reposer qu\'à poser correctement la première fois. Investir dans un artisan compétent — qui contrôle la planéité avant de poser, qui utilise les bonnes colles, qui respecte les temps de séchage — est une économie à long terme.' },
      ]}
      relatedLinks={[
        { label: 'Chaque technique de pose', href: '/services' },
        { label: 'Carreleur Luxembourg', href: '/carreleur-luxembourg' },
        { label: 'Décrire mon projet', href: '/contact' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Combien coûte la pose de carrelage au Luxembourg en 2026\ ?",
        author: { "@type": "Person", name: "François Rodrigues" },
        datePublished: "2026-02-01",
        publisher: { "@type": "Organization", name: "Terranova Carrelage Luxembourg" },
      }}
    />
  )
}
