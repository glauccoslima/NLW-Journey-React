import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";

// Componente para exibir e gerenciar links importantes relacionados à viagem
export function ImportantLinks() {
  return (
    // Contêiner principal com espaçamento vertical entre os elementos
    <div className="space-y-6">
      {/* Título da seção */}
      <h2 className="font-semibold text-xl">Links importantes</h2>
      {/* Lista de links importantes com descrição e ação */}
      <div className="space-y-5">
        {/* Bloco de link individual */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            {/* Descrição do link */}
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              // Link clicável, truncado para economia de espaço com hover para realce
            >
              https://www.airbnb.com.br/rooms/104700011312315645641654878654189489484564515
            </a>
          </div>
          {/* Ícone indicativo de link externo */}
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        {/* Repetição do bloco de link para demonstração */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011312315645641654878654189489484564515
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      {/* Botão para adicionar novos links */}
      <Button variant="secondary" size="full">
        {/* Ícone de adição Cadastrar novo link */}
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
