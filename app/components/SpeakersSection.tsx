'use client'

import React from 'react'
import Image from 'next/image'
import useScrollAnimation from '../hooks/useScrollAnimation'

const SpeakersSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>()
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  // Real speaker data from Figma design with WebP format
  const speakers = [
    {
      name: 'Brock Pierce',
      title: 'A visionary entrepreneur and philanthropist, Brock Pierce is renowned for founding USDT (Tether) and his influential role in blockchain innovation.',
      image: '/images/speakers/brock-pierce.webp',
      fallback: '/images/speakers/brock-pierce.jpg'
    },
    {
      name: 'Jonny Dodge',
      title: 'British F1, events, aviation & superyacht entrepreneur and founder of the Dodgeball Rally. He has been called the \'Superyacht Influencer\' in Forbes Magazine.',
      image: '/images/speakers/jonny-dodge.webp',
      fallback: '/images/speakers/jonny-dodge.jpg'
    },

    {
      name: 'Thomas Sherif',
      title: 'Founder of Fashion Factor',
      image: '/images/speakers/thomas-sherif.webp',
      fallback: '/images/speakers/thomas-sherif.jpg'
    },
    {
      name: 'Maher Al Kaabi',
      title: 'Co-Founder of Blink',
      image: '/images/speakers/maher-al-kaabi.webp',
      fallback: '/images/speakers/maher-al-kaabi.jpg'
    },

    {
      name: 'Dr Mohamed Alkindi',
      title: 'Former Minister Of Environment and Water, UAE',
      image: '/images/speakers/dr-mohamed-alkindi.webp',
      fallback: '/images/speakers/dr-mohamed-alkindi.jpg'
    },
    {
      name: 'Varuni Trivedi',
      title: 'Editor-in-chief at The Coin Republic',
      image: '/images/speakers/varuni-trivedi.webp',
      fallback: '/images/speakers/varuni-trivedi.jpg'
    },
    {
      name: 'Mariya Spartalis',
      title: 'Founder of Spartalis Capital',
      image: '/images/speakers/mariya-spartalis.webp',
      fallback: '/images/speakers/mariya-spartalis.jpg'
    },
    {
      name: 'Sam Singer',
      title: 'Co-Founder and CEO of Infinity Ængines',
      image: '/images/speakers/sam-singer.webp',
      fallback: '/images/speakers/sam-singer.jpg'
    },
    {
      name: 'Vít Jedlička',
      title: 'Founder and President of Liberland',
      image: '/images/speakers/vit-jedlicka.webp',
      fallback: '/images/speakers/vit-jedlicka.jpg'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className={`bg-black py-8 sm:py-12 lg:py-32 scroll-animate ${sectionVisible ? 'animate-in' : ''}`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col mb-6 sm:mb-8 lg:mb-12 scroll-animate-slide-left ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 
            className="text-white font-euclid-square font-light leading-tight mb-3 sm:mb-4 text-h2"
          >
            Previous Attendees and Speakers
          </h2>
          <div className="bg-[#3442AC] rounded-tr-xl rounded-br-xl px-3 py-1 self-start sm:px-4 sm:py-1.5 lg:px-8 lg:py-2">
            <span 
              className="text-white font-ibm-plex leading-tight text-h3"
            >
              world's best
            </span>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          ref={cardsRef}
          className={`overflow-x-auto scrollbar-hide scroll-animate-fade ${cardsVisible ? 'animate-in' : ''}`}
        >
          <div className="flex gap-4 sm:gap-6 pb-4" style={{ width: 'max-content' }}>
            {speakers.map((speaker, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] scroll-animate-stagger ${cardsVisible ? 'animate-in' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Speaker Card */}
                <div className="w-full flex flex-col gap-4 sm:gap-5">
                  {/* Speaker Image with Decorative Background - Increased height and fixed clipping */}
                  <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-2xl bg-[var(--color-image-bg)]">
                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 bg-[#4F7ACA]">
                      <div className="absolute top-0 right-0 w-[40px] h-[32px] sm:w-[50px] sm:h-[40px] lg:w-[62px] lg:h-[51px] bg-gray-300 opacity-30"></div>
                      <div className="absolute bottom-0 left-0 w-[40px] h-[32px] sm:w-[50px] sm:h-[40px] lg:w-[62px] lg:h-[51px] bg-gray-300 opacity-30"></div>
                    </div>
                    
                    {/* Speaker Image with WebP support - Fixed clipping with object-contain */}
                    <div className="relative w-full h-full p-2">
                      <picture>
                        <source srcSet={speaker.image} type="image/webp" />
                        <Image
                          src={speaker.fallback}
                          alt={speaker.name}
                          fill
                          className="object-contain object-center"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <h3 className="text-white font-euclid-square font-bold leading-tight text-lg sm:text-xl lg:text-2xl">
                      {speaker.name}
                    </h3>
                    <p 
                      className="text-white/50 font-euclid-square leading-relaxed text-sm sm:text-base"
                      style={{ 
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {speaker.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* "And more" card at the end */}
            <div 
              className={`flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] scroll-animate-stagger ${cardsVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${speakers.length * 0.1}s` }}
            >
              <div className="w-full h-[400px] sm:h-[440px] lg:h-[480px] border border-white/25 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center">
                <div className="text-center">
                  <h3 className="text-white font-euclid-square text-xl sm:text-2xl lg:text-3xl font-normal mb-3 sm:mb-4 opacity-50">
                    And more
                  </h3>
                  <p 
                    className="text-white/50 font-euclid-square leading-relaxed text-sm sm:text-base lg:text-lg"
                  >
                    Fashion, business, crypto, buyers, bloggers and celebrity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default SpeakersSection 