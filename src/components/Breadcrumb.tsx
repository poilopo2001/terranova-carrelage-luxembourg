import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d&apos;Ariane" className="py-3 px-6">
      <div className="max-w-[1280px] mx-auto">
        <ol className="flex flex-wrap items-center gap-1 text-sm font-body text-brand-500">
          <li>
            <Link href="/" className="hover:text-accent-500 transition-colors">Accueil</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="size-3.5" />
              {item.href ? (
                <Link href={item.href} className="hover:text-accent-500 transition-colors">{item.label}</Link>
              ) : (
                <span className="text-brand-900 font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
