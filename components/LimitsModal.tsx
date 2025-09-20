"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

export default function LimitsModal() {
  const [showLimitsModal, setShowLimitsModal] = useState(false)
  const [limits, setLimits] = useState({
    dailyLimit: "",
    weeklyLimit: "",
    monthlyLimit: "",
  })

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
    <>
      <button
        onClick={() => setShowLimitsModal(true)}
        className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors"
      >
        Configurar Limites
      </button>

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
    </>
  )
}