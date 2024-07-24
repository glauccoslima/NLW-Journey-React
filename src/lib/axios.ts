import axios from "axios";

// Cria uma instância do Axios configurada para uso em toda a aplicação
export const api = axios.create({
  baseURL: "https://nlw-journey-nodejs-sable.vercel.app/", // Define a URL base para todas as chamadas HTTP feitas através desta instância
});
