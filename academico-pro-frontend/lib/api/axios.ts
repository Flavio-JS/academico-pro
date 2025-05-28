import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ACADEMICO_PRO_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token às requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Lógica para lidar com token expirado/inválido
      localStorage.removeItem("access_token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
