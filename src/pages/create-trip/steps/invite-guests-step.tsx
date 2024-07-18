import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

// Definição das propriedades do componente InviteGuestsStep
interface InviteGuestsStepProps {
  openGuestsModal: () => void; // Função para abrir o modal de convidados
  openConfirmTripModal: () => void; // Função para abrir o modal de confirmação de viagem
  emailsToInvite: string[]; // Lista de emails dos convidados
}

// Componente para exibição e gestão dos convidados para a viagem
export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      {/* Botão para abrir o modal de convidados e exibir a quantidade de pessoas convidadas */}
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          // Exibe a quantidade de convidados se houver algum
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          // Solicita a adição de convidados se a lista estiver vazia
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>
      <div className="w-px h-6 bg-zinc-800"></div>

      {/* Botão para confirmar a viagem e proceder ao próximo passo */}
      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
