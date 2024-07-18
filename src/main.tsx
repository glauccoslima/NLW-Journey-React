import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";

// Criação da raiz do aplicativo React e montagem do componente principal 'App'
ReactDOM.createRoot(
  document.getElementById("root")! // Encontra o elemento DOM com id 'root' para ancorar o aplicativo React
).render(
  <React.StrictMode>
    {/* Utiliza React.StrictMode para destacar potenciais problemas no aplicativo */}
    <App /> // Injeção do componente 'App' como raiz do aplicativo React
  </React.StrictMode>
);
