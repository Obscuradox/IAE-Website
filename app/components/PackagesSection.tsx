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
      price: 'AED 750,000',
      image: '/images/packages/elite-partner.webp',
      fallback: '/images/packages/elite-partner.jpg',
      link: '/packages/elite-partner',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      highlights: ['20min Keynote Speech', '50 VIP Tickets', 'Premium 5×5m Booth', 'Celebrity Meet & Greet']
    },
    {
      title: 'Premier Partner',
      subtitle: 'Strategic Leadership',
      description: 'Lead industry discussions with 15-minute panel leadership, 25 VIP tickets, branded activations, and comprehensive media coverage for maximum impact.',
      price: 'AED 350,000',
      image: '/images/packages/premier-partner.webp',
      fallback: '/images/packages/premier-partner.jpg',
      link: '/packages/premier-partner',
      gradient: 'from-yellow-500 via-yellow-600 to-yellow-700',
      highlights: ['15min Panel Leadership', '25 VIP Tickets', '3×3m Booth', 'Branded Mini-Activation']
    },
    {
      title: 'Core Partner',
      subtitle: 'Essential Presence',
      description: 'Perfect entry-level partnership with 5-minute stage presence, 10 VIP tickets, strategic booth placement, and targeted social media campaigns.',
      price: 'AED 100,000',
      image: '/images/packages/core-partner.webp',
      fallback: '/images/packages/core-partner.jpg',
      link: '/packages/core-partner',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
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
              
              {/* Top Section - Price and Badge */}
              <div className="flex justify-between items-start mb-8 sm:mb-12 lg:mb-16">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs lg:text-sm border border-white/30">
                  Limited to 10 Spots Only
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5 border border-white/30">
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl">
                    AED 35,000
                  </span>
                </div>
              </div>

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
                      { icon: '🎫', title: '3 VIP Tickets', desc: 'Premium access' },
                      { icon: '📸', title: 'Influencer Shoot', desc: '1B+ reach potential' },
                      { icon: '🚀', title: 'Metaverse Access', desc: '1-month networking' }
                    ].map((benefit, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-5 border border-white/20">
                        <div className="text-lg sm:text-xl lg:text-2xl mb-1">{benefit.icon}</div>
                        <div className="text-white font-bold text-xs sm:text-sm lg:text-base">{benefit.title}</div>
                        <div className="text-white/80 text-xs sm:text-xs lg:text-sm">{benefit.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section - CTA - Fixed at bottom with guaranteed space */}
              <div className="text-center space-y-3 sm:space-y-4 mt-auto">
                <Link 
                  href="/packages/stage-presenter"
                  className="inline-flex items-center justify-center bg-white text-black font-euclid-square font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base lg:text-lg"
                >
                  <span>Apply Now - Deadline May 30, 2025</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <div className="text-white/70 text-xs sm:text-sm lg:text-base">
                  5% commission on resulting sales • Global exposure guaranteed
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
              {/* Enhanced Package Card - Removed hover scale effect */}
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] xl:h-[450px] overflow-hidden rounded-3xl bg-[var(--color-image-bg)] shadow-2xl">
                
                {/* Background Image */}
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
                
                {/* Gradient Overlay matching package colors */}
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} opacity-80 z-10`}></div>
                
                {/* Content Container - Mobile optimized spacing */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-5 lg:p-6">
                  
                  {/* Top Section - Price Badge */}
                  <div className="flex justify-end">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/30">
                      <span className="text-white font-bold text-xs sm:text-sm lg:text-base">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section - Main Content - Mobile compressed */}
                  <div className="space-y-2 sm:space-y-3">
                    {/* Package Title and Subtitle */}
                    <div className="space-y-1">
                      <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                        {pkg.subtitle}
                      </div>
                      <h3 className="text-white font-euclid-square font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight">
                        {pkg.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Key Highlights - Mobile compressed */}
                    <div className="space-y-1">
                      <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                        Key Features
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <span className="text-white text-xs lg:text-sm font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button - White background with black text for visibility */}
                    {pkg.link.startsWith('/') ? (
                      <Link 
                        href={pkg.link}
                        className="inline-flex items-center justify-center w-full bg-white text-black font-euclid-square font-bold py-2 px-4 sm:py-2.5 sm:px-5 lg:py-3 lg:px-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg text-xs sm:text-sm lg:text-base"
                      >
                        <span>Explore Package</span>
                        <svg className="w-3 h-3 ml-1.5 sm:ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <a 
                        href={pkg.link}
                        className="inline-flex items-center justify-center w-full bg-white text-black font-euclid-square font-bold py-2 px-4 sm:py-2.5 sm:px-5 lg:py-3 lg:px-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg text-xs sm:text-sm lg:text-base"
                      >
                        <span>Explore Package</span>
                        <svg className="w-3 h-3 ml-1.5 sm:ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements - Mobile adjusted */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-1 h-6 sm:w-1.5 sm:h-8 lg:h-10 bg-white/30 rounded-full z-30"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full z-30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20">
          
          {/* General Sponsorship Inquiry Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-700 shadow-2xl">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-euclid-square font-bold text-xl sm:text-2xl lg:text-3xl mb-3">
                  Custom Sponsorship
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Need a tailored sponsorship solution? Let's discuss a custom package that perfectly fits your brand's goals and budget.
                </p>
              </div>
              <a 
                href="mailto:contact@infinityaengines.com?subject=Custom Sponsorship Inquiry&body=Hi, I'm interested in discussing a custom sponsorship package for the Infinity Ængines × Fashion Factor event. Please contact me to explore tailored options."
                className="inline-flex items-center justify-center bg-white text-black font-euclid-square font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg text-sm sm:text-base"
              >
                <span>Discuss Custom Package</span>
                <svg className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Event Information Card */}
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-700 shadow-2xl">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-euclid-square font-bold text-xl sm:text-2xl lg:text-3xl mb-3">
                  Event Details
                </h3>
                <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Get comprehensive event information, venue details, audience demographics, and partnership benefits guide.
                </p>
              </div>
              <a 
                href="mailto:contact@infinityaengines.com?subject=Event Information Request&body=Hi, I would like to receive detailed information about the Infinity Ængines × Fashion Factor event, including venue details, audience demographics, and partnership opportunities."
                className="inline-flex items-center justify-center bg-white text-black font-euclid-square font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg text-sm sm:text-base"
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