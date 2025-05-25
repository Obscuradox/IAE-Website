'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const SpeakersSection = () => {
  const [showAllSpeakers, setShowAllSpeakers] = useState(false)

  // Real speaker data from Figma design
  const speakers = [
    {
      name: 'Brock Pierce',
      title: 'A visionary entrepreneur and philanthropist, Brock Pierce is renowned for founding USDT (Tether) and his influential role in blockchain innovation.',
      image: '/images/speakers/brock-pierce.jpg'
    },
    {
      name: 'Jonny Dodge',
      title: 'British F1, events, aviation & superyacht entrepreneur and founder of the Dodgeball Rally. He has been called the \'Superyacht Influencer\' in Forbes Magazine.',
      image: '/images/speakers/jonny-dodge.jpg'
    },
    {
      name: 'Marwan Al Zarouni',
      title: 'A pioneer in blockchain adoption, Marwan leads the DBCC and DATF, driving the UAE\'s digital asset ecosystem.',
      image: '/images/speakers/marwan-al-zarouni.jpg'
    },
    {
      name: 'Thomas Sherif',
      title: 'Founder of Fashion Factor / Investor',
      image: '/images/speakers/thomas-sherif.jpg'
    },
    {
      name: 'Maher Al Kaabi',
      title: 'Co-Founder of Blink / Investor',
      image: '/images/speakers/maher-al-kaabi.jpg'
    },
    {
      name: 'Adel Al Awadhi',
      title: 'Founder of The Corporate Group / Investor',
      image: '/images/speakers/adel-al-awadhi.jpg'
    },
    {
      name: 'Dr Mohamed Alkindi',
      title: 'Former Minister Of Environment and Water, UAE / Investor',
      image: '/images/speakers/dr-mohamed-alkindi.jpg'
    },
    {
      name: 'Varuni Trivedi',
      title: 'Editor-in-chief at The Coin Republic',
      image: '/images/speakers/varuni-trivedi.jpg'
    },
    {
      name: 'Mariya Spartalis',
      title: 'Founder of Spartalis Capital / Investor',
      image: '/images/speakers/mariya-spartalis.jpg'
    },
    {
      name: 'Sam Singer',
      title: 'Co-Founder and CEO of Infinity Ængines',
      image: '/images/speakers/sam-singer.jpg'
    },
    {
      name: 'Vít Jedlička',
      title: 'Founder and President of Liberland',
      image: '/images/speakers/vit-jedlicka.jpg'
    }
  ]

  // For mobile, show first 6 speakers initially, then all when expanded
  const mobileSpeakersToShow = showAllSpeakers ? speakers : speakers.slice(0, 6)

  return (
    <section className="bg-black py-8 sm:py-12 lg:py-32">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Section Header - Mobile optimized */}
        <div className="flex flex-col mb-6 sm:mb-8">
          <h2 className="text-white font-euclid-square text-xl sm:text-2xl md:text-3xl lg:text-section-title-desktop font-light leading-tight mb-3 sm:mb-4">
            Previous Attendees and Speakers
          </h2>
          <div className="bg-[#3442AC] rounded-tr-xl rounded-br-xl px-3 py-1 self-start sm:px-4 sm:py-1.5 lg:px-8 lg:py-2">
            <span className="text-white font-ibm-plex text-sm sm:text-lg lg:text-[32px] leading-tight">
              world's best
            </span>
          </div>
        </div>

        {/* Mobile Layout - 2 columns grid with taller images - Mobile first */}
        <div className="grid grid-cols-2 gap-3 gap-y-4 sm:hidden">
          {mobileSpeakersToShow.map((speaker, index) => (
            <div key={`mobile-${index}`} className="flex-shrink-0">
              {/* Regular Speaker Card - Mobile with taller images */}
              <div className="w-full h-48 flex flex-col gap-2">
                {/* Speaker Image with Decorative Background - Taller for better face visibility */}
                <div className="relative w-full h-36 overflow-hidden rounded-lg">
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 bg-[#4F7ACA]">
                    <div className="absolute top-0 right-0 w-4 h-3 bg-gray-300 opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-3 bg-gray-300 opacity-30"></div>
                  </div>
                  
                  {/* Speaker Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-euclid-square text-[10px] font-bold leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-white/50 font-euclid-square text-[8px] leading-tight line-clamp-2">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Mobile only */}
        {!showAllSpeakers && (
          <div className="flex justify-center mt-6 sm:hidden">
            <button 
              onClick={() => setShowAllSpeakers(true)}
              className="bg-[#3442AC] text-white font-euclid-square text-sm px-6 py-3 rounded-lg hover:bg-[#2A3490] transition-colors"
            >
              View More Speakers
            </button>
          </div>
        )}

        {/* Tablet Layout - 3 columns grid */}
        <div className="hidden sm:grid md:hidden grid-cols-3 gap-4">
          {speakers.slice(0, 9).map((speaker, index) => (
            <div key={`tablet-${index}`} className="flex-shrink-0">
              {/* Regular Speaker Card - Tablet */}
              <div className="w-full h-48 flex flex-col gap-3">
                {/* Speaker Image with Decorative Background */}
                <div className="relative w-full h-32 overflow-hidden rounded-xl">
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 bg-[#4F7ACA]">
                    <div className="absolute top-0 right-0 w-6 h-5 bg-gray-300 opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-5 bg-gray-300 opacity-30"></div>
                  </div>
                  
                  {/* Speaker Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-euclid-square text-xs font-bold leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-white/50 font-euclid-square text-[10px] leading-tight line-clamp-3">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal Scrolling as original */}
        <div className="hidden md:block overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {[...speakers, {
              name: 'And more',
              title: 'Fashion, business, crypto, byers, bloggers and celebrity',
              image: null,
              isViewAll: true
            }].map((speaker, index) => (
              <div key={`desktop-${index}`} className="flex-shrink-0 w-[236px]">
                {(speaker as any).isViewAll ? (
                  // View All Card
                  <div className="w-full h-[426px] border border-white/25 rounded-3xl p-[18px] flex flex-col justify-center items-center">
                    <div className="text-center">
                      <h3 className="text-white font-euclid-square text-2xl font-normal mb-2 opacity-50">
                        {speaker.name}
                      </h3>
                      <p className="text-white/50 font-euclid-square text-sm leading-[1.25]">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Regular Speaker Card
                  <div className="w-full h-[426px] flex flex-col gap-5">
                    {/* Speaker Image with Decorative Background */}
                    <div className="relative w-full h-[236px] overflow-hidden">
                      {/* Decorative Background Pattern */}
                      <div className="absolute inset-0 bg-[#4F7ACA]">
                        <div className="absolute top-0 right-0 w-[62px] h-[51px] bg-gray-300 opacity-30"></div>
                        <div className="absolute bottom-0 left-0 w-[62px] h-[51px] bg-gray-300 opacity-30"></div>
                      </div>
                      
                      {/* Speaker Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Speaker Info */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white font-euclid-square text-lg font-bold leading-[1.27]">
                        {speaker.name}
                      </h3>
                      <p className="text-white/50 font-euclid-square text-sm leading-[1.25]">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection 