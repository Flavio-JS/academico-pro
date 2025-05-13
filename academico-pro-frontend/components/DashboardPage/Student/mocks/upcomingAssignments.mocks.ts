import { Assignment } from "../types/Assignment.types";

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
  {
    id: "4",
    courseId: "MAT201",
    title: "Tarefa 2 - Algebra Linear",
    dueDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8),
    status: "late",
  },
];
