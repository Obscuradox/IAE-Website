'use client'

import React from 'react'
import Image from 'next/image'

const LocationsSection = () => {
  return (
    <section id="locations" className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-sm mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <h2 className="text-[#151412] font-euclid-square font-light leading-tight mb-2 sm:mb-4 text-h2">
            2 Locations
          </h2>
          <p className="text-[#151412] font-euclid-square leading-tight opacity-60 text-responsive-body">
            Two locations for both the digital and physical world
          </p>
        </div>

        {/* Locations Cards - Mobile first */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-8 justify-center">
          {/* IRL Location */}
          <div className="relative w-full sm:w-1/2 lg:w-[704px] h-48 sm:h-64 lg:h-[400px] rounded-2xl overflow-hidden group bg-[var(--color-image-bg)]">
            <picture>
              <source srcSet="/images/locations/irl-location.webp" type="image/webp" />
              <Image
                src="/images/locations/irl-location.jpg"
                alt="IRL Location"
                fill
                className="object-cover"
                loading="lazy"
              />
            </picture>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-3 sm:p-4">
              {/* Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#151412" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#151412" strokeWidth="2"/>
                </svg>
              </div>
              
              <h3 className="text-white font-euclid-square font-bold leading-tight uppercase mb-1 sm:mb-2 lg:mb-4 text-h1">
                IRL
              </h3>
              
              <p className="text-white font-euclid-square leading-tight max-w-xs sm:max-w-sm lg:max-w-md text-responsive-body">
                Experience the event in person at The Agenda, Dubai Media City
              </p>
            </div>
          </div>

          {/* Virtual Location */}
          <div className="relative w-full sm:w-1/2 lg:w-[704px] h-48 sm:h-64 lg:h-[400px] rounded-2xl overflow-hidden group bg-[var(--color-image-bg)]">
            <picture>
              <source srcSet="/images/locations/virtual-location.webp" type="image/webp" />
              <Image
                src="/images/locations/virtual-location.jpg"
                alt="Virtual Location"
                fill
                className="object-cover"
                loading="lazy"
              />
            </picture>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-3 sm:p-4">
              {/* Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3L2 21L22 12L2 3Z" stroke="#151412" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-white font-euclid-square font-bold leading-tight uppercase mb-1 sm:mb-2 lg:mb-4 text-h1">
                Virtual
              </h3>
              
              <p className="text-white font-euclid-square leading-tight max-w-xs sm:max-w-sm lg:max-w-md text-responsive-body">
                Join from anywhere in the world through our immersive metaverse experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection 