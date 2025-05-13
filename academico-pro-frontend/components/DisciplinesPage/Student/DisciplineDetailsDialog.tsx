// DisciplineDetailsDialog.tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { StudentDiscipline } from "./types/StudentDiscipline.types";

interface DisciplineDetailsDialogProps {
  discipline: StudentDiscipline;
}

export function DisciplineDetailsDialog({
  discipline,
}: DisciplineDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          Detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{discipline.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-sm text-neutral-500">
                Professor
              </h3>
              <p>{discipline.professor}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-neutral-500">
                Carga Horária
              </h3>
              <p>{discipline.hours}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-neutral-500">Horário</h3>
              <p>{discipline.schedule}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-neutral-500">Local</h3>
              <p>{discipline.location}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Ementa</h3>
            <p className="text-neutral-600 mt-2 whitespace-pre-line">
              {discipline.syllabus}
            </p>
          </div>

          <div className="flex justify-end">
            <DialogClose>
              <Button>Fechar</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
