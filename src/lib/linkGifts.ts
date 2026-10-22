import { cache } from 'react'

// Local copy of PublicLinkGift from relody/functions/src/gifts/linkGiftUtils.ts (repos don't share code).
export type PublicLinkGift = {
  // 'error' is web-only: backend unreachable, timed out, non-OK, or misconfigured.
  state: 'available' | 'claimed' | 'cancelled' | 'expired' | 'not_found' | 'error'
  sender?: { name: string; avatarUrl: string | null }
  track?: {
    name: string
    artists: string
    albumImageUrl: string | null
    externalUrl: string | null
  }
  previewUrl?: string | null
  note?: string
}

const TOKEN_RE = /^[A-Za-z0-9]{20}$/
const NOT_FOUND: PublicLinkGift = { state: 'not_found' }
const ERROR: PublicLinkGift = { state: 'error' }

export const isValidGiftToken = (token: string): boolean => TOKEN_RE.test(token)

function webKeyHeaders(): Record<string, string> | null {
  const base = process.env.RELODY_FUNCTIONS_URL
  // Trimmed: a trailing newline pasted into the env var would otherwise break every request.
  const key = process.env.LINK_GIFT_WEB_KEY?.trim()
  return base && key ? { 'x-relody-web-key': key } : null
}

/**
 * Fetches a gift's public view. Backend failures are reported as 'error', not 'not_found'.
 * Wrapped in React `cache()` so `generateMetadata` and the page share one fetch per request.
 */
export const fetchLinkGift = cache(async (token: string): Promise<PublicLinkGift> => {
  if (!isValidGiftToken(token)) return NOT_FOUND
  const headers = webKeyHeaders()
  if (!headers) {
    console.error('fetchLinkGift: RELODY_FUNCTIONS_URL or LINK_GIFT_WEB_KEY is not set')
    return ERROR
  }
  try {
    const res = await fetch(
      `${process.env.RELODY_FUNCTIONS_URL}/getLinkGift?token=${encodeURIComponent(token)}`,
      { headers, cache: 'no-store', signal: AbortSignal.timeout(8000) }
    )
    if (!res.ok) {
      console.error(`fetchLinkGift: backend responded ${res.status}`)
      return ERROR
    }
    return (await res.json()) as PublicLinkGift
  } catch (e) {
    console.error('fetchLinkGift: request failed or timed out', e)
    return ERROR
  }
})

/** Records that a human opened the link. Best effort. */
export async function markLinkGiftOpened(token: string): Promise<void> {
  const headers = webKeyHeaders()
  if (!headers || !isValidGiftToken(token)) return
  try {
    await fetch(`${process.env.RELODY_FUNCTIONS_URL}/markLinkGiftOpened`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000)
    })
  } catch {
    // best effort
  }
}
