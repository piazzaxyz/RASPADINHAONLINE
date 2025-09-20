import { ArrowLeft } from "lucide-react"
import Link from "next/link" // 👈 1. Importe o Link
import RaspadinhasGrid from "@/components/RaspadinhasGrid"

export default function RaspadinhasPage() {
  return (
    <div className="min-h-screen bg-neutral-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 👇 2. BOTÃO ADICIONADO AQUI 👇 */}
        <Link href="/" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para o início</span>
        </Link>
        {/* ============================== */}

        {/* Header Original */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Raspadinhas</h1>
          <p className="text-gray-400">Escolha sua raspadinha e concorra a prêmios incríveis</p>
        </div>

        <RaspadinhasGrid />
      </div>
    </div>
  )
}