// DisciplineMaterialsDialog.tsx
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
import { faBookOpen, faDownload, faLink, faVideo } from "@fortawesome/free-solid-svg-icons";
import { StudentDiscipline } from "./types/StudentDiscipline.types";
import { faFile, faFilePdf } from "@fortawesome/free-regular-svg-icons";

interface DisciplineMaterialsDialogProps {
  discipline: StudentDiscipline;
}

export function DisciplineMaterialsDialog({
  discipline,
}: DisciplineMaterialsDialogProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return faFilePdf;
      case "video":
        return faVideo;
      case "link":
        return faLink;
      default:
        return faFile;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          Materiais
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Materiais - {discipline.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-3">
            {discipline.materials.map((material) => (
              <div
                key={material.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={getIcon(material.type)}
                    className="text-neutral-400 text-xl"
                  />
                  <div>
                    <h4 className="font-medium">{material.name}</h4>
                    <p className="text-sm text-neutral-500">
                      Adicionado em{" "}
                      {new Date(material.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Baixar
                </Button>
              </div>
            ))}
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
