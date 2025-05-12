export type Discipline = {
  id: number;
  code: string;
  name: string;
  hours: string;
  professor: string;
  students: number;
  status: string;
  department: string;
};

export type DisciplineFormData = {
  name: string;
  code: string;
  hours: string;
  department: string;
  professor: string;
  prerequisites: string[];
  syllabus: string;
  status: boolean;
};
