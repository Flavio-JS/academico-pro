import {
  faBell,
  faStar,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";

// TYPES
export type EnrolledCourse = {
  id: number;
  name: string;
  code: string;
  professor: string;
  schedule: string;
  status: string;
};

export type RecentGrade = {
  course: string;
  grade: number;
  average: number;
};

export type Notification = {
  id: number;
  type: string;
  message: string;
  date: string;
  icon: IconDefinition;
};

export type CourseMaterial = {
  id: string;
  name: string;
  type: "pdf" | "link" | "book" | "video";
  url: string;
};

export type Assignment = {
  id: string;
  courseId: string;
  title: string;
  dueDate: Date;
  status: "pending" | "submitted" | "late" | "graded";
};

// MOCKS
export const enrolledCourses: EnrolledCourse[] = [
  {
    id: 1,
    name: "Cálculo I",
    code: "MAT101",
    professor: "João Silva",
    schedule: "Seg/Qua 08:00-10:00",
    status: "Cursando",
  },
  {
    id: 2,
    name: "Física I",
    code: "FIS101",
    professor: "Maria Santos",
    schedule: "Ter/Qui 10:00-12:00",
    status: "Concluído",
  },
  {
    id: 3,
    name: "Álgebra Linear",
    code: "MAT201",
    professor: "Carlos Mendes",
    schedule: "Seg/Sex 14:00-16:00",
    status: "Cursando",
  },
  {
    id: 4,
    name: "Programação I",
    code: "INF101",
    professor: "Rafael Costa",
    schedule: "Qua/Sex 10:00-12:00",
    status: "Cursando",
  },
  {
    id: 5,
    name: "Eng., Cid. e Cultura",
    code: "ENG100",
    professor: "Fernanda Oliveira",
    schedule: "Sex 08:00-10:00",
    status: "Cursando",
  },
  {
    id: 6,
    name: "Arquitetura de Software",
    code: "INF305",
    professor: "Eduardo Braga",
    schedule: "Ter 14:00-17:00",
    status: "Cursando",
  },
];

export const recentGrades: RecentGrade[] = [
  { course: "Álgebra Linear", grade: 6.5, average: 6.8 },
  { course: "Programação I", grade: 7.0, average: 7.3 },
  { course: "Cálculo I", grade: 6.8, average: 6.9 },
  { course: "Física I", grade: 7.4, average: 7.2 },
  { course: "Arquitetura de Software", grade: 8.5, average: 8.4 },
];

export const notifications: Notification[] = [
  {
    id: 1,
    type: "activity",
    message: "Lista de exercícios 2 disponível em Álgebra Linear",
    date: "2025-05-05 10:15",
    icon: faBell,
  },
  {
    id: 2,
    type: "grade",
    message: "Nota de Química Geral foi publicada",
    date: "2025-05-04 19:45",
    icon: faStar,
  },
  {
    id: 3,
    type: "activity",
    message: "Nova aula gravada em Programação I",
    date: "2025-05-03 09:30",
    icon: faBell,
  },
  {
    id: 4,
    type: "grade",
    message: "Nota final lançada em Álgebra Linear",
    date: "2025-05-02 16:00",
    icon: faStar,
  },
];

export const courseMaterials: Record<string, CourseMaterial[]> = {
  MAT101: [
    { id: "1", name: "Apostila de Cálculo", type: "pdf", url: "#" },
    { id: "2", name: "Site de Referência", type: "link", url: "#" },
    { id: "3", name: "Livro Texto", type: "book", url: "#" },
  ],
  FIS101: [
    { id: "4", name: "Vídeo Aulas", type: "video", url: "#" },
    { id: "5", name: "Exercícios Resolvidos", type: "pdf", url: "#" },
  ],
  MAT201: [
    { id: "6", name: "Lista de Exercícios 2", type: "pdf", url: "#" },
    { id: "7", name: "Livro de Álgebra", type: "book", url: "#" },
  ],
};

const today = new Date();

export const upcomingAssignments: Assignment[] = [
  {
    id: "1",
    courseId: "MAT101",
    title: "Trabalho de Derivadas",
    dueDate: new Date(today.getFullYear(), today.getMonth(), 15),
    status: "pending",
  },
  {
    id: "2",
    courseId: "FIS101",
    title: "Tarefa 1 - Cinemática",
    dueDate: new Date(today.getFullYear(), today.getMonth(), 18),
    status: "pending",
  },
  {
    id: "3",
    courseId: "INF101",
    title: "Projeto Final",
    dueDate: new Date(today.getFullYear(), today.getMonth() - 1, 22),
    status: "submitted",
  },
];
