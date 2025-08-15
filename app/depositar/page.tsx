'use client';

import { useState } from 'react';
import { CreditCard, Smartphone, Building, QrCode, Clock, Shield, CheckCircle, AlertCircle } from 'lucide-react';

export default function DepositarPage() {
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
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Depositar</h1>
          <p className="text-gray-400">Adicione fundos à sua conta de forma rápida e segura</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600 mb-6">
              <h2 className="text-xl font-bold text-white mb-6">Escolha o Método de Pagamento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedMethod === method.id
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-neutral-600 hover:border-neutral-500'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon className={`h-6 w-6 ${
                          selectedMethod === method.id ? 'text-purple-400' : 'text-gray-400'
                        }`} />
                        <span className="font-semibold text-white">{method.name}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{method.description}</p>
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
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h2 className="text-xl font-bold text-white mb-6">Valor do Depósito</h2>
              
              {/* Quick Amounts */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount.toString())}
                    className="py-2 px-3 bg-neutral-600 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    R$ {quickAmount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Valor Personalizado
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
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
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors"
              >
                Depositar R$ {amount || '0,00'}
              </button>
            </div>
          </div>

          {/* Summary & Info */}
          <div className="space-y-6">
            {/* Deposit Summary */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-white mb-4">Resumo do Depósito</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Método:</span>
                  <span className="text-white font-medium">{selectedMethodData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Valor:</span>
                  <span className="text-white font-medium">R$ {amount || '0,00'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxa:</span>
                  <span className="text-white font-medium">{selectedMethodData?.fee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tempo:</span>
                  <span className="text-white font-medium">{selectedMethodData?.time}</span>
                </div>
                <hr className="border-neutral-600" />
                <div className="flex justify-between font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-purple-400">R$ {amount || '0,00'}</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 text-green-500" />
                <h3 className="text-lg font-bold text-white">Segurança</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Criptografia SSL 256-bits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Dados protegidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Transações monitoradas</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-bold text-white">Suporte</h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Problemas com seu depósito? Nossa equipe está aqui para ajudar 24/7.
              </p>
              <button className="w-full py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors text-sm">
                Falar com Suporte
              </button>
            </div>
          </div>
        </div>

        {/* PIX QR Code Modal */}
        {showQRCode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowQRCode(false)} />
            <div className="relative bg-neutral-700 rounded-2xl p-8 w-full max-w-md border border-neutral-600">
              <div className="text-center">
                <QrCode className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">PIX - QR Code</h2>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="w-48 h-48 bg-gray-200 mx-auto flex items-center justify-center">
                    <QrCode className="h-32 w-32 text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Escaneie o QR Code com seu app do banco ou copie o código PIX
                </p>
                <div className="bg-neutral-600 p-3 rounded-lg mb-4">
                  <p className="text-xs text-gray-400 break-all">
                    00020126580014BR.GOV.BCB.PIX013636c4b8c4-4c4c-4c4c-4c4c-4c4c4c4c4c4c
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                    Copiar Código
                  </button>
                  <button 
                    onClick={() => setShowQRCode(false)}
                    className="flex-1 border border-gray-600 text-gray-300 py-2 rounded-lg hover:bg-neutral-600 transition-colors"
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
