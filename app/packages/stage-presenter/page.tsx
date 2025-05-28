'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function StagePresenterPage() {
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
            
            {/* Left side - Package Info and Application */}
            <div className="space-y-8">
              {/* Combined logos at top */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-sm text-white opacity-70">
                  <div>Infinity</div>
                  <div>AENGINES</div>
                </div>
                <div className="text-white text-2xl">×</div>
                <div className="text-sm text-white opacity-70">
                  FASHION<br />FACTOR
                </div>
              </div>

              {/* Main title and pricing */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  STAGE PRESENTER<br />
                  PACKAGE
                </h1>
                
                {/* Pricing boxes */}
                <div className="space-y-2 mb-8">
                  <div className="bg-white text-black px-4 py-2 rounded inline-block font-bold text-xl">
                    AED 35 000
                  </div>
                  <div className="bg-gray-600 text-white px-4 py-2 rounded inline-block font-bold text-lg ml-2">
                    $ 9 600
                  </div>
                </div>
              </div>

              {/* How to Apply Card */}
              <div className="bg-white text-black rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                  HOW TO APPLY?
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-red-600 font-bold text-lg mb-2">
                      Deadline May 30, 2025
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Send your pitch</h3>
                    <p className="text-gray-700">contact@infinityaengines.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Any questions?</h3>
                    <p className="text-gray-700">+971 50 337 9182</p>
                    <p className="text-gray-700">contact@infinityaengines.com</p>
                  </div>
                  
                  <div className="text-gray-500 italic">
                    Apply now to gain global exposure and drive growth with Infinity Ængines!
                  </div>
                </div>
              </div>

              {/* Commission Structure */}
              <div className="bg-white text-black rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  COMMISSION STRUCTURE
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Infinity Ængines will receive a 5% commission on any sales, 
                  investments, or monetizations resulting from your presentation, 
                  taken in equity or cash based on the situation.
                </p>
              </div>
            </div>

            {/* Right side - Package Features */}
            <div className="lg:pl-8">
              {/* Main description */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                  Showcase Your Company at the Infinity Ængines Event, June 13-15, 2025, The Agenda, Dubai
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Secure one of 10 exclusive spots to present on stage at our global event. 
                  This package offers unmatched exposure to innovators and investors.
                </p>
              </div>

              {/* Added Benefits Section */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  ADDED BENEFITS
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      3 VIP Tickets
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Access to VIP areas with priority seating
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2 Afterparty VIP Access Passes
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Network at our exclusive afterparty.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      1 Influencer Photoshoot
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Professional shoot with an influencer (1B+ follower reach) for social media.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Logo Placement
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      On event screens, website, and select materials.
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Social Media Highlight
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      1 post and 2 stories on our channels.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Metaverse Access
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base">
                      1-month access to our Spaceship hub for virtual networking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-12">
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Stage Presenter Package Application&body=Hi, I'm interested in applying for the Stage Presenter Package for the Infinity Ængines × Fashion Factor event. Please find my pitch attached and let me know the next steps."
                  className="btn-primary font-euclid-square text-center inline-flex items-center justify-center"
                >
                  <span>Reserve Your Spot!</span>
                  <svg className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 