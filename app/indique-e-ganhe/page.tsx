import { Users, Gift, Trophy, Star, Crown, Zap, FileText } from "lucide-react"
import Link from "next/link"
import ReferralComponent from "@/components/ReferralComponent"

export default function IndiqueGanhePage() {
  const benefits = [
    {
      icon: Gift,
      title: "R$ 10 por Indicação",
      description: "Ganhe R$ 10 para cada amigo que se cadastrar usando seu código",
    },
    {
      icon: Trophy,
      title: "Bônus Progressivo",
      description: "Quanto mais indicar, maior o bônus: 5 amigos = R$ 100 extra",
    },
    {
      icon: Crown,
      title: "Status VIP",
      description: "Torne-se VIP com 10 indicações e ganhe benefícios exclusivos",
    },
    {
      icon: Zap,
      title: "Comissão Vitalícia",
      description: "Ganhe 5% de tudo que seus indicados jogarem, para sempre",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Compartilhe seu Código",
      description: "Envie seu código único para amigos e familiares",
    },
    {
      step: "2",
      title: "Eles se Cadastram",
      description: "Seus amigos usam seu código ao criar a conta",
    },
    {
      step: "3",
      title: "Vocês Ganham",
      description: "Você ganha R$ 10 e eles ganham R$ 5 de bônus",
    },
  ]

  const leaderboard = [
    { position: 1, name: "Carlos M***", referrals: 47, earnings: "R$ 122.350" },
    { position: 2, name: "Victor S***", referrals: 32, earnings: "R$ 91.600" },
    { position: 3, name: "Luan F***", referrals: 28, earnings: "R$ 73.400" },
    { position: 4, name: "Maria E***", referrals: 23, earnings: "R$ 68.150" },
    { position: 5, name: "Wesley R***", referrals: 19, earnings: "R$ 53.950" },
  ]

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Indique e Ganhe</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Convide seus amigos e ganhe dinheiro real! Quanto mais indicar, mais você ganha.
          </p>
        </div>

        {/* Referral Component */}
        <ReferralComponent />

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Vantagens do Programa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 text-center hover:border-purple-500/30 transition-colors"
                >
                  <Icon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Ranking dos Indicadores</h2>
          <div className="bg-neutral-700/50 rounded-xl border border-neutral-600 overflow-hidden">
            <div className="p-6">
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-neutral-600/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          user.position === 1
                            ? "bg-yellow-500 text-black"
                            : user.position === 2
                              ? "bg-gray-400 text-black"
                              : user.position === 3
                                ? "bg-orange-500 text-black"
                                : "bg-neutral-600 text-white"
                        }`}
                      >
                        {user.position}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.referrals} indicações</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">{user.earnings}</div>
                      <div className="text-sm text-gray-400">ganhos</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/20 text-center">
          <Star className="h-12 w-12 text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Comece a Ganhar Hoje!</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Não perca tempo! Cada amigo que você indicar é dinheiro no seu bolso. Compartilhe seu código e veja seus
            ganhos crescerem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                Criar Conta Grátis
              </button>
            </Link>
            <Link href="/termos-uso">
              <button className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors">
                Ver Regulamento
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}