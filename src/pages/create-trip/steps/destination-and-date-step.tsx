import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

// Define as propriedades esperadas para o componente DestinationAndDateStep
interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  closeGuestInput: () => void;
  openGuestInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

// Componente para seleção de destino e datas de uma viagem
export function DestinationAndDateStep({
  closeGuestInput,
  openGuestInput,
  isGuestsInputOpen,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  // Estado local para controle da visibilidade do seletor de datas
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // Função para abrir o DatePicker
  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  // Função para fechar o DatePicker
  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  // Formata a exibição das datas selecionadas, se disponíveis
  const displayDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? `${format(eventStartAndEndDates.from, "d 'de' LLL")} até ${format(
          eventStartAndEndDates.to,
          "d 'de' LLL"
        )}`
      : null;

  // Renderiza o componente de entrada para destino e o seletor de datas
  return (
    <div className="h-auto bg-zinc-900 px-4 py-4 sm:py-0 rounded-xl flex flex-col sm:flex-row items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1 w-full sm:w-auto">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen} // Desabilita a entrada se o modal de convidados estiver aberto
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left w-full sm:w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4">
          <div className="w-full max-w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-full h-px bg-zinc-800 my-2 sm:my-0 sm:w-px sm:h-6"></div>

      {isGuestsInputOpen ? (
        <Button
          onClick={closeGuestInput}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button
          onClick={openGuestInput}
          variant="primary"
          className="w-full sm:w-auto"
        >
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
