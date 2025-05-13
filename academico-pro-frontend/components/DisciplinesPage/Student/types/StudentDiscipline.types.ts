export type StudentDiscipline = {
  id: number;
  name: string;
  hours: string;
  professor: string;
  schedule: string;
  location: string;
  syllabus: string;
  materials: DisciplineMaterial[];
};

export type DisciplineMaterial = {
  id: number;
  name: string;
  type: "pdf" | "video" | "link" | "document";
  url: string;
  uploadedAt: string;
};
