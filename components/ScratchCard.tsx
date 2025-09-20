"use client"

import { AlertTriangle, Trophy, Sparkles } from "lucide-react"
import { Prize, RaspadinhaConfig } from "./ScratchGameClient"

interface ScratchCardProps {
  game: RaspadinhaConfig
  scratchedCells: boolean[]
  gameResult: string[]
  hasWon: boolean
  winningPrize: Prize | null
  winAmount: number
  isPlaying: boolean
  isAutoPlaying: boolean
  scratchAnimation: number[]
  onCellClick: (index: number) => void
  isLoggedIn: boolean
  setAuthModal: (modal: "login" | "register" | null) => void
  formatCurrency: (value: number) => string
  boostActive: boolean
}

export default function ScratchCard({
  game,
  scratchedCells,
  gameResult,
  hasWon,
  winningPrize,
  winAmount,
  isPlaying,
  isAutoPlaying,
  scratchAnimation,
  onCellClick,
  isLoggedIn,
  setAuthModal,
  formatCurrency,
  boostActive
}: ScratchCardProps) {
  return (
    <div className="bg-neutral-700/50 rounded-xl sm:rounded-2xl border border-neutral-600 overflow-hidden">
      {/* Game Header */}
      <div className={`bg-gradient-to-r ${game.gradient} p-4 sm:p-6 text-center relative`}>
        {hasWon && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 animate-pulse" />
        )}
        
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{game.title}</h2>
          <p className="text-white/90 mb-2 text-sm sm:text-base">{game.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="bg-black/20 px-2 sm:px-3 py-1 rounded-full text-white">
              Preço: {formatCurrency(game.price)}
            </span>
            <span className="bg-black/20 px-2 sm:px-3 py-1 rounded-full text-white">
              Prêmio Máx: {formatCurrency(game.maxPrize)}
            </span>
            {boostActive && (
              <span className="bg-yellow-500/90 px-2 sm:px-3 py-1 rounded-full text-yellow-900 font-bold animate-pulse">
                🔥 Boost 2x Ativo
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="p-4 sm:p-8 relative">
        {!isLoggedIn && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-b-xl sm:rounded-b-2xl flex items-center justify-center z-20">
            <div className="text-center p-4 sm:p-8 max-w-sm mx-auto">
              <AlertTriangle className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">ENTRE E JOGUE!</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Faça login ou registre-se para jogar esta raspadinha e concorrer a prêmios incríveis!
              </p>
              <div className="flex flex-col space-y-3 w-full">
                <button
                  onClick={() => setAuthModal("login")}
                  className="w-full px-4 sm:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                >
                  Fazer Login
                </button>
                <button
                  onClick={() => setAuthModal("register")}
                  className="w-full px-4 sm:px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold rounded-lg transition-colors"
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Instruction */}
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">
            {isPlaying ? "Raspe para revelar os símbolos" : "Reúna 3 símbolos iguais para ganhar!"}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            {isPlaying ? 
              (isAutoPlaying ? "Raspando automaticamente..." : "Toque nos quadrados para raspar") : 
              "Clique em 'Jogar' para começar"
            }
          </p>
        </div>

        {/* Scratch Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => onCellClick(index)}
                className={`aspect-square rounded-lg sm:rounded-xl border-2 sm:border-3 flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-300 relative overflow-hidden ${
                  scratchedCells[index]
                    ? "bg-white text-gray-800 shadow-xl transform scale-105 border-purple-400"
                    : `bg-gradient-to-br ${game.gradient} hover:scale-105 border-white/30 cursor-pointer hover:shadow-lg`
                } ${scratchAnimation.includes(index) ? "animate-bounce" : ""}`}
                disabled={!isPlaying || isAutoPlaying}
              >
                {scratchedCells[index] ? (
                  <span className="animate-pulse text-2xl sm:text-4xl">{gameResult[index]}</span>
                ) : (
                  <div className="flex items-center justify-center">
                    <span className="text-white/80 text-xl sm:text-2xl">?</span>
                  </div>
                )}
                
                {scratchAnimation.includes(index) && (
                  <div className="absolute inset-0 bg-yellow-400/50 rounded-lg sm:rounded-xl animate-ping" />
                )}
                
                {!scratchedCells[index] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                )}
              </button>
            ))}
        </div>

        {/* Win Animation */}
        {hasWon && winningPrize && (
          <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border-2 border-green-500 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-yellow-400/10 animate-pulse" />
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 animate-spin" />
                <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 animate-spin" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">🎉 PARABÉNS! 🎉</h3>
              <p className="text-green-300 text-base sm:text-lg mb-3">Você ganhou:</p>
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4">
                <span className="text-2xl sm:text-4xl animate-bounce">{winningPrize.symbol}</span>
                <div className="text-center">
                  <p className="text-white font-bold text-sm sm:text-lg">{winningPrize.name}</p>
                  <p className="text-yellow-400 text-2xl sm:text-3xl font-bold">{formatCurrency(winAmount)}</p>
                </div>
                <span className="text-2xl sm:text-4xl animate-bounce">{winningPrize.symbol}</span>
              </div>
              <p className="text-green-200 text-xs sm:text-sm bg-green-500/20 rounded-lg px-3 sm:px-4 py-2 inline-block">
                💰 Valor creditado automaticamente na sua conta!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}