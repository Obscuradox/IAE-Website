'use client'

import React from 'react'
import Image from 'next/image'

const ActivitiesSection = () => {
  const activities = [
    { name: 'Innovators pitches', image: '/images/activities/innovators-pitches.jpg' },
    { name: 'Panels', image: '/images/activities/panels.jpg' },
    { name: 'Lunchs & dinners', image: '/images/activities/lunch-dinners.jpg' },
    { name: 'Runway show', image: '/images/activities/runway-show.jpg' },
    { name: 'Workshops', image: '/images/activities/workshops.jpg' },
    { name: 'Audience voting', image: '/images/activities/audience-voting.jpg' },
    { name: 'Keynote speech', image: '/images/activities/keynote-speech.jpg' },
    { name: 'Digital Metaverse Twin', image: '/images/activities/digital-metaverse.jpg' },
    { name: 'Dance performance', image: '/images/activities/dance-performance.jpg' },
    { name: 'Afterparty', image: '/images/activities/afterparty.jpg' }
  ]

  return (
    <section className="bg-[#FDF6E8] py-8 sm:py-12 lg:py-16">
      <div className="max-w-sm mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <h2 className="text-[#151412] font-euclid-square text-2xl sm:text-3xl md:text-4xl lg:text-section-title-desktop font-light leading-tight">
            What awaits you now?
          </h2>
        </div>

        {/* Mobile: 2 columns, 5 rows - Mobile first */}
        <div className="grid grid-cols-2 gap-3 gap-y-4 sm:hidden">
          {activities.map((activity, index) => (
            <div key={`mobile-${index}`} className="flex flex-col gap-2 group cursor-pointer">
              <div className="relative w-full h-24 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#151412] font-euclid-square text-xs leading-tight font-normal text-center px-1">
                {activity.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Tablet: 3 columns, 4 rows (with last row having 1 item centered) */}
        <div className="hidden sm:grid md:hidden grid-cols-3 gap-4 gap-y-6">
          {activities.map((activity, index) => (
            <div key={`tablet-${index}`} className={`flex flex-col gap-3 group cursor-pointer ${index === 9 ? 'col-start-2' : ''}`}>
              <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#151412] font-euclid-square text-sm leading-tight font-normal text-center">
                {activity.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop: 5 columns, 2 rows as original */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div key={`desktop-${index}`} className="flex flex-col gap-[18px] group cursor-pointer">
              <div className="relative w-full h-[209px] rounded-xl overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#151412] font-euclid-square text-lg leading-[1.5] font-normal">
                {activity.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection 