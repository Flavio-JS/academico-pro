export type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  type: string;
  status: string;
  avatarSeed: string;
};

export type UserTableProps = {
  users: User[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onToggleStatus: (id: number) => void;
};
