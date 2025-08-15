"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Zap,
  RotateCcw,
  ShoppingCart,
  Gift,
  Trophy,
  User,
  Radio,
  Clock,
  AlertTriangle,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import AuthModal from "@/components/AuthModal"

interface Winner {
  id: number
  name: string
  prize: string
  value: number
  timestamp: Date
}

interface Prize {
  id: string
  name: string
  value: number
  image: string
  quantity: number
  remaining: number
  symbol: string
}

interface RaspadinhaConfig {
  id: string
  title: string
  price: number
  maxPrize: number
  image: string
  prizes: Prize[]
  description: string
  winChance: number
}

export default function RaspadinhaPage() {
  const params = useParams()
  const router = useRouter()
  const [balance] = useState(1247.5)
  const [isLoggedIn] = useState(false)
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null)
  const [winners, setWinners] = useState<Winner[]>([])
  const [scratchedCells, setScratchedCells] = useState<boolean[]>(Array(9).fill(false))
  const [gameResult, setGameResult] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const [winAmount, setWinAmount] = useState(0)
  const [winningPrize, setWinningPrize] = useState<Prize | null>(null)
  const [boostActive, setBoostActive] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [scratchAnimation, setScratchAnimation] = useState<number[]>([])

  // Configuração das raspadinhas
  const raspadinhasConfig: { [key: string]: RaspadinhaConfig } = {
    relampago: {
      id: "relampago",
      title: "Raspa Relâmpago",
      price: 10.0,
      maxPrize: 2000.0,
      image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Raspadinha clássica com prêmios de até R$ 2.000",
      winChance: 0.15,
      prizes: [
        {
          id: "1",
          name: "R$ 2.000 em Dinheiro",
          value: 2000,
          image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 5,
          remaining: 2,
          symbol: "💎",
        },
        {
          id: "2",
          name: "iPhone 15 Pro",
          value: 1500,
          image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 10,
          remaining: 4,
          symbol: "📱",
        },
        {
          id: "3",
          name: "PlayStation 5",
          value: 800,
          image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 20,
          remaining: 8,
          symbol: "🎮",
        },
        {
          id: "4",
          name: "R$ 500 em Dinheiro",
          value: 500,
          image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 50,
          remaining: 23,
          symbol: "💰",
        },
        {
          id: "5",
          name: "R$ 100 em Dinheiro",
          value: 100,
          image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 100,
          remaining: 45,
          symbol: "🍀",
        },
        {
          id: "6",
          name: "R$ 50 em Dinheiro",
          value: 50,
          image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 200,
          remaining: 120,
          symbol: "⭐",
        },
      ],
    },
    suprema: {
      id: "suprema",
      title: "Raspadinha Suprema",
      price: 5.0,
      maxPrize: 1000.0,
      image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Perfeita para jogadas rápidas com bons prêmios",
      winChance: 0.18,
      prizes: [
        {
          id: "1",
          name: "R$ 1.000 em Dinheiro",
          value: 1000,
          image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 8,
          remaining: 3,
          symbol: "💰",
        },
        {
          id: "2",
          name: 'Smart TV 55"',
          value: 700,
          image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 15,
          remaining: 5,
          symbol: "📺",
        },
        {
          id: "3",
          name: "Notebook Gamer",
          value: 600,
          image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 25,
          remaining: 12,
          symbol: "💻",
        },
      ],
    },
    "mega-premio": {
      id: "mega-premio",
      title: "Mega Prêmio",
      price: 25.0,
      maxPrize: 50000.0,
      image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Para quem busca os maiores prêmios! Raspadinha premium com jackpots incríveis",
      winChance: 0.12,
      prizes: [
        {
          id: "1",
          name: "R$ 50.000 em Dinheiro",
          value: 50000,
          image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 2,
          remaining: 1,
          symbol: "💎",
        },
        {
          id: "2",
          name: "Carro 0KM",
          value: 45000,
          image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 3,
          remaining: 2,
          symbol: "🚗",
        },
        {
          id: "3",
          name: "Moto 0KM",
          value: 12000,
          image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 5,
          remaining: 3,
          symbol: "🏍️",
        },
      ],
    },
  }

  const currentRaspadinha = raspadinhasConfig[params.id as string]

  // Redirecionar se raspadinha não existe
  useEffect(() => {
    if (!currentRaspadinha) {
      router.push("/raspadinhas")
    }
  }, [currentRaspadinha, router])

  const currentPrice = boostActive ? currentRaspadinha?.price * 2 : currentRaspadinha?.price

  const names = [
    "João S***",
    "Maria L***",
    "Pedro A***",
    "Ana C***",
    "Carlos M***",
    "Lucia R***",
    "Roberto F***",
    "Fernanda O***",
    "Marcos V***",
    "Julia B***",
  ]

  const generateRandomWinner = (): Winner => {
    if (!currentRaspadinha) return { id: 0, name: "", prize: "", value: 0, timestamp: new Date() }
    
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomPrize = currentRaspadinha.prizes[Math.floor(Math.random() * currentRaspadinha.prizes.length)]

    return {
      id: Date.now() + Math.random(),
      name: randomName,
      prize: randomPrize.name,
      value: randomPrize.value,
      timestamp: new Date(),
    }
  }

  useEffect(() => {
    if (!currentRaspadinha) return

    // Inicializar com alguns ganhadores
    const initialWinners = Array.from({ length: 6 }, () => generateRandomWinner())
    setWinners(initialWinners)

    // Adicionar novos ganhadores periodicamente
    const interval = setInterval(
      () => {
        const newWinner = generateRandomWinner()
        setWinners((prev) => [newWinner, ...prev.slice(0, 5)])
      },
      Math.random() * 4000 + 2000,
    )

    return () => clearInterval(interval)
  }, [currentRaspadinha])

  const generateGameResult = (): string[] => {
    if (!currentRaspadinha) return []

    const baseWinChance = currentRaspadinha.winChance
    const boostMultiplier = boostActive ? 1.2 : 1
    const finalWinChance = baseWinChance * boostMultiplier

    const willWin = Math.random() < finalWinChance

    if (willWin) {
      const winningSymbol = currentRaspadinha.prizes[Math.floor(Math.random() * currentRaspadinha.prizes.length)].symbol
      const result = Array(9).fill("❌")

      const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * positions.length)
        const position = positions.splice(randomIndex, 1)[0]
        result[position] = winningSymbol
      }

      const otherSymbols = currentRaspadinha.prizes.map((p) => p.symbol).filter((s) => s !== winningSymbol)
      positions.forEach((pos) => {
        result[pos] = otherSymbols[Math.floor(Math.random() * otherSymbols.length)]
      })

      return result
    } else {
      const symbols = currentRaspadinha.prizes.map((p) => p.symbol)
      const result = Array(9)
        .fill(0)
        .map(() => symbols[Math.floor(Math.random() * symbols.length)])

      const symbolCounts: { [key: string]: number } = {}
      result.forEach((symbol) => {
        symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1
      })

      Object.keys(symbolCounts).forEach((symbol) => {
        if (symbolCounts[symbol] >= 3) {
          const indices = result.map((s, i) => (s === symbol ? i : -1)).filter((i) => i !== -1)
          for (let i = 3; i < indices.length; i++) {
            const otherSymbols = symbols.filter((s) => s !== symbol)
            result[indices[i]] = otherSymbols[Math.floor(Math.random() * otherSymbols.length)]
          }
        }
      })

      return result
    }
  }

  const handleCellClick = (index: number) => {
    if (!isPlaying || scratchedCells[index] || isAutoPlaying) return

    setScratchAnimation((prev) => [...prev, index])
    setTimeout(() => {
      setScratchAnimation((prev) => prev.filter((i) => i !== index))
    }, 300)

    const newScratchedCells = [...scratchedCells]
    newScratchedCells[index] = true
    setScratchedCells(newScratchedCells)

    if (newScratchedCells.every((cell) => cell)) {
      setTimeout(() => checkWin(), 500)
    }
  }

  const checkWin = () => {
    if (!currentRaspadinha) return

    const symbolCounts: { [key: string]: number } = {}
    gameResult.forEach((symbol) => {
      symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1
    })

    const winningSymbol = Object.keys(symbolCounts).find((symbol) => symbolCounts[symbol] >= 3)

    if (winningSymbol) {
      const prize = currentRaspadinha.prizes.find((p) => p.symbol === winningSymbol)
      if (prize) {
        setHasWon(true)
        setWinAmount(prize.value)
        setWinningPrize(prize)

        const newWinner: Winner = {
          id: Date.now(),
          name: "Você",
          prize: prize.name,
          value: prize.value,
          timestamp: new Date(),
        }
        setWinners((prev) => [newWinner, ...prev.slice(0, 5)])
      }
    }

    setIsPlaying(false)
  }

  const startGame = () => {
    if (!isLoggedIn) {
      setAuthModal("login")
      return
    }

    if (!currentRaspadinha || balance < currentPrice) {
      router.push("/depositar")
      return
    }

    setIsPlaying(true)
    setScratchedCells(Array(9).fill(false))
    setHasWon(false)
    setWinAmount(0)
    setWinningPrize(null)

    const result = generateGameResult()
    setGameResult(result)
  }

  const autoPlay = () => {
    if (!isLoggedIn) {
      setAuthModal("login")
      return
    }

    if (!currentRaspadinha || balance < currentPrice) {
      router.push("/depositar")
      return
    }

    startGame()
    setIsAutoPlaying(true)

    let scratchedCount = 0
    const scratchInterval = setInterval(() => {
      setScratchedCells((prev) => {
        const newCells = [...prev]
        newCells[scratchedCount] = true
        return newCells
      })

      scratchedCount++
      if (scratchedCount >= 9) {
        clearInterval(scratchInterval)
        setIsAutoPlaying(false)
        setTimeout(() => checkWin(), 500)
      }
    }, 150)
  }

  const toggleBoost = () => {
    setBoostActive(!boostActive)
  }

  const resetGame = () => {
    setIsPlaying(false)
    setScratchedCells(Array(9).fill(false))
    setHasWon(false)
    setWinAmount(0)
    setWinningPrize(null)
    setGameResult([])
    setIsAutoPlaying(false)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 10) return "agora mesmo"
    if (seconds < 60) return `${seconds}s atrás`
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min atrás`
  }

  // Loading state ou raspadinha não encontrada
  if (!currentRaspadinha) {
    return (
      <div className="min-h-screen bg-neutral-600 pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Raspadinha não encontrada</h1>
          <p className="text-gray-400 mb-8">A raspadinha que você está procurando não existe.</p>
          <Link href="/raspadinhas">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
              Ver Todas as Raspadinhas
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-600">
      {/* Header */}
      <header className="bg-neutral-700/95 backdrop-blur-sm border-b border-neutral-600 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/LOGO DO RASPE & BRILHE.png"
                alt="Raspe & Brilhe"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/raspadinhas" className="text-purple-500 font-medium">
                Raspadinhas
              </Link>
              <Link href="/indique-e-ganhe" className="text-gray-300 hover:text-white transition-colors">
                Indique e Ganhe
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-2 bg-neutral-600 px-3 py-2 rounded-lg">
                  <span className="text-sm text-gray-300">Saldo:</span>
                  <span className="text-sm font-bold text-green-400">{formatCurrency(balance)}</span>
                </div>
                <Link href="/depositar">
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Depositar
                  </button>
                </Link>
                <Link href="/sacar">
                  <button className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500/10 text-sm font-medium rounded-lg transition-colors">
                    Sacar
                  </button>
                </Link>
                <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">Conta</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setAuthModal("login")}
                  className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500/10 text-sm font-medium rounded-lg transition-colors"
                >
                  Entrar
                </button>
                <button
                  onClick={() => setAuthModal("register")}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Registrar
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Live Winners */}
      <div className="bg-neutral-700/50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <Radio className="h-5 w-5 text-purple-500" />
            </div>
            <h2 className="text-lg font-bold text-white">AO VIVO</h2>
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">LIVE</div>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-fast space-x-4">
              {[...winners, ...winners].map((winner, index) => (
                <div
                  key={`${winner.id}-${index}`}
                  className="bg-neutral-600/50 border border-purple-500/30 rounded-lg p-3 min-w-[250px] flex-shrink-0"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white">{winner.name}</span>
                    <span className="text-xs text-green-400 font-bold bg-green-500/20 px-2 py-1 rounded-full">
                      GANHOU!
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-300">🎁 {winner.prize}</span>
                    <span className="text-sm font-bold text-yellow-400">{formatCurrency(winner.value)}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-400 mt-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatTimeAgo(winner.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Game Area */}
          <div className="space-y-6">
            {/* Back Button */}
            <Link
              href="/raspadinhas"
              className="inline-flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar às Raspadinhas</span>
            </Link>

            {/* Scratch Card */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-center relative overflow-hidden">
              {hasWon && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 animate-pulse" />
              )}

              <h2 className="text-2xl font-bold text-white mb-2">{currentRaspadinha.title}</h2>
              <p className="text-purple-200 mb-6">Reúna 3 símbolos iguais para ganhar!</p>

              {!isLoggedIn && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                  <div className="text-center p-6">
                    <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">ADQUIRA!</h3>
                    <p className="text-gray-300 mb-6">
                      Compre sua ficha e raspe os 9 quadradinhos
                      <br />
                      para ganhar prêmios incríveis!
                    </p>
                    <button
                      onClick={() => setAuthModal("login")}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                    >
                      Fazer Login
                    </button>
                  </div>
                </div>
              )}

              {/* Scratch Grid */}
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-6 relative z-0">
                {Array(9)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleCellClick(index)}
                      className={`aspect-square rounded-lg border-2 border-purple-300 flex items-center justify-center text-2xl font-bold transition-all duration-300 relative ${
                        scratchedCells[index]
                          ? "bg-white text-purple-800 shadow-lg transform scale-105"
                          : "bg-purple-400 hover:bg-purple-300 text-purple-800 cursor-pointer hover:scale-105"
                      } ${scratchAnimation.includes(index) ? "animate-bounce" : ""}`}
                      disabled={!isPlaying || isAutoPlaying}
                    >
                      {scratchedCells[index] ? (
                        <span className="animate-pulse">{gameResult[index]}</span>
                      ) : (
                        <span className="text-purple-600">?</span>
                      )}
                      {scratchAnimation.includes(index) && (
                        <div className="absolute inset-0 bg-yellow-400/50 rounded-lg animate-ping" />
                      )}
                    </button>
                  ))}
              </div>

              {hasWon && winningPrize && (
                <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500 rounded-lg p-6 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-yellow-400/10 animate-pulse" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
                      <Trophy className="h-8 w-8 text-yellow-400" />
                      <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">🎉 PARABÉNS! 🎉</h3>
                    <p className="text-green-300 text-lg mb-2">Você ganhou:</p>
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <span className="text-3xl">{winningPrize.symbol}</span>
                      <div className="text-center">
                        <p className="text-white font-bold">{winningPrize.name}</p>
                        <p className="text-yellow-400 text-2xl font-bold">{formatCurrency(winAmount)}</p>
                      </div>
                      <span className="text-3xl">{winningPrize.symbol}</span>
                    </div>
                    <p className="text-green-200 text-sm">O valor foi creditado automaticamente na sua conta!</p>
                  </div>
                </div>
              )}

              {/* Game Controls */}
              <div className="space-y-3 relative z-0">
                {!isPlaying ? (
                  <button
                    onClick={startGame}
                    className="w-full bg-white text-purple-800 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Jogar Agora {formatCurrency(currentPrice || 0)}</span>
                  </button>
                ) : (
                  <button
                    onClick={resetGame}
                    className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Resetar Jogo</span>
                  </button>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={toggleBoost}
                    className={`flex items-center justify-center space-x-2 py-2 font-medium rounded-lg transition-all duration-300 ${
                      boostActive
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105"
                        : "bg-yellow-500 text-yellow-900 hover:bg-yellow-400"
                    }`}
                  >
                    <Zap className={`h-4 w-4 ${boostActive ? "animate-pulse" : ""}`} />
                    <span>{boostActive ? "Boost 8x Ativo!" : "Aumentar 8x"}</span>
                  </button>

                  <button
                    onClick={autoPlay}
                    disabled={isPlaying}
                    className="flex items-center justify-center space-x-2 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 disabled:bg-gray-400 transition-colors"
                  >
                    <RotateCcw className={`h-4 w-4 ${isAutoPlaying ? "animate-spin" : ""}`} />
                    <span>Rodada Automática</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            {/* Game Details */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={currentRaspadinha.image || "/placeholder.svg"}
                  alt={currentRaspadinha.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold text-white">{currentRaspadinha.title}</h2>
                  <p className="text-gray-400">Preço: {formatCurrency(currentRaspadinha.price)}</p>
                  <p className="text-yellow-500 font-bold">Prêmio máximo: {formatCurrency(currentRaspadinha.maxPrize)}</p>
                  {boostActive && <p className="text-orange-400 font-bold text-sm">🔥 Chances aumentadas em 8x!</p>}
                </div>
              </div>

              <div className="bg-neutral-600/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Reúna 3 imagens iguais e conquiste seu prêmio!</h3>
                <p className="text-sm text-gray-300 mb-4">
                  O valor correspondente será creditado automaticamente na sua conta. Se preferir receber o produto
                  físico, basta entrar em contato com o nosso suporte.
                </p>
                <ol className="space-y-2 text-sm text-gray-300">
                  <li>1. Compre sua raspadinha</li>
                  <li>2. Clique nos quadrados para raspar</li>
                  <li>3. Reúna 3 símbolos iguais para ganhar</li>
                  <li>4. Prêmios são creditados automaticamente</li>
                </ol>
              </div>
            </div>

            {/* Prizes */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-2 mb-6">
                <Gift className="h-6 w-6 text-purple-500" />
                <h3 className="text-xl font-bold text-white">Prêmios Disponíveis</h3>
              </div>

              <div className="space-y-4">
                {currentRaspadinha.prizes.map((prize) => (
                  <div
                    key={prize.id}
                    className="flex items-center space-x-4 p-4 bg-neutral-600/50 rounded-lg hover:bg-neutral-600/70 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{prize.symbol}</span>
                      <img
                        src={prize.image || "/placeholder.svg"}
                        alt={prize.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{prize.name}</h4>
                      <p className="text-yellow-500 font-bold">{formatCurrency(prize.value)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Restantes</p>
                      <p className="text-sm font-bold text-white">
                        {prize.remaining}/{prize.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-fast {
          animation: scroll-fast 15s linear infinite;
        }
      `}</style>

      {authModal && (
        <AuthModal
          type={authModal}
          onClose={() => setAuthModal(null)}
          onSwitchMode={setAuthModal}
        />
      )}
    </div>
  )
}