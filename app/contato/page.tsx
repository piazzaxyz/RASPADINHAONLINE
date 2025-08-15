"use client"

import type React from "react"

import { Mail, Phone, MessageCircle, Clock, Send, Building } from "lucide-react"
import { useState } from "react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "geral",
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      items: [
        { label: "Atendimento Geral", value: "0800-123-4567" },
        { label: "Suporte Técnico", value: "0800-123-TECH" },
        { label: "Emergência", value: "0800-123-EMERGENCY" },
      ],
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      items: [
        { label: "Suporte Geral", value: "suporte@raspebrilhe.com" },
        { label: "Suporte Técnico", value: "tech@raspebrilhe.com" },
        { label: "Comercial", value: "comercial@raspebrilhe.com" },
      ],
      color: "text-purple-500",
    },
    {
      icon: MessageCircle,
      title: "Chat Online",
      items: [
        { label: "Disponível 24/7", value: "Clique no ícone no canto inferior direito" },
        { label: "Tempo médio de resposta", value: "2 minutos" },
        { label: "Idiomas", value: "Português" },
      ],
      color: "text-green-500",
    },
  ]

  const departments = [
    { value: "geral", label: "Atendimento Geral" },
    { value: "tecnico", label: "Suporte Técnico" },
    { value: "financeiro", label: "Financeiro" },
    { value: "comercial", label: "Comercial" },
    { value: "juridico", label: "Jurídico" },
  ]

  const businessHours = [
    { day: "Segunda - Domingo", hours: "24 horas" },
    { day: "Chat Online", hours: "Sempre disponível" },
    { day: "Email", hours: "Resposta em até 4h" },
    { day: "Telefone", hours: "Atendimento 24/7" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui você implementaria o envio do formulário
    alert("Mensagem enviada com sucesso! Responderemos em breve.")
    setFormData({ name: "", email: "", subject: "", message: "", department: "geral" })
  }

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Contato</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco através dos canais disponíveis.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <div key={index} className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className={`h-6 w-6 ${contact.color}`} />
                  <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                </div>
                <div className="space-y-3">
                  {contact.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-white">Envie uma Mensagem</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">
                  Departamento
                </label>
                <div className="relative">
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 appearance-none cursor-pointer"
                  >
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value} className="bg-neutral-600 text-white">
                        {dept.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                  placeholder="Descreva sua dúvida ou problema detalhadamente..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-semibold py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </button>

              <p className="text-xs text-gray-400 text-center">* Campos obrigatórios. Responderemos em até 4 horas.</p>
            </form>
          </div>

          {/* Business Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-purple-500" />
                <h3 className="text-xl font-bold text-white">Horários de Atendimento</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600">
              <div className="flex items-center space-x-3 mb-6">
                <Building className="h-6 w-6 text-purple-500" />
                <h3 className="text-xl font-bold text-white">Informações da Empresa</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Razão Social</p>
                  <p className="text-white font-medium">Raspe & Brilhe Jogos Ltda.</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">CNPJ</p>
                  <p className="text-white font-medium">12.345.678/0001-90</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Endereço</p>
                  <p className="text-white font-medium">
                    Av. Paulista, 1000 - Sala 500
                    <br />
                    Bela Vista, São Paulo - SP
                    <br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Links Úteis</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/perguntas-frequentes"
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                >
                  Perguntas Frequentes
                </a>
                <a href="/suporte-tecnico" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                  Suporte Técnico
                </a>
                <a href="/jogo-responsavel" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                  Jogo Responsável
                </a>
                <a href="/como-jogar" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                  Como Jogar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
