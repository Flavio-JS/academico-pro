import { StudentDiscipline } from "../types/StudentDiscipline.types";
import { studentDisciplines } from "../mocks/studentDisciplines.mocks";

export function useStudentDisciplines() {
  const getDisciplines = (): StudentDiscipline[] => {
    return studentDisciplines;
  };

  return {
    disciplines: getDisciplines(),
  };
}
