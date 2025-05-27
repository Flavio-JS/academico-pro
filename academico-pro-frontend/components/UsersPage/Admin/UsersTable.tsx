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
import { UserRoles } from "@/lib/schemas/auth";

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
      case UserRoles.ADMIN:
        return "Administrador(a)";
      case UserRoles.PROFESSOR:
        return "Professor(a)";
      case UserRoles.STUDENT:
        return "Aluno(a)";
      default:
        return role;
    }
  };

  return (
    <Table className="w-full">
      <TableHeader className="bg-neutral-50">
        <TableRow>
          <TableHead className="px-3 py-3 text-left hidden sm:table-cell">
            Foto
          </TableHead>
          <TableHead className="px-3 py-3 text-left min-w-[150px]">
            Nome
          </TableHead>
          <TableHead className="px-3 py-3 text-left hidden md:table-cell min-w-[200px]">
            E-mail
          </TableHead>
          <TableHead className="px-3 py-3 text-left hidden lg:table-cell">
            CPF
          </TableHead>
          <TableHead className="px-3 py-3 text-left min-w-[120px]">
            Tipo
          </TableHead>
          <TableHead className="px-3 py-3 text-left min-w-[100px]">
            Status
          </TableHead>
          <TableHead className="px-3 py-3 text-left min-w-[150px]">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users &&
          users.map((user) => (
            <TableRow key={user.id} className="hover:bg-neutral-50">
              <TableCell className="px-3 py-4 hidden sm:table-cell">
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
              <TableCell className="px-3 py-4 font-medium">
                {user.name}
              </TableCell>
              <TableCell className="px-3 py-4 hidden md:table-cell">
                {user.email}
              </TableCell>
              <TableCell className="px-3 py-4 hidden lg:table-cell">
                {formatCPF(user.cpf)}
              </TableCell>
              <TableCell className="px-3 py-4">
                <span className="whitespace-nowrap">
                  {getRoleName(user.role)}
                </span>
              </TableCell>
              <TableCell className="px-3 py-4">
                <UserStatusBadge status={user.isActive ? "Ativo" : "Inativo"} />
              </TableCell>
              <TableCell className="px-3 py-4">
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
