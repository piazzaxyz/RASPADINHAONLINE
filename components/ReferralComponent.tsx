"use client"

import { useState } from "react"
import { Copy, Share2, Check, FileText, X } from "lucide-react"
import AuthModal from "./AuthModal"

export default function ReferralComponent() {
  const [isLoggedIn] = useState(false)
  const [referralCode] = useState("RASPE2025XYZ")
  const [copied, setCopied] = useState(false)
  const [showRegulamento, setShowRegulamento] = useState(false)
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null)

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
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
          <div className="h-16 w-16 text-purple-500 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
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

      {/* Regulamento Modal */}
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
    </>
  )
}