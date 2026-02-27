import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'
import { RealisationsGallery } from '@/components/premium/RealisationsGallery'

export const metadata: Metadata = {
  title: 'Réalisations Carrelage Luxembourg | Galerie Photos',
  description: 'Découvrez nos réalisations carrelage au Luxembourg : marbre, travertin, parquet carrelé, mosaïque, salles de bain, terrasses. Photos avant/après.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/realisations' },
}

const projects = [
  { title: 'Marbre Calacatta Oro — Villa Kirchberg', category: 'Pierre naturelle', area: '85 m²', image: 'photo-1600607687939-ce8a6c349979', desc: 'Calepinage diagonale avec book matching sur les veines. 11 jours de pose minutieuse pour un résultat digne d\'un palace. Chaque dalle positionnée pour que les veines se prolongent d\'un carreau à l\'autre.' },
  { title: 'Salle de bain complète — Bertrange', category: 'Salle de bain', area: '22 m²', image: 'photo-1600607688969-a5bfcd646154', desc: 'Faïence Porcelanosa, douche italienne, mosaïque verre bleu nuit, niche Schlüter. Calepinage dessiné sur ordinateur avant la première découpe.' },
  { title: 'Parquet carrelé chevron — Mersch', category: 'Parquet carrelé', area: '140 m²', image: 'photo-1562259949-e8e7689d7828', desc: 'Ariostea Wood Ultra Laminate en chevron. Zéro lippage vérifié au réglet. Joints 1,5mm couleur tabac.' },
  { title: 'Travertin roman bouché — Dudelange', category: 'Pierre naturelle', area: '55 m²', image: 'photo-1600585154340-be6161a56a0c', desc: 'Format 120x60cm, vacuoles remplies teinte pierre. Protection Fila Stone Protect pour une durabilité maximale.' },
  { title: 'Rejointoiement époxy — Hesperange', category: 'Rénovation', area: '28 m²', image: 'photo-1564540586988-aa4e53c3d799', desc: 'Joints noirs de moisissures remplacés par époxy blanc. 620€ au lieu de 4 000€ en dépose-repose. Même carrelage, autre vie.' },
  { title: 'Grand format 120x240 — Walferdange', category: 'Sol', area: '38 m²', image: 'photo-1558618666-fcd25c85cd64', desc: 'Florim Maxfine en cuisine ouverte. Découpe précise au millimètre, zéro lippage. Double encollage obligatoire.' },
  { title: 'Terrasse antidérapante — Remich', category: 'Extérieur', area: '68 m²', image: 'photo-1472214103451-9374bd1c798e', desc: 'Grès cérame R11 Marazzi Terrace. Résistance gel vérifiée. Deux hivers luxembourgeois sans le moindre dégât.' },
  { title: 'Polissage marbre entrée — Ettelbruck', category: 'Rénovation', area: '15 m²', image: 'photo-1600607687939-ce8a6c349979', desc: 'Polissage miroir Klindex. Économie de 2 650€ par rapport à une dépose-repose. Résultat identique au neuf.' },
]

export default function Realisations() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Réalisations Terranova Carrelage Luxembourg",
        description: "Galerie de réalisations carrelage et pierre naturelle au Luxembourg.",
      }} />
      {/* Hero header -- asymmetric with giant counter */}
      <section className="bg-brand-900 text-ivory-25 pt-28 pb-16 md:pt-36 md:pb-24 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: 'Réalisations' }]}  variant="dark" />
        </div>
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

      <CTASection title="Votre sol pourrait être le prochain" subtitle="Décrivez votre chantier. François vous rappelle pour discuter matériau et calepinage." />
    </>
  )
}
