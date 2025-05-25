'use client'

import React from 'react'

const ScheduleSection = () => {
  const scheduleData = [
    {
      day: "D1",
      date: "June 12",
      events: [
        "Workshop 2: Innovation & Digital Transformation for Luxury Brands",
        "Workshop 3: Next-Gen Interactive Retail (VR / AR / XR & AI)",
        "Workshop 4: Business of Fashion",
        "Entertainment — DJ Set",
        "Networking Session",
        "Keynote: AI in Luxury Retail",
        "Presentation: AI-Driven Retail Solutions",
        "Fashion Factor Master Class — Make-Up & Hairstyling",
        "Dinner & Networking"
      ]
    },
    {
      day: "D2",
      date: "June 13",
      events: [
        "Panel 1: AI in Fashion",
        "Entertainment — Dancer Performance",
        "Panel 2: Business in Fashion — Branding",
        "Networking Session",
        "Keynote: TBD",
        "Jewelry Presentation — Pre-Show Highlights",
        "Fashion Factor Designer & Model Pre-Show + Networking"
      ]
    },
    {
      day: "D3",
      date: "June 14",
      events: [
        "Keynote: TBD",
        "Panel 3: AR / VR / XR in Fashion",
        "Entertainment — DJ Set",
        "Panel 4: Business of Fashion — Funding & Finance",
        "Networking Session",
        "Fashion Factor Panel Talk",
        "Infinity Ængines Show — Day 1 (pitches, performances & live voting)",
        "Fashion Factor Fashion Show",
        "Networking Session",
        "Official After-Party"
      ]
    },
    {
      day: "D4",
      date: "June 15",
      events: [
        "Keynote: TBD",
        "Panel 5: Blockchain & Web3 in Fashion",
        "Entertainment — Dancer Performance",
        "Panel 6: Business of Fashion — Scaling Fashion Brands",
        "Networking Session",
        "Infinity Ængines Show — Day 2 (extended pitch session + results)",
        "Fashion Factor FF/11 Show — Day 2",
        "Networking Session",
        "Fashion Factor Closing After-Party"
      ]
    }
  ]

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 rounded-b-2xl lg:rounded-b-[32px]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Header - Mobile optimized */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 sm:mb-8">
          <h2 className="text-[#151412] font-euclid-square text-2xl sm:text-3xl md:text-4xl lg:text-section-title-desktop font-light leading-tight mb-3 sm:mb-4 lg:mb-0">
            The shedule
          </h2>
          <p className="text-[#151412] font-euclid-square text-xs sm:text-sm lg:text-base leading-tight opacity-50 lg:w-[393px] lg:text-right">
            For questions about the program and schedule reach out to —- contact@infinityaengines.com
          </p>
        </div>

        {/* Mobile Layout - Accordion Style - Mobile first */}
        <div className="flex flex-col gap-4 sm:hidden">
          {scheduleData.map((dayData, index) => (
            <div key={`mobile-${index}`} className="border border-gray-200 rounded-lg p-3">
              {/* Day Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#151412] font-euclid-square font-bold text-lg">
                  {dayData.day}
                </div>
                <div className="text-[#151412] font-euclid-square text-lg">
                  {dayData.date}
                </div>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-[#151412] mb-2"></div>
              
              {/* Events List */}
              <div className="space-y-1">
                {dayData.events.map((event, eventIndex) => (
                  <p key={eventIndex} className="text-[#151412] font-euclid-square text-xs leading-tight opacity-55">
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout - 2x2 Grid */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-6">
          {scheduleData.map((dayData, index) => (
            <div key={`tablet-${index}`} className="flex flex-col">
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-2">
                <div className="text-[#151412] font-euclid-square font-bold text-2xl">
                  {dayData.day}
                </div>
                <div className="text-[#151412] font-euclid-square text-2xl">
                  {dayData.date}
                </div>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-[#151412] mb-4"></div>
              
              {/* Events List */}
              <div className="space-y-1">
                {dayData.events.map((event, eventIndex) => (
                  <p key={eventIndex} className="text-[#151412] font-euclid-square text-sm leading-[1.6] opacity-55">
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Original 4 columns */}
        <div className="hidden md:flex gap-4">
          {scheduleData.map((dayData, index) => (
            <div key={`desktop-${index}`} className="flex-1 flex flex-col items-center gap-[70px]">
              <div className="w-full flex flex-col gap-[9px]">
                {/* Day Header */}
                <div className="flex items-center gap-[19px] w-full">
                  <div className="text-[#151412] font-euclid-square font-bold text-2xl lg:text-[33.56px] leading-[1.268]">
                    {dayData.day}
                  </div>
                  <div className="text-[#151412] font-euclid-square text-2xl lg:text-[33.56px] leading-[1.268] flex-1">
                    {dayData.date}
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-[#151412]"></div>
                
                {/* Events List */}
                <div className="w-full">
                  {dayData.events.map((event, eventIndex) => (
                    <p key={eventIndex} className="text-[#151412] font-euclid-square text-sm lg:text-base leading-[2em] opacity-55 mb-0">
                      {event}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection 