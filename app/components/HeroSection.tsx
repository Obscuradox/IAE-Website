'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Динамически загружаем компоненты, которые могут вызывать проблемы с гидрацией
const DynamicHeroContent = dynamic(() => import('./HeroContent'), {
  ssr: false,
})

export default function HeroSection() {
  return <DynamicHeroContent />
}