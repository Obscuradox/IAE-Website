'use client'

import React from 'react'
import Image from 'next/image'

const SponsorsSection = () => {
  // Sponsor data using SVG format for optimal performance
  const sponsors = [
    { 
      name: 'Dyson', 
      image: '/images/sponsors/dyson-logo.svg'
    },
    { 
      name: 'Red Bull', 
      image: '/images/sponsors/redbull-logo.svg'
    },
    { 
      name: 'Emaar', 
      image: '/images/sponsors/emaar-logo.svg'
    },
    { 
      name: 'Samsung', 
      image: '/images/sponsors/samsung-logo.svg'
    },
    { 
      name: 'Marie Claire', 
      image: '/images/sponsors/marie-claire-logo.svg'
    },
    { 
      name: 'Steve Madden', 
      image: '/images/sponsors/steve-madden-logo.svg'
    },
    { 
      name: 'Hoods', 
      image: '/images/sponsors/hoods-logo.svg'
    },
    { 
      name: 'Fashion TV', 
      image: '/images/sponsors/fashion-tv-logo.svg'
    },
    { 
      name: 'Blinx', 
      image: '/images/sponsors/blinx-logo.svg'
    },
    { 
      name: 'Vogue', 
      image: '/images/sponsors/vogue-logo.svg'
    },
    { 
      name: 'MiBitLabs', 
      image: '/images/sponsors/mibitlabs-logo.svg'
    },
    { 
      name: 'Adidas', 
      image: '/images/sponsors/adidas-logo.svg'
    }
  ]

  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <section className="bg-black py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Section Title with responsive typography */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 
            className="text-white font-euclid-square font-light leading-tight text-h2"
          >
            Previous and Current Event Sponsors
          </h2>
        </div>

        {/* Mobile Layout - 2 columns with animated scroll */}
        <div className="block sm:hidden">
          <div className="flex flex-col gap-4">
            {/* First row - scrolling right */}
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-scroll-right">
                {duplicatedSponsors.slice(0, 12).map((sponsor, index) => (
                  <div key={`row1-${index}`} className="flex-shrink-0 w-48 h-36">
                    <div className="relative w-full h-full flex items-center justify-center rounded-lg p-2">
                      <Image
                        src={sponsor.image}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain filter brightness-0 invert"
                        loading="lazy"
                        sizes="96px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - scrolling left */}
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-scroll-left">
                {duplicatedSponsors.slice(6, 18).map((sponsor, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 w-48 h-36">
                    <div className="relative w-full h-full flex items-center justify-center rounded-lg p-2">
                      <Image
                        src={sponsor.image}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain filter brightness-0 invert"
                        loading="lazy"
                        sizes="96px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Layout - Grid */}
        <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 smooth-scroll">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Sponsor Logo with SVG optimization */}
              <div className="relative w-full h-36 sm:h-48 lg:h-60 flex items-center justify-center rounded-lg p-2">
                <Image
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain filter brightness-0 invert"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
          width: calc(200% + 1rem);
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          width: calc(200% + 1rem);
        }
      `}</style>
    </section>
  )
}

export default SponsorsSection 