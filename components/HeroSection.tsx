"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0)

  const banners = ["/BANNER NOVO.png", "/2400x910px (2).png"]

  // Auto-rotate banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-gray-900 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-neutral-700 to-neutral-700" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex justify-center">
          <div className="relative max-w-6xl w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBanner * 100}%)` }}
              >
                {banners.map((banner, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Link href="/raspadinhas">
                      <img
                        src={banner || "/placeholder.svg"}
                        alt={`Banner promocional ${index + 1}`}
                        className="w-full h-auto object-cover rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevBanner}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextBanner}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentBanner === index ? "bg-purple-500" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              AQUI R$1,00 PODE VIRAR R$1.000 EM UMA RASPADINHA!
            </h2>
            <p className="text-lg text-purple-300 font-semibold">BASTA UMA RASPADA PARA MUDAR A SUA VIDA</p>
            <div className="flex justify-center mt-6">
              <Link href="/raspadinhas">
                <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors hover-scale">
                  RASPAR AGORA
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
