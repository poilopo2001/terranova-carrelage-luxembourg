import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'
import { RealisationsGallery } from '@/components/premium/RealisationsGallery'

export const metadata: Metadata = {
  title: 'R\u00e9alisations Carrelage Luxembourg | Galerie Photos',
  description: 'D\u00e9couvrez nos r\u00e9alisations carrelage au Luxembourg : marbre, travertin, parquet carrel\u00e9, mosa\u00efque, salles de bain, terrasses. Photos avant/apr\u00e8s.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/realisations' },
}

const projects = [
  { title: 'Marbre Calacatta Oro \u2014 Villa Kirchberg', category: 'Pierre naturelle', area: '85 m\u00b2', image: 'photo-1600607687939-ce8a6c349979', desc: 'Calepinage diagonale avec book matching sur les veines. 11 jours de pose minutieuse pour un r\u00e9sultat digne d\u0027un palace. Chaque dalle positionn\u00e9e pour que les veines se prolongent d\u0027un carreau \u00e0 l\u0027autre.' },
  { title: 'Salle de bain compl\u00e8te \u2014 Bertrange', category: 'Salle de bain', area: '22 m\u00b2', image: 'photo-1600607688969-a5bfcd646154', desc: 'Fa\u00efence Porcelanosa, douche italienne, mosa\u00efque verre bleu nuit, niche Schl\u00fcter. Calepinage dessin\u00e9 sur ordinateur avant la premi\u00e8re d\u00e9coupe.' },
  { title: 'Parquet carrel\u00e9 chevron \u2014 Mersch', category: 'Parquet carrel\u00e9', area: '140 m\u00b2', image: 'photo-1562259949-e8e7689d7828', desc: 'Ariostea Wood Ultra Laminate en chevron. Z\u00e9ro lippage v\u00e9rifi\u00e9 au r\u00e9glet. Joints 1,5mm couleur tabac.' },
  { title: 'Travertin roman bouch\u00e9 \u2014 Dudelange', category: 'Pierre naturelle', area: '55 m\u00b2', image: 'photo-1600585154340-be6161a56a0c', desc: 'Format 120x60cm, vacuoles remplies teinte pierre. Protection Fila Stone Protect pour une durabilit\u00e9 maximale.' },
  { title: 'Rejointoiement \u00e9poxy \u2014 Hesperange', category: 'R\u00e9novation', area: '28 m\u00b2', image: 'photo-1564540586988-aa4e53c3d799', desc: 'Joints noirs de moisissures remplac\u00e9s par \u00e9poxy blanc. 620\u20ac au lieu de 4 000\u20ac en d\u00e9pose-repose. M\u00eame carrelage, autre vie.' },
  { title: 'Grand format 120x240 \u2014 Walferdange', category: 'Sol', area: '38 m\u00b2', image: 'photo-1558618666-fcd25c85cd64', desc: 'Florim Maxfine en cuisine ouverte. D\u00e9coupe pr\u00e9cise au millim\u00e8tre, z\u00e9ro lippage. Double encollage obligatoire.' },
  { title: 'Terrasse antid\u00e9rapante \u2014 Remich', category: 'Ext\u00e9rieur', area: '68 m\u00b2', image: 'photo-1472214103451-9374bd1c798e', desc: 'Gr\u00e8s c\u00e9rame R11 Marazzi Terrace. R\u00e9sistance gel v\u00e9rifi\u00e9e. Deux hivers luxembourgeois sans le moindre d\u00e9g\u00e2t.' },
  { title: 'Polissage marbre entr\u00e9e \u2014 Ettelbruck', category: 'R\u00e9novation', area: '15 m\u00b2', image: 'photo-1600607687939-ce8a6c349979', desc: 'Polissage miroir Klindex. \u00c9conomie de 2 650\u20ac par rapport \u00e0 une d\u00e9pose-repose. R\u00e9sultat identique au neuf.' },
]

export default function Realisations() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "R\u00e9alisations Terranova Carrelage Luxembourg",
        description: "Galerie de r\u00e9alisations carrelage et pierre naturelle au Luxembourg.",
      }} />
      <Breadcrumb items={[{ label: 'R\u00e9alisations' }]} />

      {/* Hero header -- asymmetric with giant counter */}
      <section className="bg-brand-900 text-ivory-25 py-16 md:py-24 px-6 relative overflow-hidden">
        {/* Giant number background */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-10 md:right-10 font-heading text-[12rem] md:text-[18rem] font-bold text-ivory-25/[0.03] leading-none select-none pointer-events-none">
          2800
        </div>

        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-10 bg-accent-500/60" />
                <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase">
                  25 ans de chantiers
                </p>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] lg:leading-[1.1] font-bold tracking-tight">
                2&nbsp;800 chantiers.
                <br />Voici les plus <span className="italic text-accent-400">marquants</span>.
              </h1>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex items-end">
              <p className="font-body text-base text-ivory-100/80 leading-relaxed">
                Du marbre Calacatta Oro au Kirchberg au parquet carrel&eacute; chevron &agrave; Mersch &mdash; chaque composition est unique. Le mat&eacute;riau dicte le protocole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive gallery */}
      <section className="bg-ivory-25 py-12 md:py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <RealisationsGallery projects={projects} />
        </div>
      </section>

      <CTASection title="Votre sol pourrait \u00eatre le prochain" subtitle="D\u00e9crivez votre chantier. Fran\u00e7ois vous rappelle pour discuter mat\u00e9riau et calepinage." />
    </>
  )
}
