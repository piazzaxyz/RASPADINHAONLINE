"use client"

import { useState, useEffect, useCallback } from "react"
import { Radio, Trophy, Star, User, TrendingUp, Clock } from "lucide-react"

// INTERFACE DO GANHADOR (sem alterações)
interface Winner {
  id: number
  name: string
  prize: string
  value: number
  timestamp: Date
  game: string
}

// DADOS CONSTANTES (MOVEMOS PARA FORA DO COMPONENTE)
// Isso evita que sejam recriados a cada renderização, corrigindo o loop infinito.
// Também adicionei mais variedade para ficar mais "dahora" :)
const NAMES = [
  "João S.", "Maria L.", "Pedro A.", "Ana C.", "Carlos M.",
  "Beatriz P.", "Lucas F.", "Juliana R.", "Rafael G.", "Fernanda O."
]

const GAMES = [
  "Raspa Relâmpago", "Raspadinha Suprema", "Centavos Milionários",
  "Sorte Instantânea", "Tesouro Dourado"
]

const PRIZES = [
  { name: "Pix de R$ 25", value: 25 },
  { name: "R$ 50 em Dinheiro", value: 50 },
  { name: "Fone de Ouvido Bluetooth", value: 150 },
  { name: "R$ 100 na Conta", value: 100 },
  { name: "Pix Premiado de R$ 250", value: 250 },
  { name: "Smartwatch Moderno", value: 400 },
  { name: "50 Rodadas Grátis", value: 0 },
]

export default function LiveSection() {
  const [winners, setWinners] = useState<Winner[]>([])

  // AGORA a função generateRandomWinner só será criada uma vez, pois suas dependências são estáveis.
  const generateRandomWinner = useCallback((): Winner => {
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)]
    const randomGame = GAMES[Math.floor(Math.random() * GAMES.length)]
    const randomPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)]

    return {
      id: Date.now() + Math.random(),
      name: randomName,
      prize: randomPrize.name,
      value: randomPrize.value,
      game: randomGame,
      timestamp: new Date()
    }
  }, []) // O array de dependências pode até ficar vazio agora, mas manter é boa prática.

  useEffect(() => {
    // Inicializa o carrossel com 4 ganhadores
    const initialWinners = Array.from({ length: 4 }, generateRandomWinner)
    setWinners(initialWinners)

    // Adiciona um novo ganhador em intervalos aleatórios (entre 2 e 5 minutos) para parecer mais real
    const createNewWinner = () => {
      setWinners(prev => {
        const newWinner = generateRandomWinner()
        // Mantém o carrossel com 4 ganhadores, adicionando o novo no início
        return [newWinner, ...prev.slice(0, 3)]
      })

      const randomInterval = Math.random() * (300000 - 120000) + 120000 // Entre 2 e 5 minutos
      setTimeout(createNewWinner, randomInterval)
    }

    // Inicia o ciclo após um tempo inicial
    const initialTimeout = setTimeout(createNewWinner, Math.random() * (300000 - 120000) + 120000)

    // Função de limpeza para evitar memory leaks
    return () => clearTimeout(initialTimeout)
  }, [generateRandomWinner])


  const formatCurrency = (value: number) => {
    if (value === 0) return "BÔNUS" // Para prêmios como "Rodadas Grátis"
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 60) return "agora mesmo"
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min atrás`
  }

  return (
    <section className="bg-neutral-800/50 border-y border-neutral-700 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <Radio className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">GANHADORES AO VIVO</h2>
          </div>
          <p className="text-gray-400">Veja quem está faturando prêmios neste exato momento!</p>
        </div>

        {/* Winners Carousel */}
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-scroll-slow space-x-6">
            {/* Duplicamos os cards para o efeito de loop infinito ser perfeito */}
            {[...winners, ...winners].map((winner, index) => (
              <div
                key={`${winner.id}-${index}`}
                className="bg-neutral-700/60 border border-purple-500/20 rounded-xl p-4 min-w-[300px] flex-shrink-0 hover:border-purple-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white">{winner.name}</span>
                      <span className="text-xs font-bold bg-green-500/20 px-2 py-0.5 rounded-full text-green-400">
                        GANHOU!
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{winner.game}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-neutral-800/50 p-2 rounded-md">
                    <span className="text-sm text-purple-300 flex items-center space-x-1.5">
                      <Trophy className="h-4 w-4" />
                      <span>{winner.prize}</span>
                    </span>
                    <span className="text-sm font-bold text-yellow-400">
                      {formatCurrency(winner.value)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1.5 text-xs text-gray-500 pt-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatTimeAgo(winner.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats (opcional, pode remover se não quiser) */}
        {/* ... seu código de stats aqui ... */}
      </div>
    </section>
  )
}