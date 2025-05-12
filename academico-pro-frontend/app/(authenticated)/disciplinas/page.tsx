import { DisciplinesPage } from "@/components/DisciplinesPage/Admin/DisciplinesPage";

export default function Disciplines() {
  const user = {
    role: "admin",
  };

  return (
    <>
      {/* Aluno Disciplines */}

      {/* Professor Dashboard */}

      {user.role === "admin" && <DisciplinesPage />}
    </>
  );
}
