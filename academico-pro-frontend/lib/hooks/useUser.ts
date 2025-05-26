import { useEffect, useState } from "react";
import { UserRoles } from "../schemas/auth";

interface User {
  email: string;
  id: string;
  name: string;
  role: UserRoles;
}

export const useUser = () => {
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

  return { user, loading };
};
