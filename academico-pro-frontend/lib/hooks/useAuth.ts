import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../api/auth";
import { LoginFormData } from "../schemas/auth";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const signIn = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await login(data);
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));

      const redirectPath = "/dashboard";
      router.push(redirectPath);
    } catch (err) {
      setError("Credenciais inválidas. Por favor, tente novamente.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    router.push("/");
  };

  return { signIn, signOut, isLoading, error };
};
