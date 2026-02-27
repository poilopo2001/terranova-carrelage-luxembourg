import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Refaire Son Carrelage Luxembourg | Dépose, Repose & Polissage',
  description: 'Refaire votre carrelage au Luxembourg : dépose-repose ou polissage marbre en place. Économie jusqu\'à 95%. Diagnostic et chiffrage par François Rodrigues, Compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/renovation-carrelage' },
}

export default function RenovationCarrelage() {
  return (
    <ServicePageLayout
      title="Refaire Son Carrelage au Luxembourg"
      subtitle="Dépose, repose ou polissage en place"
      description="Deux stratégies, un même objectif : un sol impeccable. Dépose-repose complète quand le support est compromis, ou polissage en place quand la pierre naturelle est simplement ternie. Le polissage au marbre avec machine Klindex évite 95% du coût d&apos;une dépose-repose et redonne au marbre son aspect d&apos;origine."
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Rénovation de carrelage par Terranova Luxembourg"
      priceRange="€45 - €130/m²"
      duration="2 à 10 jours"
      benefits={[
        "Deux stratégies : dépose-repose ou traitement/polissage en place",
        "Polissage marbre au miroir avec machine Klindex Expander 750",
        "Économie jusqu\'à 95% vs dépose-repose complète pour pierre naturelle saine",
        "Fraisage du mortier colle résiduel à la raboteuse Hilti DCH 300",
        "Ragréage autonivelant inclus dans le devis de rénovation complète",
        "Protection et imprégnation Fila incluse dans le polissage",
      ]}
      process={[
        "Diagnostic : évaluation de la faisabilité de la rénovation en place ou nécessité de dépose",
        "Option A (dépose) : dépose mécanique, fraisage, ragréage, repose neuf",
        "Option B (polissage) : nettoyage dégraissant, polissage progressif 80-1800 mesh",
        "Rejointoiement si nécessaire",
        "Imprégnation et protection finale",
        "Nettoyage et livraison",
      ]}
      guarantees={[
        "Garantie décennale pour les travaux de dépose-repose",
        "Garantie 3 ans sur l\'effet de polissage",
        "Aucun dommage au support sous-jacent garanti lors de la dépose",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Rénovation carrelage' },
      ]}
      relatedServices={[
        { label: 'Jointoyage', href: '/services/jointoyage' },
        { label: 'Réparation', href: '/services/reparation-carrelage' },
        { label: 'Rénovation Luxembourg', href: '/renovation-carrelage-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Rénovation Carrelage Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
