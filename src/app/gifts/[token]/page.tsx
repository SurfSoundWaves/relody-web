import type { Metadata } from 'next'
import { fetchLinkGift } from '@/lib/linkGifts'
import GiftView from './GiftView'

type Props = { params: Promise<{ token: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params
  const gift = await fetchLinkGift(token)
  const title =
    gift.state === 'available' && gift.sender
      ? `${gift.sender.name} sent you a song 🎵`
      : 'Relody'
  return {
    title,
    openGraph: { title, description: 'Open to listen.', type: 'website' },
    robots: { index: false, follow: false }
  }
}

export default async function GiftPage({ params }: Props) {
  const { token } = await params
  const gift = await fetchLinkGift(token)
  return <GiftView token={token} gift={gift} />
}
