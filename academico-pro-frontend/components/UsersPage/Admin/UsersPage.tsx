"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUsers } from "./hooks/useUsers";
import { UserHeader } from "./UserHeader";
import { UserFilters } from "./UserFilters";
import { UsersTable } from "./UsersTable";

export const UsersPage = () => {
  const {
    users,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    toggleUserStatus,
  } = useUsers();

  const handleAddUser = () => {
    // Lógica para adicionar novo usuário
    console.log("Adicionar novo usuário");
  };

  const handleViewUser = (id: number) => {
    // Lógica para visualizar usuário
    console.log("Visualizar usuário", id);
  };

  const handleEditUser = (id: number) => {
    // Lógica para editar usuário
    console.log("Editar usuário", id);
  };

  return (
    <div className="flex-1 bg-neutral-50 overflow-auto">
      <UserHeader onAddUser={handleAddUser} />

      <Card className="mb-6">
        <CardContent className="p-6">
          <UserFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filter={filter}
            onFilterChange={setFilter}
          />
        </CardContent>
      </Card>

      <Card>
        <UsersTable
          users={users}
          onView={handleViewUser}
          onEdit={handleEditUser}
          onToggleStatus={toggleUserStatus}
        />

        <CardContent className="flex items-center justify-between px-6 py-4 border-t">
          <span className="text-sm text-neutral-600">
            Mostrando 1-{users.length} de {users.length} resultados
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Anterior
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Próxima
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
