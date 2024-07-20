import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";
import axios from "axios";
import { formatISO, startOfDay, endOfDay, addDays } from "date-fns";

export function CreateTripPage() {
  const navigate = useNavigate(); // Hook para navegação de rotas

  // Estados para gerenciar a visibilidade de modais e dados de formulário
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");

  // Funções para manipular o estado dos inputs e modais
  function openGuestInput() {
    setIsGuestsInputOpen(true);
  }
  function closeGuestInput() {
    setIsGuestsInputOpen(false);
  }
  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  // Adiciona um novo email à lista de convidados
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    if (email && !emailsToInvite.includes(email)) {
      setEmailsToInvite([...emailsToInvite, email]);
      event.currentTarget.reset();
    }
  }

  // Remove um email da lista de convidados
  function removeEmailFromInvite(emailToRemove: string) {
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove)
    );
  }

  // Processa a criação de uma viagem
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!destination.trim() || !ownerName.trim() || !ownerEmail.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Assegura que a data de início da viagem seja no mínimo o dia seguinte
    const today = startOfDay(new Date());
    const minimumStartDate = addDays(today, 1);
    const fromDate = eventStartAndEndDates?.from
      ? startOfDay(eventStartAndEndDates.from)
      : null;
    const toDate = eventStartAndEndDates?.to
      ? endOfDay(eventStartAndEndDates.to)
      : null;
    if (!fromDate || !toDate || fromDate < minimumStartDate) {
      alert(
        "Por favor, selecione uma data de início do dia seguinte ou posterior."
      );
      return;
    }

    // Formata as datas para envio ao servidor
    const formattedStart = formatISO(fromDate, { representation: "complete" });
    const formattedEnd = formatISO(toDate, { representation: "complete" });

    try {
      const response = await api.post("/trips", {
        destination,
        starts_at: formattedStart,
        ends_at: formattedEnd,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail,
      });
      console.log("Viagem criada com sucesso:", response.data);
      navigate(`/trips/${response.data.tripId}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao criar viagem:", error.message);
        alert(
          `Erro ao criar viagem: ${
            error.response?.data.message || "Servidor banco de dados desligado"
          }`
        );
      } else if (error instanceof Error) {
        console.error("Erro ao criar viagem:", error.message);
        alert(`Erro ao criar viagem: ${error.message}`);
      } else {
        console.error("Erro ao criar viagem:", error);
        alert("Um erro não esperado ocorreu.");
      }
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <DestinationAndDateStep
          closeGuestInput={closeGuestInput}
          isGuestsInputOpen={isGuestsInputOpen}
          openGuestInput={openGuestInput}
          setDestination={setDestination}
          eventStartAndEndDates={eventStartAndEndDates}
          setEventStartAndEndDates={setEventStartAndEndDates}
        />
        {isGuestsInputOpen && (
          <InviteGuestsStep
            emailsToInvite={emailsToInvite}
            openConfirmTripModal={openConfirmTripModal}
            openGuestsModal={openGuestsModal}
          />
        )}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
}
