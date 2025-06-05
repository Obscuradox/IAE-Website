'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useScrollAnimation from '../hooks/useScrollAnimation'

const PackagesSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>()
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })
  const { elementRef: stageRef, isVisible: stageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  // Package data with WebP format, fallbacks, and enhanced descriptions
  const packages = [
    {
      title: 'Elite Partner',
      subtitle: 'Ultimate Exposure',
      description: 'The pinnacle of partnership. Get 20-minute keynote speaking slot, 50 VIP tickets, premium booth space, and unmatched brand visibility across all event channels.',
      price: 'SOLD OUT',
      image: '/images/packages/elite-partner.webp',
      fallback: '/images/packages/elite-partner.jpg',
      link: '/packages/elite-partner',
      accentColor: 'rgba(147, 51, 234, 0.1)', // subtle purple
      borderColor: 'rgba(147, 51, 234, 0.2)',
      highlights: ['20-Minute Keynote Speech', '50 VIP Tickets', 'Premium 5×5m Booth', 'Celebrity Meet & Greet']
    },
    {
      title: 'Premier Partner',
      subtitle: 'Strategic Leadership',
      description: 'Lead industry discussions with 15-minute panel leadership, 25 VIP tickets, branded activations, and comprehensive media coverage for maximum impact.',
      price: 'SOLD OUT',
      image: '/images/packages/premier-partner.webp',
      fallback: '/images/packages/premier-partner.jpg',
      link: '/packages/premier-partner',
      accentColor: 'rgba(245, 158, 11, 0.1)', // subtle amber
      borderColor: 'rgba(245, 158, 11, 0.2)',
      highlights: ['15min Panel Leadership', '25 VIP Tickets', '3×3m Booth', 'Branded Mini-Activation']
    },
    {
      title: 'Core Partner',
      subtitle: 'Essential Presence',
      description: 'Perfect entry-level partnership with 5-minute stage presence, 10 VIP tickets, strategic booth placement, and targeted social media campaigns.',
      price: 'SOLD OUT',
      image: '/images/packages/core-partner.webp',
      fallback: '/images/packages/core-partner.jpg',
      link: '/packages/core-partner',
      accentColor: 'rgba(59, 130, 246, 0.1)', // subtle blue
      borderColor: 'rgba(59, 130, 246, 0.2)',
      highlights: ['5min Stage Presence', '10 VIP Tickets', '2×2m Booth', 'Social Media Campaign']
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="packages" 
      className={`bg-black py-8 sm:py-12 lg:py-16 scroll-animate relative overflow-hidden ${sectionVisible ? 'animate-in' : ''}`}
    >
      {/* Subtle space background with stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars-subtle"></div>
        <div className="stars2-subtle"></div>
        <div className="stars3-subtle"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Title with responsive typography */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate-slide-left ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 
            className="text-white font-euclid-square font-light leading-tight text-h2"
          >
            Sponsor Packages
          </h2>
        </div>

        {/* Stage Presenter Package - Moved above other packages and compressed */}
        <div 
          ref={stageRef}
          className={`relative scroll-animate-scale mb-12 sm:mb-16 lg:mb-20 ${stageVisible ? 'animate-in' : ''}`}
        >
          {/* Stage Presenter Card with enhanced design - Dramatically increased height to ensure button visibility */}
          <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden rounded-3xl bg-[var(--color-image-bg)] shadow-2xl group">
            
            {/* Background Image */}
            <picture>
              <source srcSet="/images/packages/stage-presenter.webp" type="image/webp" />
              <Image
                src="/images/packages/stage-presenter.jpg"
                alt="Stage Presenter Package"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="100vw"
              />
            </picture>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 z-10"></div>
            
            {/* Additional dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30 z-15"></div>
            
            {/* Content Container - Using flex-col with specific spacing instead of justify-between */}
            <div className="absolute inset-0 z-20 flex flex-col p-6 sm:p-8 lg:p-12">
              
              {/* Top Section - Removed pricing and limitation bubbles */}

              {/* Center Content - Reduced spacing */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 flex-1 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-white/80 text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wider">
                      Showcase Your Innovation
                    </div>
                    <h3 className="text-white font-euclid-square font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                      Stage Presenter<br />Package
                    </h3>
                  </div>
                  
                  <p className="text-white/95 font-euclid-square leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    Present your company directly to 2,500+ live participants and 250,000+ global livestream viewers. 
                    Secure one of only 10 exclusive speaking slots at Dubai's premier innovation event.
                  </p>

                  {/* Key Benefits Grid - Reduced spacing */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
                    {[
                      { icon: '🎤', title: 'Stage Time', desc: 'Present to thousands' },
                      { icon: '🎫', title: '10 Full Access Tickets', desc: 'Complete event access' },
                      { icon: '🍽️', title: '10-Person VIP Table', desc: 'KIRA after party' },
                      { icon: '💼', title: '5% Commission', desc: '• Sales\n• Partnerships\n• Investment' }
                    ].map((benefit, idx) => (
                      <div key={idx} className="bg-white text-black rounded-lg p-3 sm:p-4 lg:p-5 border border-gray-200 relative overflow-hidden" style={{
                        border: '2px solid transparent',
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4) border-box'
                      }}>
                        <div className="text-lg sm:text-xl lg:text-2xl mb-1">{benefit.icon}</div>
                        <div className="text-black font-bold text-xs sm:text-sm lg:text-base">{benefit.title}</div>
                        <div className="text-black/70 text-xs sm:text-xs lg:text-sm whitespace-pre-line">{benefit.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section - CTA - Fixed at bottom with guaranteed space */}
              <div className="text-center space-y-3 sm:space-y-4 mt-auto">
                <div 
                  className="inline-flex items-center justify-center bg-gray-500 text-white font-euclid-square font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-xl text-sm sm:text-base lg:text-lg cursor-not-allowed"
                >
                  <span>DEADLINE PASSED</span>
                </div>
                <div className="text-white/70 text-xs sm:text-sm lg:text-base">
                  Applications are no longer being accepted for this package
                </div>
              </div>
            </div>

            {/* Decorative Elements - Adjusted for larger size */}
            <div className="absolute top-8 left-8 w-2 h-16 sm:w-3 sm:h-20 lg:h-24 bg-white/30 rounded-full z-30"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full z-30"></div>
            <div className="absolute top-1/2 right-8 w-4 h-4 sm:w-5 sm:h-5 bg-white/25 rounded-full z-30"></div>
          </div>
        </div>

        {/* Packages Grid - Compressed heights */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 scroll-animate-fade ${gridVisible ? 'animate-in' : ''}`}
        >
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative group scroll-animate-stagger ${gridVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Neumorphic Package Card */}
              <div 
                className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] xl:h-[380px] overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_3px_0_rgba(0,0,0,0.8),0_1px_2px_0_rgba(0,0,0,0.9)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_12px_0_rgba(0,0,0,0.9)] transition-all duration-300 border border-gray-800"
                style={{ 
                  borderColor: pkg.borderColor,
                  backgroundColor: `color-mix(in srgb, #1a1a1a 90%, ${pkg.accentColor.replace('0.1', '1')} 10%)`
                }}
              >
                
                {/* Background Image with reduced opacity */}
                <div className="absolute inset-0 opacity-20">
                  <picture>
                    <source srcSet={pkg.image} type="image/webp" />
                    <Image
                      src={pkg.fallback}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </picture>
                </div>
                
                {/* Subtle accent overlay */}
                <div 
                  className="absolute inset-0 z-5"
                  style={{ backgroundColor: pkg.accentColor }}
                ></div>
                
                {/* Content Container - Reduced spacing */}
                <div className="absolute inset-0 z-20 flex flex-col p-4 sm:p-5 lg:p-6">
                  
                  {/* Top Section - Price Badge and Title */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                          {pkg.subtitle}
                        </div>
                        <h3 className="text-white font-euclid-square font-bold text-lg sm:text-xl lg:text-2xl leading-tight">
                          {pkg.title}
                        </h3>
                      </div>
                      <div 
                        className="bg-[#2a2a2a] rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6),inset_0_-1px_0_0_rgba(255,255,255,0.1)] border border-gray-700"
                        style={{ borderColor: pkg.borderColor }}
                      >
                        <span className="text-white font-bold text-xs sm:text-sm">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                        Key Features
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5">
                            <div 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: pkg.borderColor.replace('0.2', '0.8') }}
                            ></div>
                            <span className="text-gray-300 text-xs font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - CTA Button */}
                  <div className="mt-auto pt-4">
                    {pkg.link.startsWith('/') ? (
                      <Link 
                        href={pkg.link}
                        className="inline-flex items-center justify-center w-full bg-white text-black font-euclid-square font-medium py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-[0_2px_8px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] text-xs sm:text-sm"
                      >
                        <span>Explore Package</span>
                        <svg className="w-3 h-3 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <a 
                        href={pkg.link}
                        className="inline-flex items-center justify-center w-full bg-white text-black font-euclid-square font-medium py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-[0_2px_8px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] text-xs sm:text-sm"
                      >
                        <span>Explore Package</span>
                        <svg className="w-3 h-3 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Subtle decorative elements */}
                <div 
                  className="absolute top-3 left-3 w-1 h-8 rounded-full z-30 opacity-30"
                  style={{ backgroundColor: pkg.borderColor.replace('0.2', '0.6') }}
                ></div>
                <div 
                  className="absolute bottom-3 right-3 w-3 h-3 rounded-full z-30 opacity-20"
                  style={{ backgroundColor: pkg.borderColor.replace('0.2', '0.4') }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Cards Section - Neumorphic Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20">
          
          {/* General Sponsorship Inquiry Card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-7 lg:p-8 border border-gray-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_3px_0_rgba(0,0,0,0.8),0_1px_2px_0_rgba(0,0,0,0.9)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_12px_0_rgba(0,0,0,0.9)] transition-all duration-300">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6),inset_0_-1px_0_0_rgba(255,255,255,0.1)] border border-gray-700">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-white font-euclid-square font-bold text-lg sm:text-xl lg:text-2xl">
                  Custom Sponsorship
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Need a tailored sponsorship solution? Let's discuss a custom package that perfectly fits your brand's goals and budget.
              </p>
              
              <a 
                href="mailto:contact@infinityængines.com?subject=Custom Sponsorship Inquiry&body=Hi, I'm interested in discussing a custom sponsorship package for the Infinity Ængines × Fashion Factor event. Please contact me to explore tailored options."
                className="inline-flex items-center justify-center w-full bg-white text-black font-euclid-square font-medium py-3 px-5 sm:py-3.5 sm:px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-[0_2px_8px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] text-sm sm:text-base"
              >
                <span>Discuss Custom Package</span>
                <svg className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Event Information Card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-7 lg:p-8 border border-gray-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_3px_0_rgba(0,0,0,0.8),0_1px_2px_0_rgba(0,0,0,0.9)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_12px_0_rgba(0,0,0,0.9)] transition-all duration-300">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6),inset_0_-1px_0_0_rgba(255,255,255,0.1)] border border-gray-700">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-euclid-square font-bold text-lg sm:text-xl lg:text-2xl">
                  Event Details
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Get comprehensive event information, venue details, audience demographics, and partnership benefits guide.
              </p>
              
              <a 
                href="mailto:contact@infinityængines.com?subject=Event Information Request&body=Hi, I would like to receive detailed information about the Infinity Ængines × Fashion Factor event, including venue details, audience demographics, and partnership opportunities."
                className="inline-flex items-center justify-center w-full bg-white text-black font-euclid-square font-medium py-3 px-5 sm:py-3.5 sm:px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-[0_2px_8px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] text-sm sm:text-base"
              >
                <span>Get Event Info</span>
                <svg className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagesSection 