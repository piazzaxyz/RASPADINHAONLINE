"use client"

import { Radio, User, Clock, Star } from "lucide-react"
import { Winner } from "./ScratchGameClient"
import { useMemo } from "react"

interface LiveWinnersProps {
  winners: Winner[]
}

export default function LiveWinners({ winners }: LiveWinnersProps) {
  // Otimiza a renderização dos vencedores duplicados
  const duplicatedWinners = useMemo(() => {
    if (!winners || winners.length === 0) return []
    return [...winners, ...winners]
  }, [winners])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
    if (seconds < 60) return "agora mesmo"
    if (seconds < 120) return "1 min atrás"
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes} min atrás`
    const hours = Math.floor(minutes / 60)
    return `${hours}h atrás`
  }
  
  // Se não houver ganhadores, não renderiza nada para evitar um espaço vazio
  if (!winners || winners.length === 0) {
    return null
  }

  return (
    <div className="bg-neutral-700/50 border-y border-neutral-600 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse" />
            <Radio className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
          </div>
          <h2 className="text-sm sm:text-lg font-bold text-white">GANHADORES AO VIVO</h2>
        </div>

        {/* 👇 O NOME DA CLASSE FOI CORRIGIDO AQUI 👇 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-slow space-x-3 sm:space-x-4">
            {duplicatedWinners.map((winner, index) => (
              <div
                key={`${winner.id}-${index}`}
                className="bg-neutral-600/80 border border-purple-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 min-w-[280px] sm:min-w-[320px] flex-shrink-0 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white truncate">{winner.name}</span>
                  <span className="text-xs font-bold bg-green-500/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-green-400 whitespace-nowrap">
                    GANHOU!
                  </span>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-purple-300 flex items-center space-x-1 truncate">
                      <Star className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{winner.prize}</span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-yellow-400 whitespace-nowrap">
                      {formatCurrency(winner.value)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3 flex-shrink-0" />
                    <span>{formatTimeAgo(winner.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}