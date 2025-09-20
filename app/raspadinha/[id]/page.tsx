import { Metadata } from 'next';
import ScratchGameClient from '@/components/ScratchGameClient';

// Esta função é necessária para build estático com output: export
export function generateStaticParams() {
  return [
    { id: 'relampago' },
    { id: 'suprema' },
    { id: 'centavos' },
    { id: 'mega-premio' },
    { id: 'turbo' },
    { id: 'express' }
  ];
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const titles: { [key: string]: string } = {
    'relampago': 'Raspa Relâmpago - Prêmios de até R$ 2.000',
    'suprema': 'Raspadinha Suprema - Prêmios de até R$ 1.000', 
    'centavos': 'Centavos Milionários - Prêmios de até R$ 100',
    'mega-premio': 'Mega Prêmio - Prêmios de até R$ 50.000',
    'turbo': 'Turbo Cash - Prêmios de até R$ 5.000',
    'express': 'Express Winner - Prêmios de até R$ 500'
  };

  return {
    title: titles[params.id] || 'Raspadinha Online - Raspe & Brilhe',
    description: 'Jogue raspadinhas online e ganhe prêmios incríveis!'
  };
}

export default function RaspadinhaPage({ params }: { params: { id: string } }) {
  return <ScratchGameClient gameId={params.id} />;
}