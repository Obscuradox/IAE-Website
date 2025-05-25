'use client'

import React from 'react'
import Image from 'next/image'

const LocationsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#151412] font-euclid-square text-[96px] font-light leading-[1.25] mb-4">
            2 Locations
          </h2>
          <p className="text-[#151412] font-euclid-square text-2xl leading-[1.5] opacity-60">
            Two Locations For Both The Digital And Physical World
          </p>
        </div>

        {/* Locations Cards */}
        <div className="flex gap-8 justify-center">
          {/* IRL Location */}
          <div className="relative w-[704px] h-[400px] rounded-[32px] overflow-hidden group">
            <Image
              src="/images/locations/irl-location.jpg"
              alt="IRL Location"
              fill
              className="object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#151412" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#151412" strokeWidth="2"/>
                </svg>
              </div>
              
              <h3 className="text-white font-euclid-square text-[64px] font-bold leading-[1.15] uppercase mb-4">
                IRL
              </h3>
              
              <p className="text-white font-euclid-square text-xl leading-[1.5] max-w-md">
                Experience the event in person at The Agenda, Dubai Media City
              </p>
            </div>
          </div>

          {/* Virtual Location */}
          <div className="relative w-[704px] h-[400px] rounded-[32px] overflow-hidden group">
            <Image
              src="/images/locations/virtual-location.jpg"
              alt="Virtual Location"
              fill
              className="object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3L2 21L22 12L2 3Z" stroke="#151412" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-white font-euclid-square text-[64px] font-bold leading-[1.15] uppercase mb-4">
                Virtual
              </h3>
              
              <p className="text-white font-euclid-square text-xl leading-[1.5] max-w-md">
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