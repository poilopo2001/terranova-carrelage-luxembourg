import type { MetadataRoute } from 'next'

const BASE = 'https://terranova-carrelage.lu'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const services = [
    'pose-carrelage-sol', 'pose-carrelage-mural', 'pose-faience',
    'pose-mosaique', 'pose-pierre-naturelle', 'pose-parquet-carrele',
    'jointoyage', 'renovation-carrelage', 'reparation-carrelage',
  ]

  const zones = [
    'luxembourg-ville', 'mersch-steinfort', 'ettelbruck-diekirch',
    'bertrange-mamer', 'grevenmacher-remich',
  ]

  const pillars = [
    'carreleur-luxembourg', 'pierre-naturelle-luxembourg',
    'renovation-carrelage-luxembourg', 'carrelage-salle-de-bain-luxembourg',
    'carrelage-terrasse-exterieur-luxembourg', 'carrelage-cuisine-luxembourg',
  ]

  const blogs = [
    'cout-pose-carrelage-luxembourg-2026',
    'choisir-carrelage-faience-pierre-naturelle-luxembourg',
    'joint-epoxy-vs-joint-ciment-carrelage-luxembourg',
    'calepinage-carrelage-pose-droite-diagonale-chevron-luxembourg',
    'tendances-carrelage-2026-luxembourg',
    'entretien-carrelage-pierre-naturelle-luxembourg',
  ]

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map(s => ({ url: `${BASE}/services/${s}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${BASE}/realisations`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/materiaux`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zones-intervention`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...zones.map(z => ({ url: `${BASE}/zones-intervention/${z}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...pillars.map(p => ({ url: `${BASE}/${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 })),
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...blogs.map(b => ({ url: `${BASE}/blog/${b}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
    { url: `${BASE}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/politique-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
