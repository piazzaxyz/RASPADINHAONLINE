"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft, Zap, RotateCcw, ShoppingCart, Gift, Trophy, User, Radio,
  Clock, AlertTriangle, Sparkles, TrendingUp, Eye, Star, X, Coins,
  Play, Pause, BarChart3, Settings
} from "lucide-react"
import ScratchCard from "./ScratchCard"
import GameControls from "./GameControls"
import GameSidebar from "./GameSidebar"
import LiveWinners from "./LiveWinners"

// INTERFACES
export interface Prize {
  id: string
  name: string
  value: number
  image: string
  quantity: number
  remaining: number
  symbol: string
}

export interface Winner {
  id: number
  name: string
  prize: string
  value: number
  timestamp: Date
}

export interface RaspadinhaConfig {
  id: string
  title: string
  price: number
  maxPrize: number
  image: string
  prizes: Prize[]
  description: string
  winChance: number
  gradient: string
  category: string
}

// CONFIGURAÇÃO DAS RASPADINHAS (agora serve apenas para visualização)
const RASPADINHAS_CONFIG: { [key: string]: RaspadinhaConfig } = {
  relampago: {
    id: "relampago",
    title: "Raspa Relâmpago",
    price: 10.0,
    maxPrize: 2000.0,
    image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Raspadinha clássica com prêmios de até R$ 2.000",
    winChance: 0.0,
    gradient: "from-yellow-500 to-orange-600",
    category: "premium",
    prizes: [
      { id: "1", name: "R$ 2.000 em Dinheiro", value: 2000, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 5, remaining: 2, symbol: "💎" },
      { id: "2", name: "iPhone 15 Pro", value: 1500, image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 10, remaining: 4, symbol: "📱" },
      { id: "3", name: "PlayStation 5", value: 800, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 20, remaining: 8, symbol: "🎮" },
      { id: "4", name: "R$ 500 em Dinheiro", value: 500, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 50, remaining: 23, symbol: "💰" },
      { id: "5", name: "R$ 100 em Dinheiro", value: 100, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 100, remaining: 45, symbol: "🍀" },
      { id: "6", name: "R$ 50 em Dinheiro", value: 50, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 200, remaining: 120, symbol: "⭐" },
    ],
  },
    suprema: {
    id: "suprema",
    title: "Raspadinha Suprema",
    price: 5.0,
    maxPrize: 1000.0,
    image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Perfeita para jogadas rápidas com bons prêmios",
    winChance: 0.0,
    gradient: "from-purple-500 to-pink-600",
    category: "premium",
    prizes: [
      { id: "1", name: "R$ 1.000 em Dinheiro", value: 1000, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 8, remaining: 3, symbol: "💰" },
      { id: "2", name: 'Smart TV 55"', value: 700, image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 15, remaining: 5, symbol: "📺" },
      { id: "3", name: "Notebook Gamer", value: 600, image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 25, remaining: 12, symbol: "💻" },
    ],
  },
  centavos: {
    id: "centavos",
    title: "Centavos Milionários",
    price: 1.0,
    maxPrize: 100.0,
    image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Raspadinha acessível com ótimas chances",
    winChance: 0.0,
    gradient: "from-blue-500 to-cyan-600",
    category: "basic",
    prizes: [
      { id: "1", name: "R$ 100 em Dinheiro", value: 100, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 20, remaining: 15, symbol: "💰" },
      { id: "2", name: "Smartwatch", value: 80, image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 40, remaining: 25, symbol: "⌚" },
      { id: "3", name: "Fone Bluetooth", value: 50, image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 80, remaining: 45, symbol: "🎧" },
    ],
  },
  "mega-premio": {
    id: "mega-premio",
    title: "Mega Prêmio",
    price: 25.0,
    maxPrize: 50000.0,
    image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Para quem busca os maiores prêmios! Raspadinha premium com jackpots incríveis",
    winChance: 0.0,
    gradient: "from-red-500 to-pink-600",
    category: "vip",
    prizes: [
      { id: "1", name: "R$ 50.000 em Dinheiro", value: 50000, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 2, remaining: 1, symbol: "💎" },
      { id: "2", name: "Carro 0KM", value: 45000, image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 3, remaining: 2, symbol: "🚗" },
      { id: "3", name: "Moto 0KM", value: 12000, image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 5, remaining: 3, symbol: "🏍️" },
    ],
  },
  turbo: {
    id: "turbo",
    title: "Turbo Cash",
    price: 15.0,
    maxPrize: 5000.0,
    image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Velocidade e prêmios em alta rotação",
    winChance: 0.0,
    gradient: "from-green-500 to-emerald-600",
    category: "premium",
    prizes: [
      { id: "1", name: "R$ 5.000 em Dinheiro", value: 5000, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 6, remaining: 3, symbol: "💰" },
      { id: "2", name: "iPad Pro", value: 3000, image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 12, remaining: 6, symbol: "📱" },
    ],
  },
  express: {
    id: "express",
    title: "Express Winner",
    price: 3.0,
    maxPrize: 500.0,
    image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Ganhe rápido com prêmios instantâneos",
    winChance: 0.0,
    gradient: "from-orange-500 to-red-600",
    category: "basic",
    prizes: [
      { id: "1", name: "R$ 500 em Dinheiro", value: 500, image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 15, remaining: 8, symbol: "💰" },
      { id: "2", name: "Smartphone", value: 400, image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", quantity: 25, remaining: 12, symbol: "📱" },
    ],
  },
};

const WINNER_NAMES = [
  "João S***", "Maria L***", "Pedro A***", "Ana C***", "Carlos M***",
  "Beatriz R***", "Lucas G***", "Fernanda O***", "Rafael B***", "Juliana M***", "Marcos T***", "Aline S***",
  "Sofia P***", "Gustavo F***", "Camila V***", "Bruno N***", "Larissa K***", "Diego H***",
  "Isabela J***", "Felipe D***", "Patrícia E***", "Thiago Q***", "Renata W***", "Eduardo Z***",
  "Amanda X***", "Vitor Y***", "Carolina U***", "Gabriel I***", "Larissa O***", "Matheus T***",
  "Juliana S***", "Ricardo A***", "Mariana C***", "Fernando M***", "Aline R***", "Bruna L***",
  "Rafael G***", "Camila P***", "Lucas F***", "Sabrina D***", "Gustavo E***", "Isabela H***", 
];

const GUARANTEED_LOSE_SYMBOLS = ['💎', '💰', '🍀', '⭐', '🍒', '🍋', '🔔', '💎', '💰'];

interface ScratchGameClientProps {
  gameId: string
}

export default function ScratchGameClient({ gameId }: ScratchGameClientProps) {
  const router = useRouter();
  const currentRaspadinha = useMemo(() => RASPADINHAS_CONFIG[gameId], [gameId]);

  const [balance, setBalance] = useState(1247.5);
  
  const [isLoggedIn] = useState(true);
  // O estado do modal foi removido, pois agora é gerenciado pelo MainLayout
  // const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);
  const [winners, setWinners] = useState<Winner[]>([]);
  const [scratchedCells, setScratchedCells] = useState<boolean[]>(Array(9).fill(false));
  const [gameResult, setGameResult] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [winAmount, setWinAmount] = useState(0);
  const [winningPrize, setWinningPrize] = useState<Prize | null>(null);
  const [boostActive, setBoostActive] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [scratchAnimation, setScratchAnimation] = useState<number[]>([]);
  const [showStats, setShowStats] = useState(false);

  const [gameStats, setGameStats] = useState({
    gamesPlayed: 0,
    totalWon: 0,
    biggestWin: 0,
    winRate: 0
  });
  
  useEffect(() => {
    if (!currentRaspadinha) {
      router.push("/raspadinhas");
    }
  }, [currentRaspadinha, router]);

  const currentPrice = boostActive ? (currentRaspadinha?.price ?? 0) * 2 : (currentRaspadinha?.price ?? 0);

  const generateRandomWinner = useCallback((): Winner => {
    if (!currentRaspadinha) return { id: 0, name: "", prize: "", value: 0, timestamp: new Date() };
    const randomName = WINNER_NAMES[Math.floor(Math.random() * WINNER_NAMES.length)];
    const randomPrize = currentRaspadinha.prizes[Math.floor(Math.random() * Math.min(3, currentRaspadinha.prizes.length))];
    return {
      id: Date.now() + Math.random(), name: randomName, prize: randomPrize.name,
      value: randomPrize.value, timestamp: new Date(),
    };
  }, [currentRaspadinha]);

  useEffect(() => {
    if (!currentRaspadinha) return;
    const initialWinners = Array.from({ length: 3 }, generateRandomWinner);
    setWinners(initialWinners);
    const interval = setInterval(() => {
      setWinners(prev => {
        const newWinner = generateRandomWinner();
        return [newWinner, ...prev.slice(0, 2)];
      });
    }, 300000);
    return () => clearInterval(interval);
  }, [currentRaspadinha, generateRandomWinner]);

  const generateGameResult = (): string[] => {
    return [...GUARANTEED_LOSE_SYMBOLS].sort(() => 0.5 - Math.random());
  };

  const handleCellClick = (index: number) => {
    if (!isPlaying || scratchedCells[index] || isAutoPlaying) return;
    setScratchAnimation((prev) => [...prev, index]);
    setTimeout(() => {
      setScratchAnimation((prev) => prev.filter((i) => i !== index));
    }, 300);
    const newScratchedCells = [...scratchedCells];
    newScratchedCells[index] = true;
    setScratchedCells(newScratchedCells);
    if (newScratchedCells.every((cell) => cell)) {
      setTimeout(() => checkWin(), 500);
    }
  };
  
  const checkWin = () => {
    if (!currentRaspadinha) return;
    setGameStats(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
    setIsPlaying(false);
    setTimeout(() => { resetGame(); }, 2000);
  };

  const startGame = () => {
    if (!isLoggedIn) {
      alert("Por favor, faça login para jogar."); 
      return;
    }
    if (!currentRaspadinha || balance < currentPrice) {
      return;
    }
    
    setBalance(prevBalance => prevBalance - currentPrice);

    setIsPlaying(true);
    setScratchedCells(Array(9).fill(false));
    setHasWon(false);
    setWinAmount(0);
    setWinningPrize(null);
    const result = generateGameResult();
    setGameResult(result);
  };

  const autoPlay = () => {
    if (isAutoPlaying) return;
    if (!isLoggedIn) {
      alert("Por favor, faça login para jogar.");
      return;
    }
    if (!currentRaspadinha || balance < currentPrice) { return; }
    setIsAutoPlaying(true);
    
    const play = () => {
      if (balance < currentPrice) { setIsAutoPlaying(false); return; }
      startGame();
      setTimeout(() => {
        setScratchedCells(Array(9).fill(true));
        setTimeout(() => {
          checkWin();
          if (isAutoPlaying) { setTimeout(play, 1000); }
        }, 500);
      }, 500);
    }
    play();
  };
  
  const toggleBoost = () => setBoostActive(!boostActive);

  const resetGame = () => {
    setIsPlaying(false);
    setScratchedCells(Array(9).fill(false));
    setHasWon(false);
    setWinAmount(0);
    setWinningPrize(null);
    setGameResult([]);
    setIsAutoPlaying(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
  };

  if (!currentRaspadinha) {
    return (
      <div className="min-h-screen bg-neutral-800 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Raspadinha não encontrada</h1>
          <p className="text-gray-400 mb-8">O jogo que você está procurando não existe ou foi removido.</p>
          <Link href="/raspadinhas" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            Ver Todas as Raspadinhas
          </Link>
        </div>
      </div>
    );
  }

  return (
    // Adicionei um padding-top para que o conteúdo não fique escondido atrás do header fixo
    <div className="min-h-screen bg-neutral-800 pt-8">
      {/* A chamada para o <GameHeader /> foi REMOVIDA daqui */}
      <LiveWinners winners={winners} />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="xl:col-span-3 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <Link href="/raspadinhas" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar às Raspadinhas</span>
              </Link>
              <button onClick={() => setShowStats(!showStats)} className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white hover:bg-neutral-600 transition-colors text-sm">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Estatísticas</span>
              </button>
            </div>
            {showStats && (
              <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600 animate-fade-in">
                <h3 className="text-lg font-bold text-white mb-4">Suas Estatísticas Neste Jogo</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center"><p className="text-xl sm:text-2xl font-bold text-purple-400">{gameStats.gamesPlayed}</p><p className="text-xs sm:text-sm text-gray-400">Jogos</p></div>
                  <div className="text-center"><p className="text-xl sm:text-2xl font-bold text-green-400">{formatCurrency(gameStats.totalWon)}</p><p className="text-xs sm:text-sm text-gray-400">Total Ganho</p></div>
                  <div className="text-center"><p className="text-xl sm:text-2xl font-bold text-yellow-400">{formatCurrency(gameStats.biggestWin)}</p><p className="text-xs sm:text-sm text-gray-400">Maior Ganho</p></div>
                  <div className="text-center"><p className="text-xl sm:text-2xl font-bold text-blue-400">{gameStats.winRate.toFixed(1)}%</p><p className="text-xs sm:text-sm text-gray-400">Taxa de Vitória</p></div>
                </div>
              </div>
            )}
            <ScratchCard
              game={currentRaspadinha}
              scratchedCells={scratchedCells}
              gameResult={gameResult}
              hasWon={hasWon}
              winningPrize={winningPrize}
              winAmount={winAmount}
              isPlaying={isPlaying}
              isAutoPlaying={isAutoPlaying}
              scratchAnimation={scratchAnimation}
              onCellClick={handleCellClick}
              isLoggedIn={isLoggedIn}
              // O `setAuthModal` foi removido das props
              formatCurrency={formatCurrency}
              boostActive={boostActive} setAuthModal={function (modal: "login" | "register" | null): void {
                throw new Error("Function not implemented.")
              } }            />
            <GameControls
              isPlaying={isPlaying}
              currentPrice={currentPrice}
              boostActive={boostActive}
              onStartGame={startGame}
              onAutoPlay={autoPlay}
              onToggleBoost={toggleBoost}
              onResetGame={resetGame}
              formatCurrency={formatCurrency}
              isLoggedIn={isLoggedIn}
              balance={balance}
            />
          </div>
          <div className="xl:col-span-1">
            <GameSidebar
              game={currentRaspadinha}
              formatCurrency={formatCurrency}
            />
          </div>
        </div>
      </div>
      {/* O `AuthModal` foi removido daqui */}
    </div>
  );
}