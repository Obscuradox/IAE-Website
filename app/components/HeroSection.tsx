'use client'

import React from 'react'
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

// Logo components using actual downloaded logos with proper proportions
const InfinityAenginesLogo = ({ size = "normal" }) => (
  <Image 
    src="/images/infinity-aengines-logo.png" 
    alt="Infinity Aengines Logo" 
    width={122} 
    height={122}
    className={size === "large" 
      ? "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-[122px] xl:h-[122px] object-contain"
      : "w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[122px] xl:h-[122px] object-contain"
    }
  />
)

const FashionFactorLogo = ({ size = "normal" }) => (
  <Image 
    src="/images/fashion-factor-logo.svg" 
    alt="Fashion Factor Logo" 
    width={104} 
    height={104}
    className={size === "large" 
      ? "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-[104px] xl:h-[104px] object-contain"
      : "w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[104px] xl:h-[104px] object-contain"
    }
  />
)

// X separator component with responsive sizing
const XSeparator = ({ size = "normal" }) => (
  <div className={size === "large" 
    ? "flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-[34px] xl:h-[34px]"
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
  return (
    <section className="h-screen max-h-screen relative overflow-hidden">
      {/* Background Video - Mobile optimized */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          minHeight: '100vh',
          maxHeight: '100vh'
        }}
      >
        <source src="/images/TODA_BG.mp4" type="video/mp4" />
      </video>

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
      <div className="relative z-30 px-4 py-4 h-full flex flex-col justify-between max-w-sm mx-auto sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Top navigation bar - Mobile optimized - Only info box now */}
        <div className="flex justify-end items-center pt-2">
          {/* Right side - Info box - Mobile optimized */}
          <div className="flex items-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2">
            <div className="text-light-cream">
              <div className="text-[10px] sm:text-xs font-medium">June 12-15</div>
              <div className="text-[8px] sm:text-[10px] opacity-80">Dubai Media City</div>
            </div>
          </div>
        </div>

        {/* Main content - Mobile centered */}
        <div className="flex flex-col items-center text-center flex-1 justify-center -mt-8">
          {/* Combined Logo - Now prominently displayed above heading */}
          <div className="mb-6 sm:mb-8">
            <CombinedLogo size="large" />
          </div>

          {/* Main heading - Mobile optimized */}
          <div className="mb-6">
            <h1 className="font-euclid text-white leading-tight uppercase">
              <div className="text-sm sm:text-lg lg:text-hero-sub font-normal mb-1">The</div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero-main font-bold mb-1">Ultimate</div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero-main font-bold mb-1">innovation</div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero-main font-bold">Show</div>
            </h1>
          </div>

          {/* Buttons - Mobile optimized */}
          <div className="flex flex-col w-full gap-3 mb-8 sm:flex-row sm:gap-4 sm:w-auto sm:mb-12">
            <button className="bg-primary-blue text-white font-euclid-square text-sm sm:text-base lg:text-button leading-button px-6 py-3 sm:px-8 sm:py-3 lg:px-16 lg:py-5 rounded-lg hover:bg-blue-700 transition-colors">
              Buy tickets
            </button>
            <button className="border border-white text-white font-euclid-square text-sm sm:text-base lg:text-button leading-button px-6 py-3 sm:px-8 sm:py-3 lg:px-16 lg:py-5 rounded-lg hover:bg-white/10 transition-colors">
              Get sponsor
            </button>
          </div>
        </div>

        {/* Statistics - Mobile bottom */}
        <div className="flex justify-center items-center gap-8 pb-4 sm:gap-12">
          {/* Live stream viewers */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <EyeIcon />
              <span className="font-noto text-base sm:text-lg lg:text-stat-number leading-stat-number text-white">
                250 000+
              </span>
            </div>
            <span className="font-inter text-xs sm:text-sm lg:text-stat-label leading-stat-label text-text-gray text-center">
              live stream viewers
            </span>
          </div>

          {/* Participants */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <UsersIcon />
              <span className="font-noto text-base sm:text-lg lg:text-stat-number leading-stat-number text-white">
                2500+
              </span>
            </div>
            <span className="font-inter text-xs sm:text-sm lg:text-stat-label leading-stat-label text-text-gray text-center">
              Participants
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}