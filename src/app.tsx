import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/create-trip/trip-details";

// Criação do roteador com definição de rotas para a aplicação
const router = createBrowserRouter([
  {
    path: "/", // Rota para a página inicial de criação de viagem
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId", // Rota para a página de detalhes da viagem, com parâmetro dinâmico tripId
    element: <TripDetailsPage />,
  },
]);

// Componente principal que fornece o roteador configurado para a aplicação
export function App() {
  return <RouterProvider router={router} />; // Utiliza RouterProvider para passar o roteador para a árvore de componentes
}
