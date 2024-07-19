import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";

// Interface para tipar os dados da viagem recuperados da API
interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

// Componente que exibe informações do cabeçalho como destino e datas da viagem
export function DestinationAndDateHeader() {
  const { tripId } = useParams(); // Recupera o ID da viagem da URL
  const [trip, setTrip] = useState<Trip | undefined>(); // State para armazenar os dados da viagem

  // Carrega dados da viagem quando o componente é montado ou quando tripId é alterado
  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => {
      setTrip(response.data.trip); // Atualiza o estado com os dados da viagem
    });
  }, [tripId]);

  // Formata as datas de início e fim da viagem para exibição
  const displayDate = trip
    ? `${format(new Date(trip.starts_at), "d 'de' LLL")} até ${format(
        new Date(trip.ends_at),
        "d 'de' LLL"
      )}`
    : null;

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      {/* Exibe o nome do destino com um ícone de localização */}
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      {/* Exibe as datas formatadas da viagem com um ícone de calendário */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayDate}</span>
        </div>
        <div className="w-px h-6 bg-zinc-800"></div> {/* Visual separator*/}
        {/* Botão que permite a alteração do local ou data da viagem */}
        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
