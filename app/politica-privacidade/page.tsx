'use client';

import { Shield, Eye, Lock, Database, Users, AlertTriangle, FileText, CheckCircle } from 'lucide-react';

export default function PoliticaPrivacidadePage() {
  const sections = [
    {
      icon: Database,
      title: "Coleta de Dados",
      content: [
        "Coletamos informações pessoais quando você se registra em nossa plataforma, incluindo nome, email, telefone e data de nascimento.",
        "Dados de jogos e transações são registrados para fins de segurança e conformidade regulatória.",
        "Informações técnicas como endereço IP, tipo de dispositivo e dados de navegação são coletadas automaticamente.",
        "Cookies e tecnologias similares são utilizados para melhorar sua experiência no site."
      ]
    },
    {
      icon: Eye,
      title: "Uso dos Dados",
      content: [
        "Processamento de transações e operações de jogos em nossa plataforma.",
        "Verificação de identidade e prevenção de fraudes para manter a segurança.",
        "Comunicação sobre promoções, novos jogos e atualizações importantes.",
        "Análise e melhoria contínua de nossos serviços e experiência do usuário.",
        "Cumprimento de obrigações legais e regulamentares do setor de jogos."
      ]
    },
    {
      icon: Users,
      title: "Compartilhamento",
      content: [
        "Nunca vendemos seus dados pessoais para terceiros.",
        "Compartilhamos informações apenas com provedores de serviços essenciais (processamento de pagamentos, verificação de identidade).",
        "Dados podem ser divulgados se exigidos por autoridades competentes ou para cumprimento legal.",
        "Em caso de fusão ou aquisição, dados podem ser transferidos com notificação prévia."
      ]
    },
    {
      icon: Lock,
      title: "Segurança",
      content: [
        "Utilizamos criptografia SSL de 256 bits para proteger todas as transmissões de dados.",
        "Servidores seguros com monitoramento 24/7 e sistemas de backup redundantes.",
        "Acesso restrito aos dados pessoais apenas para funcionários autorizados.",
        "Auditorias regulares de segurança por empresas especializadas.",
        "Políticas rigorosas de senhas e autenticação multifator para contas administrativas."
      ]
    }
  ];

  const rights = [
    "Acessar e obter cópia de seus dados pessoais",
    "Retificar dados incorretos ou desatualizados",
    "Solicitar exclusão de dados (direito ao esquecimento)",
    "Restringir o processamento de seus dados",
    "Portabilidade de dados para outras plataformas",
    "Retirar consentimento para processamento não obrigatório"
  ];

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Política de Privacidade</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sua privacidade é fundamental. Saiba como coletamos, usamos e protegemos suas informações.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Compromisso com sua Privacidade</h2>
          <p className="text-gray-300 leading-relaxed">
            A Raspe & Brilhe está comprometida em proteger e respeitar sua privacidade. Esta política 
            explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando 
            você usa nossa plataforma de jogos online.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="h-6 w-6 text-purple-500" />
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* User Rights */}
        <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Seus Direitos</h2>
          </div>
          <p className="text-gray-300 mb-6">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{right}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Retenção de Dados</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Contas Ativas:</strong> Mantemos seus dados enquanto sua conta permanecer ativa 
              e você continuar usando nossos serviços.
            </p>
            <p>
              <strong>Contas Inativas:</strong> Dados de contas inativas por mais de 2 anos podem ser 
              arquivados ou anonimizados.
            </p>
            <p>
              <strong>Obrigações Legais:</strong> Alguns dados são mantidos por períodos específicos 
              conforme exigências regulamentares (até 5 anos para transações financeiras).
            </p>
            <p>
              <strong>Exclusão:</strong> Você pode solicitar a exclusão de seus dados a qualquer momento, 
              sujeito às nossas obrigações legais.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Cookies e Tecnologias</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Cookies Essenciais</h4>
                <p className="text-sm">Necessários para o funcionamento básico do site e segurança da sua conta.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cookies Analíticos</h4>
                <p className="text-sm">Ajudam-nos a entender como você usa o site para melhorar nossos serviços.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cookies de Preferência</h4>
                <p className="text-sm">Lembram suas configurações e preferências para personalizar sua experiência.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cookies de Marketing</h4>
                <p className="text-sm">Utilizados para exibir promoções e conteúdo relevante aos seus interesses.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20 text-center">
          <AlertTriangle className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Dúvidas sobre Privacidade?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Se você tiver dúvidas sobre esta política ou quiser exercer seus direitos de privacidade, 
            entre em contato conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Contatar DPO
            </button>
            <button className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors">
              Central de Privacidade
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Email: privacidade@raspebrilhe.com | Telefone: 0800-123-4567
          </p>
        </div>
      </div>
    </div>
  );
}
