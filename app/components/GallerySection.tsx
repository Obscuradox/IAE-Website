'use client'

import React from 'react'
import Image from 'next/image'

const GallerySection = () => {
  // Using all 15 optimized WebP images from the gallery folder
  const images = [
    {
      src: '/images/gallery/119A9863.webp',
      alt: 'Event highlight - Innovation showcase',
      size: 'large'
    },
    {
      src: '/images/gallery/119A0001.webp',
      alt: 'Fashion Factor presentation',
      size: 'medium'
    },
    {
      src: '/images/gallery/DSC07014.webp',
      alt: 'Technology demonstration',
      size: 'small'
    },
    {
      src: '/images/gallery/DSC06387.webp',
      alt: 'Networking session',
      size: 'medium'
    },
    {
      src: '/images/gallery/DSC05752.webp',
      alt: 'Stage presentation',
      size: 'large'
    },
    {
      src: '/images/gallery/DSC05694.webp',
      alt: 'Audience engagement',
      size: 'small'
    },
    {
      src: '/images/gallery/DSC04618.webp',
      alt: 'Innovation display',
      size: 'medium'
    },
    {
      src: '/images/gallery/DSC04616.webp',
      alt: 'Event atmosphere',
      size: 'small'
    },
    {
      src: '/images/gallery/DSCF5682.webp',
      alt: 'Creative workshop session',
      size: 'large'
    },
    {
      src: '/images/gallery/DSC04603 (1).webp',
      alt: 'Interactive demonstration',
      size: 'medium'
    },
    {
      src: '/images/gallery/DSC06302.webp',
      alt: 'Panel discussion',
      size: 'small'
    },
    {
      src: '/images/gallery/DSC06205.webp',
      alt: 'Audience participation',
      size: 'medium'
    },
    {
      src: '/images/gallery/DSC07375 (1).webp',
      alt: 'Innovation showcase',
      size: 'large'
    },
    {
      src: '/images/gallery/DSC05647 (1).webp',
      alt: 'Fashion technology fusion',
      size: 'medium'
    },
    {
      src: '/images/gallery/DSC04599.webp',
      alt: 'Event networking',
      size: 'small'
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

        {/* Dynamic Gallery Layout with varying sizes and styles */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Mobile Layout - Video with collage background */}
          <div className="block lg:hidden">
            <div className="relative w-full h-[400px] sm:h-[500px] max-h-[750px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(79,122,202,0.3)] border border-[#4F7ACA]/30">
              
              {/* Background collage of images - 2 rows with animations */}
              <div className="absolute inset-0 flex flex-col opacity-60">
                {/* First row - flowing left to right */}
                <div className="flex-1 flex overflow-hidden">
                  <div className="flex animate-[scroll-left_30s_linear_infinite] gap-0">
                    {/* Triple the images to ensure no gaps */}
                    {[...images, ...images, ...images].map((image, index) => (
                      <div key={`row1-${index}`} className="relative h-full flex-shrink-0 overflow-hidden" style={{ width: '120px' }}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="120px"
                          quality={70}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Second row - flowing right to left */}
                <div className="flex-1 flex overflow-hidden">
                  <div className="flex animate-[scroll-right_35s_linear_infinite] gap-0">
                    {/* Triple the images to ensure no gaps, start from different position */}
                    {[...images.slice(8), ...images, ...images, ...images.slice(0, 8)].map((image, index) => (
                      <div key={`row2-${index}`} className="relative h-full flex-shrink-0 overflow-hidden" style={{ width: '120px' }}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="120px"
                          quality={70}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QFLQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Dark overlay for video visibility */}
              <div className="absolute inset-0 bg-black/60"></div>
              
              {/* Video container - centered */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src={youtubeEmbedUrl}
                    title="Event Highlight Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Compact grid with no empty spaces */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 grid-rows-5 gap-2 h-[700px]">
              
              {/* Top row - 6 images across */}
              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group shadow-md">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="16vw"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group shadow-md">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="16vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group shadow-md">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="16vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group shadow-md">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="16vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group shadow-md">
                <Image
                  src={images[4].src}
                  alt={images[4].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="16vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group shadow-md">
                <Image
                  src={images[5].src}
                  alt={images[5].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="16vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Second row - Left images, Video, Right images */}
              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[6].src}
                  alt={images[6].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[7].src}
                  alt={images[7].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Central Video - 4 columns wide, 3 rows tall */}
              <div className="col-span-4 row-span-3 col-start-5 row-start-2 relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,122,202,0.4)] border-2 border-[#4F7ACA]/40">
                <iframe
                  src={youtubeEmbedUrl}
                  title="Event Highlight Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-sm -z-10"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[8].src}
                  alt={images[8].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[9].src}
                  alt={images[9].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Third row - Left images and Right images */}
              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[10].src}
                  alt={images[10].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[11].src}
                  alt={images[11].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[12].src}
                  alt={images[12].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[13].src}
                  alt={images[13].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Bottom row - Left images and Right images */}
              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[14].src}
                  alt={images[14].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group shadow-sm">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-115"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
