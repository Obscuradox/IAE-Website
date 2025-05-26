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

        {/* Locations Cards - Separated layout */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-6 lg:gap-8 justify-center">
          {/* IRL Location */}
          <div className="w-full sm:w-1/2 lg:w-[704px]">
            {/* Icon and Label */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#151412] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-[#151412] font-euclid-square font-bold leading-tight uppercase text-3xl sm:text-4xl lg:text-5xl">
                IRL
              </h3>
            </div>
            
            {/* Image without overlay */}
            <div className="relative w-full h-48 sm:h-64 lg:h-[400px] rounded-2xl overflow-hidden mb-4 bg-[var(--color-image-bg)]">
              <picture>
                <source srcSet="/images/locations/irl-location.webp" type="image/webp" />
                <Image
                  src="/images/locations/irl-location.jpg"
                  alt="IRL Location - The Agenda, Dubai Media City"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* Description underneath */}
            <div className="text-center">
              <p className="text-[#151412] font-euclid-square leading-relaxed text-base sm:text-lg lg:text-xl">
                Experience the event in person at<br />
                <span className="font-bold">The Agenda, Dubai Media City</span>
              </p>
            </div>
          </div>

          {/* Virtual Location */}
          <div className="w-full sm:w-1/2 lg:w-[704px]">
            {/* Icon and Label */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#151412] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3L2 21L22 12L2 3Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[#151412] font-euclid-square font-bold leading-tight uppercase text-3xl sm:text-4xl lg:text-5xl">
                Virtual
              </h3>
            </div>
            
            {/* Image without overlay */}
            <div className="relative w-full h-48 sm:h-64 lg:h-[400px] rounded-2xl overflow-hidden mb-4 bg-[var(--color-image-bg)]">
              <picture>
                <source srcSet="/images/locations/virtual-location.webp" type="image/webp" />
                <Image
                  src="/images/locations/virtual-location.jpg"
                  alt="Virtual Location - Metaverse Experience"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* Description underneath */}
            <div className="text-center">
              <p className="text-[#151412] font-euclid-square leading-relaxed text-base sm:text-lg lg:text-xl">
                Join from anywhere in the world through our<br />
                <span className="font-bold">immersive metaverse experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection 