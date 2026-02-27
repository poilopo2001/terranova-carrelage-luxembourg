import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-ivory-25 px-6">
      <div className="text-center max-w-lg space-y-6">
        <p className="text-8xl font-heading font-bold text-accent-500">404</p>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-brand-900">
          Cette page n&apos;existe pas
        </h1>
        <p className="font-body text-brand-600">
          Le carreau que vous cherchez n&apos;est pas dans notre stock. Mais Fran&ccedil;ois peut s&ucirc;rement vous aider.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild className="bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-[8px]">
            <Link href="/">Retour &agrave; l&apos;accueil</Link>
          </Button>
          <Button asChild variant="outline" className="font-body font-semibold rounded-[8px]">
            <Link href="/contact">Contacter Fran&ccedil;ois</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
