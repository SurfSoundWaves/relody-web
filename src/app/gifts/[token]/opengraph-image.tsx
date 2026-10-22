import { ImageResponse } from 'next/og'
import { fetchLinkGift } from '@/lib/linkGifts'

export const alt = 'A song gift on Relody'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Never reads or renders the gift note.
export default async function Image({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const gift = await fetchLinkGift(token)
  const available = gift.state === 'available' && gift.sender
  const art = available ? gift.track?.albumImageUrl : null

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
          background: '#08070E',
          color: '#F5F0FF',
          padding: 64
        }}
      >
        {art ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={art} width={420} height={420} style={{ borderRadius: 32, objectFit: 'cover' }} alt="" />
        ) : null}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: art ? 600 : 900 }}>
          <div style={{ fontSize: art ? 60 : 96, fontWeight: 700, lineHeight: 1.1 }}>
            {available && gift.sender ? `${gift.sender.name} sent you a song 🎵` : 'Relody'}
          </div>
          <div style={{ fontSize: 32, color: 'rgba(245,240,255,0.65)' }}>
            {available ? 'Open to listen on Relody' : 'Your life set to music.'}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
