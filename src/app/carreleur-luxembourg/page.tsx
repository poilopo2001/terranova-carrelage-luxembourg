import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carreleur Luxembourg | Pose Carrelage, Pierre & Mosa\u00efque',
  description: 'Fran\u00e7ois Rodrigues, Compagnon du Tour de France, pose carrelage et pierre naturelle au Grand-Duch\u00e9 depuis 2001. Protocoles adapt\u00e9s \u00e0 chaque mat\u00e9riau. Showroom \u00e0 Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carreleur-luxembourg' },
}

export default function CarreleurLuxembourg() {
  return (
    <PillarPageLayout
      title="Carreleur au Luxembourg \u2013 Compagnon du Tour de France, 25 ans de pose"
      subtitle="Compagnon du Tour de France &middot; 25 ans au Grand-Duch\u00e9;"
      intro="Fran\u00e7ois Rodrigues, Compagnon du Tour de France, pose carrelage et pierre naturelle au Grand-Duch\u00e9 depuis 2001. Du gr\u00e8s c\u00e9rame grand format au marbre de Carrare, chaque mat\u00e9riau a son protocole. 25 ans de chantiers, pas un carreau sonnant creux."
      sections={[
        {
          title: 'Sol, mur, douche, terrasse \u2014 chaque surface a son protocole',
          content: 'Pose de carrelage sol et mural, fa\u00efence d\u00e9corative, mosa\u00efque (verre, marbre, \u00e9maux), pierre naturelle (marbre, travertin, granit, ardoise), parquet carrel\u00e9 imitation bois. Formats jusqu\u0027\u00e0 120x260cm. Double encollage, niveleurs Raimondi, joints \u00e9poxy Kerapoxy. Chaque technique de pose r\u00e9pond \u00e0 un protocole pr\u00e9cis adapt\u00e9 au mat\u00e9riau.',
          link: { label: 'Chaque technique de pose', href: '/services' },
        },
        {
          title: 'Le marbre ne se pose pas comme le gr\u00e8s c\u00e9rame',
          content: 'Le marbre de Carrare ne se pose pas comme du gr\u00e8s c\u00e9rame. Colle blanche obligatoire sur marbre, impr\u00e9gnation Fila avant et apr\u00e8s jointoyage, remplissage des vacuoles du travertin. Chaque pierre a son protocole, ses colles, son traitement. Certifi\u00e9 Sika Pro pour les milieux humides.',
          link: { label: 'Guide mat\u00e9riaux', href: '/materiaux' },
        },
        {
          title: 'Tout le Grand-Duch\u00e9 couvert',
          content: 'De Luxembourg-Ville (Kirchberg, Limpertsberg, Belair) \u00e0 Mersch (si\u00e8ge et showroom), d\u0027Ettelbruck aux vignobles de Grevenmacher et Remich, Fran\u00e7ois intervient sur tout le territoire. Connaissance approfondie des types de constructions locales : immeubles anciens de la capitale, villas premium de Bertrange-Mamer, maisons viticoles de la Moselle.',
          link: { label: 'Zones d\u0027intervention', href: '/zones-intervention' },
        },
        {
          title: 'De votre appel au nettoyage final \u2014 six \u00e9tapes, z\u00e9ro improvisation',
          content: '1. Contact et \u00e9coute du projet. 2. Visite technique gratuite (contr\u00f4le plan\u00e9it\u00e9, humidit\u00e9). 3. Chiffrage d\u00e9taill\u00e9 avec calepinage. 4. Pr\u00e9paration du support (ragr\u00e9age, \u00e9tanch\u00e9it\u00e9). 5. Pose selon protocole du mat\u00e9riau. 6. Jointoyage, protection et remise du carnet d\u0027entretien. On v\u00e9rifie avant de poser. C\u0027est non n\u00e9gociable.',
        },
        {
          title: 'Compagnon, certifi\u00e9, assur\u00e9 \u2014 les preuves',
          content: 'Compagnon du Tour de France. Membre F\u00e9d\u00e9ration des Artisans Luxembourg. Certifi\u00e9 Sika Pro (milieux humides). Assurance RC Pro d\u00e9cennale Foyer Assurances. Garantie d\u00e9cennale sur tous les travaux de pose. PV de r\u00e9ception contradictoire remis au client.',
        },
      ]}
      faq={[
        { q: 'Combien co\u00fbte la pose de carrelage au Luxembourg\u00a0?', a: 'De 35\u20ac/m\u00b2 (format standard) \u00e0 150\u20ac/m\u00b2 (pierre naturelle + calepinage complexe). Le prix d\u00e9pend du mat\u00e9riau, du format et de la complexit\u00e9 du calepinage. Fran\u00e7ois chiffre apr\u00e8s visite technique, retour sous 48h.' },
        { q: 'Quelle est la dur\u00e9e d\u0027un chantier de carrelage\u00a0?', a: 'De 1 jour (salle de bain simple) \u00e0 2-3 semaines (villa compl\u00e8te en marbre). Le planning est communiqu\u00e9 dans le devis.' },
        { q: 'Posez-vous sur plancher chauffant\u00a0?', a: 'Oui. Protocole strict : \u00e9preuve thermique, colles S1 d\u00e9solidarisantes Keraquick. Aucun raccourci.' },
        { q: 'Quelles langues parlez-vous\u00a0?', a: 'Fran\u00e7ais, portugais, luxembourgeois et allemand. Communication fluide dans les 4 langues.' },
        { q: 'Peut-on visiter le showroom\u00a0?', a: 'Oui, sur rendez-vous. Rue de la Gare \u00e0 Mersch. Mardi-jeudi 14h-18h, samedi 9h-12h.' },
      ]}
      relatedLinks={[
        { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Terrasse ext\u00e9rieur', href: '/carrelage-terrasse-exterieur-luxembourg' },
        { label: 'R\u00e9alisations', href: '/realisations' },
        { label: 'Prix pose carrelage 2026', href: '/blog/cout-pose-carrelage-luxembourg-2026' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Terranova Carrelage Luxembourg",
        telephone: "+352 26 54 88 75",
        address: { "@type": "PostalAddress", streetAddress: "5, Rue de la Gare", addressLocality: "Mersch", postalCode: "L-7535", addressCountry: "LU" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47" },
      }}
    />
  )
}
