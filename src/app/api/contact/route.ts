import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { projectType, service, surface, budget, details, firstName, lastName, email, phone, city } = data

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
    }

    // Log for now — replace with email service (Resend, SendGrid, etc.) in production
    console.log('=== NOUVEAU DEVIS TERRANOVA ===')
    console.log(`Nom: ${firstName} ${lastName}`)
    console.log(`Email: ${email} | Tél: ${phone} | Ville: ${city}`)
    console.log(`Projet: ${projectType} | Service: ${service} | Surface: ${surface}m² | Budget: ${budget}`)
    console.log(`Détails: ${details}`)
    console.log('===============================')

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
