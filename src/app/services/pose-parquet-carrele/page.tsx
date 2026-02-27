import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Parquet Carrel\u00e9 Luxembourg | Imitation Bois Gr\u00e8s C\u00e9rame',
  description: 'Pose de parquet carrel\u00e9 au Luxembourg. Chevron, quinconce, lame longue. Lippage garanti < 0.5mm. Compagnon du Tour de France au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-parquet-carrele' },
}

export default function PoseParquetCarrele() {
  return (
    <ServicePageLayout
      title="Pose de Parquet Carrel\u00e9 au Luxembourg"
      subtitle="Imitation bois en gr\u00e8s c\u00e9rame"
      description="Un calepinage en chevron, ce n&apos;est pas juste de l&apos;esth\u00e9tique. C&apos;est de la g\u00e9om\u00e9trie, de la d\u00e9coupe au degr\u00e9 pr\u00e8s, et des heures de pose minutieuse. Le r\u00e9sultat, lui, est l\u00e0 pour 30 ans. Formats longs 20x180cm, double encollage syst\u00e9matique, niveleurs Raimondi HHXL pour un lippage inf\u00e9rieur \u00e0 0,5mm."
      image="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de parquet carrel\u00e9 imitation bois par Terranova Luxembourg"
      priceRange="\u20ac50 - \u20ac90/m\u00b2 pose seule"
      duration="2 \u00e0 8 jours"
      benefits={[
        "Rendu parquet authentique avec durabilit\u00e9 et entretien du carrelage",
        "Calepinage en quinconce, chevron ou opus romain selon pr\u00e9f\u00e9rences",
        "Syst\u00e8me de nivellement Raimondi HHXL : lippage < 0,5mm garanti",
        "Mortier-colle S2 pour les formats > 120cm (pas de gauchissement)",
        "Joints fins 1,5-2mm en couleur bois pour l\u0027illusion parfaite",
        "R\u00e9sistance \u00e0 l\u0027humidit\u00e9 et aux animaux \u2014 entretien facile",
      ]}
      process={[
        "Validation du calepinage en plan (logiciel CAD) et validation client",
        "Pr\u00e9paration support et ragr\u00e9age autonivelant si n\u00e9cessaire",
        "Trac\u00e9 des axes de pose au laser rotatif",
        "Pose \u00e0 sec du calepinage de r\u00e9f\u00e9rence",
        "Encollage double (support + carrelage au peigne A2)",
        "Pose avec niveleurs Raimondi HHXL",
        "D\u00e9coupes en biais pour les chevrons (scie \u00e0 eau inclinable)",
        "Jointoyage 1,5-2mm Mapei Ultracolor Plus",
        "Nettoyage et protection",
      ]}
      guarantees={[
        "Lippage < 0,5mm garanti sur l\u0027ensemble de la surface",
        "Garantie d\u00e9cennale de tenue de la pose",
        "Calepinage conserv\u00e9 pour repose identique en cas de sinistre",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose parquet carrel\u00e9' },
      ]}
      relatedServices={[
        { label: 'Carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Calepinage (blog)', href: '/blog/calepinage-carrelage-pose-droite-diagonale-chevron-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Parquet Carrel\u00e9 Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
