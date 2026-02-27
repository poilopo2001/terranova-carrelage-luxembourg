import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Calepinage Carrelage : Droite, Diagonale ou Chevron\u00a0?',
  description: 'Pose droite, diagonale ou chevron : quel calepinage choisir pour votre carrelage au Luxembourg\u00a0? Guide technique par un artisan compagnon.',
  alternates: { canonical: 'https://www.terranova-carrelage.lu/blog/calepinage-carrelage-pose-droite-diagonale-chevron-luxembourg' },
}

export default function CalepinageCarrelage() {
  return (
    <BlogArticleLayout
      title="Pose droite, diagonale ou chevron : quel calepinage choisir pour votre carrelage\u00a0?"
      date="Janvier 2026"
      readTime="9 min"
      intro="Le calepinage, c\u0027est la mise en sc\u00e8ne du carrelage. C\u0027est de la g\u00e9om\u00e9trie, de la d\u00e9coupe au degr\u00e9 pr\u00e8s, et des heures de r\u00e9flexion avant la premi\u00e8re colle. Voici les options, leurs avantages et leurs contraintes techniques r\u00e9elles."
      sections={[
        { title: 'Pose droite (ou \u00e0 joints align\u00e9s)', content: 'La plus simple et la plus \u00e9conomique. Les carreaux sont pos\u00e9s parall\u00e8lement aux murs, joints align\u00e9s. Esth\u00e9tique nette et contemporaine, id\u00e9ale pour les grands formats (120x120, 120x260). Moins de chutes (5-8%). Visuellement, elle agrandit la pi\u00e8ce si les joints sont tr\u00e8s fins (1,5-2mm).' },
        { title: 'Pose en quinconce (d\u00e9cal\u00e9e)', content: 'Chaque rang\u00e9e est d\u00e9cal\u00e9e de 30-40% de la longueur du carreau. C\u0027est le calepinage standard pour le parquet carrel\u00e9 \u2014 il imite le d\u00e9calage naturel des lames de parquet. Chutes l\u00e9g\u00e8rement sup\u00e9rieures (8-12%). R\u00e8gle Terranova : d\u00e9calage toujours de 33% minimum, jamais 50% (trop r\u00e9gulier, effet brique).' },
        { title: 'Pose diagonale (\u00e0 45\u00b0)', content: 'Les carreaux sont orient\u00e9s \u00e0 45\u00b0 par rapport aux murs. Effet visuel dynamique, agrandit optiquement les petites pi\u00e8ces. Inconv\u00e9nient : 15-20% de chutes suppl\u00e9mentaires (d\u00e9coupes en triangle le long des murs). Surco\u00fbt de pose de 10-15\u20ac/m\u00b2 environ.' },
        { title: 'Pose en chevron (point de Hongrie)', content: 'Le summum technique. Lames pos\u00e9es en V \u00e0 45\u00b0 ou 60\u00b0, joints de bout align\u00e9s sur l\u0027axe central. Chaque lame est d\u00e9coup\u00e9e en biais \u00e0 la scie \u00e0 eau inclinable. Jean-Claude de Mersch : 140\u00a0m\u00b2 de parquet carrel\u00e9 Ariostea en chevron. La d\u00e9coupe en biais est tr\u00e8s technique \u2014 un gabarit d\u0027angle et une scie de pr\u00e9cision sont indispensables. Surco\u00fbt : 15-25\u20ac/m\u00b2.' },
        { title: 'Opus romain et calepinages mixtes', content: 'L\u0027opus romain combine 3-4 formats diff\u00e9rents dans un motif r\u00e9p\u00e9titif. Classique pour le travertin et la pierre de Bourgogne. Le calepinage est d\u0027abord calcul\u00e9 en plan (logiciel CAD) pour optimiser les chutes et valider le motif avec le client.' },
      ]}
      relatedLinks={[
        { label: 'Parquet carrel\u00e9', href: '/services/pose-parquet-carrele' },
        { label: 'Carrelage sol', href: '/services/pose-carrelage-sol' },
        { label: 'Prix pose 2026', href: '/blog/cout-pose-carrelage-luxembourg-2026' },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Calepinage carrelage : droite, diagonale ou chevron",
        author: { "@type": "Person", name: "Fran\u00e7ois Rodrigues" },
        datePublished: "2026-01-20",
      }}
    />
  )
}
