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

export type UserDataTable = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  type: string;
  status: string;
  avatarUrl: string;
};

const users: UserDataTable[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@academico.edu",
    cpf: "123.456.789-00",
    type: "Aluno(a)",
    status: "Ativo",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@academico.edu",
    cpf: "987.654.321-00",
    type: "Professor(a)",
    status: "Ativo",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456",
  },
  {
    id: 3,
    name: "Carlos Pereira",
    email: "carlos.pereira@academico.edu",
    cpf: "456.123.789-00",
    type: "Administrador",
    status: "Ativo",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123",
  },
  {
    id: 4,
    name: "Ana Santos",
    email: "ana.santos@academico.edu",
    cpf: "321.654.987-00",
    type: "Aluno(a)",
    status: "Inativo",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456",
  },
  {
    id: 5,
    name: "Pedro Costa",
    email: "pedro.costa@academico.edu",
    cpf: "654.321.987-00",
    type: "Professor(a)",
    status: "Ativo",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123",
  },
];

export default function Users() {
  return (
    <div id="content" className="flex-1 p-6 bg-neutral-50 overflow-auto">
      <div id="page-header" className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-neutral-900">Gestão de Usuários</h2>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <FontAwesomeIcon icon={faPlus} width={20} height={20} />
          <span>Novo Usuário</span>
        </button>
      </div>

      <div id="filters" className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <FontAwesomeIcon
              icon={faSearch}
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Buscar por nome, email ou CPF"
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white">
            Todos
          </button>
          <button className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50">
            Alunos
          </button>
          <button className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50">
            Professores
          </button>
          <button className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50">
            Administradores
          </button>
          <button className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50">
            Ativos
          </button>
          <button className="px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50">
            Inativos
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-neutral-50 border-b border-neutral-200">
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                Foto
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                Nome
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                E-mail
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                CPF
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                Tipo
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                Status
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-sm text-neutral-600">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-neutral-50">
                <TableCell className="px-6 py-4">
                  <Image
                    src={user.avatarUrl}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                    alt="Avatar"
                    unoptimized
                  />
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">{user.name}</TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  {user.email}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm">{user.cpf}</TableCell>
                <TableCell className="px-6 py-4 text-sm">{user.type}</TableCell>
                <TableCell className="px-6 py-4">
                  <span
                    className={cn(
                      "px-2 py-1 text-xs rounded-full",
                      user.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    )}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-neutral-100 rounded">
                      <FontAwesomeIcon icon={faEye} width={20} />
                    </button>
                    <button className="p-1 hover:bg-neutral-100 rounded">
                      <FontAwesomeIcon icon={faPen} width={20} />
                    </button>
                    <button className="p-1 hover:bg-neutral-100 rounded">
                      <FontAwesomeIcon icon={faBan} width={20} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
          <span className="text-sm text-neutral-600">
            Mostrando 1-50 de 150 resultados
          </span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-neutral-200 rounded hover:bg-neutral-50">
              Anterior
            </button>
            <button className="px-3 py-1 bg-neutral-900 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 border border-neutral-200 rounded hover:bg-neutral-50">
              2
            </button>
            <button className="px-3 py-1 border border-neutral-200 rounded hover:bg-neutral-50">
              3
            </button>
            <button className="px-3 py-1 border border-neutral-200 rounded hover:bg-neutral-50">
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
