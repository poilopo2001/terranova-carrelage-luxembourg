import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Mosa\u00efque Luxembourg | Verre, Marbre, \u00c9maux',
  description: 'Pose de mosa\u00efque au Luxembourg : verre, marbre, \u00e9maux de Briare, c\u00e9ramique. Douches, piscines, cr\u00e9dences. Calepinage informatique. Compagnon du Tour de France.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-mosaique' },
}

export default function PoseMosaique() {
  return (
    <ServicePageLayout
      title="Pose de Mosa\u00efque au Luxembourg"
      subtitle="L&apos;aboutissement du m\u00e9tier de carreleur"
      description="La mosa\u00efque, c&apos;est l&apos;aboutissement du m\u00e9tier. Chaque tesselle compte. Verre souffl\u00e9 iris\u00e9 pour bassins, marbre Volakas en opus byzantin pour halls d&apos;entr\u00e9e, \u00e9maux de Briare pour des projets de prestige \u2014 chaque pose est pr\u00e9c\u00e9d\u00e9e d&apos;un calepinage informatique qui valide le motif avant l&apos;achat du mat\u00e9riel."
      image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de mosa\u00efque d\u00e9corative par Terranova Luxembourg"
      priceRange="\u20ac75 - \u20ac180/m\u00b2 pose seule"
      duration="2 \u00e0 10 jours"
      benefits={[
        "Calepinage informatique du motif avant commande du mat\u00e9riel",
        "Ma\u00eetrise des 4 types : verre, marbre, c\u00e9ramique sur filet, \u00e9maux Briare",
        "Colles sp\u00e9ciales transparentes pour mosa\u00efque verre (pas de halo)",
        "Colles hydrofuges et joints \u00e9poxy pour bassins et piscines",
        "R\u00e9alisation de frises d\u00e9coratives et inserts dans carrelage standard",
        "Finitions bord de mosa\u00efque en profil\u00e9 aluminium ou inox",
      ]}
      process={[
        "Calepinage informatique du motif (validation visuelle avant achat)",
        "Pr\u00e9paration du support (\u00e9tanch\u00e9it\u00e9 Schl\u00fcter-Kerdi si zone humide)",
        "Encollage en couche peign\u00e9e de la colle adapt\u00e9e",
        "Pose des plaques de mosa\u00efque ou des plaquettes individuelles",
        "Contr\u00f4le de l\u0027alignement avec r\u00e8gle et niveau laser",
        "Retrait du papier de maintien apr\u00e8s 24h de s\u00e9chage",
        "Jointoyage au mortier fin ou r\u00e9sine \u00e9poxy",
        "Nettoyage et soins de protection",
      ]}
      guarantees={[
        "Garantie d\u00e9cennale de tenue de la pose",
        "Garantie \u00e9tanch\u00e9it\u00e9 pour bassins et piscines",
        "Calepinage informatique conserv\u00e9 : repose identique possible en cas de dommage partiel",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose mosa\u00efque' },
      ]}
      relatedServices={[
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Mosa\u00efque Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
