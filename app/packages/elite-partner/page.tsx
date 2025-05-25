'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ElitePartnerPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Spaceship-themed star animation background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Header with back navigation */}
      <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <Link 
          href="/#packages" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Packages
        </Link>
      </header>

      {/* Main content */}
      <div className="relative z-10 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            
            {/* Left side - Package Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Main card with gradient background */}
                <div className="relative bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-8 lg:p-10 xl:p-12 shadow-2xl">
                  
                  {/* Top logos */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-xs text-purple-900 opacity-70">
                      <div>Infinity</div>
                      <div>AENGINES</div>
                    </div>
                    <div className="text-xs text-purple-900 opacity-70">
                      FASHION
                    </div>
                  </div>

                  {/* Package title */}
                  <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                      ELITE<br />
                      PARTNER
                    </h1>
                  </div>

                  {/* Pricing */}
                  <div className="mb-12">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      AED 750 000
                    </div>
                    <div className="text-xl lg:text-2xl text-purple-100 opacity-80">
                      $ 205 000
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-20 bg-white rounded-full opacity-30"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full opacity-20"></div>
                  <div className="absolute bottom-12 left-4 w-4 h-4 bg-white rounded-full opacity-25"></div>
                </div>
              </div>
            </div>

            {/* Right side - Package Features */}
            <div className="lg:pl-8">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                  PACKAGE FEATURE
                </h2>
              </div>

              {/* Speeches Section */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Speeches
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      20min Keynote speech
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Showcasing your brand's leadership to industry leaders, celebrities & influencers.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Custom-themed keynote or panel
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Co-create a branded stage experience with interactive elements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tickets / Passes Section */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Tickets / Passes
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      50 VIP tickets
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Access to premium areas, lounges & priority seating for your team or partners.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      15 afterparty VIP passes
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Entry to exclusive lounge with influencers & high-profile guests.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      15 VIP lounge passes
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Exclusive networking in a luxurious branded lounge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Promotions Section */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Promotions
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      VIP booth for 15
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      fully branded, premium bottle service & staff for top-tier guest experience.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Premium 5×5m booth
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      High-traffic zone to showcase your brand with full customization.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Celebrity meet-and-greet
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Entry to exclusive lounge with influencers & high-profile guests.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Product placement & shoots
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      3 pro photoshoots + 2 video reels with top influencers for socials.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Press & media coverage
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Featured in global press releases, livestreams & post-event recaps.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Livestream exposure
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Brand shoutouts & logo during global broadcast moments brand shoutouts & logo during global broadcast moments.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Logo placement
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Dominant presence across all event media, merch & digital assets.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Social media campaign
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      8 posts, 15 stories, 2 live streams + featured event webpage.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Branded activation
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Design a custom interactive space to engage attendees
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-12">
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Elite Partner Package Inquiry&body=Hi, I'm interested in the Elite Partner sponsorship package for the Infinity Ængines × Fashion Factor event. Please provide more information and next steps."
                  className="btn-primary font-euclid-square text-center inline-block"
                >
                  Contact for Elite Partner Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 