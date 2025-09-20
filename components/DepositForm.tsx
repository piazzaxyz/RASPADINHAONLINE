'use client';

import { useState } from 'react';
import Link from 'next/link'; // 1. Importar o Link
import { CreditCard, Smartphone, Building, QrCode, ArrowLeft } from 'lucide-react'; // 2. Importar o ícone

export default function DepositForm() {
  const [selectedMethod, setSelectedMethod] = useState('pix');
  const [amount, setAmount] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const paymentMethods = [
    {
      id: 'pix',
      name: 'PIX',
      icon: Smartphone,
      description: 'Instantâneo e gratuito',
      time: 'Imediato',
      fee: 'Grátis',
      min: 10,
      max: 5000
    },
    {
      id: 'credit',
      name: 'Cartão de Crédito',
      icon: CreditCard,
      description: 'Visa, Mastercard, Elo',
      time: 'Imediato',
      fee: '3,5%',
      min: 20,
      max: 2000
    },
    {
      id: 'debit',
      name: 'Cartão de Débito',
      icon: CreditCard,
      description: 'Débito online',
      time: 'Imediato',
      fee: '2,5%',
      min: 10,
      max: 1000
    },
    {
      id: 'bank',
      name: 'Transferência Bancária',
      icon: Building,
      description: 'TED/DOC',
      time: '1-2 dias úteis',
      fee: 'Grátis',
      min: 50,
      max: 10000
    }
  ];

  const quickAmounts = [10, 25, 50, 100, 200, 500];

  const handleDeposit = () => {
    if (selectedMethod === 'pix') {
      setShowQRCode(true);
    } else {
      // Simular redirecionamento para gateway de pagamento
      alert('Redirecionando para o gateway de pagamento...');
    }
  };

  const selectedMethodData = paymentMethods.find(method => method.id === selectedMethod);

  return (
    <div className="w-full"> {/* Container para o botão e o grid */}
      {/* 3. Botão "Voltar ao Início" adicionado aqui */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao Início</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Payment Form */}
        <div className="space-y-4 sm:space-y-6">
          {/* Payment Methods */}
          <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Escolha o Método de Pagamento</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-left ${
                      selectedMethod === method.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-neutral-600 hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                        selectedMethod === method.id ? 'text-purple-400' : 'text-gray-400'
                      }`} />
                      <span className="font-semibold text-white text-sm sm:text-base">{method.name}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2">{method.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Tempo: {method.time}</span>
                      <span className="text-gray-500">Taxa: {method.fee}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Amount Selection */}
          <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Valor do Depósito</h2>
            
            {/* Quick Amounts */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {quickAmounts.map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => setAmount(quickAmount.toString())}
                  className="py-2 px-2 sm:px-3 bg-neutral-600 hover:bg-purple-600 text-white rounded-lg transition-colors text-xs sm:text-sm font-medium"
                >
                  R$ {quickAmount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Valor Personalizado
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm sm:text-base"
                  placeholder="0,00"
                  min={selectedMethodData?.min}
                  max={selectedMethodData?.max}
                />
              </div>
              {selectedMethodData && (
                <p className="text-xs text-gray-500 mt-1">
                  Mín: R$ {selectedMethodData.min} - Máx: R$ {selectedMethodData.max.toLocaleString()}
                </p>
              )}
            </div>

            {/* Deposit Button */}
            <button
              onClick={handleDeposit}
              disabled={!amount || parseFloat(amount) < (selectedMethodData?.min || 0)}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              Depositar R$ {amount || '0,00'}
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-neutral-700/50 rounded-xl p-4 sm:p-6 border border-neutral-600 h-fit">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4">Resumo do Depósito</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm sm:text-base">Método:</span>
              <span className="text-white font-medium text-sm sm:text-base">{selectedMethodData?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm sm:text-base">Valor:</span>
              <span className="text-white font-medium text-sm sm:text-base">R$ {amount || '0,00'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm sm:text-base">Taxa:</span>
              <span className="text-white font-medium text-sm sm:text-base">{selectedMethodData?.fee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm sm:text-base">Tempo:</span>
              <span className="text-white font-medium text-sm sm:text-base">{selectedMethodData?.time}</span>
            </div>
            <hr className="border-neutral-600" />
            <div className="flex justify-between font-bold">
              <span className="text-white text-sm sm:text-base">Total:</span>
              <span className="text-purple-400 text-sm sm:text-base">R$ {amount || '0,00'}</span>
            </div>
          </div>
        </div>

        {/* PIX QR Code Modal */}
        {showQRCode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowQRCode(false)} />
            <div className="relative bg-neutral-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 w-full max-w-sm sm:max-w-md border border-neutral-600">
              <div className="text-center">
                <QrCode className="h-8 w-8 sm:h-12 sm:w-12 text-purple-500 mx-auto mb-4" />
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">PIX - QR Code</h2>
                <div className="bg-white p-3 sm:p-4 rounded-lg mb-4">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gray-200 mx-auto flex items-center justify-center">
                    <QrCode className="h-20 w-20 sm:h-32 sm:w-32 text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Escaneie o QR Code com seu app do banco ou copie o código PIX
                </p>
                <div className="bg-neutral-600 p-2 sm:p-3 rounded-lg mb-4">
                  <p className="text-xs break-all text-gray-400">
                    00020126580014BR.GOV.BCB.PIX013636c4b8c4-4c4c-4c4c-4c4c-4c4c4c4c4c4c
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
                    Copiar Código
                  </button>
                  <button 
                    onClick={() => setShowQRCode(false)}
                    className="flex-1 border border-gray-600 text-gray-300 py-2 sm:py-3 rounded-lg hover:bg-neutral-600 transition-colors text-sm sm:text-base"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}