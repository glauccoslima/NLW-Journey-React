import { User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

// Definição das propriedades do componente ConfirmTripModal
interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void; // Função para fechar o modal
  setOwnerName: (name: string) => void; // Função para definir o nome do dono da viagem
  setOwnerEmail: (email: string) => void; // Função para definir o email do dono da viagem
  createTrip: (event: FormEvent<HTMLFormElement>) => void; // Função para processar a criação da viagem
}

// Componente modal para a confirmação dos dados finais antes da criação da viagem
export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    // Modal overlay e posicionamento central
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      {/* Caixa do modal com tamanho específico e estilização */}
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          {/* Cabeçalho do modal com botão de fechamento */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={closeConfirmTripModal}>
              {/* Ícone para fechar o modal */}
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          {/* Texto explicativo sobre o preenchimento do formulário */}
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>
        {/* Formulário para coleta de dados do usuário */}
        <form onSubmit={createTrip} className="space-y-3">
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            {/* Ícone de usuário */}
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </div>
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            {/* Ícone de usuário */}
            <User className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setOwnerEmail(event.target.value)}
            />
          </div>
          {/* Botão para enviar o formulário e criar a viagem */}
          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
