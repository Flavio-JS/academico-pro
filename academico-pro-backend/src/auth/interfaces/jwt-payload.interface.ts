import { Role } from '@prisma/client';

export interface JwtPayload {
  email: string;
  sub: string;
  role: Role;
  name: string;
  iat?: number;
  exp?: number;
}
