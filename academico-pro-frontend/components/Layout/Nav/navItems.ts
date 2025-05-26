import { UserRoles } from "@/lib/schemas/auth";
import {
  faBell,
  faBook,
  faChartSimple,
  faFileLines,
  faGraduationCap,
  faHouse,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  {
    href: "/dashboard",
    icon: faHouse,
    label: "Dashboard",
    roles: [UserRoles.STUDENT, UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
  {
    href: "/usuarios",
    icon: faUsers,
    label: "Usuários",
    roles: [UserRoles.ADMIN],
  },
  {
    href: "/disciplinas",
    icon: faBook,
    label: "Disciplinas",
    roles: [UserRoles.STUDENT, UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
  {
    href: "/matriculas",
    icon: faGraduationCap,
    label: "Matriculas",
    roles: [UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
  {
    href: "/notas",
    icon: faChartSimple,
    label: "Notas",
    roles: [UserRoles.STUDENT, UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
  {
    href: "/boletim",
    icon: faFileLines,
    label: "Boletim",
    roles: [UserRoles.STUDENT, UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
  {
    href: "/notificacoes",
    icon: faBell,
    label: "Notificações",
    roles: [UserRoles.STUDENT, UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
  {
    href: "/perfil",
    icon: faUser,
    label: "Perfil",
    roles: [UserRoles.STUDENT, UserRoles.ADMIN, UserRoles.PROFESSOR],
  },
];
