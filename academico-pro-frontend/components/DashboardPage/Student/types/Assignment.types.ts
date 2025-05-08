export type Assignment = {
  id: string;
  courseId: string;
  title: string;
  dueDate: Date;
  status: "pending" | "submitted" | "late" | "graded";
};
