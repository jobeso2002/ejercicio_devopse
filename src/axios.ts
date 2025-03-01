import axios from "axios";

const api = axios.create({
  baseURL: "https://9v2gmhn8-3002.use2.devtunnels.ms", // Reemplaza con la URL de tu backend en Docker si es diferente
  headers: { "Content-Type": "application/json" },
});

export default api;
