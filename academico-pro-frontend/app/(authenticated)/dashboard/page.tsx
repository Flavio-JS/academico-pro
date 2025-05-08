import { StudentDashboard } from "@/components/DashboardPage/Student/StudentDashboard";

export default function Dashboard() {
  const user = {
    role: "student",
  };

  return (
    <>
      {user.role === "student" && <StudentDashboard />}

      {/* Professor Dashboard */}

      {/* Admin Dashboard */}
    </>
  );
}
