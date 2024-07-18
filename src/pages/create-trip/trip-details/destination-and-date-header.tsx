import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

// Componente que exibe o cabeçalho com o destino e as datas de uma viagem
export function DestinationAndDateHeader() {
  return (
    // Container principal do cabeçalho
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      {/* Exibição do destino da viagem */}
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" /> {/* Ícone de localização */}
        <span className="text-zinc-100">Florianópolis, Brasil</span>{" "}
        {/* Nome do destino */}
      </div>

      {/* Exibição das datas da viagem */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />{" "}
          {/* Ícone de calendário */}
          <span className="text-zinc-100">17 a 23 de Agosto</span>{" "}
          {/* Intervalo das datas */}
        </div>
        <div className="w-px h-6 bg-zinc-800"></div>{" "}
        {/* Separador visual entre elementos */}
        {/* Botão para alterar o local e a data da viagem */}
        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" /> {/* Ícone de configurações */}
        </Button>
      </div>
    </div>
  );
}
