import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { formatISO, isAfter } from "date-fns"; // Utilizado para manipular datas
import axios from "axios";

// Props do componente para controlar a visibilidade do modal
interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

// Componente modal para criação de uma nova atividade dentro de uma viagem
export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams<string>();

  // Função para criar uma nova atividade via POST request
  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString() ?? "";
    let occurs_at = data.get("occurs_at")?.toString();

    // Validação da data da atividade para garantir que seja futura
    if (!occurs_at || !isAfter(new Date(occurs_at), new Date())) {
      alert("Por favor, forneça uma data futura válida para a atividade.");
      return;
    }

    // Ajusta a data para UTC para evitar problemas de fuso horário
    const localDate = new Date(occurs_at);
    const utcDate = new Date(localDate.toISOString()); // Preserva o horário local e converte para UTC
    occurs_at = formatISO(utcDate, { representation: "complete" });

    try {
      const response = await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at,
      });
      console.log("Activity created:", response.data);
      closeCreateActivityModal(); // Fecha o modal após criação com sucesso
      window.location.reload(); // Recarrega a página para atualizar a lista de atividades
    } catch (error) {
      console.error("Erro ao criar atividade:", error);
      alert(
        "Não foi possível criar a atividade: " +
          (axios.isAxiosError(error)
            ? error.response?.data.message
            : "Erro desconhecido")
      );
    }
  }

  // Estrutura do componente modal
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4">
      <div className="w-full max-w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 mx-auto">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />{" "}
              {/* Botão de fechar o modal */}
            </button>
          </div>
          <form onSubmit={createActivity} className="space-y-3">
            <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="text-zinc-400 size-5" />
              <input
                name="title"
                placeholder="Qual a atividade?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="py-2.5 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className="text-zinc-400 size-5" />
                <input
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Data e horário da atividade"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
            </div>
            <Button variant="primary" size="full">
              Salvar atividade
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
