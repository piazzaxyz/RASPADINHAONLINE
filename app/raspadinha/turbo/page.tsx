"use client"

import ScratchGameClient from "@/components/ScratchGameClient";

// Esta página agora apenas renderiza o componente principal
// com o ID correto da raspadinha ("turbo").
// Toda a lógica do jogo já está centralizada no ScratchGameClient.
export default function TurboCashPage() {
  return (
    <ScratchGameClient gameId="turbo" />
  );
}