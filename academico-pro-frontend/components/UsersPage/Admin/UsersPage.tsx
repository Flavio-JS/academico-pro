"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useUsers } from "./hooks/useUsers";
import { UserHeader } from "./UserHeader";
import { UserFilters } from "./UserFilters";
import { UsersTable } from "./UsersTable";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { User } from "./types/User.types";

export const UsersPage = () => {
  const {
    users,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    toggleUserStatus,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalUsers,
  } = useUsers();

  const handleAddUser = () => {
    console.log("Adicionar novo usuário");
    setCurrentPage(1);
  };

  const handleUserUpdated = (updatedUser: User) => {
    console.log("Usuário atualizado:", updatedUser);
    setCurrentPage(1);
  };

  const handleUserDeleted = (userId: string) => {
    console.log("Usuário excluído:", userId);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalUsers);

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col h-full">
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

      <Card className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 min-h-0 overflow-auto">
          <CardContent className="p-0 h-full">
            <div className="min-w-[900px] h-full">
              <UsersTable
                users={users}
                onUserUpdated={handleUserUpdated}
                onUserDeleted={handleUserDeleted}
                onToggleStatus={toggleUserStatus}
              />
            </div>
          </CardContent>
        </div>

        <CardContent className="flex items-center justify-between px-6 py-4 border-t">
          <span className="text-sm text-neutral-600">
            Mostrando {startItem}-{endItem} de {totalUsers} resultados
          </span>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      isActive={pageNum === currentPage}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </div>
  );
};
