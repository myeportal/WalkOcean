import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://walkocean.com'),
  title: 'Walkocean | Premium walking companionship for older adults',
  description:
    'Walkocean is a founder-led premium walking companionship service launching in Whatcom County for older adults and families seeking trusted outdoor routines.',
  openGraph: {
    title: 'Walkocean',
    description:
      'Founder-led premium walking companionship for older adults and families in Whatcom County.',
    url: 'https://walkocean.com',
    siteName: 'Walkocean',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walkocean',
    description:
      'Founder-led premium walking companionship for older adults and families in Whatcom County.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
