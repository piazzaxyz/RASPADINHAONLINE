'use client';

import { HelpCircle, Search, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

export default function PerguntasFrequentesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Conta e Registro",
      questions: [
        {
          question: "Como faço para criar uma conta?",
          answer: "Clique em 'Registrar' no canto superior direito, preencha seus dados pessoais, confirme seu email e sua conta estará pronta para uso. O processo leva apenas alguns minutos."
        },
        {
          question: "Posso ter mais de uma conta?",
          answer: "Não, é permitida apenas uma conta por pessoa. Contas múltiplas violam nossos termos de uso e podem resultar na suspensão de todas as contas relacionadas."
        },
        {
          question: "Como altero minha senha?",
          answer: "Acesse 'Minha Conta' > 'Configurações' > 'Alterar Senha'. Você precisará inserir sua senha atual e definir uma nova senha com pelo menos 8 caracteres."
        },
        {
          question: "Esqueci minha senha, como recupero?",
          answer: "Clique em 'Esqueci minha senha' na tela de login, digite seu email e siga as instruções enviadas para redefinir sua senha."
        }
      ]
    },
    {
      category: "Pagamentos e Saques",
      questions: [
        {
          question: "Quais métodos de pagamento vocês aceitam?",
          answer: "Aceitamos PIX, cartões de crédito/débito (Visa, Mastercard), boleto bancário e transferência bancária. Todos os métodos são seguros e criptografados."
        },
        {
          question: "Qual o valor mínimo para depósito?",
          answer: "O valor mínimo para depósito é R$ 10,00 e o máximo é R$ 5.000,00 por transação. Não há limite para o número de depósitos por dia."
        },
        {
          question: "Quanto tempo demora para processar um saque?",
          answer: "PIX: instantâneo a 2 horas. Transferência bancária: 1-3 dias úteis. Cartão: 3-5 dias úteis. Primeiro saque pode demorar mais devido à verificação."
        },
        {
          question: "Há taxas para saques?",
          answer: "O primeiro saque do mês é gratuito. Saques adicionais têm taxa de R$ 5,00 para PIX e R$ 10,00 para transferência bancária."
        }
      ]
    },
    {
      category: "Jogos e Apostas",
      questions: [
        {
          question: "Como funcionam as raspadinhas?",
          answer: "Escolha uma raspadinha, compre seu bilhete e raspe virtualmente para revelar os símbolos. Se os símbolos coincidirem com os padrões premiados, você ganha!"
        },
        {
          question: "Os jogos são justos?",
          answer: "Sim! Usamos geradores de números aleatórios certificados e auditados por empresas independentes. Todos os resultados são completamente aleatórios e justos."
        },
        {
          question: "Posso ver o histórico dos meus jogos?",
          answer: "Sim, acesse 'Minha Conta' > 'Histórico de Jogos' para ver todas as suas apostas, ganhos e detalhes das partidas dos últimos 90 dias."
        },
        {
          question: "Como sei se ganhei um prêmio?",
          answer: "Ganhos são creditados automaticamente em sua conta e você recebe uma notificação. Prêmios maiores podem requerer verificação adicional."
        }
      ]
    },
    {
      category: "Segurança",
      questions: [
        {
          question: "Meus dados estão seguros?",
          answer: "Sim! Usamos criptografia SSL de 256 bits, armazenamento seguro e seguimos rigorosos protocolos de segurança. Seus dados nunca são vendidos para terceiros."
        },
        {
          question: "Como vocês verificam a identidade?",
          answer: "Solicitamos documentos oficiais (RG, CPF, comprovante de endereço) para verificar identidade e prevenir fraudes. É um processo padrão e seguro."
        },
        {
          question: "O que faço se suspeitar de atividade suspeita?",
          answer: "Entre em contato imediatamente conosco pelo chat, email ou telefone. Temos equipes especializadas em segurança trabalhando 24/7."
        }
      ]
    }
  ];

  const filteredFAQ = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Chat Online",
      description: "Atendimento 24/7",
      action: "Disponível na página",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "0800-123-4567",
      action: "Seg-Dom: 24h",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "suporte@raspebrilhe.com",
      action: "Resposta em até 4h",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-600 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Perguntas Frequentes</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre respostas rápidas para as dúvidas mais comuns sobre nossa plataforma.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar pergunta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-neutral-700 border border-neutral-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        {/* FAQ Content */}
        <div className="space-y-8 mb-12">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-neutral-700/50 rounded-xl p-6 border border-neutral-600">
                <h2 className="text-xl font-bold text-purple-400 mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-neutral-600/50 rounded-lg border border-neutral-500"
                    >
                      <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-400 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-gray-400 mb-6">
                Tente usar outros termos de pesquisa ou entre em contato conosco.
              </p>
            </div>
          )}
        </div>

        {/* Contact Methods */}
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Não encontrou sua resposta?</h3>
            <p className="text-gray-300">
              Nossa equipe de suporte está sempre pronta para ajudar você!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-neutral-700/50 rounded-lg p-6 text-center">
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${method.color}`} />
                  <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                  <p className="text-purple-400 font-medium mb-1">{method.description}</p>
                  <p className="text-sm text-gray-400">{method.action}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Falar com Suporte Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
