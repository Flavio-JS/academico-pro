import {
  faBan,
  faPen,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export type UserDataTable = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  type: string;
  status: string;
  avatarSeed: string;
};

const users: UserDataTable[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@academico.edu",
    cpf: "123.456.789-00",
    type: "Aluno(a)",
    status: "Ativo",
    avatarSeed: "654",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@academico.edu",
    cpf: "987.654.321-00",
    type: "Professor(a)",
    status: "Ativo",
    avatarSeed: "321",
  },
  {
    id: 3,
    name: "Carlos Pereira",
    email: "carlos.pereira@academico.edu",
    cpf: "456.123.789-00",
    type: "Administrador",
    status: "Ativo",
    avatarSeed: "123",
  },
  {
    id: 4,
    name: "Ana Santos",
    email: "ana.santos@academico.edu",
    cpf: "321.654.987-00",
    type: "Aluno(a)",
    status: "Inativo",
    avatarSeed: "789",
  },
  {
    id: 5,
    name: "Pedro Costa",
    email: "pedro.costa@academico.edu",
    cpf: "654.321.987-00",
    type: "Professor(a)",
    status: "Ativo",
    avatarSeed: "987",
  },
];

export default function Users() {
  return (
    <div className="flex-1 bg-neutral-50 overflow-auto">
      <div id="page-header" className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-neutral-900">Gestão de Usuários</h2>
        <Button className="gap-2">
          <FontAwesomeIcon icon={faPlus} width={20} height={20} />
          <span>Novo Usuário</span>
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <Input
                type="text"
                placeholder="Buscar por nome, email ou CPF"
                className="pl-10 w-full"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="default">Todos</Button>
              <Button variant="outline">Alunos</Button>
              <Button variant="outline">Professores</Button>
              <Button variant="outline">Administradores</Button>
              <Button variant="outline">Ativos</Button>
              <Button variant="outline">Inativos</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
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
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-neutral-50">
                <TableCell className="px-6 py-4">
                  <Image
                    src={`https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=${user.avatarSeed}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                    alt={`Avatar de ${user.name}`}
                    unoptimized
                  />
                </TableCell>
                <TableCell className="px-6 py-4">{user.name}</TableCell>
                <TableCell className="px-6 py-4">{user.email}</TableCell>
                <TableCell className="px-6 py-4">{user.cpf}</TableCell>
                <TableCell className="px-6 py-4">{user.type}</TableCell>
                <TableCell className="px-6 py-4">
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-xs",
                      user.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    )}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <FontAwesomeIcon icon={faEye} width={16} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FontAwesomeIcon icon={faPen} width={16} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FontAwesomeIcon icon={faBan} width={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <CardContent className="flex items-center justify-between px-6 py-4 border-t">
          <span className="text-sm text-neutral-600">
            Mostrando 1-{users.length} de 150 resultados
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Anterior
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Próxima
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
