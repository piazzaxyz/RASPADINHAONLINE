'use client';

import { useState, useEffect } from 'react';
import { Radio, TrendingUp, Clock, User } from 'lucide-react';

interface Winner {
  id: number;
  name: string;
  prize: string;
  value: number;
  game: string;
  timestamp: Date;
}

export default function LiveSection() {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [displayWinners, setDisplayWinners] = useState<Winner[]>([]);

  // Lista de nomes e prêmios para gerar ganhadores dinâmicos
  const names = [
    'João S***', 'Maria L***', 'Pedro A***', 'Ana C***', 'Carlos M***',
    'Lucia R***', 'Roberto F***', 'Fernanda O***', 'Marcos V***', 'Julia B***',
    'Ricardo P***', 'Camila N***', 'Bruno H***', 'Tatiana G***', 'Diego T***',
    'Beatriz K***', 'Felipe W***', 'Larissa Q***', 'Gustavo Z***', 'Isabela X***',
    'Leonardo J***', 'Mariana Y***', 'Thiago U***', 'Gabriela I***', 'Rafael E***'
  ];

  const prizes = [
    { name: 'iPhone 15 Pro', value: 4500 },
    { name: 'PlayStation 5', value: 2800 },
    { name: 'Smart TV 55"', value: 2200 },
    { name: 'Notebook Gamer', value: 3500 },
    { name: 'iPad Pro', value: 3000 },
    { name: 'R$ 1.000 em Dinheiro', value: 1000 },
    { name: 'R$ 500 em Dinheiro', value: 500 },
    { name: 'R$ 2.000 em Dinheiro', value: 2000 },
    { name: 'Smartwatch', value: 800 },
    { name: 'Fone Bluetooth', value: 300 },
    { name: 'Câmera Digital', value: 1500 },
    { name: 'Console Nintendo', value: 1800 },
    { name: 'Tablet Samsung', value: 1200 },
    { name: 'R$ 100 em Dinheiro', value: 100 },
    { name: 'R$ 250 em Dinheiro', value: 250 },
    { name: 'Smartphone', value: 1400 },
    { name: 'Headset Gamer', value: 600 },
    { name: 'Mochila Premium', value: 200 },
    { name: 'Carregador Portátil', value: 150 },
    { name: 'Caixa de Som', value: 400 }
  ];

  const games = [
    'Raspa Relâmpago', 'Raspadinha Suprema', 'Centavos Milionários', 
    'Mega Prêmio', 'Turbo Cash', 'Express Winner'
  ];

  // Função para gerar um novo ganhador aleatório
  const generateRandomWinner = (): Winner => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    
    return {
      id: Date.now() + Math.random(),
      name: randomName,
      prize: randomPrize.name,
      value: randomPrize.value,
      game: randomGame,
      timestamp: new Date()
    };
  };

  // Inicializar com alguns ganhadores
  useEffect(() => {
    const initialWinners = Array.from({ length: 8 }, () => generateRandomWinner());
    setWinners(initialWinners);
    setDisplayWinners([...initialWinners, ...initialWinners, ...initialWinners]);
  }, []);

  // Adicionar novos ganhadores a cada 3-8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const newWinner = generateRandomWinner();
      setWinners(prev => {
        const updated = [newWinner, ...prev.slice(0, 7)]; // Manter apenas os 8 mais recentes
        setDisplayWinners([...updated, ...updated, ...updated]);
        return updated;
      });
    }, Math.random() * 5000 + 3000); // Entre 3-8 segundos

    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 10) return 'agora mesmo';
    if (seconds < 60) return `${seconds}s atrás`;
    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) return '1 min atrás';
    return `${minutes} min atrás`;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section className="py-8 bg-neutral-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <Radio className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">AO VIVO</h2>
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
              LIVE
            </div>
          </div>
          <div className="flex items-center space-x-2 text-purple-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Ganhadores Online</span>
          </div>
        </div>

        {/* Winners Carousel - Mais rápido */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <div className="flex animate-scroll-fast space-x-4">
            {displayWinners.map((winner, index) => (
              <div
                key={`${winner.id}-${index}`}
                className="bg-gradient-to-r from-neutral-700/80 to-neutral-600/80 border border-purple-500/30 rounded-lg p-4 min-w-[280px] hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                <div className="space-y-3">
                  {/* Winner Info */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">
                        {winner.name}
                      </p>
                      <p className="text-xs text-purple-400 truncate font-medium">
                        {winner.game}
                      </p>
                    </div>
                    <div className="text-xs text-green-400 font-bold bg-green-500/20 px-2 py-1 rounded-full">
                      GANHOU!
                    </div>
                  </div>

                  {/* Prize */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-purple-300 truncate">
                      🎁 {winner.prize}
                    </p>
                    <p className="text-lg font-bold text-yellow-400">
                      {formatCurrency(winner.value)}
                    </p>
                  </div>

                  {/* Timestamp */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span>{formatTimeAgo(winner.timestamp)}</span>
                    </div>
                    <div className="text-xs text-green-400 font-bold">
                      ✨ NOVO
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">R$ 1.247.850</div>
              <div className="text-sm text-gray-400">Distribuídos hoje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">4.127</div>
              <div className="text-sm text-gray-400">Ganhadores hoje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">96%</div>
              <div className="text-sm text-gray-400">Taxa de prêmios</div>
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
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-fast {
          animation: scroll-fast 20s linear infinite;
        }
        
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
