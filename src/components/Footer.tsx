'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronRight, Shield, Award, Languages } from 'lucide-react'
import { motion } from 'framer-motion'

/* ─── Link data ─── */

const serviceLinks = [
  { label: 'Pose carrelage sol', href: '/services/pose-carrelage-sol' },
  { label: 'Pose carrelage mural', href: '/services/pose-carrelage-mural' },
  { label: 'Pose pierre naturelle', href: '/services/pose-pierre-naturelle' },
  { label: 'Pose mosaïque', href: '/services/pose-mosaique' },
  { label: 'Pose faïence', href: '/services/pose-faience' },
  { label: 'Pose parquet carrelé', href: '/services/pose-parquet-carrele' },
  { label: 'Jointoyage', href: '/services/jointoyage' },
  { label: 'Rénovation carrelage', href: '/services/renovation-carrelage' },
  { label: 'Réparation carrelage', href: '/services/reparation-carrelage' },
]

const resourceLinks = [
  { label: 'Toutes nos réalisations', href: '/realisations' },
  { label: 'Guide matériaux', href: '/materiaux' },
  { label: 'Blog & conseils', href: '/blog' },
  { label: 'À propos de François', href: '/a-propos' },
  { label: 'Contact & devis', href: '/contact' },
]

const pillarLinks = [
  { label: 'Carreleur au Luxembourg', href: '/carreleur-luxembourg' },
  { label: 'Pierre naturelle Luxembourg', href: '/pierre-naturelle-luxembourg' },
  { label: 'Carrelage salle de bain', href: '/carrelage-salle-de-bain-luxembourg' },
  { label: 'Carrelage cuisine', href: '/carrelage-cuisine-luxembourg' },
  { label: 'Carrelage terrasse extérieur', href: '/carrelage-terrasse-exterieur-luxembourg' },
  { label: 'Rénovation carrelage', href: '/renovation-carrelage-luxembourg' },
]

const zoneLinks = [
  { label: 'Luxembourg-Ville', href: '/zones-intervention/luxembourg-ville' },
  { label: 'Mersch & Steinfort', href: '/zones-intervention/mersch-steinfort' },
  { label: 'Ettelbruck & Diekirch', href: '/zones-intervention/ettelbruck-diekirch' },
  { label: 'Bertrange & Mamer', href: '/zones-intervention/bertrange-mamer' },
  { label: 'Grevenmacher & Remich', href: '/zones-intervention/grevenmacher-remich' },
]

/* ─── Trust badges ─── */

const trustSignals = [
  { icon: Award, label: 'Compagnon du Tour de France' },
  { icon: Shield, label: 'Garantie décennale' },
  { icon: Languages, label: 'FR · PT · LU · DE' },
]

/* ─── JSON-LD Schema ─── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://terranova-carrelage.lu/#organization',
  name: 'Terranova Carrelage Luxembourg',
  alternateName: 'Terranova LU',
  description:
    'Artisan carreleur Compagnon du Tour de France au Grand-Duché depuis 2001. Pose carrelage, pierre naturelle, mosaïque haut de gamme. Protocole adapté à chaque matériau.',
  url: 'https://terranova-carrelage.lu',
  telephone: '+35226548875',
  email: 'contact@terranova-carrelage.lu',
  founder: {
    '@type': 'Person',
    name: 'François Rodrigues',
    jobTitle: 'Compagnon du Tour de France - Carreleur',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5, Rue de la Gare',
    addressLocality: 'Mersch',
    postalCode: 'L-7535',
    addressCountry: 'LU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.7486,
    longitude: 6.1064,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '12:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Luxembourg',
  },
  knowsLanguage: ['fr', 'pt', 'lb', 'de'],
  priceRange: '€€€',
  image: 'https://terranova-carrelage.lu/og-image.jpg',
  sameAs: [
    'https://facebook.com/terranovacarrelageluxembourg',
    'https://instagram.com/terranova_carrelage_lu',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services carrelage',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pose carrelage sol' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pose carrelage mural' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pose pierre naturelle' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pose mosaïque' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation carrelage' } },
    ],
  },
}

/* ─── Animation variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' as const },
  }),
}

/* ─── Component ─── */

