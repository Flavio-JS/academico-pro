import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Mock de dados para alunos
const students = [
  {
    id: 1,
    name: "João Silva",
    registration: "20250001",
    avatarSeed: "123",
    grade: 8.5,
  },
  {
    id: 2,
    name: "Maria Santos",
    registration: "20250002",
    avatarSeed: "654",
    grade: 7.0,
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    registration: "20250003",
    avatarSeed: "789",
    grade: 9.2,
  },
  {
    id: 4,
    name: "Ana Pereira",
    registration: "20250004",
    avatarSeed: "321",
    grade: 6.5,
  },
  {
    id: 5,
    name: "Pedro Costa",
    registration: "20250005",
    avatarSeed: "456",
    grade: 8.0,
  },
];

// Estatísticas da turma
const classStats = {
  average: 7.8,
  highest: 9.2,
  lowest: 6.5,
};

export default function Grade() {
  return (
    <div className="flex-1 bg-neutral-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-neutral-900 mb-6">Lançamento de Notas</h2>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Disciplina
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Programação I" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming1">Programação I</SelectItem>
                    <SelectItem value="calculus1">Cálculo I</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Turma
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="2025.1 - A" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025.1-A">2025.1 - A</SelectItem>
                    <SelectItem value="2025.1-B">2025.1 - B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Avaliação
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Prova 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="test1">Prova 1</SelectItem>
                    <SelectItem value="project">Trabalho</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-b border-neutral-200">
                  <TableHead className="text-left py-3 px-4">Aluno</TableHead>
                  <TableHead className="text-left py-3 px-4">
                    Matrícula
                  </TableHead>
                  <TableHead className="text-right py-3 px-4">
                    Nota (0-10)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.id}
                    className="border-b border-neutral-100 hover:bg-neutral-50"
                  >
                    <TableCell className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={`https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=${student.avatarSeed}`}
                          className="w-8 h-8 rounded-full"
                          width={32}
                          height={32}
                          alt={`Avatar de ${student.name}`}
                          unoptimized
                        />
                        <div className="text-neutral-900">{student.name}</div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-4 text-neutral-600">
                      {student.registration}
                    </TableCell>
                    <TableCell className="py-4 px-4">
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        defaultValue={student.grade}
                        className="w-20 ml-auto text-right"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline">Salvar Rascunho</Button>
              <Button>Publicar Notas</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg text-neutral-900">Desempenho da Turma</h3>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-neutral-100 rounded-lg flex items-center justify-center">
              <span className="text-neutral-600">Gráfico de Desempenho</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-neutral-600">Média da Turma</div>
                  <div className="text-2xl text-neutral-900">
                    {classStats.average}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-neutral-600">Maior Nota</div>
                  <div className="text-2xl text-neutral-900">
                    {classStats.highest}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-neutral-600">Menor Nota</div>
                  <div className="text-2xl text-neutral-900">
                    {classStats.lowest}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
