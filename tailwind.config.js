/** @type {import('tailwindcss').Config} */
export default {
  // Define os arquivos nos quais o Tailwind CSS deve procurar por classes a serem aplicadas
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Configurações de temas, como fontes e sombras
  theme: {
    extend: {
      // Configura a família de fontes padrão para a aplicação
      fontFamily: {
        sans: "Inter", // Especifica 'Inter' como a fonte sans-serif padrão
      },
      // Define estilos de sombras customizados que podem ser aplicados a qualquer elemento
      boxShadow: {
        shape:
          "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      // Permite a adição de imagens de fundo customizadas usando a chave 'backgroundImage'
      backgroundImage: {
        pattern: "url(/bg.png)", // Assegure-se de que o caminho está correto
      },
    },
  },

  // Lista de plugins do Tailwind que são utilizados para estender a funcionalidade
  plugins: [],
};
