import { DisciplineGrid } from "./DisciplineGrid";
import { SemesterSelector } from "./SemesterSelector";

export function StudentDisciplinesPage() {
  return (
    <div className="flex-1">
      <main id="student-disciplines" className="bg-neutral-50">
        <section id="current-semester" className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-neutral-900">Disciplinas</h2>
            <SemesterSelector />
          </div>
          <DisciplineGrid />
        </section>
      </main>
    </div>
  );
}
