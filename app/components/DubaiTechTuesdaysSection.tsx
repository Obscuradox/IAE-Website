'use client'

import React from 'react'
import Image from 'next/image'

const DubaiTechTuesdaysSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Tech-style background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Circuit board inspired lines */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-blue-400/30" />
          </svg>
        </div>
        {/* Animated tech dots */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-sm mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-white font-euclid-square font-light leading-tight mb-4 text-h2">
            Dubai Tech Tuesdays Pre-Launch Party
          </h2>
          <p className="text-white/80 font-euclid-square leading-tight text-responsive-body mb-2">
            Our 49th Dubai Tech Tuesdays event - Where innovation meets influence
          </p>
          <div className="text-blue-400 font-euclid-square font-bold text-xl sm:text-2xl lg:text-3xl">
            *** PLEASE MAKE SURE YOU REGISTER FOR EASIER ACCESS ***
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Event Flyer */}
          <div className="space-y-6">
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-900 border border-blue-500/30 flex items-center justify-center">
              <Image
                src="/images/temp/FLYER.jpeg"
                alt="Dubai Tech Tuesdays Pre-Launch Party Flyer"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            
                         {/* Register Button - Mobile/Tablet */}
             <div className="lg:hidden">
               <a 
                 href="https://lu.ma/DubaiTechTues49"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-primary font-euclid-square text-center w-full"
               >
                 REGISTER NOW
               </a>
             </div>
          </div>

          {/* Right Side - Event Details */}
          <div className="space-y-6">
            {/* Event Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <h3 className="text-white font-euclid-square font-bold text-xl sm:text-2xl">
                  Tech Innovation & Networking
                </h3>
              </div>
              
              <div className="space-y-3 text-white/80 font-euclid-square">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">📅</span>
                  <div>
                    <div className="font-medium">Tuesday, June 10, 2025</div>
                    <div className="text-sm opacity-70">6:00 PM - 11:30 PM</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">🎭</span>
                  <div>
                    <div className="font-medium">BELCANTO RESTAURANT</div>
                    <div className="text-sm opacity-70">At The Dubai Opera</div>
                  </div>
                </div>
                
                                 <div className="flex items-start gap-3">
                   <span className="text-blue-400 text-lg">🍹</span>
                   <div>
                     <div className="font-medium">Food & Drink Packages</div>
                     <div className="text-xs sm:text-sm opacity-70 leading-relaxed">
                       250 AED (3 drinks + Casa Focaccia)<br className="sm:hidden" />
                       <span className="hidden sm:inline"> or </span>
                       <span className="sm:hidden">OR </span>150 AED (3 drinks only)
                     </div>
                     <div className="text-xs sm:text-sm text-green-400 font-medium">Women enter FREE!</div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-euclid-square font-bold text-lg mb-4">
                Featured Speakers (7:30 - 8:30 PM)
              </h4>
                             <div className="space-y-3 text-white/80 font-euclid-square text-xs sm:text-sm">
                 <div>
                   <div className="font-semibold text-blue-300 text-sm sm:text-base">FARSH FALLAH</div>
                   <div className="text-xs opacity-70 leading-relaxed">COO of Serenity • 15+ years at Apple, Unity, Samsung<br className="sm:hidden" /><span className="hidden sm:inline"> • </span><span className="sm:hidden">Gaming & Web3 expert</span><span className="hidden sm:inline">Gaming & Web3 expert</span></div>
                 </div>
                 <div>
                   <div className="font-semibold text-purple-300 text-sm sm:text-base">SAM SINGER & HATIMA TITOVA</div>
                   <div className="text-xs opacity-70 leading-relaxed">Infinity Ængines founders<br className="sm:hidden" /><span className="hidden sm:inline"> • </span><span className="sm:hidden">AI-driven business matching platform</span><span className="hidden sm:inline">AI-driven business matching platform</span></div>
                 </div>
                 <div>
                   <div className="font-semibold text-cyan-300 text-sm sm:text-base">THOMAS SHERIF</div>
                   <div className="text-xs opacity-70 leading-relaxed">CEO Fashion Factor<br className="sm:hidden" /><span className="hidden sm:inline"> • </span><span className="sm:hidden">Middle East's signature fashion-competition platform</span><span className="hidden sm:inline">Middle East's signature fashion-competition platform</span></div>
                 </div>
               </div>
            </div>

            {/* Event Partners */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-euclid-square font-bold text-lg mb-4">
                Event Partners
              </h4>
                             <div className="space-y-2 text-white/80 font-euclid-square text-xs sm:text-sm">
                 <div className="flex items-start gap-2">
                   <span className="text-blue-400 mt-0.5">•</span>
                   <span><strong>LUNA PR</strong> - Award-winning PR & communications agency</span>
                 </div>
                 <div className="flex items-start gap-2">
                   <span className="text-purple-400 mt-0.5">•</span>
                   <span><strong>INFINITY ÆNGINES</strong> - AI-powered networking platform</span>
                 </div>
                 <div className="flex items-start gap-2">
                   <span className="text-cyan-400 mt-0.5">•</span>
                   <span><strong>CHESS ARTS CLUB</strong> - Intellectual gaming experience</span>
                 </div>
               </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-euclid-square font-bold text-lg mb-4">
                What to Expect
              </h4>
                             <ul className="space-y-2 text-white/80 font-euclid-square text-xs sm:text-sm">
                 <li className="flex items-start gap-2">
                   <span className="text-blue-400 mt-0.5">•</span>
                   <span>6:00-7:30 PM: Networking & Chess tournaments</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-purple-400 mt-0.5">•</span>
                   <span>7:30-8:30 PM: Expert talks on AI, Web3, and fashion tech</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-cyan-400 mt-0.5">•</span>
                   <span>Premium Japanese cuisine and signature cocktails</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-green-400 mt-0.5">•</span>
                   <span>Connect with tech innovators and industry leaders</span>
                 </li>
               </ul>
            </div>

                         {/* Register Button - Desktop */}
             <div className="hidden lg:block pt-4">
               <a 
                 href="https://lu.ma/DubaiTechTues49"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-primary font-euclid-square text-center"
               >
                 REGISTER NOW
               </a>
             </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 font-euclid-square text-sm">
            Join us for an evening where technology meets networking in Dubai's most prestigious venue.
            <br className="hidden sm:block" />
            Limited spaces available - register early to secure your spot!
          </p>
        </div>
      </div>
    </section>
  )
}

export default DubaiTechTuesdaysSection 