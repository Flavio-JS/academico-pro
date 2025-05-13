import { AdminDisciplinesPage } from "@/components/DisciplinesPage/Admin/AdminDisciplinesPage";
import { StudentDisciplinesPage } from "@/components/DisciplinesPage/Student/StudentDisciplinesPage";

export default function Disciplines() {
  const user = {
    role: "student",
  };

  return (
    <>
      {/* Aluno Disciplines */}
      {user.role === "student" && <StudentDisciplinesPage />}

      {/* Professor Dashboard */}

      {user.role === "admin" && <AdminDisciplinesPage />}
    </>
  );
}
