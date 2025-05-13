import { DisciplineCard } from "./DisciplineCard";
import { useStudentDisciplines } from "./hooks/useStudentDisciplines";

export function DisciplineGrid() {
  const { disciplines } = useStudentDisciplines();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {disciplines.map((discipline) => (
        <DisciplineCard key={discipline.id} discipline={discipline} />
      ))}
    </div>
  );
}
