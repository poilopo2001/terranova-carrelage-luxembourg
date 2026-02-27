import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'

interface BlogArticleLayoutProps {
  title: string
  date: string
  readTime: string
  intro: string
  sections: { title: string; content: string }[]
  relatedLinks?: { label: string; href: string }[]
  schema: Record<string, unknown>
}

export default function BlogArticleLayout({ title, date, readTime, intro, sections, relatedLinks, schema }: BlogArticleLayoutProps) {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: title }]} />

      <article className="bg-ivory-25 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-brand-500 font-body mb-4">
            <span className="flex items-center gap-1"><Calendar className="size-3.5" /> {date}</span>
            <span className="flex items-center gap-1"><Clock className="size-3.5" /> {readTime}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-900 leading-tight mb-6">{title}</h1>
          <p className="font-body text-lg text-brand-700 leading-relaxed mb-10 border-l-4 border-accent-500 pl-4">{intro}</p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="font-heading text-2xl font-bold text-brand-900 mb-3">{s.title}</h2>
                <div className="font-body text-brand-800 leading-relaxed space-y-3 whitespace-pre-line">{s.content}</div>
              </section>
            ))}
          </div>

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-12 pt-8 border-t border-ivory-200">
              <h3 className="font-body font-semibold text-brand-900 mb-3">Articles et pages associés</h3>
              <div className="flex flex-wrap gap-2">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-ivory-100 text-sm font-body text-brand-800 hover:text-accent-500 transition-colors">
                    {l.label} <ArrowRight className="size-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </>
  )
}
