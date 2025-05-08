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
  { href: "/dashboard", icon: faHouse, label: "Dashboard" },
  { href: "/usuarios", icon: faUsers, label: "Usuários" },
  { href: "/disciplinas", icon: faBook, label: "Disciplinas" },
  { href: "/matriculas", icon: faGraduationCap, label: "Matriculas" },
  { href: "/notas", icon: faChartSimple, label: "Notas" },
  { href: "/boletim", icon: faFileLines, label: "Boletim" },
  { href: "/notificacoes", icon: faBell, label: "Notificações" },
  { href: "/perfil", icon: faUser, label: "Perfil" },
];
