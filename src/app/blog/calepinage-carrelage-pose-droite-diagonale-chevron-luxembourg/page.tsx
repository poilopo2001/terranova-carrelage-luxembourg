import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Calepinage Carrelage : Droite, Diagonale ou Chevron\ ?',
  description: 'Pose droite, diagonale ou chevron : quel calepinage choisir pour votre carrelage au Luxembourg\ ? Guide technique par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/calepinage-carrelage-pose-droite-diagonale-chevron-luxembourg' },
}

export default function CalepinageCarrelage() {
  return (
    <BlogArticleLayout
      title="Pose droite, diagonale ou chevron : quel calepinage choisir pour votre carrelage\ ?"
      date="Janvier 2026"
      readTime="9 min"
      intro="Le calepinage, c\'est la mise en scène du carrelage. C\'est de la géométrie, de la découpe au degré près, et des heures de réflexion avant la première colle. Voici les options, leurs avantages et leurs contraintes techniques réelles."
      sections={[
        { title: 'Pose droite (ou à joints alignés)', content: 'La plus simple et la plus économique. Les carreaux sont posés parallèlement aux murs, joints alignés. Esthétique nette et contemporaine, idéale pour les grands formats (120x120, 120x260). Moins de chutes (5-8%). Visuellement, elle agrandit la pièce si les joints sont très fins (1,5-2mm).' },
        { title: 'Pose en quinconce (décalée)', content: 'Chaque rangée est décalée de 30-40% de la longueur du carreau. C\'est le calepinage standard pour le parquet carrelé — il imite le décalage naturel des lames de parquet. Chutes légèrement supérieures (8-12%). Règle Terranova : décalage toujours de 33% minimum, jamais 50% (trop régulier, effet brique).' },
        { title: 'Pose diagonale (à 45°)', content: 'Les carreaux sont orientés à 45° par rapport aux murs. Effet visuel dynamique, agrandit optiquement les petites pièces. Inconvénient : 15-20% de chutes supplémentaires (découpes en triangle le long des murs). Surcoût de pose de 10-15€/m² environ.' },
        { title: 'Pose en chevron (point de Hongrie)', content: 'Le summum technique. Lames posées en V à 45° ou 60°, joints de bout alignés sur l\'axe central. Chaque lame est découpée en biais à la scie à eau inclinable. Jean-Claude de Mersch : 140\ m² de parquet carrelé Ariostea en chevron. La découpe en biais est très technique — un gabarit d\'angle et une scie de précision sont indispensables. Surcoût : 15-25€/m².' },
        { title: 'Opus romain et calepinages mixtes', content: 'L\'opus romain combine 3-4 formats différents dans un motif répétitif. Classique pour le travertin et la pierre de Bourgogne. Le calepinage est d\'abord calculé en plan (logiciel CAD) pour optimiser les chutes et valider le motif avec le client.' },
      ]}
      relatedLinks={[
        { label: 'Parquet carrelé', href: '/services/pose-parquet-carrele' },
        { label: 'Carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Prix pose 2026', href: '/blog/cout-pose-carrelage-luxembourg-2026' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Calepinage carrelage : droite, diagonale ou chevron",
        author: { "@type": "Person", name: "François Rodrigues" },
        datePublished: "2026-01-20",
      }}
    />
  )
}
