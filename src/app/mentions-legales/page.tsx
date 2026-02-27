import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site Terranova Carrelage Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/mentions-legales' },
  robots: 'noindex, follow',
}

export default function MentionsLegales() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Mentions légales' }]} />
      <section className="bg-ivory-25 pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-brand">
          <h1 className="font-heading text-3xl font-bold text-brand-900">Mentions légales</h1>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Éditeur du site</h2>
          <p className="font-body text-brand-800">
            <strong>Terranova Carrelage Luxembourg</strong><br />
            5, Rue de la Gare<br />
            L-7535 Mersch, Luxembourg<br />
            Téléphone : +352 26 54 88 75<br />
            Email : contact@terranova-carrelage.lu<br />
            TVA intracommunautaire : LU22019834<br />
            Autorisation d&apos;établissement : LU 2001 5592<br />
            Responsable de la publication : François Rodrigues
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Hébergement</h2>
          <p className="font-body text-brand-800">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Propriété intellectuelle</h2>
          <p className="font-body text-brand-800">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de Terranova Carrelage Luxembourg ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Responsabilité</h2>
          <p className="font-body text-brand-800">
            Les informations publiées sur ce site sont fournies à titre indicatif. Terranova Carrelage Luxembourg s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées mais ne saurait être tenue responsable d&apos;erreurs, d&apos;omissions ou des résultats qui pourraient être obtenus par un mauvais usage de ces informations. Les tarifs mentionnés sont indicatifs et peuvent varier selon la complexité du projet.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Assurances</h2>
          <p className="font-body text-brand-800">
            Terranova Carrelage Luxembourg est assurée en Responsabilité Civile Professionnelle et en garantie décennale auprès de Foyer Assurances Luxembourg.
          </p>
        </div>
      </section>
    </>
  )
}
