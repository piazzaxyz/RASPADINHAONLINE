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
  const [isLoggedIn] = useState(false) // Simular estado de login
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/raspadinhas", label: "Raspadinhas" },
    { href: "/indique-e-ganhe", label: "Indique e Ganhe" },
  ]

  const profileMenuItems = [
    { href: "/conta", label: "Conta", icon: User },
    { href: "/sacar", label: "Sacar", icon: CreditCard },
    { href: "/historico-jogos", label: "Histórico de Jogos", icon: History },
    { href: "/transacoes", label: "Transações", icon: Wallet },
    { href: "/entregas", label: "Entregas", icon: Package },
    { href: "/seguranca", label: "Segurança", icon: Shield },
  ]

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-neutral-700/95 backdrop-blur-sm border-b border-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/RASPE & BRILHE.png" // alterado de .png para .svg
                alt="Raspe & Brilhe"
                width={120}
                height={40}
                className="h-32 w-32"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-150 hover:text-purple-500 active:scale-95 active:ring-2 active:ring-purple-500/50 rounded-md px-3 py-2 ${
                    isActive(item.href) ? "text-purple-500 ring-2 ring-purple-500/50 backdrop-blur-sm" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth/Profile */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  {/* Balance */}
                  <div className="flex items-center space-x-2 bg-neutral-600 px-3 py-2 rounded-lg">
                    <Wallet className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-white">R$ 1.247,50</span>
                  </div>

                  {/* Deposit Button */}
                  <Link href="/depositar">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Depositar
                    </button>
                  </Link>

                  {/* Withdraw Button */}
                  <Link href="/sacar">
                    <button className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500/10 text-sm font-medium rounded-lg transition-colors">
                      Sacar
                    </button>
                  </Link>

                  {/* Profile Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {showProfileMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-neutral-700 rounded-lg shadow-lg border border-neutral-600 py-2">
                        {profileMenuItems.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-600 transition-colors"
                              onClick={() => setShowProfileMenu(false)}
                            >
                              <Icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </Link>
                          )
                        })}
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
                  <button
                    onClick={() => setAuthModal("login")}
                    className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:border-purple-500 hover:text-purple-500 transition-colors"
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => setAuthModal("register")}
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Registrar
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-400 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-600">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-150 active:scale-95 active:ring-2 active:ring-purple-500/50 ${
                      isActive(item.href)
                        ? "text-purple-500 bg-neutral-700 ring-2 ring-purple-500/50 backdrop-blur-sm"
                        : "text-gray-300 hover:text-white hover:bg-neutral-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {isLoggedIn ? (
                <div className="mt-4 pt-4 border-t border-neutral-600 space-y-2">
                  <div className="px-3 py-2 bg-neutral-700 rounded-md">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Saldo:</span>
                      <span className="text-green-400 font-bold">R$ 1.247,50</span>
                    </div>
                  </div>
                  <Link href="/depositar">
                    <button className="block w-full px-3 py-2 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
                      Depositar
                    </button>
                  </Link>
                  <Link href="/sacar">
                    <button className="block w-full px-3 py-2 text-base font-medium text-purple-400 border border-purple-500 rounded-md hover:bg-purple-500/10 transition-colors">
                      Sacar
                    </button>
                  </Link>
                  {profileMenuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-700 rounded-md transition-all duration-150 active:scale-95 active:ring-2 active:ring-purple-500/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                  <button className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-red-400 hover:text-red-300 hover:bg-neutral-700 rounded-md transition-all duration-150 active:scale-95 active:ring-2 active:ring-red-500/50 w-full text-left">
                    <LogOut className="h-5 w-5" />
                    <span>Sair</span>
                  </button>
                </div>
              ) : (
                <div className="mt-4 pt-4 border-t border-neutral-600 space-y-2">
                  <button
                    onClick={() => {
                      setAuthModal("login")
                      setIsMenuOpen(false)
                    }}
                    className="block w-full px-3 py-2 text-base font-medium text-gray-300 border border-gray-600 rounded-md hover:border-purple-500 hover:text-purple-500 transition-all duration-150 active:scale-95 active:ring-2 active:ring-purple-500/50"
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => {
                      setAuthModal("register")
                      setIsMenuOpen(false)
                    }}
                    className="block w-full px-3 py-2 text-base font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-all duration-150 active:scale-95 active:ring-2 active:ring-purple-500/50"
                  >
                    Registrar
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <AuthModal type={authModal} onClose={() => setAuthModal(null)} onSwitchMode={setAuthModal} />
    </>
  )
}
