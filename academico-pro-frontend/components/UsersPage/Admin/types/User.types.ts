import { UserRoles } from "@/lib/schemas/auth";

export type User = {
  id: string; // Alterado de number para string (UUID)
  name: string;
  email: string;
  cpf: string;
  role: UserRoles;
  avatarUrl?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserTableProps = {
  users: User[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onToggleStatus: (id: string) => void;
  isLoading: boolean;
};
