'use client'

import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "INNOVATORS\nPITCHES",
      description: "20+ Projects 5 judges 8 Awards",
      subtitle: "Audience Choice Awards",
      image: "/images/features/innovators-pitches.jpg",
      textColor: "text-[#151412]",
      bgColor: "bg-[#FAFAFA]"
    },
    {
      id: 2,
      title: "RUNWAY\nSHOW",
      description: "Top designers present collections, integrated with 3D metaverse displays.",
      image: "/images/features/runway-show.jpg",
      textColor: "text-white",
      bgColor: "bg-[#FAFAFA]"
    },
    {
      id: 3,
      title: "SPLIT\nTHE REALITY",
      description: "The entire event will be available to attend from the comfort of your home in the metaverse. All activities will be there too",
      image: "/images/features/split-reality.jpg",
      textColor: "text-white",
      bgColor: "bg-[#FAFAFA]"
    },
    {
      id: 4,
      title: "PANELS &\nKEYNOTES",
      description: "Discuss AI, Web4, and fashion-tech trends.",
      image: "/images/features/panels-keynotes.jpg",
      textColor: "text-white",
      bgColor: "bg-white",
      isLarge: true
    },
    {
      id: 5,
      title: "EXPERT\nWORKSHOPS",
      description: "Future-proof your company with hands-on workshops on Web3, AR/VR, and AI—plus 1-year access to an immersive learning space.",
      image: "/images/features/expert-workshops.jpg",
      textColor: "text-[#151412]",
      bgColor: "bg-[#353025]",
      isLarge: true
    }
  ]

  return (
    <section className="bg-black py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Section Header - Mobile optimized */}
        <div className="mb-6 sm:mb-8 lg:mb-8">
          <h2 className="text-white font-euclid-square text-xl sm:text-2xl md:text-3xl lg:text-section-title-desktop font-light leading-tight">
            Event activietes
          </h2>
        </div>

        {/* Mobile Layout - Single column - Mobile first */}
        <div className="flex flex-col gap-3 sm:hidden">
          {features.map((feature) => (
            <div key={`mobile-${feature.id}`} className={`relative h-48 ${feature.bgColor} rounded-xl overflow-hidden`}>
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title.replace('\n', ' ')}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-3 h-full flex flex-col justify-start">
                <div className="space-y-1">
                  <div className={`text-white font-ibm-plex-mono text-sm leading-tight uppercase`}>
                    {feature.id}
                  </div>
                  <h3 className={`text-white font-euclid-circular-b text-base font-bold leading-tight uppercase`}>
                    {feature.title.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < feature.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className={`text-white font-euclid-square text-xs leading-tight line-clamp-3`}>
                    {feature.description}
                  </p>
                  {feature.subtitle && (
                    <p className={`text-white font-euclid-square text-xs opacity-65`}>
                      {feature.subtitle}
                    </p>
                  )}
                  <div className={`text-white font-ibm-plex-mono text-xs opacity-60`}>
                    learn more
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout - 2 columns */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={`tablet-${feature.id}`} className={`relative h-64 ${feature.bgColor} rounded-2xl overflow-hidden ${feature.id === 5 ? 'col-span-2' : ''}`}>
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title.replace('\n', ' ')}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-4 h-full flex flex-col justify-start">
                <div className="space-y-2">
                  <div className={`text-white font-ibm-plex-mono text-lg leading-tight uppercase`}>
                    {feature.id}
                  </div>
                  <h3 className={`text-white font-euclid-circular-b ${feature.isLarge ? 'text-2xl' : 'text-xl'} font-bold leading-tight uppercase`}>
                    {feature.title.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < feature.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className={`text-white font-euclid-square text-sm leading-tight ${feature.id === 1 ? '' : 'line-clamp-4'}`}>
                    {feature.description}
                  </p>
                  {feature.subtitle && (
                    <p className={`text-white font-euclid-square text-sm opacity-65`}>
                      {feature.subtitle}
                    </p>
                  )}
                  <div className={`text-white font-ibm-plex-mono text-sm opacity-60`}>
                    learn more
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Original complex grid */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Top Row - 3 columns */}
          <div className="relative h-[400px] lg:h-[600px] xl:h-[823px]">
            {/* Card 1 - Innovators Pitches */}
            <div className="absolute left-0 top-0 w-[30%] lg:w-[32%] h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden">
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
              <div className="relative z-10 p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-start">
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-[#151412] font-ibm-plex-mono text-2xl lg:text-3xl xl:text-[36px] leading-[1.3] uppercase">
                    1
                  </div>
                  <h3 className="text-[#151412] font-euclid-circular-b text-2xl lg:text-3xl xl:text-[40px] font-bold leading-[1.15] uppercase">
                    INNOVATORS<br />PITCHES
                  </h3>
                  <div className="text-[#151412] font-ibm-plex-mono text-base lg:text-lg xl:text-xl opacity-60">
                    learn more
                  </div>
                  <div className="space-y-1 mt-4">
                    <p className="text-[#151412] font-euclid-square text-sm lg:text-base xl:text-lg">20+ Projects 5 judges 8 Awards</p>
                    <p className="text-[#151412] font-euclid-square text-sm lg:text-base xl:text-lg opacity-65">
                      Audience Choice Awards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Runway Show */}
            <div className="absolute left-[33%] lg:left-[34%] top-0 w-[30%] lg:w-[32%] h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden">
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
              <div className="relative z-10 p-6 lg:p-8 xl:p-9 h-full flex flex-col justify-start">
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-white font-ibm-plex-mono text-2xl lg:text-3xl xl:text-[36px] leading-[1.3] uppercase">
                    2
                  </div>
                  <h3 className="text-white font-euclid-circular-b text-2xl lg:text-3xl xl:text-[40px] font-bold leading-[1.15] uppercase">
                    RUNWAY<br />SHOW
                  </h3>
                  <p className="text-white font-euclid-square text-sm lg:text-lg xl:text-xl leading-[1.5]">
                    Top designers present collections, integrated with 3D metaverse displays.
                  </p>
                  <div className="text-white font-ibm-plex-mono text-sm lg:text-base xl:text-lg opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Split the Reality */}
            <div className="absolute right-0 top-0 w-[30%] lg:w-[32%] h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden">
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
              <div className="relative z-10 p-6 lg:p-8 xl:p-9 h-full flex flex-col justify-start">
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-white font-ibm-plex-mono text-2xl lg:text-3xl xl:text-[36px] leading-[1.3] uppercase">
                    3
                  </div>
                  <h3 className="text-white font-euclid-circular-b text-2xl lg:text-3xl xl:text-[40px] font-bold leading-[1.15] uppercase">
                    SPLIT<br />THE REALITY
                  </h3>
                  <p className="text-white font-euclid-square text-sm lg:text-lg xl:text-xl leading-[1.5]">
                    The entire event will be available to attend from the comfort of your home in the metaverse. All activities will be there too
                  </p>
                  <div className="text-white font-ibm-plex-mono text-sm lg:text-base xl:text-lg opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 columns */}
          <div className="relative h-[400px] lg:h-[600px] xl:h-[823px]">
            {/* Card 4 - Panels & Keynotes */}
            <div className="absolute left-0 top-0 w-[48%] lg:w-[49%] h-full bg-white rounded-[32px] overflow-hidden">
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
              <div className="relative z-10 p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-start">
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-white font-ibm-plex-mono text-2xl lg:text-3xl xl:text-[36px] leading-[1.3] uppercase">
                    4
                  </div>
                  <h3 className="text-white font-euclid-circular-b text-3xl lg:text-5xl xl:text-[64px] font-bold leading-[1.15] uppercase">
                    PANELS &<br />KEYNOTES
                  </h3>
                  <p className="text-white font-euclid-square text-sm lg:text-lg xl:text-xl leading-[1.5]">
                    Discuss AI, Web4, and fashion-tech trends.
                  </p>
                  <div className="text-white font-ibm-plex-mono text-base lg:text-lg xl:text-xl opacity-60">
                    learn more
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Expert Workshops */}
            <div className="absolute right-0 top-0 w-[48%] lg:w-[49%] h-full bg-[#353025] rounded-[32px] overflow-hidden">
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
              <div className="relative z-10 p-6 lg:p-8 xl:p-9 h-full flex flex-col justify-start">
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-[#151412] font-ibm-plex-mono text-2xl lg:text-3xl xl:text-[36px] leading-[1.3] uppercase">
                    5
                  </div>
                  <h3 className="text-[#151412] font-euclid-circular-b text-3xl lg:text-5xl xl:text-[64px] font-bold leading-[1.15] uppercase">
                    EXPERT<br />WORKSHOPS
                  </h3>
                  <p className="text-[#151412] font-euclid-square text-sm lg:text-lg xl:text-xl leading-[1.5]">
                    Future-proof your company with hands-on workshops on Web3, AR/VR, and AI—plus 1-year access to an immersive learning space.
                  </p>
                  <div className="text-[#151412] font-ibm-plex-mono text-sm lg:text-base xl:text-lg opacity-60">
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