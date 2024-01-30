import { generateFarcasterFrame } from '@/utils'

export default async function handler (req,res){
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Derp' })
    return
  }

  const signedMessage = req.body;
  console.log(signedMessage)
  const choice = signedMessage.untrustedData.buttonIndex

  let html = ''

  if (choice === 1) {
    html = generateFarcasterFrame("https://farcaster-frame-psi.vercel.app/world.jpg", choice)
  } else {
    html = generateFarcasterFrame("https://farcaster-frame-psi.vercel.app/world.jpg", choice)
  }

  return res.status(200).setHeader('Content-Type', 'text/html').send(html)
}
