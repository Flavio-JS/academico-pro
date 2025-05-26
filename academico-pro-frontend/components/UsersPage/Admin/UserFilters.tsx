import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const UserFilters = ({
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filter: string;
  onFilterChange: (filter: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <Input
          type="text"
          placeholder="Buscar por nome, email ou CPF"
          className="pl-10 w-full"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => onFilterChange("all")}
        >
          Todos
        </Button>
        <Button
          variant={filter === "aluno" ? "default" : "outline"}
          onClick={() => onFilterChange("aluno")}
        >
          Alunos
        </Button>
        <Button
          variant={filter === "professor" ? "default" : "outline"}
          onClick={() => onFilterChange("professor")}
        >
          Professores
        </Button>
        <Button
          variant={filter === "administrador" ? "default" : "outline"}
          onClick={() => onFilterChange("administrador")}
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
