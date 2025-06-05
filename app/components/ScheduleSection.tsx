'use client'

import React from 'react'

type ScheduleDay = {
  day: string;
  date: string;
  subtitle: string;
  events: string[];
}

const ScheduleSection = () => {
  const scheduleData = [
    {
      day: "DAY 1",
      date: "June 13, 2025",
      subtitle: "Vision Day",
      events: [
        "16:00 — Doors Open: VIP Networking & Introductions",
        "16:30 — Keynote: Luxury 2030",
        "16:50 — Panel A: AI for Everyday Brilliance",
        "17:20 — Panel B: Longevity & Peak Performance",
        "17:50 — Immersive Digital Performance",
        "18:00 — Founder Spotlights",
        "19:00 — Fashion Factor Main Event (until midnight)"
      ]
    },
    {
      day: "DAY 2",
      date: "June 14, 2025",
      subtitle: "Infinity Ængines · Day 1",
      events: [
        "16:00 — Doors Open: VIP Networking & Introductions",
        "16:30 — Infinity Ængines Pitch-Off Round 1",
        "17:05 — Keynote: Algorithmic You",
        "17:30 — Panel C: Owning Your Digital Life (Web3)",
        "18:00 — Holographic DJ & Live Voting",
        "19:00 — Fashion Factor Fashion Show (until midnight)"
      ]
    },
    {
      day: "DAY 3",
      date: "June 15, 2025",
      subtitle: "Infinity Ængines Grand Finale",
      events: [
        "16:00 — Doors Open: VIP Networking & Introductions",
        "16:30 — Infinity Ængines Pitch-Off Finals",
        "17:05 — Keynote: Moonshot Living",
        "17:30 — Panel D: Living with Super-AI",
        "17:55 — Panel E: Beyond Screens",
        "18:20 — Drone-Light Ballet & Awards Ceremony",
        "19:00 — Fashion Factor FF/11 Show & Grand Gala (until midnight)"
      ]
    }
  ]

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 rounded-b-2xl">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Header - Mobile optimized */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 sm:mb-8">
          <h2 className="text-[#151412] font-euclid-square font-light leading-tight mb-3 sm:mb-4 lg:mb-0 text-h2">
            The schedule
          </h2>
          <p className="text-[#151412] font-euclid-square leading-tight opacity-50 lg:w-[393px] lg:text-right text-responsive-body">
            For questions about the program and schedule reach out to — contact@infinityængines.com
          </p>
        </div>

        {/* Mobile Layout - Accordion Style - Mobile first */}
        <div className="flex flex-col gap-4 sm:hidden">
          {scheduleData.map((dayData, index) => (
            <div key={`mobile-${index}`} className="border border-gray-200 rounded-xl p-3">
              {/* Day Header */}
              <div className="flex flex-col mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-[#151412] font-euclid-square font-bold text-h3">
                    {dayData.day}
                  </div>
                  <div className="text-[#151412] font-euclid-square text-h3">
                    {dayData.date}
                  </div>
                </div>
                <div className="text-[#151412] font-euclid-square text-sm italic">{dayData.subtitle}</div>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-[#151412] mb-2"></div>
              
              {/* Events List */}
              <div className="space-y-2">
                {dayData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="text-[#151412] font-euclid-square leading-tight text-responsive-small">
                    <div className="opacity-80">{event}</div>
                  </div>
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
              <div className="flex flex-col mb-2">
                <div className="flex items-center gap-4">
                  <div className="text-[#151412] font-euclid-square font-bold text-h3">
                    {dayData.day}
                  </div>
                  <div className="text-[#151412] font-euclid-square text-h3">
                    {dayData.date}
                  </div>
                </div>
                <div className="text-[#151412] font-euclid-square text-sm italic">{dayData.subtitle}</div>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-[#151412] mb-4"></div>
              
              {/* Events List */}
              <div className="space-y-2">
                {dayData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="text-[#151412] font-euclid-square leading-[1.6] text-responsive-body mb-3">
                    <div className="opacity-80">{event}</div>
                  </div>
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
                <div className="flex flex-col w-full mb-2">
                  <div className="flex items-center gap-[19px]">
                    <div className="text-[#151412] font-euclid-square font-bold leading-[1.268] text-h3">
                      {dayData.day}
                    </div>
                    <div className="text-[#151412] font-euclid-square leading-[1.268] flex-1 text-h3">
                      {dayData.date}
                    </div>
                  </div>
                  <div className="text-[#151412] font-euclid-square text-sm italic">{dayData.subtitle}</div>
                </div>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-[#151412]"></div>
                
                {/* Events List */}
                <div className="w-full">
                  {dayData.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="text-[#151412] font-euclid-square mb-4 text-responsive-body">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <div className="opacity-80">{event}</div>
                      </div>
                    </div>
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