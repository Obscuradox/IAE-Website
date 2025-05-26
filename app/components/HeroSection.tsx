'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// SVG Icons using the actual downloaded assets
const EyeIcon = () => (
  <Image 
    src="/images/eye-icon.svg" 
    alt="Eye icon" 
    width={39} 
    height={39}
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[39px] lg:h-[39px]"
  />
)

const UsersIcon = () => (
  <Image 
    src="/images/users-icon.svg" 
    alt="Users icon" 
    width={39} 
    height={39}
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[39px] lg:h-[39px]"
  />
)

// Logo components using WebP format with fallback
const InfinityAenginesLogo = ({ size = "normal" }) => (
  <picture>
    <source srcSet="/images/infinity-aengines-logo.webp" type="image/webp" />
    <Image 
      src="/images/infinity-aengines-logo.png" 
      alt="Infinity Aengines Logo" 
      width={122} 
      height={244}
      priority={size === "large"}
      className={size === "large" 
        ? "w-20 h-40 sm:w-24 sm:h-48 md:w-28 md:h-56 lg:w-32 lg:h-64 xl:w-[140px] xl:h-[280px] object-contain"
        : "w-8 h-16 sm:w-12 sm:h-24 md:w-16 md:h-32 lg:w-20 lg:h-40 xl:w-[122px] xl:h-[244px] object-contain"
      }
    />
  </picture>
)

const FashionFactorLogo = ({ size = "normal" }) => (
  <Image 
    src="/images/fashion-factor-logo.svg" 
    alt="Fashion Factor Logo" 
    width={104} 
    height={208}
    priority={size === "large"}
    className={size === "large" 
      ? "w-16 h-32 sm:w-20 sm:h-40 md:w-24 md:h-48 lg:w-28 lg:h-56 xl:w-[120px] xl:h-[240px] object-contain"
      : "w-8 h-16 sm:w-12 sm:h-24 md:w-16 md:h-32 lg:w-20 lg:h-40 xl:w-[104px] xl:h-[208px] object-contain"
    }
  />
)

// X separator component with responsive sizing
const XSeparator = ({ size = "normal" }) => (
  <div className={size === "large" 
    ? "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-[40px] xl:h-[40px]"
    : "flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-[34px] xl:h-[34px]"
  }>
    <svg className="w-full h-full" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 8.5L25.5 25.5M25.5 8.5L8.5 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

// Combined logo component matching Figma layout with proper X separator
const CombinedLogo = ({ size = "normal" }) => (
  <div className={size === "large" 
    ? "flex items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-[14px]"
    : "flex items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-[14px]"
  }>
    <InfinityAenginesLogo size={size} />
    <XSeparator size={size} />
    <FashionFactorLogo size={size} />
  </div>
)

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <section className="h-screen max-h-screen relative overflow-hidden">
      {/* Video Poster Image for Lazy Loading */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/video-poster.jpg')",
            minHeight: '100vh',
            maxHeight: '100vh'
          }}
        />
      )}

      {/* Background Video - Lazy Loaded */}
      {isClient && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
          style={{
            minHeight: '100vh',
            maxHeight: '100vh'
          }}
          poster="/images/video-poster.jpg"
        >
          <source src="/images/TODA_BG.mp4" type="video/mp4" />
        </video>
      )}

      {/* Video Overlay - Stronger for mobile readability */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/60 z-10"></div>

      {/* Subtle Grid Pattern Overlay - Mobile optimized */}
      <div className="absolute inset-0 z-20" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '15px 15px'
      }}></div>

      {/* Geometric Pattern Overlay - More subtle for mobile */}
      <div className="absolute inset-0 opacity-3 z-25">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Main container - Mobile first */}
      <div className="relative z-30 px-3 py-6 h-full flex flex-col justify-between max-w-md mx-auto sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        
        {/* Top section - Centered Combined Logo */}
        <div className="flex justify-center items-start pt-4">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <InfinityAenginesLogo size="large" />
            <XSeparator size="large" />
            <FashionFactorLogo size="large" />
          </div>
        </div>

        {/* Event Information Section */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Simple horizontal banner matching the screenshot exactly */}
          <div className="relative mb-6 max-w-4xl w-full">
            <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg shadow-lg">
              {/* Left section - White background with black text for date */}
              <div className="bg-white text-black px-8 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10 flex items-center justify-center min-w-[200px] sm:min-w-[300px] lg:min-w-[400px]">
                <div className="text-center">
                  <div className="font-euclid-square font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                    June 12-15
                  </div>
                </div>
              </div>
              
              {/* Right section - Black background with white text for venue */}
              <div className="bg-black text-white px-8 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10 flex items-center justify-center flex-1">
                <div className="text-center">
                  <div className="font-euclid-square font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                    The Agenda,<br />Dubai Media City
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="flex justify-center items-center gap-8 sm:gap-12 mb-6">
            {/* Live stream viewers */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <EyeIcon />
                <span 
                  className="font-noto text-white"
                  style={{ fontSize: 'var(--font-size-stat-number)', lineHeight: 'var(--line-height-stat-number)' }}
                >
                  250,000+
                </span>
              </div>
              <span 
                className="font-inter text-text-gray text-center"
                style={{ fontSize: 'var(--font-size-stat-label)', lineHeight: 'var(--line-height-stat-label)' }}
              >
                live stream viewers
              </span>
            </div>

            {/* Participants */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <UsersIcon />
                <span 
                  className="font-noto text-white"
                  style={{ fontSize: 'var(--font-size-stat-number)', lineHeight: 'var(--line-height-stat-number)' }}
                >
                  2,500+
                </span>
              </div>
              <span 
                className="font-inter text-text-gray text-center"
                style={{ fontSize: 'var(--font-size-stat-label)', lineHeight: 'var(--line-height-stat-label)' }}
              >
                Participants
              </span>
            </div>
          </div>
        </div>

        {/* Main content - Mobile centered */}
        <div className="flex flex-col items-center text-center flex-1 justify-center -mt-8">
          {/* Main heading - Using CSS variables for responsive typography */}
          <div className="mb-6">
            <h1 className="text-white leading-tight uppercase text-h1" style={{ fontFamily: 'var(--font-euclid)' }}>
              <div className="text-responsive-small font-normal mb-1">The</div>
              <div className="font-bold mb-1">Ultimate</div>
              <div className="font-bold mb-1">Innovation</div>
              <div className="font-bold">Show</div>
            </h1>
          </div>

          {/* Buttons with Email Links - Mobile optimized with proper touch targets */}
          <div className="flex flex-col w-full gap-3 mb-8 px-2 sm:flex-row sm:gap-4 sm:w-auto sm:mb-12 sm:px-0">
            <a 
              href="mailto:contact@infinityaengines.com?subject=Ticket Inquiry&body=Hi, I'm interested in getting tickets for the Infinity Ængines × Fashion Factor event. Please provide more information."
              className="btn-primary font-euclid-square text-center flex-shrink-0"
            >
              Buy Tickets
            </a>
            <a 
              href="mailto:contact@infinityaengines.com?subject=Sponsorship Inquiry&body=Hi, I'm interested in becoming a sponsor for the Infinity Ængines × Fashion Factor event. Please send me the sponsorship packages and details."
              className="btn-secondary font-euclid-square text-center flex-shrink-0"
            >
              View Sponsorship Packages
            </a>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="pb-4"></div>
      </div>
    </section>
  )
}