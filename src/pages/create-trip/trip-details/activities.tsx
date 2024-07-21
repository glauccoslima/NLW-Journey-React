import { CircleCheck } from "lucide-react";
import { api } from "../../../lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Estrutura de dados para as atividades de cada dia
interface Activity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

// Componente para listar atividades de uma viagem específica
export function Activities() {
  const { tripId } = useParams(); // Obtenha o ID da viagem da URL
  const [activities, setActivities] = useState<Activity[]>([]); // State para armazenar atividades

  // Carrega as atividades quando o componente é montado ou quando tripId muda
  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then((response) => {
        // Atualiza o state com as atividades recebidas da API
        const sortedActivities = response.data.activities.sort(
          (a: Activity, b: Activity) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        setActivities(sortedActivities);
      })
      .catch((error) => console.error("Erro ao carregar atividades", error)); // Captura e loga erros
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((category) => (
        <div key={category.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            {/* Exibe a data e o dia da semana */}
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(new Date(category.date), "d", { locale: ptBR })}
            </span>
            <span className="text-xs text-zinc-500">
              {format(new Date(category.date), "EEEE", { locale: ptBR })}
            </span>
          </div>
          {/* Condicional para verificar se existem atividades planejadas */}
          {category.activities.length > 0 ? (
            <div>
              {/* Mapeia e exibe cada atividade */}
              {category.activities.map((activity) => (
                <div key={activity.id} className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    {/* Ícone e informações da atividade */}
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="text-zinc-400 text-sm ml-auto">
                      {format(new Date(activity.occurs_at), "HH:mm")}h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Exibe mensagem quando não há atividades planejadas para a data
            <p className="text-zinc-500 text-sm">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
