import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'INFINITY AENGINES × FASHION FACTOR - The Ultimate Innovation Show',
  description: 'Join the ultimate innovation show featuring cutting-edge technology, fashion, and innovation. Live stream with 250,000+ viewers and 2,500+ participants.',
  keywords: 'innovation, fashion, technology, fashion factor, infinity aengines, Dubai, event',
  authors: [{ name: 'INFINITY AENGINES × FASHION FACTOR' }],
  creator: 'INFINITY AENGINES × FASHION FACTOR',
  publisher: 'INFINITY AENGINES × FASHION FACTOR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infinityfashionfactor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'INFINITY AENGINES × FASHION FACTOR - The Ultimate Innovation Show',
    description: 'Join the ultimate innovation show featuring cutting-edge technology, fashion, and innovation.',
    url: 'https://infinityfashionfactor.com',
    siteName: 'INFINITY AENGINES × FASHION FACTOR',
    images: [
      {
        url: '/images/og-screenshot.jpg',
        width: 1200,
        height: 630,
        alt: 'INFINITY AENGINES × FASHION FACTOR - The Ultimate Innovation Show',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INFINITY AENGINES × FASHION FACTOR - The Ultimate Innovation Show',
    description: 'Join the ultimate innovation show featuring cutting-edge technology, fashion, and innovation.',
    images: ['/images/og-screenshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "INFINITY AENGINES × FASHION FACTOR - The Ultimate Innovation Show",
              "description": "Join the ultimate innovation show featuring cutting-edge technology, fashion, and innovation.",
              "startDate": "2024-12-15T09:00:00+04:00",
              "endDate": "2024-12-15T18:00:00+04:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
              "location": [
                {
                  "@type": "Place",
                  "name": "Dubai, UAE",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "@country": "AE"
                  }
                },
                {
                  "@type": "VirtualLocation",
                  "url": "https://infinityfashionfactor.com"
                }
              ],
              "organizer": {
                "@type": "Organization",
                "name": "INFINITY AENGINES × FASHION FACTOR",
                "url": "https://infinityfashionfactor.com"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}