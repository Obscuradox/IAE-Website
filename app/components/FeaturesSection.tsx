'use client'

import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="w-full px-[248px]">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-white font-euclid-square text-[96px] font-light leading-[1.25]">
            Event activietes
          </h2>
        </div>

        {/* Features Grid Container */}
        <div className="flex flex-col gap-4">
          {/* Top Row - 3 columns */}
          <div className="relative h-[823px]">
            {/* Card 1 - Innovators Pitches */}
            <div className="absolute left-0 top-0 w-[464px] h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/features/innovators-pitches.jpg"
                  alt="Innovators Pitches"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content - positioned at top left */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-start">
                <div className="space-y-3">
                  <div className="text-[#151412] font-ibm-plex-mono text-[36px] leading-[1.3] uppercase">
                    1
                  </div>
                  <h3 className="text-[#151412] font-euclid-circular-b text-[40px] font-bold leading-[1.15] uppercase">
                    INNOVATORS<br />PITCHES
                  </h3>
                  <div className="text-[#151412] font-ibm-plex-mono text-xl opacity-60">
                    learn more
                  </div>
                  <div className="space-y-1 mt-4">
                    <p className="text-[#151412] font-euclid-square text-lg">20+ Projects 5 judges 8 Awards</p>
                    <p className="text-[#151412] font-euclid-square text-lg opacity-65">
                      Audience Choice Awards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Runway Show */}
            <div className="absolute left-[480px] top-0 w-[464px] h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/features/runway-show.jpg"
                  alt="Runway Show"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content - positioned at top left */}
              <div className="relative z-10 p-9 h-full flex flex-col justify-start">
                <div className="space-y-3">
                  <div className="text-white font-ibm-plex-mono text-[36px] leading-[1.3] uppercase">
                    2
                  </div>
                  <h3 className="text-white font-euclid-circular-b text-[40px] font-bold leading-[1.15] uppercase">
                    RUNWAY<br />SHOW
                  </h3>
                  <p className="text-white font-euclid-square text-xl leading-[1.5]">
                    Top designers present collections, integrated with 3D metaverse displays.
                  </p>
                  <div className="text-white font-ibm-plex-mono text-lg opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Split the Reality */}
            <div className="absolute left-[960px] top-0 w-[464px] h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/features/split-reality.jpg"
                  alt="Split the Reality"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content - positioned at top left */}
              <div className="relative z-10 p-9 h-full flex flex-col justify-start">
                <div className="space-y-3">
                  <div className="text-white font-ibm-plex-mono text-[36px] leading-[1.3] uppercase">
                    3
                  </div>
                  <h3 className="text-white font-euclid-circular-b text-[40px] font-bold leading-[1.15] uppercase">
                    SPLIT<br />THE REALITY
                  </h3>
                  <p className="text-white font-euclid-square text-xl leading-[1.5]">
                    The entire event will be available to attend from the comfort of your home in the metaverse. All activities will be there too
                  </p>
                  <div className="text-white font-ibm-plex-mono text-lg opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 columns */}
          <div className="relative h-[823px]">
            {/* Card 4 - Panels & Keynotes */}
            <div className="absolute left-0 top-0 w-[704px] h-full bg-white rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/features/panels-keynotes.jpg"
                  alt="Panels & Keynotes"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content - positioned at top left */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-start">
                <div className="space-y-3">
                  <div className="text-white font-ibm-plex-mono text-[36px] leading-[1.3] uppercase">
                    4
                  </div>
                  <h3 className="text-white font-euclid-circular-b text-[64px] font-bold leading-[1.15] uppercase">
                    PANELS &<br />KEYNOTES
                  </h3>
                  <p className="text-white font-euclid-square text-xl leading-[1.5]">
                    Discuss AI, Web4, and fashion-tech trends.
                  </p>
                  <div className="text-white font-ibm-plex-mono text-xl opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Expert Workshops */}
            <div className="absolute left-[720px] top-0 w-[704px] h-full bg-[#353025] rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/features/expert-workshops.jpg"
                  alt="Expert Workshops"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content - positioned at top left */}
              <div className="relative z-10 p-9 h-full flex flex-col justify-start">
                <div className="space-y-3">
                  <div className="text-[#151412] font-ibm-plex-mono text-[36px] leading-[1.3] uppercase">
                    5
                  </div>
                  <h3 className="text-[#151412] font-euclid-circular-b text-[64px] font-bold leading-[1.15] uppercase">
                    EXPERT<br />WORKSHOPS
                  </h3>
                  <p className="text-[#151412] font-euclid-square text-xl leading-[1.5]">
                    Future-proof your company with hands-on workshops on Web3, AR/VR, and AI—plus 1-year access to an immersive learning space.
                  </p>
                  <div className="text-[#151412] font-ibm-plex-mono text-lg opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 