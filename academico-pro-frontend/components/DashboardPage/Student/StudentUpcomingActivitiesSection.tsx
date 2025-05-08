import { Card, CardContent } from "@/components/ui/card";
import { useStudentUpcomingActivitiesSection } from "./hooks/useStudentUpcomingActivitiesSection";
import { cn } from "@/lib/utils";

export const StudentUpcomingActivitiesSection = () => {
  const {
    activities,
    getDeadlineBadgeClass,
    getAssignmentStatusClass,
    getAssignmentStatusLabel,
  } = useStudentUpcomingActivitiesSection();

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-neutral-700">
        Próximas Atividades
      </h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="text-neutral-800 font-medium">
                      {activity.courseName} - {activity.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-neutral-600">
                        Prazo: {activity.dueDate}
                      </span>
                      <span
                        className={cn(
                          getDeadlineBadgeClass(activity.daysLeft),
                          "hidden md:block"
                        )}
                      >
                        {activity.daysLeft <= 0
                          ? "Vencido"
                          : `${activity.daysLeft} dia${
                              activity.daysLeft !== 1 ? "s" : ""
                            } restante${activity.daysLeft !== 1 ? "s" : ""}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col min-h-[80px] md:h-min justify-between">
                    <span className={getAssignmentStatusClass(activity.status)}>
                      {getAssignmentStatusLabel(activity.status)}
                    </span>
                    <span
                      className={cn(
                        getDeadlineBadgeClass(activity.daysLeft),
                        "block text-center md:hidden"
                      )}
                    >
                      {activity.daysLeft <= 0
                        ? "Vencido"
                        : `${activity.daysLeft} dia${
                            activity.daysLeft !== 1 ? "s" : ""
                          } restante${activity.daysLeft !== 1 ? "s" : ""}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
