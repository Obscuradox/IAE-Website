import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Infinity Ængines × Fashion Factor - The Ultimate Innovation Show | June 13-15, Dubai',
  description: 'Join the ultimate innovation show featuring blockchain pioneers, fashion leaders, and tech visionaries. June 13-15 at The Agenda, Dubai Media City. 250,000+ live stream viewers, 2500+ participants. Experience cutting-edge fashion tech, AI workshops, runway shows, and metaverse integration.',
  keywords: [
    'innovation show',
    'blockchain conference',
    'fashion technology',
    'Dubai events',
    'Infinity Ængines',
    'Fashion Factor',
    'tech conference',
    'cryptocurrency',
    'digital innovation',
    'startup pitch',
    'runway show',
    'metaverse',
    'NFT',
    'Web3',
    'Dubai Media City',
    'AI fashion',
    'virtual reality',
    'augmented reality',
    'fashion tech',
    'digital transformation',
    'luxury brands',
    'fashion innovation',
    'tech summit',
    'blockchain fashion',
    'Web4',
    'immersive experience'
  ],
  authors: [
    { name: 'Infinity Ængines' },
    { name: 'Fashion Factor' }
  ],
  creator: 'Infinity Ængines × Fashion Factor',
  publisher: 'Infinity Ængines',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infinityængines-fashionfactor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infinityængines-fashionfactor.com',
    siteName: 'Infinity Ængines × Fashion Factor',
    title: '🚀 The Ultimate Innovation Show - Infinity Ængines × Fashion Factor | June 13-15, Dubai 🇦🇪',
    description: '🎯 Join 2500+ participants & 250,000+ live viewers for the most innovative fashion-tech event of 2024!\n\n📅 June 13-15, 2024\n📍 The Agenda, Dubai Media City\n\n✨ What awaits you:\n• Blockchain & AI in Fashion\n• Runway Shows with 3D Metaverse\n• Expert Workshops (Web3, AR/VR, AI)\n• Innovator Pitches & Awards\n• Virtual & Physical Attendance\n• Networking with Industry Leaders\n\n🎪 Featured Speakers:\n• Jonny Depp (Actor & Entrepreneur)\n• Vitalik Buterin (Ethereum Creator)\n• Anna Wintour (Vogue Editor)\n\n🎟️ Limited spots available - Register now!',
    images: [
      {
        url: '/images/og-screenshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Infinity Ængines × Fashion Factor - The Ultimate Innovation Show featuring fashion technology, blockchain, AI, and metaverse integration in Dubai',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-screenshot-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Join the Ultimate Innovation Show in Dubai - Fashion meets Technology',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@InfinityÆngines',
    creator: '@InfinityÆngines',
    title: '🚀 The Ultimate Innovation Show - Fashion × Tech | Dubai June 13-15',
    description: '🎯 2500+ participants, 250K+ viewers! Fashion-tech revolution in Dubai.\n\n✨ Blockchain, AI, Metaverse, Runway Shows\n🎪 Industry Leaders\n📍 Dubai Media City\n🎁 Premium Sponsor Packages Available',
    images: ['/images/og-screenshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business Conference',
  other: {
    'event:start_time': '2024-06-13T09:00:00+04:00',
    'event:end_time': '2024-06-15T23:00:00+04:00',
    'event:location': 'The Agenda, Dubai Media City, UAE',
    'event:organizer': 'Infinity Ængines × Fashion Factor',
    'event:price': 'Paid',
    'event:category': 'Technology Conference',
    'event:type': 'Hybrid Event',
    'article:author': 'Infinity Ængines',
    'article:section': 'Technology',
    'article:tag': 'Fashion Technology, Blockchain, AI, Dubai Events',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons - Updated with correct paths */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0D0D14" />
        <meta name="msapplication-TileColor" content="#0D0D14" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Enhanced SEO meta tags */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Event-specific meta tags */}
        <meta name="event-date" content="2024-06-13" />
        <meta name="event-location" content="Dubai Media City, UAE" />
        <meta name="event-type" content="Technology Conference" />
        <meta name="event-price" content="Free" />
        <meta name="event-attendance" content="Hybrid" />
        
        {/* WhatsApp & Telegram specific meta tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:updated_time" content="2024-01-15T00:00:00+00:00" />
        <meta property="article:published_time" content="2024-01-15T00:00:00+00:00" />
        <meta property="article:modified_time" content="2024-01-15T00:00:00+00:00" />
        
        {/* Additional social media optimization */}
        <meta name="twitter:image:alt" content="Infinity Ængines × Fashion Factor - The Ultimate Innovation Show in Dubai featuring fashion technology, blockchain, AI, and metaverse integration" />
        <meta name="twitter:domain" content="infinityængines-fashionfactor.com" />
        
        {/* Rich snippets for messaging apps */}
        <meta property="og:rich_attachment" content="true" />
        <meta property="og:see_also" content="https://infinityængines.com" />
        <meta property="og:see_also" content="https://fashionfactor.com" />
        
        {/* Structured Data for Events - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Infinity Ængines × Fashion Factor - The Ultimate Innovation Show",
              "description": "Join the ultimate innovation show featuring blockchain pioneers, fashion leaders, and tech visionaries. Experience cutting-edge fashion tech, AI workshops, runway shows, and metaverse integration.",
              "startDate": "2024-06-13T09:00:00+04:00",
              "endDate": "2024-06-15T23:00:00+04:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "The Agenda",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Dubai Media City",
                  "addressLocality": "Dubai",
                  "addressRegion": "Dubai",
                  "addressCountry": "AE",
                  "postalCode": "00000"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.2048",
                  "longitude": "55.2708"
                }
              },
              "organizer": [
                {
                  "@type": "Organization",
                  "name": "Infinity Ængines",
                  "url": "https://infinityængines.com",
                  "logo": "https://infinityængines-fashionfactor.com/images/infinity-ængines-logo.png"
                },
                {
                  "@type": "Organization", 
                  "name": "Fashion Factor",
                  "url": "https://fashionfactor.com",
                  "logo": "https://infinityængines-fashionfactor.com/images/fashion-factor-logo.svg"
                }
              ],
              "performer": [
                {
                  "@type": "Person",
                  "name": "Brock Pierce",
                  "description": "Visionary entrepreneur and philanthropist, founder of USDT (Tether)",
                  "jobTitle": "Blockchain Pioneer"
                },
                {
                  "@type": "Person",
                  "name": "Jonny Dodge",
                  "description": "British F1, events, aviation & superyacht entrepreneur",
                  "jobTitle": "F1 Entrepreneur"
                },
                {
                  "@type": "Person",
                  "name": "Marwan Al Zarouni",
                  "description": "Pioneer in blockchain adoption, leads the DBCC and DATF",
                  "jobTitle": "Blockchain Leader"
                }
              ],
              "offers": {
                "@type": "Offer",
                "url": "https://infinityængines-fashionfactor.com#packages",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01T00:00:00+04:00",
                "category": "Free Entry"
              },
              "image": [
                "https://infinityængines-fashionfactor.com/images/og-screenshot.jpg"
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Fashion Technology Professionals, Blockchain Enthusiasts, Entrepreneurs, Investors"
              },
              "maximumAttendeeCapacity": 2500,
              "typicalAgeRange": "18-65",
              "inLanguage": "en",
              "keywords": "fashion technology, blockchain, AI, metaverse, innovation, Dubai, Web3, virtual reality, augmented reality",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Fashion Technology"
                },
                {
                  "@type": "Thing", 
                  "name": "Blockchain"
                },
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence"
                },
                {
                  "@type": "Thing",
                  "name": "Metaverse"
                }
              ]
            })
          }}
        />
        
        {/* Organization Structured Data - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infinity Ængines",
              "url": "https://infinityængines.com",
              "logo": "https://infinityængines-fashionfactor.com/images/infinity-ængines-logo.png",
              "description": "Leading innovation company specializing in blockchain technology, fashion tech, and digital transformation",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "sameAs": [
                "https://twitter.com/InfinityÆngines",
                "https://linkedin.com/company/infinity-ængines",
                "https://instagram.com/infinityængines"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-50-123-4567",
                "contactType": "customer service",
                "email": "contact@infinityængines.com"
              }
            })
          }}
        />

        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Infinity Ængines × Fashion Factor",
              "url": "https://infinityængines-fashionfactor.com",
              "description": "The Ultimate Innovation Show featuring fashion technology, blockchain, AI, and metaverse integration",
              "publisher": {
                "@type": "Organization",
                "name": "Infinity Ængines"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://infinityængines-fashionfactor.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
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