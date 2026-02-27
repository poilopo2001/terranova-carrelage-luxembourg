import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Pose Carrelage Mural Luxembourg | \u00c9tanch\u00e9it\u00e9 Douche & Cuisine',
  description: 'Pose carrelage mural au Luxembourg : \u00e9tanch\u00e9it\u00e9 Schl\u00fcter-Kerdi, grand format 60x180cm, douche italienne. Compagnon du Tour de France au Grand-Duch\u00e9.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/services/pose-carrelage-mural' },
}

export default function PoseCarrelageMural() {
  return (
    <ServicePageLayout
      title="Pose de Carrelage Mural au Luxembourg"
      subtitle="Douche, cuisine & zones humides"
      description="En zone humide, pas de raccourci : membrane Schl\u00fcter-Kerdi pos\u00e9e syst\u00e9matiquement, angles band\u00e9s, colle C2 TE S1. On ne pose pas du grand format 60x180 en mural sans ventouse et laser. Le protocole technique fait toute la diff\u00e9rence entre une douche qui tient 30 ans et une douche qui fuit au bout de 3."
      image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=800&h=600"
      imageAlt="Pose de carrelage mural salle de bain par Terranova"
      priceRange="\u20ac40 - \u20ac95/m\u00b2 pose seule"
      duration="2 \u00e0 8 jours"
      benefits={[
        "Complexe d\u0027\u00e9tanch\u00e9it\u00e9 Schl\u00fcter-Kerdi ou Sika dans toutes les douches",
        "Pose grand format 60x180cm avec ventouse et contr\u00f4le laser",
        "Angles et finitions en profil\u00e9s Schl\u00fcter-Schiene inox ou alu anodis\u00e9",
        "R\u00e9alisation de niches encastr\u00e9es en douche avec \u00e9tanch\u00e9it\u00e9 int\u00e9gr\u00e9e",
        "Joints \u00e9poxy Kerapoxy en douche pour hygi\u00e8ne et durabilit\u00e9 maximales",
        "Conformit\u00e9 normes PMR (receveur 0cm de seuil si demand\u00e9)",
      ]}
      process={[
        "Contr\u00f4le du support (plan\u00e9it\u00e9, humidit\u00e9, portance pour grand format)",
        "Application membrane d\u0027\u00e9tanch\u00e9it\u00e9 dans les zones humides",
        "Traitement des angles et raccords d\u0027\u00e9tanch\u00e9it\u00e9",
        "Calepinage visuel avec client (centrage, joints d\u00e9coratifs)",
        "Encollage support + carrelage (double encollage grand format)",
        "Pose avec cales et syst\u00e8me de nivellement",
        "Contr\u00f4le verticalit\u00e9 au laser",
        "Pose des profil\u00e9s de finition Schl\u00fcter",
        "Jointoyage \u00e9poxy ou ciment selon zone",
        "Nettoyage et protection",
      ]}
      guarantees={[
        "Garantie d\u00e9cennale sur l\u0027\u00e9tanch\u00e9it\u00e9 (zones humides) et la tenue de la pose",
        "Conformit\u00e9 DTU 52.2 et normes P3 (zones humides) certifi\u00e9e",
        "Test d\u0027\u00e9tanch\u00e9it\u00e9 visuel avant carrelage fourni sur demande",
      ]}
      breadcrumb={[
        { label: 'Services', href: '/services' },
        { label: 'Pose carrelage mural' },
      ]}
      relatedServices={[
        { label: 'Fa\u00efence d\u00e9corative', href: '/services/pose-faience' },
        { label: 'Salle de bain Luxembourg', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Cuisine Luxembourg', href: '/carrelage-cuisine-luxembourg' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pose Carrelage Mural Luxembourg",
        description: "Pose de carrelage mural au Luxembourg avec \u00e9tanch\u00e9it\u00e9 sous carrelage.",
        provider: { "@type": "LocalBusiness", name: "Terranova Carrelage Luxembourg" },
        areaServed: { "@type": "Country", name: "Luxembourg" },
      }}
    />
  )
}
