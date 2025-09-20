// app/conta/layout.tsx

"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Wallet, History, Package, Shield } from 'lucide-react';

// Lista de itens CENTRALIZADA para a área da conta
export const accountMenuItems = [
  { href: "/conta", label: "Minha Conta", icon: User },
  { href: "/conta/transacoes", label: "Transações", icon: Wallet },
  { href: "/conta/historico-jogos", label: "Histórico de Jogos", icon: History },
  { href: "/conta/entregas", label: "Entregas de Prêmios", icon: Package },
  { href: "/conta/seguranca", label: "Segurança", icon: Shield },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-neutral-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Área do Jogador</h1>
          <p className="text-gray-400">Gerencie sua conta, histórico e segurança.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <aside className="md:col-span-1">
            <nav className="space-y-2">
              {accountMenuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                      isActive
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'text-gray-300 hover:bg-neutral-700/50 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Conteúdo da Página */}
          <main className="md:col-span-3">
            <div className="bg-neutral-700/50 rounded-xl p-6 sm:p-8 border border-neutral-600">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
