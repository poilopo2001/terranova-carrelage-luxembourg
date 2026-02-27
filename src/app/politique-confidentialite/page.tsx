import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de Terranova Carrelage Luxembourg.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/politique-confidentialite' },
  robots: 'noindex, follow',
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Politique de confidentialité' }]} />
      <section className="bg-ivory-25 py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-brand">
          <h1 className="font-heading text-3xl font-bold text-brand-900">Politique de confidentialité</h1>
          <p className="font-body text-sm text-brand-500">Dernière mise à jour : 27 février 2026</p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Responsable du traitement</h2>
          <p className="font-body text-brand-800">
            Terranova Carrelage Luxembourg, 5 Rue de la Gare, L-7535 Mersch. Contact : contact@terranova-carrelage.lu.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Données collectées</h2>
          <p className="font-body text-brand-800">
            Lors d&apos;une demande de devis : nom, prénom, email, téléphone, commune, description du projet. Ces données sont utilisées exclusivement pour répondre à votre demande et vous fournir un devis.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Base légale</h2>
          <p className="font-body text-brand-800">
            Le traitement est fondé sur votre consentement (formulaire de demande de devis) et sur l&apos;exécution d&apos;un contrat (suivi de chantier).
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Durée de conservation</h2>
          <p className="font-body text-brand-800">
            Les données de demande de devis sont conservées 3 ans après le dernier contact. Les données contractuelles sont conservées 10 ans (garantie décennale).
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Vos droits</h2>
          <p className="font-body text-brand-800">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, de limitation et de portabilité de vos données. Pour exercer ces droits : contact@terranova-carrelage.lu. Vous pouvez également introduire une réclamation auprès de la CNPD (Commission Nationale pour la Protection des Données, Luxembourg).
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Cookies</h2>
          <p className="font-body text-brand-800">
            Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de suivi n&apos;est utilisé. Aucun outil d&apos;analytics tiers n&apos;est installé sans votre consentement explicite.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-900 mt-8">Sécurité</h2>
          <p className="font-body text-brand-800">
            Le site est servi en HTTPS. Les données du formulaire de devis sont transmises de manière chiffrée. Aucune donnée bancaire n&apos;est collectée par ce site.
          </p>
        </div>
      </section>
    </>
  )
}
