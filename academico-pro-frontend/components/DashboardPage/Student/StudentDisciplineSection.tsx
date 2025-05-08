import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useStudentDisciplineSection } from "./hooks/useStudentDisciplineSection";

export const StudentDisciplineSection = () => {
  const { disciplines, getCourseStatusClass, getMaterialIcon } =
    useStudentDisciplineSection();

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-neutral-700">
        Minhas Disciplinas Matriculadas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {disciplines.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="text-lg">{course.name}</CardTitle>
              <CardDescription className="space-y-1">
                <p>Código: {course.code}</p>
                <p>{course.professor}</p>
                <p>{course.schedule}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <span className={getCourseStatusClass(course.status)}>
                {course.status}
              </span>

              {course.materials.length > 0 && (
                <div className="mt-2">
                  <h4 className="text-sm font-medium mb-1">Materiais:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.materials.map((material) => (
                      <Link
                        key={material.id}
                        href={material.url}
                        target="_blank"
                        className="text-xs px-2 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-md flex items-center gap-1"
                      >
                        {getMaterialIcon(material.type)}
                        {material.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
