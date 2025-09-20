import { Settings, AlertCircle, Wifi, CreditCard, User, Phone, MessageCircle, Mail, Clock, CheckCircle } from 'lucide-react';

export default function SuporteTecnicoPage() {
  const commonIssues = [
    {
      icon: Wifi,
      title: "Problemas de Conexão",
      description: "Site lento, erro de carregamento ou desconexões",
      solutions: [
        "Verifique sua conexão com a internet",
        "Limpe o cache e cookies do navegador",
        "Tente usar outro navegador ou dispositivo",
        "Desative temporariamente antivírus/firewall"
      ]
    },
    {
      icon: CreditCard,
      title: "Problemas de Pagamento",
      description: "Depósitos não processados ou saques pendentes",
      solutions: [
        "Verifique se os dados do cartão estão corretos",
        "Confirme se há limite disponível no cartão",
        "Aguarde até 15 minutos para processamento",
        "Entre em contato se o problema persistir"
      ]
    },
    {
      icon: User,
      title: "Problemas de Conta",
      description: "Login, senha ou verificação de conta",
      solutions: [
        "Use 'Esqueci minha senha' para redefinir",
        "Verifique se está usando o email correto",
        "Confirme sua conta pelo email recebido",
        "Entre em contato para verificação manual"
      ]
    },
    {
      icon: Settings,
      title: "Problemas no Jogo",
      description: "Jogos não carregam ou resultados não aparecem",
      solutions: [
        "Atualize a página (F5) e tente novamente",
        "Verifique se o JavaScript está habilitado",
        "Use navegadores atualizados (Chrome, Firefox)",
        "Desative extensões que possam interferir"
      ]
    }
  ];

  const systemRequirements = {
    browsers: [
      "Google Chrome 90+ (Recomendado)",
      "Mozilla Firefox 88+",
      "Safari 14+",
      "Microsoft Edge 90+"
    ],
    mobile: [
      "iOS 14+ (Safari)",
      "Android 8+ (Chrome)",
      "Conexão de internet estável",
      "JavaScript habilitado"
    ],
    general: [
      "Conexão de internet de banda larga",
      "Resolução mínima: 1024x768",
      "Cookies e JavaScript habilitados",
      "Pop-ups permitidos para o site"
    ]
  };

  const contactChannels = [
    {
      icon: MessageCircle,
      title: "Chat Online",
      subtitle: "Atendimento Imediato",
      description: "Suporte técnico 24/7 via chat",
      availability: "Disponível agora",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: Phone,
      title: "Telefone",
      subtitle: "0800-123-TECH (8324)",
      description: "Suporte técnico especializado",
      availability: "24h todos os dias",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Mail,
      title: "Email Técnico",
      subtitle: "tech@raspebrilhe.com",
      description: "Suporte detalhado por email",
      availability: "Resposta em até 2h",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ];

  const troubleshootingSteps = [
    "Feche e abra o navegador novamente",
    "Limpe cache e cookies do navegador",
    "Desative extensões temporariamente",
    "Tente em modo anônimo/privado",
    "Verifique se há atualizações do navegador",
    "Reinicie seu dispositivo",
    "Teste com outro navegador",
    "Entre em contato se nada resolver"
  ];

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Settings className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Suporte Técnico</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre soluções rápidas para problemas técnicos ou entre em contato com nossa equipe especializada.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className={`${channel.bgColor} border ${channel.borderColor} rounded-xl p-6 text-center`}>
                <Icon className={`h-8 w-8 mx-auto mb-4 ${channel.color}`} />
                <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                <p className={`font-semibold mb-2 ${channel.color}`}>{channel.subtitle}</p>
                <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-400">{channel.availability}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Problemas Comuns</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Veja as soluções para os problemas técnicos mais frequentes antes de entrar em contato.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => {
              const Icon = issue.icon;
              return (
                <div key={index} className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{issue.title}</h3>
                      <p className="text-gray-400 text-sm">{issue.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {issue.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Requisitos do Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Navegadores Desktop</h3>
              <ul className="space-y-2">
                {systemRequirements.browsers.map((browser, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{browser}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Dispositivos Móveis</h3>
              <ul className="space-y-2">
                {systemRequirements.mobile.map((mobile, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{mobile}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Requisitos Gerais</h3>
              <ul className="space-y-2">
                {systemRequirements.general.map((req, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-16">
          <div className="bg-neutral-700/50 rounded-xl p-8 border border-neutral-600">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-white">Guia de Resolução de Problemas</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Siga estes passos em ordem se estiver enfrentando problemas técnicos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {troubleshootingSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-neutral-600/50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-xl p-8 border border-red-500/20 text-center">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Problemas Críticos?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Para problemas urgentes que afetam sua conta ou transações, entre em contato imediatamente 
            com nossa equipe de emergência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Suporte de Emergência
            </button>
            <button className="px-8 py-4 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-colors">
              Reportar Problema Crítico
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Linha direta 24h: 0800-123-EMERGENCY (3637436)
          </p>
        </div>
      </div>
    </div>
  );
}