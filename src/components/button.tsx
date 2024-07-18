import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

// Define variantes de estilos para o botão usando a biblioteca tailwind-variants
const buttonVariants = tv({
  base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2", // Estilo base comum a todos os botões
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-900 hover:bg-lime-400", // Estilo para o botão primário
      secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700", // Estilo para o botão secundário
    },
    size: {
      default: "py-2", // Tamanho padrão do botão
      full: "w-full h-11", // Botão que ocupa a largura total do contêiner
    },
  },
  defaultVariants: {
    variant: "primary", // Variante padrão é 'primary'
    size: "default", // Tamanho padrão é 'default'
  },
});

// Props do componente Button, estendendo as propriedades padrão de um botão HTML e variantes do tailwind
interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode; // Conteúdo filho do botão, pode ser texto ou elementos HTML/React
}

// Componente Button que aplica dinamicamente estilos com base nas props
export function Button({ children, variant, size, ...props }: ButtonProps) {
  // Renderiza o conteúdo filho dentro do botão
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
