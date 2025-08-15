'use client';

import { useState } from 'react';
import { Banknote, Building, Smartphone, Clock, Shield, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function SacarPage() {
  const [selectedMethod, setSelectedMethod] = useState('pix');
  const [amount, setAmount] = useState('');
  const [accountData, setAccountData] = useState({
    pixKey: '',
    bank: '',
    agency: '',
    account: '',
    accountType: 'corrente'
  });

  const balance = 1247.50; // Saldo simulado

  const withdrawMethods = [
    {
      id: 'pix',
      name: 'PIX',
      icon: Smartphone,
      description: 'Receba em minutos',
      time: '2-15 minutos',
      fee: 'Grátis',
      min: 10,
      max: 5000
    },
    {
      id: 'bank',
      name: 'Transferência Bancária',
      icon: Building,
      description: 'TED para sua conta',
      time: '1-2 dias úteis',
      fee: 'R$ 5,00',
      min: 50,
      max: 10000
    }
  ];

  const quickAmounts = [50, 100, 200, 500, 1000];

  const handleWithdraw = () => {
    if (!amount || parseFloat(amount) < 10) {
      alert('Valor mínimo para saque é R$ 10,00');
      return;
    }
    if (parseFloat(amount) > balance) {
      alert('Saldo insuficiente');
      return;
    }
    
    // Simular processamento do saque
    alert('Solicitação de saque enviada com sucesso!');
  };

  const selectedMethodData = withdrawMethods.find(method => method.id === selectedMethod);

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Sacar</h1>
          <p className="text-gray-400">Retire seus ganhos de forma rápida e segura</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Withdrawal Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-800/30 rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Saldo Disponível</p>
                  <p className="text-3xl font-bold text-green-400">R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
                <Banknote className="h-12 w-12 text-green-500" />
              </div>
            </div>

            {/* Withdrawal Methods */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h2 className="text-xl font-bold text-white mb-6">Método de Saque</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {withdrawMethods.map((method) => {
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

            {/* Account Details */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h2 className="text-xl font-bold text-white mb-6">Dados da Conta</h2>
              
              {selectedMethod === 'pix' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Chave PIX
                  </label>
                  <input
                    type="text"
                    value={accountData.pixKey}
                    onChange={(e) => setAccountData({...accountData, pixKey: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    placeholder="CPF, email, telefone ou chave aleatória"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Banco
                      </label>
                      <select
                        value={accountData.bank}
                        onChange={(e) => setAccountData({...accountData, bank: e.target.value})}
                        className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Selecione o banco</option>
                        <option value="001">Banco do Brasil</option>
                        <option value="104">Caixa Econômica</option>
                        <option value="237">Bradesco</option>
                        <option value="341">Itaú</option>
                        <option value="033">Santander</option>
                        <option value="260">Nu Pagamentos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tipo de Conta
                      </label>
                      <select
                        value={accountData.accountType}
                        onChange={(e) => setAccountData({...accountData, accountType: e.target.value})}
                        className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="corrente">Conta Corrente</option>
                        <option value="poupanca">Conta Poupança</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Agência
                      </label>
                      <input
                        type="text"
                        value={accountData.agency}
                        onChange={(e) => setAccountData({...accountData, agency: e.target.value})}
                        className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                        placeholder="0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Conta
                      </label>
                      <input
                        type="text"
                        value={accountData.account}
                        onChange={(e) => setAccountData({...accountData, account: e.target.value})}
                        className="w-full px-4 py-3 bg-neutral-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                        placeholder="00000-0"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Amount Selection */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h2 className="text-xl font-bold text-white mb-6">Valor do Saque</h2>
              
              {/* Quick Amounts */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount.toString())}
                    disabled={quickAmount > balance}
                    className="py-2 px-3 bg-neutral-600 hover:bg-purple-600 disabled:bg-neutral-700 disabled:text-gray-500 text-white rounded-lg transition-colors text-sm font-medium"
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
                    max={Math.min(selectedMethodData?.max || balance, balance)}
                  />
                </div>
                {selectedMethodData && (
                  <p className="text-xs text-gray-500 mt-1">
                    Mín: R$ {selectedMethodData.min} - Máx: R$ {Math.min(selectedMethodData.max, balance).toLocaleString()}
                  </p>
                )}
              </div>

              {/* Withdraw Button */}
              <button
                onClick={handleWithdraw}
                disabled={!amount || parseFloat(amount) < (selectedMethodData?.min || 0) || parseFloat(amount) > balance}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors"
              >
                Solicitar Saque de R$ {amount || '0,00'}
              </button>
            </div>
          </div>

          {/* Summary & Info */}
          <div className="space-y-6">
            {/* Withdrawal Summary */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-white mb-4">Resumo do Saque</h3>
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
                  <span className="text-white">Você receberá:</span>
                  <span className="text-green-400">
                    R$ {amount ? (parseFloat(amount) - (selectedMethod === 'bank' ? 5 : 0)).toFixed(2) : '0,00'}
                  </span>
                </div>
              </div>
            </div>

            {/* Important Info */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="h-5 w-5 text-blue-500" />
                <h3 className="text-lg font-bold text-white">Informações Importantes</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Primeiro saque do mês é gratuito</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Saques só podem ser feitos para contas no seu nome</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Verificação de identidade pode ser solicitada</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 text-green-500" />
                <h3 className="text-lg font-bold text-white">Segurança</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Transações criptografadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Verificação em duas etapas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Monitoramento 24/7</span>
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
                Dúvidas sobre seu saque? Nossa equipe está aqui para ajudar.
              </p>
              <button className="w-full py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors text-sm">
                Falar com Suporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
