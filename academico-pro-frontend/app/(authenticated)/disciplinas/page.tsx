import { faPlus, faToggleOn } from "@fortawesome/free-solid-svg-icons";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

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
    <div className="flex flex-col h-full">
      {/* Cabeçalho */}
      <header className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-neutral-900">Disciplinas Cadastradas</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <FontAwesomeIcon icon={faPlus} width={16} />
                Nova Disciplina
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Nova Disciplina</DialogTitle>
                <DialogClose className="absolute right-4 top-4" />
              </DialogHeader>

              <form className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Dados Básicos</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Nome da Disciplina</Label>
                      <Input type="text" />
                    </div>
                    <div>
                      <Label>Código Único</Label>
                      <Input type="text" />
                    </div>
                    <div>
                      <Label>Carga Horária</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30h">30h</SelectItem>
                          <SelectItem value="60h">60h</SelectItem>
                          <SelectItem value="90h">90h</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Departamento</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Matemática</SelectItem>
                          <SelectItem value="comp">Computação</SelectItem>
                          <SelectItem value="eng">Engenharia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Vinculações</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Professor Responsável</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um professor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prof1">Dr. João Silva</SelectItem>
                          <SelectItem value="prof2">
                            Profa. Ana Santos
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Pré-requisitos</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione os pré-requisitos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mat101">MAT-101</SelectItem>
                          <SelectItem value="mat102">MAT-102</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Detalhes</h3>
                  <div>
                    <Label>Ementa</Label>
                    <textarea className="w-full min-h-32 p-2 border rounded-md" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label>Status</Label>
                    <Switch />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline" type="button">
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 bg-neutral-50">
        {/* Filtros */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                />
                <Input
                  type="search"
                  placeholder="Buscar por nome, código ou professor"
                  className="pl-10 w-full"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativas</SelectItem>
                    <SelectItem value="inactive">Inativas</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="math">Matemática</SelectItem>
                    <SelectItem value="comp">Computação</SelectItem>
                    <SelectItem value="eng">Engenharia</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025.1">2025.1</SelectItem>
                    <SelectItem value="2024.2">2024.2</SelectItem>
                    <SelectItem value="2024.1">2024.1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de disciplinas */}
        <Card>
          <Table>
            <TableHeader className="bg-neutral-50">
              <TableRow>
                <TableHead className="px-6 py-3 w-[120px]">Código</TableHead>
                <TableHead className="px-6 py-3">Nome</TableHead>
                <TableHead className="px-6 py-3">Carga Horária</TableHead>
                <TableHead className="px-6 py-3">Professor</TableHead>
                <TableHead className="px-6 py-3">Alunos</TableHead>
                <TableHead className="px-6 py-3">Status</TableHead>
                <TableHead className="px-6 py-3 text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disciplines.map((discipline) => (
                <TableRow key={discipline.id} className="hover:bg-neutral-50">
                  <TableCell className="px-6 py-4 font-medium">
                    {discipline.code}
                  </TableCell>
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
                  <TableCell className="flex justify-end gap-2 px-6 py-4">
                    <Button variant="ghost" size="icon">
                      <FontAwesomeIcon icon={faEye} width={16} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FontAwesomeIcon icon={faPenToSquare} width={16} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FontAwesomeIcon icon={faToggleOn} width={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
}
