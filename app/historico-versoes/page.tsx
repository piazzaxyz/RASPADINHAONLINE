"use client"

import { FileText, Calendar, CheckCircle, AlertTriangle, Info, Zap } from "lucide-react"
import Link from "next/link"

export default function HistoricoVersoesPage() {
  const versions = [
    {
      version: "2.1.0",
      date: "15 de Janeiro de 2025",
      type: "major",
      icon: Zap,
      changes: [
        {
          type: "new",
          title: "Nova Modalidade de Raspadinha",
          description: "Introdução da Raspadinha Mega Prêmio com prêmios de até R$ 100.000",
        },
        {
          type: "improvement",
          title: "Sistema de Indicação Aprimorado",
          description: "Melhorias no programa Indique e Ganhe com bônus aumentados",
        },
        {
          type: "improvement",
          title: "Interface Mobile Otimizada",
          description: "Experiência completamente redesenhada para dispositivos móveis",
        },
      ],
    },
    {
      version: "2.0.5",
      date: "8 de Janeiro de 2025",
      type: "patch",
      icon: CheckCircle,
      changes: [
        {
          type: "fix",
          title: "Correção de Bugs de Pagamento",
          description: "Resolvidos problemas com processamento de PIX e cartões",
        },
        {
          type: "improvement",
          title: "Performance Melhorada",
          description: "Carregamento 40% mais rápido das páginas de jogos",
        },
      ],
    },
    {
      version: "2.0.0",
      date: "1 de Janeiro de 2025",
      type: "major",
      icon: Zap,
      changes: [
        {
          type: "new",
          title: "Nova Identidade Visual",
          description: "Design completamente renovado com tema roxo e dourado",
        },
        {
          type: "new",
          title: "Sistema de Jogo Responsável",
          description: "Ferramentas avançadas para configuração de limites e autocontrole",
        },
        {
          type: "new",
          title: "Chat de Suporte 24/7",
          description: "Atendimento ao cliente disponível todos os dias da semana",
        },
        {
          type: "improvement",
          title: "Segurança Aprimorada",
          description: "Implementação de criptografia de ponta a ponta",
        },
      ],
    },
    {
      version: "1.8.2",
      date: "20 de Dezembro de 2024",
      type: "patch",
      icon: CheckCircle,
      changes: [
        {
          type: "fix",
          title: "Correções de Estabilidade",
          description: "Resolvidos crashes ocasionais durante os jogos",
        },
        {
          type: "improvement",
          title: "Otimização de Banco de Dados",
          description: "Melhor performance nas consultas de histórico",
        },
      ],
    },
    {
      version: "1.8.0",
      date: "15 de Dezembro de 2024",
      type: "minor",
      icon: Info,
      changes: [
        {
          type: "new",
          title: "Histórico Detalhado de Jogos",
          description: "Visualização completa de todas as partidas e resultados",
        },
        {
          type: "new",
          title: "Notificações Push",
          description: "Alertas sobre promoções e resultados de jogos",
        },
        {
          type: "improvement",
          title: "Sistema de Saques Melhorado",
          description: "Processamento mais rápido de retiradas",
        },
      ],
    },
  ]

  const getVersionTypeColor = (type: string) => {
    switch (type) {
      case "major":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "minor":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "patch":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getChangeTypeIcon = (type: string) => {
    switch (type) {
      case "new":
        return <Zap className="h-4 w-4 text-green-500" />
      case "improvement":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case "fix":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  const getChangeTypeLabel = (type: string) => {
    switch (type) {
      case "new":
        return "Novo"
      case "improvement":
        return "Melhoria"
      case "fix":
        return "Correção"
      default:
        return "Alteração"
    }
  }

  const handleActivateNotifications = async () => {
    if (!("Notification" in window)) {
      alert("Este navegador não suporta notificações.")
      return
    }

    if (Notification.permission === "granted") {
      alert("Notificações já estão ativadas!")
      return
    }

    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        new Notification("Raspe & Brilhe", {
          body: "Notificações ativadas com sucesso! Você receberá atualizações sobre novas versões.",
          icon: "/LOGO DO RASPE & BRILHE.svg",
        })
      }
    } else {
      alert("Notificações foram negadas. Ative nas configurações do navegador.")
    }
  }

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Histórico de Versões</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acompanhe todas as atualizações, melhorias e correções da plataforma Raspe & Brilhe.
          </p>
        </div>

        {/* Version Timeline */}
        <div className="space-y-8">
          {versions.map((version, index) => {
            const Icon = version.icon
            return (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < versions.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-neutral-600 -z-10" />
                )}

                <div className="bg-neutral-700/50 rounded-xl border border-neutral-600 overflow-hidden">
                  {/* Version Header */}
                  <div className="p-6 border-b border-neutral-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <h2 className="text-2xl font-bold text-white">v{version.version}</h2>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getVersionTypeColor(version.type)}`}
                            >
                              {version.type.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">{version.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Changes List */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {version.changes.map((change, changeIndex) => (
                        <div key={changeIndex} className="flex items-start space-x-4 p-4 bg-neutral-600/30 rounded-lg">
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            {getChangeTypeIcon(change.type)}
                            <span className="text-xs font-medium text-gray-400 uppercase">
                              {getChangeTypeLabel(change.type)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{change.title}</h3>
                            <p className="text-gray-300 text-sm">{change.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 text-center">
          <FileText className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Mantenha-se Atualizado</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Receba notificações sobre novas atualizações e recursos diretamente em sua conta. Todas as mudanças são
            testadas rigorosamente antes do lançamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleActivateNotifications}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Ativar Notificações
            </button>
            <Link
              href="/roadmap"
              className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors text-center"
            >
              Ver Roadmap
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">Última verificação: Janeiro de 2025 | Versão atual: 2.1.0</p>
        </div>
      </div>
    </div>
  )
}
