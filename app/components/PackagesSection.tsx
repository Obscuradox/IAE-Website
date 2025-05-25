'use client'

import React from 'react'
import Image from 'next/image'

const PackagesSection = () => {
  const sponsorPackages = [
    {
      title: "Elite",
      subtitle: "Partner",
      description: "The entire event will be available to attend from the comfort of your home in the metaverse. All activities will be there too",
      image: "/images/packages/elite-partner.jpg"
    },
    {
      title: "Premier",
      subtitle: "Partner", 
      description: "The entire event will be available to attend from the comfort of your home in the metaverse. All activities will be there too",
      image: "/images/packages/premier-partner.jpg"
    },
    {
      title: "Core",
      subtitle: "Partner",
      description: "The entire event will be available to attend from the comfort of your home in the metaverse. All activities will be there too", 
      image: "/images/packages/core-partner.jpg"
    }
  ]

  return (
    <section className="bg-black py-16">
      <div className="w-full px-[248px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white font-euclid-square text-[96px] font-light leading-[1.25]">
            Packages
          </h2>
        </div>

        {/* Sponsor Packages Grid */}
        <div className="flex gap-8 mb-16">
          {sponsorPackages.map((pkg, index) => (
            <div 
              key={index}
              className="flex-1 h-[536px] bg-[#5F5D5D] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden relative"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} ${pkg.subtitle}`}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col gap-6">
                {/* Title */}
                <div className="flex flex-col">
                  <h3 className="text-white font-euclid-square font-bold text-[48px] leading-[0.931] uppercase w-[350px]">
                    {pkg.title}
                  </h3>
                  <h4 className="text-white font-euclid-square font-bold text-[48px] leading-[0.931] uppercase w-[350px]">
                    {pkg.subtitle}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-white font-euclid-square text-lg leading-[1.5] w-[388px]">
                  {pkg.description}
                </p>
                
                {/* Button */}
                <button className="flex items-center justify-center gap-[10px] px-[62px] py-[18px] border border-white rounded-lg text-white font-euclid-square text-lg leading-[1.25] w-fit mt-auto hover:bg-white hover:text-black transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stage Presenter Package */}
        <div className="bg-black rounded-[24px] flex gap-8 p-8 h-[400px]">
          {/* Image */}
          <div className="flex-1 relative rounded-[16px] overflow-hidden">
            <Image
              src="/images/packages/stage-presenter.jpg"
              alt="Stage Presenter Package"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h3 className="text-white font-euclid-square font-bold text-[48px] leading-[0.931] uppercase">
              Stage Presenter Package
            </h3>
            
            <p className="text-white font-euclid-square text-lg leading-[1.5]">
              Showcase Your Company at the Infinity Ængines Event, June 13-15, 2025, The Agenda, Dubai
            </p>
            
            <p className="text-white font-euclid-square text-lg leading-[1.5]">
              Secure one of 10 exclusive spots to present on stage at our global event. This package offers unmatched exposure to innovators and investors.
            </p>
            
            {/* Button */}
            <button className="flex items-center justify-center gap-[10px] px-[62px] py-[18px] border border-white rounded-lg text-white font-euclid-square text-lg leading-[1.25] w-fit hover:bg-white hover:text-black transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagesSection 