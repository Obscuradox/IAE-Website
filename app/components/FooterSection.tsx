'use client'

import React from 'react'
import Image from 'next/image'

const FooterSection = () => {
  // X separator component
  const XSeparator = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <footer className="bg-[#0D0D14] py-16">
      <div className="w-full px-[248px]">
        <div className="flex justify-between items-center h-[244px]">
          {/* Left side - Combined logos without black box */}
          <div className="flex items-center gap-[14px]">
            {/* Infinity Aengines Logo */}
            <div className="relative w-[122px] h-[122px] flex items-center justify-center">
              <Image
                src="/images/infinity-aengines-logo.png"
                alt="Infinity Aengines"
                width={122}
                height={122}
                className="object-contain"
              />
            </div>
            
            {/* X Separator */}
            <div className="flex items-center justify-center h-[122px]">
              <XSeparator />
            </div>
            
            {/* Fashion Factor Logo */}
            <div className="relative w-[122px] h-[122px] flex items-center justify-center">
              <Image
                src="/images/fashion-factor-logo.svg"
                alt="Fashion Factor"
                width={122}
                height={122}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Navigation sections */}
          <div className="flex gap-4 flex-1 justify-end">
            {/* Contact Section */}
            <div className="flex flex-col gap-[15px] w-[194px]">
              <h3 className="text-white font-golos text-2xl leading-[1.2] font-normal">
                Contact
              </h3>
              <div className="flex flex-col gap-[15px]">
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Mail
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Whatsapp
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Resources
                </button>
              </div>
            </div>

            {/* Partners Section */}
            <div className="flex flex-col gap-[15px] w-[194px]">
              <h3 className="text-white font-golos text-2xl leading-[1.2] font-normal">
                Partners
              </h3>
              <div className="flex flex-col gap-[15px]">
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Get partners
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Locations
                </button>
              </div>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col gap-[15px] w-[194px]">
              <h3 className="text-white font-golos text-2xl leading-[1.2] font-normal">
                Legal
              </h3>
              <div className="flex flex-col gap-[15px]">
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  ToS
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="text-[#FDF6E8] font-euclid-square text-base leading-[1.268] text-left hover:text-white transition-colors">
                  Tickets
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with divider and LLC */}
        <div className="flex flex-col gap-3 mt-8">
          <div className="w-full h-px bg-white"></div>
          <p className="text-white font-golos text-base leading-[1.25]">
            LLC
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection 