import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Parquet Carrelé Luxembourg | Imitation Bois Grès Cérame',
  description: 'Pose de parquet carrelé au Luxembourg. Chevron, quinconce, lame longue. Lippage garanti < 0.5mm. Compagnon du Tour de France au Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-parquet-carrele' },
}

export default function PoseParquetCarrele() {
  return (
    <ServicePageLayout
      title="Pose de Parquet Carrelé au Luxembourg"
      subtitle="Imitation bois en grès cérame"
      description="Un calepinage en chevron, ce n&apos;est pas juste de l&apos;esthétique. C&apos;est de la géométrie, de la découpe au degré près, et des heures de pose minutieuse. Le résultat, lui, est là pour 30 ans. Formats longs 20x180cm, double encollage systématique, niveleurs Raimondi HHXL pour un lippage inférieur à 0,5mm."
      image="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de parquet carrelé imitation bois par Terranova Luxembourg"
      priceRange="€50 - €90/m² pose seule"
      duration="2 à 8 jours"
      benefits={[
        "Rendu parquet authentique avec durabilité et entretien du carrelage",
        "Calepinage en quinconce, chevron ou opus romain selon préférences",
        "Système de nivellement Raimondi HHXL : lippage < 0,5mm garanti",
        "Mortier-colle S2 pour les formats > 120cm (pas de gauchissement)",
        "Joints fins 1,5-2mm en couleur bois pour l\'illusion parfaite",
        "Résistance à l\'humidité et aux animaux — entretien facile",
      ]}
      process={[
        "Validation du calepinage en plan (logiciel CAD) et validation client",
        "Préparation support et ragréage autonivelant si nécessaire",
        "Tracé des axes de pose au laser rotatif",
        "Pose à sec du calepinage de référence",
        "Encollage double (support + carrelage au peigne A2)",
        "Pose avec niveleurs Raimondi HHXL",
        "Découpes en biais pour les chevrons (scie à eau inclinable)",
        "Jointoyage 1,5-2mm Mapei Ultracolor Plus",
        "Nettoyage et protection",
      ]}
      guarantees={[
        "Lippage < 0,5mm garanti sur l\'ensemble de la surface",
        "Garantie décennale de tenue de la pose",
        "Calepinage conservé pour repose identique en cas de sinistre",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose parquet carrelé' },
      ]}
      relatedServices={[
        { label: 'Carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Calepinage (blog)', href: '/blog/calepinage-carrelage-pose-droite-diagonale-chevron-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Parquet Carrelé Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
