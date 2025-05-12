import { Discipline } from "../types/Discipline.types";
import { disciplines } from "../mocks/disciplines.mocks";

export function useDisciplines() {
  const getDisciplines = (): Discipline[] => {
    return disciplines;
  };

  return {
    getDisciplines,
  };
}
