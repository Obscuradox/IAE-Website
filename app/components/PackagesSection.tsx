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
    <section className="bg-black py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[248px]">
        {/* Header - Mobile optimized */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-white font-euclid-square text-xl sm:text-2xl md:text-3xl lg:text-section-title-desktop font-light leading-tight">
            Packages
          </h2>
        </div>

        {/* Mobile Layout - Single column - Mobile first */}
        <div className="flex flex-col gap-4 sm:hidden mb-6">
          {sponsorPackages.map((pkg, index) => (
            <div 
              key={`mobile-${index}`}
              className="h-56 bg-[#5F5D5D] rounded-xl overflow-hidden relative"
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
              <div className="relative z-10 p-3 h-full flex flex-col gap-2">
                {/* Title */}
                <div className="flex flex-col">
                  <h3 className="text-white font-euclid-square font-bold text-xl leading-tight uppercase">
                    {pkg.title}
                  </h3>
                  <h4 className="text-white font-euclid-square font-bold text-xl leading-tight uppercase">
                    {pkg.subtitle}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-white font-euclid-square text-xs leading-tight line-clamp-3">
                  {pkg.description}
                </p>
                
                {/* Button */}
                <button className="flex items-center justify-center px-3 py-2 border border-white rounded-lg text-white font-euclid-square text-xs leading-tight w-fit mt-auto hover:bg-white hover:text-black transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout - 3 columns */}
        <div className="hidden sm:flex md:hidden gap-4 mb-8">
          {sponsorPackages.map((pkg, index) => (
            <div 
              key={`tablet-${index}`}
              className="flex-1 h-80 bg-[#5F5D5D] rounded-2xl overflow-hidden relative"
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
              <div className="relative z-10 p-4 h-full flex flex-col gap-4">
                {/* Title */}
                <div className="flex flex-col">
                  <h3 className="text-white font-euclid-square font-bold text-3xl leading-[0.931] uppercase">
                    {pkg.title}
                  </h3>
                  <h4 className="text-white font-euclid-square font-bold text-3xl leading-[0.931] uppercase">
                    {pkg.subtitle}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-white font-euclid-square text-base leading-[1.4] line-clamp-4">
                  {pkg.description}
                </p>
                
                {/* Button */}
                <button className="flex items-center justify-center px-6 py-3 border border-white rounded-lg text-white font-euclid-square text-base leading-[1.25] w-fit mt-auto hover:bg-white hover:text-black transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Original 3 columns */}
        <div className="hidden md:flex gap-8 mb-8 lg:mb-16">
          {sponsorPackages.map((pkg, index) => (
            <div 
              key={`desktop-${index}`}
              className="flex-1 h-[400px] lg:h-[536px] bg-[#5F5D5D] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden relative"
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
              <div className="relative z-10 p-4 lg:p-6 h-full flex flex-col gap-4 lg:gap-6">
                {/* Title */}
                <div className="flex flex-col">
                  <h3 className="text-white font-euclid-square font-bold text-3xl lg:text-[48px] leading-[0.931] uppercase">
                    {pkg.title}
                  </h3>
                  <h4 className="text-white font-euclid-square font-bold text-3xl lg:text-[48px] leading-[0.931] uppercase">
                    {pkg.subtitle}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-white font-euclid-square text-base lg:text-lg leading-[1.5]">
                  {pkg.description}
                </p>
                
                {/* Button */}
                <button className="flex items-center justify-center gap-[10px] px-8 lg:px-[62px] py-3 lg:py-[18px] border border-white rounded-lg text-white font-euclid-square text-base lg:text-lg leading-[1.25] w-fit mt-auto hover:bg-white hover:text-black transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stage Presenter Package - Mobile optimized */}
        <div className="bg-black rounded-xl lg:rounded-[24px] flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-8 p-3 sm:p-4 lg:p-8 min-h-[250px] md:h-[400px]">
          {/* Image */}
          <div className="w-full md:flex-1 h-40 md:h-auto relative rounded-xl lg:rounded-[16px] overflow-hidden">
            <Image
              src="/images/packages/stage-presenter.jpg"
              alt="Stage Presenter Package"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:flex-1 flex flex-col justify-center gap-2 sm:gap-3 lg:gap-6">
            <h3 className="text-white font-euclid-square font-bold text-lg sm:text-2xl lg:text-[48px] leading-tight uppercase">
              Stage Presenter Package
            </h3>
            
            <p className="text-white font-euclid-square text-xs sm:text-sm lg:text-lg leading-tight">
              Showcase Your Company at the Infinity Ængines Event, June 13-15, 2025, The Agenda, Dubai
            </p>
            
            <p className="text-white font-euclid-square text-xs sm:text-sm lg:text-lg leading-tight">
              Secure one of 10 exclusive spots to present on stage at our global event. This package offers unmatched exposure to innovators and investors.
            </p>
            
            {/* Button */}
            <button className="flex items-center justify-center gap-[10px] px-4 sm:px-6 lg:px-[62px] py-2 sm:py-3 lg:py-[18px] border border-white rounded-lg text-white font-euclid-square text-xs sm:text-sm lg:text-lg leading-tight w-fit hover:bg-white hover:text-black transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagesSection 