"use client"

import { useState } from 'react';
import { Landmark, QrCode, ChevronDown } from 'lucide-react';
import { WithdrawMethod } from '@/app/sacar/page';

const IconMap = {
  pix: QrCode,
  landmark: Landmark,
  smartphone: QrCode,
  building: Landmark,
};

const banks = [
  "Banco do Brasil", "Caixa Econômica", "Bradesco",
  "Itaú", "Santander", "Nu Pagamentos"
];

interface WithdrawFormProps {
  balance: number;
  withdrawMethods: WithdrawMethod[];
}

export default function WithdrawForm({ balance, withdrawMethods }: WithdrawFormProps) {
  const [selectedMethod, setSelectedMethod] = useState('pix');
  const [amount, setAmount] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [bank, setBank] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');

  const selectedMethodData = withdrawMethods.find(method => method.id === selectedMethod);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 6) value = value.slice(0, 6);
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    setAccount(value);
  };

  const handleWithdraw = () => {
    alert('Solicitação de saque enviada!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
        <h2 className="text-xl font-bold text-white mb-4">Método de Saque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {withdrawMethods.map((method) => {
            const Icon = IconMap[method.icon];
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
                  <Icon className={`h-6 w-6 ${selectedMethod === method.id ? 'text-purple-400' : 'text-gray-400'}`} />
                  <span className="font-semibold text-white">{method.name}</span>
                </div>
                <p className="text-sm text-gray-400">{method.description}</p>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
        <h2 className="text-xl font-bold text-white mb-4">Dados da Conta</h2>
        {selectedMethod === 'pix' ? (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Chave PIX</label>
            <input
              type="text"
              value={pixKey}
              onChange={(e) => setPixKey(e.target.value)}
              className="w-full p-3 bg-neutral-600 border border-neutral-500 rounded-lg text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder="CPF, email, telefone ou chave aleatória"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Banco</label>
              <div className="relative">
                <select
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full p-3 bg-neutral-600 border border-neutral-500 rounded-lg text-white appearance-none focus:border-purple-500 focus:ring-purple-500 pr-10"
                >
                  <option value="">Selecione o banco</option>
                  {banks.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <ChevronDown className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Agência</label>
                <input
                  type="text"
                  value={agency}
                  onChange={(e) => setAgency(e.target.value.replace(/\D/g, ''))}
                  maxLength={4}
                  className="w-full p-3 bg-neutral-600 border border-neutral-500 rounded-lg text-white focus:border-purple-500 focus:ring-purple-500"
                  placeholder="0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Conta com dígito</label>
                <input
                  type="text"
                  value={account}
                  onChange={handleAccountChange}
                  maxLength={8}
                  className="w-full p-3 bg-neutral-600 border border-neutral-500 rounded-lg text-white focus:border-purple-500 focus:ring-purple-500"
                  placeholder="00000-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
        <h2 className="text-xl font-bold text-white mb-4">Valor do Saque</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Valor Personalizado</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-neutral-600 border border-neutral-500 rounded-lg text-white focus:border-purple-500"
              placeholder="0,00"
            />
          </div>
          {selectedMethodData && (
            <p className="text-xs text-gray-500 mt-1">
              Mín: R$ {selectedMethodData.min} - Máx: R$ {Math.min(selectedMethodData.max, balance).toLocaleString('pt-br')}
            </p>
          )}
        </div>
        <button
          onClick={handleWithdraw}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-600 text-white font-bold py-3 rounded-lg transition-colors"
          disabled={!amount || parseFloat(amount) < (selectedMethodData?.min || 0) || parseFloat(amount) > balance}
        >
          Solicitar Saque de R$ {amount || '0,00'}
        </button>
      </div>
    </div>
  );
}