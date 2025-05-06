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
      <main className="flex-1 bg-neutral-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-neutral-900">
              Gerenciamento de Matrículas
            </h2>
            <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 flex items-center gap-2">
              <FontAwesomeIcon icon={faPlus} width={16} />
              <span>Nova Matrícula</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Semestre
                </label>
                <select className="w-full border border-neutral-300 rounded-lg p-2">
                  <option>2025.1</option>
                  <option>2024.2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Curso
                </label>
                <select className="w-full border border-neutral-300 rounded-lg p-2">
                  <option>Todos os cursos</option>
                  <option>Informática</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Status
                </label>
                <select className="w-full border border-neutral-300 rounded-lg p-2">
                  <option>Todos</option>
                  <option>Ativo</option>
                  <option>Trancado</option>
                </select>
              </div>
            </div>

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
                        <button className="text-neutral-600 hover:text-neutral-900">
                          <FontAwesomeIcon icon={faLink} width={20} />
                        </button>
                        <button className="text-neutral-600 hover:text-neutral-900">
                          <FontAwesomeIcon icon={faBan} width={20} />
                        </button>
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
