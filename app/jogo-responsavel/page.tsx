"use client"

import type React from "react"

import { Shield, Clock, Phone, Heart, AlertTriangle, Users, Lock, Info, CheckCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"
import Link from "next/link"

export default function JogoResponsavelPage() {
  const [showLimitsModal, setShowLimitsModal] = useState(false)
  const [limits, setLimits] = useState({
    dailyLimit: "",
    weeklyLimit: "",
    monthlyLimit: "",
  })

  const resources = [
    {
      title: "Central de Atendimento 24h",
      description: "Suporte especializado para questões relacionadas ao jogo",
      contact: "0800-123-4567",
      icon: Phone,
      color: "text-green-500",
    },
    {
      title: "Chat Online",
      description: "Converse com nossos especialistas em tempo real",
      contact: "Disponível 24/7",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Email Especializado",
      description: "Envie suas dúvidas para nossa equipe especializada",
      contact: "jogoresponsavel@raspebrilhe.com",
      icon: Heart,
      color: "text-purple-500",
    },
  ]

  const selfAssessmentQuestions = [
    "Você gasta mais dinheiro em jogos do que planejou?",
    "Você joga para tentar recuperar perdas anteriores?",
    "Você mente sobre quanto dinheiro gasta em jogos?",
    "O jogo interfere no seu trabalho ou estudos?",
    "Você se sente ansioso ou irritado quando não pode jogar?",
    "Você negligencia responsabilidades familiares para jogar?",
  ]

  const warningSignals = [
    {
      title: "Sinais Financeiros",
      items: [
        "Gastar mais dinheiro do que pode pagar",
        "Emprestar dinheiro para jogar",
        "Vender pertences para apostar",
        "Problemas para pagar contas básicas",
      ],
    },
    {
      title: "Sinais Comportamentais",
      items: [
        "Jogar por períodos muito longos",
        "Perder noção do tempo enquanto joga",
        "Mentir sobre atividades de jogo",
        "Isolar-se de família e amigos",
      ],
    },
    {
      title: "Sinais Emocionais",
      items: [
        "Ansiedade quando não pode jogar",
        "Irritabilidade ou depressão",
        "Sentimentos de culpa após jogar",
        "Perda de interesse em outras atividades",
      ],
    },
  ]

  const preventionTips = [
    {
      icon: Clock,
      title: "Estabeleça Limites de Tempo",
      description: "Defina quanto tempo você quer gastar jogando e use alarmes para lembrar.",
    },
    {
      icon: Lock,
      title: "Defina Orçamento",
      description: "Estabeleça um valor máximo para gastar e nunca ultrapasse esse limite.",
    },
    {
      icon: Users,
      title: "Mantenha Relacionamentos",
      description: "Continue cultivando relacionamentos familiares e de amizade.",
    },
    {
      icon: Heart,
      title: "Encontre Outras Atividades",
      description: "Pratique hobbies e atividades que tragam satisfação e bem-estar.",
    },
  ]

  const handleLimitsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Limits configured:", limits)
    alert("Limites configurados com sucesso!")
    setShowLimitsModal(false)
    setLimits({ dailyLimit: "", weeklyLimit: "", monthlyLimit: "" })
  }

  const handleLimitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numericValue = value.replace(/\D/g, "")
    if (Number.parseInt(numericValue) <= 5000 || numericValue === "") {
      setLimits((prev) => ({
        ...prev,
        [name]: numericValue,
      }))
    }
  }

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Jogo Responsável</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sua diversão e bem-estar são nossa prioridade. Jogue com consciência e responsabilidade.
          </p>
        </div>

        {/* Alert Banner */}
        <Alert className="mb-8 bg-purple-900/30 border-purple-500/30">
          <Info className="h-4 w-4 text-purple-400" />
          <AlertDescription className="text-purple-300">
            <strong>Importante:</strong> O jogo deve ser sempre uma forma de entretenimento. Se você sente que está
            perdendo o controle, busque ajuda imediatamente.
          </AlertDescription>
        </Alert>

        {/* Quick Help Section */}
        <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            <h2 className="text-2xl font-bold text-white">Precisa de Ajuda Imediata?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div key={index} className="bg-neutral-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className={`h-6 w-6 ${resource.color}`} />
                    <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{resource.description}</p>
                  <p className="text-purple-400 font-medium">{resource.contact}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Self Assessment */}
        <div className="bg-neutral-700/50 rounded-xl p-8 mb-12 border border-neutral-600">
          <h2 className="text-2xl font-bold text-white mb-6">Autoavaliação</h2>
          <p className="text-gray-300 mb-6">
            Responda honestamente às perguntas abaixo. Se você respondeu "sim" a 3 ou mais perguntas, considere buscar
            ajuda profissional.
          </p>

          <div className="space-y-4">
            {selfAssessmentQuestions.map((question, index) => (
              <div key={index} className="bg-neutral-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  <p className="text-white">{question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sinais de Alerta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {warningSignals.map((category, index) => (
              <div key={index} className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Dicas de Prevenção</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div
                  key={index}
                  className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-purple-500" />
                    <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                  </div>
                  <p className="text-gray-300">{tip.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-neutral-700/50 rounded-lg border border-neutral-600">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-400">
                O que é jogo responsável?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Jogo responsável significa jogar de forma consciente, estabelecendo limites de tempo e dinheiro,
                mantendo o controle sobre seus hábitos de jogo e garantindo que o jogo permaneça como uma atividade de
                entretenimento saudável.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-neutral-700/50 rounded-lg border border-neutral-600">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-400">
                Como posso estabelecer limites?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Você pode estabelecer limites de depósito, tempo de jogo e perdas através das configurações da sua
                conta. Também oferecemos ferramentas de autoexclusão temporária ou permanente quando necessário.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-neutral-700/50 rounded-lg border border-neutral-600">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-400">
                Onde buscar ajuda profissional?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Recomendamos procurar psicólogos especializados em dependência, grupos de apoio como Jogadores Anônimos,
                ou entrar em contato conosco através dos canais de suporte especializados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-neutral-700/50 rounded-lg border border-neutral-600">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-400">
                O site oferece ferramentas de proteção?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Sim, oferecemos diversas ferramentas incluindo limites de depósito, limites de tempo, lembretes de tempo
                de jogo, histórico detalhado de atividades e opções de autoexclusão.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Lembre-se</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            O jogo deve ser sempre divertido e nunca uma fonte de estresse ou problemas financeiros. Se você ou alguém
            que conhece precisa de ajuda, não hesite em buscar suporte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                Falar com Especialista
              </button>
            </Link>
            <button
              onClick={() => setShowLimitsModal(true)}
              className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors"
            >
              Configurar Limites
            </button>
          </div>
        </div>

        {/* Limits Configuration Modal */}
        {showLimitsModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-neutral-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-neutral-600">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-600">
                <h3 className="text-xl font-bold text-white">Configurar Limites de Aposta</h3>
                <button
                  onClick={() => setShowLimitsModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 text-sm">
                  Defina limites para suas apostas. Os valores são em reais (R$) e o máximo permitido é R$ 5.000 por
                  período.
                </p>

                <form onSubmit={handleLimitsSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="dailyLimit" className="block text-sm font-medium text-gray-300 mb-2">
                      Limite Diário (R$)
                    </label>
                    <input
                      type="text"
                      id="dailyLimit"
                      name="dailyLimit"
                      value={limits.dailyLimit}
                      onChange={handleLimitsChange}
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="Ex: 100"
                    />
                  </div>

                  <div>
                    <label htmlFor="weeklyLimit" className="block text-sm font-medium text-gray-300 mb-2">
                      Limite Semanal (R$)
                    </label>
                    <input
                      type="text"
                      id="weeklyLimit"
                      name="weeklyLimit"
                      value={limits.weeklyLimit}
                      onChange={handleLimitsChange}
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="Ex: 500"
                    />
                  </div>

                  <div>
                    <label htmlFor="monthlyLimit" className="block text-sm font-medium text-gray-300 mb-2">
                      Limite Mensal (R$)
                    </label>
                    <input
                      type="text"
                      id="monthlyLimit"
                      name="monthlyLimit"
                      value={limits.monthlyLimit}
                      onChange={handleLimitsChange}
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="Ex: 2000"
                    />
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mt-6">
                    <p className="text-purple-300 text-sm">
                      <strong>Importante:</strong> Os limites entrarão em vigor imediatamente após a confirmação. Para
                      alterar os limites, será necessário aguardar 24 horas.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowLimitsModal(false)}
                      className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Confirmar Limites
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
