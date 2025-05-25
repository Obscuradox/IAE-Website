'use client'

import React from 'react'
import Image from 'next/image'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ActivitiesSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>()
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  // Activity data with WebP format and fallbacks
  const activities = [
    { 
      name: 'Afterparty', 
      image: '/images/activities/afterparty.webp',
      fallback: '/images/activities/afterparty.jpg'
    },
    { 
      name: 'Dance Performance', 
      image: '/images/activities/dance-performance.webp',
      fallback: '/images/activities/dance-performance.jpg'
    },
    { 
      name: 'Digital Metaverse', 
      image: '/images/activities/digital-metaverse.webp',
      fallback: '/images/activities/digital-metaverse.jpg'
    },
    { 
      name: 'Keynote Speech', 
      image: '/images/activities/keynote-speech.webp',
      fallback: '/images/activities/keynote-speech.jpg'
    },
    { 
      name: 'Audience Voting', 
      image: '/images/activities/audience-voting.webp',
      fallback: '/images/activities/audience-voting.jpg'
    },
    { 
      name: 'Workshops', 
      image: '/images/activities/workshops.webp',
      fallback: '/images/activities/workshops.jpg'
    },
    { 
      name: 'Runway Show', 
      image: '/images/activities/runway-show.webp',
      fallback: '/images/activities/runway-show.jpg'
    },
    { 
      name: 'Lunch & Dinners', 
      image: '/images/activities/lunch-dinners.webp',
      fallback: '/images/activities/lunch-dinners.jpg'
    },
    { 
      name: 'Panels', 
      image: '/images/activities/panels.webp',
      fallback: '/images/activities/panels.jpg'
    },
    { 
      name: 'Innovators Pitches', 
      image: '/images/activities/innovators-pitches.webp',
      fallback: '/images/activities/innovators-pitches.jpg'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className={`bg-black py-8 sm:py-12 lg:py-16 scroll-animate ${sectionVisible ? 'animate-in' : ''}`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Section Title with responsive typography */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate-slide-left ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 
            className="text-white font-euclid-square font-light leading-tight text-h2"
          >
            Activities
          </h2>
        </div>

        {/* Activities Grid with consistent 1rem gap */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 scroll-animate-fade ${gridVisible ? 'animate-in' : ''}`}
        >
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={`relative group scroll-animate-stagger ${gridVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Activity Image with WebP support */}
              <div className="relative w-full h-32 sm:h-40 lg:h-48 xl:h-56 overflow-hidden rounded-2xl bg-[var(--color-image-bg)]">
                <picture>
                  <source srcSet={activity.image} type="image/webp" />
                  <Image
                    src={activity.fallback}
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </picture>
                
                {/* Overlay with activity name */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-3 sm:p-4">
                  <h3 className="text-white font-euclid-square font-medium leading-tight text-xs sm:text-sm lg:text-base">
                    {activity.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection 