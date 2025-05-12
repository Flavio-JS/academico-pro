import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Discipline } from "./types/Discipline.types";
import { Card } from "@/components/ui/card";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

interface DisciplinesTableProps {
  disciplines: Discipline[];
}

export function DisciplinesTable({ disciplines }: DisciplinesTableProps) {
  return (
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
              <TableCell className="px-6 py-4">{discipline.hours}</TableCell>
              <TableCell className="px-6 py-4">
                {discipline.professor}
              </TableCell>
              <TableCell className="px-6 py-4">{discipline.students}</TableCell>
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
  );
}
