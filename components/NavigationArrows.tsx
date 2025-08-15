"use client"

import React, { useState, useEffect } from "react"

const NavigationArrows: React.FC = () => {
  const [showUpArrow, setShowUpArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show up arrow when user scrolls down more than 300px
      setShowUpArrow(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      {showUpArrow && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
        >
          ↑
        </button>
      )}
      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
      >
        ↓
      </button>
    </div>
  )
}

export default NavigationArrows



