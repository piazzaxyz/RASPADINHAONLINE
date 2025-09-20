"use client"

import { Gift, TrendingUp, Users, Zap, Crown, Star, RotateCcw, Play } from "lucide-react"
import { RaspadinhaConfig } from "./ScratchGameClient"

interface GameSidebarProps {
  game: RaspadinhaConfig
  formatCurrency: (value: number) => string
}

export default function GameSidebar({ game, formatCurrency }: GameSidebarProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vip': return Crown
      case 'premium': return Star
      case 'basic': return Gift
      default: return Gift
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vip': return 'text-yellow-500'
      case 'premium': return 'text-purple-500'
      case 'basic': return 'text-blue-500'
      default: return 'text-gray-500'
    }
  }

  const CategoryIcon = getCategoryIcon(game.category)

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Game Info Card */}
      <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
          <CategoryIcon className={`h-5 w-5 sm:h-6 sm:w-6 ${getCategoryColor(game.category)}`} />
          <h3 className="text-base sm:text-lg font-bold text-white">Informações do Jogo</h3>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <span className="text-gray-400 text-xs sm:text-sm">Categoria:</span>
            <span className={`font-bold text-xs sm:text-sm uppercase ${getCategoryColor(game.category)}`}>
              {game.category}
            </span>
          </div>
          
          <div className="flex justify-between items-center p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <span className="text-gray-400 text-xs sm:text-sm">Preço por Jogo:</span>
            <span className="text-white font-bold text-xs sm:text-sm">{formatCurrency(game.price)}</span>
          </div>
          
          <div className="flex justify-between items-center p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <span className="text-gray-400 text-xs sm:text-sm">Prêmio Máximo:</span>
            <span className="text-yellow-500 font-bold text-xs sm:text-sm">{formatCurrency(game.maxPrize)}</span>
          </div>
          
          <div className="flex justify-between items-center p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <span className="text-gray-400 text-xs sm:text-sm">Chance Base:</span>
            <span className="text-green-400 font-bold text-xs sm:text-sm">{(game.winChance * 100).toFixed(1)}%</span>
          </div>
        </div>
      </div>

      {/* Prizes List */}
      <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600">
        <div className="flex items-center space-x-2 mb-4">
          <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
          <h3 className="text-base sm:text-lg font-bold text-white">Tabela de Prêmios</h3>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {game.prizes.map((prize, index) => (
            <div
              key={prize.id}
              className="flex items-center justify-between p-2 sm:p-3 bg-neutral-600/50 rounded-lg hover:bg-neutral-600/70 transition-colors"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <span className="text-lg sm:text-2xl flex-shrink-0">{prize.symbol}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-white text-xs sm:text-sm font-medium truncate">{prize.name}</p>
                  <p className="text-gray-400 text-xs">
                    {prize.remaining}/{prize.quantity} restantes
                  </p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-yellow-500 font-bold text-xs sm:text-sm">{formatCurrency(prize.value)}</p>
                <div className="w-8 sm:w-12 bg-neutral-700 rounded-full h-1 sm:h-1.5 mt-1">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 sm:h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(prize.remaining / prize.quantity) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Features */}
      <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600">
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
          <h3 className="text-base sm:text-lg font-bold text-white">Recursos</h3>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <Play className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
            <span className="text-gray-300 text-xs sm:text-sm">Jogo Instantâneo</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 flex-shrink-0" />
            <span className="text-gray-300 text-xs sm:text-sm">Modo Boost 2x</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
            <span className="text-gray-300 text-xs sm:text-sm">Jogo Automático</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-neutral-600/50 rounded-lg">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 flex-shrink-0" />
            <span className="text-gray-300 text-xs sm:text-sm">Resultados Justos</span>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-4 sm:p-6 border border-purple-500/20">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
          <h3 className="text-sm font-bold text-white">Dica Pro</h3>
        </div>
        <p className="text-purple-300 text-xs leading-relaxed">
          Use o Boost quando sentir que é sua vez de ganhar! Ele dobra o investimento mas 
          aumenta significativamente suas chances de vitória.
        </p>
      </div>
    </div>
  )
}