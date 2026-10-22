'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { PublicLinkGift } from '@/lib/linkGifts'
import { detectPlatform, type Platform } from '@/lib/platform'

const APP_STORE_URL = 'https://apps.apple.com/app/id6764798628'
const SITE_URL = 'https://relody.forxtu.space'
// Production custom scheme (app.config.js). Same-domain universal links don't open the app from
// Safari, so "Open in Relody" uses the scheme; the app rewrites it to the claim screen.
const APP_SCHEME = 'relody'
const REPORT_EMAIL = 'relody.official@gmail.com'

const subscribe = () => () => {}
const getPlatform = (): Platform => detectPlatform(navigator.userAgent, navigator.maxTouchPoints)
const getServerPlatform = (): Platform => 'other'

const primaryBtn =
  'inline-flex w-full items-center justify-center rounded-2xl bg-purple px-6 py-4 text-base font-semibold text-[#08070E] transition-opacity hover:opacity-90'
const secondaryLink = 'text-sm text-text2 underline underline-offset-4 hover:text-text transition-colors'

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#08070E] text-text">
      <main className="mx-auto flex min-h-full w-full max-w-md flex-col items-center justify-center gap-6 px-6 py-12 text-center">
        <p className="font-display text-xl font-semibold tracking-tight text-text2">Relody</p>
        {children}
      </main>
    </div>
  )
}

const comingSoonPill =
  'rounded-2xl border border-glass-border bg-glass px-6 py-4 text-sm font-medium text-text2'

/**
 * Leaves the gift URL on the clipboard for the app's install handoff. Written as both text/plain
 * and text/uri-list so iOS sees it as a URL (UIPasteboard hasURLs); browsers that reject
 * text/uri-list fall back to plain text. Failures are ignored.
 */
async function copyGiftLink(url: string): Promise<void> {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([url], { type: 'text/plain' }),
        'text/uri-list': new Blob([url], { type: 'text/uri-list' })
      })
    ])
    return
  } catch {
    // ClipboardItem / text/uri-list unsupported; try plain text
  }
  try {
    await navigator.clipboard.writeText(url)
  } catch {
    // clipboard unavailable; the App Store still opens
  }
}

function Message({ title, cta, platform }: { title: string; cta?: boolean; platform?: Platform }) {
  return (
    <Shell>
      <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight">{title}</h1>
      {!cta ? null : platform === 'android' ? (
        <p className={comingSoonPill}>Coming soon to Android</p>
      ) : (
        <a href={APP_STORE_URL} className={primaryBtn}>
          Send someone your own song
        </a>
      )}
    </Shell>
  )
}

export default function GiftView({ token, gift }: { token: string; gift: PublicLinkGift }) {
  const platform = useSyncExternalStore(subscribe, getPlatform, getServerPlatform)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const available = gift.state === 'available'

  useEffect(() => {
    if (!available) return
    fetch(`/gifts/${token}/opened`, { method: 'POST', keepalive: true }).catch(() => {})
  }, [available, token])

  if (gift.state === 'error') {
    return <Message title="We couldn't load this gift right now — try again in a moment." />
  }
  if (gift.state === 'claimed') {
    return <Message title="This song found its person 💛" cta platform={platform} />
  }
  if (!available || !gift.track || !gift.sender) {
    return <Message title="This gift isn't available anymore" />
  }

  const { track, sender, note, previewUrl } = gift

  const togglePlay = () => {
    const el = audioRef.current
    if (!el) return
    if (el.paused) el.play().catch(() => {})
    else el.pause()
  }

  // Attached to every App Store CTA: before hydration iOS users see the non-iOS CTA, and the
  // copy is harmless on other platforms.
  const keepIt = async (e: React.MouseEvent) => {
    e.preventDefault()
    await copyGiftLink(`${SITE_URL}/gifts/${token}`)
    window.location.href = APP_STORE_URL
  }

  const listenLabel = track.externalUrl?.includes('apple.com') ? 'Listen on Apple Music' : 'Listen on Spotify'

  return (
    <Shell>
      {track.albumImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={track.albumImageUrl}
          alt={`${track.name} album art`}
          width={256}
          height={256}
          className="h-64 w-64 rounded-3xl object-cover shadow-2xl shadow-purple/20"
        />
      ) : null}

      <div>
        <h1 className="font-display text-2xl font-semibold leading-tight">{track.name}</h1>
        <p className="mt-1 text-text2">{track.artists}</p>
      </div>

      {previewUrl ? (
        <>
          <audio ref={audioRef} src={previewUrl} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
          <button
            type="button"
            onClick={togglePlay}
            className="rounded-full border border-glass-border bg-glass px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            {playing ? 'Pause preview' : 'Play preview'}
          </button>
        </>
      ) : track.externalUrl ? (
        <a href={track.externalUrl} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
          {listenLabel}
        </a>
      ) : null}

      <div className="flex items-center gap-3">
        {sender.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={sender.avatarUrl} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bg3 font-display text-lg">
            {sender.name.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="text-sm text-text2">
          From <span className="font-semibold text-text">{sender.name}</span>
        </span>
      </div>

      {note ? (
        <blockquote className="w-full whitespace-pre-wrap break-words rounded-2xl border border-glass-border bg-glass px-5 py-4 text-left text-[0.95rem] leading-relaxed">
          {note}
        </blockquote>
      ) : null}

      {platform === 'ios' ? (
        <div className="flex w-full flex-col items-center gap-3">
          <a href={APP_STORE_URL} onClick={keepIt} className={primaryBtn}>
            Keep it &amp; send one back
          </a>
          <a href={`${APP_SCHEME}://gifts/claim/${token}`} className={secondaryLink}>
            Open in Relody
          </a>
          <p className="text-xs text-text3">Already have Relody? Tap your link again to open it in the app.</p>
        </div>
      ) : platform === 'android' ? (
        <p className={comingSoonPill}>Coming soon to Android</p>
      ) : (
        <a href={APP_STORE_URL} onClick={keepIt} className={primaryBtn}>
          Get it on iPhone
        </a>
      )}

      <ReportLink token={token} />
    </Shell>
  )
}

/**
 * Shows the report address with a copy button instead of opening `mailto:` straight away:
 * many devices have no (or the wrong) mail handler, so the link alone isn't reliable.
 */
function ReportLink({ token }: { token: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="text-xs text-text3 hover:text-text2 transition-colors">
        Report
      </button>
    )
  }

  const giftUrl = `${SITE_URL}/gifts/${token}`
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(REPORT_EMAIL)
      setCopied(true)
    } catch {
      // clipboard unavailable; the address is still visible and selectable
    }
  }

  return (
    <div className="w-full rounded-2xl border border-glass-border bg-glass px-5 py-4 text-sm text-text2">
      <p>To report this gift, email us and include the link to this page:</p>
      <p className="mt-2 select-all break-all font-medium text-text">{REPORT_EMAIL}</p>
      <div className="mt-3 flex items-center justify-center gap-4">
        <button type="button" onClick={copyEmail} className={secondaryLink}>
          {copied ? 'Copied' : 'Copy email'}
        </button>
        <a
          href={`mailto:${REPORT_EMAIL}?subject=${encodeURIComponent('Report a Relody gift link')}&body=${encodeURIComponent(`Gift link: ${giftUrl}`)}`}
          className={secondaryLink}
        >
          Open email app
        </a>
      </div>
    </div>
  )
}
