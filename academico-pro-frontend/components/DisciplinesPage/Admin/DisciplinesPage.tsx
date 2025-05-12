import { DisciplineFilters } from "./DisciplineFilters";
import { DisciplineForm } from "./DisciplineForm";
import { DisciplineHeader } from "./DisciplineHeader";
import { DisciplinesTable } from "./DisciplinesTable";
import { disciplines } from "./mocks/disciplines.mocks";

export function DisciplinesPage() {
  return (
    <div className="flex flex-col h-full">
      <DisciplineHeader />

      <main className="flex-1 bg-neutral-50">
        <DisciplineFilters />
        <DisciplinesTable disciplines={disciplines} />
      </main>

      <DisciplineForm />
    </div>
  );
}
