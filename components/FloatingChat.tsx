"use client"

import { useState } from "react"
import { Phone, Mail, Home, X } from "lucide-react"
import Link from "next/link"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleEmailClick = () => {
    window.location.href =
      "mailto:suporte@raspebrilhe.com?subject=Contato via Chat Online&body=Olá, gostaria de entrar em contato..."
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-neutral-800 border border-neutral-600 rounded-lg shadow-xl p-2 min-w-[200px] animate-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-1">
            {/* Gmail Option */}
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white hover:bg-purple-600/20 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5 text-purple-400" />
              <div>
                <p className="font-medium">Gmail</p>
                <p className="text-xs text-gray-400">Enviar email</p>
              </div>
            </button>

            {/* Home Option */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white hover:bg-purple-600/20 rounded-lg transition-colors"
            >
              <Home className="h-5 w-5 text-purple-400" />
              <div>
                <p className="font-medium">Página Inicial</p>
                <p className="text-xs text-gray-400">Voltar ao início</p>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Chat Online"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>
  )
}
