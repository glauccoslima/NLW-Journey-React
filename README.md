# plann.er! 🌟

Este projeto é um sistema interativo chamado plann.er, onde os usuários podem planejar eventos, selecionando destinos, datas e convidados.

🌐 [**Explore o plann.er Online! Visite o site!**](https://nlw-journey-react-alpha.vercel.app/) 👈

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Componentes Principais](#componentes-principais)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Sobre o Projeto

O objetivo deste projeto é criar uma aplicação web onde os usuários podem planejar eventos, selecionando destinos, datas e convidados de forma intuitiva e dinâmica. A aplicação interage com uma API para buscar informações e atualizar o planejamento em tempo real.

## Funcionalidades

- **Seleção de Destino**: Os usuários podem digitar e selecionar um destino para o evento.
- **Seleção de Datas**: É possível escolher as datas de início e fim do evento através de um seletor de datas.
- **Adição de Convidados**: Os usuários podem adicionar convidados ao evento, gerenciando a lista de participantes.
- **Integração com API**: A aplicação faz chamadas a uma API para buscar informações adicionais e atualizar o planejamento do evento.

## Tecnologias Utilizadas

| ![HTML5](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/html5-original-wordmark%20(1).png) | ![CSS3](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/css3-original-wordmark.png) | ![JavaScript](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/javascript.png) | ![API](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/api-3.png) | ![React](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/react.png) | ![TypeScript](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/typescript.png) | ![Vite](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/vite.png) | ![Tailwind CSS](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/tailwindcss.png) | ![Axios](https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/axios.png) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|

## Como Executar o Projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/glauccoslima/NLW-Journey-React.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd NLW-Journey-React
    ```

## Componentes Principais

### InviteGuestsModal

- Responsável por gerenciar a adição de convidados.
- Permite ao usuário adicionar e remover e-mails de convidados.

### ConfirmTripModal

- Exibe os detalhes da viagem para confirmação.
- Permite ao usuário confirmar ou editar os detalhes da viagem.

### CreateTripPage

- Página principal para a criação de uma nova viagem.
- Gerencia a seleção de destino, datas e convidados.

### Dependências

As dependências principais do projeto são:

- **Axios**: Para realizar requisições HTTP.
- **Date-FNS**: Para manipulação de datas.
- **LocalForage**: Para armazenamento local.
- **Lucide-React**: Para ícones.
- **Match-Sorter**: Para classificação e filtragem de dados.
- **React**: Biblioteca principal para construção da interface.
- **React-Day-Picker**: Para seleção de datas.
- **React-DOM**: Para renderização de componentes React no DOM.
- **React-Router-DOM**: Para navegação entre páginas.
- **Sort-By**: Para ordenação de listas.
- **Tailwind-CSS**: Para estilos e design.
- **Tailwind-Variants**: Para componentes estilizados com Tailwind.

## Estrutura do Projeto

- `src/components`: Contém os componentes reutilizáveis da aplicação.
- `src/pages`: Contém as páginas principais da aplicação.

```plaintext
|-- .eslintrc.cjs
|-- .gitignore
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- .vscode
|   |-- settings.json
|-- public
|   |-- bg.png
|   |-- favicon.svg
|   |-- logo.svg
|-- src
    |-- app.tsx
    |-- index.css
    |-- main.tsx
    |-- vite-env.d.ts
    |-- components
    |   |-- button.tsx
    |-- lib
    |   |-- axios.ts
    |-- pages
        |-- create-trip
            |-- confirm-trip-modal.tsx
            |-- index.tsx
            |-- invite-guests-modal.tsx
            |-- steps
            |   |-- destination-and-date-step.tsx
            |   |-- invite-guests-step.tsx
            |-- trip-details
                |-- activities.tsx
                |-- create-activity-modal.tsx
                |-- destination-and-date-header.tsx
                |-- guests.tsx
                |-- important-links.tsx
                |-- index.tsx

