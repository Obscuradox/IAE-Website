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
    className="w-[39px] h-[39px]"
  />
)

const UsersIcon = () => (
  <Image 
    src="/images/users-icon.svg" 
    alt="Users icon" 
    width={39} 
    height={39}
    className="w-[39px] h-[39px]"
  />
)

// Logo components using actual downloaded logos with proper proportions
const InfinityAenginesLogo = () => (
  <Image 
    src="/images/infinity-aengines-logo.png" 
    alt="Infinity Aengines Logo" 
    width={122} 
    height={122}
    className="w-[122px] h-[122px] object-contain"
  />
)

const FashionFactorLogo = () => (
  <Image 
    src="/images/fashion-factor-logo.svg" 
    alt="Fashion Factor Logo" 
    width={104} 
    height={104}
    className="w-[104px] h-[104px] object-contain"
  />
)

// X separator component
const XSeparator = () => (
  <div className="flex items-center justify-center w-[34px] h-[34px]">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 8.5L25.5 25.5M25.5 8.5L8.5 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

// Combined logo component matching Figma layout with proper X separator
const CombinedLogo = () => (
  <div className="flex items-center gap-[14px]">
    <InfinityAenginesLogo />
    <XSeparator />
    <FashionFactorLogo />
  </div>
)

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/TODA_BG.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay - Darker for better CTA visibility */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 z-20" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Geometric Pattern Overlay - More subtle */}
      <div className="absolute inset-0 opacity-5 z-25">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Main container */}
      <div className="relative z-30 px-6 py-6 max-w-7xl mx-auto">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center mb-28">
          {/* Left side - Logo */}
          <div className="flex items-center gap-3">
            <CombinedLogo />
          </div>

          {/* Right side - Info box */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm border border-light-cream rounded-lg px-4 py-3">
            <div className="text-light-cream">
              <div className="text-sm font-medium">June 12-15</div>
              <div className="text-xs opacity-80">The Agenda, Dubai Media City</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <CombinedLogo />
            </div>
            
            <h1 className="font-euclid text-white leading-hero-main uppercase">
              <div className="text-hero-sub font-normal mb-2">The</div>
              <div className="text-hero-main font-bold mb-2">Ultimate</div>
              <div className="text-hero-main font-bold mb-2">innovation</div>
              <div className="text-hero-main font-bold">Show</div>
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mb-28">
            <button className="bg-primary-blue text-white font-euclid-square text-button leading-button px-16 py-5 rounded-lg hover:bg-blue-700 transition-colors">
              Buy tickets
            </button>
            <button className="border border-white text-white font-euclid-square text-button leading-button px-16 py-5 rounded-lg hover:bg-white/10 transition-colors">
              Get sponsor
            </button>
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-14">
            {/* Live stream viewers */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-6 mb-2">
                <EyeIcon />
                <span className="font-noto text-stat-number leading-stat-number text-white">
                  250 000+
                </span>
              </div>
              <span className="font-inter text-stat-label leading-stat-label text-text-gray">
                live stream viewers
              </span>
            </div>

            {/* Participants */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-6 mb-2">
                <UsersIcon />
                <span className="font-noto text-stat-number leading-stat-number text-white">
                  2500+
                </span>
              </div>
              <span className="font-inter text-stat-label leading-stat-label text-text-gray">
                Participants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 