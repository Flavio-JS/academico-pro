"use client";

import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { GradeEvolutionChart } from "@/components/DashboardPage/GradeEvolutionChart";
import { AcademicCalendar } from "@/components/DashboardPage/AcademicCalendar";

const enrolledCourses = [
  {
    id: 1,
    name: "Cálculo I",
    code: "MAT101",
    professor: "Prof. João Silva",
    schedule: "Seg/Qua 08:00-10:00",
    status: "Cursando",
  },
  {
    id: 2,
    name: "Física I",
    code: "FIS101",
    professor: "Profa. Maria Santos",
    schedule: "Ter/Qui 10:00-12:00",
    status: "Concluído",
  },
  {
    id: 3,
    name: "Álgebra Linear",
    code: "MAT201",
    professor: "Prof. Carlos Mendes",
    schedule: "Seg/Sex 14:00-16:00",
    status: "Cursando",
  },
  {
    id: 4,
    name: "Programação I",
    code: "INF101",
    professor: "Prof. Rafael Costa",
    schedule: "Qua/Sex 10:00-12:00",
    status: "Cursando",
  },
  {
    id: 5,
    name: "Engenharia, Cidadania e Cultura",
    code: "ENG100",
    professor: "Profa. Fernanda Oliveira",
    schedule: "Sex 08:00-10:00",
    status: "Cursando",
  },
  {
    id: 6,
    name: "Arquitectura de Software",
    code: "INF305",
    professor: "Prof. Eduardo Braga",
    schedule: "Ter 14:00-17:00",
    status: "Cursando",
  },
];

const recentGrades = [
  {
    course: "Álgebra Linear",
    grade: 6.5,
    average: 6.8,
  },
  {
    course: "Programação I",
    grade: 7.0,
    average: 7.3,
  },
  {
    course: "Cálculo I",
    grade: 6.8,
    average: 6.9,
  },
  {
    course: "Física I",
    grade: 7.4,
    average: 7.2,
  },
  {
    course: "Arquitectura de Software",
    grade: 8.5,
    average: 8.4,
  },
];

const notifications = [
  {
    id: 1,
    type: "activity",
    message: "Lista de exercícios 2 disponível em Álgebra Linear",
    date: "05/05/2025 10:15",
    icon: faBell,
  },
  {
    id: 2,
    type: "grade",
    message: "Nota de Química Geral foi publicada",
    date: "04/05/2025 19:45",
    icon: faStar,
  },
  {
    id: 3,
    type: "activity",
    message: "Nova aula gravada em Programação I",
    date: "03/05/2025 09:30",
    icon: faBell,
  },
  {
    id: 4,
    type: "grade",
    message: "Nota final lançada em Álgebra Linear",
    date: "02/05/2025 16:00",
    icon: faStar,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Seção de Disciplinas Matriculadas */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Minhas Disciplinas Matriculadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrolledCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle className="text-lg">{course.name}</CardTitle>
                <CardDescription className="space-y-1">
                  <p>Código: {course.code}</p>
                  <p>{course.professor}</p>
                  <p>{course.schedule}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span
                  className={cn(
                    "text-sm px-3 py-1 rounded-full",
                    course.status === "Cursando" && "bg-blue-100 text-blue-800",
                    course.status === "Concluído" &&
                      "bg-green-100 text-green-800",
                    course.status === "Trancado" &&
                      "bg-yellow-100 text-yellow-800"
                  )}
                >
                  {course.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Seção de Calendário Acadêmico */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Calendário Acadêmico
        </h2>
        <Card>
          <CardContent className="p-6">
            <AcademicCalendar />
          </CardContent>
        </Card>
      </section>

      {/* Seção de Notas Recentes */}
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
                      Média: {grade.average}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <GradeEvolutionChart />
        </div>
      </section>

      {/* Seção de Notificações */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Notificações Recentes
        </h2>
        <Card>
          <ScrollArea className="h-[200px]">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b border-neutral-100 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={notification.icon}
                    className={cn(
                      "mt-1",
                      notification.type === "grade"
                        ? "text-yellow-500"
                        : "text-blue-500"
                    )}
                    width={18}
                  />
                  <div>
                    <p className="text-neutral-900 font-medium">
                      {notification.message}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {notification.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </Card>
      </section>
    </div>
  );
}
