import Link from 'next/link'
import Spline from '@splinetool/react-spline/next'

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HQwrC9GIf8l1hbpg/scene.splinecode" />
      </div>

      {/* <div className="absolute bottom-16 inset-x-0 flex justify-center px-6">
        <a
          href="https://apps.apple.com/app/relody"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 p-3 rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md text-text hover:bg-white/[0.12] hover:border-white/25 transition-all duration-200 select-none"
        >
          <AppleIcon />
          <div className="flex flex-col">
            <span className="text-[10px] leading-none text-text3 font-medium tracking-wider uppercase">
              Download on the
            </span>
            <span className="text-base font-semibold leading-tight mt-0.5">
              App Store
            </span>
          </div>
        </a>
      </div> */}

      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-3">
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-xs text-text3 hover:text-text2 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-xs text-text3 hover:text-text2 transition-colors"
          >
            Terms & Conditions
          </Link>
          <a
            href="https://instagram.com/relody.official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Relody on Instagram"
            className="text-text3 hover:text-text transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://tiktok.com/@relody.official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Relody on TikTok"
            className="text-text3 hover:text-text transition-colors"
          >
            <TikTokIcon />
          </a>
        </div>
        <p className="text-[11px] text-text3">
          © 2026 Relody ·{' '}
          <a
            href="mailto:relody.official@gmail.com"
            className="hover:text-text2 transition-colors"
          >
            relody.official@gmail.com
          </a>
        </p>
      </div>
    </main>
  )
}

function AppleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z" />
    </svg>
  )
}
