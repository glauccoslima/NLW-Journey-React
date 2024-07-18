import { CircleDashed, Link2, UserCog } from "lucide-react";
import { Button } from "../../../components/button";

// Componente que lista os convidados de uma viagem
export function Guests() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho da seção de convidados */}
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {/* Lista individual de convidados com seus detalhes */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            {/* Nome do convidado */}
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            {/* E-mail do convidado */}
            <span className="block text-sm text-zinc-400 truncate">
              jessica.White44@yahoo.com
            </span>
          </div>
          {/* Ícone que pode indicar status ou ação */}
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            {/* Nome do convidado */}
            <span className="block font-medium text-zinc-100">
              Dr. Rita Pacocha
            </span>
            {/* E-mail do convidado */}
            <span className="block text-xs text-zinc-400 truncate ">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          {/* Ícone que pode indicar uma ligação ou ação */}
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      {/* Botão para gerenciamento dos convidados */}
      <Button variant="secondary" size="full">
        {/* Ícone de configurações para gerenciamento Gerenciar convidados */}
        <UserCog className="size-5" />
        Gerenciar convidados{" "}
      </Button>
    </div>
  );
}
