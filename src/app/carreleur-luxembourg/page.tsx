import type { Metadata } from 'next'
import PillarPageLayout from '@/components/PillarPageLayout'

export const metadata: Metadata = {
  title: 'Carreleur Luxembourg | Pose Carrelage, Pierre & Mosaïque',
  description: 'François Rodrigues, Compagnon du Tour de France, pose carrelage et pierre naturelle au Grand-Duché depuis 2001. Protocoles adaptés à chaque matériau. Showroom à Mersch.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/carreleur-luxembourg' },
}

export default function CarreleurLuxembourg() {
  return (
    <PillarPageLayout
      title="Carreleur au Luxembourg \u2013 Compagnon du Tour de France, 25 ans de pose"
      subtitle="Compagnon du Tour de France &middot; 25 ans au Grand-Duché;"
      intro="François Rodrigues, Compagnon du Tour de France, pose carrelage et pierre naturelle au Grand-Duché depuis 2001. Du grès cérame grand format au marbre de Carrare, chaque matériau a son protocole. 25 ans de chantiers, pas un carreau sonnant creux."
      sections={[
        {
          title: 'Sol, mur, douche, terrasse — chaque surface a son protocole',
          content: 'Pose de carrelage sol et mural, faïence décorative, mosaïque (verre, marbre, émaux), pierre naturelle (marbre, travertin, granit, ardoise), parquet carrelé imitation bois. Formats jusqu\'à 120x260cm. Double encollage, niveleurs Raimondi, joints époxy Kerapoxy. Chaque technique de pose répond à un protocole précis adapté au matériau.',
          link: { label: 'Chaque technique de pose', href: '/services' },
        },
        {
          title: 'Le marbre ne se pose pas comme le grès cérame',
          content: 'Le marbre de Carrare ne se pose pas comme du grès cérame. Colle blanche obligatoire sur marbre, imprégnation Fila avant et après jointoyage, remplissage des vacuoles du travertin. Chaque pierre a son protocole, ses colles, son traitement. Certifié Sika Pro pour les milieux humides.',
          link: { label: 'Guide matériaux', href: '/materiaux' },
        },
        {
          title: 'Tout le Grand-Duché couvert',
          content: 'De Luxembourg-Ville (Kirchberg, Limpertsberg, Belair) à Mersch (siège et showroom), d\'Ettelbruck aux vignobles de Grevenmacher et Remich, François intervient sur tout le territoire. Connaissance approfondie des types de constructions locales : immeubles anciens de la capitale, villas premium de Bertrange-Mamer, maisons viticoles de la Moselle.',
          link: { label: 'Zones d\'intervention', href: '/zones-intervention' },
        },
        {
          title: 'De votre appel au nettoyage final — six étapes, zéro improvisation',
          content: '1. Contact et écoute du projet. 2. Visite technique gratuite (contrôle planéité, humidité). 3. Chiffrage détaillé avec calepinage. 4. Préparation du support (ragréage, étanchéité). 5. Pose selon protocole du matériau. 6. Jointoyage, protection et remise du carnet d\'entretien. On vérifie avant de poser. C\'est non négociable.',
        },
        {
          title: 'Compagnon, certifié, assuré — les preuves',
          content: 'Compagnon du Tour de France. Membre Fédération des Artisans Luxembourg. Certifié Sika Pro (milieux humides). Assurance RC Pro décennale Foyer Assurances. Garantie décennale sur tous les travaux de pose. PV de réception contradictoire remis au client.',
        },
      ]}
      faq={[
        { q: 'Combien coûte la pose de carrelage au Luxembourg\ ?', a: 'De 35€/m² (format standard) à 150€/m² (pierre naturelle + calepinage complexe). Le prix dépend du matériau, du format et de la complexité du calepinage. François chiffre après visite technique, retour sous 48h.' },
        { q: 'Quelle est la durée d\'un chantier de carrelage\ ?', a: 'De 1 jour (salle de bain simple) à 2-3 semaines (villa complète en marbre). Le planning est communiqué dans le devis.' },
        { q: 'Posez-vous sur plancher chauffant\ ?', a: 'Oui. Protocole strict : épreuve thermique, colles S1 désolidarisantes Keraquick. Aucun raccourci.' },
        { q: 'Quelles langues parlez-vous\ ?', a: 'Français, portugais, luxembourgeois et allemand. Communication fluide dans les 4 langues.' },
        { q: 'Peut-on visiter le showroom\ ?', a: 'Oui, sur rendez-vous. Rue de la Gare à Mersch. Mardi-jeudi 14h-18h, samedi 9h-12h.' },
      ]}
      relatedLinks={[
        { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Pierre naturelle', href: '/services/pose-pierre-naturelle' },
        { label: 'Salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
        { label: 'Terrasse extérieur', href: '/carrelage-terrasse-exterieur-luxembourg' },
        { label: 'Réalisations', href: '/realisations' },
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
