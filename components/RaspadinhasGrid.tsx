"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Grid3X3, List, Play, Eye, Star, X } from "lucide-react"

interface Prize {
  id: string
  name: string
  value: number
  image: string
  quantity: number
  remaining: number
}

interface Raspadinha {
  id: string
  title: string
  maxPrize: number
  playPrice: number
  progress: number
  color: string
  gradient: string
  remaining: number
  total: number
  category: string
  featured: boolean
  difficulty: "easy" | "medium" | "hard"
  rtp: number
  prizes: Prize[]
}

export default function RaspadinhasGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("featured")
  const [showPrizes, setShowPrizes] = useState<string | null>(null)

  const raspadinhas: Raspadinha[] = [
    {
      id: "relampago",
      title: "Raspa Relâmpago",
      maxPrize: 2000.0,
      playPrice: 10.0,
      progress: 65,
      color: "yellow",
      gradient: "from-yellow-500 to-orange-600",
      remaining: 847,
      total: 2000,
      category: "premium",
      featured: true,
      difficulty: "medium",
      rtp: 85,
      prizes: [
        {
          id: "1",
          name: "R$ 2.000 em Dinheiro",
          value: 2000,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 5,
          remaining: 2,
        },
        {
          id: "2",
          name: "iPhone 15 Pro",
          value: 1500,
          image:
            "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 10,
          remaining: 4,
        },
        {
          id: "3",
          name: "PlayStation 5",
          value: 800,
          image:
            "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 20,
          remaining: 8,
        },
        {
          id: "4",
          name: "R$ 500 em Dinheiro",
          value: 500,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 50,
          remaining: 23,
        },
      ],
    },
    {
      id: "suprema",
      title: "Raspadinha Suprema",
      maxPrize: 1000.0,
      playPrice: 5.0,
      progress: 80,
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      remaining: 312,
      total: 1500,
      category: "premium",
      featured: true,
      difficulty: "medium",
      rtp: 82,
      prizes: [
        {
          id: "1",
          name: "R$ 1.000 em Dinheiro",
          value: 1000,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 8,
          remaining: 3,
        },
        {
          id: "2",
          name: 'Smart TV 55"',
          value: 700,
          image:
            "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 15,
          remaining: 5,
        },
        {
          id: "3",
          name: "Notebook Gamer",
          value: 600,
          image:
            "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 25,
          remaining: 12,
        },
      ],
    },
    {
      id: "centavos",
      title: "Centavos Milionários",
      maxPrize: 100.0,
      playPrice: 1.0,
      progress: 45,
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      remaining: 1654,
      total: 3000,
      category: "basic",
      featured: true,
      difficulty: "easy",
      rtp: 88,
      prizes: [
        {
          id: "1",
          name: "R$ 100 em Dinheiro",
          value: 100,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 20,
          remaining: 15,
        },
        {
          id: "2",
          name: "Smartwatch",
          value: 80,
          image:
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 40,
          remaining: 25,
        },
        {
          id: "3",
          name: "Fone Bluetooth",
          value: 50,
          image:
            "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 80,
          remaining: 45,
        },
      ],
    },
    {
      id: "mega-premio",
      title: "Mega Prêmio",
      maxPrize: 50000.0,
      playPrice: 25.0,
      progress: 25,
      color: "red",
      gradient: "from-red-500 to-pink-600",
      remaining: 1875,
      total: 2500,
      category: "vip",
      featured: false,
      difficulty: "hard",
      rtp: 90,
      prizes: [
        {
          id: "1",
          name: "R$ 50.000 em Dinheiro",
          value: 50000,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 2,
          remaining: 1,
        },
        {
          id: "2",
          name: "Carro 0KM",
          value: 45000,
          image:
            "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 3,
          remaining: 2,
        },
        {
          id: "3",
          name: "Moto 0KM",
          value: 12000,
          image:
            "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 5,
          remaining: 3,
        },
      ],
    },
    {
      id: "turbo",
      title: "Turbo Cash",
      maxPrize: 5000.0,
      playPrice: 15.0,
      progress: 55,
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      remaining: 678,
      total: 1200,
      category: "premium",
      featured: false,
      difficulty: "medium",
      rtp: 84,
      prizes: [
        {
          id: "1",
          name: "R$ 5.000 em Dinheiro",
          value: 5000,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 6,
          remaining: 3,
        },
        {
          id: "2",
          name: "iPad Pro",
          value: 3000,
          image:
            "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 12,
          remaining: 6,
        },
      ],
    },
    {
      id: "express",
      title: "Express Winner",
      maxPrize: 500.0,
      playPrice: 3.0,
      progress: 70,
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      remaining: 456,
      total: 1000,
      category: "basic",
      featured: false,
      difficulty: "easy",
      rtp: 86,
      prizes: [
        {
          id: "1",
          name: "R$ 500 em Dinheiro",
          value: 500,
          image:
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 15,
          remaining: 8,
        },
        {
          id: "2",
          name: "Smartphone",
          value: 400,
          image:
            "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          quantity: 25,
          remaining: 12,
        },
      ],
    },
  ]

  const categories = [
    { value: "all", label: "Todas" },
    { value: "basic", label: "Básico" },
    { value: "premium", label: "Premium" },
    { value: "vip", label: "VIP" },
  ]

  const sortOptions = [
    { value: "featured", label: "Destaques" },
    { value: "price-low", label: "Menor Preço" },
    { value: "price-high", label: "Maior Preço" },
    { value: "prize-high", label: "Maior Prêmio" },
    { value: "progress", label: "Quase Esgotado" },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-red-500"
    if (progress >= 60) return "bg-yellow-500"
    return "bg-emerald-500"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-500"
      case "medium":
        return "text-yellow-500"
      case "hard":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const filteredAndSortedRaspadinhas = raspadinhas
    .filter((item) => filterCategory === "all" || item.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return Number(b.featured) - Number(a.featured)
        case "price-low":
          return a.playPrice - b.playPrice
        case "price-high":
          return b.playPrice - a.playPrice
        case "prize-high":
          return b.maxPrize - a.maxPrize
        case "progress":
          return b.progress - a.progress
        default:
          return 0
      }
    })

  const PrizesModal = ({ raspadinha }: { raspadinha: Raspadinha }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPrizes(null)} />
      <div className="relative bg-neutral-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-2xl border border-neutral-600 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-2xl font-bold text-white pr-4">{raspadinha.title} - Prêmios</h2>
          <button 
            onClick={() => setShowPrizes(null)} 
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-neutral-600 rounded-lg flex-shrink-0"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {raspadinha.prizes.map((prize) => (
            <div key={prize.id} className="bg-neutral-600/50 rounded-lg p-3 sm:p-4 border border-neutral-500">
              <img
                src={prize.image || "/placeholder.svg"}
                alt={prize.name}
                className="w-full h-24 sm:h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{prize.name}</h3>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-yellow-500 font-bold">{formatCurrency(prize.value)}</span>
                <span className="text-gray-400">
                  {prize.remaining}/{prize.quantity} restantes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Filters and Controls */}
      <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-neutral-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Search */}
          <div className="relative lg:col-span-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar raspadinha..."
              className="w-full pl-10 pr-4 py-2 sm:py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none appearance-none cursor-pointer text-sm"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none appearance-none cursor-pointer text-sm"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* View Mode */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 sm:p-3 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-purple-600 text-white" : "bg-neutral-600 text-gray-400 hover:text-white"
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 sm:p-3 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-purple-600 text-white" : "bg-neutral-600 text-gray-400 hover:text-white"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-400 text-sm">
          Mostrando {filteredAndSortedRaspadinhas.length} de {raspadinhas.length} raspadinhas
        </p>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredAndSortedRaspadinhas.map((card) => (
            <div
              key={card.id}
              className="group bg-neutral-700/50 border border-neutral-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">{card.title}</h3>
                    {card.featured && <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs">
                    <span className="px-2 py-1 bg-neutral-600 rounded text-gray-300">
                      {card.category.toUpperCase()}
                    </span>
                    <span className={`font-medium ${getDifficultyColor(card.difficulty)}`}>
                      {card.difficulty.toUpperCase()}
                    </span>
                    <span className="text-gray-500">RTP: {card.rtp}%</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${card.gradient} flex-shrink-0`} />
              </div>

              {/* Prize Info */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div>
                  <p className="text-xs text-gray-400 mb-1">PRÊMIO MÁXIMO</p>
                  <p className="text-lg sm:text-xl font-bold text-yellow-500">{formatCurrency(card.maxPrize)}</p>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Restantes: {card.remaining.toLocaleString()}</span>
                    <span>{card.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(card.progress)}`}
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Link href={`/raspadinha/${card.id}`}>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base">
                    <Play className="h-4 w-4" />
                    <span>Jogar {formatCurrency(card.playPrice)}</span>
                  </button>
                </Link>
                <button
                  onClick={() => setShowPrizes(card.id)}
                  className="w-full border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-500 font-medium py-2 sm:py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-2 text-xs sm:text-sm"
                >
                  <Eye className="h-4 w-4" />
                  <span>VER PRÊMIOS</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredAndSortedRaspadinhas.map((card) => (
            <div
              key={card.id}
              className="bg-neutral-700/50 border border-neutral-600 rounded-xl p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                {/* Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${card.gradient}`} />
                    <h3 className="text-base sm:text-lg font-bold text-white">{card.title}</h3>
                    {card.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-neutral-600 rounded text-gray-300">
                      {card.category.toUpperCase()}
                    </span>
                    <span className={getDifficultyColor(card.difficulty)}>{card.difficulty.toUpperCase()}</span>
                  </div>
                </div>

                {/* Prize */}
                <div>
                  <p className="text-xs text-gray-400">Prêmio Máximo</p>
                  <p className="text-base sm:text-lg font-bold text-yellow-500">{formatCurrency(card.maxPrize)}</p>
                </div>

                {/* Progress */}
                <div>
                  <p className="text-xs text-gray-400 mb-1">Restantes: {card.remaining.toLocaleString()}</p>
                  <div className="w-full bg-neutral-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(card.progress)}`}
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Link href={`/raspadinha/${card.id}`}>
                    <button className="w-full px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-sm">
                      Jogar {formatCurrency(card.playPrice)}
                    </button>
                  </Link>
                  <button
                    onClick={() => setShowPrizes(card.id)}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-500 font-medium rounded-lg transition-colors text-sm"
                  >
                    Ver Prêmios
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredAndSortedRaspadinhas.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Nenhuma raspadinha encontrada</h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">Tente ajustar os filtros ou buscar por outro termo</p>
          <button
            onClick={() => {
              setFilterCategory("all")
              setSortBy("featured")
            }}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Prizes Modal */}
      {showPrizes && <PrizesModal raspadinha={raspadinhas.find((r) => r.id === showPrizes)!} />}
    </>
  )
}