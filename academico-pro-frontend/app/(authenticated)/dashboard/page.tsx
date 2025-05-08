"use client";

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
import { BookOpen, FileText, LinkIcon, Video } from "lucide-react";
import Link from "next/link";
import {
  courseMaterials,
  enrolledCourses,
  notifications,
  recentGrades,
  upcomingAssignments,
} from "@/mocks/dashboard-page.mock";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Seção de Disciplinas Matriculadas com Links Rápidos */}
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
              <CardContent className="space-y-3">
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

                {/* Links rápidos para materiais */}
                <div className="mt-2">
                  <h4 className="text-sm font-medium mb-1">Materiais:</h4>
                  <div className="flex flex-wrap gap-2">
                    {courseMaterials[course.code]?.map((material) => (
                      <Link
                        key={material.id}
                        href={material.url}
                        className="text-xs px-2 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-md flex items-center gap-1"
                        target="_blank"
                      >
                        {material.type === "pdf" && <FileText size={14} />}
                        {material.type === "link" && <LinkIcon size={14} />}
                        {material.type === "book" && <BookOpen size={14} />}
                        {material.type === "video" && <Video size={14} />}
                        {material.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Seção de Próximas Atividades/Tarefas */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Próximas Atividades
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => {
                const course = enrolledCourses.find(
                  (c) => c.code === assignment.courseId
                );
                const daysLeft = Math.ceil(
                  (assignment.dueDate.getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                );

                return (
                  <div
                    key={assignment.id}
                    className="pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-neutral-800 font-medium">
                          {course?.name || assignment.courseId} -{" "}
                          {assignment.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-neutral-600">
                            Prazo: {assignment.dueDate.toLocaleDateString()}
                          </span>
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full",
                              daysLeft <= 3
                                ? "bg-red-100 text-red-800"
                                : daysLeft <= 7
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            )}
                          >
                            {daysLeft <= 0
                              ? "Vencido"
                              : `${daysLeft} dia${
                                  daysLeft !== 1 ? "s" : ""
                                } restante${daysLeft !== 1 ? "s" : ""}`}
                          </span>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "text-sm px-3 py-1 rounded-full whitespace-nowrap",
                          assignment.status === "pending" &&
                            "bg-yellow-100 text-yellow-800",
                          assignment.status === "submitted" &&
                            "bg-blue-100 text-blue-800",
                          assignment.status === "late" &&
                            "bg-red-100 text-red-800",
                          assignment.status === "graded" &&
                            "bg-green-100 text-green-800"
                        )}
                      >
                        {assignment.status === "pending"
                          ? "Pendente"
                          : assignment.status === "submitted"
                          ? "Enviado"
                          : assignment.status === "late"
                          ? "Atrasado"
                          : "Avaliado"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
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
