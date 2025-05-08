import { StudentDisciplineSection } from "./StudentDisciplineSection";
import { StudentUpcomingActivitiesSection } from "./StudentUpcomingActivitiesSection";
import { StudentAcademicCalendarSection } from "./StudentAcademicCalendarSection";
import { StudentGradesSection } from "./StudentGradesSection";
import { StudentNotificationsSection } from "./StudentNotificationsSection";

export const StudentDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Seção de Disciplinas Matriculadas com Links Rápidos */}
      <StudentDisciplineSection />

      {/* Seção de Próximas Atividades/Tarefas */}
      <StudentUpcomingActivitiesSection />

      {/* Seção de Calendário Acadêmico */}
      <StudentAcademicCalendarSection />

      {/* Seção de Notas Recentes */}
      <StudentGradesSection />

      {/* Seção de Notificações */}
      <StudentNotificationsSection />
    </div>
  );
};
