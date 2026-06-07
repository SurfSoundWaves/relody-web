import type { Metadata } from 'next'
import Link from 'next/link'
import FeaturesCanvas from '@/components/FeaturesCanvas'
import FeatureSections from '@/components/FeatureSections'

export const metadata: Metadata = {
  title: 'Features — Relody',
  description:
    'Explore everything Relody does — from giving people their own melody to sharing song moments as gifts.',
}

export default function FeaturesPage() {
  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ background: '#08070E' }}>
      <FeaturesCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-5 py-16 pb-24">
        {/* Nav */}
        <nav className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text3 hover:text-purple transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to home
          </Link>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-purple mb-4">
            What&apos;s inside
          </p>
          <h1
            className="text-5xl sm:text-6xl font-display font-semibold leading-tight text-text mb-5"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Built for the music<br />
            <em className="italic text-purple">between people</em>
          </h1>
          <p className="text-text2 text-lg max-w-xl leading-relaxed">
            Relody is a relationship journal where every person in your life gets
            their own melody. Here&apos;s everything it can do for you.
          </p>
        </header>

        <FeatureSections />

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text3">© 2026 Relody</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-text3 hover:text-text2 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-xs text-text3 hover:text-text2 transition-colors">Terms & Conditions</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
