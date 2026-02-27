import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Co\u00fbt Pose Carrelage Luxembourg 2026 | Tarifs au m\u00b2',
  description: 'Combien co\u00fbte la pose de carrelage au Luxembourg en 2026\u00a0? Tarifs d\u00e9taill\u00e9s par m\u00b2 et par type de prestation. Guide par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/cout-pose-carrelage-luxembourg-2026' },
}

export default function CoutPoseCarrelage() {
  return (
    <BlogArticleLayout
      title="Combien co\u00fbte la pose de carrelage au Luxembourg en 2026\u00a0?"
      date="F\u00e9vrier 2026"
      readTime="8 min"
      intro="Le prix de la pose de carrelage au Grand-Duch\u00e9 d\u00e9pend du mat\u00e9riau, du format, de la complexit\u00e9 du calepinage et de la pr\u00e9paration du support. Voici un guide transparent des tarifs 2026, sans approximation."
      sections={[
        { title: 'Tarifs par type de prestation (pose seule, hors mat\u00e9riau)', content: 'Carrelage sol standard (\u2264 30x30) : 35-50\u20ac/m\u00b2\nCarrelage sol grand format (60x60 \u00e0 60x120) : 50-70\u20ac/m\u00b2\nCarrelage sol tr\u00e8s grand format (120x120+) : 70-85\u20ac/m\u00b2\nCarrelage mural : 40-95\u20ac/m\u00b2\nFa\u00efence d\u00e9corative : 38-72\u20ac/m\u00b2\nMosa\u00efque : 75-180\u20ac/m\u00b2\nPierre naturelle : 65-150\u20ac/m\u00b2\nParquet carrel\u00e9 : 50-90\u20ac/m\u00b2\nJointoyage seul : 15-35\u20ac/m\u00b2\nR\u00e9novation compl\u00e8te : 45-130\u20ac/m\u00b2' },
        { title: 'Ce qui fait varier le prix', content: 'Le format : plus le carreau est grand, plus la pose est technique (double encollage, niveleurs, d\u00e9coupe \u00e0 la scie \u00e0 eau). Un 120x260 demande deux fois plus de temps qu\u0027un 30x30.\n\nLe calepinage : pose droite < diagonale < chevron < opus romain. Un calepinage chevron en parquet carrel\u00e9 demande des d\u00e9coupes en biais au degr\u00e9 pr\u00e8s.\n\nLe support : si la chape n\u0027est pas plane (> 3mm/2m), un ragr\u00e9age est n\u00e9cessaire (250-400\u20ac pour une pi\u00e8ce standard).\n\nLe mat\u00e9riau : la pierre naturelle exige des protocoles sp\u00e9cifiques (colle blanche sur marbre, impr\u00e9gnation incluse).' },
        { title: 'Exemples de budgets r\u00e9els au Luxembourg', content: 'Salle de bain 10\u00a0m\u00b2 (sol + murs) en gr\u00e8s c\u00e9rame : 2 500 - 4 500\u20ac\nSalon 40\u00a0m\u00b2 en grand format 60x120 : 2 800 - 4 000\u20ac\nVilla 120\u00a0m\u00b2 en marbre travertin : 12 000 - 18 000\u20ac\nCr\u00e9dence cuisine 3\u00a0m\u00b2 en zellige : 400 - 700\u20ac\nTerrasse 50\u00a0m\u00b2 en gr\u00e8s c\u00e9rame 20mm : 3 500 - 5 500\u20ac\n\nCes fourchettes incluent la pose seule. Le mat\u00e9riau est en sus (10 \u00e0 120\u20ac/m\u00b2 selon le choix).' },
        { title: 'Pourquoi le prix d\u0027un carrelage bien pos\u00e9, c\u0027est celui qu\u0027on ne refait pas', content: 'Un carrelage mal pos\u00e9 (lippage, carreaux creux, fissures aux joints) co\u00fbte 2 \u00e0 3 fois plus cher \u00e0 d\u00e9poser et reposer qu\u0027\u00e0 poser correctement la premi\u00e8re fois. Investir dans un artisan comp\u00e9tent \u2014 qui contr\u00f4le la plan\u00e9it\u00e9 avant de poser, qui utilise les bonnes colles, qui respecte les temps de s\u00e9chage \u2014 est une \u00e9conomie \u00e0 long terme.' },
      ]}
      relatedLinks={[
        { label: 'Chaque technique de pose', href: '/services' },
        { label: 'Carreleur Luxembourg', href: '/carreleur-luxembourg' },
        { label: 'D\u00e9crire mon projet', href: '/contact' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Combien co\u00fbte la pose de carrelage au Luxembourg en 2026\u00a0?",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
        datePublished: "2026-02-01",
        publisher: { "@type": "Organization", name: "Terranova Carrelage Luxembourg" },
      }}
    />
  )
}
