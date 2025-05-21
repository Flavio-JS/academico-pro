import { Role } from '@prisma/client';

export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: Role;
  avatarUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
