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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo e Copyright */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <Link href="/" className="flex items-center justify-center sm:justify-start">
              <Image 
                src="/RASPE & BRILHE.png" 
                alt="Raspe & Brilhe" 
                width={120} 
                height={40}
                className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                priority
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
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-white mb-3 sm:mb-4">Regulamentos</h3>
            <ul className="space-y-2">
              {regulamentosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-500 transition-colors block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ajuda */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-white mb-3 sm:mb-4">Ajuda</h3>
            <ul className="space-y-2">
              {ajudaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-500 transition-colors block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-600">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Security Badges */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
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
            <p className="text-xs text-gray-500 text-center lg:text-right">
              Apenas maiores de 18 anos. Jogue com responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}