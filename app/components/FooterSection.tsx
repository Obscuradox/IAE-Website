'use client'

import React from 'react'
import Image from 'next/image'

const FooterSection = () => {
  // X separator component
  const XSeparator = () => (
    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <footer className="bg-[#0D0D14] py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0 min-h-[180px] lg:h-[244px]">
          {/* Top/Left side - Combined logos - Mobile optimized */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-[14px]">
            {/* Infinity Aengines Logo */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[122px] lg:h-[122px] flex items-center justify-center">
              <Image
                src="/images/infinity-aengines-logo.png"
                alt="Infinity Aengines"
                width={122}
                height={122}
                className="object-contain"
              />
            </div>
            
            {/* X Separator */}
            <div className="flex items-center justify-center h-12 sm:h-16 md:h-20 lg:h-[122px]">
              <XSeparator />
            </div>
            
            {/* Fashion Factor Logo */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[122px] lg:h-[122px] flex items-center justify-center">
              <Image
                src="/images/fashion-factor-logo.svg"
                alt="Fashion Factor"
                width={122}
                height={122}
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom/Right side - Navigation sections - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-4 lg:flex-1 lg:justify-end">
            {/* Contact Section */}
            <div className="flex flex-col gap-2 lg:gap-[15px] lg:w-[194px]">
              <h3 className="text-white font-golos text-base sm:text-lg lg:text-2xl leading-tight font-normal">
                Contact
              </h3>
              <div className="flex flex-col gap-1 lg:gap-[15px]">
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Mail
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Whatsapp
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Resources
                </button>
              </div>
            </div>

            {/* Partners Section */}
            <div className="flex flex-col gap-2 lg:gap-[15px] lg:w-[194px]">
              <h3 className="text-white font-golos text-base sm:text-lg lg:text-2xl leading-tight font-normal">
                Partners
              </h3>
              <div className="flex flex-col gap-1 lg:gap-[15px]">
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Get partners
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Locations
                </button>
              </div>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col gap-2 lg:gap-[15px] lg:w-[194px]">
              <h3 className="text-white font-golos text-base sm:text-lg lg:text-2xl leading-tight font-normal">
                Legal
              </h3>
              <div className="flex flex-col gap-1 lg:gap-[15px]">
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  ToS
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight text-left hover:text-white transition-colors">
                  Tickets
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with divider and LLC - Mobile optimized */}
        <div className="flex flex-col gap-2 lg:gap-3 mt-4 lg:mt-8">
          <div className="w-full h-px bg-white"></div>
          <p className="text-white font-golos text-xs sm:text-sm lg:text-base leading-tight">
            LLC
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection 