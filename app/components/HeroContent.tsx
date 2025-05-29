'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// SVG Icons
const EyeIcon = () => (
  <svg 
    width="39" 
    height="39" 
    viewBox="0 0 39 39"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[39px] lg:h-[39px]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<g clip-path="url(#clip0_323_6384)">
<path d="M2.125 19.876C2.125 19.876 8.625 6.87598 20 6.87598C31.375 6.87598 37.875 19.876 37.875 19.876C37.875 19.876 31.375 32.876 20 32.876C8.625 32.876 2.125 19.876 2.125 19.876Z" stroke="white" stroke-width="2.95455" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 24.751C22.6924 24.751 24.875 22.5684 24.875 19.876C24.875 17.1836 22.6924 15.001 20 15.001C17.3076 15.001 15.125 17.1836 15.125 19.876C15.125 22.5684 17.3076 24.751 20 24.751Z" stroke="white" stroke-width="2.95455" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_323_6384">
<rect width="39" height="39" fill="white" transform="translate(0.5 0.375)"/>
</clipPath>
</defs>
  </svg>
)

const UsersIcon = () => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 24 24" // (уточните viewBox из исходного SVG)
    fill="none"
    stroke="currentColor" // или явно задайте цвет, например stroke="#333"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[39px] lg:h-[39px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

// Logo components
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
        ? "h-[48px] w-auto object-contain"
        : "h-[32px] w-auto object-contain"
      }
    />
  </picture>
)

const FashionFactorLogo = ({ size = "normal" }) => (
  <Image 
    src="/images/fashion-factor-logo.svg" 
    alt="Fashion Factor Logo" 
    width={83} 
    height={83}
    priority={size === "large"}
    className={size === "large" 
      ? "w-[83px] h-[83px] object-contain"
      : "w-[62px] h-[62px] object-contain"
    }
  />
)

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

const HeroContent = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  const statNumberStyle = { 
    fontSize: 'var(--font-size-stat-number)', 
    lineHeight: 'var(--line-height-stat-number)' 
  };
  
  const statLabelStyle = { 
    fontSize: 'var(--font-size-stat-label)', 
    lineHeight: 'var(--line-height-stat-label)' 
  };

  return (
    <section className="h-screen max-h-screen relative overflow-hidden">
      {/* Video Background */}
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
    
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/60 z-10"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px'
        }}
      />
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-3 z-25">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
    
      {/* Main Content */}
      <div className="relative z-30 px-4 py-6 h-full flex flex-col justify-between max-w-sm mx-auto sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-16 w-full gap-2 sm:gap-0">
          <div className="flex items-center h-12 sm:h-full w-full sm:w-auto justify-center sm:justify-start">
            <InfinityAenginesLogo size="large" />
            <XSeparator size="large" />
            <FashionFactorLogo size="large" />
          </div>

          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 w-full sm:w-auto">
            <div className="flex h-12 border border-white rounded-sm overflow-hidden w-full sm:w-auto">
              <div className="bg-white text-black px-4 flex items-center min-w-[120px] h-full">
                <span className="font-euclid-square font-bold text-sm">June 12-15</span>
              </div>
              <div className="text-white px-4 flex items-center h-full flex-1">
                <span className="font-euclid-square font-bold text-xs leading-tight">
                  The Agenda,<br />Dubai Media City
                </span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content Section */}
        <main className="flex flex-col items-center text-center flex-1 justify-center -mt-8">
          <div className="mb-6">
            <h1 className="text-white leading-tight uppercase text-h1" style={{ fontFamily: 'var(--font-euclid)' }}>
              <div className="text-responsive-small font-normal mb-1">The</div>
              <div className="font-bold mb-1">Ultimate</div>
              <div className="font-bold mb-1">Innovation</div>
              <div className="font-bold">Show</div>
            </h1>
          </div>
    
          {/* CTA Buttons */}
          <div className="flex flex-col w-full gap-3 mb-8 sm:flex-row sm:gap-4 sm:w-auto sm:mb-12">
            <a 
              href="mailto:contact@infinityaengines.com?subject=Ticket Inquiry&body=Hi, I'm interested in getting tickets for the Infinity Ængines × Fashion Factor event. Please provide more information."
              className="btn-primary font-euclid-square text-center"
            >
              Buy Tickets
            </a>
            <a 
              href="mailto:contact@infinityaengines.com?subject=Sponsorship Inquiry&body=Hi, I'm interested in becoming a sponsor for the Infinity Ængines × Fashion Factor event. Please send me the sponsorship packages and details."
              className="btn-secondary font-euclid-square text-center"
            >
              Get sponsor
            </a>
          </div>
        </main>
        
        {/* Event Info Section */}
        <section className="flex flex-col items-center text-center mb-6">
          <div className="flex justify-center items-center gap-8 sm:gap-12 mb-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <EyeIcon />
                <span className="font-noto text-white" style={statNumberStyle}>
                  250,000+
                </span>
              </div>
              <span className="font-inter text-text-gray text-center" style={statLabelStyle}>
                live stream viewers
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <UsersIcon />
                <span className="font-noto text-white" style={statNumberStyle}>
                  2,500+
                </span>
              </div>
              <span className="font-inter text-text-gray text-center" style={statLabelStyle}>
                Participants
              </span>
            </div>
          </div>
        </section>
        
        <div className="pb-4"></div>
      </div>
    </section>
  )
}

export default HeroContent