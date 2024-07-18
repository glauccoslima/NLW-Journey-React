import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

// Componente principal para a página de criação de viagem, gerencia estado e fluxo de criação de uma viagem
export function CreateTripPage() {
  const navigate = useNavigate();

  // Estados para controlar os modais e coletar dados do formulário
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [emailsToInvite, setEmailsToInvite] = useState([
    "diego@rocketseat.com.br",
    "glauccolima@gmail.com",
  ]);
  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");

  // Funções de manipulação de estado para abrir e fechar modais de input
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

  // Adiciona um novo email à lista de convidados verificando duplicidades
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

  // Função para submeter os dados da viagem, fazendo validação antes do envio
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !destination ||
      !eventStartAndEndDates?.from ||
      !eventStartAndEndDates?.to ||
      emailsToInvite.length === 0 ||
      !ownerName ||
      !ownerEmail
    ) {
      console.error("All fields must be filled.");
      return;
    }

    try {
      const response = await api.post("/trips", {
        destination,
        starts_at: eventStartAndEndDates.from,
        ends_at: eventStartAndEndDates.to,
        emails: emailsToInvite,
        owner: ownerName,
        email: ownerEmail,
      });
      const { tripId } = response.data;
      navigate(`/trips/${tripId}`);
    } catch (error) {
      console.error("Failed to create trip:", error);
    }
  }

  // Renderização principal do componente
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
          Ao planejar sua viagem pela plann.er você automaticamente concorda com
          nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e
          <a className="text-zinc-300 underline" href="#">
            política de privacidade.
          </a>
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
