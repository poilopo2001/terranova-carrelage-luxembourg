'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Breadcrumb from '@/components/Breadcrumb'
import SchemaOrg from '@/components/SchemaOrg'

const steps = ['Votre projet', 'Vos coordonnées', 'Confirmation']

export default function Contact() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // Form state
  const [projectType, setProjectType] = useState('neuf')
  const [service, setService] = useState('')
  const [surface, setSurface] = useState('')
  const [budget, setBudget] = useState('')
  const [details, setDetails] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  async function handleSubmit() {
    if (!firstName || !lastName || !email || !phone) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectType, service, surface, budget, details, firstName, lastName, email, phone, city }),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStep(2)
      setSubmitted(true)
    } catch {
      setError('Une erreur est survenue. Appelez directement le +352 26 54 88 75.')
    } finally {
      setSending(false)
    }
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Terranova Carrelage Luxembourg",
    telephone: "+352 26 54 88 75",
    email: "contact@terranova-carrelage.lu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5, Rue de la Gare",
      addressLocality: "Mersch",
      postalCode: "L-7535",
      addressCountry: "LU",
    },
    openingHours: ["Mo-Fr 07:00-17:30", "Sa 07:00-12:00"],
  }

  return (
    <>
      <SchemaOrg schema={schema} />
      <section className="bg-brand-900 text-ivory-25 pt-24 pb-12 md:pt-32 md:pb-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <Breadcrumb items={[{ label: 'Contact' }]}  variant="dark" />
        </div>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent-400 font-body font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Réponse sous 48h
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
            D&eacute;crivez votre chantier, Fran&ccedil;ois vous rappelle
          </h1>
          <p className="font-body text-lg text-ivory-100 max-w-[680px] mt-3">
            2 minutes pour d&eacute;crire votre projet. Fran&ccedil;ois &eacute;tudie la faisabilit&eacute;, chiffre le mat&eacute;riau et la pose, et vous recontacte en personne avec un devis d&eacute;taill&eacute;.
          </p>
        </div>
      </section>

      <section className="bg-ivory-25 py-12 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                    i <= step ? 'bg-accent-500 text-white' : 'bg-ivory-200 text-brand-500'
                  }`}>
                    {i < step ? <CheckCircle className="size-4" /> : i + 1}
                  </div>
                  <span className={`text-sm font-body hidden sm:inline ${i <= step ? 'text-brand-900' : 'text-brand-500'}`}>{s}</span>
                  {i < steps.length - 1 && <div className={`w-8 h-0.5 ${i < step ? 'bg-accent-500' : 'bg-ivory-200'}`} />}
                </div>
              ))}
            </div>

            {!submitted ? (
              <Card className="border-ivory-200 shadow-card">
                <CardContent className="p-6 md:p-8">
                  {step === 0 && (
                    <div className="space-y-6">
                      <h2 className="font-heading text-xl font-bold text-brand-900">Décrivez votre projet</h2>

                      <div className="space-y-2">
                        <Label className="font-body font-semibold text-brand-900">Type de projet</Label>
                        <RadioGroup value={projectType} onValueChange={setProjectType} className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 p-3 border border-ivory-200 rounded-lg">
                            <RadioGroupItem value="neuf" id="neuf" />
                            <Label htmlFor="neuf" className="font-body text-sm cursor-pointer">Construction neuve</Label>
                          </div>
                          <div className="flex items-center gap-2 p-3 border border-ivory-200 rounded-lg">
                            <RadioGroupItem value="renovation" id="renovation" />
                            <Label htmlFor="renovation" className="font-body text-sm cursor-pointer">Rénovation</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-body font-semibold text-brand-900">Type de prestation</Label>
                        <Select value={service} onValueChange={setService}>
                          <SelectTrigger><SelectValue placeholder="Sélectionnez une prestation" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sol">Pose carrelage sol</SelectItem>
                            <SelectItem value="mural">Pose carrelage mural</SelectItem>
                            <SelectItem value="faience">Pose faïence</SelectItem>
                            <SelectItem value="mosaique">Pose mosaïque</SelectItem>
                            <SelectItem value="pierre">Pose pierre naturelle</SelectItem>
                            <SelectItem value="parquet">Pose parquet carrelé</SelectItem>
                            <SelectItem value="jointoyage">Jointoyage / Rejointoiement</SelectItem>
                            <SelectItem value="renovation">Rénovation carrelage</SelectItem>
                            <SelectItem value="reparation">Réparation carrelage</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="font-body font-semibold text-brand-900">Surface estimée (m²)</Label>
                          <Input type="number" placeholder="ex: 25" value={surface} onChange={e => setSurface(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-body font-semibold text-brand-900">Budget indicatif</Label>
                          <Select value={budget} onValueChange={setBudget}>
                            <SelectTrigger><SelectValue placeholder="Fourchette" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="500-2000">&lt; 2 000 €</SelectItem>
                              <SelectItem value="2000-5000">2 000 - 5 000 €</SelectItem>
                              <SelectItem value="5000-10000">5 000 - 10 000 €</SelectItem>
                              <SelectItem value="10000-25000">10 000 - 25 000 €</SelectItem>
                              <SelectItem value="25000+">25 000 € +</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-body font-semibold text-brand-900">Détails du projet</Label>
                        <Textarea rows={4} placeholder="Matériau souhaité, pièce concernée, contraintes particulières..." value={details} onChange={e => setDetails(e.target.value)} />
                      </div>

                      <Button onClick={() => setStep(1)} className="w-full bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-[8px] h-12">
                        Continuer <ArrowRight className="size-4 ml-1" />
                      </Button>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="font-heading text-xl font-bold text-brand-900">Vos coordonnées</h2>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="font-body font-semibold text-brand-900">Prénom</Label>
                          <Input placeholder="Votre prénom" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-body font-semibold text-brand-900">Nom</Label>
                          <Input placeholder="Votre nom" required value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-body font-semibold text-brand-900">Email</Label>
                        <Input type="email" placeholder="votre@email.lu" required value={email} onChange={e => setEmail(e.target.value)} />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-body font-semibold text-brand-900">Téléphone</Label>
                        <Input type="tel" placeholder="+352 ..." required value={phone} onChange={e => setPhone(e.target.value)} />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-body font-semibold text-brand-900">Commune / Ville</Label>
                        <Input placeholder="Mersch, Luxembourg-Ville, Bertrange..." value={city} onChange={e => setCity(e.target.value)} />
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setStep(0)} className="flex-1 font-body font-semibold rounded-[8px] h-12">
                          <ArrowLeft className="size-4 mr-1" /> Retour
                        </Button>
                        <Button onClick={handleSubmit} disabled={sending} className="flex-1 bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-[8px] h-12">
                          {sending ? <><Loader2 className="size-4 mr-1 animate-spin" /> Envoi...</> : 'Envoyer ma demande'}
                        </Button>
                        {error && <p className="text-red-600 text-sm font-body mt-2">{error}</p>}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-accent-500 shadow-card-hover">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                    <CheckCircle className="size-8 text-success" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-brand-900">Message re&ccedil;u</h2>
                  <p className="font-body text-brand-600">Fran&ccedil;ois l&apos;a dans sa bo&icirc;te. Il vous rappelle sous 48h pour discuter mat&eacute;riau, contraintes du support et planning.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-ivory-200 shadow-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-bold text-brand-900">Contact direct</h3>
                <div className="space-y-3 text-sm font-body">
                  <a href="tel:+35226548875" className="flex items-center gap-2 text-brand-800 hover:text-accent-500 transition-colors">
                    <Phone className="size-4 text-accent-500" /> +352 26 54 88 75
                  </a>
                  <a href="tel:+352671229483" className="flex items-center gap-2 text-brand-800 hover:text-accent-500 transition-colors">
                    <Phone className="size-4 text-accent-500" /> +352 671 229 483 (mobile)
                  </a>
                  <a href="mailto:contact@terranova-carrelage.lu" className="flex items-center gap-2 text-brand-800 hover:text-accent-500 transition-colors">
                    <Mail className="size-4 text-accent-500" /> contact@terranova-carrelage.lu
                  </a>
                  <div className="flex items-start gap-2 text-brand-800">
                    <MapPin className="size-4 text-accent-500 shrink-0 mt-0.5" />
                    <span>5, Rue de la Gare<br />L-7535 Mersch, Luxembourg</span>
                  </div>
                  <div className="flex items-start gap-2 text-brand-800">
                    <Clock className="size-4 text-accent-500 shrink-0 mt-0.5" />
                    <span>Lun-Ven : 7h-17h30<br />Sam : 7h-12h (chantiers)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-ivory-200 shadow-card bg-ivory-100">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-heading text-lg font-bold text-brand-900">Showroom Mersch</h3>
                <p className="font-body text-sm text-brand-600">Mardi et Jeudi : 14h-18h<br />Samedi : 9h-12h<br />Sur rendez-vous uniquement.</p>
                <p className="font-body text-sm text-brand-600">Touchez le marbre, comparez le travertin, sentez le grain du gr&egrave;s. Le choix se fait au toucher.</p>
              </CardContent>
            </Card>

            <Card className="border-ivory-200 shadow-card">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-heading text-lg font-bold text-brand-900">De votre message au premier carreau</h3>
                <div className="space-y-3">
                  {[
                    'Vous décrivez le chantier (2 min)',
                    'François vous rappelle sous 48h',
                    'Il se déplace, mesure et vérifie le support',
                    'Chiffrage détaillé avec calepinage sur plan',
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center shrink-0 text-xs font-body font-semibold">{i + 1}</div>
                      <p className="font-body text-sm text-brand-800">{s}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
