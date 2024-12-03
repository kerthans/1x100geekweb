'use client'

import { Header } from '@/components/navbar'
import { Foot } from '@/components/footer'
import { BlogPreviewSection } from '@/components/blog-preview-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogPreviewSection />
      <Foot />
    </main>
  )
}
