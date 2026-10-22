import { markLinkGiftOpened } from '@/lib/linkGifts'

export async function POST(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  await markLinkGiftOpened(token)
  return new Response(null, { status: 204 })
}
