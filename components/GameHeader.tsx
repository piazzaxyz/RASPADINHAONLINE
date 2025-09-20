// components/GameHeader.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User, ChevronDown, Wallet, CreditCard, History, Package, Shield, LogOut } from "lucide-react"
import Image from "next/image"
import AuthModal from "./AuthModal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [isLoggedIn] = useState(true)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/raspadinhas", label: "Raspadinhas" },
    { href: "/indique-e-ganhe", label: "Indique e Ganhe" },
  ]

  // 👇 Menu do Perfil CORRIGIDO E SINCRONIZADO 👇
  const profileMenuItems = [
    { href: "/conta", label: "Minha Conta", icon: User },
    { href: "/conta/transacoes", label: "Transações", icon: Wallet },
    { href: "/conta/historico-jogos", label: "Histórico de Jogos", icon: History },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-neutral-800/90 backdrop-blur-sm border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/RASPE & BRILHE.png"
                  alt="Raspe & Brilhe"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
              <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-purple-400 rounded-md px-3 py-2 ${
                      isActive(item.href) ? "text-purple-400" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 bg-neutral-700 px-2 lg:px-3 py-2 rounded-lg">
                    <Wallet className="h-4 w-4 text-green-400" />
                    <span className="text-xs lg:text-sm font-medium text-white">R$ 1.247,50</span>
                  </div>
                  <Link href="/depositar">
                    <button className="px-3 lg:px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs lg:text-sm font-bold rounded-lg transition-colors">
                      Depositar
                    </button>
                  </Link>
                  <Link href="/sacar">
                     <button className="px-3 lg:px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500/10 text-xs lg:text-sm font-bold rounded-lg transition-colors">
                       Sacar
                     </button>
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-700"
                    >
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                    </button>

                    {showProfileMenu && (
                      <div className="absolute right-0 mt-2 w-56 bg-neutral-700 rounded-lg shadow-lg border border-neutral-600 py-2">
                        {profileMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-600 transition-colors"
                            onClick={() => setShowProfileMenu(false)}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                        <hr className="my-2 border-neutral-600" />
                        <button className="flex items-center space-x-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-neutral-600 transition-colors w-full text-left">
                          <LogOut className="h-4 w-4" />
                          <span>Sair</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button onClick={() => setAuthModal("login")} className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:border-purple-500 hover:text-purple-500 transition-colors">Entrar</button>
                  <button onClick={() => setAuthModal("register")} className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">Registrar</button>
                </>
              )}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors" aria-label="Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden bg-neutral-800 border-t border-neutral-700 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-base font-medium transition-colors hover:text-purple-400 rounded-md px-3 py-2 ${
                  isActive(item.href) ? "text-purple-400" : "text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 bg-neutral-700 px-3 py-2 rounded-lg mb-2">
                    <Wallet className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium text-white">R$ 1.247,50</span>
                  </div>
                  <Link href="/depositar" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-colors mb-2">
                      Depositar
                    </button>
                  </Link>
                  <Link href="/sacar" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500/10 text-sm font-bold rounded-lg transition-colors mb-2">
                      Sacar
                    </button>
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-700 w-full"
                    >
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showProfileMenu && (
                      <div className="absolute right-0 mt-2 w-56 bg-neutral-700 rounded-lg shadow-lg border border-neutral-600 py-2 z-50">
                        {profileMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-600 transition-colors"
                            onClick={() => {
                              setShowProfileMenu(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                        <hr className="my-2 border-neutral-600" />
                        <button className="flex items-center space-x-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-neutral-600 transition-colors w-full text-left">
                          <LogOut className="h-4 w-4" />
                          <span>Sair</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button onClick={() => { setAuthModal("login"); setIsMenuOpen(false); }} className="w-full px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:border-purple-500 hover:text-purple-500 transition-colors mb-2">Entrar</button>
                  <button onClick={() => { setAuthModal("register"); setIsMenuOpen(false); }} className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">Registrar</button>
                </>
              )}
            </div>
          </nav>
        )}
      </header>
      <AuthModal type={authModal} onClose={() => setAuthModal(null)} onSwitchMode={setAuthModal} />
    </>
  )
}
