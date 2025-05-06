import { faPlus, faTimes, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export type Discipline = {
  id: number;
  code: string;
  name: string;
  hours: string;
  professor: string;
  students: number;
  status: string;
  department: string;
};

const disciplines: Discipline[] = [
  {
    id: 1,
    code: "MAT-203",
    name: "Cálculo Diferencial",
    hours: "60h",
    professor: "Dr. João Silva",
    students: 45,
    status: "Ativa",
    department: "Matemática",
  },
  {
    id: 2,
    code: "COMP-101",
    name: "Introdução à Programação",
    hours: "60h",
    professor: "Prof. Ana Santos",
    students: 60,
    status: "Ativa",
    department: "Computação",
  },
  {
    id: 3,
    code: "ENG-301",
    name: "Mecânica dos Fluidos",
    hours: "90h",
    professor: "Dr. Carlos Oliveira",
    students: 30,
    status: "Ativa",
    department: "Engenharia",
  },
  {
    id: 4,
    code: "MAT-105",
    name: "Álgebra Linear",
    hours: "60h",
    professor: "Prof. Maria Fernandes",
    students: 50,
    status: "Inativa",
    department: "Matemática",
  },
  {
    id: 5,
    code: "COMP-205",
    name: "Estrutura de Dados",
    hours: "90h",
    professor: "Dr. Pedro Costa",
    students: 40,
    status: "Ativa",
    department: "Computação",
  },
];

export default function Disciplines() {
  return (
    <>
      <header className="w-full bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-neutral-900">Disciplinas Cadastradas</h1>
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} width={20} />
            Nova Disciplina
          </button>
        </div>
      </header>

      <main id="disciplines-admin" className="p-6 bg-neutral-50">
        <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                />
                <input
                  type="search"
                  placeholder="Buscar por nome, código ou professor"
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-neutral-300 rounded-lg">
                <option>Status</option>
                <option>Ativas</option>
                <option>Inativas</option>
              </select>
              <select className="px-4 py-2 border border-neutral-300 rounded-lg">
                <option>Departamento</option>
                <option>Matemática</option>
                <option>Computação</option>
                <option>Engenharia</option>
              </select>
              <select className="px-4 py-2 border border-neutral-300 rounded-lg">
                <option>2025.1</option>
                <option>2024.2</option>
                <option>2024.1</option>
              </select>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-neutral-100">
              <TableRow>
                <TableHead className="px-6 py-4 text-left">Código</TableHead>
                <TableHead className="px-6 py-4 text-left">Nome</TableHead>
                <TableHead className="px-6 py-4 text-left">
                  Carga Horária
                </TableHead>
                <TableHead className="px-6 py-4 text-left">Professor</TableHead>
                <TableHead className="px-6 py-4 text-left">Alunos</TableHead>
                <TableHead className="px-6 py-4 text-left">Status</TableHead>
                <TableHead className="px-6 py-4 text-left">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-neutral-200">
              {disciplines.map((discipline) => (
                <TableRow key={discipline.id} className="hover:bg-neutral-50">
                  <TableCell className="px-6 py-4">{discipline.code}</TableCell>
                  <TableCell className="px-6 py-4">{discipline.name}</TableCell>
                  <TableCell className="px-6 py-4">
                    {discipline.hours}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {discipline.professor}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {discipline.students}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        discipline.status === "Ativa"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {discipline.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex gap-3">
                      <button className="text-neutral-600 hover:text-neutral-900">
                        <FontAwesomeIcon icon={faPenToSquare} width={20} />
                      </button>
                      <button className="text-neutral-600 hover:text-neutral-900">
                        <FontAwesomeIcon icon={faEye} width={20} />
                      </button>
                      <button className="text-neutral-600 hover:text-neutral-900">
                        <FontAwesomeIcon icon={faToggleOn} width={20} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* modal de criar disciplina */}
        <section
          id="discipline-form"
          className="fixed inset-0 bg-neutral-900/50 flex items-center justify-center hidden"
        >
          <div className="bg-white rounded-lg p-6 w-[800px] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl">Nova Disciplina</h2>
              <button>
                <FontAwesomeIcon icon={faTimes} width={20} />
              </button>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg">Dados Básicos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Nome da Disciplina</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Código Único</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Carga Horária</label>
                    <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                      <option>30h</option>
                      <option>60h</option>
                      <option>90h</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Departamento</label>
                    <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                      <option>Matemática</option>
                      <option>Computação</option>
                      <option>Engenharia</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg">Vinculações</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Professor Responsável</label>
                    <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                      <option>Selecione um professor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Pré-requisitos</label>
                    <select
                      multiple
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    >
                      <option>MAT-101</option>
                      <option>MAT-102</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg">Detalhes</h3>
                <div>
                  <label className="block mb-2">Ementa</label>
                  <textarea className="w-full px-4 py-2 border border-neutral-300 rounded-lg h-32"></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <label>Status</label>
                  <button className="w-12 h-6 bg-neutral-300 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button className="px-4 py-2 border border-neutral-300 rounded-lg">
                  Cancelar
                </button>
                <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
