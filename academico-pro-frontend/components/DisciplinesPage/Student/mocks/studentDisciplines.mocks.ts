import { StudentDiscipline } from "../types/StudentDiscipline.types";

export const studentDisciplines: StudentDiscipline[] = [
  {
    id: 1,
    name: "Cálculo I",
    hours: "60h",
    professor: "João Silva",
    schedule: "Seg/Qua 19:00-22:00",
    location: "Sala 302",
    syllabus:
      "Introdução aos conceitos de limites, derivadas e integrais. Aplicações em problemas de física e engenharia. Tópicos incluem: funções, limites, continuidade, derivadas, regras de derivação, aplicações de derivadas, introdução à integração.",
    materials: [
      {
        id: 1,
        name: "Apostila Completa",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-10",
      },
      {
        id: 2,
        name: "Exercícios Resolvidos",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-15",
      },
      {
        id: 3,
        name: "Playlist de Aulas",
        type: "video",
        url: "#",
        uploadedAt: "2025-03-05",
      },
    ],
  },
  {
    id: 2,
    name: "Física I",
    hours: "60h",
    professor: "Maria Santos",
    schedule: "Ter/Qui 10:00-12:00",
    location: "Lab Física 1",
    syllabus:
      "Estudo da mecânica clássica: cinemática, leis de Newton, trabalho e energia, conservação de momento linear e colisões. Aplicações práticas em laboratório.",
    materials: [
      {
        id: 4,
        name: "Vídeo Aulas",
        type: "video",
        url: "#",
        uploadedAt: "2025-03-05",
      },
      {
        id: 5,
        name: "Relatórios de Laboratório",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-12",
      },
      {
        id: 6,
        name: "Simulador de Movimento",
        type: "document",
        url: "#",
        uploadedAt: "2025-03-20",
      },
    ],
  },
  {
    id: 3,
    name: "Álgebra Linear",
    hours: "90h",
    professor: "Carlos Mendes",
    schedule: "Seg/Sex 14:00-16:00",
    location: "Sala 205",
    syllabus:
      "Espaços vetoriais, operações com matrizes, determinantes, sistemas lineares, autovalores e autovetores. Aplicações em computação, física e estatística.",
    materials: [
      {
        id: 7,
        name: "Lista de Exercícios - Matrizes",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-08",
      },
      {
        id: 8,
        name: "Slides das Aulas",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-10",
      },
      {
        id: 9,
        name: "Aula Gravada: Sistemas Lineares",
        type: "video",
        url: "#",
        uploadedAt: "2025-03-14",
      },
    ],
  },
  {
    id: 4,
    name: "Estruturas de Dados",
    hours: "75h",
    professor: "Ana Paula Ribeiro",
    schedule: "Ter/Qui 14:00-15:30",
    location: "Sala 101",
    syllabus:
      "Listas, pilhas, filas, árvores e grafos. Implementações em linguagem de programação. Análise de complexidade e desempenho.",
    materials: [
      {
        id: 10,
        name: "Código Base (GitHub)",
        type: "link",
        url: "#",
        uploadedAt: "2025-03-11",
      },
      {
        id: 11,
        name: "Resumo de Estruturas",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-18",
      },
      {
        id: 12,
        name: "Vídeo: Árvores Binárias",
        type: "video",
        url: "#",
        uploadedAt: "2025-03-20",
      },
    ],
  },
  {
    id: 5,
    name: "Engenharia de Software",
    hours: "60h",
    professor: "Ricardo Lopes",
    schedule: "Qua/Sex 08:00-10:00",
    location: "Sala 303",
    syllabus:
      "Ciclo de vida de software, metodologias ágeis, engenharia de requisitos, modelagem UML, testes de software e manutenção.",
    materials: [
      {
        id: 13,
        name: "Modelo de Documento de Requisitos",
        type: "document",
        url: "#",
        uploadedAt: "2025-03-09",
      },
      {
        id: 14,
        name: "Apresentação SCRUM",
        type: "pdf",
        url: "#",
        uploadedAt: "2025-03-16",
      },
      {
        id: 15,
        name: "Simulador de Kanban",
        type: "document",
        url: "#",
        uploadedAt: "2025-03-22",
      },
    ],
  },
];
