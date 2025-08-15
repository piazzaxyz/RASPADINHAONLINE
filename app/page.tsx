"use client"

import HeroSection from "@/components/HeroSection"
import FeaturedSection from "@/components/FeaturedSection"
import LiveSection from "@/components/LiveSection"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingChat from "@/components/FloatingChat"
import NavigationArrows from "@/components/NavigationArrows"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-600">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <LiveSection />
        <FeaturedSection />
      </main>
      <Footer />
      <FloatingChat />
      <NavigationArrows />
    </div>
  )
}