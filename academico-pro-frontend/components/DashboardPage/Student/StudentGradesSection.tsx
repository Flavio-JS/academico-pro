import { Card, CardContent } from "@/components/ui/card";
import { recentGrades } from "./mocks/recentGrades.mocks";
import { GradeEvolutionChart } from "./GradeEvolutionChart";

export const StudentGradesSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-neutral-700">
        Notas Recentes
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            {recentGrades.map((grade, index) => (
              <div
                key={index}
                className="pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-neutral-800 font-medium">
                      {grade.course}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Nota: {grade.grade}
                      {grade.grade > grade.average ? (
                        <span className="ml-2 text-green-600">▲</span>
                      ) : (
                        <span className="ml-2 text-red-600">▼</span>
                      )}
                    </p>
                  </div>
                  <span className="text-sm bg-neutral-100 px-3 py-1 rounded-full text-neutral-700">
                    Média Turma: {grade.average}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <GradeEvolutionChart />
      </div>
    </section>
  );
};
