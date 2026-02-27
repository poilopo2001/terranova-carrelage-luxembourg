import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Refaire Son Carrelage Luxembourg | D\u00e9pose, Repose & Polissage',
  description: 'Refaire votre carrelage au Luxembourg : d\u00e9pose-repose ou polissage marbre en place. \u00c9conomie jusqu\u0027\u00e0 95%. Diagnostic et chiffrage par Fran\u00e7ois Rodrigues, Compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/renovation-carrelage' },
}

export default function RenovationCarrelage() {
  return (
    <ServicePageLayout
      title="Refaire Son Carrelage au Luxembourg"
      subtitle="D\u00e9pose, repose ou polissage en place"
      description="Deux strat\u00e9gies, un m\u00eame objectif : un sol impeccable. D\u00e9pose-repose compl\u00e8te quand le support est compromis, ou polissage en place quand la pierre naturelle est simplement ternie. Le polissage au marbre avec machine Klindex \u00e9vite 95% du co\u00fbt d&apos;une d\u00e9pose-repose et redonne au marbre son aspect d&apos;origine."
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="R\u00e9novation de carrelage par Terranova Luxembourg"
      priceRange="\u20ac45 - \u20ac130/m\u00b2"
      duration="2 \u00e0 10 jours"
      benefits={[
        "Deux strat\u00e9gies : d\u00e9pose-repose ou traitement/polissage en place",
        "Polissage marbre au miroir avec machine Klindex Expander 750",
        "\u00c9conomie jusqu\u0027\u00e0 95% vs d\u00e9pose-repose compl\u00e8te pour pierre naturelle saine",
        "Fraisage du mortier colle r\u00e9siduel \u00e0 la raboteuse Hilti DCH 300",
        "Ragr\u00e9age autonivelant inclus dans le devis de r\u00e9novation compl\u00e8te",
        "Protection et impr\u00e9gnation Fila incluse dans le polissage",
      ]}
      process={[
        "Diagnostic : \u00e9valuation de la faisabilit\u00e9 de la r\u00e9novation en place ou n\u00e9cessit\u00e9 de d\u00e9pose",
        "Option A (d\u00e9pose) : d\u00e9pose m\u00e9canique, fraisage, ragr\u00e9age, repose neuf",
        "Option B (polissage) : nettoyage d\u00e9graissant, polissage progressif 80-1800 mesh",
        "Rejointoiement si n\u00e9cessaire",
        "Impr\u00e9gnation et protection finale",
        "Nettoyage et livraison",
      ]}
      guarantees={[
        "Garantie d\u00e9cennale pour les travaux de d\u00e9pose-repose",
        "Garantie 3 ans sur l\u0027effet de polissage",
        "Aucun dommage au support sous-jacent garanti lors de la d\u00e9pose",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'R\u00e9novation carrelage' },
      ]}
      relatedServices={[
        { label: 'Jointoyage', href: '/services/jointoyage' },
        { label: 'R\u00e9paration', href: '/services/reparation-carrelage' },
        { label: 'R\u00e9novation Luxembourg', href: '/renovation-carrelage-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "R\u00e9novation Carrelage Luxembourg",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
