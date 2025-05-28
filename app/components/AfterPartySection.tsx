'use client'

import React from 'react'
import Image from 'next/image'

const AfterPartySection = () => {
  return (
    <section className="bg-black py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Starry Space Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Large stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-16 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Medium stars */}
        <div className="absolute top-60 left-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-72 right-16 w-1 h-1 bg-purple-200 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-80 left-1/3 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute top-96 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
        
        {/* Small scattered stars */}
        <div className="absolute top-24 left-3/4 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-44 left-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-56 right-1/6 w-0.5 h-0.5 bg-purple-100 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-88 left-2/3 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse" style={{animationDelay: '1.7s'}}></div>
        
        {/* Bottom area stars */}
        <div className="absolute bottom-20 left-12 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute bottom-32 right-12 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute bottom-16 right-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1.9s'}}></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      </div>

      <div className="max-w-sm mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-white font-euclid-square font-light leading-tight mb-4 text-h2">
            Private After Party
          </h2>
          <p className="text-white/80 font-euclid-square leading-tight text-responsive-body mb-2">
            Exclusive celebration at Dubai's most prestigious venue
          </p>
          <div className="text-white font-euclid-square font-bold text-xl sm:text-2xl lg:text-3xl">
            KIRA Restaurant & LITT Bar Club
          </div>
          <div className="text-white/60 font-euclid-square text-base sm:text-lg lg:text-xl mt-2">
            Marsa Al Arab Hotel, Dubai
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Restaurant Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-800">
              <Image
                src="/images/after-party/KIRA-bar-1024x683.jpg"
                alt="KIRA Restaurant - Luxury Japanese Dining"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-black/50 z-10"></div>
            </div>
            
            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src="/images/after-party/maa_kira_-gallery-image-3 (1).avif"
                  alt="KIRA Restaurant Interior"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/40 z-10"></div>
              </div>
              <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src="/images/after-party/LITT-001-scaled.jpg"
                  alt="LITT Bar Club"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/40 z-10"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-6">
            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <h3 className="text-white font-euclid-square font-bold text-xl sm:text-2xl">
                  Exclusive VIP Experience
                </h3>
              </div>
              
              <div className="space-y-3 text-white/80 font-euclid-square">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">📅</span>
                  <div>
                    <div className="font-medium">June 15, 2024</div>
                    <div className="text-sm opacity-70">Final night celebration</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">🕘</span>
                  <div>
                    <div className="font-medium">10:00 PM - 2:00 AM</div>
                    <div className="text-sm opacity-70">After main event concludes</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">👔</span>
                  <div>
                    <div className="font-medium">Elegant Chic Dress Code</div>
                    <div className="text-sm opacity-70">Premium venue standards</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">🍾</span>
                  <div>
                    <div className="font-medium">Premium Japanese Cuisine & Cocktails</div>
                    <div className="text-sm opacity-70">Signature drinks & gourmet dining</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-euclid-square font-bold text-lg mb-4">
                What to Expect
              </h4>
              <ul className="space-y-2 text-white/80 font-euclid-square text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  Exclusive access to KIRA Restaurant & LITT Bar Club
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  Premium Japanese cuisine and signature cocktails
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  Networking with industry leaders and VIP guests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  Stunning views of Dubai's coastline
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  Live DJ and entertainment
                </li>
              </ul>
            </div>

            {/* Reservation Button */}
            <div className="pt-4">
              <a 
                href="https://lu.ma/q7jwgx15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-euclid-square font-bold text-base rounded-lg transition-all duration-300 w-full sm:w-auto relative overflow-hidden group
                border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-border
                hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(147,51,234,0.3),0_0_60px_rgba(6,182,212,0.2)]
                hover:scale-105 transform"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4) border-box'
                }}
              >
                <span className="relative z-10">Reserve Your Spot!</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 font-euclid-square text-sm">
            *After party access is only available for sponsors and by reservation directly through Luma.
            <br className="hidden sm:block" />
            Limited additional spots available for purchase.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AfterPartySection 