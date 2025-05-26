// src/lib/hooks/useAuthCheck.ts
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export const useAuthCheck = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");

      if (!token) {
        router.push("/");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp && decoded.exp < currentTime) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user");
          router.push("/");
        }
      } catch {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        router.push("/");
      }
    };

    checkAuth();
  }, [router, pathname]);
};
