"use client";

import { AdminDisciplinesPage } from "@/components/DisciplinesPage/Admin/AdminDisciplinesPage";
import { StudentDisciplinesPage } from "@/components/DisciplinesPage/Student/StudentDisciplinesPage";
import { UserRoles } from "@/lib/schemas/auth";
import { useEffect, useState } from "react";

interface User {
  email: string;
  id: string;
  name: string;
  role: string;
}

export default function Disciplines() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pegar o usuário do localStorage quando o componente montar
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Erro ao parsear usuário do localStorage:", error);
      }
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    // Redirecionar para login ou mostrar mensagem
    return <div>Usuário não autenticado</div>;
  }

  console.log({ user });

  return (
    <>
      {/* Aluno Disciplines */}
      {user.role === UserRoles.STUDENT && <StudentDisciplinesPage />}

      {/* Professor Dashboard */}
      {/* {user.role === "professor" && <ProfessorDisciplinesPage />} */}

      {/* Admin Dashboard */}
      {user.role === UserRoles.ADMIN && <AdminDisciplinesPage />}
    </>
  );
}
