import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de Confidentialit\u00e9',
  description: 'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles de Terranova Carrelage Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/politique-confidentialite' },
  robots: 'noindex, follow',
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Politique de confidentialit\u00e9' }]} />
      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-brand">
          <h1 className="font-heading text-3xl font-bold text-brand-900">Politique de confidentialit\u00e9</h1>
          <p className="font-body text-sm text-brand-500">Derni\u00e8re mise \u00e0 jour : 27 f\u00e9vrier 2026</p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Responsable du traitement</h2>
          <p className="font-body text-brand-800">
            Terranova Carrelage Luxembourg, 5 Rue de la Gare, L-7535 Mersch. Contact : contact@terranova-carrelage.lu.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Donn\u00e9es collect\u00e9es</h2>
          <p className="font-body text-brand-800">
            Lors d&apos;une demande de devis : nom, pr\u00e9nom, email, t\u00e9l\u00e9phone, commune, description du projet. Ces donn\u00e9es sont utilis\u00e9es exclusivement pour r\u00e9pondre \u00e0 votre demande et vous fournir un devis.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Base l\u00e9gale</h2>
          <p className="font-body text-brand-800">
            Le traitement est fond\u00e9 sur votre consentement (formulaire de demande de devis) et sur l&apos;ex\u00e9cution d&apos;un contrat (suivi de chantier).
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Dur\u00e9e de conservation</h2>
          <p className="font-body text-brand-800">
            Les donn\u00e9es de demande de devis sont conserv\u00e9es 3 ans apr\u00e8s le dernier contact. Les donn\u00e9es contractuelles sont conserv\u00e9es 10 ans (garantie d\u00e9cennale).
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Vos droits</h2>
          <p className="font-body text-brand-800">
            Conform\u00e9ment au RGPD, vous disposez d&apos;un droit d&apos;acc\u00e8s, de rectification, de suppression, de limitation et de portabilit\u00e9 de vos donn\u00e9es. Pour exercer ces droits : contact@terranova-carrelage.lu. Vous pouvez \u00e9galement introduire une r\u00e9clamation aupr\u00e8s de la CNPD (Commission Nationale pour la Protection des Donn\u00e9es, Luxembourg).
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Cookies</h2>
          <p className="font-body text-brand-800">
            Ce site utilise uniquement des cookies techniques n\u00e9cessaires au fonctionnement du site. Aucun cookie publicitaire ou de suivi n&apos;est utilis\u00e9. Aucun outil d&apos;analytics tiers n&apos;est install\u00e9 sans votre consentement explicite.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">S\u00e9curit\u00e9</h2>
          <p className="font-body text-brand-800">
            Le site est servi en HTTPS. Les donn\u00e9es du formulaire de devis sont transmises de mani\u00e8re chiffr\u00e9e. Aucune donn\u00e9e bancaire n&apos;est collect\u00e9e par ce site.
          </p>
        </div>
      </section>
    </>
  )
}
