import { Role } from '@prisma/client';

export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: Role;
  avatarUrl?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
