"use client";

import { AdminDisciplinesPage } from "@/components/DisciplinesPage/Admin/AdminDisciplinesPage";
import { StudentDisciplinesPage } from "@/components/DisciplinesPage/Student/StudentDisciplinesPage";
import { useUser } from "@/lib/hooks/useUser";
import { UserRoles } from "@/lib/schemas/auth";

export default function Disciplines() {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    // Redirecionar para login ou mostrar mensagem
    return <div>Usuário não autenticado</div>;
  }

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
