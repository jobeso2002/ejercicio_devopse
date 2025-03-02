import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-grupo-a-app-latest.onrender.com", // Reemplaza con la URL de tu backend en Docker si es diferente
  headers: { "Content-Type": "application/json" },
});

export default api;
