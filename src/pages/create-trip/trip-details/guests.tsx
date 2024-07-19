import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";

// Estrutura de dados para os participantes da viagem
interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

// Componente para listar os convidados de uma viagem
export function Guests() {
  const { tripId } = useParams(); // Extrai o ID da viagem da URL
  const [participants, setParticipants] = useState<Participant[]>([]); // Estado para armazenar a lista de participantes

  // Carrega os participantes da viagem ao montar o componente
  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => {
        setParticipants(response.data.participants); // Atualiza o estado com os participantes
      })
      .catch((error) => console.error("Erro ao buscar participantes", error));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              {/* Exibe o nome do convidado ou um placeholder se não definido */}
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
            {/* Ícone de status de confirmação do convidado */}
            {participant.is_confirmed ? (
              <CheckCircle2 className="size-5 shrink-0 text-green-400" />
            ) : (
              <CircleDashed className="text-zinc-400 size-5 shrink-0" />
            )}
          </div>
        ))}
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
