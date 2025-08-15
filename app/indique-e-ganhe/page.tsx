"use client"

import { useState } from "react"
import { Users, Gift, Copy, Share2, Trophy, Star, Crown, Zap, Check, X, FileText } from "lucide-react"
import AuthModal from "../../components/AuthModal"

export default function IndiqueGanhePage() {
  const [isLoggedIn] = useState(false) // Simular estado de login
  const [referralCode] = useState("RASPE2025XYZ") // Código de exemplo
  const [copied, setCopied] = useState(false)
  const [showRegulamento, setShowRegulamento] = useState(false)
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null)

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

        {/* Main Content */}
        {isLoggedIn ? (
          <>
            {/* Referral Code Section */}
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/20 mb-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Seu Código de Indicação</h2>
                <div className="bg-neutral-700/50 rounded-xl p-6 max-w-md mx-auto">
                  <div className="text-3xl font-bold text-purple-400 mb-4 tracking-wider">{referralCode}</div>
                  <div className="flex space-x-3">
                    <button
                      onClick={copyReferralCode}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span>{copied ? "Copiado!" : "Copiar Código"}</span>
                    </button>
                    <button className="flex-1 border border-purple-500 text-purple-400 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors flex items-center justify-center space-x-2">
                      <Share2 className="h-4 w-4" />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-gray-300">Amigos Indicados</div>
              </div>
              <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">R$ 620</div>
                <div className="text-gray-300">Total Ganho</div>
              </div>
              <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">R$ 45</div>
                <div className="text-gray-300">Este Mês</div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-neutral-700/50 rounded-2xl p-8 border border-neutral-600 text-center mb-12">
            <Users className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Faça Login para Ver Seu Código</h2>
            <p className="text-gray-300 mb-6">
              Entre na sua conta para acessar seu código de indicação único e começar a ganhar dinheiro.
            </p>
            <button
              onClick={() => setAuthModal("login")}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Fazer Login
            </button>
          </div>
        )}

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
            <button
              onClick={() => setAuthModal("register")}
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              {isLoggedIn ? "Compartilhar Código" : "Criar Conta Grátis"}
            </button>
            <button
              onClick={() => setShowRegulamento(true)}
              className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors"
            >
              Ver Regulamento
            </button>
          </div>
        </div>
      </div>

      {showRegulamento && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl max-w-2xl w-full max-h-[75vh] sm:max-h-[80vh] overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 flex flex-col">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-purple-800/20 flex-shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-white truncate">
                  Regulamento - Programa Indique e Ganhe
                </h2>
              </div>
              <button
                onClick={() => setShowRegulamento(false)}
                className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors group flex-shrink-0 ml-2"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base">
                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">1. DISPOSIÇÕES GERAIS</h3>
                    <p className="mb-2 sm:mb-3">
                      1.1. O programa "Indique e Ganhe" é uma promoção oferecida pela plataforma Raspe & Brilhe,
                      destinada a usuários cadastrados e ativos na plataforma.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      1.2. A participação no programa implica na aceitação integral deste regulamento e dos Termos de
                      Uso da plataforma.
                    </p>
                    <p>
                      1.3. A plataforma reserva-se o direito de alterar, suspender ou encerrar o programa a qualquer
                      momento, mediante comunicação prévia de 7 (sete) dias.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">2. ELEGIBILIDADE</h3>
                    <p className="mb-2 sm:mb-3">
                      2.1. Podem participar do programa usuários maiores de 18 anos, com conta ativa e verificada na
                      plataforma.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      2.2. Funcionários, parceiros e familiares diretos da empresa não podem participar do programa.
                    </p>
                    <p>
                      2.3. É permitida apenas uma conta por pessoa física (CPF). Contas duplicadas serão automaticamente
                      desqualificadas.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      3. FUNCIONAMENTO DO PROGRAMA
                    </h3>
                    <p className="mb-2 sm:mb-3">
                      3.1. Cada usuário elegível receberá um código único de indicação em sua conta.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      3.2. O indicado deve utilizar o código durante o cadastro e realizar o primeiro depósito mínimo de
                      R$ 20,00 em até 30 dias.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      3.3. Após confirmação do primeiro depósito, o indicador receberá R$ 10,00 e o indicado receberá R$
                      5,00 de bônus.
                    </p>
                    <p>3.4. Os valores são creditados automaticamente em até 24 horas após a confirmação.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">4. BÔNUS E RECOMPENSAS</h3>
                    <p className="mb-2 sm:mb-3">
                      4.1. <strong>Bônus por Indicação:</strong> R$ 10,00 por cada amigo que se cadastrar e depositar.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      4.2. <strong>Bônus Progressivo:</strong> Ao atingir 5 indicações válidas no mês, receba R$ 100,00
                      extras.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      4.3. <strong>Status VIP:</strong> Com 10 indicações válidas, torne-se VIP com benefícios
                      exclusivos.
                    </p>
                    <p>
                      4.4. <strong>Comissão Vitalícia:</strong> 5% de comissão sobre as perdas líquidas dos indicados,
                      paga mensalmente.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">5. REQUISITOS DE SAQUE</h3>
                    <p className="mb-2 sm:mb-3">
                      5.1. Os bônus de indicação possuem rollover de 3x o valor antes do saque.
                    </p>
                    <p className="mb-2 sm:mb-3">5.2. Valor mínimo para saque: R$ 50,00.</p>
                    <p className="mb-2 sm:mb-3">
                      5.3. As comissões vitalícias não possuem rollover e podem ser sacadas integralmente.
                    </p>
                    <p>5.4. Saques são processados em até 72 horas úteis.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">6. PRÁTICAS PROIBIDAS</h3>
                    <p className="mb-2 sm:mb-3">
                      6.1. É proibido criar contas falsas ou usar dados de terceiros para indicações.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      6.2. Spam, publicidade não autorizada ou práticas enganosas resultarão em banimento.
                    </p>
                    <p className="mb-2 sm:mb-3">
                      6.3. Auto-indicação ou indicação entre contas da mesma pessoa é estritamente proibida.
                    </p>
                    <p>6.4. Violações resultam em perda de todos os bônus e possível encerramento da conta.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">7. LIMITAÇÕES E RESTRIÇÕES</h3>
                    <p className="mb-2 sm:mb-3">7.1. Máximo de 50 indicações válidas por mês por usuário.</p>
                    <p className="mb-2 sm:mb-3">7.2. Bônus não podem ser transferidos entre contas.</p>
                    <p>7.3. A plataforma reserva-se o direito de investigar atividades suspeitas.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">8. DISPOSIÇÕES FINAIS</h3>
                    <p className="mb-2 sm:mb-3">8.1. Este regulamento é regido pelas leis brasileiras.</p>
                    <p className="mb-2 sm:mb-3">
                      8.2. Dúvidas devem ser direcionadas ao suporte através do chat ou email.
                    </p>
                    <p className="mb-2 sm:mb-3">8.3. A participação no programa é gratuita e voluntária.</p>
                    <p>
                      8.4. <strong>Última atualização:</strong> Janeiro de 2025
                    </p>
                  </section>

                  <div className="bg-purple-900/30 border border-purple-500/40 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                    <p className="text-xs sm:text-sm text-purple-300">
                      <strong>Importante:</strong> Este programa é destinado ao entretenimento. Jogue com
                      responsabilidade. Se você tem problemas com jogos, procure ajuda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-purple-500/20 bg-gradient-to-r from-purple-900/10 to-purple-800/10 flex justify-end flex-shrink-0">
              <button
                onClick={() => setShowRegulamento(false)}
                className="px-4 sm:px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm sm:text-base"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <AuthModal type={authModal} onClose={() => setAuthModal(null)} onSwitchMode={setAuthModal} />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(115, 115, 115, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.8);
        }
      `}</style>
    </div>
  )
}
