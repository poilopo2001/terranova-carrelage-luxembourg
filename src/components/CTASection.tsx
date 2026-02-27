import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function CTASection({
  title = "Parlons de votre sol",
  subtitle = "François décroche en personne. Décrivez votre projet, recevez un retour sous 48h avec calepinage.",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`py-20 px-6 ${dark ? 'bg-brand-900 text-ivory-25' : 'bg-ivory-100'}`}>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold ${dark ? 'text-ivory-25' : 'text-brand-900'}`}>
          {title}
        </h2>
        <p className={`font-body text-lg ${dark ? 'text-ivory-200' : 'text-brand-600'} max-w-xl mx-auto`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-700 text-white font-body font-semibold rounded-[8px] h-12 px-8">
            <Link href="/contact">
              D&eacute;crire mon projet
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </Button>
          <a
            href="tel:+35226548875"
            className={`inline-flex items-center justify-center gap-2 h-12 px-8 rounded-[8px] font-body font-semibold border-2 transition-colors duration-200 ${
              dark
                ? 'border-ivory-200 text-ivory-100 hover:bg-ivory-25 hover:text-brand-900'
                : 'border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-ivory-25'
            }`}
          >
            <Phone className="size-4" />
            +352 26 54 88 75
          </a>
        </div>
      </div>
    </section>
  )
}
