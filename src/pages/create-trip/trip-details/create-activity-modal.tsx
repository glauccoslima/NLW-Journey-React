import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";

// Props para o componente CreateActivityModal
interface CreateActivityModalProps {
  closeCreateActivityModal: () => void; // Função para fechar o modal
}

// Componente modal para cadastro de atividades de uma viagem
export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      {/* Container principal do modal com largura e estilos específicos */}
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          {/* Cabeçalho do modal com botão de fechar */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" /> {/* Ícone de fechar */}
            </button>
          </div>
          {/* Informação adicional sobre a visibilidade das atividades cadastradas */}
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades cadastradas.
          </p>
        </div>

        {/* Formulário para cadastro de atividades */}
        <form className="space-y-3">
          {/* Campo para inserção do nome da atividade */}
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" /> {/* Ícone de tag */}
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          {/* Campo para seleção de data e horário da atividade */}
          <div className="flex items-center gap-2">
            <div className="py-2.5 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />{" "}
              {/* Ícone de calendário */}
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
              />
            </div>
          </div>
          {/* Botão para salvar a atividade */}
          <Button variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
