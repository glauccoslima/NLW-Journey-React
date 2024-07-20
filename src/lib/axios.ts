import axios from "axios";

// Cria uma instância do Axios configurada para uso em toda a aplicação
export const api = axios.create({
  baseURL: "https://turbo-palm-tree-9rgqp5vgrwjc9p9x-3333.app.github.dev/", // Define a URL base para todas as chamadas HTTP feitas através desta instância
});
