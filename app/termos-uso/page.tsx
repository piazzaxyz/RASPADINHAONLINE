"use client"

import { FileText, AlertTriangle, Shield, CreditCard, Users, Gavel, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function TermosUsoPage() {
  const sections = [
    {
      icon: Users,
      title: "Elegibilidade e Registro",
      content: [
        "Você deve ter pelo menos 18 anos de idade para usar nossos serviços.",
        "É necessário fornecer informações verdadeiras, precisas e atualizadas durante o registro.",
        "Você é responsável por manter a confidencialidade de sua conta e senha.",
        "Uma pessoa pode ter apenas uma conta ativa por vez.",
        "Reservamo-nos o direito de verificar sua identidade a qualquer momento.",
      ],
    },
    {
      icon: CreditCard,
      title: "Depósitos e Retiradas",
      content: [
        "Depósitos devem ser feitos usando métodos de pagamento em seu nome.",
        "Valor mínimo de depósito: R$ 10,00. Valor máximo: R$ 5.000,00 por transação.",
        "Retiradas só podem ser feitas para contas bancárias no nome do titular da conta.",
        "Processamento de retiradas pode levar de 1 a 5 dias úteis.",
        "Taxa de processamento pode ser aplicada conforme método de pagamento escolhido.",
      ],
    },
    {
      icon: Shield,
      title: "Regras de Jogo",
      content: [
        "Jogos são baseados em sorte e os resultados são determinados por geradores de números aleatórios certificados.",
        "É proibido usar software, bots ou qualquer método automatizado para jogar.",
        "Apostas são finais uma vez confirmadas e não podem ser canceladas.",
        "Prêmios são creditados automaticamente na conta do vencedor.",
        "Jogos interrompidos por falhas técnicas serão reiniciados ou reembolsados.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Condutas Proibidas",
      content: [
        "Criar múltiplas contas ou usar informações falsas no registro.",
        "Participar de qualquer forma de fraude, lavagem de dinheiro ou atividade ilegal.",
        "Usar software malicioso ou tentar hackear nossos sistemas.",
        "Comportamento abusivo, ofensivo ou inadequado com outros usuários ou suporte.",
        "Vender, transferir ou compartilhar sua conta com terceiros.",
      ],
    },
  ]

  const responsibilities = [
    "Jogue apenas com dinheiro que você pode se permitir perder",
    "Estabeleça limites de tempo e gastos antes de começar a jogar",
    "Nunca jogue sob influência de álcool ou drogas",
    "Procure ajuda se sentir que o jogo está se tornando um problema",
    "Mantenha suas informações de conta seguras e atualizadas",
    "Cumpra todas as leis locais relacionadas a jogos online",
  ]

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Termos de Uso</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leia atentamente nossos termos e condições antes de usar nossa plataforma.
          </p>
          <p className="text-sm text-gray-400 mt-4">Última atualização: Janeiro de 2025</p>
        </div>

        {/* Acceptance Notice */}
        <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Gavel className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e usar a plataforma Raspe & Brilhe, você concorda em cumprir e ficar vinculado a estes termos
                de uso. Se você não concorda com qualquer parte destes termos, deve parar de usar nossos serviços
                imediatamente.
              </p>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="h-6 w-6 text-purple-500" />
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Responsible Gaming */}
        <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Jogo Responsável</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Promovemos o jogo responsável e esperamos que nossos usuários sigam estas diretrizes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{responsibility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Account Termination */}
        <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Suspensão e Encerramento</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Suspensão Temporária:</strong> Podemos suspender temporariamente sua conta para investigações de
              segurança ou violações dos termos.
            </p>
            <p>
              <strong>Encerramento Permanente:</strong> Contas podem ser permanentemente encerradas por violações
              graves, atividades fraudulentas ou múltiplas infrações.
            </p>
            <p>
              <strong>Autoexclusão:</strong> Você pode solicitar o fechamento permanente de sua conta a qualquer momento
              por motivos de jogo responsável.
            </p>
            <p>
              <strong>Saldos em Conta:</strong> Saldos legítimos serão devolvidos conforme nossos procedimentos de
              retirada, sujeito a verificações necessárias.
            </p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Limitação de Responsabilidade</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Os jogos oferecidos em nossa plataforma são baseados em sorte e não há garantia de ganhos. Você joga por
              sua própria conta e risco.
            </p>
            <p>
              Não nos responsabilizamos por perdas resultantes de falhas técnicas, interrupções de internet, ou outros
              problemas fora do nosso controle direto.
            </p>
            <p>
              Nossa responsabilidade máxima é limitada ao valor do saldo em sua conta no momento do incidente, exceto
              onde proibido por lei.
            </p>
          </div>
        </div>

        {/* Changes and Contact */}
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 text-center">
          <FileText className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Alterações nos Termos</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Podemos atualizar estes termos periodicamente. Mudanças significativas serão comunicadas com antecedência. O
            uso continuado dos serviços constitui aceitação dos novos termos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                Falar com Suporte
              </button>
            </Link>
            <Link href="/historico-versoes">
              <button className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors">
                Ver Histórico de Versões
              </button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">Email: legal@raspebrilhe.com | Telefone: 0800-123-4567</p>
        </div>
      </div>
    </div>
  )
}
