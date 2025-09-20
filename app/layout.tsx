// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/MainLayout'; // 1. Importe o novo componente

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raspe & Brilhe - Raspadinhas Online',
  description: 'A melhor plataforma de raspadinhas online do Brasil. Ganhe prêmios incríveis!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* 2. Envolva o conteúdo (children) com o MainLayout */}
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}