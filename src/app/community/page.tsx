'use client'

import { Header } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { Foot } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Foot />
    </main>
  )
}
