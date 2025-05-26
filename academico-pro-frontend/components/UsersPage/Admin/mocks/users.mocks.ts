import { User } from "../types/User.types";

export const mockUsers: User[] = [
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
