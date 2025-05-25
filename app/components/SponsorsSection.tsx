'use client'

import React from 'react'
import Image from 'next/image'

const SponsorsSection = () => {
  // All sponsors in one array
  const allSponsors = [
    { name: 'Dyson', logo: '/images/sponsors/dyson-logo.svg' },
    { name: 'Red Bull', logo: '/images/sponsors/redbull-logo.svg' },
    { name: 'Emaar', logo: '/images/sponsors/emaar-logo.svg' },
    { name: 'Samsung', logo: '/images/sponsors/samsung-logo.svg' },
    { name: 'Marie Claire', logo: '/images/sponsors/marie-claire-logo.svg' },
    { name: 'Steve Madden', logo: '/images/sponsors/steve-madden-logo.svg' },
    { name: 'Hoods', logo: '/images/sponsors/hoods-logo.svg' },
    { name: 'Fashion TV', logo: '/images/sponsors/fashion-tv-logo.svg' },
    { name: 'Blinx', logo: '/images/sponsors/blinx-logo.svg' },
    { name: 'Vogue', logo: '/images/sponsors/vogue-logo.svg' },
    { name: 'MiBitLabs', logo: '/images/sponsors/mibitlabs-logo.svg' },
    { name: 'Adidas', logo: '/images/sponsors/adidas-logo.svg' }
  ]

  // Split sponsors into two rows for mobile
  const topRowSponsors = [
    allSponsors[0], // Dyson
    allSponsors[2], // Emaar
    allSponsors[4], // Marie Claire
    allSponsors[6], // Hoods
    allSponsors[8], // Blinx
    allSponsors[10] // MiBitLabs
  ]

  const bottomRowSponsors = [
    allSponsors[1], // Red Bull
    allSponsors[3], // Samsung
    allSponsors[5], // Steve Madden
    allSponsors[7], // Fashion TV
    allSponsors[9], // Vogue
    allSponsors[11] // Adidas
  ]

  // Create multiple copies for seamless infinite scroll
  const infiniteLogos = [...allSponsors, ...allSponsors, ...allSponsors, ...allSponsors]
  const infiniteTopRow = [...topRowSponsors, ...topRowSponsors, ...topRowSponsors, ...topRowSponsors]
  const infiniteBottomRow = [...bottomRowSponsors, ...bottomRowSponsors, ...bottomRowSponsors, ...bottomRowSponsors]

  return (
    <section className="bg-[#0D0D14] py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Mobile-first container */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[248px]">
        {/* Section Title - Mobile optimized */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-white font-euclid text-lg sm:text-xl lg:text-2xl font-medium">
            Previous and Current Event Sponsors
          </h2>
        </div>

        {/* Mobile Layout - Two animated rows */}
        <div className="block sm:hidden">
          {/* Top Row - Moving left to right */}
          <div className="relative mb-4">
            <div className="flex animate-scroll-right w-max">
              {infiniteTopRow.map((sponsor, index) => (
                <div 
                  key={`mobile-top-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-[#1A1A1A] rounded-lg border border-gray-800 mx-1"
                  style={{ 
                    width: '140px', 
                    height: '80px',
                    minWidth: '140px'
                  }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain max-w-full max-h-full p-2 filter brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving right to left */}
          <div className="relative">
            <div className="flex animate-scroll-left w-max">
              {infiniteBottomRow.map((sponsor, index) => (
                <div 
                  key={`mobile-bottom-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-[#1A1A1A] rounded-lg border border-gray-800 mx-1"
                  style={{ 
                    width: '140px', 
                    height: '80px',
                    minWidth: '140px'
                  }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain max-w-full max-h-full p-2 filter brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Layout - Single flowing line */}
        <div className="hidden sm:block">
          <div className="relative">
            <div className="flex animate-scroll-right w-max">
              {infiniteLogos.map((sponsor, index) => (
                <div 
                  key={`flowing-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-[#1A1A1A] rounded-lg border border-gray-800 mx-2 lg:mx-3 hover:bg-[#2A2A2A] transition-colors"
                  style={{ 
                    width: '280px', 
                    height: '160px',
                    minWidth: '280px'
                  }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={240}
                    height={120}
                    className="object-contain max-w-full max-h-full p-4 filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection 