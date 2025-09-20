"use client"

import React, { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function NavigationArrows() {
  const [showUpArrow, setShowUpArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowUpArrow(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!showUpArrow) return null

  return (
    <div className="fixed bottom-20 left-6 z-40">
      <button
        onClick={scrollToTop}
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  )
}