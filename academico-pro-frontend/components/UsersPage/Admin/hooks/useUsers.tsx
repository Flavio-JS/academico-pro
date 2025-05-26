import { useState, useEffect } from "react";
import { User } from "../types/User.types";
import { UserRoles } from "@/lib/schemas/auth";
import api from "@/lib/api/axios";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<
    "all" | "active" | "inactive" | UserRoles
  >("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/users", {
          params: {
            search: searchTerm,
            filter: filter === "all" ? undefined : filter,
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        setUsers(response.data.data);
        setTotalUsers(response.data.total);
      } catch (err) {
        setError("Failed to fetch users");
        console.error("Error fetching users:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm, filter, currentPage, itemsPerPage]);

  const toggleUserStatus = async (id: string) => {
    try {
      const user = users.find((u) => u.id === id);
      if (!user) return;

      const updatedUser = await api.patch(`/users/${id}`, {
        isActive: !user.isActive,
      });

      setUsers(users.map((u) => (u.id === id ? updatedUser.data : u)));
    } catch (err) {
      setError("Failed to update user status");
      console.error("Error updating user status:", err);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await api.delete(`/users/${id}`);
      setCurrentPage(1);
    } catch (err) {
      setError("Failed to delete user");
      console.error("Error deleting user:", err);
    }
  };

  return {
    users,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    toggleUserStatus,
    deleteUser,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalUsers,
  };
};
