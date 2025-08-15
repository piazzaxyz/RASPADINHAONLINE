import Link from 'next/link';
import { Shield, Lock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const regulamentosLinks = [
    { href: '/jogo-responsavel', label: 'Jogo Responsável' },
    { href: '/politica-privacidade', label: 'Política de Privacidade' },
    { href: '/termos-uso', label: 'Termos de Uso' },
  ];

  const ajudaLinks = [
    { href: '/perguntas-frequentes', label: 'Perguntas Frequentes' },
    { href: '/como-jogar', label: 'Como Jogar' },
    { href: '/suporte-tecnico', label: 'Suporte Técnico' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-neutral-700 border-t border-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Copyright */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/RASPE & BRILHE.png" 
                alt="Raspe & Brilhe" 
                width={100} 
                height={32}
                className="h-40 w-40" // Ajuste de tamanho para a nova logo
              />
            </Link>
            <p className="text-sm text-gray-400">
              RaspeBrilhe © 2025 - Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Raspadinhas e outros jogos de azar são regulamentados e cobertos pela nossa
              licença de jogos. Jogue com responsabilidade.
            </p>
          </div>

          {/* Regulamentos */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Regulamentos</h3>
            <ul className="space-y-2">
              {regulamentosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Ajuda</h3>
            <ul className="space-y-2">
              {ajudaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Security Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Shield className="h-4 w-4 text-purple-500" />
                <span>Licenciado e Regulamentado</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Lock className="h-4 w-4 text-purple-500" />
                <span>SSL Seguro</span>
              </div>
            </div>

            {/* Age Restriction */}
            <p className="text-xs text-gray-500 text-center md:text-right">
              Apenas maiores de 18 anos. Jogue com responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
