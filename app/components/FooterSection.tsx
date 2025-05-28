'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'

const FooterSection = () => {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

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
    <>
      <footer className="bg-[#151412] text-[#FDF6E8] py-8 sm:py-12 lg:py-16">
        <div className="max-w-sm mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            
            {/* Logo and Event Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Image 
                    src="/images/infinity-aengines-logo.png" 
                    alt="Infinity Aengines Logo" 
                    width={40} 
                    height={80}
                    className="object-contain"
                  />
                  <span className="text-[#FDF6E8] text-lg">×</span>
                  <Image 
                    src="/images/fashion-factor-logo.svg" 
                    alt="Fashion Factor Logo" 
                    width={35} 
                    height={70}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[#FDF6E8] font-euclid-square font-bold text-lg lg:text-xl mb-2">
                  The Ultimate Innovation Show
                </h3>
                <p className="text-[#FDF6E8]/80 font-euclid-square text-sm lg:text-base">
                  📅 June 13-15, 2024 | 11am daily
                </p>
                <p className="text-[#FDF6E8]/80 font-euclid-square text-sm lg:text-base">
                  📍 The Agenda, Dubai Media City
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#FDF6E8] font-euclid-square font-bold text-base lg:text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://lu.ma/q7jwgx15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    🎫 Tickets
                  </a>
                </li>
                <li>
                  <a 
                    href="https://lu.ma/q7jwgx15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    🤝 Sponsorship
                  </a>
                </li>
                <li>
                  <a 
                    href="https://lu.ma/q7jwgx15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    🎤 Speaking Opportunities
                  </a>
                </li>
                <li>
                  <a 
                    href="https://lu.ma/q7jwgx15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    📋 Event Information
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[#FDF6E8] font-euclid-square font-bold text-base lg:text-lg mb-4">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:contact@infinityaengines.com"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    📧 contact@infinityaengines.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+971503379182"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    📞 +971 50 337 9182
                  </a>
                </li>
                <li>
                  <span className="block text-[#FDF6E8]/80 font-euclid-square text-sm lg:text-base">
                    📍 Dubai Media City, UAE
                  </span>
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h4 className="text-[#FDF6E8] font-euclid-square font-bold text-base lg:text-lg mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://explore.unyted.world/scene?id=4a6eefc0-3b92-11f0-bc79-02243b6f7d63"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    🌐 Metaverse Experience
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTerms(true)}
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base text-left"
                  >
                    📄 Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowPrivacy(true)}
                    className="block text-[#FDF6E8]/80 font-euclid-square hover:text-white transition-colors duration-300 text-sm lg:text-base text-left"
                  >
                    🔒 Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-[#FDF6E8]/20 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="text-center">
              <h4 className="text-[#FDF6E8] font-euclid-square font-bold text-base lg:text-lg mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center items-center gap-6">
                <a 
                  href="https://www.instagram.com/infinityaengines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/80 hover:text-white transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://www.linkedin.com/company/infinity-aengines/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/80 hover:text-white transition-colors duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a 
                  href="https://x.com/IAengines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDF6E8]/80 hover:text-white transition-colors duration-300"
                  aria-label="Follow us on X (Twitter)"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="border-t border-[#FDF6E8]/20 pt-6 sm:pt-8">
            <div className="text-center mb-4">
              <p className="text-[#FDF6E8]/60 font-euclid-square text-sm lg:text-base">
                Brought to you by
              </p>
              <p className="text-[#FDF6E8] font-euclid-square font-bold text-base lg:text-lg">
                FUTURE AND HAPPINESS EVENTS ORGANIZING LLC
              </p>
              <p className="text-[#FDF6E8]/60 font-euclid-square text-xs lg:text-sm">
                Registered in Dubai Mainland
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-[#FDF6E8]/20 pt-6 sm:pt-8">
            <div className="text-center">
              <p className="text-[#FDF6E8]/60 font-euclid-square text-xs lg:text-sm">
                © 2024 Infinity Ængines × Fashion Factor. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <div className="prose prose-sm max-w-none text-gray-700">
          <h3 className="text-lg font-bold mb-4">1. Event Participation</h3>
          <p className="mb-4">
            By purchasing tickets or participating in the Infinity Ængines × Fashion Factor event, you agree to comply with all event rules, regulations, and guidelines as established by the organizers.
          </p>

          <h3 className="text-lg font-bold mb-4">2. Ticket Terms</h3>
          <p className="mb-4">
            All ticket sales are final. Tickets are non-refundable and non-transferable unless explicitly stated otherwise. Event schedules, speakers, and activities are subject to change without notice.
          </p>

          <h3 className="text-lg font-bold mb-4">3. Code of Conduct</h3>
          <p className="mb-4">
            All attendees must maintain professional conduct throughout the event. Harassment, discrimination, or disruptive behavior will result in immediate removal from the event without refund.
          </p>

          <h3 className="text-lg font-bold mb-4">4. Intellectual Property</h3>
          <p className="mb-4">
            All content, presentations, and materials shared during the event are protected by intellectual property rights. Recording, reproduction, or distribution without explicit permission is prohibited.
          </p>

          <h3 className="text-lg font-bold mb-4">5. Liability</h3>
          <p className="mb-4">
            Future and Happiness Events Organizing LLC and event organizers are not liable for any personal injury, loss, or damage that may occur during the event. Attendees participate at their own risk.
          </p>

          <h3 className="text-lg font-bold mb-4">6. Photography and Media</h3>
          <p className="mb-4">
            By attending the event, you consent to being photographed, filmed, or recorded for promotional and marketing purposes. These materials may be used across various media channels.
          </p>

          <h3 className="text-lg font-bold mb-4">7. Force Majeure</h3>
          <p className="mb-4">
            The organizers reserve the right to cancel, postpone, or modify the event due to circumstances beyond their control, including but not limited to natural disasters, government regulations, or public health emergencies.
          </p>
        </div>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="prose prose-sm max-w-none text-gray-700">
          <h3 className="text-lg font-bold mb-4">1. Information We Collect</h3>
          <p className="mb-4">
            We collect personal information including name, email address, phone number, company details, and payment information when you register for the event or purchase tickets.
          </p>

          <h3 className="text-lg font-bold mb-4">2. How We Use Your Information</h3>
          <p className="mb-4">
            Your information is used to process ticket purchases, communicate event updates, provide customer support, and enhance your event experience. We may also use it for future event marketing with your consent.
          </p>

          <h3 className="text-lg font-bold mb-4">3. Information Sharing</h3>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. Information may be shared with trusted service providers who assist in event operations, subject to confidentiality agreements.
          </p>

          <h3 className="text-lg font-bold mb-4">4. Data Security</h3>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Payment information is processed through secure, encrypted channels.
          </p>

          <h3 className="text-lg font-bold mb-4">5. Cookies and Tracking</h3>
          <p className="mb-4">
            Our website uses cookies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
          </p>

          <h3 className="text-lg font-bold mb-4">6. Your Rights</h3>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or using unsubscribe links.
          </p>

          <h3 className="text-lg font-bold mb-4">7. Contact Information</h3>
          <p className="mb-4">
            For privacy-related questions or concerns, please contact us at contact@infinityaengines.com or +971 50 337 9182.
          </p>

          <h3 className="text-lg font-bold mb-4">8. Policy Updates</h3>
          <p className="mb-4">
            This privacy policy may be updated periodically. Changes will be posted on our website with the effective date. Continued use of our services constitutes acceptance of the updated policy.
          </p>
        </div>
      </Modal>
    </>
  )
}

export default FooterSection 