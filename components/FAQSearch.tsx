'use client';

import { useState } from 'react';
import { Search, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQQuestion[];
}

interface FAQSearchProps {
  faqCategories: FAQCategory[];
}

export default function FAQSearch({ faqCategories }: FAQSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQ = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
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
    </>
  );
}