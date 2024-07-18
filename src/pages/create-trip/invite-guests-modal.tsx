import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

// Definição das propriedades do componente InviteGuestsModal
interface InviteGuestsModalProps {
  closeGuestsModal: () => void; // Função para fechar o modal
  emailsToInvite: string[]; // Array de emails dos convidados
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void; // Função para adicionar um novo email
  removeEmailFromInvite: (email: string) => void; // Função para remover um email existente
}

// Componente modal para convidar ou remover convidados para uma viagem
export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvite,
}: InviteGuestsModalProps) {
  return (
    // Overlay do modal e centralização
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      {/* Caixa do modal com estilização específica */}
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          {/* Cabeçalho do modal com botão de fechar */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={closeGuestsModal}>
              {/* Ícone para fechar o modal */}
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        {/* Listagem dos emails já adicionados com opção de remoção */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                type="button"
                onClick={() => removeEmailFromInvite(email)}
                className="text-zinc-400 hover:text-zinc-200"
              >
                {/* Ícone para remover o email */}
                <X className="size-4" />
              </button>
            </div>
          ))}
        </div>
        {/* Formulário para adicionar novos emails */}
        <div className="w-full h-px bg-zinc-800">
          <form
            onSubmit={addNewEmailToInvite}
            className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
          >
            <div className="px-2 flex items-center flex-1 gap-2">
              {/* Ícone indicativo de email */}
              <AtSign className="text-zinc-400 size-5" />
              <input
                type="email"
                name="email"
                placeholder="Adicionar novo e-mail"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                required
              />
            </div>
            {/* Botão para submeter o formulário e convidar o email adicionado */}
            <Button type="submit" variant="primary">
              Convidar
              <Plus className="size-5" />
              {/* Ícone de adição */}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
