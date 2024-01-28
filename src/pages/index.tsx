// import { BASE_URL } from '@/utils'
import Head from 'next/head'

let BASE_URL = 'https://farcaster-frame-psi.vercel.app/'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${BASE_URL}/question.jpg`} />
        <meta property="fc:frame:button:1" content="Yes" />
        <meta property="fc:frame:button:2" content="No" />
        <meta property="fc:frame:post_url" content={`${BASE_URL}/api/post`} />
      </Head>
    </>
  )
}
