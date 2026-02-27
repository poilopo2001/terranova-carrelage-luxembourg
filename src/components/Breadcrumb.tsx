import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items, variant = 'light' }: { items: BreadcrumbItem[]; variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <nav aria-label="Fil d&apos;Ariane" className="py-3">
      <ol className={`flex flex-wrap items-center gap-1 text-sm font-body ${isDark ? 'text-ivory-200/60' : 'text-brand-500'}`}>
        <li>
          <Link href="/" className="hover:text-accent-500 transition-colors">Accueil</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="size-3.5" />
            {item.href ? (
              <Link href={item.href} className="hover:text-accent-500 transition-colors">{item.label}</Link>
            ) : (
              <span className={`font-semibold ${isDark ? 'text-ivory-25' : 'text-brand-900'}`}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
