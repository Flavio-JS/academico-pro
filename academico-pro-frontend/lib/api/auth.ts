import { LoginFormData, LoginResponse } from "../schemas/auth";
import api from "./axios";

export const login = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
