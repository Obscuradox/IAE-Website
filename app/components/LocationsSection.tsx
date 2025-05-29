'use client'

import React from 'react'
import Image from 'next/image'

const LocationsSection = () => {
  // Function to detect if user is on Chrome desktop
  const isChromeBrowser = () => {
    if (typeof window === 'undefined') return false
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    return isChrome && !isMobile
  }

  // Function to handle metaverse button click
  const handleMetaverseClick = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return
    
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (!isChrome || isMobile) {
      e.preventDefault()
      alert('The metaverse experience is live and viewable on a Chrome browser on a desktop device.')
      return
    }
    
    // If Chrome desktop, proceed with the link
    window.open('https://explore.unyted.world/scene?id=4a6eefc0-3b92-11f0-bc79-02243b6f7d63', '_blank')
  }

  return (
    <section className="bg-[#FDF6E8] py-8 sm:py-12 lg:py-16">
      <div className="max-w-sm mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#151412] font-euclid-square font-light leading-tight mb-4 text-h2">
            Event Locations
          </h2>
          <p className="text-[#151412]/70 font-euclid-square leading-tight text-responsive-body">
            Join us in person or virtually from anywhere in the world
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* IRL Location */}
          <div className="text-center space-y-6">
            {/* Icon and Label */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#151412] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[#151412] font-euclid-square font-bold text-3xl sm:text-4xl lg:text-5xl">
                IRL
              </h3>
            </div>
            
            {/* Clean Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <picture>
                <source srcSet="/images/locations/irl-location.webp" type="image/webp" />
                <Image
                  src="/images/locations/irl-location.jpg"
                  alt="The Agenda Dubai Media City - IRL Event Venue"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* Description underneath */}
            <div className="text-center">
              <p className="text-[#151412] font-euclid-square leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                Experience the energy live at<br />
                <span className="font-bold">The Agenda, Dubai Media City</span>
              </p>
              
              {/* Reserve Your Spot Button */}
              <a 
                href="https://lu.ma/q7jwgx15"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-euclid-square"
              >
                <span>Reserve Your Spot!</span>
                <svg className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Virtual Location */}
          <div className="text-center space-y-6">
            {/* Icon and Label */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#151412] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-[#151412] font-euclid-square font-bold text-3xl sm:text-4xl lg:text-5xl">
                Virtual
              </h3>
            </div>
            
            {/* Clean Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <picture>
                <source srcSet="/images/locations/virtual-location.webp" type="image/webp" />
                <Image
                  src="/images/locations/virtual-location.jpg"
                  alt="Virtual Metaverse Event Experience"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* Description underneath */}
            <div className="text-center">
              <p className="text-[#151412] font-euclid-square leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                Join from anywhere in the world through our<br />
                <span className="font-bold">immersive metaverse experience</span>
              </p>
              
              {/* Explore Metaverse Button - Only show on Chrome desktop, alert on mobile */}
              <button 
                onClick={handleMetaverseClick}
                className="btn-primary font-euclid-square"
              >
                <span>Explore The Metaverse</span>
                <svg className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection 