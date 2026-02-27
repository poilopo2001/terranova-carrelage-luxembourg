import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Guide Matériaux Carrelage Luxembourg | Grès, Pierre, Faïence',
  description: 'Guide des matériaux de carrelage : grès cérame, faïence, marbre, travertin, granit, mosaïque. Conseils de choix par un artisan compagnon au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/materiaux' },
}

const materials = [
  {
    name: 'Grès cérame', usage: 'Sol, mur, extérieur', durability: 'Très élevée',
    desc: 'Le matériau polyvalent par excellence. Résistant au gel, aux taches, à l\'usure. Disponible en imitation bois, béton, pierre, métal. Formats jusqu\'à 120x260cm. Le choix rationnel pour 80% des projets.',
    entretien: 'Eau et savon neutre. Aucun traitement spécifique nécessaire.',
    lien: '/services/pose-carrelage-sol',
  },
  {
    name: 'Marbre', usage: 'Sol intérieur, mur', durability: 'Moyenne (sensible acides)',
    desc: 'Calcaire métamorphique aux veines uniques. Calacatta Oro, Carrare, Statuario, Nero Marquina. Chaque dalle est unique. Colle blanche obligatoire, imprégnation Fila avant et après pose. Book matching possible sur les grands formats.',
    entretien: 'Savon neutre pH 7. Jamais de vinaigre ni de produit acide. Ré-imprégnation tous les 2-3 ans.',
    lien: '/services/pose-pierre-naturelle',
  },
  {
    name: 'Travertin', usage: 'Sol, mur, extérieur (bouchiardé)', durability: 'Élevée',
    desc: 'Pierre calcaire aux vacuoles caractéristiques. Tivoli, Noce, Romano. Peut être bouché (vacuoles remplies) ou ouvert (aspect rustique). Chaleureux, élégant, il vieillit magnifiquement.',
    entretien: 'Nettoyant neutre. Éviter les acides. Imprégnation périodique recommandée.',
    lien: '/services/pose-pierre-naturelle',
  },
  {
    name: 'Granit', usage: 'Sol, plan de travail, extérieur', durability: 'Très élevée',
    desc: 'La pierre la plus dure et résistante. Nero Assoluto Zimbabwe, Baltic Brown. Résistant aux acides contrairement au marbre. Idéal pour cuisines et zones à fort passage.',
    entretien: 'Très peu d\'entretien. Nettoyant neutre.',
    lien: '/services/pose-pierre-naturelle',
  },
  {
    name: 'Faïence', usage: 'Mur uniquement', durability: 'Modérée',
    desc: 'Céramique émaillée à base argileuse. Large palette décorative : zellige, subway, hexagone, motifs floraux. Plus fragile que le grès cérame, elle est réservée aux murs.',
    entretien: 'Nettoyant doux. Attention aux chocs mécaniques.',
    lien: '/services/pose-faience',
  },
  {
    name: 'Mosaïque', usage: 'Douches, piscines, crédences', durability: 'Variable selon matériau',
    desc: 'Verre, marbre, émaux de Briare, céramique. Plaquettes de 5x5mm à 50x50mm. L\'aboutissement technique du métier. Chaque tesselle compte.',
    entretien: 'Selon le matériau de base. Joints époxy recommandés en milieu humide.',
    lien: '/services/pose-mosaique',
  },
]

export default function Materiaux() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Guide des Matériaux de Carrelage",
        author: { "@type": "Person", name: "François Rodrigues" },
      }} />
      <section className="bg-brand-900 text-ivory-25 pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: 'Matériaux' }]}  variant="dark" />
        </div>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">Marbre, travertin, grès cérame — chacun se pose différemment</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Guide des Matériaux de Carrelage</h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-4">Choisir le bon matériau, c&apos;est déjà la moitié du travail. Voici ce que 25 ans de pose nous ont appris sur chaque famille de carrelage et de pierre.</p>
        </div>
      </section>

      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-[1280px] mx-auto space-y-8">
          {materials.map((m, i) => (
            <Card key={i} className="border-ivory-200 shadow-card overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/4">
                    <h2 className="font-heading text-2xl font-bold text-brand-900">{m.name}</h2>
                    <p className="text-sm text-accent-600 font-body font-semibold mt-1">{m.usage}</p>
                    <p className="text-xs text-brand-500 font-body mt-1">Durabilité : {m.durability}</p>
                  </div>
                  <div className="md:w-3/4 space-y-3">
                    <p className="font-body text-brand-800 leading-relaxed">{m.desc}</p>
                    <p className="font-body text-sm text-brand-600"><strong>Entretien :</strong> {m.entretien}</p>
                    <Link href={m.lien} className="inline-flex items-center text-sm font-body font-semibold text-accent-500 hover:text-accent-700 transition-colors">
                      Voir le service de pose &rarr;
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTASection title="Venez toucher la pierre au showroom de Mersch" subtitle="Rue de la Gare, sur rendez-vous. François vous montre les échantillons et explique chaque protocole de pose." />
    </>
  )
}
