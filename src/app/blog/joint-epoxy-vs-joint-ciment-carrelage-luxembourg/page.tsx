import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Joint \u00c9poxy vs Joint Ciment Carrelage | Comparatif Luxembourg',
  description: 'Joint \u00e9poxy vs joint ciment pour carrelage : durabilit\u00e9, prix, entretien. Tout savoir pour bien choisir au Luxembourg par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg' },
}

export default function JointEpoxyVsCiment() {
  return (
    <BlogArticleLayout
      title="Joint \u00e9poxy vs joint ciment : tout savoir pour bien choisir au Luxembourg"
      date="Janvier 2026"
      readTime="7 min"
      intro="Le choix du joint est aussi important que le choix du carrelage. Un joint mal adapt\u00e9 noircit, fissure, moisit. Voici la v\u00e9rit\u00e9 technique sur les deux familles de joints, par un Compagnon qui en a pos\u00e9 des milliers de m\u00e8tres lin\u00e9aires."
      sections={[
        { title: 'Joint ciment : le standard \u00e9prouv\u00e9', content: 'Le joint ciment (Mapei Ultracolor Plus) est le choix classique. 27 teintes disponibles, prise rapide, r\u00e9sistant UV. Co\u00fbt : inclus dans le prix de pose standard. Inconv\u00e9nient : poreux. En zone humide (douche, bac \u00e0 receveur), il absorbe l\u0027eau et peut d\u00e9velopper des moisissures au bout de 3-5 ans. Un traitement hydrofuge retarde le ph\u00e9nom\u00e8ne mais ne l\u0027\u00e9limine pas.' },
        { title: 'Joint \u00e9poxy : l\u0027alternative premium', content: 'Le joint \u00e9poxy (Mapei Kerapoxy Design) est une r\u00e9sine bicomposante 100% imperm\u00e9able. Z\u00e9ro porosit\u00e9, z\u00e9ro moisissure, r\u00e9sistant aux produits chimiques (pH 4-11). 20 teintes. Id\u00e9al pour : douches, piscines, cuisines professionnelles, zones hospitalières. Surco\u00fbt : 5-15\u20ac/m\u00b2 par rapport au joint ciment. Contrainte : pose plus technique (fen\u00eatre de travail de 45 min avant polym\u00e9risation, essuyage \u00e0 l\u0027\u00e9ponge sp\u00e9cifique Rubi).' },
        { title: 'Quand choisir quoi\u00a0?', content: 'Zone s\u00e8che (salon, chambre, couloir) : joint ciment Ultracolor Plus. Suffisant, \u00e9conomique, durable.\n\nZone humide (douche, bac, piscine) : joint \u00e9poxy Kerapoxy. L\u0027investissement se justifie par 10+ ans sans moisissure.\n\nCuisine : d\u00e9pend de l\u0027usage. Cr\u00e9dence au-dessus de la plaque : \u00e9poxy recommand\u00e9 (projections de graisse). Sol cuisine : ciment suffit.\n\nSophie de Hesperange a fait remplacer ses joints ciment moisis par des joints \u00e9poxy blancs sur 28\u00a0m\u00b2. Transformation totale pour 620\u20ac.' },
      ]}
      relatedLinks={[
        { label: 'Service jointoyage', href: '/services/jointoyage' },
        { label: 'R\u00e9novation carrelage', href: '/renovation-carrelage-luxembourg' },
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Joint \u00e9poxy vs joint ciment carrelage",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
        datePublished: "2026-01-15",
      }}
    />
  )
}
