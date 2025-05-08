import { EnrolledCourse } from "../types/EnrolledCourse.types";

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
