import { CreditCard, Smartphone, Building, QrCode, Clock, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import DepositForm from '@/components/DepositForm';

export default function DepositarPage() {
  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Depositar</h1>
          <p className="text-gray-400">Adicione fundos à sua conta de forma rápida e segura</p>
        </div>

        <DepositForm />
      </div>
    </div>
  );
}