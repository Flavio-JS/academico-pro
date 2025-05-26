import { useState } from "react";
import { mockUsers } from "../mocks/users.mocks";

export const useUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.cpf.includes(searchTerm);

    const matchesFilter =
      filter === "all" ||
      (filter === "active" && user.status === "Ativo") ||
      (filter === "inactive" && user.status === "Inativo") ||
      user.type.toLowerCase().includes(filter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  const toggleUserStatus = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Ativo" ? "Inativo" : "Ativo" }
          : user
      )
    );
  };

  return {
    users: filteredUsers,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    toggleUserStatus,
  };
};
