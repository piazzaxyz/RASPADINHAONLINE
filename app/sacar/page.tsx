// app/sacar/page.tsx

import { Banknote, Info, Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import WithdrawForm from '@/components/WithdrawForm';

// O tipo agora aceita os novos nomes de ícones
export type WithdrawMethod = {
  id: string;
  name: string;
  icon: 'pix' | 'landmark'; // Nomes mais específicos para os ícones
  description: string;
  time: string;
  fee: string;
  min: number;
  max: number;
};

export default function SacarPage() {
  const balance = 1247.50; // Saldo simulado

  // O array agora usa os novos nomes de ícones
  const withdrawMethods: WithdrawMethod[] = [
    {
      id: 'pix',
      name: 'PIX',
      icon: 'pix', // Ícone específico para PIX
      description: 'Receba em minutos',
      time: '2-15 minutos',
      fee: 'Grátis',
      min: 10,
      max: 5000
    },
    {
      id: 'bank',
      name: 'Transferência Bancária',
      icon: 'landmark', // Ícone específico para TED (banco)
      description: 'TED para sua conta',
      time: '1-2 dias úteis',
      fee: 'R$ 5,00',
      min: 50,
      max: 10000
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-800 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Sacar Fundos</h1>
          <p className="text-gray-400">Retire seus ganhos de forma rápida e segura.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-800/30 rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Saldo Disponível para Saque</p>
                  <p className="text-3xl font-bold text-green-400">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)}
                  </p>
                </div>
                <Banknote className="h-12 w-12 text-green-500" />
              </div>
            </div>

            <WithdrawForm balance={balance} withdrawMethods={withdrawMethods} />
          </div>

          <div className="space-y-6">
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Informações Importantes</h3>
              </div>
              <ul className="space-y-3 text-sm list-none">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">O primeiro saque do mês é gratuito.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Saques só podem ser feitos para contas no seu nome (mesmo CPF).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Verificação de identidade pode ser solicitada por segurança.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}