export type AcademicEvent = {
  date: Date;
  title: string;
  description: string;
  type: "holiday" | "exam" | "deadline" | "event";
};
