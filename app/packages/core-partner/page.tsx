'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CorePartnerPage() {
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
                {/* Main card with blue gradient background */}
                <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 lg:p-10 xl:p-12 shadow-2xl">
                  
                  {/* Top logos */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-xs text-blue-900 opacity-70">
                      <div>Infinity</div>
                      <div>AENGINES</div>
                    </div>
                    <div className="text-xs text-blue-900 opacity-70">
                      FASHION
                    </div>
                  </div>

                  {/* Package title */}
                  <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                      CORE<br />
                      PARTNER
                    </h1>
                  </div>

                  {/* Pricing */}
                  <div className="mb-12">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      AED 100 000
                    </div>
                    <div className="text-xl lg:text-2xl text-blue-100 opacity-80">
                      $ 27 300
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
                      5-Minute Stage Presence
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      A brief speaking opportunity or mention during a panel, highlighting your brand to attendees.
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
                      10 VIP Tickets
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Access to VIP areas, including lounges and priority seating, for your team or partners.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      3 Afterparty VIP Access Passes
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Join the elite at the exclusive afterparty, networking with influencers and celebrities.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      3 VIP lounge passes
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
                      Access to Affiliate & Model Celebrities
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Connect with influencers and models with a 1B+ follower reach for promotional and networking opportunities.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Product placement & shoots
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      1 professional photoshoot and 1 video reel featuring your products with influencers, optimized for social media impact.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Press Release & Media Coverage
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Mentions in event press releases and featured coverage in livestreams and media recaps.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Livestream Exposure
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Your logo and messaging highlighted during the event's global livestream, reaching a wide audience.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Logo Placement
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Prominent logo display on media walls, screens, website, and invitations for widespread brand visibility.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2x2m Booth
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      A premium booth in a strategic location to showcase your products or services.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Social media campaign
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      2 posts, 4 stories, and mentions across event social media channels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-12">
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Core Partner Package Inquiry&body=Hi, I'm interested in the Core Partner sponsorship package for the Infinity Ængines × Fashion Factor event. Please provide more information and next steps."
                  className="btn-primary font-euclid-square text-center inline-block"
                >
                  Contact for Core Partner Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 