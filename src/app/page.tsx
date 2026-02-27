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
    text: 'Fran\u00e7ois a pos\u00e9 85\u00a0m\u00b2 de marbre Calacatta Oro dans notre villa au Kirchberg. Le calepinage en diagonale avec book matching sur les veines est spectaculaire. Un r\u00e9sultat digne d\u0027un palace.',
    project: 'Marbre Calacatta Oro 85\u00a0m\u00b2',
    rating: 5,
  },
  {
    author: 'Isabelle Kremer',
    location: 'Bertrange',
    text: 'Salle de bain compl\u00e8te : fa\u00efence Porcelanosa, douche italienne, mosa\u00efque verre bleu nuit. Fran\u00e7ois a dessin\u00e9 le calepinage sur ordinateur avant de commencer. Mon architecte a demand\u00e9 son num\u00e9ro.',
    project: 'Salle de bain compl\u00e8te',
    rating: 5,
  },
  {
    author: 'Christine Schroeder',
    location: 'Ettelbruck',
    text: 'Polissage marbre au lieu d\u0027une d\u00e9pose-repose. Devis \u00e0 850\u20ac vs 3\u00a0500\u20ac propos\u00e9s ailleurs. R\u00e9sultat miroir identique au neuf. C\u0027est un professionnel qui conseille ce qui est le mieux pour le client.',
    project: 'Polissage marbre 15\u00a0m\u00b2',
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
      priceRange: "\u20ac\u20ac\u20ac",
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
        { value: '25', label: 'ans de m\u00e9tier' },
        { value: '2\u00a0800+', label: 'chantiers r\u00e9alis\u00e9s' },
        { value: '4', label: 'langues parl\u00e9es' },
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
