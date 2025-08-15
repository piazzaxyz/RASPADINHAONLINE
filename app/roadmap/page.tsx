"use client"

import { Calendar, Target, Zap, Star, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "in-progress",
      items: [
        {
          title: "Sistema de Torneios",
          description: "Competições semanais entre jogadores com prêmios especiais",
          priority: "high",
          icon: Target,
        },
        {
          title: "App Mobile Nativo",
          description: "Aplicativo dedicado para iOS e Android com notificações push",
          priority: "high",
          icon: Zap,
        },
        {
          title: "Programa VIP Expandido",
          description: "Níveis de fidelidade com benefícios exclusivos e cashback",
          priority: "medium",
          icon: Star,
        },
      ],
    },
    {
      quarter: "Q2 2025",
      status: "planned",
      items: [
        {
          title: "Raspadinhas Temáticas",
          description: "Jogos especiais com temas sazonais e eventos especiais",
          priority: "medium",
          icon: Calendar,
        },
        {
          title: "Sistema de Conquistas",
          description: "Badges e recompensas por marcos alcançados na plataforma",
          priority: "medium",
          icon: Target,
        },
        {
          title: "Integração com Redes Sociais",
          description: "Compartilhamento de vitórias e convites através de redes sociais",
          priority: "low",
          icon: ArrowRight,
        },
      ],
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      items: [
        {
          title: "IA para Recomendações",
          description: "Sistema inteligente que sugere jogos baseado no perfil do usuário",
          priority: "high",
          icon: Zap,
        },
        {
          title: "Modo Multiplayer",
          description: "Raspadinhas colaborativas onde amigos podem jogar juntos",
          priority: "medium",
          icon: Star,
        },
        {
          title: "Dashboard Avançado",
          description: "Estatísticas detalhadas e análises de performance pessoal",
          priority: "low",
          icon: Target,
        },
      ],
    },
    {
      quarter: "Q4 2025",
      status: "future",
      items: [
        {
          title: "Realidade Aumentada",
          description: "Experiência imersiva de raspadinha usando AR no mobile",
          priority: "low",
          icon: Zap,
        },
        {
          title: "Blockchain Integration",
          description: "Transparência total nos resultados usando tecnologia blockchain",
          priority: "medium",
          icon: Star,
        },
        {
          title: "Expansão Internacional",
          description: "Lançamento da plataforma em outros países da América Latina",
          priority: "high",
          icon: ArrowRight,
        },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "planned":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "future":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "in-progress":
        return "Em Desenvolvimento"
      case "planned":
        return "Planejado"
      case "future":
        return "Futuro"
      default:
        return "Indefinido"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400"
      case "low":
        return "bg-gray-500/20 text-gray-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Alta"
      case "medium":
        return "Média"
      case "low":
        return "Baixa"
      default:
        return "Normal"
    }
  }

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Target className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Roadmap 2025</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os próximos recursos e melhorias que estão sendo desenvolvidos para a plataforma Raspe & Brilhe.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
          {roadmapItems.map((quarter, quarterIndex) => (
            <div key={quarterIndex} className="relative">
              {/* Quarter Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{quarter.quarter}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(quarter.status)}`}
                  >
                    {getStatusLabel(quarter.status)}
                  </span>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
                {quarter.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={itemIndex}
                      className="bg-neutral-700/50 rounded-xl border border-neutral-600 p-6 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-purple-500" />
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}
                        >
                          {getPriorityLabel(item.priority)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 text-center">
          <Target className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Roadmap em Constante Evolução</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Nosso roadmap é atualizado regularmente baseado no feedback dos usuários e nas tendências do mercado.
            Algumas funcionalidades podem ser antecipadas ou adiadas conforme a demanda.
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
          <p className="text-sm text-gray-400 mt-6">Última atualização: Janeiro de 2025</p>
        </div>
      </div>
    </div>
  )
}
