"use client";

import { faBan, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Enrollment = {
  id: number;
  student: {
    name: string;
    id: string;
    avatarSeed: string;
  };
  courses: {
    code: string;
    name: string;
  }[];
  status: string;
  semester: string;
};

const enrollments: Enrollment[] = [
  {
    id: 1,
    student: {
      name: "João Silva",
      id: "20250001",
      avatarSeed: "456",
    },
    courses: [
      { code: "INF001", name: "Programação I" },
      { code: "MAT101", name: "Cálculo I" },
      { code: "FIS101", name: "Física I" },
      { code: "FIS102", name: "Física II" },
    ],
    status: "Ativa",
    semester: "2025.1",
  },
  {
    id: 2,
    student: {
      name: "Maria Oliveira",
      id: "20250002",
      avatarSeed: "789",
    },
    courses: [
      { code: "INF002", name: "Programação II" },
      { code: "MAT102", name: "Cálculo II" },
    ],
    status: "Ativa",
    semester: "2025.1",
  },
  {
    id: 3,
    student: {
      name: "Carlos Pereira",
      id: "20240015",
      avatarSeed: "123",
    },
    courses: [{ code: "ENG201", name: "Mecânica dos Fluidos" }],
    status: "Trancada",
    semester: "2024.2",
  },
  {
    id: 4,
    student: {
      name: "Ana Santos",
      id: "20250010",
      avatarSeed: "321",
    },
    courses: [
      { code: "INF001", name: "Programação I" },
      { code: "FIS101", name: "Física I" },
    ],
    status: "Ativa",
    semester: "2025.1",
  },
  {
    id: 5,
    student: {
      name: "Pedro Costa",
      id: "20240022",
      avatarSeed: "654",
    },
    courses: [
      { code: "MAT101", name: "Cálculo I" },
      { code: "FIS101", name: "Física I" },
    ],
    status: "Ativa",
    semester: "2024.2",
  },
];

export default function Enrollment() {
  return (
    <div className="flex h-[calc(100vh-65px)]">
      <main className="flex-1 bg-neutral-50 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-neutral-900">
              Gerenciamento de Matrículas
            </h2>
            <Button className="gap-2">
              <FontAwesomeIcon icon={faPlus} width={16} />
              <span>Nova Matrícula</span>
            </Button>
          </div>

          {/* Filtros e Tabela */}
          <div className="bg-white rounded-lg shadow p-6">
            {/* Filtros */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Semestre
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="2025.1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025.1">2025.1</SelectItem>
                    <SelectItem value="2024.2">2024.2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Curso
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os cursos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os cursos</SelectItem>
                    <SelectItem value="computing">Informática</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Status
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="locked">Trancado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabela */}
            <Table>
              <TableHeader>
                <TableRow className="border-b border-neutral-200">
                  <TableHead className="py-3 px-4 text-left">Aluno</TableHead>
                  <TableHead className="py-3 px-4 text-left">
                    Disciplinas Matriculadas
                  </TableHead>
                  <TableHead className="py-3 px-4 text-left">Status</TableHead>
                  <TableHead className="py-3 px-4 text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enrollments.map((enrollment) => (
                  <TableRow
                    key={enrollment.id}
                    className="border-b border-neutral-100 hover:bg-neutral-50"
                  >
                    <TableCell className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={`https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=${enrollment.student.avatarSeed}`}
                          className="w-8 h-8 rounded-full"
                          width={32}
                          height={32}
                          alt={`Avatar de ${enrollment.student.name}`}
                          unoptimized
                        />
                        <div>
                          <div className="text-neutral-900">
                            {enrollment.student.name}
                          </div>
                          <div className="text-sm text-neutral-500">
                            {enrollment.student.id}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-4">
                      <div className="space-y-1">
                        {enrollment.courses.map((course, index) => (
                          <div key={index}>
                            {course.code} - {course.name}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          enrollment.status === "Ativa"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {enrollment.status}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Button variant="ghost" size="icon">
                          <FontAwesomeIcon icon={faLink} width={16} />
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
          </div>
        </div>
      </main>
    </div>
  );
}
