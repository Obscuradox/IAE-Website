'use client'

import React from 'react'
import Image from 'next/image'

const SpeakersSection = () => {
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
    },
    {
      name: 'And more',
      title: 'Fashion, business, crypto, byers, bloggers and celebrity',
      image: null,
      isViewAll: true
    }
  ]

  return (
    <section className="bg-black py-32">
      <div className="w-full px-[248px]">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-white font-euclid-square text-[96px] font-light leading-[1.25]">
            Previous Attendees and Speakers
          </h2>
          <div className="bg-[#3442AC] rounded-tl-none rounded-tr-4xl rounded-bl-none rounded-br-4xl px-8 py-2">
            <span className="text-white font-ibm-plex text-[32px] leading-[1em]">
              world's best
            </span>
          </div>
        </div>

        {/* Horizontal Scrolling Speaker Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {speakers.map((speaker, index) => (
              <div key={index} className="flex-shrink-0 w-[236px]">
                {speaker.isViewAll ? (
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