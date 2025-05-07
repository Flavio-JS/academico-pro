import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Dados do aluno
const student = {
  name: "João Silva",
  registration: "20250001",
  course: "Ciência da Computação",
  semester: "2025.1",
};

// Dados das disciplinas
const subjects = [
  {
    name: "Programação I",
    p1: 8.5,
    p2: 9.0,
    average: 8.8,
    frequency: "95%",
    status: "Aprovado",
  },
  {
    name: "Cálculo I",
    p1: 7.0,
    p2: 6.5,
    average: 6.8,
    frequency: "85%",
    status: "Aprovado",
  },
  {
    name: "Física I",
    p1: 4.5,
    p2: 5.0,
    average: 4.8,
    frequency: "75%",
    status: "Reprovado",
  },
];

// Estatísticas
const stats = {
  average: "6.8",
  frequency: "85%",
  approved: "2/3",
};

export default function Report() {
  return (
    <div className="flex-1 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          {/* Cabeçalho do aluno */}
          <div className="flex items-start gap-6 mb-6 pb-6 border-b border-neutral-200">
            <div className="bg-neutral-200 w-16 h-16 rounded flex items-center justify-center">
              <span className="text-white text-xl">IF</span>
            </div>
            <div>
              <h2 className="text-2xl text-neutral-900 mb-2">{student.name}</h2>
              <div className="text-neutral-600">
                <p>Matrícula: {student.registration}</p>
                <p>Curso: {student.course}</p>
              </div>
            </div>
          </div>

          {/* Boletim acadêmico */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-neutral-900">
                Boletim Acadêmico - {student.semester}
              </h3>
              <Button variant="outline" className="gap-2">
                <FontAwesomeIcon icon={faDownload} width={16} />
                <span>Exportar PDF</span>
              </Button>
            </div>

            {/* Tabela de notas */}
            <Table>
              <TableHeader>
                <TableRow className="border-b border-neutral-200">
                  <TableHead className="text-left py-3 px-4">
                    Disciplina
                  </TableHead>
                  <TableHead className="text-center py-3 px-4">P1</TableHead>
                  <TableHead className="text-center py-3 px-4">P2</TableHead>
                  <TableHead className="text-center py-3 px-4">Média</TableHead>
                  <TableHead className="text-center py-3 px-4">
                    Frequência
                  </TableHead>
                  <TableHead className="text-right py-3 px-4">
                    Situação
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjects.map((subject, index) => (
                  <TableRow key={index} className="border-b border-neutral-100">
                    <TableCell className="py-4 px-4 text-neutral-900">
                      {subject.name}
                    </TableCell>
                    <TableCell className="py-4 px-4 text-center text-neutral-600">
                      {subject.p1}
                    </TableCell>
                    <TableCell className="py-4 px-4 text-center text-neutral-600">
                      {subject.p2}
                    </TableCell>
                    <TableCell className="py-4 px-4 text-center text-neutral-900">
                      {subject.average}
                    </TableCell>
                    <TableCell className="py-4 px-4 text-center text-neutral-600">
                      {subject.frequency}
                    </TableCell>
                    <TableCell className="py-4 px-4 text-right">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          subject.status === "Aprovado"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {subject.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="text-sm text-neutral-600">Média Geral</div>
              <div className="text-2xl text-neutral-900">{stats.average}</div>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="text-sm text-neutral-600">Frequência Média</div>
              <div className="text-2xl text-neutral-900">{stats.frequency}</div>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="text-sm text-neutral-600">
                Disciplinas Aprovadas
              </div>
              <div className="text-2xl text-neutral-900">{stats.approved}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
