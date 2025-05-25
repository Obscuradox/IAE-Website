'use client'

import React from 'react'
import Image from 'next/image'

const SponsorsSection = () => {
  const sponsors = [
    // Top row
    [
      { name: 'Dyson', logo: '/images/sponsors/dyson-logo.svg' },
      { name: 'Red Bull', logo: '/images/sponsors/redbull-logo.svg' },
      { name: 'Emaar', logo: '/images/sponsors/emaar-logo.svg' },
      { name: 'Samsung', logo: '/images/sponsors/samsung-logo.svg' },
      { name: 'Marie Claire', logo: '/images/sponsors/marie-claire-logo.svg' }
    ],
    // Bottom row
    [
      { name: 'Steve Madden', logo: '/images/sponsors/steve-madden-logo.svg' },
      { name: 'Hoods', logo: '/images/sponsors/hoods-logo.svg' },
      { name: 'Fashion TV', logo: '/images/sponsors/fashion-tv-logo.svg' },
      { name: 'Blinx', logo: '/images/sponsors/blinx-logo.svg' },
      { name: 'Vogue', logo: '/images/sponsors/vogue-logo.svg' },
      { name: 'MiBitLabs', logo: '/images/sponsors/mibitlabs-logo.svg' },
      { name: 'Adidas', logo: '/images/sponsors/adidas-logo.svg' }
    ]
  ]

  return (
    <section className="bg-[#0D0D14] py-16">
      {/* Full width container with proper padding matching Figma */}
      <div className="w-full px-[248px]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-white font-euclid text-2xl font-medium mb-2">
            Previous and Current Event Sponsors
          </h2>
        </div>

        {/* Sponsors Grid - Much larger logos */}
        <div className="space-y-20">
          {/* Top Row - 5 logos evenly spaced */}
          <div className="flex justify-between items-center">
            {sponsors[0].map((sponsor, index) => (
              <div 
                key={`top-${index}`}
                className="flex items-center justify-center h-[160px] flex-1"
              >
                <div className="relative w-full h-full max-w-[320px] flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={320}
                    height={160}
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 7 logos evenly spaced */}
          <div className="flex justify-between items-center">
            {sponsors[1].map((sponsor, index) => (
              <div 
                key={`bottom-${index}`}
                className="flex items-center justify-center h-[160px] flex-1"
              >
                <div className="relative w-full h-full max-w-[280px] flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={280}
                    height={160}
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection 