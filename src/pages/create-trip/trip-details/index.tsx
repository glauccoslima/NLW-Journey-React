import { useState } from "react";
import { Plus } from "lucide-react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

// Componente principal que gerencia a página de detalhes de uma viagem
export function TripDetailsPage() {
  // Estado para controlar a visibilidade do modal de criação de atividades
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  // Função para abrir o modal de criação de atividades
  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  // Função para fechar o modal de criação de atividades
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  // Renderização do layout da página de detalhes da viagem
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      {/* Cabeçalho com informações do destino e datas */}
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        {/* Coluna principal para atividades */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividade</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              {/* Botão para adicionar nova atividade */}
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>
          {/* Componente para listar atividades */}
          <Activities />
        </div>

        {/* Coluna lateral para links e convidados */}
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>
      {/* Renderização condicional do modal de criação de atividades */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
