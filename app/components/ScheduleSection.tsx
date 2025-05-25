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
    <section className="bg-white py-16 rounded-b-[32px]">
      <div className="w-full px-[248px]">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-[#151412] font-euclid-square text-[96px] font-light leading-[1.25]">
            The shedule
          </h2>
          <p className="text-[#151412] font-euclid-square text-base leading-[1.268] opacity-50 w-[393px] text-right">
            For questions about the program and schedule reach out to —- contact@infinityaengines.com
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="flex gap-4">
          {scheduleData.map((dayData, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-[70px]">
              <div className="w-full flex flex-col gap-[9px]">
                {/* Day Header */}
                <div className="flex items-center gap-[19px] w-full">
                  <div className="text-[#151412] font-euclid-square font-bold text-[33.56px] leading-[1.268]">
                    {dayData.day}
                  </div>
                  <div className="text-[#151412] font-euclid-square text-[33.56px] leading-[1.268] flex-1">
                    {dayData.date}
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-[#151412]"></div>
                
                {/* Events List */}
                <div className="w-full">
                  {dayData.events.map((event, eventIndex) => (
                    <p key={eventIndex} className="text-[#151412] font-euclid-square text-base leading-[2em] opacity-55 mb-0">
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