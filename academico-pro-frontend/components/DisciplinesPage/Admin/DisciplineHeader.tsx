import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export function DisciplineHeader() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl text-neutral-900">Disciplinas Cadastradas</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <FontAwesomeIcon icon={faPlus} width={16} />
              Nova Disciplina
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
    </header>
  );
}
