"use client"

import ScratchGameClient from "@/components/ScratchGameClient";

// Esta página agora serve apenas para renderizar o componente cliente
// com o ID correto da raspadinha ("centavos").
// Toda a lógica do jogo foi movida para o componente ScratchGameClient.
export default function CentavosMilionariosPage() {
  return (
    <ScratchGameClient gameId="centavos" />
  );
}