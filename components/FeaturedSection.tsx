"use client"

import Link from "next/link"
import { Play, Gift, Eye, TrendingUp, X } from "lucide-react"
import { useState } from "react"

interface Prize {
  id: string
  name: string
  value: number
  image: string
  quantity: number
  remaining: number
}

interface RaspadinhaCard {
  id: string
  title: string
  maxPrize: number
  playPrice: number
  progress: number
  color: string
  gradient: string
  remaining: number
  total: number
  prizes: Prize[]
}

export default function FeaturedSection() {
  const [showPrizes, setShowPrizes] = useState<string | null>(null)

  const raspadinhas: RaspadinhaCard[] = [
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

  const PrizesModal = ({ raspadinha }: { raspadinha: RaspadinhaCard }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPrizes(null)} />
      <div className="relative bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl p-6 w-full max-w-3xl border border-purple-500/30 max-h-[85vh] overflow-y-auto shadow-2xl shadow-purple-500/20 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-purple-600 hover:scrollbar-thumb-purple-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${raspadinha.gradient}`} />
            <h2 className="text-2xl font-bold text-white">{raspadinha.title}</h2>
            <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
              Prêmios Disponíveis
            </span>
          </div>
          <button
            onClick={() => setShowPrizes(null)}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-neutral-600 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {raspadinha.prizes.map((prize) => (
            <div
              key={prize.id}
              className="bg-neutral-600/50 rounded-xl p-4 border border-neutral-500/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <img
                src={prize.image || "/placeholder.svg"}
                alt={prize.name}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-bold text-white mb-2 text-sm">{prize.name}</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-yellow-500 font-bold">{formatCurrency(prize.value)}</span>
                <span className="text-gray-400">
                  {prize.remaining}/{prize.quantity} restantes
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-neutral-700 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(prize.remaining / prize.quantity) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-4 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Pronto para jogar?</p>
              <p className="text-gray-400 text-sm">Clique em "Jogar Agora" e concorra a todos esses prêmios!</p>
            </div>
            <Link href={`/raspadinha/${raspadinha.id}`}>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Jogar Agora</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Gift className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Destaques</h2>
          </div>
          <Link
            href="/raspadinhas"
            className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
          >
            <span className="text-sm font-medium">Ver mais</span>
            <TrendingUp className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {raspadinhas.map((card, index) => (
            <div
              key={card.id}
              className="group bg-neutral-700/50 border border-neutral-600 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${card.gradient}`} />
              </div>

              {/* Prize Info */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">PRÊMIOS DE ATÉ</p>
                  <p className="text-2xl font-bold text-yellow-500">{formatCurrency(card.maxPrize)}</p>
                </div>

                {/* Progress Bar */}
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
              <div className="space-y-3">
                <Link href={`/raspadinha/${card.id}`}>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors group-hover:shadow-lg group-hover:shadow-purple-500/25 flex items-center justify-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>Jogar {formatCurrency(card.playPrice)}</span>
                  </button>
                </Link>

                <button
                  onClick={() => setShowPrizes(card.id)}
                  className="w-full border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-500 font-medium py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>VER PRÊMIOS</span>
                </button>
              </div>

              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-neutral-600">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Total: {card.total.toLocaleString()}</span>
                  <span>Vendidos: {(card.total - card.remaining).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para começar a ganhar?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Escolha sua raspadinha favorita e concorra a prêmios incríveis. Quanto mais você joga, maiores são suas
              chances de ganhar!
            </p>
            <Link href="/raspadinhas">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors hover-scale">
                VER TODAS AS RASPADINHAS
              </button>
            </Link>
          </div>
        </div>

        {showPrizes && <PrizesModal raspadinha={raspadinhas.find((r) => r.id === showPrizes)!} />}
      </div>
    </section>
  )
}
