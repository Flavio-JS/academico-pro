import { Role } from '@prisma/client';

export type UserWithoutPassword = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: Role;
  avatarUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
