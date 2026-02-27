import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Guide Mat\u00e9riaux Carrelage Luxembourg | Gr\u00e8s, Pierre, Fa\u00efence',
  description: 'Guide des mat\u00e9riaux de carrelage : gr\u00e8s c\u00e9rame, fa\u00efence, marbre, travertin, granit, mosa\u00efque. Conseils de choix par un artisan compagnon au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/materiaux' },
}

const materials = [
  {
    name: 'Gr\u00e8s c\u00e9rame', usage: 'Sol, mur, ext\u00e9rieur', durability: 'Tr\u00e8s \u00e9lev\u00e9e',
    desc: 'Le mat\u00e9riau polyvalent par excellence. R\u00e9sistant au gel, aux taches, \u00e0 l\u0027usure. Disponible en imitation bois, b\u00e9ton, pierre, m\u00e9tal. Formats jusqu\u0027\u00e0 120x260cm. Le choix rationnel pour 80% des projets.',
    entretien: 'Eau et savon neutre. Aucun traitement sp\u00e9cifique n\u00e9cessaire.',
    lien: '/services/pose-carrelage-sol',
  },
  {
    name: 'Marbre', usage: 'Sol int\u00e9rieur, mur', durability: 'Moyenne (sensible acides)',
    desc: 'Calcaire m\u00e9tamorphique aux veines uniques. Calacatta Oro, Carrare, Statuario, Nero Marquina. Chaque dalle est unique. Colle blanche obligatoire, impr\u00e9gnation Fila avant et apr\u00e8s pose. Book matching possible sur les grands formats.',
    entretien: 'Savon neutre pH 7. Jamais de vinaigre ni de produit acide. R\u00e9-impr\u00e9gnation tous les 2-3 ans.',
    lien: '/services/pose-pierre-naturelle',
  },
  {
    name: 'Travertin', usage: 'Sol, mur, ext\u00e9rieur (bouchiard\u00e9)', durability: '\u00c9lev\u00e9e',
    desc: 'Pierre calcaire aux vacuoles caract\u00e9ristiques. Tivoli, Noce, Romano. Peut \u00eatre bouch\u00e9 (vacuoles remplies) ou ouvert (aspect rustique). Chaleureux, \u00e9l\u00e9gant, il vieillit magnifiquement.',
    entretien: 'Nettoyant neutre. \u00c9viter les acides. Impr\u00e9gnation p\u00e9riodique recommand\u00e9e.',
    lien: '/services/pose-pierre-naturelle',
  },
  {
    name: 'Granit', usage: 'Sol, plan de travail, ext\u00e9rieur', durability: 'Tr\u00e8s \u00e9lev\u00e9e',
    desc: 'La pierre la plus dure et r\u00e9sistante. Nero Assoluto Zimbabwe, Baltic Brown. R\u00e9sistant aux acides contrairement au marbre. Id\u00e9al pour cuisines et zones \u00e0 fort passage.',
    entretien: 'Tr\u00e8s peu d\u0027entretien. Nettoyant neutre.',
    lien: '/services/pose-pierre-naturelle',
  },
  {
    name: 'Fa\u00efence', usage: 'Mur uniquement', durability: 'Mod\u00e9r\u00e9e',
    desc: 'C\u00e9ramique \u00e9maill\u00e9e \u00e0 base argileuse. Large palette d\u00e9corative : zellige, subway, hexagone, motifs floraux. Plus fragile que le gr\u00e8s c\u00e9rame, elle est r\u00e9serv\u00e9e aux murs.',
    entretien: 'Nettoyant doux. Attention aux chocs m\u00e9caniques.',
    lien: '/services/pose-faience',
  },
  {
    name: 'Mosa\u00efque', usage: 'Douches, piscines, cr\u00e9dences', durability: 'Variable selon mat\u00e9riau',
    desc: 'Verre, marbre, \u00e9maux de Briare, c\u00e9ramique. Plaquettes de 5x5mm \u00e0 50x50mm. L\u0027aboutissement technique du m\u00e9tier. Chaque tesselle compte.',
    entretien: 'Selon le mat\u00e9riau de base. Joints \u00e9poxy recommand\u00e9s en milieu humide.',
    lien: '/services/pose-mosaique',
  },
]

export default function Materiaux() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Guide des Mat\u00e9riaux de Carrelage",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
      }} />
      <Breadcrumb items={[{ label: 'Mat\u00e9riaux' }]} />

      <section className="bg-brand-900 text-ivory-25 py-16 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">Marbre, travertin, gr\u00e8s c\u00e9rame \u2014 chacun se pose diff\u00e9remment</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Guide des Mat\u00e9riaux de Carrelage</h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-4">Choisir le bon mat\u00e9riau, c&apos;est d\u00e9j\u00e0 la moiti\u00e9 du travail. Voici ce que 25 ans de pose nous ont appris sur chaque famille de carrelage et de pierre.</p>
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
                    <p className="text-xs text-brand-500 font-body mt-1">Durabilit\u00e9 : {m.durability}</p>
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

      <CTASection title="Venez toucher la pierre au showroom de Mersch" subtitle="Rue de la Gare, sur rendez-vous. Fran\u00e7ois vous montre les \u00e9chantillons et explique chaque protocole de pose." />
    </>
  )
}
