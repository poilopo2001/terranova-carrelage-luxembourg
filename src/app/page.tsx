import SchemaOrg from '@/components/SchemaOrg'
import { HeroBento } from '@/components/premium/HeroBento'
import { ParallaxTestimonials } from '@/components/premium/ParallaxTestimonials'
import HomeServices from '@/components/HomeServices'
import HomeTrustBand from '@/components/HomeTrustBand'
import HomeZones from '@/components/HomeZones'
import HomeCTA from '@/components/HomeCTA'

const testimonials = [
  {
    author: 'Marc Hoffmann',
    location: 'Kirchberg, Luxembourg-Ville',
    text: 'François a posé 85\ m² de marbre Calacatta Oro dans notre villa au Kirchberg. Le calepinage en diagonale avec book matching sur les veines est spectaculaire. Un résultat digne d\'un palace.',
    project: 'Marbre Calacatta Oro 85\ m²',
    rating: 5,
  },
  {
    author: 'Isabelle Kremer',
    location: 'Bertrange',
    text: 'Salle de bain complète : faïence Porcelanosa, douche italienne, mosaïque verre bleu nuit. François a dessiné le calepinage sur ordinateur avant de commencer. Mon architecte a demandé son numéro.',
    project: 'Salle de bain complète',
    rating: 5,
  },
  {
    author: 'Christine Schroeder',
    location: 'Ettelbruck',
    text: 'Polissage marbre au lieu d\'une dépose-repose. Devis à 850€ vs 3\ 500€ proposés ailleurs. Résultat miroir identique au neuf. C\'est un professionnel qui conseille ce qui est le mieux pour le client.',
    project: 'Polissage marbre 15\ m²',
    rating: 5,
  },
]

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Terranova Carrelage Luxembourg",
      image: "https://www.terranova-carrelage.lu/og-image.jpg",
      telephone: "+352 26 54 88 75",
      email: "contact@terranova-carrelage.lu",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5, Rue de la Gare",
        addressLocality: "Mersch",
        postalCode: "L-7535",
        addressCountry: "LU",
      },
      geo: { "@type": "GeoCoordinates", latitude: 49.745, longitude: 6.105 },
      url: "https://www.terranova-carrelage.lu",
      priceRange: "€€€",
      openingHours: ["Mo-Fr 07:00-17:30", "Sa 07:00-12:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "47",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Terranova Carrelage Luxembourg",
      url: "https://www.terranova-carrelage.lu",
    },
  ]

  return (
    <>
      <SchemaOrg schema={schema} />

      <HeroBento stats={[
        { value: '25', label: 'ans de métier' },
        { value: '2\ 800+', label: 'chantiers réalisés' },
        { value: '4', label: 'langues parlées' },
        { value: '10', label: 'ans de garantie' },
      ]} />

      <HomeServices />

      <HomeTrustBand />

      <ParallaxTestimonials testimonials={testimonials} />

      <HomeZones />

      <HomeCTA />
    </>
  )
}
