import { CourseMaterial } from "../types/CourseMaterial.types";

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
