"use client"

import ScratchGameClient from "@/components/ScratchGameClient";

// A página agora simplesmente renderiza o componente principal
// passando o ID "express" para carregar as informações corretas,
// mas usando a lógica de jogo centralizada e padronizada.
export default function ExpressWinnerPage() {
  return (
    <ScratchGameClient gameId="express" />
  );
}