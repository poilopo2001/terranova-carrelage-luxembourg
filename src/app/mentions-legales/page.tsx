import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions L\u00e9gales',
  description: 'Mentions l\u00e9gales du site Terranova Carrelage Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/mentions-legales' },
  robots: 'noindex, follow',
}

export default function MentionsLegales() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Mentions l\u00e9gales' }]} />
      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-brand">
          <h1 className="font-heading text-3xl font-bold text-brand-900">Mentions l\u00e9gales</h1>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">\u00c9diteur du site</h2>
          <p className="font-body text-brand-800">
            <strong>Terranova Carrelage Luxembourg</strong><br />
            5, Rue de la Gare<br />
            L-7535 Mersch, Luxembourg<br />
            T\u00e9l\u00e9phone : +352 26 54 88 75<br />
            Email : contact@terranova-carrelage.lu<br />
            TVA intracommunautaire : LU22019834<br />
            Autorisation d&apos;\u00e9tablissement : LU 2001 5592<br />
            Responsable de la publication : Fran\u00e7ois Rodrigues
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">H\u00e9bergement</h2>
          <p className="font-body text-brand-800">
            Ce site est h\u00e9berg\u00e9 par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, \u00c9tats-Unis.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Propri\u00e9t\u00e9 intellectuelle</h2>
          <p className="font-body text-brand-800">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, ic\u00f4nes) est la propri\u00e9t\u00e9 exclusive de Terranova Carrelage Luxembourg ou de ses partenaires. Toute reproduction, m\u00eame partielle, est strictement interdite sans autorisation pr\u00e9alable \u00e9crite.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Responsabilit\u00e9</h2>
          <p className="font-body text-brand-800">
            Les informations publi\u00e9es sur ce site sont fournies \u00e0 titre indicatif. Terranova Carrelage Luxembourg s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffus\u00e9es mais ne saurait \u00eatre tenue responsable d&apos;erreurs, d&apos;omissions ou des r\u00e9sultats qui pourraient \u00eatre obtenus par un mauvais usage de ces informations. Les tarifs mentionn\u00e9s sont indicatifs et peuvent varier selon la complexit\u00e9 du projet.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Assurances</h2>
          <p className="font-body text-brand-800">
            Terranova Carrelage Luxembourg est assur\u00e9e en Responsabilit\u00e9 Civile Professionnelle et en garantie d\u00e9cennale aupr\u00e8s de Foyer Assurances Luxembourg.
          </p>
        </div>
      </section>
    </>
  )
}
