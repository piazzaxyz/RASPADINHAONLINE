"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0)

  const banners = [
    "/BANNER NOVO.png",
    "/2400x910px (2).png"
  ]

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
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-700 via-neutral-600 to-neutral-700">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-900/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Banner Carousel */}
        <div className="flex justify-center mb-16">
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
                        src={banner}
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                AQUI R$1,00 PODE VIRAR R$1.000!
              </h2>
              <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
            </div>
            
            <p className="text-xl text-purple-300 font-semibold">
              BASTA UMA RASPADA PARA MUDAR A SUA VIDA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/raspadinhas">
                <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>RASPAR AGORA</span>
                </button>
              </Link>
              
              <Link href="/como-jogar">
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  COMO JOGAR
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}