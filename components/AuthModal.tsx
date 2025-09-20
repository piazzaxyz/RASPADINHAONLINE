"use client"

import type React from "react"

import { useState } from "react"
import { X, Eye, EyeOff } from "lucide-react"

interface AuthModalProps {
  type: "login" | "register" | null
  onClose: () => void
  onSwitchMode?: (newType: "login" | "register") => void
}

export default function AuthModal({ type, onClose, onSwitchMode }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    acceptTerms: false,
  })

  if (!type) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de autenticação
    console.log("Form submitted:", formData)
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-neutral-700 rounded-xl sm:rounded-2xl w-full max-w-sm sm:max-w-md border border-neutral-600 max-h-[95vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-neutral-600 rounded-lg"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {type === "login" ? (
            <>
              <div className="text-center mb-4 sm:mb-6 pr-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Bem-vindo de volta!</h2>
                <p className="text-gray-400 text-sm sm:text-base">Entre na sua conta e continue sua jornada</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm sm:text-base"
                >
                  Entrar na Conta
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => onSwitchMode?.("register")}
                  className="text-sm text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Criar Nova Conta
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-4 sm:mb-6 pr-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Crie sua conta!</h2>
                <p className="text-gray-400 text-sm sm:text-base">Junte-se a nós e comece a ganhar prêmios incríveis</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="+55 (11) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Criar Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Sua senha deve ter pelo menos 8 caracteres</p>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-purple-600 bg-neutral-600 border-gray-600 rounded focus:ring-purple-500"
                    required
                  />
                  <label htmlFor="acceptTerms" className="text-xs sm:text-sm text-gray-400">
                    Aceito os{" "}
                    <a href="/termos-uso" className="text-purple-500 hover:text-purple-400">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="/politica-privacidade" className="text-purple-500 hover:text-purple-400">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.acceptTerms}
                  className="w-full bg-purple-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                >
                  Criar Minha Conta
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => onSwitchMode?.("login")}
                  className="text-sm text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Fazer Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}