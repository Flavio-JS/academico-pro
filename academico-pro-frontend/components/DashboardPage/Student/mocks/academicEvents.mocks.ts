import { AcademicEvent } from "../types/AcademicEvent.types";

const toDay = new Date();

export const academicEvents: AcademicEvent[] = [
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 3),
    title: "Último dia para trancamento",
    description: "Prazo final para trancamento de disciplinas",
    type: "deadline",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 7),
    title: "Semana de Provas",
    description: "Período de avaliações do bimestre",
    type: "exam",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 14),
    title: "Feriado - Dia de Algum feriado",
    description: "Não haverá aula",
    type: "holiday",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 14),
    title: "Deadline",
    description: "Prazo final para trancamento de disciplinas",
    type: "deadline",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 14),
    title: "Evento",
    description: "Descrição do evento",
    type: "event",
  },
];
