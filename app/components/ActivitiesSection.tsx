'use client'

import React from 'react'
import Image from 'next/image'

const ActivitiesSection = () => {
  const activities = [
    { name: 'Innnnovators pithes', image: '/images/activities/innovators-pitches.jpg' },
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
    <section className="bg-[#FDF6E8] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#151412] font-euclid-square text-[96px] font-light leading-[1.25]">
            What awaits you now?
          </h2>
        </div>

        {/* Activities Grid - 2 rows of 5 with labels */}
        <div className="grid grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col gap-[18px] group cursor-pointer">
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