import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserRoles } from "@/lib/schemas/auth";
import { useState, useEffect } from "react";

type FilterType = "all" | "active" | "inactive" | UserRoles;

export const UserFilters = ({
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Atualiza o termo local quando o termo externo muda (ex: ao limpar filtros)
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    onSearchChange(localSearchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <Input
            type="text"
            placeholder="Buscar por nome, email ou CPF"
            className="pl-10 w-full"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button onClick={handleSearch} variant="outline">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Pesquisar
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => onFilterChange("all")}
        >
          Todos
        </Button>
        <Button
          variant={filter === "STUDENT" ? "default" : "outline"}
          onClick={() => onFilterChange(UserRoles.STUDENT)}
        >
          Alunos
        </Button>
        <Button
          variant={filter === "PROFESSOR" ? "default" : "outline"}
          onClick={() => onFilterChange(UserRoles.PROFESSOR)}
        >
          Professores
        </Button>
        <Button
          variant={filter === "ADMIN" ? "default" : "outline"}
          onClick={() => onFilterChange(UserRoles.ADMIN)}
        >
          Administradores
        </Button>
        <Button
          variant={filter === "active" ? "default" : "outline"}
          onClick={() => onFilterChange("active")}
        >
          Ativos
        </Button>
        <Button
          variant={filter === "inactive" ? "default" : "outline"}
          onClick={() => onFilterChange("inactive")}
        >
          Inativos
        </Button>
      </div>
    </div>
  );
};
