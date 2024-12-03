'use client'

import { Header } from '@/components/navbar'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Foot } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TestimonialsSection />
      <Foot />
    </main>
  )
}
