import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
export enum UserRoles {
  ADMIN = "ADMIN",
  PROFESSOR = "PROFESSOR",
  STUDENT = "STUDENT",
}

export interface LoginResponse {
  access_token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRoles;
  };
}
