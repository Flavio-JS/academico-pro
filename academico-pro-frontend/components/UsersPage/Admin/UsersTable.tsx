import Image from "next/image";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { UserStatusBadge } from "./UserStatusBadge";
import { UserActions } from "./UserActions";
import { User } from "./types/User.types";
import { formatCPF } from "@/lib/utils/formatCPF";

export const UsersTable = ({
  users,
  onUserUpdated,
  onUserDeleted,
  onToggleStatus,
}: {
  users: User[];
  onUserUpdated: (user: User) => void;
  onUserDeleted: (userId: string) => void;
  onToggleStatus: (id: string) => void;
}) => {
  const getRoleName = (role: User["role"]) => {
    switch (role) {
      case "ADMIN":
        return "Administrador(a)";
      case "PROFESSOR":
        return "Professor(a)";
      case "STUDENT":
        return "Aluno(a)";
      default:
        return role;
    }
  };

  return (
    <Table>
      <TableHeader className="bg-neutral-50">
        <TableRow>
          <TableHead className="px-6 py-3 text-left">Foto</TableHead>
          <TableHead className="px-6 py-3 text-left">Nome</TableHead>
          <TableHead className="px-6 py-3 text-left">E-mail</TableHead>
          <TableHead className="px-6 py-3 text-left">CPF</TableHead>
          <TableHead className="px-6 py-3 text-left">Tipo</TableHead>
          <TableHead className="px-6 py-3 text-left">Status</TableHead>
          <TableHead className="px-6 py-3 text-left">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users &&
          users.map((user) => (
            <TableRow key={user.id} className="hover:bg-neutral-50">
              <TableCell className="px-6 py-4">
                <Image
                  src={
                    user.avatarUrl ||
                    `https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123`
                  }
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                  alt={`Avatar de ${user.name}`}
                  unoptimized
                />
              </TableCell>
              <TableCell className="px-6 py-4">{user.name}</TableCell>
              <TableCell className="px-6 py-4">{user.email}</TableCell>
              <TableCell className="px-6 py-4">{formatCPF(user.cpf)}</TableCell>
              <TableCell className="px-6 py-4">
                {getRoleName(user.role)}
              </TableCell>
              <TableCell className="px-6 py-4">
                <UserStatusBadge status={user.isActive ? "Ativo" : "Inativo"} />
              </TableCell>
              <TableCell className="px-6 py-4">
                <UserActions
                  user={user}
                  onUserUpdated={onUserUpdated}
                  onUserDeleted={onUserDeleted}
                  onToggleStatus={() => onToggleStatus(user.id)}
                />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
