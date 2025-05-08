import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { Notification } from "../types/Notification.type";

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
