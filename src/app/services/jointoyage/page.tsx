import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Jointoyage Carrelage Luxembourg | Rejointoiement \u00c9poxy & Ciment',
  description: 'Rejointoiement de carrelage au Luxembourg : remplacement joints ciment ou \u00e9poxy, traitement anti-moisissures. \u00c9conomisez 80% vs d\u00e9pose-repose. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/jointoyage' },
}

export default function Jointoyage() {
  return (
    <ServicePageLayout
      title="Jointoyage et Rejointoiement de Carrelage au Luxembourg"
      subtitle="Transformation visuelle sans d\u00e9pose"
      description="Le prix d&apos;un carrelage bien pos\u00e9, c&apos;est celui qu&apos;on ne refait pas. Et parfois, il suffit de refaire les joints pour retrouver un carrelage comme neuf. \u00c9conomie de 70 \u00e0 80% par rapport \u00e0 la d\u00e9pose-repose. D\u00e9pose des anciens joints au couteau oscillant Fein, traitement fongicide, puis joints neufs ciment ou \u00e9poxy."
      image="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Rejointoiement de carrelage par Terranova Luxembourg"
      priceRange="\u20ac15 - \u20ac35/m\u00b2"
      duration="1 \u00e0 3 jours"
      benefits={[
        "Transformation visuelle d\u0027un carrelage vieilli sans le remplacer",
        "Choix entre joints ciment (27 teintes Mapei) et joints \u00e9poxy (20 teintes)",
        "D\u00e9pose propre des anciens joints au couteau oscillant Fein",
        "Traitement fongicide anti-moisissures avant rejointoiement",
        "\u00c9conomie de 70 \u00e0 80% par rapport \u00e0 la d\u00e9pose-repose",
        "Dur\u00e9e d\u0027intervention courte : 1 \u00e0 3 jours pour une salle de bain compl\u00e8te",
      ]}
      process={[
        "\u00c9valuation de l\u0027\u00e9tat des joints et test de solidit\u00e9 du carrelage existant",
        "D\u00e9pose des anciens joints (outil oscillant ou disque fin)",
        "Aspiration et nettoyage des joints ouverts",
        "Traitement fongicide si moisissures pr\u00e9sentes",
        "Application des nouveaux joints (ciment ou \u00e9poxy selon choix)",
        "Essuyage du surplus sur le carrelage avant polym\u00e9risation",
        "Lustrage final et v\u00e9rification visuelle",
      ]}
      guarantees={[
        "Garantie 5 ans sur la tenue et la couleur des joints ciment Mapei Ultracolor",
        "Garantie 10 ans sur les joints \u00e9poxy Kerapoxy (imperm\u00e9abilit\u00e9 et couleur)",
        "Aucun carreau endommag\u00e9 lors de la d\u00e9pose garanti",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Jointoyage' },
      ]}
      relatedServices={[
        { label: 'R\u00e9novation carrelage', href: '/services/renovation-carrelage' },
        { label: 'Joint \u00e9poxy vs ciment (blog)', href: '/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Jointoyage Carrelage Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