export default function Footer() {
  return (
    <footer className="relative bg-[#3D2B1F] text-[#F0E6D3]" role="contentinfo">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ━━━ Last-chance CTA band ━━━ */}
      <div className="relative overflow-hidden bg-[#C4965A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C4965A] to-[#b8873f]" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-10 md:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left"
          >
            <motion.div variants={fadeUp} custom={0}>
              <p className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Un sol à poser, une pierre à sublimer&nbsp;?
              </p>
              <p className="mt-2 max-w-xl font-body text-white/90">
                François décroche en personne. Décrivez votre chantier, il revient vers vous sous 48&nbsp;h.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+35226548875"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-body font-semibold text-[#3D2B1F] shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              >
                <Phone className="size-4" />
                +352 26 54 88 75
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-7 py-3.5 font-body font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#3D2B1F]"
              >
                Décrire mon projet
                <ChevronRight className="size-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ━━━ Trust signals strip ━━━ */}
      <div className="border-b border-white/10 bg-[#362518]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5">
          {trustSignals.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-[#C4965A]">
              <Icon className="size-4 shrink-0" />
              <span className="font-body font-medium">{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm text-[#C4965A]">
            <Shield className="size-4 shrink-0" />
            <span className="font-body font-medium">Membre Fédération des Artisans</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#C4965A]">
            <Shield className="size-4 shrink-0" />
            <span className="font-body font-medium">Certifié Sika Pro</span>
          </div>
        </div>
      </div>

      {/* ━━━ Main footer grid ━━━ */}
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* NAP Column */}
          <div className="space-y-5 lg:col-span-4">
            <h3 className="font-heading text-xl font-bold text-white">
              Terranova Carrelage Luxembourg
            </h3>
            <p className="max-w-[300px] text-sm leading-relaxed text-[#F0E6D3]/80">
              François Rodrigues, Compagnon du Tour de France. Carrelage et pierre naturelle au
              Grand-Duché depuis 2001. Chaque matériau mérite son protocole.
            </p>

            <address className="space-y-2.5 text-sm not-italic">
              <a
                href="tel:+35226548875"
                className="flex items-center gap-2.5 text-[#F0E6D3]/80 transition-colors hover:text-[#C4965A]"
              >
                <Phone className="size-4 shrink-0" />
                +352 26 54 88 75
              </a>
              <a
                href="mailto:contact@terranova-carrelage.lu"
                className="flex items-center gap-2.5 text-[#F0E6D3]/80 transition-colors hover:text-[#C4965A]"
              >
                <Mail className="size-4 shrink-0" />
                contact@terranova-carrelage.lu
              </a>
              <div className="flex items-start gap-2.5 text-[#F0E6D3]/80">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  5, Rue de la Gare
                  <br />
                  L-7535 Mersch, Luxembourg
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[#F0E6D3]/80">
                <Clock className="mt-0.5 size-4 shrink-0" />
                <span>
                  Lun–Ven : 7h–17h30
                  <br />
                  Sam : 7h–12h (chantiers)
                </span>
              </div>
            </address>

            <div className="flex gap-3 pt-1">
              <a
                href="https://facebook.com/terranovacarrelageluxembourg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez Terranova Carrelage sur Facebook"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-[#C4965A]"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://instagram.com/terranova_carrelage_lu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez Terranova Carrelage sur Instagram"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-[#C4965A]"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services de carrelage" className="lg:col-span-2">
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#C4965A]">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F0E6D3]/70 transition-colors duration-150 hover:text-[#C4965A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Pillar pages (SEO) */}
          <nav aria-label="Pages principales" className="lg:col-span-2">
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#C4965A]">
              Expertises
            </h4>
            <ul className="space-y-2">
              {pillarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F0E6D3]/70 transition-colors duration-150 hover:text-[#C4965A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Ressources" className="lg:col-span-2">
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#C4965A]">
              Ressources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F0E6D3]/70 transition-colors duration-150 hover:text-[#C4965A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zones */}
          <nav aria-label="Zones d'intervention" className="lg:col-span-2">
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#C4965A]">
              Zones d&apos;intervention
            </h4>
            <ul className="space-y-2">
              {zoneLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F0E6D3]/70 transition-colors duration-150 hover:text-[#C4965A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/zones-intervention"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#C4965A] transition-colors hover:text-white"
            >
              Toutes les zones
              <ChevronRight className="size-3" />
            </Link>
          </nav>
        </div>
      </div>

      {/* ━━━ Bottom bar ━━━ */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 text-xs text-[#F0E6D3]/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Terranova Carrelage Luxembourg. Tous droits
            réservés. TVA&nbsp;LU22019834.
          </p>
          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#F0E6D3]"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="transition-colors hover:text-[#F0E6D3]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
