import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://walkocean.com'),
  title: 'Walkocean | Trusted coastal walking companionship for older adults',
  description:
    'Walkocean helps older adults and families in Whatcom County book trusted coastal walking companionship with safety, consistency, and confidence.',
  openGraph: {
    title: 'Walkocean',
    description:
      'Trusted coastal walking companionship for older adults and families in Whatcom County.',
    url: 'https://walkocean.com',
    siteName: 'Walkocean',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walkocean',
    description:
      'Trusted coastal walking companionship for older adults and families in Whatcom County.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
