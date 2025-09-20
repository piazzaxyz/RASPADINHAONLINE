"use client"

import { Play, Zap, RotateCcw, ShoppingCart, RefreshCw, AlertCircle } from "lucide-react"

interface GameControlsProps {
  isPlaying: boolean
  currentPrice: number
  boostActive: boolean
  onStartGame: () => void
  onAutoPlay: () => void
  onToggleBoost: () => void
  onResetGame: () => void
  formatCurrency: (value: number) => string
  isLoggedIn: boolean
  balance: number
}

export default function GameControls({
  isPlaying,
  currentPrice,
  boostActive,
  onStartGame,
  onAutoPlay,
  onToggleBoost,
  onResetGame,
  formatCurrency,
  isLoggedIn,
  balance
}: GameControlsProps) {
  const hasInsufficientBalance = balance < currentPrice

  return (
    <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600">
      <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center">Controles do Jogo</h3>
      
      {/* Main Play Button */}
      <div className="space-y-3 sm:space-y-4">
        {!isPlaying ? (
          <div className="space-y-3">
            <button
              onClick={onStartGame}
              disabled={!isLoggedIn || hasInsufficientBalance}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg disabled:shadow-none transform hover:scale-105 disabled:hover:scale-100 text-sm sm:text-lg"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Jogar {formatCurrency(currentPrice)}</span>
            </button>

            {hasInsufficientBalance && isLoggedIn && (
              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-3 flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-xs sm:text-sm">
                  Saldo insuficiente. Faça um depósito para continuar jogando.
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onResetGame}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Resetar Jogo</span>
          </button>
        )}

        {/* Secondary Controls */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <button
            onClick={onToggleBoost}
            disabled={isPlaying}
            className={`flex items-center justify-center space-x-1 sm:space-x-2 py-2 sm:py-3 font-medium rounded-lg transition-all duration-300 text-xs sm:text-sm ${
              boostActive
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105"
                : "bg-yellow-500/20 border border-yellow-500 text-yellow-400 hover:bg-yellow-500/30"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Zap className={`h-3 w-3 sm:h-4 sm:w-4 ${boostActive ? "animate-pulse" : ""}`} />
            <span>{boostActive ? "Boost ON" : "Boost 2x"}</span>
          </button>

          <button
            onClick={onAutoPlay}
            disabled={isPlaying || !isLoggedIn || hasInsufficientBalance}
            className="flex items-center justify-center space-x-1 sm:space-x-2 py-2 sm:py-3 bg-blue-500/20 border border-blue-500 text-blue-400 hover:bg-blue-500/30 font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
          >
            <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Auto</span>
          </button>
        </div>

        {/* Boost Info */}
        {boostActive && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-3">
            <p className="text-yellow-400 text-xs sm:text-sm text-center">
              🔥 <strong>Boost Ativo:</strong> Dobra o preço mas aumenta suas chances de ganhar!
            </p>
          </div>
        )}

        {/* Game Rules */}
        <div className="bg-neutral-600/50 rounded-lg p-3 sm:p-4 mt-3">
          <h4 className="text-xs sm:text-sm font-bold text-white mb-2">Como Ganhar:</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• Raspe todos os 9 quadrados</li>
            <li>• Reúna 3 símbolos iguais</li>
            <li>• Ganhos são creditados automaticamente</li>
            <li>• Use o Boost para dobrar suas chances</li>
          </ul>
        </div>
      </div>
    </div>
  )
}