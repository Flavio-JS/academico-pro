import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { StudentDiscipline } from "./types/StudentDiscipline.types";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { DisciplineDetailsDialog } from "./DisciplineDetailsDialog";
import { DisciplineMaterialsDialog } from "./DisciplineMaterialsDialog";

interface DisciplineCardProps {
  discipline: StudentDiscipline;
}

export function DisciplineCard({ discipline }: DisciplineCardProps) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg">{discipline.name}</h3>
          <span className="px-2 py-1 bg-neutral-100 rounded-full text-sm">
            {discipline.hours}
          </span>
        </div>
        <p className="text-neutral-600 mb-4">{discipline.professor}</p>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} className="text-neutral-400" />
            <span>{discipline.schedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-neutral-400"
            />
            <span>{discipline.location}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <DisciplineDetailsDialog discipline={discipline} />
          <DisciplineMaterialsDialog discipline={discipline} />
        </div>
      </div>
    </>
  );
}
