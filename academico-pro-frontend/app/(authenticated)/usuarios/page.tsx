import { UsersPage } from "@/components/UsersPage/Admin/UsersPage";

export default function Users() {
  const user = {
    role: "admin",
  };

  return (
    <>
      {/* Aluno Dashboard */}

      {/* Professor Dashboard */}

      {/* Admin Dashboard */}
      {user.role === "admin" && <UsersPage />}
    </>
  );
}
