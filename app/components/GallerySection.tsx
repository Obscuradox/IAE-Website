'use client'

import React from 'react'
import Image from 'next/image'

const GallerySection = () => {
  // Using unique images for the gallery
  const images = [
    {
      src: '/images/activities/afterparty.jpg',
      alt: 'Audience at technology event'
    },
    {
      src: '/images/speakers/sam-singer.jpg',
      alt: 'Speaker presenting at event'
    },
    {
      src: '/images/speakers/thomas-sherif.jpg',
      alt: 'Thomas Sherif speaking at conference'
    },
    {
      src: '/images/features/innovators-pitches.jpg',
      alt: 'Innovators pitch session'
    },
    {
      src: '/images/activities/digital-metaverse.jpg',
      alt: 'Digital metaverse experience'
    },
    {
      src: '/images/features/panels-keynotes.jpg',
      alt: 'Panel discussion with audience'
    },
    {
      src: '/images/features/split-reality.jpg',
      alt: 'Immersive stage experience'
    },
    {
      // Replacing bottom-center image
      src: '/images/activities/innovators-pitches.jpg',
      alt: 'Innovators pitch competition'
    },
    {
      src: '/images/activities/workshops.jpg',
      alt: 'Workshop session'
    }
  ];

  // YouTube video embed URL
  const youtubeEmbedUrl = "https://www.youtube.com/embed/EY4y6tQ0sI8"; // Using the provided video

  return (
    <section className="relative py-12 sm:py-16 bg-black overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] to-black"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-white font-euclid-square text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Experience <span className="font-bold text-white">The Innovation</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            A glimpse into our previous events showcasing the perfect blend of fashion, technology, and innovation
          </p>
        </div>

        {/* Gallery Grid with images surrounding video - optimized for mobile */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile-first layout with responsive adjustments */}
          
          {/* Video takes full width on mobile, surrounded by images on larger screens */}
          <div className="flex flex-col md:flex-row gap-3 mb-3">
            {/* Center video - full width on mobile */}
            <div className="relative w-full md:order-2 md:w-2/3 aspect-video rounded-xl overflow-hidden shadow-[0_0_30px_rgba(79,122,202,0.2)] border border-[#4F7ACA]/20 mb-3 md:mb-0">
              <iframe
                src={youtubeEmbedUrl}
                title="Event Highlight Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Side images - horizontal on mobile, vertical on desktop */}
            <div className="md:order-1 md:w-1/6 flex md:flex-col gap-3 mb-3 md:mb-0">
              <div className="relative w-1/2 md:w-full overflow-hidden rounded-xl">
                <div className="relative aspect-square md:aspect-[3/4]">
                  <Image
                    src={images[4].src}
                    alt={images[4].alt}
                    width={225}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-1/2 md:w-full overflow-hidden rounded-xl">
                <div className="relative aspect-square md:aspect-[3/4]">
                  <Image
                    src="/images/speakers/sam-singer.jpg"
                    alt="Sam Singer speaking at event"
                    width={225}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:order-3 md:w-1/6 flex md:flex-col gap-3">
              <div className="relative w-1/2 md:w-full overflow-hidden rounded-xl">
                <div className="relative aspect-square md:aspect-[3/4]">
                  <Image
                    src={images[5].src}
                    alt={images[5].alt}
                    width={225}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-1/2 md:w-full overflow-hidden rounded-xl">
                <div className="relative aspect-square md:aspect-[3/4]">
                  <Image
                    src="/images/activities/runway-show.jpg"
                    alt="Fashion runway presentation"
                    width={225}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom images - 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-square">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-square">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-square">
                <Image
                  src="/images/activities/dance-performance.jpg"
                  alt="Dance performance with special effects"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-square">
                <Image
                  src="/images/activities/keynote-speech.jpg"
                  alt="Keynote presentation at event"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"></div>
    </section>
  );
};

export default GallerySection;
