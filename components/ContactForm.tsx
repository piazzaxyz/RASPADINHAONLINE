"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "geral",
  })

  const departments = [
    { value: "geral", label: "Atendimento Geral" },
    { value: "tecnico", label: "Suporte Técnico" },
    { value: "financeiro", label: "Financeiro" },
    { value: "comercial", label: "Comercial" },
    { value: "juridico", label: "Jurídico" },
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
    alert("Mensagem enviada com sucesso! Responderemos em breve.")
    setFormData({ name: "", email: "", subject: "", message: "", department: "geral" })
  }

  return (
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
  )
}