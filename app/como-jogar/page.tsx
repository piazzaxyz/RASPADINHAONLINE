import { Play, CreditCard, Gift, Trophy, ArrowRight, CheckCircle, AlertCircle, Star } from "lucide-react"
import Link from "next/link"

export default function ComoJogarPage() {
  const steps = [
    {
      number: "01",
      icon: CreditCard,
      title: "Crie sua Conta",
      description: "Registre-se com seus dados e faça seu primeiro depósito para começar a jogar",
      details: [
        "Preencha o formulário com dados verdadeiros",
        "Confirme seu email clicando no link enviado",
        "Faça seu primeiro depósito (mínimo R$ 10)",
        "Sua conta estará pronta para jogar!",
      ],
    },
    {
      number: "02",
      icon: Play,
      title: "Escolha sua Raspadinha",
      description: "Navegue pelas opções disponíveis e escolha a raspadinha que mais te interessa",
      details: [
        "Veja os prêmios disponíveis de cada raspadinha",
        "Confira o preço e probabilidades",
        "Escolha quantos bilhetes quer comprar",
        "Clique em 'Jogar' para prosseguir",
      ],
    },
    {
      number: "03",
      icon: Gift,
      title: "Raspe e Descubra",
      description: "Raspe virtualmente os campos para revelar os símbolos e descobrir se ganhou",
      details: [
        "Use o mouse ou toque para raspar",
        "Todos os símbolos serão revelados",
        "Verifique se seus símbolos coincidem",
        "Prêmios são creditados automaticamente",
      ],
    },
    {
      number: "04",
      icon: Trophy,
      title: "Colete seus Prêmios",
      description: "Se ganhou, parabéns! Seus prêmios são creditados instantaneamente na sua conta",
      details: [
        "Ganhos são creditados imediatamente",
        "Veja seus prêmios no histórico",
        "Faça saques quando quiser",
        "Continue jogando para mais chances",
      ],
    },
  ]

  const gameTypes = [
    {
      name: "Raspa Relâmpago",
      price: "R$ 10,00",
      maxPrize: "R$ 2.000",
      description: "Raspadinha clássica com prêmios de até R$ 2.000. Ideal para quem está começando.",
      features: ["Alta frequência de prêmios", "Jogabilidade rápida", "Múltiplas chances"],
      link: "/raspadinha/relampago",
    },
    {
      name: "Raspadinha Suprema",
      price: "R$ 5,00",
      maxPrize: "R$ 1.000",
      description: "Perfeita para jogadas rápidas com bons prêmios e excelente custo-benefício.",
      features: ["Prêmios médios", "Boa para iniciantes", "Risco controlado"],
      link: "/raspadinha/suprema",
    },
    {
      name: "Mega Prêmio",
      price: "R$ 25,00",
      maxPrize: "R$ 50.000",
      description: "Para quem busca os maiores prêmios! Raspadinha premium com jackpots incríveis.",
      features: ["Maiores prêmios", "Jackpots progressivos", "Experiência premium"],
      link: "/raspadinha/mega-premio",
    },
  ]

  const tips = [
    {
      icon: Star,
      title: "Defina um Orçamento",
      description: "Estabeleça quanto pode gastar e nunca ultrapasse esse limite.",
    },
    {
      icon: CheckCircle,
      title: "Comece Devagar",
      description: "Experimente com valores menores antes de fazer apostas maiores.",
    },
    {
      icon: Trophy,
      title: "Diversifique",
      description: "Experimente diferentes tipos de raspadinhas para mais diversão.",
    },
    {
      icon: AlertCircle,
      title: "Jogue com Responsabilidade",
      description: "Lembre-se que jogos são entretenimento, não uma fonte de renda.",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Play className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Como Jogar</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprenda como jogar raspadinhas online em 4 passos simples e comece a ganhar prêmios incríveis!
          </p>
        </div>

        {/* Steps - Centralized */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Passo a Passo</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative">
                    {/* Connector Line for larger screens */}
                    {index < steps.length - 1 && index % 2 === 0 && (
                      <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 z-0" />
                    )}

                    <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 hover:border-purple-500/30 transition-all duration-300 relative z-10 h-full">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 mb-4">{step.description}</p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Game Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Tipos de Raspadinhas</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Conheça nossos diferentes tipos de raspadinhas e escolha a que melhor se adapta ao seu estilo de jogo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameTypes.map((game, index) => (
              <div
                key={index}
                className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                  <div className="flex items-center justify-center space-x-4 mb-3">
                    <span className="text-lg font-semibold text-purple-400">{game.price}</span>
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                    <span className="text-lg font-bold text-yellow-500">{game.maxPrize}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{game.description}</p>
                </div>

                <ul className="space-y-2">
                  {game.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={game.link}>
                  <button className="w-full mt-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                    Jogar Agora
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Dicas para Jogar Melhor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 text-center">
                  <Icon className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{tip.title}</h3>
                  <p className="text-gray-300 text-sm">{tip.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 text-center">
          <Play className="h-12 w-12 text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Tutorial em Vídeo</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Assista ao nosso tutorial completo e aprenda visualmente como jogar raspadinhas online de forma segura e
            divertida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Assistir Tutorial
            </button>
            <Link href="/raspadinhas">
              <button className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors">
                Começar a Jogar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}