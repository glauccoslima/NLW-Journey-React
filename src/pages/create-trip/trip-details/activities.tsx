import { CircleCheck } from "lucide-react";

// Componente Activities que lista as atividades planejadas para cada dia de uma viagem
export function Activities() {
  return (
    <div className="space-y-8">
      {/* Bloco para o dia sem atividades */}
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>{" "}
          {/* Data do evento */}
          <span className="text-xs text-zinc-500">Sábado</span>{" "}
          {/* Dia da semana */}
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.{" "}
          {/* Mensagem de aviso de nenhum evento */}
        </p>
      </div>

      {/* Bloco para o dia com atividades */}
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>{" "}
          {/* Data do evento */}
          <span className="text-xs text-zinc-500">Domingo</span>{" "}
          {/* Dia da semana */}
        </div>
        <div className="space-y-2.5">
          {/* Atividade específica */}
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />{" "}
            {/* Ícone indicando atividade concluída */}
            <span className="text-zinc-100">Academia em grupo</span>{" "}
            {/* Descrição da atividade */}
            <span className="text-zinc-400 text-sm ml-auto">08:00</span>{" "}
            {/* Horário da atividade */}
          </div>
        </div>
        {/* Repete o bloco de atividade para mais instâncias no mesmo dia */}
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
