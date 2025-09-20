// components/MainLayout.tsx

"use client"

import { useState } from "react";
import GameHeader from "./GameHeader";
import AuthModal from "./AuthModal";
import Footer from "./Footer"; // 1. Importe o Footer

export default function MainLayout({ children }: { children: React.ReactNode }) {
  
  const [balance, setBalance] = useState(1247.50); 
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <GameHeader 
        balance={balance} 
        isLoggedIn={isLoggedIn} 
        setAuthModal={setAuthModal}
      />
      
      {/* A tag <main> agora tem 'flex-grow' para empurrar o rodapé para baixo */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 2. Adicione o Footer aqui, no final */}
      <Footer />

      {authModal && (
        <AuthModal
          type={authModal}
          onClose={() => setAuthModal(null)}
          onSwitchMode={setAuthModal}
        />
      )}
    </div>
  );
}