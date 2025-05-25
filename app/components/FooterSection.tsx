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

  // Social Media Icons
  const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )

  const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )

  const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )

  const TelegramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )

  const YouTubeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )

  const TikTokIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )

  return (
    <footer className="bg-gradient-to-b from-[#0D0D14] to-[#1A1A1A] py-12 sm:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column - Branding & Event Info */}
          <div className="lg:col-span-5">
            {/* Combined Logos */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-[14px] mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] flex items-center justify-center">
                <Image
                  src="/images/infinity-aengines-logo.png"
                  alt="Infinity Aengines"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              
              <div className="flex items-center justify-center h-16 sm:h-20 lg:h-[100px]">
                <XSeparator />
              </div>
              
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] flex items-center justify-center">
                <Image
                  src="/images/fashion-factor-logo.svg"
                  alt="Fashion Factor"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Event Information */}
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-white font-euclid-square text-xl lg:text-2xl font-bold mb-4">
                The Ultimate Innovation Show
              </h3>
              <div className="space-y-2 text-[#FDF6E8]/80">
                <p className="font-euclid-square text-base lg:text-lg">
                  📅 June 12-15, 2024 | 11am daily
                </p>
                <p className="font-euclid-square text-sm lg:text-base leading-relaxed">
                  📍 Abdullah Omran Taryam St - corner Al Jaddi St<br />
                  Dubai Media City - Dubai
                </p>
                <p className="font-euclid-square text-sm lg:text-base">
                  👥 2,500+ Participants | 📺 250,000+ Live Viewers
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-euclid-square text-lg font-semibold mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center lg:justify-start gap-4">
                <a 
                  href="https://instagram.com/infinityaengines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://twitter.com/infinityaengines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Follow us on Twitter"
                >
                  <TwitterIcon />
                </a>
                <a 
                  href="https://linkedin.com/company/infinityaengines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Connect with us on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a 
                  href="https://t.me/infinityaengines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Join our Telegram"
                >
                  <TelegramIcon />
                </a>
                <a 
                  href="https://youtube.com/@infinityaengines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Subscribe to our YouTube"
                >
                  <YouTubeIcon />
                </a>
                <a 
                  href="https://tiktok.com/@infinityaengines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Follow us on TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns - Navigation */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Contact Section */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-euclid-square text-lg font-semibold mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@infinityaengines.com?subject=General Inquiry&body=Hi, I have a question about the Infinity Ængines × Fashion Factor event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  📧 Email Us
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=WhatsApp Contact Request&body=Hi, I would like to connect via WhatsApp regarding the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Resources Request&body=Hi, I would like to access resources related to the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  📚 Resources
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Press Inquiry&body=Hi, I'm from the media and would like to cover the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  📰 Press
                </a>
              </div>
            </div>

            {/* Partners Section */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-euclid-square text-lg font-semibold mb-6">
                Partners
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Partnership Inquiry&body=Hi, I'm interested in becoming a partner for the Infinity Ængines × Fashion Factor event. Please send me partnership details."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  🤝 Become a Partner
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Sponsorship Inquiry&body=Hi, I'm interested in sponsorship opportunities for the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  💼 Sponsorship
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Location Information&body=Hi, I would like more information about the event locations."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  📍 Locations
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Speaking Opportunity&body=Hi, I'm interested in speaking at the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  🎤 Speak
                </a>
              </div>
            </div>

            {/* Legal & Info Section */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-euclid-square text-lg font-semibold mb-6">
                Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Ticket Purchase Inquiry&body=Hi, I would like to purchase tickets for the Infinity Ængines × Fashion Factor event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  🎫 Tickets
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Terms of Service Request&body=Hi, I would like to review the Terms of Service for the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  📋 Terms of Service
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Privacy Policy Request&body=Hi, I would like to review the Privacy Policy for the event."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  🔒 Privacy Policy
                </a>
                <a 
                  href="mailto:contact@infinityaengines.com?subject=Event Schedule Request&body=Hi, I would like to see the detailed event schedule."
                  className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  📅 Schedule
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-[#FDF6E8]/60 font-euclid-square text-sm">
                © 2024 Infinity Ængines LLC. All rights reserved.
              </p>
              <p className="text-[#FDF6E8]/60 font-euclid-square text-xs mt-1">
                Empowering innovation through fashion and technology
              </p>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-[#FDF6E8]/60 font-euclid-square text-sm">
                Made with ❤️ in Dubai
              </p>
              <p className="text-[#FDF6E8]/60 font-euclid-square text-xs mt-1">
                Building the future of fashion technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection 