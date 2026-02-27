import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Jointoyage Carrelage Luxembourg | Rejointoiement Époxy & Ciment',
  description: 'Rejointoiement de carrelage au Luxembourg : remplacement joints ciment ou époxy, traitement anti-moisissures. Économisez 80% vs dépose-repose. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/jointoyage' },
}

export default function Jointoyage() {
  return (
    <ServicePageLayout
      title="Jointoyage et Rejointoiement de Carrelage au Luxembourg"
      subtitle="Transformation visuelle sans dépose"
      description="Le prix d&apos;un carrelage bien posé, c&apos;est celui qu&apos;on ne refait pas. Et parfois, il suffit de refaire les joints pour retrouver un carrelage comme neuf. Économie de 70 à 80% par rapport à la dépose-repose. Dépose des anciens joints au couteau oscillant Fein, traitement fongicide, puis joints neufs ciment ou époxy."
      image="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Rejointoiement de carrelage par Terranova Luxembourg"
      priceRange="€15 - €35/m²"
      duration="1 à 3 jours"
      benefits={[
        "Transformation visuelle d\'un carrelage vieilli sans le remplacer",
        "Choix entre joints ciment (27 teintes Mapei) et joints époxy (20 teintes)",
        "Dépose propre des anciens joints au couteau oscillant Fein",
        "Traitement fongicide anti-moisissures avant rejointoiement",
        "Économie de 70 à 80% par rapport à la dépose-repose",
        "Durée d\'intervention courte : 1 à 3 jours pour une salle de bain complète",
      ]}
      process={[
        "Évaluation de l\'état des joints et test de solidité du carrelage existant",
        "Dépose des anciens joints (outil oscillant ou disque fin)",
        "Aspiration et nettoyage des joints ouverts",
        "Traitement fongicide si moisissures présentes",
        "Application des nouveaux joints (ciment ou époxy selon choix)",
        "Essuyage du surplus sur le carrelage avant polymérisation",
        "Lustrage final et vérification visuelle",
      ]}
      guarantees={[
        "Garantie 5 ans sur la tenue et la couleur des joints ciment Mapei Ultracolor",
        "Garantie 10 ans sur les joints époxy Kerapoxy (imperméabilité et couleur)",
        "Aucun carreau endommagé lors de la dépose garanti",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Jointoyage' },
      ]}
      relatedServices={[
        { label: 'Rénovation carrelage', href: '/services/renovation-carrelage' },
        { label: 'Joint époxy vs ciment (blog)', href: '/blog/joint-epoxy-vs-joint-ciment-carrelage-luxembourg' },
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
