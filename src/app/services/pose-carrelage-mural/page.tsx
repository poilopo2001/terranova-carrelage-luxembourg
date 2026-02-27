import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Carrelage Mural Luxembourg | Étanchéité Douche & Cuisine',
  description: 'Pose carrelage mural au Luxembourg : étanchéité Schlüter-Kerdi, grand format 60x180cm, douche italienne. Compagnon du Tour de France au Grand-Duché.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-carrelage-mural' },
}

export default function PoseCarrelageMural() {
  return (
    <ServicePageLayout
      title="Pose de Carrelage Mural au Luxembourg"
      subtitle="Douche, cuisine & zones humides"
      description="En zone humide, pas de raccourci : membrane Schlüter-Kerdi posée systématiquement, angles bandés, colle C2 TE S1. On ne pose pas du grand format 60x180 en mural sans ventouse et laser. Le protocole technique fait toute la différence entre une douche qui tient 30 ans et une douche qui fuit au bout de 3."
      image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de carrelage mural salle de bain par Terranova"
      priceRange="€40 - €95/m² pose seule"
      duration="2 à 8 jours"
      benefits={[
        "Complexe d\'étanchéité Schlüter-Kerdi ou Sika dans toutes les douches",
        "Pose grand format 60x180cm avec ventouse et contrôle laser",
        "Angles et finitions en profilés Schlüter-Schiene inox ou alu anodisé",
        "Réalisation de niches encastrées en douche avec étanchéité intégrée",
        "Joints époxy Kerapoxy en douche pour hygiène et durabilité maximales",
        "Conformité normes PMR (receveur 0cm de seuil si demandé)",
      ]}
      process={[
        "Contrôle du support (planéité, humidité, portance pour grand format)",
        "Application membrane d\'étanchéité dans les zones humides",
        "Traitement des angles et raccords d\'étanchéité",
        "Calepinage visuel avec client (centrage, joints décoratifs)",
        "Encollage support + carrelage (double encollage grand format)",
        "Pose avec cales et système de nivellement",
        "Contrôle verticalité au laser",
        "Pose des profilés de finition Schlüter",
        "Jointoyage époxy ou ciment selon zone",
        "Nettoyage et protection",
      ]}
      guarantees={[
        "Garantie décennale sur l\'étanchéité (zones humides) et la tenue de la pose",
        "Conformité DTU 52.2 et normes P3 (zones humides) certifiée",
        "Test d\'étanchéité visuel avant carrelage fourni sur demande",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose carrelage mural' },
      ]}
      relatedServices={[
        { label: 'Faïence décorative', href: '/services/pose-faience' },
        { label: 'Salle de bain Luxembourg', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Cuisine Luxembourg', href: '/carrelage-cuisine-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Carrelage Mural Luxembourg",
        description: "Pose de carrelage mural au Luxembourg avec étanchéité sous carrelage.",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
