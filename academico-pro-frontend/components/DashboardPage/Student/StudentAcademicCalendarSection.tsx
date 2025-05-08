import { Card, CardContent } from "@/components/ui/card";
import { AcademicCalendar } from "./AcademicCalendar";

export const StudentAcademicCalendarSection = () => {
  return (
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
  );
};
