// import { BASE_URL } from '@/utils'
import Head from 'next/head'

let BASE_URL = 'https://farcaster-frame-psi.vercel.app/'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Frame"/>
        <meta property="og:image" content="https://farcaster-frame-psi.vercel.app/question.jpg"/>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://farcaster-frame-psi.vercel.app/question.jpg" />
        <meta property="fc:frame:button:1" content="Yes" />
        <meta property="fc:frame:button:2" content="No" />
        <meta property="fc:frame:post_url" content="https://farcaster-frame-psi.vercel.app/api/post" />
      </Head>
    </>
  )
}
