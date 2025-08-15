"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Play, Zap, RotateCcw, Users, Trophy, Star, AlertTriangle, X } from "lucide-react"
import AuthModal from "@/components/AuthModal"

interface Prize {
  id: string
  name: string
  value: number
  image: string
  symbol: string
}

interface ScratchCard {
  id: number
  symbol: string
  isScratched: boolean
  prize?: Prize
}

export default function CentavosPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userBalance, setUserBalance] = useState(50.0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [cards, setCards] = useState<ScratchCard[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameResult, setGameResult] = useState<{ won: boolean; prize?: Prize; winningSymbol?: string } | null>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [boostActive, setBoostActive] = useState(false)
  const [scratchedCount, setScratchedCount] = useState(0)

  const gamePrice = 1.0
  const boostPrice = gamePrice * 2

  const prizes: Prize[] = [
    { id: "1", name: "R$ 100 em Dinheiro", value: 100, image: "/scattered-currency.png", symbol: "💰" },
    { id: "2", name: "Smartwatch", value: 80, image: "/modern-smartwatch.png", symbol: "⌚" },
    { id: "3", name: "Fone Bluetooth", value: 50, image: "/diverse-people-listening-headphones.png", symbol: "🎧" },
    { id: "4", name: "R$ 25 em Dinheiro", value: 25, image: "/scattered-currency.png", symbol: "💵" },
    { id: "5", name: "Carregador Portátil", value: 30, image: "/portable-charger.png", symbol: "🔋" },
    { id: "6", name: "R$ 10 em Dinheiro", value: 10, image: "/scattered-currency.png", symbol: "💸" },
  ]

  const liveWinners = [
    { name: "Maria S.", prize: "R$ 100", time: "2 min atrás" },
    { name: "João P.", prize: "Smartwatch", time: "5 min atrás" },
    { name: "Ana L.", prize: "R$ 50", time: "8 min atrás" },
    { name: "Carlos M.", prize: "Fone Bluetooth", time: "12 min atrás" },
  ]

  const initializeGame = () => {
    const newCards: ScratchCard[] = []
    const baseWinChance = 0.15 // 15% base chance
    const actualWinChance = boostActive ? baseWinChance + 0.2 : baseWinChance // +20% real boost

    const willWin = Math.random() < actualWinChance
    let winningSymbol = ""
    let winningPrize: Prize | undefined

    if (willWin) {
      winningPrize = prizes[Math.floor(Math.random() * prizes.length)]
      winningSymbol = winningPrize.symbol
    }

    for (let i = 0; i < 9; i++) {
      const card: ScratchCard = {
        id: i,
        symbol: "",
        isScratched: false,
      }

      if (willWin && i < 3) {
        card.symbol = winningSymbol
        card.prize = winningPrize
      } else {
        const availableSymbols = prizes.filter((p) => p.symbol !== winningSymbol)
        const randomPrize = availableSymbols[Math.floor(Math.random() * availableSymbols.length)]
        card.symbol = randomPrize.symbol
      }

      newCards.push(card)
    }

    // Shuffle cards
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newCards[i], newCards[j]] = [newCards[j], newCards[i]]
    }

    setCards(newCards)
    setGameResult(null)
    setScratchedCount(0)
  }

  const scratchCard = (cardId: number) => {
    if (!isLoggedIn || !isPlaying) return

    setCards((prev) => prev.map((card) => (card.id === cardId ? { ...card, isScratched: true } : card)))

    setScratchedCount((prev) => prev + 1)
  }

  const checkWin = () => {
    const scratchedCards = cards.filter((card) => card.isScratched)
    if (scratchedCards.length < 9) return

    const symbolCounts: { [key: string]: { count: number; prize?: Prize } } = {}

    scratchedCards.forEach((card) => {
      if (!symbolCounts[card.symbol]) {
        symbolCounts[card.symbol] = { count: 0, prize: card.prize }
      }
      symbolCounts[card.symbol].count++
    })

    const winningEntry = Object.entries(symbolCounts).find(([_, data]) => data.count >= 3)

    if (winningEntry) {
      const [symbol, data] = winningEntry
      setGameResult({ won: true, prize: data.prize, winningSymbol: symbol })
      if (data.prize) {
        setUserBalance((prev) => prev + data.prize.value)
      }
    } else {
      setGameResult({ won: false })
    }

    setIsPlaying(false)
  }

  useEffect(() => {
    if (scratchedCount === 9) {
      setTimeout(checkWin, 500)
    }
  }, [scratchedCount])

  const startGame = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true)
      return
    }

    const cost = boostActive ? boostPrice : gamePrice
    if (userBalance < cost) {
      alert("Saldo insuficiente! Faça um depósito para continuar jogando.")
      return
    }

    setUserBalance((prev) => prev - cost)
    setIsPlaying(true)
    initializeGame()
  }

  const autoPlay = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true)
      return
    }

    const cost = boostActive ? boostPrice : gamePrice
    if (userBalance < cost) {
      alert("Saldo insuficiente! Faça um depósito para continuar jogando.")
      return
    }

    setIsAutoPlay(true)
    startGame()

    setTimeout(() => {
      setCards((prev) => prev.map((card) => ({ ...card, isScratched: true })))
      setScratchedCount(9)
      setIsAutoPlay(false)
    }, 2000)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      {/* Live Winners Carousel */}
      <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border-y border-purple-500/20 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 overflow-hidden">
            <div className="flex items-center space-x-2 text-purple-400 whitespace-nowrap">
              <Users className="h-4 w-4" />
              <span className="font-medium">Ganhadores ao vivo:</span>
            </div>
            <div className="flex space-x-8 animate-scroll">
              {[...liveWinners, ...liveWinners].map((winner, index) => (
                <div key={index} className="flex items-center space-x-2 text-white whitespace-nowrap">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-sm">
                    {winner.name} ganhou {winner.prize} • {winner.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/raspadinhas">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Centavos Milionários</h1>
              <p className="text-gray-400">Raspadinha de R$ 1,00 • Prêmios de até R$ 100</p>
            </div>
          </div>
          {isLoggedIn && (
            <div className="text-right">
              <p className="text-sm text-gray-400">Seu saldo</p>
              <p className="text-xl font-bold text-green-500">{formatCurrency(userBalance)}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            {/* Scratch Cards */}
            <div className="bg-neutral-700/50 rounded-2xl p-6 border border-neutral-600 mb-6">
              {!isLoggedIn && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">ADQUIRA!</h3>
                    <p className="text-gray-300 mb-6">
                      Compre sua ficha e raspe os 9 quadradinhos
                      <br />
                      para ganhar prêmios incríveis!
                    </p>
                    <button
                      onClick={() => setShowAuthModal(true)}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                    >
                      Fazer Login
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => scratchCard(card.id)}
                    className={`aspect-square bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-4xl cursor-pointer transition-all duration-300 ${
                      card.isScratched ? "bg-neutral-600 transform scale-105" : "hover:scale-105 hover:shadow-lg"
                    } ${!isLoggedIn || !isPlaying ? "pointer-events-none" : ""}`}
                  >
                    {card.isScratched ? (
                      <span className="text-white">{card.symbol}</span>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">?</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {gameResult && (
                <div className="mt-6 text-center">
                  {gameResult.won ? (
                    <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                      <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-400 mb-2">Parabéns! Você ganhou!</h3>
                      <p className="text-white text-lg">{gameResult.prize?.name}</p>
                      <p className="text-yellow-500 font-bold text-xl">
                        {formatCurrency(gameResult.prize?.value || 0)}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6">
                      <X className="h-12 w-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-red-400 mb-2">Não foi desta vez!</h3>
                      <p className="text-gray-300">Tente novamente e boa sorte!</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Game Controls */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <button
                  onClick={startGame}
                  disabled={isPlaying}
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-bold rounded-lg transition-colors"
                >
                  <Play className="h-4 w-4" />
                  <span>Jogar {formatCurrency(boostActive ? boostPrice : gamePrice)}</span>
                </button>

                <button
                  onClick={() => setBoostActive(!boostActive)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                    boostActive
                      ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                      : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                  }`}
                >
                  <Zap className="h-4 w-4" />
                  <span>Boost 8x</span>
                </button>

                <button
                  onClick={autoPlay}
                  disabled={isPlaying || isAutoPlay}
                  className="flex items-center space-x-2 px-4 py-3 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-500 font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Auto</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Info */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-white mb-4">Como Jogar</h3>
              <p className="text-gray-300 text-sm mb-4">
                Reúna 3 imagens iguais e conquiste seu prêmio! O valor correspondente será creditado automaticamente na
                sua conta. Se preferir receber o produto físico, basta entrar em contato com o nosso suporte.
              </p>
            </div>

            {/* Prizes */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-white mb-4">Prêmios Disponíveis</h3>
              <div className="space-y-3">
                {prizes.map((prize) => (
                  <div key={prize.id} className="flex items-center justify-between p-3 bg-neutral-600/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{prize.symbol}</span>
                      <span className="text-white text-sm">{prize.name}</span>
                    </div>
                    <span className="text-yellow-500 font-bold text-sm">{formatCurrency(prize.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            type={authMode}
            onSwitchMode={() => setAuthMode(authMode === "login" ? "register" : "login")}
          />
        )}
      </div>
    </div>
  )
}
